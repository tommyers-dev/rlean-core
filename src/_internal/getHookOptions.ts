import { getValue } from "@rlean/utils";
import RLean from "../RLean";
import { convertToType } from "./convertToType";
import { Options, HookOptions, EntityDefineOptions } from "../types";

export const getHookOptions = <
  T extends EntityDefineOptions<any>,
  F extends Partial<Options<T>>
>(
  options: F
): HookOptions<T> => {
  if (!options) {
    return {
      definition: null,
      params: null,
      value: null,
      type: null,
      body: null,
      save: false,
      key: null,
    };
  }

  const entityDefinitions = getValue(RLean, "config.entities", {});
  const entities: (T & EntityDefineOptions<any>)[] =
    Object.values(entityDefinitions);

  const definition = options.key
    ? entities.find((entity) => entity.key === options.key)
    : options.entity ?? null;
  const key = definition.key;
  const add = options.add;

  return {
    definition,
    params: options.params ?? null,
    value: typeof options.value !== "undefined" ? options.value : null,
    type: add ? `ADD_${convertToType(key)}` : options.type ?? null,
    body: options.body ?? null,
    save: options.save,
  };
};
