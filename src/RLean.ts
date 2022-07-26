// import { getValue } from "@rlean/utils";
import { RLeanConfig } from "./types";
// import { RLean_OfflineQueue } from "./_internal/entities";

class RLean<T> {
  public config: RLeanConfig<T>;

  async init(config: RLeanConfig<T>) {
    // const entities = getValue(config, "entities", {});

    // Here, the offlinequeue is added as entity but without a key
    // it could be added expanding the T with an specific RleanOfflineQueue
    /*
    const entities = config.entities ?? {};
    config.entities = { ...entities, RLean_OfflineQueue };
    */

    this.config = config;
  }

  setToken(token: string) {
    if (token) {
      this.config.api.token = token;
    }
  }
}

export default new RLean();
