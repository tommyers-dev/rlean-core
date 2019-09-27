import { ReactEnt } from './';
import { get } from '@react-ent/utils';
import { IsLoading, LastUpdated } from './_internal';

export const initialState = () => {
  const models = get(ReactEnt, 'config.models', {});
  const objects = Object.values(models);
  let combinedInitialState = {};

  for (let i = 0; i < objects.length; i++) {
    Object.assign(combinedInitialState, objects[i].prototype.initialState);
  }

  Object.assign(combinedInitialState, new IsLoading().initialState);
  Object.assign(combinedInitialState, new LastUpdated().initialState);

  return combinedInitialState;
};
