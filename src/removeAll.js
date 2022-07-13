import { Store } from "..";
// NOT CONVERTED
/**
 * Clear all data from the store and from session.
 */
export const removeAll = async () => {
  sessionStorage.clear();
  localStorage.clear();
  Store.clear();
};
