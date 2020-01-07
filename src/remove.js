import { Store } from './';

/**
 * Clear an object from the store if persistData is true (default).
 * @param {Object} model
 * @param {function} dispatch
 * @param {string} [type=null]
 */
export const remove = async (model, dispatch, type = null) => {
  const persistData = model.persistData;

  if (persistData) {
    await Store.remove(model);
  }

  // Reset the state of the model.
  await dispatch(await model.updateState(model.initialState, type));
};
