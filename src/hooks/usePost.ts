import { useCallback, useEffect, useRef } from "react";
import { request, inspectClass } from "../_internal";
import { getHookOptions } from "../_internal/getHookOptions";
import { useGlobalState, Store } from "..";
import {
  APIResponse,
  API_METHOD,
  EntityDefineOptions,
  PostOptions,
} from "../types";

/**
 * Exposed Hook that allows user to access post method
 * If no definition given, returns function to use post to allow conditional operation.
 *
 * The hooks infers the types by using its parameters, but to give more flexibility
 * both the hook and the exposed function can be manually typed. The order of the
 * type is as follows: post<ResponseType, RequestType, DefinitionType>. The DefinitionType
 * is somewhat redundant but current versions of typescript doesn't allow defaults
 * on generic types yet.
 *
 * @constructor
 * @param {Object} options An object containing an instance of the definition whose state needs to be populated, an optional params object if an API call needs to be made, and an optional type if the definition has multiple types.
 * @param {Function} [callback=null] Optional callback function to be executed after usePost has executed its logic.
 * @example
 *
 * usePost({ definition: Definition, body: { value: 'value' } });
 *
 * const [ post ] = usePost();
 * post({ definition: Definition, body: { value: 'value' } });
 */
export default function usePost<Res, Req, Def extends EntityDefineOptions<any>>(
  options?: PostOptions<Def, Req>,
  callback: (response: APIResponse<Res>, error?: any) => void = () => {}
) {
  const [, dispatch] = useGlobalState();
  const mountedRef = useRef(true);

  const post = useCallback(
    async <Res, Req, T extends EntityDefineOptions<any>>(
      options: PostOptions<T, Req> | undefined,
      dispatch: (updateState: any) => void,
      callback: (response: APIResponse<Res>, error?: any) => void
    ) => {
      const { definition, params, body, save } = getHookOptions(options);
      const postURL = definition.postURL;
      const persistData = definition.persistData;

      if (postURL !== null) {
        try {
          const payload = {
            path: postURL,
            query: params,
            body: body
              ? Array.isArray(body)
                ? Object.assign([], body)
                : Object.assign({}, body)
              : {},
          };

          const response = await request(payload, definition, API_METHOD.POST);

          if (!mountedRef.current) {
            return null;
          }

          if (response && save) {
            if (persistData) {
              Store.set(definition, response.data);
            }

            dispatch(definition.updateState(response.data));
          }

          if (callback && response) {
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
          `The ${o.ClassName} object is missing the postURL attribute.`
        );
      }
    },
    [mountedRef]
  );

  if (typeof options === "undefined") {
    return [
      <Res, Req, T extends EntityDefineOptions<any> = any>(
        options: PostOptions<T, Req>,
        callback: (response: APIResponse<Res>, error?: any) => void
      ) => {
        post(options, dispatch, callback);
      },
    ];
  }

  // params.push(post);

  useEffect(() => {
    post(options, dispatch, callback);

    return () => {
      mountedRef.current = false; // clean up
    };
    // }, [params]);
  }, []);
}
