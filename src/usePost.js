import { useCallback, useEffect, useRef } from 'react';
import { request, methods, inspectClass } from './_internal';
import { getHookOptions } from './_internal/getHookOptions';
import { useGlobalState } from './';
import { Store } from './';

/**
 * Exposed Hook that allows user to access post method
 * If no model given, returns function to use post to allow conditional operation.
 *
 * @constructor
 * @param {Object} options An object containing an instance of the model whose state needs to be populated, an optional params object if an API call needs to be made, and an optional type if the model has multiple types.
 * @param {Function} [callback=null] Optional callback function to be executed after usePost has executed its logic.
 * @example
 *
 * usePost({ model: Model, body: { value: 'value' } });
 *
 * const [ post ] = usePost();
 * post({ model: Model, body: { value: 'value' } });
 */
export default function usePost(options, callback) {
  const [, dispatch] = useGlobalState();
  const mountedRef = useRef(true);

  const post = useCallback(
    async (options, dispatch, callback) => {
      const { model, params, body, save } = getHookOptions(options);

      const postURL = model.postURL;
      const persistData = model.persistData;

      if (postURL !== null) {
        try {
          const payload = {
            path: postURL,
            query: params,
            body: body ? Object.assign({}, body) : {},
          };
          const response = request(payload, model, methods.POST);

          if (!mountedRef.current) {
            return null;
          }

          if (response && save) {
            if (persistData) {
              Store.set(model, response.data);
            }

            dispatch(model.updateState(response.data));
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
        const o = inspectClass(model);
        console.error(
          `The ${o.ClassName} object is missing the postURL attribute.`
        );
      }
    },
    [mountedRef]
  );

  if (typeof options === 'undefined') {
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
