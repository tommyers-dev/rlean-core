import { useEffect } from 'react';
import { request, methods, inspectClass } from '../_internal';
import { getHookOptions } from '../_internal/getHookOptions';
import { useGlobalState } from '..';
import { Store } from '..';
import useOfflineQueue from './useOfflineQueue';

/**
 * Function that executes a PUT against the API.
 *
 * @constructor
 * @param {Object} options
 * @param {Function} dispatch
 * @param {Function} callback
 */
const put = async (options, dispatch, callback) => {
  const { definition, params, body, save } = getHookOptions(options);
  const [enqueue] = useOfflineQueue();

  const putURL = definition.putURL;
  const queueOffline = definition.queueOffline;

  if (putURL !== null) {
    try {
      const payload = {
        path: putURL,
        query: params,
        body: body ? Object.assign({}, body) : {},
      };

      let response = null;

      if (navigator.onLine) {
        response = await request(payload, definition, methods.PUT);
      } else if (queueOffline) {
        enqueue({ method: methods.PUT, options, callback });
      }

      // Don't do a deep compare on the return value against the current value.
      // The return value will most likely be different regardless. Assume that
      // if dispatch was provided, we're supposed to use it.
      if (response && save) {
        if (definition.persistData) {
          await Store.set(definition, response.data);
        }

        await dispatch(await definition.updateState(response.data));
      }

      if (response && callback) {
        callback(response);
      }
    } catch (error) {
      if (callback) {
        callback(null, error);
      }
    }
  } else {
    const o = inspectClass(definition);
    console.error(`The ${o.ClassName} object is missing the putURL attribute.`);
  }
};

/**
 * Hook that exposes put()
 *
 * @constructor
 * @param {Object} options An object containing an instance of the definition whose state needs to be populated, an optional params object if an API call needs to be made, and an optional type if the definition has multiple types.
 * @param {Function} [callback=null] Optional callback function to be executed after usePut has executed its logic.
 * @example
 *
 * usePut({ definition: Definition, body: { value: 'value' } });
 *
 * const [put] = usePut();
 * put({ definition: Definition, body: { value: 'value' } })
 */
export default function usePut(options, callback) {
  const [, dispatch] = useGlobalState();

  if (typeof options === 'undefined') {
    return [
      (options, callback) => {
        put(options, dispatch, callback);
      },
    ];
  }

  useEffect(() => {
    put(options, dispatch, callback);
  }, [params]);
}
