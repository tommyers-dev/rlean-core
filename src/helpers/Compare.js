import { deepCopy } from './deepCopy';

class Compare {
  constructor() {
    this.value = null;
    this.depthTracking = {};
    this.log = {};
    this.errorStyles = 'color:red;';
    this.standardStyles = 'color:black;';
    this.pathStyles = 'font-style:italic;color:blue;';
  }

  /**
   * Must be called at the end of the chain to return the result of the comparison.
   */
  get isEqual() {
    return this.value;
  }

  /**
   * Set strictEquality to false to coerce conversion if values are different types. Defaults to true.
   *
   * @param {*} a
   * @param {*} b
   * @param {boolean} strictEquality
   */
  deepCompare(a, b, strictEquality = true) {
    const { _resetLog, _incrementDepth, _pass, _fail } = this;

    /* #region  Reset log if necessary */
    _resetLog();
    /* #endregion */

    /* #region  Track recursion depth */
    _incrementDepth();
    /* #endregion */

    /* #region  Undefined */
    if (a === undefined && b === undefined) {
      // both values are undefined, so pass
      return _pass();
    } else if (a === undefined || b === undefined) {
      return _fail(a, b, 'One of the values is undefined');
    }
    /* #endregion */

    /* #region  Nulls */
    if (a === null && b === null) {
      // both values are null, so pass
      return _pass();
    } else if (a === null || b === null) {
      // only one value is null
      return _fail(a, b, 'One of the values is null');
    }
    /* #endregion */

    /* #region  Function comparison */
    if (typeof a === 'function' && typeof b === 'function') {
      const isEqual = a.toString() === b.toString();

      if (!isEqual) {
        return _fail(a, b, 'Functions are not equal');
      }

      return _pass();
    } else if (typeof a === 'function' || typeof b === 'function') {
      return _fail(a, b, 'The values are not the same type');
    }
    /* #endregion */

    /* #region  Neither values are objects */
    if (typeof a !== 'object' && typeof b !== 'object') {
      // Values are not objects so do a simple comparison without type checking
      // unless strictEquality is true.
      const isEqual = a == b;
      const isStrictEqual = a === b;

      if (strictEquality && !isStrictEqual) {
        const msg = isEqual ? 'The values are different types' : 'The values are not equal';

        return _fail(a, b, msg);
      } else if (!isEqual) {
        return _fail(a, b, 'The values are not equal');
      }

      return _pass();
    } else if (typeof a !== 'object' || typeof b !== 'object') {
      return _fail(a, b, 'The values are different types');
    }
    /* #endregion */

    /* #region  values are objects so we should deepCopy before going further */
    a = deepCopy(a);
    b = deepCopy(b);
    /* #endregion */

    /* #region  Verify the objects have the same prototype chains */
    if (a.constructor !== b.constructor) {
      return _fail(a, b, 'The objects have different proptype chains');
    }
    /* #endregion */

    /* #region  Date comparison */
    if (a instanceof Date && b instanceof Date) {
      // compare dates
      const isEqual = new Date(a.getTime()).toString() === new Date(b.getTime()).toString();

      if (!isEqual) {
        return _fail(a, b, 'The dates are not equal');
      }

      return _pass();
    } else if (a instanceof Date || b instanceof Date) {
      // only one value is a Date
      return _fail(a, b, 'The values are not the same type');
    }
    /* #endregion */

    /* #region  Array comparison */
    if (a instanceof Array && b instanceof Array) {
      // Check array lengths. If not of equal length, then return false.
      if (a.length !== b.length) {
        return _fail(a, b, 'The arrays are different lengths');
      }

      for (let aI = a.length - 1; aI >= 0; --aI) {
        /* #region  What's going on here... */
        // Iterate through the first array, getting the value at each index.
        // Find that value in the other array.
        // If it's an object, need to search for that object,
        // iterate through the second array doing a deepCompare.
        // Splice from first array. if match is found in second array,
        // then splice from that array.
        // After the first array has been iterated over,
        // do a comparison of the array lengths to determine if the arrays are equal.
        /* #endregion */
        const x = a[aI];

        if (typeof x === 'object') {
          this.depthTracking.path.push(`[${aI}]`);

          for (let bI = b.length - 1; bI >= 0; --bI) {
            const isEqual = this.deepCompare(x, b[bI], strictEquality);
            if (isEqual) {
              b.splice(bI, 1);
              break;
            }
          }

          a.splice(aI, 1);

          if (a.length !== b.length) {
            return _fail(a, b, 'The arrays contain different values');
          } else {
            this.depthTracking.path.splice(this.depthTracking.path.length - 1, 1);
          }
        } else if (typeof x === 'function') {
          for (let bI = b.length - 1; bI >= 0; --bI) {
            const isEqual = x.toString() === b[bI].toString();
            if (isEqual) {
              b.splice(bI, 1);
              break;
            }
          }

          a.splice(aI, 1);
        } else if (strictEquality) {
          // Search for that value in the other array and get the index.
          const bI = b.indexOf(x);

          if (bI === -1) {
            // Value didn't exist. Exit comparison.
            return _fail(a, b, 'Value in first array did not exist in second array');
          } else {
            // Value exists. Remove both values from arrays.
            a.splice(aI, 1);
            b.splice(bI, 1);
          }
        } else {
          for (let bI = b.length - 1; bI >= 0; --bI) {
            const isEqual = x == b[bI];
            if (isEqual) {
              // Remove value from b if there is a match.
              b.splice(bI, 1);
              break;
            }
          }

          // Remove value from a regardless of match.
          a.splice(aI, 1);
        }
      }

      // After first array is empty, check against length of second array.
      // if lengths are not equal, then arrays are not equal.
      if (a.length !== b.length) {
        return _fail(a, b, 'Value in second array did not exist in first array');
      }

      // Arrays were the same length.
      return _pass();
    } else if (a instanceof Array || b instanceof Array) {
      // Values are different types. Exit comparison.
      return _fail(a, b, 'The values are not the same type');
    }
    /* #endregion */

    /* #region  Object comparison */
    if (a instanceof Object && b instanceof Object) {
      // First check for an equal number of properties.
      if (Object.keys(a).length !== Object.keys(b).length) {
        return _fail(a, b, 'The objects have different properties');
      }

      for (let propertyName in a) {
        /* #region  What's going on here... */
        // Need to type check these.
        // If the property is an object then call deepCompare
        // to break down the object a little further.
        // If not an object, handle function and primitive comparisons right here.
        /* #endregion */
        if (typeof a[propertyName] === 'object' && typeof b[propertyName] === 'object') {
          this.depthTracking.path.push(propertyName);
          const isEqual = this.deepCompare(a[propertyName], b[propertyName], strictEquality);
          if (!isEqual) {
            return _fail(a, b, "The objects' properties have different values");
          } else {
            this.depthTracking.path.splice(this.depthTracking.path.length - 1, 1);
          }
        } else if (typeof a[propertyName] === 'object' || typeof b[propertyName] === 'object') {
          return _fail(a, b, 'Only one of the properties is an object');
        } else if (typeof a[propertyName] === 'function' && typeof b[propertyName] === 'function') {
          if (a[propertyName].toString() !== b[propertyName].toString()) {
            return _fail(a, b, 'The functions are different');
          }
        } else if (typeof a[propertyName] === 'function' || typeof b[propertyName] === 'function') {
          return _fail(a, b, 'Only one of the values is a function');
        } else if (strictEquality && a[propertyName] !== b[propertyName]) {
          const msg = a[propertyName] == b[propertyName] ? 'The values are different types' : 'The values are not equal';
          return _fail(a, b, msg);
        } else if (a[propertyName] != b[propertyName]) {
          return _fail(a, b, 'The values are not equal');
        }
      }

      return _pass();
    } else if (a instanceof Object || b instanceof Object) {
      // Values are different types.
      return _fail(a, b, 'Only one of the values is an object');
    }
    /* #endregion */
  }

