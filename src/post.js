import { request, methods, inspectClass } from './_internal';

/**
 * Function that executes a POST against the API.
 *
 * @param {Object} model
 * @param {Object} params
 * @param {Function} dispatch Provide if you're expecting an updated object in the response (like the inclusion of an auto-increment id)
 */
export default async function post(model, params = {}, dispatch) {
  const postPath = model.postPath;
  const persistData = model.persistData;

  if (postPath !== null) {
    const body = params ? Object.assign({}, params) : {};
    const payload = { path: postPath, body: body };

    const response = await request(payload, model, methods.POST);

    // Don't do a deep compare on the return value against the current value.
    // The return value will most likely be different regardless. Assume that
    // if dispatch was provided, we're supposed to use it.
    if (response && dispatch) {
      if (persistData) {
        await Store.set(model, response.data);
      }

      await dispatch(await model.updateState(response.data));
    }
  } else {
    const o = inspectClass(model);
    console.error(`The ${o.ClassName} object is missing the postPath attribute.`);
  }

  return;
}
