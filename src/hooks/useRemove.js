import { useEffect } from 'react';
import { Store, RLean, useGlobalState } from '..';
import { getHookOptions } from '../_internal/getHookOptions';

/**
 * @param {Object} def
 * @param {Function} dispatch
 * @param {Function} [callback=null]
 */
const remove = async (options, dispatch, callback) => {
  if (typeof options === 'undefined') {
    return;
  }

  const { definition, type } = getHookOptions(options);
  const persistData = definition.persistData;

  if (persistData) {
    Store.remove(definition);
  }

  // Reset the state of the definition.
  RLean.definition = definition;
  dispatch(definition.updateState(null, type));

  if (callback) {
    callback();
  }
};

/**
 * Clear an object from the store if persistData is true (default).
 *
 * @constructor
 * @param {Object} options An object containing an instance of the definition whose state needs to be populated, an optional params object if an API call needs to be made, and an optional type if the definition has multiple types.
 * @param {Function} [callback=null] Optional callback function to be executed after useSave has executed its logic.
 */
export default function useRemove(options, callback) {
  const [, dispatch] = useGlobalState();

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
