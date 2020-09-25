export const getHookOptions = options => {
  if (!options) {
    return {
      model: null,
      params: null,
      value: null,
      type: null,
      body: null,
      save: false,
    };
  }

  return {
    model: options.model ?? null,
    params: options.params ?? null,
    value: typeof options.value !== 'undefined' ? options.value : null,
    type: options.type ?? null,
    body: options.body ?? null,
    save: options.save,
  };
};
