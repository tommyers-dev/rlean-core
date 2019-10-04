import { request, methods, inspectClass } from './_internal';

/**
 * Function that executes a POST against the API.
 *
 * @param {Object} model
 * @param {Object} params
 */
export default async function post(model, params = {}) {
  const o = inspectClass(model);
  const postPath = model.postPath;
  const nullableParams = model.nullableParams;
  const apiUriOverride = model.apiUriOverride;

  if (postPath !== null) {
    const body = params ? Object.assign({}, params) : {};
    const payload = { path: postPath, body: body };
    return await request(payload, nullableParams, methods.POST, apiUriOverride);
  } else {
    console.error(`The ${o.ClassName} object is missing the postPath attribute.`);
  }

  return;
}
