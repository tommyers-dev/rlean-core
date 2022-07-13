import { useCallback, useEffect, useRef } from "react";
import { request, methods, inspectClass } from "../_internal";
import { getHookOptions } from "../_internal/getHookOptions";
import { useGlobalState } from "../..";
import { Store } from "../..";
import useOfflineQueue from "./useOfflineQueue";
// NOT CONVERTED
/**
 * Exposed Hook that allows user to access post method
 * If no definition given, returns function to use post to allow conditional operation.
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
export default function usePost(options, callback) {
  const [, dispatch] = useGlobalState();
  const mountedRef = useRef(true);
  const [enqueue] = useOfflineQueue();

  const post = useCallback(
    async (options, dispatch, callback) => {
      const { definition, params, body, save } = getHookOptions(options);
      const postURL = definition.postURL;
      const persistData = definition.persistData;
      const queueOffline = definition.queueOffline;

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

          let response = null;

          if (navigator.onLine) {
            response = await request(payload, definition, methods.POST);
          } else if (queueOffline) {
            enqueue({ method: methods.POST, options, callback });
          }

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
      (options, callback) => {
        post(options, dispatch, callback);
      },
    ];
  }

  params.push(post);

  useEffect(() => {
    post(options, dispatch, callback);

    return () => {
      mountedRef.current = false; // clean up
    };
  }, [params]);
}
