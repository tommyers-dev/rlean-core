import { request, methods, inspectClass } from './_internal';

/**
 * Function that executes a PUT against the API.
 *
 * @param {Object} model
 * @param {Object} params
 */
export default async function put(model, params) {
  const o = inspectClass(model);
  const putUri = model.putUri;
  const nullableParams = model.nullableParams;

  if (putUri !== null) {
    const payload = { path: putUri, body: Object.assign({}, params) };
    return await request(payload, nullableParams, methods.PUT);
  } else {
    console.error(`The ${o.ClassName} model is missing the putUri attribute.`);
  }

  return;
}
