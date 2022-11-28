import { getValue, hasValue } from "@rlean/utils";
import RLean from "../RLean";
import { LocalForageAdapter } from "../defaultAdapters";
import { EntityDefineOptions } from "../types";

export const getStorageMethods = (definition: EntityDefineOptions<any>) => {
  const store = hasValue(definition, "adapters.storage")
    ? definition.adapters.storage
    : getValue(RLean, "config.storage.adapter", LocalForageAdapter);

  const setStorage = store.set;
  const getStorage = store.get;
  const removeStorage = store.remove;
  const clearStorage = store.clear;

  return { setStorage, getStorage, removeStorage, clearStorage };
};
