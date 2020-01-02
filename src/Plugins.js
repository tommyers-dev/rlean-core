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
        this.logger = this.pluginMap[pluginType];
        break;
      default:
        this[pluginType] = this.pluginMap[pluginType];
    }
  }

  setStorageEngine(storage) {
    const inspection = implement(storage, {
      rules: {
        methods: ['get', 'set', 'clear', 'remove']
      },
      strictness: 'weak'
    });

    if(inspection.passed) {
      this.storage = storage;
      return;
    }

    throw new Error(inspection.error.message);
  }

  setAPIEngine(api) {
    const inspection = implement(api, {
      rules: {
        methods: ['get', 'post', 'put', 'remove']
      },
      strictness: 'weak'
    });

    if(inspection.passed) {
      this.api = api;
      return;
    }

    throw new Error(inspection.error.message);
  }

  setLoggingEngine(logger) {
    const inspection = implement(logger, {
      rules: {
        methods: ['trace', 'info', 'warn', 'error']
      },
      strictness: 'weak'
    });

    if(inspection.passed) {
      this.logger = logger;
      return;
    }

    throw new Error(inspection.error.message);
  }
}
