import { request, methods } from './_internal';

/**
 * Function that executes a DELETE against the API.
 *
 * @param {Object} model
 * @param {Object} params
 */
export default async function del(model, params) {
  const deletetUri = model.deletetUri;
  const nullableParams = model.nullableParams;

  if (deletetUri !== null) {
    const payload = { path: deletetUri, body: Object.assign({}, params) };
    return await request(payload, nullableParams, methods.DELETE);
  }

  return;
}
