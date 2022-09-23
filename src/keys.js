import { getValue } from "@rlean/utils";
import RLean from "./RLean";
import { convertToType } from "./_internal/convertToType";
// NOT CONVERTED
const getKeys = () => {
  const entityDefinitions = getValue(RLean, "config.entities", {});
  const entityDefinitionsLength = entityDefinitions.length;
  const keys = {};

  for (let i = 0; i < entityDefinitionsLength; i += 1) {
    const key = convertToType(entityDefinitions[i].key);

    Object.assign(keys, {
      [key]: entityDefinitions[i].key,
    });
  }

  return Object.freeze(keys);
};

export const keys = getKeys();
