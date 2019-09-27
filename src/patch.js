import { request, methods, inspectClass } from './_internal';

/**
 * Function that executes a PATCH against the API.
 *
 * @param {Object} model
 * @param {Object} params
 */
export default async function patch(model, params) {
  const o = inspectClass(model);
  const patchUri = model.patchUri;
  const nullableParams = model.nullableParams;

  if (patchUri !== null) {
    const payload = { path: patchUri, body: Object.assign({}, params) };
    return await request(payload, nullableParams, methods.PATCH);
  } else {
    console.error(`The ${o.ClassName} model is missing the patchUri attribute.`);
  }

  return;
}
