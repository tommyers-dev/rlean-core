import ReactEnt from '../ReactEnt';
import { get } from '../helpers';

export const initialState = () => {
  // TODO: sort objects a - z
  const models = get(ReactEnt, 'config.models', {});

  const objects = Object.values(models);
  let combinedInitialState = {};

  for (let i = 0; i < objects.length; i++) {
    Object.assign(combinedInitialState, objects[i].prototype.initialState);
  }

  return combinedInitialState;
};
