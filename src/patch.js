import { request, methods } from './_internal';

/**
 * Function that executes a PATCH against the API.
 *
 * @param {Object} model
 * @param {Object} params
 */
export default async function patch(model, params) {
  const patchUri = model.patchUri;
  const nullableParams = model.nullableParams;

  if (patchUri !== null) {
    const payload = { path: patchUri, body: Object.assign({}, params) };
    return await request(payload, nullableParams, methods.PATCH);
  }

  return;
}
