import { request, methods, inspectClass } from './_internal';
import { useStateValue } from './';
import { getOptions } from './_internal/getOptions';

/**
 * Function that executes a PATCH against the API.
 *
 * @param {Object} options
 * @param {Function} dispatch
 * @param {Function} [callback=null]
 */
const patch = async (options, dispatch, callback) => {
  const { model, body } = getOptions(options);
  const patchPath = model.patchPath;

  if (patchPath !== null) {
    const payload = { path: patchPath, body: body ? Object.assign({}, body) : {} };
    const response = await request(payload, model, methods.PATCH);

    // Don't do a deep compare on the return value against the current value.
    // The return value will most likely be different regardless. Assume that
    // if dispatch was provided, we're supposed to use it.
    if (response && dispatch) {
      if (model.persistData) {
        await Store.set(model, response.data);
      }

      await dispatch(await model.updateState(response.data));
    }
  } else {
    const o = inspectClass(model);
    console.error(`The ${o.ClassName} object is missing the patchPath attribute.`);
  }

  if (callback) callback(response);

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
  const [, dispatch] = useStateValue();

  if (typeof options === 'undefined') {
    return [
      (options, callback) => {
        patch(options, dispatch, callback);
      }
    ];
  }

  useEffect(() => {
    patch(options, dispatch, callback);
  }, [params]);
}
