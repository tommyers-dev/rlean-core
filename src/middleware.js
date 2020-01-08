import { Store } from './';

async function logActions(state, action, next) {
  console.log(`dispatching`, action.type);
  console.log(`next state`, state);
  return next(action);
}

async function setLocalData(state, action, next) { }

async function applyMiddleware(state, action, middleware) {
  return middleware.reduce((st, fn) => {
    return fn(st, action, (currentAction) => {
      return state;
    });
  }, state);
}

export {
  applyMiddleware,
  logActions
};
