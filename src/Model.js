import { getModelOptions } from './_internal';

export const model = (key, options, callback) => {
  if (!key) {
    console.error(`Key is required for Model.`);
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
  } = getModelOptions(key, options);

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
  };
};
