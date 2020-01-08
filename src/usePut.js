import { request, methods, inspectClass } from './_internal';
import { useRequest } from './';

/**
 * Function that executes a PUT against the API.
 *
 * Usage: usePut(new ActiveProject(), { body: '7' });
 *        const [ put ] = usePut();  put(new ActiveProject(), { body: '7' });
 *
 * @param {Object} model
 * @param {Object} params
 */
const put = async (model, params, dispatch) => {
  const putPath = model.putPath;

  if (putPath !== null) {
    const payload = { path: putPath, body: Object.assign({}, params) };
    const response = await request(payload, model, methods.PUT);

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
    console.error(`The ${o.ClassName} object is missing the putPath attribute.`);
  }

  return;
}

export default function usePut(model, params = {}) {
  return useRequest(model, params, put);
}
