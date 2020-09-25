export const convertToType = string => {
  if (string) {
    return `SET_${string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2').toUpperCase()}`;
  }
};
