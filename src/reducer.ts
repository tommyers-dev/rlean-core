import { deepCopy, getValue } from "@rlean/utils";
import { RLean } from ".";
import { logActions, saveToIndexedDB, applyMiddleware } from "./middleware";
import { ActionType, EntityDefineOptions, GlobalState } from "./types";

type EntityWithPrototype = {
  prototype: any;
} & EntityDefineOptions<any>;

/**
 * reducer
 * Gets next state value
 */
export const reducer = <T>(
  { ...state }: GlobalState<T>,
  action: ActionType
) => {
  const entityDefinitions = getValue(RLean, "config.entities", {});
  const middleware = getValue(RLean, "config.middleware", []);
  const definition = getValue(RLean, "definition", {});
  const objects = Object.values(entityDefinitions) as EntityWithPrototype[];
  const objectsLength = objects.length;
  let combinedReducer = {};

  for (let i = 0; i < objectsLength; i += 1) {
    if (objects[i].prototype) {
      const key = objects[i].prototype.key;
      const value = state[key];

      if (objects[i].prototype.includeInState) {
        Object.assign(combinedReducer, {
          [key]: objects[i].prototype.reducer(value, action),
        });
      }
    } else {
      const key = objects[i].key;
      const value = state[key];

      if (objects[i].includeInState) {
        Object.assign(combinedReducer, {
          [key]: objects[i].reducer(value, action),
        });
      }
    }
  }

  const nextState = deepCopy(state);

  middleware.push(logActions);
  // middleware.push(saveToIndexedDB);
  applyMiddleware(definition, nextState, action, middleware);

  return combinedReducer;
};
