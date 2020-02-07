import RLean from './RLean';
import { implement } from './_internal';
import { getValue } from '@rlean/utils';
import { LocalForageAdapter, AxiosAdapter } from './adapters';

export default class Plugins {
  constructor(pluginMap) {
    this.pluginMap = pluginMap ? pluginMap : {};

    this.storage = getValue(RLean, 'config.storage.adapter', LocalForageAdapter);
    this.api = getValue(RLean, 'config.api.adapter', AxiosAdapter);

    for (let key in pluginMap) {
      this.pipe(key);
    }
  }

  pipe(pluginType) {
    switch (pluginType) {
      case 'storage':
        this.storage = this.ensureCorrectStorageImplementation(this.pluginMap[pluginType]);
        break;
      case 'api':
        this.api = this.pluginMap[pluginType];
        break;
      case 'logger':
        this.logger = this.setLoggingEngine(this.pluginMap[pluginType]);
        break;
      default:
        this[pluginType] = this.pluginMap[pluginType];
    }
  }

  ensureCorrectStorageImplementation(storage) {
    const inspection = implement(storage, { methods: ['get', 'set', 'clear', 'remove'] });

    if (inspection.passed) {
      return storage;
    }

    throw new Error(inspection.error.message);
  }

  setLoggingEngine(logger) {
    const inspection = implement(logger, { methods: ['trace', 'info', 'warn', 'error'] });

    if (inspection.passed) {
      return logger;
    }

    throw new Error(inspection.error.message);
  }
}