  /**
   * Will log details to the console if an inequality is found.
   *
   * @param {boolean} shouldLog
   */
  consoleLog(shouldLog = true) {
    if (shouldLog && typeof this.log.message !== 'undefined') {
      console.log(
        `######## %cdeepCompare inequality found! ${this.log.message}: %c${this.log.path} %c${JSON.stringify(this.log.a)}%c, %c${JSON.stringify(this.log.b)}%c`,
        this.standardStyles,
        this.pathStyles,
        this.errorStyles,
        this.standardStyles,
        this.errorStyles,
        this.standardStyles
      );
    }

    return this;
  }

  /**
   * Will log details of comparison as a console error if result doesn't match the assertTrue boolean.
   *
   * @param {boolean} assertTrue
   */
  assert(assertTrue) {
    if (assertTrue && this.value !== assertTrue) {
      console.error(
        `######## %cdeepCompare inequality found! ${this.log.message}: %c${this.log.path} %c${JSON.stringify(this.log.a)}%c, %c${JSON.stringify(this.log.b)}%c`,
        this.standardStyles,
        this.pathStyles,
        this.errorStyles,
        this.standardStyles,
        this.errorStyles,
        this.standardStyles
      );
    } else if (!assertTrue && this.value !== assertTrue) {
      console.error(`######## deepCompare error! The values are equal but expected inequality.`);
    }

    return this;
  }

