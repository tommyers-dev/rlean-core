import ReactEnt from './ReactEnt';
import { implement } from './_internal';
import { get, has } from '@react-ent/utils';
import { LocalForageAdapter, AxiosAdapter } from './adapters';

export default class Plugins {
  constructor(pluginMap) {
    this.pluginMap = pluginMap ? plugin : {};

    this.storage = get(ReactEnt, 'config.storage.adapter', LocalForageAdapter)
    this.api     = get(ReactEnt, 'config.api.adapter', AxiosAdapter);

    for(let key in pluginMap) {
      this.pipe(key);
    }
  }

  pipe(pluginType) {
    switch(pluginType) {
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
