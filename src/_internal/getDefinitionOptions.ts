import { ActionType, EntityDefineOptions, EntityState } from "../types";
import { hasValue } from "@rlean/utils";
import { convertToType } from "./convertToType";

export const getDefinitionOptions = <T>(
  key: string,
  options: Partial<EntityDefineOptions<T>>
) => {
  const defaultType = `SET_${convertToType(key)}`;
  const addType = `ADD_${convertToType(key)}`;

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
    queueOffline: false,
    type: defaultType,
    updateState: (value: any, givenType: string) => {
      return {
        type: givenType ?? defaultType,
        [key]: value,
      };
    },
    reducer: <T>(state: EntityState<T>, action: ActionType) => {
      switch (action.type) {
        case `${defaultType}_IS_LOADING`:
        case `${defaultType}_LAST_UPDATED`:
        case `${defaultType}_ERROR`:
        case defaultType:
          // Create an object if value is a string or number.
          if (typeof action[key] !== "object") {
            return {
              ...state,
              value: action[key],
            };
          }

          // If there is no value to set, clear state for this definition.
          if (!action[key]) {
            return null;
          }

          return {
            ...state,
            ...action[key],
          };

        case addType:
          // add to existing state
          if (hasValue(state, "data")) {
            return {
              ...state,
              data: [].concat(
                [],
                ...(state.data as unknown as Array<any>),
                ...action[key].data
              ),
            };
          } else {
            return {
              ...state,
              ...action[key],
            };
          }

        default:
          return state;
      }
    },
    listener: null,
  };

  if (!options) {
    return defaultOptions;
  }

  const initialState = options.initialState
    ? { [key]: options.initialState }
    : defaultOptions.initialState;
  const getURL = options.getURL ?? defaultOptions.getURL;
  const postURL = options.postURL ?? defaultOptions.postURL;
  const putURL = options.putURL ?? defaultOptions.putURL;
  const patchURL = options.patchURL ?? defaultOptions.patchURL;
  const deleteURL = options.deleteURL ?? defaultOptions.deleteURL;
  const nullableParams =
    options.nullableParams ?? defaultOptions.nullableParams;
  const persistData = options.persistData ?? defaultOptions.persistData;
  const preferStore = options.preferStore ?? defaultOptions.preferStore;
  const progressiveLoading =
    options.progressiveLoading ?? defaultOptions.progressiveLoading;
  const syncInterval = options.syncInterval ?? defaultOptions.syncInterval;
  const syncAfterTimeElapsed =
    options.syncAfterTimeElapsed ?? defaultOptions.syncAfterTimeElapsed;
  const adapters = options.adapters ?? defaultOptions.adapters;
  const queueOffline = options.queueOffline ?? defaultOptions.queueOffline;
  const type = options.type ?? defaultOptions.type;
  const updateState = options.updateState ?? defaultOptions.updateState;
  const reducer = options.reducer ?? defaultOptions.reducer;
  const includeInState =
    options.includeInState ?? defaultOptions.includeInState;
  const listener = options.listener ?? defaultOptions.listener;

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
    queueOffline,
    type,
    updateState,
    reducer,
    includeInState,
    listener,
  };
};
