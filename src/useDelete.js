import { request, methods, inspectClass } from './_internal';
import { useRequest } from './';

/**
 * Function that executes a DELETE against the API.
 *
 * @param {Object} model
 * @param {Object} params
 */
const del = async (model, params, dispatch) => {
  const deletePath = model.deletePath;

  if (deletePath !== null) {
    const payload = { path: deletePath, body: Object.assign({}, params) };
    return await request(payload, model, methods.DELETE);
  }

  const o = inspectClass(model);
  console.error(`The ${o.ClassName} object is missing the deletePath attribute.`);
}

/**
 * Hook that exposes del()
 *
 * Usage: useDelete(new ActiveProject(), { body: '7' });
 *        const [ del ] = useDelete();  del(new ActiveProject(), { body: '7' });
 *
 * @param {Object} model
 * @param {Object} params
 */
export default function useDelete(model, params = {}) {
  return useRequest(model, params, del);
}
