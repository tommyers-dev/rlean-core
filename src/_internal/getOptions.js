// NOT CONVERTED
export const getOptions = (options) => {
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
    definition: options.definition ?? null,
    params: options.params ?? null,
    value: typeof options.value !== "undefined" ? options.value : null,
    type: options.type ?? null,
    body: options.body ?? null,
    save: options.save,
  };
};
