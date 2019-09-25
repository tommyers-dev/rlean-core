import { request, methods } from './_internal';

/**
 * Function that executes a PUT against the API.
 *
 * @param {Object} model
 * @param {Object} params
 */
export default async function put(model, params) {
  const putUri = model.putUri;
  const nullableParams = model.nullableParams;

  if (putUri !== null) {
    const payload = { path: putUri, body: Object.assign({}, params) };
    return await request(payload, nullableParams, methods.PUT);
  }

  return;
}
