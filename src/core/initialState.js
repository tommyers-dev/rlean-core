import { ReactEnt } from '../';

const combineState = () => {
  // TODO: sort objects a - z
  let models = {};

  if (ReactEnt.config !== undefined && ReactEnt.config.models !== undefined) {
    models = ReactEnt.config.models;
  }

  const objects = Object.values(models);
  let combinedInitialState = {};

  for (let i = 0; i < objects.length; i++) {
    Object.assign(combinedInitialState, objects[i].prototype.initialState);
  }

  return combinedInitialState;
};

export const initialState = combineState();
