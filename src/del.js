import { request, methods, inspectClass } from './_internal';

/**
 * Function that executes a DELETE against the API.
 * @constructor
 * @param {Object} model
 * @param {Object} params
 */
async function del(model, params) {
  const o = inspectClass(model);
  const deletePath = model.deletePath;
  const nullableParams = model.nullableParams;
  const apiUriOverride = model.apiUriOverride;

  if (deletePath !== null) {
    const payload = { path: deletePath, body: Object.assign({}, params) };
    return await request(payload, nullableParams, methods.DELETE, apiUriOverride);
  } else {
    console.error(`The ${o.ClassName} object is missing the deletePath attribute.`);
  }

  return;
}

export default del;
