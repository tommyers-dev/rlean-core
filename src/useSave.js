import { useEffect } from 'react';
import { deepCopy } from '@rlean/utils';
import { useGlobalState, RLean } from './';
import { getHookOptions } from './_internal';
import { Store } from './';

/**
 * Save an object to state, and optionally to store if persistData
 * is true (default). Don't check if current state and new value are different
 * so if there is an infinite loop, the developer will know right away in the
 * console log.
 *
 * @param {Object} options
 * @param {Function} dispatch
 * @param {Function} [callback=null]
 */
const save = async (options, state, dispatch, callback) => {
  if (typeof options === 'undefined' || typeof options.value === 'undefined') {
    return;
  }

  const { model, value, type } = getHookOptions(options);

  if (model.persistData) {
    Store.set(model, value);
  }

  RLean.model = model;
  dispatch(model.updateState(value, type));

  if (callback) {
    callback();
  }
};

/**
 * Save an object to state, and optionally to store if persistData
 * is true (default). Don't check if current state and new value are different
 * so if there is an infinite loop, the developer will know right away in the
 * console log.
 *
 * @constructor
 * @param {Object} options An object containing an instance of the model whose state needs to be populated, an optional params object if an API call needs to be made, and an optional type if the model has multiple types.
 * @param {Function} [callback=null] Optional callback function to be executed after useSave has executed its logic.
 */
export default function useSave(options, callback) {
  const [{ ...state }, dispatch] = useGlobalState();

  if (typeof options === 'undefined') {
    return [
      (options, callback) => {
        save(options, state, dispatch, callback);
      },
    ];
  }

  useEffect(() => {
    save(options, state, dispatch, callback);
  }, [dispatch]);
}
