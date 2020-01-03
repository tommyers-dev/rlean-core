import { useEffect, useRef } from 'react';
import { Compare, deepCopy } from '@react-ent/utils';
import { request, methods, IsLoading, LastUpdated } from './_internal';
import { useStateValue, Store } from './';

/**
 * Custom hook to populate the model's state from an API and/or
 * from the store.
 *
 * @param {Object} [model={}] An instance of the model whose state needs to be populated.
 * @param {Object} [params={}] Optional params object if an API call needs to be made.
 * @param {string} [type=''] An type if the model has multiple types.
 * @example
 *
 * useGet(new Model());
 *
 * useGet(new Model(), {id: someStateValue.id}, new Model().types.SET_VALUE);
 */
export default async function useGet(model, params, type) {
  const [{ ...state }, dispatch] = useStateValue();

  const { isLoading, lastUpdated } = state;

  const isLoadingRef = useRef();
  const lastUpdatedRef = useRef();

  isLoadingRef.current = isLoading;
  lastUpdatedRef.current = lastUpdated;

  let dependencies = [];

  if (params) {
    dependencies = Object.values(params);
  }

  useEffect(() => {
    async function fetchData(isSync = false) {
      const persistData = model.persistData;
      const preferStore = model.preferStore;
      const progressiveLoading = model.progressiveLoading;
      const syncInterval = model.syncInterval;
      const syncAfterTimeElapsed = model.syncAfterTimeElapsed;
      const getPath = model.getPath;
      const key = Store.getKeys(model);
      const storeValue = await Store.get(model);
      const stateValue = state[key];
      const oIsLoading = new IsLoading();
      const oLastUpdated = new LastUpdated();

      async function callApi() {
        const isEqual = Compare.deepCompare(storeValue, stateValue).isEqual;

        if (persistData && preferStore && typeof storeValue !== 'undefined' && storeValue !== null && !isEqual) {
          // We already have a value in the store and it doesn't match state, so
          // return the value.
          await dispatch(await model.updateState(storeValue));
          return;
        } else if (persistData && progressiveLoading && typeof storeValue !== 'undefined' && storeValue !== null && !isEqual) {
          // If progressiveLoading is true, then set the data with the current store
          // value while we wait for a response from the API.
          await dispatch(await model.updateState(storeValue));
        }

        // If there is no getPath, assume it's state/store only data.
        if (!model.getPath) {
          if (persistData && !isEqual) {
            await dispatch(await model.updateState(storeValue));
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
            await dispatch(await model.updateState(storeValue));

            return;
          }
        }

        // Update isLoading object if necessary. Should not update if progressiveLoading
        // is true and we have a value in the store.
        if (!isSync && (!progressiveLoading || storeValue === 'undefined' || storeValue === null)) {
          let isLoadingCopy = deepCopy(isLoadingRef.current);
          isLoadingCopy[key] = true;
          await dispatch(await oIsLoading.updateState(Object.assign({}, isLoadingCopy)));
        }

        const payload = {
          path: getPath,
          query: params
        };

        try {
          const response = await request(payload, model, methods.GET);

          if (response) {
            // If isSync, do a deepCompare of the result with what's in state, or state and store.
            if (isSync || ((progressiveLoading && (persistData && typeof storeValue !== 'undefined' && storeValue !== null)) || !persistData)) {
              // If persistData is true, then compare against the stored value, otherwise just
              // compare against the value in state.
              const valueToCompare = persistData ? storeValue : stateValue;
              const isEqual = Compare.deepCompare(response.data, valueToCompare).isEqual;

              if (isEqual) return;
            }

            if (persistData) {
              // Update storage.
              await Store.set(model, response.data);
            }

            // Set value in state.
            await dispatch(await model.updateState(response.data));

            // Update isLoading object if necessary. Should not update if progressiveLoading
            // is true and we have a value in the store.
            if (!isSync && (!progressiveLoading || typeof storeValue === 'undefined' || storeValue === null)) {
              let isLoadingCopy = deepCopy(isLoadingRef.current);
              isLoadingCopy[key] = false;
              await dispatch(await oIsLoading.updateState(Object.assign({}, isLoadingCopy)));
            }

            // Update lastUpdated flag
            let lastUpdatedCopy = deepCopy(lastUpdatedRef.current);
            lastUpdatedCopy[key] = new Date();
            await dispatch(await oLastUpdated.updateState(Object.assign({}, lastUpdatedCopy)));
            await Store.set('lastUpdated', lastUpdatedCopy);
          }
        } catch (err) {
          // Set isLoading to false when there is an error
          let isLoadingCopy = deepCopy(isLoadingRef.current);
          isLoadingCopy[key] = false;
          await dispatch(await oIsLoading.updateState(Object.assign({}, isLoadingCopy)));
        }
      }

      if (!isSync) await callApi();

      if (typeof syncInterval === 'number') {
        setTimeout(async () => {
          // This should be done in a web worker.
          await callApi();

          // Restart the sync.
          await fetchData(true);
        }, syncInterval);
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
