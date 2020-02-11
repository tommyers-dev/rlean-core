import { Model } from '../Model';
import { RLean } from '../';
import { getValue } from '@rlean/utils';
import { AxiosAdapter, LocalForageAdapter } from '../defaultAdapters';
import { Adapters } from '../';

export class LastUpdated extends Model {
  get initialState() {
    const models = getValue(RLean, 'config.models', {});
    const objects = Object.values(models);
    let lastUpdated = {};

    for (let i = 0; i < objects.length; i++) {
      if (objects[i].prototype) {
        // Add to lastUpdated if there is a getPath.
        if (objects[i].prototype.getPath) {
          Object.assign(lastUpdated, { [objects[i].prototype.key]: null });
        }
      } else {
        // Add to lastUpdated if there is a getPath.
        if (objects[i].getPath) {
          Object.assign(lastUpdated, { [objects[i].key]: null });
        }
      }
    }

    return {
      lastUpdated
    };
  }

  // TODO: Remove. This isn't used.
  get types() {
    const models = getValue(RLean, 'config.models', {});
    const objects = Object.values(models);
    let lastUpdated = {};

    for (let i = 0; i < objects.length; i++) {
      const key = `SET_LAST_UPDATED_${objects[i].constructor.name.toUpperCase()}`;

      if (objects[i].prototype && objects[i].prototype.getPath) {
        Object.assign(lastUpdated, { [key]: key });
      } else if (objects[i].getPath) {
        Object.assign(lastUpdated, { [key]: key });
      }
    }

    return {
      lastUpdated
    };
  }

  // TODO: REMOVE THIS!!! This is a problem!
  get adapters() {
    return new Adapters({
      storage: LocalForageAdapter,
      api: AxiosAdapter
    });
  }

  reducer(state, action) {
    const models = getValue(RLean, 'config.models', {});
    const objects = Object.values(models);

    for (let i = 0; i < objects.length; i++) {
      if (action.type === `SET_LAST_UPDATED_${objects[i].constructor.name.toUpperCase()}`) {
        let objectKey = '';
        if (objects[i].prototype) {
          objectKey = objects[i].prototype.key;
        } else {
          objectKey = objects[i].key;
        }

        return {
          ...state,
          [objectKey]: action[objectKey]
        };
      }
    }

    return state;
  }

  async updateState(lastUpdated, type) {
    const models = getValue(RLean, 'config.models', {});
    const objects = Object.values(models);
    let key = '';

    for (let i = 0; i < objects.length; i++) {
      const lastUpdatedType = `SET_LAST_UPDATED_${objects[i].constructor.name.toUpperCase()}`;

      if (type === lastUpdatedType) {
        key = objects[i].key;
      }
    }

    return {
      type: type,
      [key]: lastUpdated
    };
  }
}
