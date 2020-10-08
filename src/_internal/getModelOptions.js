import { convertToType } from './convertToType';

export const getModelOptions = (key, options) => {
  const defaultType = convertToType(key);

  const getInitialState = () => {
    const value = { [key]: null };

    if (options && options.getURL) {
      value.isLoading = false;
      value.lastUpdated = null;
    }

    return value;
  };

  const defaultOptions = {
    initialState: getInitialState(),
    getURL: null,
    postURL: null,
    putURL: null,
    patchURL: null,
    deleteURL: null,
    nullableParams: null,
    persistData: true,
    preferStore: false,
    progressiveLoading: false,
    syncInterval: null,
    syncAfterTimeElapsed: false,
    adapters: null,
    includeInState: true,
    type: defaultType,
    updateState: (value, type) => {
      return {
        type: type ? type : defaultType,
        [key]: value,
      };
    },
    reducer: (state, action) => {
      switch (action.type) {
        case `${defaultType}_IS_LOADING`:
        case `${defaultType}_LAST_UPDATED`:
        case `${defaultType}_ERROR`:
        case defaultType:
          // Create an object if value is a string or number.
          if (typeof action[key] !== 'object') {
            return {
              ...state,
              value: action[key],
            };
          }

          return {
            ...state,
            ...action[key],
          };

        default:
          return state;
      }
    },
  };

  if (!options) {
    return defaultOptions;
  }

  const initialState = options.initialState ? { [key]: options.initialState } : defaultOptions.initialState;
  const getURL = options.getURL ?? defaultOptions.getURL;
  const postURL = options.postURL ?? defaultOptions.postURL;
  const putURL = options.putURL ?? defaultOptions.putURL;
  const patchURL = options.patchURL ?? defaultOptions.patchURL;
  const deleteURL = options.deleteURL ?? defaultOptions.deleteURL;
  const nullableParams = options.nullableParams ?? defaultOptions.nullableParams;
  const persistData = options.persistData ?? defaultOptions.persistData;
  const preferStore = options.preferStore ?? defaultOptions.preferStore;
  const progressiveLoading = options.progressiveLoading ?? defaultOptions.progressiveLoading;
  const syncInterval = options.syncInterval ?? defaultOptions.syncInterval;
  const syncAfterTimeElapsed = options.syncAfterTimeElapsed ?? defaultOptions.syncAfterTimeElapsed;
  const adapters = options.adapters ?? defaultOptions.adapters;
  const type = options.type ?? defaultOptions.type;
  const updateState = options.updateState ?? defaultOptions.updateState;
  const reducer = options.reducer ?? defaultOptions.reducer;
  const includeInState = options.includeInState ?? defaultOptions.includeInState;

  return {
    initialState,
    getURL,
    postURL,
    putURL,
    patchURL,
    deleteURL,
    nullableParams,
    persistData,
    preferStore,
    progressiveLoading,
    syncInterval,
    syncAfterTimeElapsed,
    adapters,
    type,
    updateState,
    reducer,
    includeInState,
  };
};
