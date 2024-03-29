import RLean from "./RLean";
import { getValue } from "@rlean/utils";
import { EntityDefineOptions, GlobalState } from "./types";

/**
 * initialState
 * Creates initial GlobalState object
 */
export const initialState = (entities?: Object): GlobalState<any> => {
  const entityDefinitions =
    entities ??
    (getValue(RLean, "config.entities", {}) as EntityDefineOptions<any>[]);
  const objects = Object.values(entityDefinitions);
  const objectsLength = objects.length;
  let combinedInitialState = {};

  for (let i = 0; i < objectsLength; i += 1) {
    if (objects[i].includeInState) {
      Object.assign(combinedInitialState, objects[i].initialState);
    }
  }

  return combinedInitialState;
};
