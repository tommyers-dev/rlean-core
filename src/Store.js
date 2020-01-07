import { LocalForageAdapter } from './adapters';
import { has } from '@react-ent/utils';

class Store {

  /*
   * Get the Models state representation
  */
  getKeys(model) {
    if(!model) return;

    // If it's a string, it's already a key!
    if(typeof model === 'string' || model instanceof String) {
      return model;
    }

    return Object.keys(model.initialState)[0].toString();
  }

  /*
   * Makes the 'set' call to local storage to store data
  */
  async set(model, value) {
    const key = this.getKeys(model);

    try {
      await model.plugins.storage.set(key, value);

      const updatedValue = await model.plugins.storage.get(key);

      if(updatedValue === undefined) throw new Error(`Could not set ${key} = ${value}`);

      return { key, value };
    } catch (err) {
      console.log(err);
    }
  }

  /*
   * Makes the 'get' call to local storage to get some data
  */
  async get(model) {
    const key = this.getKeys(model);

    try {
      return await model.plugins.storage.get(key);
    } catch (err) {
      console.log(err);
    }
  }

  async setAll(units) {
    if (units === undefined || units.length === 0) {
      throw new Error('Array cannot be null or empty');
    }

    units.forEach(async kvPair => {
      try {
        await this.set(kvPair.key, kvPair.value);
      } catch (e) {
        console.log(e);
      }
    });

    return true;
  }

  /*
   * Makes the 'clear' call to local storage to get clear local storage
   * Uses the storage engine found by decideWhichEngine, either plugin or default.
  */
  async clear() {
    try {
      await model.plugins.storage.clear();
    } catch (err) {
      console.log(err);
    }
  }

  /*
   * Makes the 'remove' call to local storage to get remove a value from local storage
   * Uses the storage engine found by decideWhichEngine, either plugin or default.
  */
  async remove(model) {
    const key = this.getKeys(model);

    try {
      await model.plugins.storage.remove(key);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new Store();
