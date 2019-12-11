export class Model extends Object {
  get types() {
    return this.throw('types getter');
  }

  get initialState() {
    return this.throw('initialState getter');
  }

  get getPath() {
    return null;
  }

  get postPath() {
    return null;
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
   * If set, the api call will use the apiUriOverride path
   * instead of the path provided by the config.
   */
  get apiUriOverride() {
    return null;
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

  reducer() {
    this.throw('reducer(state, action)');
  }

  /**
   * This is your main action. This is what will be called to update your
   * object in state. Type is not needed if there is only one type in
   * your model.
   *
   * @param {Object} stateObj
   * @param {string} type
   */
  updateState(stateObj, type) {
    this.throw('updateState(stateObj, type)');
  }

  throw(functionName) {
    throw new Error(`Model error: ${functionName} must be implemented in the derived class.`);
  }
}
