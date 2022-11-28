import { EntityDefineOptions } from "./types";
import { getStorageMethods } from "./_internal/getStorageMethods";

class Store {
  /*
   * Makes the 'set' call to local storage to store data
   */
  async set<T>(definition: EntityDefineOptions<T>, value: Partial<T>) {
    const { setStorage, getStorage } = getStorageMethods(definition);

    const key = definition.key;

    try {
      await setStorage(key, value);

      const updatedValue = await getStorage(key);

      if (updatedValue === undefined) {
        throw new Error(`Could not set ${key} = ${value}`);
      }

      return { key, value };
    } catch (err) {
      console.log(err);
    }
  }

  /*
   * Makes the 'get' call to local storage to get some data
   */
  async get<T>(definition: EntityDefineOptions<T>) {
    const { getStorage } = getStorageMethods(definition);

    const key = definition.key;

    try {
      const value = await getStorage(key);
      return value;
    } catch (err) {
      console.log(err);
    }
  }

  async setAll(units: { key: string; value: Object }[]) {
    const { setStorage } = getStorageMethods(null);

    if (units === undefined || units.length === 0) {
      throw new Error("Array cannot be null or empty");
    }

    units.forEach(async (unit) => {
      try {
        await setStorage(unit.key, unit.value);
      } catch (e) {
        console.log(e);
      }
    });

    return true;
  }

  /*
   * Makes the 'clear' call to local storage to get clear local storage
   * Uses the storage engine found by decideWhichEngine, either adapter or default.
   */
  async clear() {
    const { clearStorage } = getStorageMethods(null);

    try {
      await clearStorage();
    } catch (err) {
      console.error(err);
    }
  }

  /*
   * Makes the 'remove' call to local storage to get remove a value from local storage
   * Uses the storage engine found by decideWhichEngine, either adapter or default.
   */
  async remove<T>(definition: EntityDefineOptions<T>) {
    const { removeStorage } = getStorageMethods(definition);

    const key = definition.key;

    try {
      await removeStorage(key);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new Store();
