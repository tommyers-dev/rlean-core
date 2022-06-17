export const convertToType = string => {
  return string
    ? string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2').toUpperCase()
    : null;
};
