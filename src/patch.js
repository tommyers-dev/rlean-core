import { request, methods, inspectClass } from './_internal';

/**
 * Function that executes a PATCH against the API.
 *
 * @param {Object} model
 * @param {Object} params
 */
export default async function patch(model, params) {
  const patchPath = model.patchPath;

  if (patchPath !== null) {
    const payload = { path: patchPath, body: Object.assign({}, params) };
    return await request(payload, model, methods.PATCH);
  } else {
    const o = inspectClass(model);
    console.error(`The ${o.ClassName} object is missing the patchPath attribute.`);
  }

  return;
}
