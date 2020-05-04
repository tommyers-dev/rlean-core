import { useEffect, useRef } from 'react';
import { Compare, deepCopy } from '@rlean/utils';
import { request, methods } from './_internal';
import { useStateValue, Store, RLean } from './';
import { getOptions } from './_internal/getOptions';

/**
 * @param {Object} model
 * @param {string} type
 * @param {Function} dispatch
 * @param {Function} callback
 */
const get = async (options, lastUpdated, state, dispatch, callback) => {
  // TODO: get keeps growing in complexity. Abstract out some of the logic.
  async function fetchData(isSync = false) {
    const { model, params, type } = getOptions(options);
    const persistData = model.persistData;
    const preferStore = model.preferStore;
    const progressiveLoading = model.progressiveLoading;
    const syncInterval = model.syncInterval;
    const syncAfterTimeElapsed = model.syncAfterTimeElapsed;
    const getPath = model.getPath;
    const key = model.key;
    const storeValue = await Store.get(model);
    const stateValue = state[key];
    let outputState = stateValue;
    let outputResponse = null;
    RLean.model = model;

    async function callApi() {
      const isEqual = Compare.deepCompare(storeValue, stateValue).isEqual;

      if (persistData && preferStore && typeof storeValue !== 'undefined' && storeValue !== null && !isEqual) {
        // We already have a value in the store and it doesn't match state, so
        // return the value.
        outputState = storeValue;
        await dispatch(await model.updateState(storeValue, type));
        return;
      } else if (persistData && progressiveLoading && typeof storeValue !== 'undefined' && storeValue !== null && !isEqual) {
        // If progressiveLoading is true, then set the data with the current store
        // value while we wait for a response from the API.
        outputState = storeValue;
        await dispatch(await model.updateState(storeValue, type));
      }

      // If there is no getPath, assume it's state/store only data.
      if (!model.getPath) {
        if (persistData && !isEqual) {
          outputState = storeValue;
          await dispatch(await model.updateState(storeValue, type));
        }

        return;
      }

      // If syncAfterTimeElapsed is true, verify that the time elapsed
      // exceeds the threshold before continuing.
      if (syncAfterTimeElapsed) {
        const timestamp = lastUpdated[key];
        const now = new Date();
        const timeElapsed = timestamp + syncAfterTimeElapsed;

        // Don't make API call.
        if (timeElapsed < now && storeValue) {
          outputState = storeValue;
          await dispatch(await model.updateState(storeValue, type));

          return;
        }
      }

      // Update isLoading object if necessary. Should not update if progressiveLoading
      // is true and we have a value in the store.
      if (!isSync && (!progressiveLoading || storeValue === 'undefined' || storeValue === null)) {
        if (getPath) {
          // RLean.model = oIsLoading;
          // await dispatch(await oIsLoading.updateState(true, `SET_IS_LOADING_${key.toUpperCase()}`));
          await dispatch(await model.updateState(true, `${model.type}_IS_LOADING`));
        }
      }

      const payload = {
        path: getPath,
        query: params,
      };

      try {
        const response = await request(payload, model, methods.GET);

        if (response) {
          outputResponse = response;

          // If isSync, do a deepCompare of the result with what's in state, or state and store.
          if (isSync || (progressiveLoading && persistData && typeof storeValue !== 'undefined' && storeValue !== null) || !persistData) {
            // If persistData is true, then compare against the stored value, otherwise just
            // compare against the value in state.
            const valueToCompare = persistData ? storeValue : stateValue;
            const isEqual = Compare.deepCompare(response.data, valueToCompare).isEqual;

            if (isEqual) return;
          }

          /*if (persistData) {
            // Update storage.
            await Store.set(model, response.data);
          }*/

          // Set value in state.
          RLean.model = model;
          outputState = response.data;
          await dispatch(await model.updateState(response.data, type));
          await dispatch(await model.updateState(false, `${model.type}_IS_LOADING`));
          await dispatch(await model.updateState(new Date(), `${model.type}_LAST_UPDATED`));

          // Update isLoading object if necessary. Should not update if progressiveLoading
          // is true and we have a value in the store.
          // if (!isSync && (!progressiveLoading || typeof storeValue === 'undefined' || storeValue === null)) {
          //   if (getPath) {
          //     // RLean.model = oIsLoading;
          //     // await dispatch(await oIsLoading.updateState(false, `SET_IS_LOADING_${key.toUpperCase()}`));
          //     await dispatch(await model.updateState(false, `${model.type}_IS_LOADING`));
          //   }
          // }

          // Update lastUpdated flag
          // if (getPath) {
          //   // RLean.model = oLastUpdated;
          //   // await dispatch(await oLastUpdated.updateState(new Date(), `SET_LAST_UPDATED_${key.toUpperCase()}`));
          //   await dispatch(await model.updateState(new Date(), `${model.type}_LAST_UPDATED`));
          // }

          // await Store.set(lastUpdatedCopy, lastUpdatedCopy);
        }
      } catch (err) {
        // Set isLoading to false when there is an error
        if (getPath) {
          // RLean.model = oIsLoading;
          // await dispatch(await oIsLoading.updateState(false, `SET_IS_LOADING_${key.toUpperCase()}`));
          await dispatch(await model.updateState(false, `${model.type}_IS_LOADING`));
          await dispatch(await model.updateState(err, `${model.type}_ERROR`));
        }
      }
    }

    if (!isSync) {
      await callApi();

      // Execute optional callback
      if (callback) callback(outputState, outputResponse);
    }

    if (typeof syncInterval === 'number') {
      setTimeout(async () => {
        // This should be done in a web worker.
        await callApi();

        // Execute optional callback
        if (callback) callback(outputState, outputResponse);

        // Restart the sync.
        await fetchData(true);
      }, syncInterval);
    }
  }

  fetchData();
};

/**
 * The useGet custom hook is what populates all of your state objects based on whatever
 * attributes are set in your model and can be called from any component that relies on
 * that state object. A dependency will be created for the param values, so if the params
 * change, the custom hook will fire again. If no params are set, the custom hook will fire
 * only once.
 * @constructor
 * @param {Object} options An object containing an instance of the model whose state needs to be populated, an optional params object if an API call needs to be made, and an optional type if the model has multiple types.
 * @param {Function} [callback=null] Optional callback function to be executed after useGet has executed its logic.
 * @example
 *
 * useGet({ model: Model });
 *
 * useGet({ model: Model, params: {id: someStateValue.id}, type: Model.types.SET_VALUE }, callback);
 */
export default function useGet(options, callback) {
  const [{ ...state }, dispatch] = useStateValue();
  const { lastUpdated } = state;
  const lastUpdatedRef = useRef();
  let dependencies = [];

  lastUpdatedRef.current = lastUpdated;

  if (typeof options === 'undefined') {
    return [
      (options, callback) => {
        get(options, deepCopy(lastUpdatedRef.current), state, dispatch, callback);
      },
    ];
  }

  if (options.params) {
    dependencies = Object.values(options.params);
  }

  useEffect(() => {
    get(options, deepCopy(lastUpdatedRef.current), state, dispatch, callback);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
