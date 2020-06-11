import { deepCopy, getValue } from '@rlean/utils';
import { RLean } from './';
import { logActions, saveToIndexedDB, applyMiddleware } from './middleware';

export const reducer = ({ ...state }, action) => {
  const models = getValue(RLean, 'config.models', {});
  const middleware = getValue(RLean, 'config.middleware', []);
  const objects = Object.values(models);
  let combinedReducer = {};

  for (let i = 0; i < objects.length; i++) {
    if (objects[i].prototype) {
      const key = objects[i].prototype.key;
      const value = state[key];
      Object.assign(combinedReducer, { [key]: objects[i].prototype.reducer(value, action) });
    } else {
      const key = objects[i].key;
      const value = state[key];
      Object.assign(combinedReducer, { [key]: objects[i].reducer(value, action) });
    }
  }

  const nextState = deepCopy(state);
  // TODO: stateKey is flawed. Doesn't work for nested state objects. Fix it.
  // const stateKey = Object.keys(action)[1].toString();
  // const stateValue = action[stateKey];

  // TODO: Update state object to display next state instead of current state. Previous attempt was flawed.
  // nextState[stateKey] = stateValue;

  middleware.push(logActions);
  middleware.push(saveToIndexedDB);
  applyMiddleware(RLean.model, nextState, action, middleware);

  return combinedReducer;
};
