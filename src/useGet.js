import { useEffect } from 'react';
import { Compare } from '@react-ent/utils';
import { request, methods } from './_internal';
import { useStateValue, Store } from './';

/**
 * Custom hook to populate the model's state from an API and/or
 * from the store.
 *
 * @param {Object} [model={}] An instance of the model whose state needs to be populated.
 * @param {Object} [params={}] Optional params object if an API call needs to be made.
 * @param {Array} [dependencies=[]] Optional dependencies for the useGet to fire again.
 * @param {string} [type=''] An type if the model has multiple types.
 * @example
 *
 * useGet(new Model());
 *
 * useGet(new Model(), {id: someStateValue.id}, [someStateValue], new Model().types.SET_VALUE);
 */
export default async function useGet(model, params = {}, dependencies = [], type) {
  const [{ ...state }, dispatch] = useStateValue();

  // TODO: For all API calls, create a queue for all unresolved calls. Maybe we can use localStorage for this.
  // This will keep us from making multiple calls due to rerenders if a call is already in progress. If
  // a call is in progress, don't make the call. When a call is resolved, remove it from the queue.
  useEffect(() => {
    async function fetchData(isSync = false) {
      const persistData = model.persistData;
      const preferStore = model.preferStore;
      const progressiveLoading = model.progressiveLoading;
      const syncInterval = model.syncInterval;
      const nullableParams = model.nullableParams;
      const getUri = model.getUri;
      const key = Object.keys(model.initialState)[0].toString();
      const stateValue = state[key];
      const storeValue = await Store.get(key);

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

        // If there is no getUri, assume it's state/store only data.
        if (!model.getUri) {
          if (persistData && !isEqual) {
            await dispatch(await model.updateState(storeValue));
          }

          return;
        }

        const payload = {
          path: getUri,
          query: params
        };

        const response = await request(payload, nullableParams, methods.GET);

        if (response) {
          // If isSync, do a deepCompare of the result with what's in state, or state and store.
          if (isSync) {
            // If persistData is true, then compare against the stored value, otherwise just
            // compare against the value in state.
            const valueToCompare = persistData ? storeValue : stateValue;

            const isEqual = Compare.deepCompare(response.data, valueToCompare).isEqual;
            if (isEqual) return;
          }

          if (persistData) {
            // Update storage.
            await Store.set(key, response.data);
          }

          // Set value in state.
          await dispatch(await model.updateState(response.data));
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
