import { RLean } from './';
import { getValue } from '@rlean/utils';

export const initialState = () => {
  const entityDefinitions = getValue(RLean, 'config.entities', {});
  const objects = Object.values(entityDefinitions);
  const objectsLength = objects.length;
  let combinedInitialState = {};

  for (let i = 0; i < objectsLength; i += 1) {
    if (objects[i].includeInState) {
      Object.assign(combinedInitialState, objects[i].initialState);
    }
  }

  return combinedInitialState;
};
