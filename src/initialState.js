import { RLean } from './';
import { getValue } from '@rlean/utils';

export const initialState = () => {
  const stateDefinitions = getValue(RLean, 'config.stateDefinitions', {});
  const objects = Object.values(stateDefinitions);
  const objectsLength = objects.length;
  let combinedInitialState = {};

  for (let i = 0; i < objectsLength; i += 1) {
    if (objects[i].includeInState) {
      Object.assign(combinedInitialState, objects[i].initialState);
    }
  }

  return combinedInitialState;
};
