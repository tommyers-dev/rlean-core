import { getValue } from '@rlean/utils';
import RLean from './RLean';
import { convertToType } from './_internal/convertToType';

const getKeys = () => {
  const stateDefinitions = getValue(RLean, 'config.stateDefinitions', {});
  const stateDefinitionsLength = stateDefinitions.length;
  const keys = {};

  for (let i = 0; i < stateDefinitionsLength; i += 1) {
    const key = convertToType(stateDefinitions[i].key);

    Object.assign(keys, {
      [key]: stateDefinitions[i].key,
    });
  }

  return Object.freeze(keys);
};

export const keys = getKeys();
