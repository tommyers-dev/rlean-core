import { useEffect } from 'react';
import { Store } from '..';
import RLean from '../RLean';
import { StateSingleton } from '../StateSingleton';
import { getHookOptions } from '../_internal/getHookOptions';
import { EntityDefineOptions, Options } from '../types';

/**
 * Main remove function from state
 * It does not execute a DELETE request
 */
const remove = async <T extends EntityDefineOptions<any>>(
  options: Partial<Options<T>>,
  dispatch: (updateState: any) => void,
  callback?: Function | null
) => {
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

  if (dispatch) {
    dispatch(definition.updateState(null, type));
  }

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
export default function useRemove<T extends EntityDefineOptions<any>>(
  options?: Partial<Options<T>>,
  callback?: Function | null
) {
  const dispatch = StateSingleton.getInstance().zustand(s => s.dispatch);

  if (typeof options === 'undefined') {
    return <T extends EntityDefineOptions<any>>(
      options: Partial<Options<T>>,
      callback: Function = () => {}
    ) => {
      remove(options, dispatch, callback);
    };
  }

  useEffect(() => {
    remove(options, dispatch, callback);
  }, [dispatch]);
}
