import { RLean } from './';
import { getValue } from '@rlean/utils';
import { IsLoading, LastUpdated } from './_internal';

export const initialState = () => {
  const models = getValue(RLean, 'config.models', {});
  const objects = Object.values(models);
  let combinedInitialState = {};

  for (let i = 0; i < objects.length; i++) {
    if (objects[i].prototype) {
      Object.assign(combinedInitialState, objects[i].prototype.initialState);
    } else {
      Object.assign(combinedInitialState, objects[i].initialState);
    }
  }

  Object.assign(combinedInitialState, new IsLoading().initialState);
  Object.assign(combinedInitialState, new LastUpdated().initialState);

  return combinedInitialState;
};
