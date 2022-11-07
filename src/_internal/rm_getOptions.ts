import { Options } from "../types";

/**
 * @todo definition should be entity??
 */
export const getOptions = (options: Options<any>) => {
  if (!options) {
    return {
      definition: null,
      params: null,
      value: null,
      type: null,
      body: null,
      save: false,
    };
  }

  return {
    definition: options.entity ?? null,
    params: options.params ?? null,
    value: typeof options.value !== "undefined" ? options.value : null,
    type: options.type ?? null,
    body: options.body ?? null,
    save: options.save,
  };
};
