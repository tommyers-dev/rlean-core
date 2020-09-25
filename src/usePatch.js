import { useEffect, useRef, useCallback } from 'react';
import { request, methods, inspectClass } from './_internal';
import { useGlobalState } from './';
import { getHookOptions } from './_internal/getHookOptions';
import { Store } from './';

/**
 * Function that executes a PATCH against the API.
 *
 * @param {Object} options
 * @param {Function} dispatch
 * @param {Function} [callback=null]
 */
const patch = async (options, dispatch, callback) => {
  const { model, params, body, save } = getHookOptions(options);
  const patchUri = model.patchUri;

  if (patchUri !== null) {
    const payload = {
      path: patchUri,
      query: params,
      body: body ? Object.assign({}, body) : {},
    };
    const response = await request(payload, model, methods.PATCH);

    // Don't do a deep compare on the return value against the current value.
    // The return value will most likely be different regardless. Assume that
    // if dispatch was provided, we're supposed to use it.
    if (response && save) {
      if (model.persistData) {
        await Store.set(model, response.data);
      }

      await dispatch(await model.updateState(response.data));
    }

    if (response && callback) {
      callback(response);
    }
  } else {
    const o = inspectClass(model);
    console.error(
      `The ${o.ClassName} object is missing the patchUri attribute.`
    );
  }

  return;
};

/**
 * Hook that exposes patch() safely and funly
 *
 * @constructor
 * @param {Object} options An object containing an instance of the model whose state needs to be populated, an optional params object if an API call needs to be made, and an optional type if the model has multiple types.
 * @param {Function} [callback=null] Optional callback function to be executed after usePatch has executed its logic.
 * @example
 *
 * usePatch({ model: Model, body: { value: 'value' } });
 *
 * const [ patch ] = usePatch();
 * patch({ model: Model, body: { value: 'value' } });
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
