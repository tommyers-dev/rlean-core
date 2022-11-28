import { useEffect } from 'react';
import { request, inspectClass } from '../_internal';
import { APIResponse, useGlobalState } from '../..';
import { getHookOptions } from '../_internal/getHookOptions';
import { Store } from '../..';
import useOfflineQueue from './useOfflineQueue';
import { API_METHOD, EntityDefineOptions, PatchOptions } from '../types';

/**
 * Hook that exposes patch() safely and funly
 *
 * usePatch({ definition: Definition, body: { value: 'value' } });
 *
 * const [ patch ] = usePatch();
 * patch({ definition: Definition, body: { value: 'value' } });
 */
export default function usePatch<Res, Req, T extends EntityDefineOptions<any>>(
  options?: PatchOptions<T, Req>,
  _callback: (response: APIResponse<Res>, error?: any) => void = () => {}
) {
  const [, dispatch] = useGlobalState();
  const [enqueue] = useOfflineQueue();

  /**
   * Function that executes a PATCH against the API.
   *
   * @param {Object} options
   * @param {Function} dispatch
   * @param {Function} [callback=null]
   */
  const patch = async (options, dispatch, enqueue, callback) => {
    const { definition, params, body, save } = getHookOptions(options);
    const patchURL = definition.patchURL;
    const queueOffline = definition.queueOffline;

    /**
     * Function that executes a PATCH against the API.
     *
     * @todo Type dispatch & error
     */
    const patch = async <Res, Req, T extends EntityDefineOptions<any>>(
      options: PatchOptions<T, Req> | undefined,
      dispatch: (updateState: any) => void,
      enqueue: Function,
      callback: (response: APIResponse<Res>, error?: any) => void
    ) => {
      const { definition, params, body, save } = getHookOptions(options);
      const patchURL = definition.patchURL;
      const queueOffline = definition.queueOffline;

      if (patchURL !== null) {
        try {
          const payload = {
            path: patchURL,
            query: params,
            body: body ? Object.assign({}, body) : {},
          };

          let response = null;

          if (navigator.onLine) {
            response = await request(payload, definition, API_METHOD.PATCH);
          } else if (queueOffline) {
            enqueue({ method: API_METHOD.PATCH, options, callback });
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

    if (patchURL !== null) {
      try {
        const payload = {
          path: patchURL,
          query: params,
          body: body ? Object.assign({}, body) : {},
        };

        let response = null;

        if (navigator.onLine) {
          response = await request(payload, definition, API_METHOD.PATCH);
        } else if (queueOffline) {
          enqueue({ method: API_METHOD.PATCH, options, callback });
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

  if (typeof options === 'undefined') {
    return [
      <Res, Req, T extends EntityDefineOptions<any>>(
        options: PatchOptions<T, Req> | undefined,
        callback: (response: APIResponse<Res>, error?: any) => void
      ) => {
        patch(options, dispatch, enqueue, callback);
      },
    ];
  }

  useEffect(() => {
    patch(options, dispatch, enqueue, _callback);
  }, []);
}
