import RLean from "./RLean";
import { implement } from "./_internal";
import { getValue } from "@rlean/utils";
import { LocalForageAdapter, AxiosAdapter } from "./defaultAdapters";
import { AdapterMap, ApiAdapter } from "./types";

export default class Adapters {
  public adapterMap: AdapterMap;
  public api: ApiAdapter;
  public storage: any;
  public logger: any;

  constructor(adapterMap: AdapterMap) {
    this.adapterMap = adapterMap ? adapterMap : {};

    this.storage = getValue(
      RLean,
      "config.storage.adapter",
      LocalForageAdapter
    );
    this.api = getValue(RLean, "config.api.adapter", AxiosAdapter);

    for (let key in adapterMap) {
      this.pipe(key as keyof AdapterMap);
    }
  }

  pipe(adapterMapKey: keyof AdapterMap) {
    switch (adapterMapKey) {
      case "storage":
        this.storage = this.ensureCorrectStorageImplementation(
          this.adapterMap[adapterMapKey]
        );
        break;
      case "api":
        this.api = this.adapterMap[adapterMapKey];
        break;
      case "logger":
        this.logger = this.setLoggingEngine(this.adapterMap[adapterMapKey]);
        break;
      default:
        this[adapterMapKey] = this.adapterMap[adapterMapKey];
    }
  }

  ensureCorrectStorageImplementation(storage: any) {
    const inspection = implement(storage, {
      methods: ["get", "set", "clear", "remove"],
    });

    if (inspection.passed) {
      return storage;
    }

    throw new Error(inspection.error.message);
  }

  setLoggingEngine(logger: any) {
    const inspection = implement(logger, {
      methods: ["trace", "info", "warn", "error"],
    });

    if (inspection.passed) {
      return logger;
    }

    throw new Error(inspection.error.message);
  }
}
