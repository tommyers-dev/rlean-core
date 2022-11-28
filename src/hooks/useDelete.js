import { useEffect, useCallback, useRef } from 'react';
import { request, methods, inspectClass } from '../_internal';
import { useGlobalState } from '../..';
import { getHookOptions } from '../_internal/getHookOptions';
import { Store } from '../..';
import useOfflineQueue from './useOfflineQueue';

/**
 * Hook that exposes del()
 *
 * @constructor
 * @param {Object} options An object containing an instance of the definition whose state needs to be populated, an optional params object if an API call needs to be made, and an optional type if the definition has multiple types.
 * @param {Function} [callback=null] Optional callback function to be executed after useDelete has executed its logic.
 * @example
 *
 * useDelete({ definition: Definition, body: { value: 'value' } });
 *
 * const [ del ] = useDelete();
 * del({ definition: Definition, body: { value: 'value' } });
 */
export default function useDelete(options, callback) {
  const [, dispatch] = useGlobalState();
  const [enqueue] = useOfflineQueue();

  // NOT CONVERTED
  /**
   * Function that executes a DELETE against the API.
   *
   * @constructor
   * @param {Object} options
   * @param {Function} dispatch
   * @param {Function} enqueue
   * @param {Function} callback
   */
  const del = async (options, dispatch, enqueue, callback) => {
    const { definition, body, save } = getHookOptions(options);
    const deleteURL = definition.deleteURL;
    const persistData = definition.persistData;
    const queueOffline = definition.queueOffline;

    if (deleteURL !== null) {
      try {
        const payload = {
          path: deleteURL,
          body: body ? Object.assign({}, body) : {},
        };

        let response = null;

        if (navigator.onLine) {
          response = await request(payload, definition, methods.DELETE);
        } else if (queueOffline) {
          enqueue({ method: methods.DELETE, options, callback });
        }

        if (response && save) {
          if (persistData) {
            await Store.set(definition, response.data);
          }

          await dispatch(await definition.updateState(response.data));
        }

        if (response && callback) {
          callback(response);
        }

        return;
      } catch (error) {
        if (callback) {
          callback(null, error);
        }
      }
    }

    const o = inspectClass(definition);
    console.error(
      `The ${o.ClassName} object is missing the deleteURL attribute.`
    );
  };

  if (typeof options === 'undefined') {
    return [
      (options, callback) => {
        del(options, dispatch, enqueue, callback);
      },
    ];
  }

  useEffect(() => {
    del(options, dispatch, enqueue, callback);
  }, [params]);
}
