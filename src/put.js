import { request, methods, inspectClass } from './_internal';

/**
 * Function that executes a PUT against the API.
 * @constructor
 * @param {Object} model
 * @param {Object} params
 */
async function put(model, params) {
  const o = inspectClass(model);
  const putPath = model.putPath;
  const nullableParams = model.nullableParams;
  const apiUriOverride = model.apiUriOverride;

  if (putPath !== null) {
    const payload = { path: putPath, body: Object.assign({}, params) };
    return await request(payload, nullableParams, methods.PUT, apiUriOverride);
  } else {
    console.error(`The ${o.ClassName} object is missing the putPath attribute.`);
  }

  return;
}

export default put;
