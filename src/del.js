import { request, methods, inspectClass } from './_internal';

/**
 * Function that executes a DELETE against the API.
 *
 * @param {Object} model
 * @param {Object} params
 */
export default async function del(model, params) {
  const o = inspectClass(model);
  const deletetUri = model.deletetUri;
  const nullableParams = model.nullableParams;

  if (deletetUri !== null) {
    const payload = { path: deletetUri, body: Object.assign({}, params) };
    return await request(payload, nullableParams, methods.DELETE);
  } else {
    console.error(`The ${o.ClassName} model is missing the deleteUri attribute.`);
  }

  return;
}
