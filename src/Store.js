class Store {
  /*
   * Makes the 'set' call to local storage to store data
   */
  async set(model, value) {
    const key = model.key;

    try {
      await model.adapters.storage.set(key, value);

      const updatedValue = await model.adapters.storage.get(key);

      if (updatedValue === undefined) throw new Error(`Could not set ${key} = ${value}`);

      return { key, value };
    } catch (err) {
      console.log(err);
    }
  }

  /*
   * Makes the 'get' call to local storage to get some data
   */
  async get(model) {
    const key = model.key;

    try {
      return await model.adapters.storage.get(key);
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
   * Uses the storage engine found by decideWhichEngine, either adapter or default.
   */
  async clear(model) {
    try {
      await model.adapters.storage.clear();
    } catch (err) {
      console.log(err);
    }
  }

  /*
   * Makes the 'remove' call to local storage to get remove a value from local storage
   * Uses the storage engine found by decideWhichEngine, either adapter or default.
   */
  async remove(model) {
    const key = model.key;

    try {
      await model.adapters.storage.remove(key);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new Store();
