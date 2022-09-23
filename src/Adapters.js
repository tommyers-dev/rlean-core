import RLean from "./RLean";
import { implement } from "./_internal";
import { getValue } from "@rlean/utils";
import { LocalForageAdapter, AxiosAdapter } from "./defaultAdapters";
// NOT CONVERTED
export default class Adapters {
  constructor(adapterMap) {
    this.adapterMap = adapterMap ? adapterMap : {};

    this.storage = getValue(
      RLean,
      "config.storage.adapter",
      LocalForageAdapter
    );
    this.api = getValue(RLean, "config.api.adapter", AxiosAdapter);

    for (let key in adapterMap) {
      this.pipe(key);
    }
  }

  pipe(adapterMap) {
    switch (adapterMap) {
      case "storage":
        this.storage = this.ensureCorrectStorageImplementation(
          this.adapterMap[adapterMap]
        );
        break;
      case "api":
        this.api = this.adapterMap[adapterMap];
        break;
      case "logger":
        this.logger = this.setLoggingEngine(this.adapterMap[adapterMap]);
        break;
      default:
        this[adapterMap] = this.adapterMap[adapterMap];
    }
  }

  ensureCorrectStorageImplementation(storage) {
    const inspection = implement(storage, {
      methods: ["get", "set", "clear", "remove"],
    });

    if (inspection.passed) {
      return storage;
    }

    throw new Error(inspection.error.message);
  }

  setLoggingEngine(logger) {
    const inspection = implement(logger, {
      methods: ["trace", "info", "warn", "error"],
    });

    if (inspection.passed) {
      return logger;
    }

    throw new Error(inspection.error.message);
  }
}
