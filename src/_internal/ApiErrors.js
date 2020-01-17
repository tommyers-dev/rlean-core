import { Model } from '../Model';
import { RLean } from '../';
import { get } from '@react-ent/utils';

export class ApiErrors extends Model {
  get initialState() {
    const models = get(RLean, 'config.models', {});
    const objects = Object.values(models);
    let apiErrors = {};

    for (let i = 0; i < objects.length; i++) {
      const key = Object.keys(objects[i].prototype.initialState)[0].toString();

      // Add to apiErrors if Model contains any API path

      if (
        objects[i].prototype.getPath ||
        objects[i].prototype.postPath ||
        objects[i].prototype.putPath ||
        objects[i].prototype.patchPath ||
        objects[i].prototype.deletePath
      ) {
        Object.assign(apiErrors, { [key]: { timestamp: null, message: null } });
      }
    }

    return {
      apiErrors
    };
  }

  get types() {
    return {
      SET_API_ERRORS: 'SET_API_ERRORS'
    };
  }

  reducer(state, action) {
    switch (action.type) {
      case this.types.SET_API_ERRORS:
        return {
          ...state,
          ...action.apiErrors
        };

      default:
        return state;
    }
  }

  async updateState(apiErrors, type) {
    return {
      type: this.types.SET_API_ERRORS,
      apiErrors
    };
  }
}
