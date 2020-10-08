import { RLean } from './';
import { getValue } from '@rlean/utils';

export const initialState = () => {
  const models = getValue(RLean, 'config.models', {});
  const objects = Object.values(models);
  let combinedInitialState = {};

  for (let i = 0; i < objects.length; i++) {
    if (objects[i].includeInState) {
      Object.assign(combinedInitialState, objects[i].initialState);
    }
  }

  return combinedInitialState;
};
