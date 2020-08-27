import { Store } from "./";

async function logActions(model, state, action) {
  const stateKey = Object.keys(action)[1].toString();

  console.log(`state`, state);
  console.log(`dispatching ${action.type}`, { [stateKey]: action[stateKey] });

  // TODO: stateKey is flawed. Doesn't work for nested state objects. Fix it.
  // const stateKey = Object.keys(action)[1].toString();
  // const stateValue = action[stateKey];

  // TODO: Update state object to display next state instead of current state. Previous attempt was flawed.
  // nextState[stateKey] = stateValue;

  // console.log(`next state`, state);

  return state;
}

async function saveToIndexedDB(model, state, action) {
  if (model.persistData) {
    await Store.set(model, Object.values(action)[1]);
  }
  return state;
}

async function applyMiddleware(model, state, action, middleware) {
  return middleware.reduce(async (st, fn) => {
    const returnable = await fn(model, st, action);
    return returnable;
  }, state);
}

export { applyMiddleware, logActions, saveToIndexedDB };
