import { Store, RLean } from ".";
import { getValue } from "@rlean/utils";
import { ActionType, EntityDefineOptions, GlobalState } from "./types";

async function logActions<T, K>(
  definition: EntityDefineOptions<T>,
  state: GlobalState<K>,
  action: ActionType
) {
  const stateKey = Object.keys(action)[1].toString();
  const logToConsole = getValue(RLean, "config.logToConsole", false);

  if (logToConsole) {
    console.log(`state`, state);
    console.log(`dispatching ${action.type}`, { [stateKey]: action[stateKey] });
  }

  // TODO: stateKey is flawed. Doesn't work for nested state objects. Fix it.
  // const stateKey = Object.keys(action)[1].toString();
  // const stateValue = action[stateKey];

  // TODO: Update state object to display next state instead of current state. Previous attempt was flawed.
  // nextState[stateKey] = stateValue;

  // console.log(`next state`, state);

  return state;
}

async function saveToIndexedDB<T, K>(
  definition: EntityDefineOptions<T>,
  state: GlobalState<K>,
  action: ActionType
) {
  if (definition.persistData) {
    await Store.set(definition, Object.values(action)[1]);
  }

  return state;
}

async function applyMiddleware<T, K>(
  definition: EntityDefineOptions<T>,
  state: GlobalState<K>,
  action: ActionType,
  middleware: Function[]
) {
  return middleware.map(async (fn) => {
    const returnable = await fn(definition, state, action);

    return returnable;
  });
}

export { applyMiddleware, logActions, saveToIndexedDB };
