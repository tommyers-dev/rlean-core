import { deepCopy, get } from '@react-ent/utils';
import { ReactEnt } from './';
import { IsLoading, LastUpdated } from './_internal';
import { logActions, applyMiddleware } from './middleware';

export const reducer = ({ ...state }, action) => {
  const models = get(ReactEnt, 'config.models', {});
  const middleware = get(ReactEnt, 'config.middleware', []);
  const objects = Object.values(models);
  let combinedReducer = {};

  for (let i = 0; i < objects.length; i++) {
    const key = Object.keys(objects[i].prototype.initialState)[0].toString();
    const value = state[key];
    Object.assign(combinedReducer, { [key]: objects[i].prototype.reducer(value, action) });
  }

  // Add IsLoading and LastUpdated reducers to main reducer.
  Object.assign(combinedReducer, { isLoading: new IsLoading().reducer(state['isLoading'], action) });
  Object.assign(combinedReducer, { lastUpdated: new LastUpdated().reducer(state['lastUpdated'], action) });

  let nextState = deepCopy(state);
  const stateKey = Object.keys(action)[1].toString();
  const stateValue = action[stateKey];

  nextState[stateKey] = stateValue;

  if (get(ReactEnt, 'config.logToConsole', true)) {
    middleware.push(logActions);
  }

  applyMiddleware(nextState, action, middleware);

  return combinedReducer;
};
