import { deepCopy, get } from '@react-ent/utils';
import { ReactEnt } from './';

export const reducer = ({ ...state }, action) => {
  // TODO: sort objects a - z
  const models = get(ReactEnt, 'config.models', {});
  const objects = Object.values(models);
  let combinedReducer = {};

  for (let i = 0; i < objects.length; i++) {
    const key = Object.keys(objects[i].prototype.initialState)[0].toString();
    const value = state[key];
    Object.assign(combinedReducer, { [key]: objects[i].prototype.reducer(value, action) });
  }

  let nextState = deepCopy(state);
  const stateKey = Object.keys(action)[1].toString();
  const stateValue = action[stateKey];

  nextState[stateKey] = stateValue;

  if (get(ReactEnt, 'config.logToConsole', true)) {
    console.log(`dispatching`, action);
    console.log(`next state`, nextState);
  }

  return combinedReducer;
};
