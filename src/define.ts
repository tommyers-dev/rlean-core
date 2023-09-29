import { EntityDefineOptions } from './types';
import { getDefinitionOptions } from './_internal';

/**
 * define
 * Creates base entity definition using data type as generic
 */
export const define = <T>(
  key: string,
  options?: Partial<EntityDefineOptions<T>>,
  callback?: Function
): EntityDefineOptions<T> => {
  if (!key) {
    throw new Error('Key is required for definition.');
  }

  const {
    baseURLOverride,
    initialState,
    getURL,
    postURL,
    putURL,
    patchURL,
    deleteURL,
    persistData,
    preferStore,
    progressiveLoading,
    syncAfterTimeElapsed,
    adapters,
    type,
    reducer,
    updateState,
    nullableParams,
    includeInState,
    queueOffline,
  } = getDefinitionOptions(key, options);

  return {
    key,
    baseURLOverride,
    initialState,
    getURL,
    postURL,
    patchURL,
    putURL,
    deleteURL,
    persistData,
    preferStore,
    progressiveLoading,
    syncAfterTimeElapsed,
    adapters,
    type,
    reducer,
    updateState,
    callback,
    nullableParams,
    includeInState,
    queueOffline,
    ...(options?.extensions ?? {}),
  };
};
