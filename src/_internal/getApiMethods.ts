import { getValue, hasValue } from "@rlean/utils";
import RLean from "../RLean";
import { AxiosAdapter } from "../defaultAdapters";
import { ApiAdapter, EntityDefineOptions } from "../types";

/**
 * getApiMethods
 * Returns all api methods from the adapter in an entity definition, or, if not
 * defined, from the configurated adapter
 */
export const getApiMethods = <T>(definition: EntityDefineOptions<T>) => {
  const api: ApiAdapter = hasValue(definition, "adapters.api")
    ? definition.adapters.api
    : getValue(RLean, "config.api.adapter", AxiosAdapter);

  const get = api.get;
  const put = api.put;
  const post = api.post;
  const del = api.del;
  const patch = api.patch;

  return { get, put, post, del, patch };
};
