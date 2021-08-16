import { getValue } from '@rlean/utils';
import { RLean_OfflineQueue } from './_internal/entities';

class RLean {
  async init(config) {
    const entities = getValue(config, 'entities', {});
    config.entities = { ...entities, RLean_OfflineQueue };
    this.config = config;
  }

  setToken(token) {
    if (token) {
      this.config.api.token = token;
    }
  }
}

export default new RLean();
