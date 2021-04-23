import RLean from '../RLean';
import { getValue } from '@rlean/utils';

export const getHookOptions = options => {
  if (!options) {
    return {
      definition: null,
      params: null,
      value: null,
      type: null,
      body: null,
      save: false,
      key: null,
    };
  }

  const stateDefinitions = getValue(RLean, 'config.stateDefinitions', {});
  const key = options.key ?? null;
  const objects = Object.values(stateDefinitions);
  const definition = key
    ? objects.find(object => object.key === key)
    : options.definition ?? null;

  return {
    definition,
    params: options.params ?? null,
    value: typeof options.value !== 'undefined' ? options.value : null,
    type: options.type ?? null,
    body: options.body ?? null,
    save: options.save,
  };
};
