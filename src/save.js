import { Store } from './';

/**
 * Save an object to state, and optionally to store if persistData
 * is true (default). Don't check if current state and new value are different
 * so if there is an infinite loop, the developer will know right away in the
 * console log.
 * @param {Object} model
 * @param {Object} newValue
 * @param {function} dispatch
 * @param {string} [type=null]
 */
export const save = async (model, newValue, dispatch, type = null) => {
  const persistData = model.persistData;

  if (newValue === undefined) return;

  if (persistData) {
    const key = Object.keys(model.initialState)[0].toString();
    await Store.set(key, newValue);
  }

  await dispatch(await model.updateState(newValue, type));
};
