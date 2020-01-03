import { implement } from './_internal';

export default class Plugins {
  constructor(pluginMap) {
    this.pluginMap = pluginMap;

    for(let key in pluginMap) {
      this.pipe(key);
    }
  }

  pipe(pluginType) {
    switch(pluginType) {
      case 'storage':
        this.storage = this.setStorageEngine(this.pluginMap[pluginType]);
        break;
      case 'api':
        this.api = this.setAPIEngine(this.pluginMap[pluginType]);
        break;
      case 'logger':
        this.logger = this.setLoggingEngine(this.pluginMap[pluginType]);
        break;
      default:
        this[pluginType] = this.pluginMap[pluginType];
    }
  }

  setStorageEngine(storage) {
    const inspection = implement(storage, {
      rules: {
        methods: ['get', 'set', 'clear', 'remove']
      }
    });

    if(inspection.passed) {
      return storage;
    }

    throw new Error(inspection.error.message);
  }

  // Remove implementation logic, throw error if trying to call function that doens't exist yet
  setAPIEngine(api) {
    return api;
  }

  setLoggingEngine(logger) {
    const inspection = implement(logger, {
      rules: {
        methods: ['trace', 'info', 'warn', 'error']
      }
    });

    if(inspection.passed) {
      return logger;
    }

    throw new Error(inspection.error.message);
  }
}
