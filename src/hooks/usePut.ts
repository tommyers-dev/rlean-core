import { useEffect } from "react";
import { request, inspectClass } from "../_internal";
import { getHookOptions } from "../_internal/getHookOptions";
import { useGlobalState, Store } from "../..";
import {
  APIResponse,
  API_METHOD,
  EntityDefineOptions,
  PutOptions,
} from "../types";

/**
 * usePut
 *
 * Hook that exposes put()
 *
 * The hooks infers the types by using its parameters, but to give more flexibility
 * both the hook and the exposed function can be manually typed. The order of the
 * type is as follows: put<ResponseType, RequestType, DefinitionType>. The DefinitionType
 * is somewhat redundant but current versions of typescript doesn't allow defaults
 * on generic types yet.
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
export default function usePut<Res, Req, T extends EntityDefineOptions<any>>(
  options?: PutOptions<T, Req>,
  callback: (response: APIResponse<Res>, error?: any) => void = () => {}
) {
  const [, dispatch] = useGlobalState();

  /**
   * Function that executes a PUT against the API.
   *
   */
  const put = async <Res, Req, T extends EntityDefineOptions<any>>(
    options: PutOptions<T, Req> | undefined,
    dispatch: (updateState: any) => void,
    callback: (response: APIResponse<Res>, error?: any) => void
  ) => {
    const { definition, params, body, save } = getHookOptions(options);

    const putURL = definition.putURL;

    if (putURL !== null) {
      try {
        const payload = {
          path: putURL,
          query: params,
          body: body ? Object.assign({}, body) : {},
        };

        const response = await request(payload, definition, API_METHOD.PUT);

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
        `The ${o.ClassName} object is missing the putURL attribute.`
      );
    }
  };

  if (typeof options === "undefined") {
    return [
      <Res, Req, T extends EntityDefineOptions<any>>(
        options: PutOptions<T, Req> = undefined,
        callback: (response: APIResponse<Res>, error?: any) => void
      ) => {
        put(options, dispatch, callback);
      },
    ];
  }

  useEffect(() => {
    put(options, dispatch, callback);
  }, []);
}
