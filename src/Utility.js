import Plugins from './Plugins';

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

  get plugins() {
    return new Plugins();
  }

  throw(functionName) {
    throw new Error(`Model error: ${functionName} must be implemented in the derived class.`);
  }
}
