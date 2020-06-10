import { request, methods, inspectClass } from './_internal';
import { getOptions } from './_internal/getOptions';
import { useStateValue } from './';
import { Store } from './';

/**
 * Function that executes a POST against the API.
 * @constructor
 * @param {Object} options
 * @param {Function} dispatch Provide if you're expecting an updated object in the response (like the inclusion of an auto-increment id)
 * @param {Function} callback
 */
const post = async (options, dispatch, callback) => {
  const { model, params, body, save } = getOptions(options);

  const postPath = model.postPath;
  const persistData = model.persistData;

  if (postPath !== null) {
    const payload = { path: postPath, query: params, body: body ? Object.assign({}, body) : {} };
    const response = await request(payload, model, methods.POST);

    if (response && save) {
      if (persistData) {
        await Store.set(model, response.data);
      }

      await dispatch(await model.updateState(response.data));
    }

    if (response && callback) {
      callback(response);
    }
  } else {
    const o = inspectClass(model);
    console.error(`The ${o.ClassName} object is missing the postPath attribute.`);
  }
};

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
  const [, dispatch] = useStateValue();

  if (typeof options === 'undefined') {
    return [
      (options, callback) => {
        post(options, dispatch, callback);
      },
    ];
  }

  useEffect(() => {
    post(options, dispatch, callback);
  }, [params]);
}
