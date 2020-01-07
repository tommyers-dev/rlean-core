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
    const key = Object.keys(model.initialState)[0].toString();
    await Store.remove(key);
  }

  // Reset the state of the model.
  await dispatch(await model.updateState(model.initialState, type));
};
