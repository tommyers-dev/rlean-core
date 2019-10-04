import { Store } from './';

/**
 * Clear all data from the store and from session.
 */
export const removeAll = async () => {
  Store.clear();
  sessionStorage.clear();
};
