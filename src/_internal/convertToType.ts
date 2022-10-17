/**
 * convertToType
 * Creates all upper case string separating capitalized words with an underscore
 */
export const convertToType = (s: string) => {
  return s
    ? s.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1_$2").toUpperCase()
    : null;
};
