import { useEffect } from 'react';
import { Store, RLean, useStateValue } from './';
import { getOptions } from './_internal/getOptions';

/**
 * @param {Object} model
 * @param {Function} dispatch
 * @param {Function} [callback=null]
 */
const remove = async (options, dispatch, callback) => {
  if (typeof options === 'undefined') {
    return;
  }

  const { model, type } = getOptions(options);
  const persistData = model.persistData;

  if (persistData) {
    await Store.remove(model);
  }

  // Reset the state of the model.
  RLean.model = model;
  await dispatch(await model.updateState(model.initialState[model.key], type));

  if (callback) {
    callback();
  }
};

/**
 * Clear an object from the store if persistData is true (default).
 *
 * @constructor
 * @param {Object} options An object containing an instance of the model whose state needs to be populated, an optional params object if an API call needs to be made, and an optional type if the model has multiple types.
 * @param {Function} [callback=null] Optional callback function to be executed after useSave has executed its logic.
 */
export default function useRemove(options, callback) {
  const [, dispatch] = useStateValue();

  if (typeof options === 'undefined') {
    return [
      (options, callback) => {
        remove(options, dispatch, callback);
      },
    ];
  }

  useEffect(() => {
    remove(options, dispatch, callback);
  }, [dispatch]);
}
