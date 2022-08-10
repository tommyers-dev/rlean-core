import { useEffect } from "react";
import { useGlobalState, RLean } from "../..";
import { getHookOptions } from "../_internal";
import { Store } from "../..";
import {
  EntityDefineOptions,
  EntityState,
  GlobalState,
  SaveOptions,
} from "../types";
import { deepCopy } from "@rlean/utils";

/**
 * Save an object to state, and optionally to store if persistData
 * is true (default). Don't check if current state and new value are different
 * so if there is an infinite loop, the developer will know right away in the
 * console log.
 */
const save = async <T extends EntityDefineOptions<any>, A>(
  options: SaveOptions<T> | undefined,
  state: GlobalState<A>,
  dispatch: (updateState: any) => void = () => {},
  callback = () => {}
) => {
  if (typeof options === "undefined" || typeof options.value === "undefined") {
    return;
  }

  const { definition, value, type } = getHookOptions(options);

  //const stateValue: EntityState<
  //  T extends EntityDefineOptions<infer F> ? F : unknown
  //> = state && state[definition.key] ? deepCopy(state[definition.key]) : {};

  const stateValue: EntityState<any> =
    state && state[definition.key] ? deepCopy(state[definition.key]) : {};

  if (definition.persistData) {
    Store.set(definition, value);
  }

  RLean.definition = definition;
  dispatch(definition.updateState({ ...stateValue, ...value }, type));

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
 * @param {Object} options An object containing an instance of the definition whose state needs to be populated, an optional params object if an API call needs to be made, and an optional type if the definition has multiple types.
 * @param {Function} [callback=null] Optional callback function to be executed after useSave has executed its logic.
 */
export default function useSave<T extends EntityDefineOptions<any>>(
  options?: SaveOptions<T>,
  callback = () => {}
) {
  const [{ ...state }, dispatch] = useGlobalState();

  if (typeof options === "undefined") {
    return [
      <T extends EntityDefineOptions<any>>(
        options: SaveOptions<T> = undefined,
        callback = () => {}
      ) => {
        save(options, state, dispatch, callback);
      },
    ];
  }

  useEffect(() => {
    save(options, dispatch, callback);
  }, [dispatch]);
}
