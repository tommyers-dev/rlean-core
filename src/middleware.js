import { Store } from './';

async function logActions(model, state, action) {
  const stateKey = Object.keys(action)[1].toString();

  console.log(`state`, state);
  console.log(`dispatching ${action.type}`, { [stateKey]: action[stateKey] });
  console.log(`next state`, state);
  return state;
}

async function saveToIndexedDB(model, state, action) {
  if (model.persistData) {
    await Store.set(model, Object.values(action)[1]);
  }
  return state;
}

async function applyMiddleware(model, state, action, middleware) {
  return middleware.reduce((st, fn) => {
    return await fn(model, st, action);
  }, state);
}

export { applyMiddleware, logActions, saveToIndexedDB };
