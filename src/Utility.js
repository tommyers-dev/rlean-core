export class Utility extends Object {
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

  throw(functionName) {
    throw new Error(`Model error: ${functionName} must be implemented in the derived class.`);
  }
}
