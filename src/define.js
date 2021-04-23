import { getDefinitionOptions } from './_internal';

export const define = (key, options, callback) => {
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
  };
};
