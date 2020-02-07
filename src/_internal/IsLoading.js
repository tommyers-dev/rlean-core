import { Model } from '../Model';
import { RLean } from '../';
import { getValue } from '@rlean/utils';
import { convertToType } from './convertToType';

export class IsLoading extends Model {
  get initialState() {
    const models = getValue(RLean, 'config.models', {});
    const objects = Object.values(models);
    let isLoading = {};

    for (let i = 0; i < objects.length; i++) {
      if (objects[i].prototype) {
        // Add to isLoading if there is a getPath.
        if (objects[i].prototype.getPath) {
          Object.assign(isLoading, { [objects[i].prototype.key]: false });
        }
      } else {
        // Add to isLoading if there is a getPath.
        if (objects[i].getPath) {
          Object.assign(isLoading, { [objects[i].key]: false });
        }
      }
    }

    return {
      isLoading
    };
  }

  // TODO: Remove. This isn't used.
  get types() {
    let isLoading = {};
    const models = getValue(RLean, 'config.models', {});
    const objects = Object.values(models);

    for (let i = 0; i < objects.length; i++) {
      const key = `SET_IS_LOADING${convertToType(objects[i].constructor.name)}`;

      if (objects[i].prototype && objects[i].prototype.getPath) {
        Object.assign(isLoading, { [key]: key });
      } else if (objects[i].getPath) {
        Object.assign(isLoading, { [key]: key });
      }
    }

    return {
      isLoading
    };
  }

  /**
   * No need to store the isLoading state.
   */
  get persistData() {
    return false;
  }

  // reducer(state, action) {
  //   switch (action.type) {
  //     case this.types.SET_IS_LOADING:
  //       return {
  //         ...state,
  //         ...action.isLoading
  //       };

  //     default:
  //       return state;
  //   }
  // }

  reducer(state, action) {
    const models = getValue(RLean, 'config.models', {});
    const objects = Object.values(models);

    for (let i = 0; i < objects.length; i++) {
      if (action.type === `SET_IS_LOADING_${objects[i].constructor.name.toUpperCase()}`) {
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

  async updateState(isLoading, type) {
    const models = getValue(RLean, 'config.models', {});
    const objects = Object.values(models);
    let key = '';

    for (let i = 0; i < objects.length; i++) {
      if (type === `SET_IS_LOADING_${objects[i].constructor.name.toUpperCase()}`) {
        key = objects[i].key;
      }
    }

    return {
      type: type,
      [key]: isLoading
    };
  }
}
