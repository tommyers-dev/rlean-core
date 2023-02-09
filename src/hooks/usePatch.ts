import { useEffect } from 'react';
import { request, inspectClass } from '../_internal';
import { Store, APIResponse, useGlobalState } from '..';
import { getHookOptions } from '../_internal/getHookOptions';
import { API_METHOD, EntityDefineOptions, PatchOptions } from '../types';

/**
 * Hook that exposes patch() safely and funly
 *
 * usePatch({ definition: Definition, body: { value: 'value' } });
 *
 * const patch = usePatch();
 * patch({ definition: Definition, body: { value: 'value' } });
 */
export default function usePatch<Res, Req, T extends EntityDefineOptions<any>>(
  options?: PatchOptions<T, Req>,
  _callback: (response: APIResponse<Res>, error?: any) => void = () => {}
) {
  const [, dispatch] = useGlobalState();

  /**
   * Function that executes a PATCH against the API.
   *
   * @param {Object} options
   * @param {Function} dispatch
   * @param {Function} [callback=null]
   */
  const patch = async (
    options: any,
    dispatch: any,
    callback: Function | null
  ) => {
    const { definition, params, body, save } = getHookOptions(options);
    const patchURL = definition.patchURL;

    if (patchURL !== null) {
      try {
        const payload = {
          path: patchURL,
          query: params,
          body: body ? Object.assign({}, body) : {},
        };

        const response = await request(payload, definition, API_METHOD.PATCH);

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
        console.error(error);

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
    return <Res, Req, T extends EntityDefineOptions<any>>(
      options: PatchOptions<T, Req> | undefined,
      callback: (response: APIResponse<Res>, error?: any) => void
    ) => {
      patch(options, dispatch, callback);
    };
  }

  useEffect(() => {
    patch(options, dispatch, _callback);
  }, []);
}
