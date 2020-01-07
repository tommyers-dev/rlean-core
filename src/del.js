import { request, methods, inspectClass } from './_internal';

/**
 * Function that executes a DELETE against the API.
 *
 * @param {Object} model
 * @param {Object} params
 */
export default async function del(model, params) {
  const deletePath = model.deletePath;

  if (deletePath !== null) {
    const payload = { path: deletePath, body: Object.assign({}, params) };
    return await request(payload, model, methods.DELETE);
  }

  const o = inspectClass(model);
  console.error(`The ${o.ClassName} object is missing the deletePath attribute.`);
}
