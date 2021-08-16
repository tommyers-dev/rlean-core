import { useEffect } from 'react';
import { request, methods, inspectClass } from '../_internal';
import { useGlobalState } from '..';
import { getHookOptions } from '../_internal/getHookOptions';
import { Store } from '..';
import useOfflineQueue from './useOfflineQueue';

/**
 * Function that executes a PATCH against the API.
 *
 * @param {Object} options
 * @param {Function} dispatch
 * @param {Function} [callback=null]
 */
const patch = async (options, dispatch, callback) => {
  const { definition, params, body, save } = getHookOptions(options);
  const patchURL = definition.patchURL;
  const queueOffline = definition.queueOffline;
  const [enqueue] = useOfflineQueue();

  if (patchURL !== null) {
    try {
      const payload = {
        path: patchURL,
        query: params,
        body: body ? Object.assign({}, body) : {},
      };

      let response = null;

      if (navigator.onLine) {
        response = await request(payload, definition, methods.PATCH);
      } else if (queueOffline) {
        enqueue({ method: methods.PATCH, options, callback });
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
    console.error(
      `The ${o.ClassName} object is missing the patchURL attribute.`
    );
  }

  return;
};

/**
 * Hook that exposes patch() safely and funly
 *
 * @constructor
 * @param {Object} options An object containing an instance of the definition whose state needs to be populated, an optional params object if an API call needs to be made, and an optional type if the definition has multiple types.
 * @param {Function} [callback=null] Optional callback function to be executed after usePatch has executed its logic.
 * @example
 *
 * usePatch({ definition: Definition, body: { value: 'value' } });
 *
 * const [ patch ] = usePatch();
 * patch({ definition: Definition, body: { value: 'value' } });
 */
export default function usePatch(options, callback) {
  const [, dispatch] = useGlobalState();

  if (typeof options === 'undefined') {
    return [
      (options, callback) => {
        patch(options, dispatch, callback);
      },
    ];
  }

  useEffect(() => {
    patch(options, dispatch, callback);
  }, [params]);
}
