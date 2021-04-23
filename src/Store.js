import { getStorageMethods } from './_internal/getStorageMethods';

class Store {
  /*
   * Makes the 'set' call to local storage to store data
   */
  async set(definition, value) {
    const { setStorage, getStorage } = getStorageMethods();

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
  async get(definition) {
    const { getStorage } = getStorageMethods();

    const key = definition.key;

    try {
      const value = await getStorage(key);
      return value;
    } catch (err) {
      console.log(err);
    }
  }

  async setAll(units) {
    const { setStorage } = getStorageMethods();

    if (units === undefined || units.length === 0) {
      throw new Error('Array cannot be null or empty');
    }

    units.forEach(async unit => {
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
    const { clearStorage } = getStorageMethods();

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
  async remove(definition) {
    const { removeStorage } = getStorageMethods();

    const key = definition.key;

    try {
      await removeStorage(key);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new Store();
