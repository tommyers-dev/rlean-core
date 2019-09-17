export const get = (obj, path, defaultValue) => {
  return path.split('.').reduce((a, c) => {
    return a != null && typeof a != 'undefined' && a[c] != null && typeof a[c] != 'undefined' ? a[c] : defaultValue != null ? defaultValue : null;
  }, obj);
};
