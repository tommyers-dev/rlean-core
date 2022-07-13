import { EntityDefineOptions } from "./types";
import { getDefinitionOptions } from "./_internal";

export default function define<T>(
  key: string,
  options: Partial<EntityDefineOptions<T>>,
  callback: Function
): EntityDefineOptions<T> {
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
    ...(options?.extensions ?? {}),
  };
}
