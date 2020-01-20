import { Store } from './';

async function logActions(model, state, action, next) {
  console.log(`dispatching`, action.type);
  console.log(`next state`, state);
  return next(action);
}

async function saveToIndexedDB(model, state, action, next) {
  if (model.persistData) {
    await Store.set(model, Object.values(action)[1]);
  }

  return next(action);
}

async function applyMiddleware(model, state, action, middleware) {
  return middleware.reduce((st, fn) => {
    return fn(model, st, action, currentAction => {
      return state;
    });
  }, state);
}

export { applyMiddleware, logActions, saveToIndexedDB };
