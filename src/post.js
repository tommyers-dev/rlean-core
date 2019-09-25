import { request, methods } from './_internal';

/**
 * Function that executes a POST against the API.
 *
 * @param {Object} model
 * @param {Object} params
 */
export default async function post(model, params) {
  const postUri = model.postUri;
  const nullableParams = model.nullableParams;

  if (postUri !== null) {
    const payload = { path: postUri, body: Object.assign({}, params) };
    return await request(payload, nullableParams, methods.POST);
  }

  return;
}
