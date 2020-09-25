import { getModelOptions } from './_internal';

export const model = (key, options, callback) => {
  if (!key) {
    console.error(`Key is required for Model.`);
  }

  const {
    initialState,
    getUri,
    postUri,
    putUri,
    patchUri,
    deleteUri,
    persistData,
    preferStore,
    progressiveLoading,
    syncAfterTimeElapsed,
    adapters,
    type,
    reducer,
    updateState,
  } = getModelOptions(key, options);

  return {
    key,
    initialState,
    getUri,
    postUri,
    patchUri,
    putUri,
    deleteUri,
    persistData,
    preferStore,
    progressiveLoading,
    syncAfterTimeElapsed,
    adapters,
    type,
    reducer,
    updateState,
    callback,
  };
};
