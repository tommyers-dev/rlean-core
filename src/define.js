import { getDefinitionOptions } from "./_internal";

/**
 * @template T
 * @typedef DefineOptions
 * @type {object}
 * @property {string} getURL
 * @property {string} postURL
 * @property {object} initialState
 * @property {T} extensions
 */

/**
 * @typedef Definition
 * @type {object}
 * @property {string} key
 * @property {string} getURL
 * @property {string} postURL
 */

/**
 * Define an entity
 *
 * @template T
 *
 * @param {string} key Identifier of the entity
 * @param {DefineOptions<T>} options Entity definition options
 *
 * @return {Definition & {[Property in keyof T]: T[Property]}} Entity definition
 */
export const define = (key, options, callback) => {
  if (!key) {
    console.error(`Key is required for definition.`);
  }

  const {
    initialState,
    getURL,
    postURL,
    putURL,
    patchURL,
    deleteURL,
    persistData,
    preferStore,
    progressiveLoading,
    syncAfterTimeElapsed,
    adapters,
    type,
    reducer,
    updateState,
    nullableParams,
    includeInState,
    queueOffline,
  } = getDefinitionOptions(key, options);

  return {
    key,
    initialState,
    getURL,
    postURL,
    patchURL,
    putURL,
    deleteURL,
    persistData,
    preferStore,
    progressiveLoading,
    syncAfterTimeElapsed,
    adapters,
    type,
    reducer,
    updateState,
    callback,
    nullableParams,
    includeInState,
    queueOffline,
    ...(options?.extensions ?? {}),
  };
};
