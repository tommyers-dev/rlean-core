import { Model } from '../Model';
import { ReactEnt } from '../';
import { get } from '@react-ent/utils';

export class IsLoading extends Model {
  get initialState() {
    const models = get(ReactEnt, 'config.models', {});
    const objects = Object.values(models);
    let isLoading = {};

    for (let i = 0; i < objects.length; i++) {
      const key = Object.keys(objects[i].prototype.initialState)[0].toString();

      // Add to isLoading if there is a getPath.
      if (objects[i].prototype.getPath) {
        Object.assign(isLoading, { [key]: false });
      }
    }

    return {
      isLoading
    };
  }

  get types() {
    return {
      SET_IS_LOADING: 'SET_IS_LOADING'
    };
  }

  /**
   * No need to store the isLoading state.
   */
  get persistData() {
    return false;
  }

  reducer(state, action) {
    switch (action.type) {
      case this.types.SET_IS_LOADING:
        return {
          ...state,
          ...action.isLoading
        };

      default:
        return state;
    }
  }

  async updateState(isLoading, type) {
    return {
      type: this.types.SET_IS_LOADING,
      isLoading
    };
  }
}