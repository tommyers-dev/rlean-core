import { convertToType } from './_internal/convertToType';
import { Adapters } from './';

export class Model extends Object {
  get key() {
    return `${this.constructor.name.charAt(0).toLowerCase()}${this.constructor.name.slice(1)}`;
  }

  // If initialState isn't provided, a default one will be generated.
  get initialState() {
    return { [this.key]: null };
  }

  // If types isn't provided, a default one will be generated.
  get types() {
    return { [convertToType(this.constructor.name)]: `${convertToType(this.constructor.name)}` };
  }

  get getPath() {
    return null;
  }

  get postPath() {
    return null;
  }

  // check if storage or logger are given
  get adapters() {
    return new Adapters();
  }

  get putPath() {
    return null;
  }

  get deletePath() {
    return null;
  }

  get patchPath() {
    return null;
  }

  get nullableParams() {
    return false;
  }

  /**
   * If false, data isn't stored to storage. Api is called every time.
   * This will override preferStore (because there's no store)
   */
  get persistData() {
    return true;
  }

  /**
   * Will rely on storage instead of calling the API repeatedly.
   * This will override progressiveLoading.
   */
  get preferStore() {
    return false;
  }

  /**
   * Will return data in storage while the API retrieves the updated
   * values from the database and will do a deepCompare to check for changes.
   * If there are changes, it will dispatch an action to update the object.
   */
  get progressiveLoading() {
    return false;
  }

  /**
   * If set, will create a timer (TODO: in a web worker) that will re-sync the data.
   * Should be in milliseconds.
   */
  get syncInterval() {
    return null;
  }

  /**
   * If set, will make a call to the API after a certain amount of time (in milliseconds)
   * has elapsed. If the time has not elapsed, it will use the store. This will not
   * cause the data to refresh has soon as the time has elapsed, but new component
   * renders will trigger a new API call.
   */
  get syncAfterTimeElapsed() {
    return null;
  }

  // If a reducer isn't provided, a default one will be generated.
  reducer(state, action) {
    switch (action.type) {
      case convertToType(this.constructor.name):
        if (Array.isArray(action[this.key])) {
          return {
            ...state,
            array: action[this.key]
          };
        }

        return {
          ...state,
          ...action[this.key]
        };

      default:
        return state;
    }
  }

  /**
   * This is your main action. This is what will be called to update your
   * object in state. Type is not needed if there is only one type in
   * your model. If an updateState function isn't provided, a default one will be generated.
   *
   * @param {Object} value
   * @param {string} type
   */
  async updateState(value, type) {
    return {
      type: convertToType(this.constructor.name),
      [this.key]: value
    };
  }
}
