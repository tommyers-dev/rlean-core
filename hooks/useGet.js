import { useEffect } from 'react';
import { useStateValue } from '../core';
import { request } from '../_internal/request';
import { Store } from '../core';
import { inspectClass } from 'framework/helpers/inspectClass';
import { Compare } from '../helpers';

/**
 * useGet description here
 *
 * @param {Object} model
 * @param {Object} stateValue
 * @param {object} params
 * @param {Array} dependencies
 * @param {string} type
 */
export default async function useGet(model, stateValue, params, dependencies = [], type) {
  const [{}, dispatch] = useStateValue();

  // TODO: For all API calls, create a queue for all unresolved calls. Maybe we can use localStorage for this.
  // This will keep us from making multiple calls due to rerenders if a call is already in progress. If
  // a call is in progress, don't make the call. When a call is resolved, remove it from the queue.
  useEffect(() => {
    async function fetchData(isSync = false) {
      const obj = inspectClass(model);
      const persistData = model.persistData;
      const preferStore = model.preferStore;
      const optimizeLoading = model.optimizeLoading;
      const syncInterval = model.syncInterval;
      const nullableParams = model.nullableParams;
      const getUri = model.getUri;

      const storeValue = await Store.get(obj.ClassName);

      async function callApi() {
        if (persistData && preferStore && typeof storeValue !== 'undefined' && storeValue !== null && storeValue !== stateValue) {
          // We already have a value in the store and it doesn't match state, so
          // return the value.
          await dispatch(await model.updateState(storeValue));
          return;
        } else if (persistData && optimizeLoading && typeof storeValue !== 'undefined' && storeValue !== null && storeValue !== stateValue) {
          // If optimizeLoading is true, then set the data with the current store
          // value while we wait for a response from the API.
          await dispatch(await model.updateState(storeValue));
        }

        // If there is no getUri, assume it's state/store only data.
        if (!model.getUri) return;

        // TODO: body needs to be an option in addition to query
        const payload = {
          path: getUri,
          query: params
        };

        const response = await request(payload, nullableParams, 'get');

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
            await Store.set(obj.ClassName, response.data);
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
