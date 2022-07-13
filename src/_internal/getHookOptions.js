import { getValue } from "@rlean/utils";
import RLean from "../RLean";
import { convertToType } from "./convertToType";
// NOT CONVERTED
export const getHookOptions = (options) => {
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
  const objects = Object.values(entityDefinitions);
  const definition = key
    ? objects.find((object) => object.key === key)
    : options.entity ?? null;
  const key = definition.key ?? null;
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
