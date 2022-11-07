import localforage from "localforage";

class LocalForage {
  async set(key: string, value: Object) {
    if (!key || value === undefined) {
      throw new Error("Key or value cannot be undefined");
    }

    try {
      await localforage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(err);
    }
  }

  async setAll(units: { key: string; value: Object }[]) {
    if (units === undefined || units.length === 0) {
      throw new Error("Array cannot be null or empty");
    }

    units.forEach(async (kvPair) => {
      try {
        await this.set(kvPair.key, kvPair.value);
      } catch (err) {
        console.error(err);
      }
    });

    return true;
  }

  async get(key: string) {
    if (!key) {
      throw new Error("Must supply a key in get");
    }

    try {
      const value: string = await localforage.getItem(key);

      return value == null ? null : JSON.parse(value);
    } catch (err) {
      console.error(`LocalForage getItem error: ${err}`);
    }
  }

  async clear() {
    try {
      await localforage.clear();
    } catch (err) {
      console.error(err);
    }
  }

  async remove(key: string) {
    if (!key) {
      throw new Error("Must supply a key in remove");
    }

    try {
      await localforage.removeItem(key);
    } catch (err) {
      console.error(err);
    }
  }
}

export default new LocalForage();
