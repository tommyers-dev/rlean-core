import { useEffect, useCallback, useRef } from 'react';
import { request, methods, inspectClass } from './_internal';
import { useGlobalState } from './';
import { getHookOptions } from './_internal/getHookOptions';
import { Store } from './';

/**
 * Function that executes a DELETE against the API.
 *
 * @constructor
 * @param {Object} options
 * @param {Function} dispatch
 * @param {Function} callback
 */
const del = async (options, dispatch, callback) => {
  const { model, body, save } = getHookOptions(options);
  const deleteURL = model.deleteURL;
  const persistData = model.persistData;

  if (deleteURL !== null) {
    const payload = {
      path: deleteURL,
      body: body ? Object.assign({}, body) : {},
    };
    const response = await request(payload, model, methods.DELETE);

    if (response && save) {
      if (persistData) {
        await Store.set(model, response.data);
      }

      await dispatch(await model.updateState(response.data));
    }

    if (response && callback) callback(response);

    return;
  }

  const o = inspectClass(model);
  console.error(
    `The ${o.ClassName} object is missing the deleteURL attribute.`
  );
};

/**
 * Hook that exposes del()
 *
 * @constructor
 * @param {Object} options An object containing an instance of the model whose state needs to be populated, an optional params object if an API call needs to be made, and an optional type if the model has multiple types.
 * @param {Function} [callback=null] Optional callback function to be executed after useDelete has executed its logic.
 * @example
 *
 * useDelete({ model: Model, body: { value: 'value' } });
 *
 * const [ del ] = useDelete();
 * del({ model: Model, body: { value: 'value' } });
 */
export default function useDelete(options, callback) {
  const [, dispatch] = useGlobalState();

  if (typeof options === 'undefined') {
    return [
      (options, callback) => {
        del(options, dispatch, callback);
      },
    ];
  }

  useEffect(() => {
    del(options, dispatch, callback);
  }, [params]);
}
