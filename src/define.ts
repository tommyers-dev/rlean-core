import { getDefinitionOptions } from './_internal';

export const define = (
  key: string,
  options: object,
  callback: object
): object => {
  if (!key) {
    console.error(`Key is required for definition.`);
  }

  const {
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
  };
};
