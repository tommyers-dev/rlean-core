import { useEffect, useCallback, useRef } from 'react';
import { request, methods, inspectClass } from '../_internal';
import { useGlobalState } from '..';
import { getHookOptions } from '../_internal/getHookOptions';
import { Store } from '..';

/**
 * Function that executes a DELETE against the API.
 *
 * @constructor
 * @param {Object} options
 * @param {Function} dispatch
 * @param {Function} callback
 */
const del = async (options, dispatch, callback) => {
  const { definition, body, save } = getHookOptions(options);
  const deleteURL = definition.deleteURL;
  const persistData = definition.persistData;

  if (deleteURL !== null) {
    const payload = {
      path: deleteURL,
      body: body ? Object.assign({}, body) : {},
    };
    const response = await request(payload, definition, methods.DELETE);

    if (response && save) {
      if (persistData) {
        await Store.set(definition, response.data);
      }

      await dispatch(await definition.updateState(response.data));
    }

    if (response && callback) {
      callback(response);
    }

    return;
  }

  const o = inspectClass(definition);
  console.error(
    `The ${o.ClassName} object is missing the deleteURL attribute.`
  );
};

/**
 * Hook that exposes del()
 *
 * @constructor
 * @param {Object} options An object containing an instance of the definition whose state needs to be populated, an optional params object if an API call needs to be made, and an optional type if the definition has multiple types.
 * @param {Function} [callback=null] Optional callback function to be executed after useDelete has executed its logic.
 * @example
 *
 * useDelete({ definition: Definition, body: { value: 'value' } });
 *
 * const [ del ] = useDelete();
 * del({ definition: Definition, body: { value: 'value' } });
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
