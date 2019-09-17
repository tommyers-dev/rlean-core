import localforage from 'localforage';

class Store {
  async set(key, value) {
    if (!key || value === undefined) {
      throw new Error('Key or value cannot be undefined');
    }

    try {
      await localforage.setItem(key, JSON.stringify(value));

      const updatedValue = await localforage.getItem(key);

      if (updatedValue === undefined) throw new Error(`Could not set ${key} = ${value}`);

      return { key, value };
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

  async get(key) {
    if (!key) throw new Error('Must supply a key in get');

    try {
      const value = await localforage.getItem(key);

      return value == null ? null : JSON.parse(value);
    } catch (err) {
      console.log(`LocalForage getItem error: ${err}`);
    }
  }

  async clear() {
    try {
      await localforage.clear();
    } catch (err) {
      console.log(err);
    }
  }

  async remove(key) {
    if (!key) throw new Error('Must supply a key in remove');

    try {
      await localforage.removeItem(key);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new Store();
