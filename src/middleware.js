import { Store, RLean } from './';

async function logActions(definition, state, action) {
  const stateKey = Object.keys(action)[1].toString();

  if (RLean.config.logToConsole) {
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

async function saveToIndexedDB(definition, state, action) {
  if (definition.persistData) {
    await Store.set(definition, Object.values(action)[1]);
  }

  return state;
}

async function applyMiddleware(definition, state, action, middleware) {
  return middleware.reduce(async (st, fn) => {
    const returnable = await fn(definition, st, action);

    return returnable;
  }, state);
}

export { applyMiddleware, logActions, saveToIndexedDB };
