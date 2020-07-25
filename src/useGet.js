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

      // add a case where persistData is false and preferStore is true
      // if store and state is equal, then we should do nothing.
      // don't call the API
      if (!persistData && preferStore && typeof storeValue !== 'undefined' && storeValue !== null && isEqual) {
        console.log(`${key}: persistData is false and preferStore is true. isEqual true. state should not be changed. CONDITION 1`);

        return;
      } else if (!persistData && preferStore && typeof storeValue !== 'undefined' && storeValue !== null && !isEqual) {
        console.log(`${key}: persistData is false and preferStore is true. isEqual false. state should not be changed to reflect store value. CONDITION 2`);

        outputState = storeValue;
        await dispatch(await model.updateState(storeValue, type));
        return;
      }

      if (persistData && preferStore && typeof storeValue !== 'undefined' && storeValue !== null && !isEqual) {
        // We already have a value in the store and it doesn't match state, so
        // return the value.
        console.log(`${key}: persistData is true and preferStore is true and values are not equal. load data from store. CONDITION 3`);

        outputState = storeValue;
        await dispatch(await model.updateState(storeValue, type));
        return;
      } else if (persistData && progressiveLoading && typeof storeValue !== 'undefined' && storeValue !== null && !isEqual) {
        // If progressiveLoading is true, then set the data with the current store
        // value while we wait for a response from the API.
        console.log(`${key}: persist Data is true and progressiveLoading is true. value in store. are not equal. load state from store. CONDITION 4`);

        outputState = storeValue;
        await dispatch(await model.updateState(storeValue, type));
      }

      // If there is no getPath, assume it's state/store only data.
      if (!model.getPath) {
        if (persistData && !isEqual) {
          console.log(`${key}: no getPath and persistData is true. not equal. should load from store. CONDITION 5`);

          outputState = storeValue;
          await dispatch(await model.updateState(storeValue, type));
        }

        console.log(`${key}: no getPath and not persisting data or store and state are equal. do nothing. CONDITION 6`);

        return;
      }

      // If syncAfterTimeElapsed is true, verify that the time elapsed
      // exceeds the threshold before continuing.
      if (syncAfterTimeElapsed) {
        console.log(`${key}: syncAfterTimeElapsed is true. sync if time has elapsed. CONDITION 7`);

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
          await dispatch(await model.updateState(true, `${model.type}_IS_LOADING`));
        }
      }

      const payload = {
        path: getPath,
        query: params,
      };

      try {
        const response = await request(payload, model, methods.GET);

        console.log(`${key}: calling API`);

        if (response) {
          outputResponse = response;

          // If isSync, do a deepCompare of the result with what's in state, or state and store.
          if (isSync || (progressiveLoading && persistData && typeof storeValue !== 'undefined' && storeValue !== null) || !persistData) {
            // If persistData is true, then compare against the stored value, otherwise just
            // compare against the value in state.
            const valueToCompare = persistData ? storeValue : stateValue;
            const isEqual = Compare.deepCompare(response.data, valueToCompare).isEqual;

            if (isEqual) {
              return;
            }
          }

          if (persistData) {
            // Update storage.
            await Store.set(model, response.data);
          }

          // Set value in state.
          RLean.model = model;
          outputState = response.data;
          await dispatch(await model.updateState(response.data, type));
          await dispatch(await model.updateState(false, `${model.type}_IS_LOADING`));
          await dispatch(await model.updateState(new Date(), `${model.type}_LAST_UPDATED`));
        }
      } catch (err) {
        // Set isLoading to false when there is an error
        if (getPath) {
          await dispatch(await model.updateState(false, `${model.type}_IS_LOADING`));
          await dispatch(await model.updateState(err, `${model.type}_ERROR`));
        }
      }
    }

    if (!isSync) {
      await callApi();

      // Execute optional callback
      if (callback) {
        callback(outputState, outputResponse);
      }
    }

    if (typeof syncInterval === 'number') {
      setTimeout(async () => {
        // This should be done in a web worker.
        await callApi();

        // Execute optional callback
        if (callback) {
          callback(outputState, outputResponse);
        }

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
