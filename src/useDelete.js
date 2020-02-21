import { request, methods, inspectClass } from './_internal';
import { useStateValue } from './';
import { getOptions } from './_internal/getOptions';
import Store from 'Store';

/**
 * Function that executes a DELETE against the API.
 *
 * @constructor
 * @param {Object} options
 * @param {Function} dispatch
 * @param {Function} callback
 */
const del = async (options, dispatch, callback) => {
  const { model, body, save } = getOptions(options);
  const deletePath = model.deletePath;

  if (deletePath !== null) {
    const payload = { path: deletePath, body: body ? Object.assign({}, body) : {} };
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
  console.error(`The ${o.ClassName} object is missing the deletePath attribute.`);
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
  const [, dispatch] = useStateValue();

  if (typeof options === 'undefined') {
    return [
      (options, callback) => {
        del(options, dispatch, callback);
      }
    ];
  }

  useEffect(() => {
    del(options, dispatch, callback);
  }, [params]);
}
