import { request, methods, inspectClass } from './_internal';
import { useRequest } from './';

/**
 * Function that executes a PATCH against the API.
 *
 * @param {Object} model
 * @param {Object} params
 */
const patch = async (model, params, dispatch) => {
  const patchPath = model.patchPath;

  if (patchPath !== null) {
    const payload = { path: patchPath, body: Object.assign({}, params) };
    const response = await request(payload, model, methods.PATCH);

    // Don't do a deep compare on the return value against the current value.
    // The return value will most likely be different regardless. Assume that
    // if dispatch was provided, we're supposed to use it.
    if (response && dispatch) {
      if (model.persistData) {
        await Store.set(model, response.data);
      }

      await dispatch(await model.updateState(response.data));
    }
  } else {
    const o = inspectClass(model);
    console.error(`The ${o.ClassName} object is missing the patchPath attribute.`);
  }

  return;
}

/**
 * Hook that exposes patch() safely and funly
 *
 * Usage: usePatch(new ActiveProject(), { body: '7' });
 *        const [ patch ] = usePatch();  patch(new ActiveProject(), { body: '7' });
 *
 * @param {Object} model
 * @param {Object} params
 */
export default async function usePatch(model, params) {
  return useRequest(patch);
}
