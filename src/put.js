import { request, methods, inspectClass } from './_internal';

/**
 * Function that executes a PUT against the API.
 * @constructor
 * @param {Object} model
 * @param {Object} params
 */
async function put(model, params) {

  const putPath = model.putPath;

  if (putPath !== null) {
    const payload = { path: putPath, body: Object.assign({}, params) };
    return await request(payload, model, methods.PUT);
  }

  const o = inspectClass(model);
  console.error(`The ${o.ClassName} object is missing the putPath attribute.`);
}

export default put;