  /**
   * Allows for the use of a third party logger function.
   *
   * @param {function} clientLogger
   * @param {boolean} enableLogger
   */
  attachLogger(clientLogger, enableLogger = true) {
    if (typeof clientLogger === 'function' && typeof this.clientLogger === 'undefined' && enableLogger && typeof this.log.message !== 'undefined') {
      clientLogger(`######## deepCompare inequality found! ${this.log.message}: ${this.log.path} ${JSON.stringify(this.log.a)}, ${JSON.stringify(this.log.b)}`);
    }

    return this;
  }

  /* #region  Private methods */

  /**
   * Fail the comparison, log the error message and inequal values,
   * and decrement the recursion depth before returning to previous level.
   *
   * @param {*} a
   * @param {*} b
   * @param {string} message
   */
  _fail(a, b, message) {
    this._logOutput(a, b, message);
    this._decrementDepth();
    this.value = false;
    return this;
  }

  /**
   * Pass the comparison and decrement the recursion depth before returning to previous level.
   */
  _pass() {
    this._decrementDepth();
    this.value = true;
    return this;
  }

  /**
   * @param {*} a
   * @param {*} b
   * @param {string} message
   */
  _logOutput(a, b, message) {
    // Only capture the first error, not the errors further up.
    if (typeof this.log.message === 'undefined') {
      let path = '';
      if (this.depthTracking.path.length > 0) {
        path = `obj.${this.depthTracking.path.join('.')}`;
        path = path.replace(/(?:\.\[)/g, '[');
      }

      this.log.message = message;
      this.log.a = a;
      this.log.b = b;
      this.log.path = path;
    }
  }

  /**
   * Increment depth after drilling down to a new level.
   */
  _incrementDepth() {
    if (typeof this.depthTracking.depth === 'undefined') {
      this.depthTracking.depth = 0;
      this.depthTracking.path = [];
    } else {
      this.depthTracking.depth++;
    }
  }

  /**
   * Decrement depth before returning to a previous level.
   * If at the highest level and an error message exists, log the error.
   */
  _decrementDepth() {
    if (typeof this.depthTracking.depth !== 'undefined' && this.depthTracking.depth > 0) {
      this.depthTracking.depth--;
    }
  }

  /**
   * Should reset the log object if necessary.
   */
  _resetLog() {
    if (typeof this.depthTracking.depth === 'undefined' || this.depthTracking.depth === 0) {
      this.log = {};
    }
  }

  /* #endregion */
}

export default new Compare();
