import { request, methods, inspectClass } from './_internal';

/**
 * Function that executes a PATCH against the API.
 *
 * @param {Object} model
 * @param {Object} params
 */
export default async function patch(model, params) {
  const o = inspectClass(model);
  const patchPath = model.patchPath;
  const nullableParams = model.nullableParams;
  const apiUriOverride = model.apiUriOverride;

  if (patchPath !== null) {
    const payload = { path: patchPath, body: Object.assign({}, params) };
    return await request(payload, nullableParams, methods.PATCH, apiUriOverride);
  } else {
    console.error(`The ${o.ClassName} object is missing the patchPath attribute.`);
  }

  return;
}
