(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, (__WEBPACK_EXTERNAL_MODULE__53__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RLeanBaseHooks = exports.RLeanState = exports.StateSingleton = exports.useSyncState = exports.useSave = exports.useGet = exports.Store = exports.removeAll = exports.useRemove = exports.reducer = exports.RLean = exports.useDelete = exports.usePut = exports.usePost = exports.usePatch = exports.useRequest = exports.Adapters = exports.keys = exports.define = exports.initialState = void 0;
const initialState_1 = __webpack_require__(1);
Object.defineProperty(exports, "initialState", ({ enumerable: true, get: function () { return initialState_1.initialState; } }));
const Adapters_1 = __webpack_require__(5);
exports.Adapters = Adapters_1.default;
const define_1 = __webpack_require__(50);
Object.defineProperty(exports, "define", ({ enumerable: true, get: function () { return define_1.define; } }));
const keys_1 = __webpack_require__(51);
Object.defineProperty(exports, "keys", ({ enumerable: true, get: function () { return keys_1.keys; } }));
const useSave_1 = __webpack_require__(52);
exports.useSave = useSave_1.default;
const useRequest_1 = __webpack_require__(65);
exports.useRequest = useRequest_1.default;
const useGet_1 = __webpack_require__(66);
exports.useGet = useGet_1.default;
const usePatch_1 = __webpack_require__(67);
exports.usePatch = usePatch_1.default;
const usePost_1 = __webpack_require__(68);
exports.usePost = usePost_1.default;
const usePut_1 = __webpack_require__(69);
exports.usePut = usePut_1.default;
const useDelete_1 = __webpack_require__(70);
exports.useDelete = useDelete_1.default;
const useRemove_1 = __webpack_require__(71);
exports.useRemove = useRemove_1.default;
const useSyncState_1 = __webpack_require__(72);
exports.useSyncState = useSyncState_1.default;
const RLean_1 = __webpack_require__(2);
exports.RLean = RLean_1.default;
const reducer_1 = __webpack_require__(55);
Object.defineProperty(exports, "reducer", ({ enumerable: true, get: function () { return reducer_1.reducer; } }));
const removeAll_1 = __webpack_require__(3);
Object.defineProperty(exports, "removeAll", ({ enumerable: true, get: function () { return removeAll_1.removeAll; } }));
const Store_1 = __webpack_require__(73);
exports.Store = Store_1.default;
const StateSingleton_1 = __webpack_require__(54);
Object.defineProperty(exports, "StateSingleton", ({ enumerable: true, get: function () { return StateSingleton_1.StateSingleton; } }));
Object.defineProperty(exports, "RLeanState", ({ enumerable: true, get: function () { return StateSingleton_1.RLeanState; } }));
const BaseHooks_1 = __webpack_require__(74);
Object.defineProperty(exports, "RLeanBaseHooks", ({ enumerable: true, get: function () { return BaseHooks_1.RLeanBaseHooks; } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQThDO0FBdUI1Qyw2RkF2Qk8sMkJBQVksT0F1QlA7QUF0QmQseUNBQWtDO0FBeUJoQyxtQkF6Qkssa0JBQVEsQ0F5Qkw7QUF4QlYscUNBQWtDO0FBc0JoQyx1RkF0Qk8sZUFBTSxPQXNCUDtBQXJCUixpQ0FBOEI7QUFzQjVCLHFGQXRCTyxXQUFJLE9Bc0JQO0FBckJOLDZDQUFzQztBQWtDcEMsa0JBbENLLGlCQUFPLENBa0NMO0FBakNULG1EQUE0QztBQXNCMUMscUJBdEJLLG9CQUFVLENBc0JMO0FBckJaLDJDQUFvQztBQStCbEMsaUJBL0JLLGdCQUFNLENBK0JMO0FBOUJSLCtDQUF3QztBQXFCdEMsbUJBckJLLGtCQUFRLENBcUJMO0FBcEJWLDZDQUFzQztBQXFCcEMsa0JBckJLLGlCQUFPLENBcUJMO0FBcEJULDJDQUFvQztBQXFCbEMsaUJBckJLLGdCQUFNLENBcUJMO0FBcEJSLGlEQUEwQztBQXFCeEMsb0JBckJLLG1CQUFTLENBcUJMO0FBcEJYLGlEQUEwQztBQXVCeEMsb0JBdkJLLG1CQUFTLENBdUJMO0FBdEJYLHVEQUFnRDtBQTJCOUMsdUJBM0JLLHNCQUFZLENBMkJMO0FBMUJkLG1DQUE0QjtBQW1CMUIsZ0JBbkJLLGVBQUssQ0FtQkw7QUFsQlAsdUNBQW9DO0FBbUJsQyx3RkFuQk8saUJBQU8sT0FtQlA7QUFsQlQsMkNBQXdDO0FBb0J0QywwRkFwQk8scUJBQVMsT0FvQlA7QUFuQlgsbUNBQTRCO0FBb0IxQixnQkFwQkssZUFBSyxDQW9CTDtBQW5CUCxxREFBOEQ7QUF1QjVELCtGQXZCTywrQkFBYyxPQXVCUDtBQUNkLDJGQXhCdUIsMkJBQVUsT0F3QnZCO0FBdkJaLDJDQUE2QztBQXdCM0MsK0ZBeEJPLDBCQUFjLE9Bd0JQIn0=

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initialState = void 0;
const RLean_1 = __webpack_require__(2);
const utils_1 = __webpack_require__(4);
/**
 * initialState
 * Creates initial GlobalState object
 */
const initialState = (entities) => {
    const entityDefinitions = entities !== null && entities !== void 0 ? entities : (0, utils_1.getValue)(RLean_1.default, "config.entities", {});
    const objects = Object.values(entityDefinitions);
    const objectsLength = objects.length;
    let combinedInitialState = {};
    for (let i = 0; i < objectsLength; i += 1) {
        if (objects[i].includeInState) {
            Object.assign(combinedInitialState, objects[i].initialState);
        }
    }
    return combinedInitialState;
};
exports.initialState = initialState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbFN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2luaXRpYWxTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBNEI7QUFDNUIsd0NBQXdDO0FBR3hDOzs7R0FHRztBQUNJLE1BQU0sWUFBWSxHQUFHLENBQUMsUUFBaUIsRUFBb0IsRUFBRTtJQUNsRSxNQUFNLGlCQUFpQixHQUNyQixRQUFRLGFBQVIsUUFBUSxjQUFSLFFBQVEsR0FDUCxJQUFBLGdCQUFRLEVBQUMsZUFBSyxFQUFFLGlCQUFpQixFQUFFLEVBQUUsQ0FBZ0MsQ0FBQztJQUN6RSxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDakQsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNyQyxJQUFJLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztJQUU5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDekMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzlEO0tBQ0Y7SUFFRCxPQUFPLG9CQUFvQixDQUFDO0FBQzlCLENBQUMsQ0FBQztBQWZXLFFBQUEsWUFBWSxnQkFldkIifQ==

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const removeAll_1 = __webpack_require__(3);
// import { getValue } from "@rlean/utils";
// import { RLean_OfflineQueue } from "./_internal/entities";
/**
 * RLean Class
 * Contains the configuration object. Type is inferred using the config object.
 */
class RLean {
    async init(config) {
        // const entities = getValue(config, "entities", {});
        // Here, the offlinequeue is added as entity but without a key
        // it could be added expanding the T with an specific RleanOfflineQueue
        /*
        const entities = config.entities ?? {};
        config.entities = { ...entities, RLean_OfflineQueue };
        */
        this.config = config;
    }
    setToken(token) {
        if (token) {
            this.config.api.token = token;
        }
    }
    clear() {
        (0, removeAll_1.removeAll)();
    }
}
exports["default"] = new RLean();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUkxlYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvUkxlYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQ0FBd0M7QUFFeEMsMkNBQTJDO0FBQzNDLDZEQUE2RDtBQUU3RDs7O0dBR0c7QUFDSCxNQUFNLEtBQUs7SUFJVCxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQXNCO1FBQy9CLHFEQUFxRDtRQUVyRCw4REFBOEQ7UUFDOUQsdUVBQXVFO1FBQ3ZFOzs7VUFHRTtRQUVGLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNwQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUEscUJBQVMsR0FBRSxDQUFDO0lBQ2QsQ0FBQztDQUNGO0FBRUQsa0JBQWUsSUFBSSxLQUFLLEVBQUUsQ0FBQyJ9

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeAll = void 0;
const _1 = __webpack_require__(0);
/**
 * Clear all data from the store and from session.
 */
const removeAll = async () => {
    sessionStorage.clear();
    localStorage.clear();
    _1.Store.clear();
};
exports.removeAll = removeAll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlQWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JlbW92ZUFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3QkFBMEI7QUFFMUI7O0dBRUc7QUFDSSxNQUFNLFNBQVMsR0FBRyxLQUFLLElBQUksRUFBRTtJQUNsQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLFFBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNoQixDQUFDLENBQUM7QUFKVyxRQUFBLFNBQVMsYUFJcEIifQ==

/***/ }),
/* 4 */
/***/ ((module) => {

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_172__) => {

__nested_webpack_require_172__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_172__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deepCopy__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_172__(2);

// TODO: Refactor. Should not use arrow functions in class.
var Compare = /** @class */ (function () {
    function Compare() {
        var _this = this;
        /**
         * Set strictEquality to false to coerce conversion if values are different types. Defaults to true.
         *
         * @param {*} a
         * @param {*} b
         * @param {boolean} strictEquality
         */
        this.deepCompare = function (a, b, strictEquality) {
            if (strictEquality === void 0) { strictEquality = true; }
            var _a = _this, _resetLog = _a._resetLog, _incrementDepth = _a._incrementDepth, _pass = _a._pass, _fail = _a._fail;
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
            }
            else if (a === undefined || b === undefined) {
                return _fail(a, b, 'One of the values is undefined');
            }
            /* #endregion */
            /* #region  Nulls */
            if (a === null && b === null) {
                // both values are null, so pass
                return _pass();
            }
            else if (a === null || b === null) {
                // only one value is null
                return _fail(a, b, 'One of the values is null');
            }
            /* #endregion */
            /* #region  Function comparison */
            if (typeof a === 'function' && typeof b === 'function') {
                var isEqual = a.toString() === b.toString();
                if (!isEqual) {
                    return _fail(a, b, 'Functions are not equal');
                }
                return _pass();
            }
            else if (typeof a === 'function' || typeof b === 'function') {
                return _fail(a, b, 'The values are not the same type');
            }
            /* #endregion */
            /* #region  Neither values are objects */
            if (typeof a !== 'object' && typeof b !== 'object') {
                // Values are not objects so do a simple comparison without type checking
                // unless strictEquality is true.
                var isEqual = a == b;
                var isStrictEqual = a === b;
                if (strictEquality && !isStrictEqual) {
                    var msg = isEqual
                        ? 'The values are different types'
                        : 'The values are not equal';
                    return _fail(a, b, msg);
                }
                else if (!isEqual) {
                    return _fail(a, b, 'The values are not equal');
                }
                return _pass();
            }
            else if (typeof a !== 'object' || typeof b !== 'object') {
                return _fail(a, b, 'The values are different types');
            }
            /* #endregion */
            /* #region  values are objects so we should deepCopy before going further */
            a = (0,_deepCopy__WEBPACK_IMPORTED_MODULE_0__.deepCopy)(a);
            b = (0,_deepCopy__WEBPACK_IMPORTED_MODULE_0__.deepCopy)(b);
            /* #endregion */
            /* #region  Verify the objects have the same prototype chains */
            if (a.constructor !== b.constructor) {
                return _fail(a, b, 'The objects have different proptype chains');
            }
            /* #endregion */
            /* #region  Date comparison */
            if (a instanceof Date && b instanceof Date) {
                // compare dates
                var isEqual = new Date(a.getTime()).toString() === new Date(b.getTime()).toString();
                if (!isEqual) {
                    return _fail(a, b, 'The dates are not equal');
                }
                return _pass();
            }
            else if (a instanceof Date || b instanceof Date) {
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
                for (var aI = a.length - 1; aI >= 0; --aI) {
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
                    var x = a[aI];
                    if (typeof x === 'object') {
                        _this.depthTracking.path.push("[".concat(aI, "]"));
                        for (var bI = b.length - 1; bI >= 0; --bI) {
                            var isEqual = _this.deepCompare(x, b[bI], strictEquality).isEqual;
                            if (isEqual) {
                                b.splice(bI, 1);
                                break;
                            }
                        }
                        a.splice(aI, 1);
                        if (a.length !== b.length) {
                            return _fail(a, b, 'The arrays contain different values');
                        }
                        else {
                            _this.depthTracking.path.splice(_this.depthTracking.path.length - 1, 1);
                        }
                    }
                    else if (typeof x === 'function') {
                        for (var bI = b.length - 1; bI >= 0; --bI) {
                            var isEqual = x.toString() === b[bI].toString();
                            if (isEqual) {
                                b.splice(bI, 1);
                                break;
                            }
                        }
                        a.splice(aI, 1);
                    }
                    else if (strictEquality) {
                        // Search for that value in the other array and get the index.
                        var bI = b.indexOf(x);
                        if (bI === -1) {
                            // Value didn't exist. Exit comparison.
                            return _fail(a, b, 'Value in first array did not exist in second array');
                        }
                        else {
                            // Value exists. Remove both values from arrays.
                            a.splice(aI, 1);
                            b.splice(bI, 1);
                        }
                    }
                    else {
                        for (var bI = b.length - 1; bI >= 0; --bI) {
                            var isEqual = x == b[bI];
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
            }
            else if (a instanceof Array || b instanceof Array) {
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
                for (var propertyName in a) {
                    /* #region  What's going on here... */
                    // Need to type check these.
                    // If the property is an object then call deepCompare
                    // to break down the object a little further.
                    // If not an object, handle function and primitive comparisons right here.
                    /* #endregion */
                    if (typeof a[propertyName] === 'object' &&
                        typeof b[propertyName] === 'object') {
                        _this.depthTracking.path.push(propertyName);
                        var isEqual = _this.deepCompare(a[propertyName], b[propertyName], strictEquality).isEqual;
                        if (!isEqual) {
                            return _fail(a, b, "The objects' properties have different values");
                        }
                        else {
                            _this.depthTracking.path.splice(_this.depthTracking.path.length - 1, 1);
                        }
                    }
                    else if (typeof a[propertyName] === 'object' ||
                        typeof b[propertyName] === 'object') {
                        return _fail(a, b, 'Only one of the properties is an object');
                    }
                    else if (typeof a[propertyName] === 'function' &&
                        typeof b[propertyName] === 'function') {
                        if (a[propertyName].toString() !== b[propertyName].toString()) {
                            return _fail(a, b, 'The functions are different');
                        }
                    }
                    else if (typeof a[propertyName] === 'function' ||
                        typeof b[propertyName] === 'function') {
                        return _fail(a, b, 'Only one of the values is a function');
                    }
                    else if (strictEquality && a[propertyName] !== b[propertyName]) {
                        var msg = a[propertyName] == b[propertyName]
                            ? 'The values are different types'
                            : 'The values are not equal';
                        return _fail(a, b, msg);
                    }
                    else if (a[propertyName] != b[propertyName]) {
                        return _fail(a, b, 'The values are not equal');
                    }
                }
                return _pass();
            }
            else if (a instanceof Object || b instanceof Object) {
                // Values are different types.
                return _fail(a, b, 'Only one of the values is an object');
            }
            /* #endregion */
        };
        /**
         * Will log details to the console if an inequality is found.
         *
         * @param {boolean} shouldLog
         */
        this.consoleLog = function (shouldLog) {
            if (shouldLog === void 0) { shouldLog = true; }
            if (shouldLog && typeof _this.log.message !== 'undefined') {
                console.log("######## %cdeepCompare inequality found! ".concat(_this.log.message, ": %c").concat(_this.log.path, " %c").concat(JSON.stringify(_this.log.a), "%c, %c").concat(JSON.stringify(_this.log.b), "%c"), _this.standardStyles, _this.pathStyles, _this.errorStyles, _this.standardStyles, _this.errorStyles, _this.standardStyles);
            }
            return _this;
        };
        /**
         * Will log details of comparison as a console error if result doesn't match the assertTrue boolean.
         *
         * @param {boolean} assertTrue
         */
        this.assert = function (assertTrue) {
            if (assertTrue && _this.value !== assertTrue) {
                console.error("######## %cdeepCompare inequality found! ".concat(_this.log.message, ": %c").concat(_this.log.path, " %c").concat(JSON.stringify(_this.log.a), "%c, %c").concat(JSON.stringify(_this.log.b), "%c"), _this.standardStyles, _this.pathStyles, _this.errorStyles, _this.standardStyles, _this.errorStyles, _this.standardStyles);
            }
            else if (!assertTrue && _this.value !== assertTrue) {
                console.error("######## deepCompare error! The values are equal but expected inequality.");
            }
            return _this;
        };
        /**
         * Allows for the use of a third party logger function.
         *
         * @param {function} clientLogger
         * @param {boolean} enableLogger
         */
        this.attachLogger = function (clientLogger, enableLogger) {
            if (enableLogger === void 0) { enableLogger = true; }
            if (typeof clientLogger === 'function' &&
                typeof _this.clientLogger === 'undefined' &&
                enableLogger &&
                typeof _this.log.message !== 'undefined') {
                clientLogger("######## deepCompare inequality found! ".concat(_this.log.message, ": ").concat(_this.log.path, " ").concat(JSON.stringify(_this.log.a), ", ").concat(JSON.stringify(_this.log.b)));
            }
            return _this;
        };
        /* #region  Private methods */
        /**
         * Fail the comparison, log the error message and inequal values,
         * and decrement the recursion depth before returning to previous level.
         *
         * @param {*} a
         * @param {*} b
         * @param {string} message
         */
        this._fail = function (a, b, message) {
            _this._logOutput(a, b, message);
            _this._decrementDepth();
            _this.value = false;
            return _this;
        };
        /**
         * Pass the comparison and decrement the recursion depth before returning to previous level.
         */
        this._pass = function () {
            _this._decrementDepth();
            _this.value = true;
            return _this;
        };
        /**
         * @param {*} a
         * @param {*} b
         * @param {string} message
         */
        this._logOutput = function (a, b, message) {
            // Only capture the first error, not the errors further up.
            if (typeof _this.log.message === 'undefined') {
                var path = '';
                if (_this.depthTracking.path.length > 0) {
                    path = "obj.".concat(_this.depthTracking.path.join('.'));
                    path = path.replace(/(?:\.\[)/g, '[');
                }
                _this.log.message = message;
                _this.log.a = a;
                _this.log.b = b;
                _this.log.path = path;
            }
        };
        /**
         * Increment depth after drilling down to a new level.
         */
        this._incrementDepth = function () {
            if (typeof _this.depthTracking.depth === 'undefined') {
                _this.depthTracking.depth = 0;
                _this.depthTracking.path = [];
            }
            else {
                _this.depthTracking.depth++;
            }
        };
        /**
         * Decrement depth before returning to a previous level.
         * If at the highest level and an error message exists, log the error.
         */
        this._decrementDepth = function () {
            if (typeof _this.depthTracking.depth !== 'undefined' &&
                _this.depthTracking.depth > 0) {
                _this.depthTracking.depth--;
            }
        };
        /**
         * Should reset the log object if necessary.
         */
        this._resetLog = function () {
            if (typeof _this.depthTracking.depth === 'undefined' ||
                _this.depthTracking.depth === 0) {
                _this.log = { a: null, b: null, message: null, path: null };
            }
        };
        this.value = null;
        this.depthTracking = { depth: null, path: null };
        this.log = { a: null, b: null, path: null, message: null };
        this.errorStyles = 'color:red;';
        this.standardStyles = 'color:black;';
        this.pathStyles = 'font-style:italic;color:blue;';
    }
    Object.defineProperty(Compare.prototype, "isEqual", {
        /**
         * Must be called at the end of the chain to return the result of the comparison.
         */
        get: function () {
            return this.value;
        },
        enumerable: false,
        configurable: true
    });
    return Compare;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Compare());


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_17902__) => {

__nested_webpack_require_17902__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_17902__.d(__webpack_exports__, {
/* harmony export */   "deepCopy": () => (/* binding */ deepCopy)
/* harmony export */ });
var deepCopy = function (obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    if (obj instanceof Array) {
        return obj.reduce(function (arr, item, i) {
            arr[i] = deepCopy(item);
            return arr;
        }, []);
    }
    if (obj instanceof Object) {
        return Object.keys(obj).reduce(function (newObj, key) {
            newObj[key] = deepCopy(obj[key]);
            return newObj;
        }, {});
    }
};


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_18752__) => {

__nested_webpack_require_18752__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_18752__.d(__webpack_exports__, {
/* harmony export */   "formatPhoneNumber": () => (/* binding */ formatPhoneNumber)
/* harmony export */ });
/* harmony import */ var _removeNonNumericChars__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_18752__(4);

var formatPhoneNumber = function (phoneNumber) {
    phoneNumber =
        typeof phoneNumber === 'number' ? phoneNumber.toString() : phoneNumber;
    if (phoneNumber.length < 10) {
        console.warn('phone-number needs to be at least 10 digits long');
        return;
    }
    var strippedNumber = (0,_removeNonNumericChars__WEBPACK_IMPORTED_MODULE_0__.removeNonNumericChars)(phoneNumber);
    return "(".concat(strippedNumber.slice(0, 3), ") ").concat(strippedNumber.slice(3, 6), "-").concat(strippedNumber.slice(6, 10));
};


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_19707__) => {

__nested_webpack_require_19707__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_19707__.d(__webpack_exports__, {
/* harmony export */   "removeNonNumericChars": () => (/* binding */ removeNonNumericChars)
/* harmony export */ });
var removeNonNumericChars = function (value) {
    return value.replace(/\D/g, '');
};


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_20122__) => {

__nested_webpack_require_20122__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_20122__.d(__webpack_exports__, {
/* harmony export */   "getValue": () => (/* binding */ getValue)
/* harmony export */ });
var getValue = function (obj, path, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return path.split('.').reduce(function (a, c) {
        return a != null &&
            typeof a != 'undefined' &&
            a[c] != null &&
            typeof a[c] != 'undefined'
            ? a[c]
            : defaultValue != null
                ? defaultValue
                : null;
    }, obj);
};


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_20845__) => {

__nested_webpack_require_20845__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_20845__.d(__webpack_exports__, {
/* harmony export */   "hasValue": () => (/* binding */ hasValue)
/* harmony export */ });
/* harmony import */ var _getValue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_20845__(5);

var hasValue = function (obj, path) {
    var value = (0,_getValue__WEBPACK_IMPORTED_MODULE_0__.getValue)(obj, path);
    return value == null ? false : true;
};


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_21400__) => {

__nested_webpack_require_21400__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_21400__.d(__webpack_exports__, {
/* harmony export */   "makeCamelCaseNormal": () => (/* binding */ makeCamelCaseNormal)
/* harmony export */ });
var makeCamelCaseNormal = function (value) {
    return value.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
        return str.toUpperCase();
    });
};


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_21889__) => {

__nested_webpack_require_21889__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_21889__.d(__webpack_exports__, {
/* harmony export */   "objectIndexOf": () => (/* binding */ objectIndexOf)
/* harmony export */ });
/* harmony import */ var _Compare__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_21889__(1);

/**
 * Returns an object's index in an array of objects.
 *
 * @param {array} arr
 * @param {object} obj
 */
var objectIndexOf = function (arr, obj) {
    for (var i = 0; i < arr.length; i++) {
        if (_Compare__WEBPACK_IMPORTED_MODULE_0__["default"].deepCompare(arr[i], obj).isEqual) {
            return i;
        }
    }
    return -1;
};


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_22638__) => {

__nested_webpack_require_22638__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_22638__.d(__webpack_exports__, {
/* harmony export */   "removeDuplicates": () => (/* binding */ removeDuplicates)
/* harmony export */ });
/* harmony import */ var _objectIndexOf__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_22638__(8);

var removeDuplicates = function (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var index = (0,_objectIndexOf__WEBPACK_IMPORTED_MODULE_0__.objectIndexOf)(newArr, arr[i]);
        if (index === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_23355__) => {

__nested_webpack_require_23355__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_23355__.d(__webpack_exports__, {
/* harmony export */   "uuid": () => (/* binding */ uuid)
/* harmony export */ });
var uuid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_24032__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_24032__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_24032__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_24032__.o(definition, key) && !__nested_webpack_require_24032__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_24032__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_24032__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__nested_webpack_require_24032__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_24032__.d(__webpack_exports__, {
/* harmony export */   "Compare": () => (/* reexport safe */ _Compare__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "deepCopy": () => (/* reexport safe */ _deepCopy__WEBPACK_IMPORTED_MODULE_1__.deepCopy),
/* harmony export */   "formatPhoneNumber": () => (/* reexport safe */ _formatPhoneNumber__WEBPACK_IMPORTED_MODULE_2__.formatPhoneNumber),
/* harmony export */   "getValue": () => (/* reexport safe */ _getValue__WEBPACK_IMPORTED_MODULE_3__.getValue),
/* harmony export */   "hasValue": () => (/* reexport safe */ _hasValue__WEBPACK_IMPORTED_MODULE_4__.hasValue),
/* harmony export */   "makeCamelCaseNormal": () => (/* reexport safe */ _makeCamelCaseNormal__WEBPACK_IMPORTED_MODULE_5__.makeCamelCaseNormal),
/* harmony export */   "objectIndexOf": () => (/* reexport safe */ _objectIndexOf__WEBPACK_IMPORTED_MODULE_6__.objectIndexOf),
/* harmony export */   "removeDuplicates": () => (/* reexport safe */ _removeDuplicates__WEBPACK_IMPORTED_MODULE_7__.removeDuplicates),
/* harmony export */   "removeNonNumericChars": () => (/* reexport safe */ _removeNonNumericChars__WEBPACK_IMPORTED_MODULE_8__.removeNonNumericChars),
/* harmony export */   "uuid": () => (/* reexport safe */ _uuid__WEBPACK_IMPORTED_MODULE_9__.uuid)
/* harmony export */ });
/* harmony import */ var _Compare__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_24032__(1);
/* harmony import */ var _deepCopy__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_24032__(2);
/* harmony import */ var _formatPhoneNumber__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_24032__(3);
/* harmony import */ var _getValue__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_24032__(5);
/* harmony import */ var _hasValue__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_24032__(6);
/* harmony import */ var _makeCamelCaseNormal__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_24032__(7);
/* harmony import */ var _objectIndexOf__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_24032__(8);
/* harmony import */ var _removeDuplicates__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_24032__(9);
/* harmony import */ var _removeNonNumericChars__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_24032__(4);
/* harmony import */ var _uuid__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_24032__(10);












})();

module.exports = __webpack_exports__;
/******/ })()
;

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const RLean_1 = __webpack_require__(2);
const _internal_1 = __webpack_require__(6);
const utils_1 = __webpack_require__(4);
const defaultAdapters_1 = __webpack_require__(16);
class Adapters {
    constructor(adapterMap) {
        this.adapterMap = adapterMap ? adapterMap : {};
        this.storage = (0, utils_1.getValue)(RLean_1.default, "config.storage.adapter", defaultAdapters_1.LocalForageAdapter);
        this.api = (0, utils_1.getValue)(RLean_1.default, "config.api.adapter", defaultAdapters_1.AxiosAdapter);
        for (let key in adapterMap) {
            this.pipe(key);
        }
    }
    pipe(adapterMapKey) {
        switch (adapterMapKey) {
            case "storage":
                this.storage = this.ensureCorrectStorageImplementation(this.adapterMap[adapterMapKey]);
                break;
            case "api":
                this.api = this.adapterMap[adapterMapKey];
                break;
            case "logger":
                this.logger = this.setLoggingEngine(this.adapterMap[adapterMapKey]);
                break;
            default:
                this[adapterMapKey] = this.adapterMap[adapterMapKey];
        }
    }
    ensureCorrectStorageImplementation(storage) {
        const inspection = (0, _internal_1.implement)(storage, {
            methods: ["get", "set", "clear", "remove"],
        });
        if (inspection.passed) {
            return storage;
        }
        throw new Error(inspection.error.message);
    }
    setLoggingEngine(logger) {
        const inspection = (0, _internal_1.implement)(logger, {
            methods: ["trace", "info", "warn", "error"],
        });
        if (inspection.passed) {
            return logger;
        }
        throw new Error(inspection.error.message);
    }
}
exports["default"] = Adapters;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRhcHRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQWRhcHRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBNEI7QUFDNUIsMkNBQXdDO0FBQ3hDLHdDQUF3QztBQUN4Qyx1REFBcUU7QUFHckUsTUFBcUIsUUFBUTtJQU0zQixZQUFZLFVBQXNCO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUUvQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUEsZ0JBQVEsRUFDckIsZUFBSyxFQUNMLHdCQUF3QixFQUN4QixvQ0FBa0IsQ0FDbkIsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBQSxnQkFBUSxFQUFDLGVBQUssRUFBRSxvQkFBb0IsRUFBRSw4QkFBWSxDQUFDLENBQUM7UUFFL0QsS0FBSyxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUU7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUF1QixDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQsSUFBSSxDQUFDLGFBQStCO1FBQ2xDLFFBQVEsYUFBYSxFQUFFO1lBQ3JCLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxrQ0FBa0MsQ0FDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FDL0IsQ0FBQztnQkFDRixNQUFNO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDMUMsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLE1BQU07WUFDUjtnQkFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN4RDtJQUNILENBQUM7SUFFRCxrQ0FBa0MsQ0FBQyxPQUFZO1FBQzdDLE1BQU0sVUFBVSxHQUFHLElBQUEscUJBQVMsRUFBQyxPQUFPLEVBQUU7WUFDcEMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO1NBQzNDLENBQUMsQ0FBQztRQUVILElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUNyQixPQUFPLE9BQU8sQ0FBQztTQUNoQjtRQUVELE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsTUFBVztRQUMxQixNQUFNLFVBQVUsR0FBRyxJQUFBLHFCQUFTLEVBQUMsTUFBTSxFQUFFO1lBQ25DLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztTQUM1QyxDQUFDLENBQUM7UUFFSCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDckIsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUVELE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0Y7QUE5REQsMkJBOERDIn0=

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getStorageMethods = exports.getApiMethods = exports.convertToType = exports.getDefinitionOptions = exports.getHookOptions = exports.request = exports.methods = exports.implement = exports.inspectClass = void 0;
const convertToType_1 = __webpack_require__(7);
Object.defineProperty(exports, "convertToType", ({ enumerable: true, get: function () { return convertToType_1.convertToType; } }));
const getHookOptions_1 = __webpack_require__(8);
Object.defineProperty(exports, "getHookOptions", ({ enumerable: true, get: function () { return getHookOptions_1.getHookOptions; } }));
const getDefinitionOptions_1 = __webpack_require__(9);
Object.defineProperty(exports, "getDefinitionOptions", ({ enumerable: true, get: function () { return getDefinitionOptions_1.getDefinitionOptions; } }));
const inspectClass_1 = __webpack_require__(10);
Object.defineProperty(exports, "inspectClass", ({ enumerable: true, get: function () { return inspectClass_1.inspectClass; } }));
const implement_1 = __webpack_require__(11);
Object.defineProperty(exports, "implement", ({ enumerable: true, get: function () { return implement_1.implement; } }));
const methods_1 = __webpack_require__(12);
Object.defineProperty(exports, "methods", ({ enumerable: true, get: function () { return methods_1.methods; } }));
const request_1 = __webpack_require__(14);
Object.defineProperty(exports, "request", ({ enumerable: true, get: function () { return request_1.request; } }));
const getApiMethods_1 = __webpack_require__(15);
Object.defineProperty(exports, "getApiMethods", ({ enumerable: true, get: function () { return getApiMethods_1.getApiMethods; } }));
const getStorageMethods_1 = __webpack_require__(49);
Object.defineProperty(exports, "getStorageMethods", ({ enumerable: true, get: function () { return getStorageMethods_1.getStorageMethods; } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvX2ludGVybmFsL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUFnRDtBQWlCOUMsOEZBakJPLDZCQUFhLE9BaUJQO0FBaEJmLHFEQUFrRDtBQWNoRCwrRkFkTywrQkFBYyxPQWNQO0FBYmhCLGlFQUE4RDtBQWM1RCxxR0FkTywyQ0FBb0IsT0FjUDtBQWJ0QixpREFBOEM7QUFRNUMsNkZBUk8sMkJBQVksT0FRUDtBQVBkLDJDQUF3QztBQVF0QywwRkFSTyxxQkFBUyxPQVFQO0FBUFgsdUNBQW9DO0FBUWxDLHdGQVJPLGlCQUFPLE9BUVA7QUFQVCx1Q0FBb0M7QUFRbEMsd0ZBUk8saUJBQU8sT0FRUDtBQVBULG1EQUFnRDtBQVc5Qyw4RkFYTyw2QkFBYSxPQVdQO0FBVmYsMkRBQXdEO0FBV3RELGtHQVhPLHFDQUFpQixPQVdQIn0=

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertToType = void 0;
/**
 * convertToType
 * Creates all upper case string separating capitalized words with an underscore
 */
const convertToType = (s) => {
    return s
        ? s.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1_$2").toUpperCase()
        : null;
};
exports.convertToType = convertToType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydFRvVHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9faW50ZXJuYWwvY29udmVydFRvVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7O0dBR0c7QUFDSSxNQUFNLGFBQWEsR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFO0lBQ3pDLE9BQU8sQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLDhCQUE4QixFQUFFLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRTtRQUNsRSxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ1gsQ0FBQyxDQUFDO0FBSlcsUUFBQSxhQUFhLGlCQUl4QiJ9

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getHookOptions = void 0;
const utils_1 = __webpack_require__(4);
const RLean_1 = __webpack_require__(2);
const convertToType_1 = __webpack_require__(7);
const getHookOptions = (options) => {
    var _a, _b, _c, _d;
    if (!options) {
        return {
            definition: null,
            params: null,
            value: null,
            type: null,
            body: null,
            save: false,
            key: null,
        };
    }
    const entityDefinitions = (0, utils_1.getValue)(RLean_1.default, "config.entities", {});
    const entities = Object.values(entityDefinitions);
    const definition = options.key
        ? entities.find((entity) => entity.key === options.key)
        : (_a = options.entity) !== null && _a !== void 0 ? _a : null;
    const key = definition.key;
    const add = options.add;
    return {
        definition,
        params: (_b = options.params) !== null && _b !== void 0 ? _b : null,
        value: typeof options.value !== "undefined" ? options.value : null,
        type: add ? `ADD_${(0, convertToType_1.convertToType)(key)}` : (_c = options.type) !== null && _c !== void 0 ? _c : null,
        body: (_d = options.body) !== null && _d !== void 0 ? _d : null,
        save: options.save,
    };
};
exports.getHookOptions = getHookOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0SG9va09wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvX2ludGVybmFsL2dldEhvb2tPcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUF3QztBQUN4QyxvQ0FBNkI7QUFDN0IsbURBQWdEO0FBR3pDLE1BQU0sY0FBYyxHQUFHLENBSTVCLE9BQVUsRUFDTSxFQUFFOztJQUNsQixJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ1osT0FBTztZQUNMLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE1BQU0sRUFBRSxJQUFJO1lBQ1osS0FBSyxFQUFFLElBQUk7WUFDWCxJQUFJLEVBQUUsSUFBSTtZQUNWLElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLEtBQUs7WUFDWCxHQUFHLEVBQUUsSUFBSTtTQUNWLENBQUM7S0FDSDtJQUVELE1BQU0saUJBQWlCLEdBQUcsSUFBQSxnQkFBUSxFQUFDLGVBQUssRUFBRSxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNqRSxNQUFNLFFBQVEsR0FDWixNQUFNLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFbkMsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUc7UUFDNUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUN2RCxDQUFDLENBQUMsTUFBQSxPQUFPLENBQUMsTUFBTSxtQ0FBSSxJQUFJLENBQUM7SUFDM0IsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztJQUMzQixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBRXhCLE9BQU87UUFDTCxVQUFVO1FBQ1YsTUFBTSxFQUFFLE1BQUEsT0FBTyxDQUFDLE1BQU0sbUNBQUksSUFBSTtRQUM5QixLQUFLLEVBQUUsT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUNsRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUEsNkJBQWEsRUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFBLE9BQU8sQ0FBQyxJQUFJLG1DQUFJLElBQUk7UUFDOUQsSUFBSSxFQUFFLE1BQUEsT0FBTyxDQUFDLElBQUksbUNBQUksSUFBSTtRQUMxQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7S0FDbkIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQXBDVyxRQUFBLGNBQWMsa0JBb0N6QiJ9

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDefinitionOptions = void 0;
const utils_1 = __webpack_require__(4);
const convertToType_1 = __webpack_require__(7);
const getDefinitionOptions = (key, options) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
    const defaultType = `SET_${(0, convertToType_1.convertToType)(key)}`;
    const addType = `ADD_${(0, convertToType_1.convertToType)(key)}`;
    const getInitialState = () => {
        const value = { [key]: null };
        if (options && options.getURL) {
            value.isLoading = false;
            value.lastUpdated = null;
        }
        return value;
    };
    const defaultOptions = {
        initialState: getInitialState(),
        baseURLOverride: null,
        getURL: null,
        postURL: null,
        putURL: null,
        patchURL: null,
        deleteURL: null,
        nullableParams: null,
        persistData: true,
        preferStore: false,
        progressiveLoading: false,
        syncInterval: null,
        syncAfterTimeElapsed: false,
        adapters: null,
        includeInState: true,
        queueOffline: false,
        type: defaultType,
        updateState: (value, givenType) => {
            return {
                type: givenType !== null && givenType !== void 0 ? givenType : defaultType,
                [key]: value,
            };
        },
        reducer: (state, action) => {
            switch (action.type) {
                case `${defaultType}_IS_LOADING`:
                case `${defaultType}_LAST_UPDATED`:
                case `${defaultType}_ERROR`:
                case defaultType:
                    // Create an object if value is a string or number.
                    if (typeof action[key] !== 'object') {
                        return Object.assign(Object.assign({}, state), { value: action[key] });
                    }
                    // If there is no value to set, clear state for this definition.
                    if (!action[key]) {
                        return null;
                    }
                    return Object.assign(Object.assign({}, state), action[key]);
                case addType:
                    // add to existing state
                    if ((0, utils_1.hasValue)(state, 'data')) {
                        return Object.assign(Object.assign({}, state), { data: [].concat([], ...state.data, ...action[key].data) });
                    }
                    else {
                        return Object.assign(Object.assign({}, state), action[key]);
                    }
                default:
                    return state;
            }
        },
        listener: null,
        transformation: null,
    };
    if (!options) {
        return defaultOptions;
    }
    const baseURLOverride = (_a = options.baseURLOverride) !== null && _a !== void 0 ? _a : defaultOptions.baseURLOverride;
    const initialState = options.initialState
        ? { [key]: options.initialState }
        : defaultOptions.initialState;
    const getURL = (_b = options.getURL) !== null && _b !== void 0 ? _b : defaultOptions.getURL;
    const postURL = (_c = options.postURL) !== null && _c !== void 0 ? _c : defaultOptions.postURL;
    const putURL = (_d = options.putURL) !== null && _d !== void 0 ? _d : defaultOptions.putURL;
    const patchURL = (_e = options.patchURL) !== null && _e !== void 0 ? _e : defaultOptions.patchURL;
    const deleteURL = (_f = options.deleteURL) !== null && _f !== void 0 ? _f : defaultOptions.deleteURL;
    const nullableParams = (_g = options.nullableParams) !== null && _g !== void 0 ? _g : defaultOptions.nullableParams;
    const persistData = (_h = options.persistData) !== null && _h !== void 0 ? _h : defaultOptions.persistData;
    const preferStore = (_j = options.preferStore) !== null && _j !== void 0 ? _j : defaultOptions.preferStore;
    const progressiveLoading = (_k = options.progressiveLoading) !== null && _k !== void 0 ? _k : defaultOptions.progressiveLoading;
    const syncInterval = (_l = options.syncInterval) !== null && _l !== void 0 ? _l : defaultOptions.syncInterval;
    const syncAfterTimeElapsed = (_m = options.syncAfterTimeElapsed) !== null && _m !== void 0 ? _m : defaultOptions.syncAfterTimeElapsed;
    const adapters = (_o = options.adapters) !== null && _o !== void 0 ? _o : defaultOptions.adapters;
    const queueOffline = (_p = options.queueOffline) !== null && _p !== void 0 ? _p : defaultOptions.queueOffline;
    const type = (_q = options.type) !== null && _q !== void 0 ? _q : defaultOptions.type;
    const updateState = (_r = options.updateState) !== null && _r !== void 0 ? _r : defaultOptions.updateState;
    const reducer = (_s = options.reducer) !== null && _s !== void 0 ? _s : defaultOptions.reducer;
    const includeInState = (_t = options.includeInState) !== null && _t !== void 0 ? _t : defaultOptions.includeInState;
    const listener = (_u = options.listener) !== null && _u !== void 0 ? _u : defaultOptions.listener;
    const transformation = (_v = options.transformation) !== null && _v !== void 0 ? _v : defaultOptions.transformation;
    return {
        initialState,
        baseURLOverride,
        getURL,
        postURL,
        putURL,
        patchURL,
        deleteURL,
        nullableParams,
        persistData,
        preferStore,
        progressiveLoading,
        syncInterval,
        syncAfterTimeElapsed,
        adapters,
        queueOffline,
        type,
        updateState,
        reducer,
        includeInState,
        listener,
        transformation,
    };
};
exports.getDefinitionOptions = getDefinitionOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RGVmaW5pdGlvbk9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvX2ludGVybmFsL2dldERlZmluaXRpb25PcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHdDQUF3QztBQUN4QyxtREFBZ0Q7QUFFekMsTUFBTSxvQkFBb0IsR0FBRyxDQUNsQyxHQUFXLEVBQ1gsT0FBd0MsRUFDeEMsRUFBRTs7SUFDRixNQUFNLFdBQVcsR0FBRyxPQUFPLElBQUEsNkJBQWEsRUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBQ2hELE1BQU0sT0FBTyxHQUFHLE9BQU8sSUFBQSw2QkFBYSxFQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFFNUMsTUFBTSxlQUFlLEdBQUcsR0FBRyxFQUFFO1FBQzNCLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUU5QixJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQzdCLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQzFCO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLENBQUM7SUFFRixNQUFNLGNBQWMsR0FBRztRQUNyQixZQUFZLEVBQUUsZUFBZSxFQUFFO1FBQy9CLGVBQWUsRUFBRSxJQUFJO1FBQ3JCLE1BQU0sRUFBRSxJQUFJO1FBQ1osT0FBTyxFQUFFLElBQUk7UUFDYixNQUFNLEVBQUUsSUFBSTtRQUNaLFFBQVEsRUFBRSxJQUFJO1FBQ2QsU0FBUyxFQUFFLElBQUk7UUFDZixjQUFjLEVBQUUsSUFBSTtRQUNwQixXQUFXLEVBQUUsSUFBSTtRQUNqQixXQUFXLEVBQUUsS0FBSztRQUNsQixrQkFBa0IsRUFBRSxLQUFLO1FBQ3pCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLG9CQUFvQixFQUFFLEtBQUs7UUFDM0Is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

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.inspectClass = void 0;
const inspectClass = (obj) => {
    let className;
    let attributes = {};
    const methods = [];
    try {
        let objClass;
        if (typeof obj !== "function") {
            objClass = obj.constructor;
        }
        else {
            objClass = obj;
        }
        className = objClass.name;
        const classProto = objClass.prototype;
        Object.getOwnPropertyNames(classProto).forEach(function (m) {
            const t = typeof classProto[m];
            if (t === "function") {
                methods.push(m);
            }
            else {
                attributes[m] = classProto[m];
            }
        });
    }
    catch (err) {
        className = "undefined";
        console.error(err);
    }
    return { ClassName: className, Methods: methods, Attributes: attributes };
};
exports.inspectClass = inspectClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zcGVjdENsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL19pbnRlcm5hbC9pbnNwZWN0Q2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRTtJQUMxQyxJQUFJLFNBQWlCLENBQUM7SUFDdEIsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUVuQixJQUFJO1FBQ0YsSUFBSSxRQUFhLENBQUM7UUFFbEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxVQUFVLEVBQUU7WUFDN0IsUUFBUSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7U0FDNUI7YUFBTTtZQUNMLFFBQVEsR0FBRyxHQUFHLENBQUM7U0FDaEI7UUFFRCxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUMxQixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBRXRDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxHQUFHLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRS9CLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtnQkFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtpQkFBTTtnQkFDTCxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQy9CO1FBQ0gsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUN4QixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3BCO0lBRUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLENBQUM7QUFDNUUsQ0FBQyxDQUFDO0FBaENXLFFBQUEsWUFBWSxnQkFnQ3ZCIn0=

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.implement = void 0;
const _1 = __webpack_require__(6);
const implement = (testableClass, rules) => {
    const given = (0, _1.inspectClass)(testableClass);
    // The inspection message we send back to give information about the interface check.
    const inspectionMessage = {
        rules,
        given,
        error: {
            type: "",
            message: "",
            invalidMethods: [],
            methodsNotIncluded: [],
        },
        passed: true,
    };
    const rulesDifferential = rules.methods.filter((method) => {
        if (given.Methods.indexOf(method) < 0) {
            return method;
        }
    });
    if (rulesDifferential.length !== 0) {
        inspectionMessage.error.type = "MethodError";
        inspectionMessage.passed = false;
        inspectionMessage.error.invalidMethods = [];
        inspectionMessage.error.methodsNotIncluded = rulesDifferential;
        inspectionMessage.error.message = `${inspectionMessage.error.type}: In class ${inspectionMessage.given.ClassName}, we could not find required methods ${inspectionMessage.error.methodsNotIncluded}`;
    }
    return inspectionMessage;
};
exports.implement = implement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wbGVtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL19pbnRlcm5hbC9pbXBsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUJBQWtDO0FBRTNCLE1BQU0sU0FBUyxHQUFHLENBQ3ZCLGFBQXFCLEVBQ3JCLEtBQTRCLEVBQzVCLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxJQUFBLGVBQVksRUFBQyxhQUFhLENBQUMsQ0FBQztJQUUxQyxxRkFBcUY7SUFDckYsTUFBTSxpQkFBaUIsR0FBRztRQUN4QixLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxFQUFFO1lBQ1IsT0FBTyxFQUFFLEVBQUU7WUFDWCxjQUFjLEVBQUUsRUFBRTtZQUNsQixrQkFBa0IsRUFBRSxFQUFFO1NBQ3ZCO1FBQ0QsTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDO0lBRUYsTUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ3hELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksaUJBQWlCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNsQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztRQUM3QyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQzVDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FBQztRQUMvRCxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksY0FBYyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsU0FBUyx3Q0FBd0MsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7S0FDdE07SUFFRCxPQUFPLGlCQUFpQixDQUFDO0FBQzNCLENBQUMsQ0FBQztBQWxDVyxRQUFBLFNBQVMsYUFrQ3BCIn0=

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.methods = void 0;
const types_1 = __webpack_require__(13);
exports.methods = types_1.API_METHOD;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0aG9kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9faW50ZXJuYWwvbWV0aG9kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvQ0FBc0M7QUFFekIsUUFBQSxPQUFPLEdBQUcsa0JBQVUsQ0FBQyJ9

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.API_METHOD = void 0;
/**
 * API methods
 */
var API_METHOD;
(function (API_METHOD) {
    API_METHOD["DELETE"] = "DELETE";
    API_METHOD["GET"] = "GET";
    API_METHOD["PATCH"] = "PATCH";
    API_METHOD["POST"] = "POST";
    API_METHOD["PUT"] = "PUT";
})(API_METHOD = exports.API_METHOD || (exports.API_METHOD = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBc0RBOztHQUVHO0FBQ0gsSUFBWSxVQU1YO0FBTkQsV0FBWSxVQUFVO0lBQ3BCLCtCQUFpQixDQUFBO0lBQ2pCLHlCQUFXLENBQUE7SUFDWCw2QkFBZSxDQUFBO0lBQ2YsMkJBQWEsQ0FBQTtJQUNiLHlCQUFXLENBQUE7QUFDYixDQUFDLEVBTlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFNckIifQ==

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.request = exports.formatPath = void 0;
const RLean_1 = __webpack_require__(2);
const utils_1 = __webpack_require__(4);
const getApiMethods_1 = __webpack_require__(15);
const types_1 = __webpack_require__(13);
const formatPath = (path, payloadQuery, payloadBody, method, nullableParams) => {
    // Check for null params if they aren't allowed.
    if (!nullableParams) {
        if (payloadQuery) {
            for (let key in payloadQuery) {
                if (typeof payloadQuery[key] === 'undefined' ||
                    payloadQuery[key] === null) {
                    // Params cannot be null.
                    return;
                }
            }
        }
        if (payloadBody) {
            for (let key in payloadBody) {
                if (typeof payloadBody[key] === 'undefined' ||
                    payloadBody[key] === null) {
                    // Params cannot be null.
                    return;
                }
            }
        }
    }
    // If the request has no params, return the base path.
    if (path && !payloadQuery) {
        return path;
    }
    // If payloadQuery exists, return the path with the params appended.
    if (path && payloadQuery) {
        let returnValue = '';
        // Create an array of all payload keys.
        const queryStringKeys = [];
        for (let key in payloadQuery) {
            queryStringKeys.push(key);
        }
        // Replace all the :key instances with the actual values given.
        returnValue = path
            .split('/')
            .map(section => {
            if (section.includes(':')) {
                const key = section.match(/:(.*)/).pop();
                // Remove key from queryStringKeys array since it is a path param.
                const index = queryStringKeys.indexOf(key);
                queryStringKeys.splice(index, 1);
                return section.replace(':' + key, payloadQuery[key]);
            }
            return section;
        })
            .join('/');
        const query = [];
        // Create query string with query string params.
        for (let key in payloadQuery) {
            if (queryStringKeys.includes(key)) {
                query.push(`${key}=${payloadQuery[key]}`);
            }
        }
        if (query.length > 0) {
            returnValue += '?' + query.join('&');
        }
        return returnValue;
    }
    throw Error('Could not format the path.');
};
exports.formatPath = formatPath;
const request = async (payload, definition, method) => {
    const { get, post, del, put, patch } = (0, getApiMethods_1.getApiMethods)(definition);
    const nullableParams = definition.nullableParams;
    const baseURLOverride = definition.baseURLOverride;
    // @todo type headers on RLeanConfig type
    let headers = (0, utils_1.getValue)(RLean_1.default, 'config.api.headers', {});
    const url = baseURLOverride
        ? baseURLOverride
        : (0, utils_1.getValue)(RLean_1.default, 'config.api.baseURL', '');
    const token = (0, utils_1.getValue)(RLean_1.default, 'config.api.token', null);
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    const path = (0, exports.formatPath)(payload.path, payload.query, payload.body, method, nullableParams);
    // No path specified. Return undefined.
    if (path === undefined || path === '') {
        console.warn(`Path is required.`);
        return;
    }
    const apiPayload = {
        url: url + path,
        data: payload.body,
        headers,
        signal: payload.signal,
    };
    let res = null;
    switch (method) {
        case types_1.API_METHOD.GET:
            res = await get(apiPayload);
            break;
        case types_1.API_METHOD.POST:
            res = await post(apiPayload);
            break;
        case types_1.API_METHOD.DELETE:
            res = await del(apiPayload);
            break;
        case types_1.API_METHOD.PUT:
            res = await put(apiPayload);
            break;
        case types_1.API_METHOD.PATCH:
            res = await patch(apiPayload);
            break;
        default:
            console.error('Unknown API method specified.');
            break;
    }
    return res;
};
exports.request = request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9faW50ZXJuYWwvcmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvQ0FBNkI7QUFDN0Isd0NBQXdDO0FBQ3hDLG1EQUFnRDtBQUNoRCxvQ0FLa0I7QUFFWCxNQUFNLFVBQVUsR0FBRyxDQUN4QixJQUFZLEVBQ1osWUFBb0IsRUFDcEIsV0FBbUIsRUFDbkIsTUFBa0IsRUFDbEIsY0FBdUIsRUFDZixFQUFFO0lBQ1YsZ0RBQWdEO0lBQ2hELElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDbkIsSUFBSSxZQUFZLEVBQUU7WUFDaEIsS0FBSyxJQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUU7Z0JBQzVCLElBQ0UsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssV0FBVztvQkFDeEMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFDMUI7b0JBQ0EseUJBQXlCO29CQUN6QixPQUFPO2lCQUNSO2FBQ0Y7U0FDRjtRQUNELElBQUksV0FBVyxFQUFFO1lBQ2YsS0FBSyxJQUFJLEdBQUcsSUFBSSxXQUFXLEVBQUU7Z0JBQzNCLElBQ0UsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssV0FBVztvQkFDdkMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFDekI7b0JBQ0EseUJBQXlCO29CQUN6QixPQUFPO2lCQUNSO2FBQ0Y7U0FDRjtLQUNGO0lBRUQsc0RBQXNEO0lBQ3RELElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ3pCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxvRUFBb0U7SUFDcEUsSUFBSSxJQUFJLElBQUksWUFBWSxFQUFFO1FBQ3hCLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUVyQix1Q0FBdUM7UUFDdkMsTUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzNCLEtBQUssSUFBSSxHQUFHLElBQUksWUFBWSxF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

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getApiMethods = void 0;
const utils_1 = __webpack_require__(4);
const RLean_1 = __webpack_require__(2);
const defaultAdapters_1 = __webpack_require__(16);
/**
 * getApiMethods
 * Returns all api methods from the adapter in an entity definition, or, if not
 * defined, from the configurated adapter
 */
const getApiMethods = (definition) => {
    const api = (0, utils_1.hasValue)(definition, "adapters.api")
        ? definition.adapters.api
        : (0, utils_1.getValue)(RLean_1.default, "config.api.adapter", defaultAdapters_1.AxiosAdapter);
    const get = api.get;
    const put = api.put;
    const post = api.post;
    const del = api.del;
    const patch = api.patch;
    return { get, put, post, del, patch };
};
exports.getApiMethods = getApiMethods;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QXBpTWV0aG9kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9faW50ZXJuYWwvZ2V0QXBpTWV0aG9kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBa0Q7QUFDbEQsb0NBQTZCO0FBQzdCLHdEQUFrRDtBQUdsRDs7OztHQUlHO0FBQ0ksTUFBTSxhQUFhLEdBQUcsQ0FBSSxVQUFrQyxFQUFFLEVBQUU7SUFDckUsTUFBTSxHQUFHLEdBQWUsSUFBQSxnQkFBUSxFQUFDLFVBQVUsRUFBRSxjQUFjLENBQUM7UUFDMUQsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRztRQUN6QixDQUFDLENBQUMsSUFBQSxnQkFBUSxFQUFDLGVBQUssRUFBRSxvQkFBb0IsRUFBRSw4QkFBWSxDQUFDLENBQUM7SUFFeEQsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUNwQixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQ3BCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDdEIsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUNwQixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBRXhCLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBWlcsUUFBQSxhQUFhLGlCQVl4QiJ9

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalForageAdapter = exports.AxiosAdapter = void 0;
const AxiosAdapter_1 = __webpack_require__(17);
exports.AxiosAdapter = AxiosAdapter_1.default;
const LocalForageAdapter_1 = __webpack_require__(47);
exports.LocalForageAdapter = LocalForageAdapter_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGVmYXVsdEFkYXB0ZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlEQUEwQztBQUdqQyx1QkFIRixzQkFBWSxDQUdFO0FBRnJCLDZEQUFzRDtBQUUvQiw2QkFGaEIsNEJBQWtCLENBRWdCIn0=

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const axios_1 = __webpack_require__(18);
const types_1 = __webpack_require__(13);
class AxiosAdapter {
    async get(apiPayload) {
        const { url, headers, signal } = apiPayload;
        const response = await axios_1.default.get(url, headers);
        return response;
    }
    async post(apiPayload) {
        const { url, data, headers, signal } = apiPayload;
        const response = (await (0, axios_1.default)({
            method: types_1.API_METHOD.POST,
            url,
            data,
            headers,
        }));
        return response;
    }
    async put(apiPayload) {
        const { url, data, headers, signal } = apiPayload;
        const response = (await (0, axios_1.default)({
            method: types_1.API_METHOD.PUT,
            url,
            data,
            headers,
        }));
        return response;
    }
    async del(apiPayload) {
        const { url, data, headers, signal } = apiPayload;
        const response = (await (0, axios_1.default)({
            method: types_1.API_METHOD.DELETE,
            url,
            data,
            headers,
        }));
        return response;
    }
    async patch(apiPayload) {
        const { url, data, headers, signal } = apiPayload;
        const response = (await (0, axios_1.default)({
            method: types_1.API_METHOD.PATCH,
            url,
            data,
            headers,
        }));
        return response;
    }
}
exports["default"] = new AxiosAdapter();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXhpb3NBZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RlZmF1bHRBZGFwdGVycy9BeGlvc0FkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBNkM7QUFDN0Msb0NBQXlEO0FBRXpELE1BQU0sWUFBWTtJQUNoQixLQUFLLENBQUMsR0FBRyxDQUFPLFVBQWdDO1FBQzlDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLFVBQVUsQ0FBQztRQUM1QyxNQUFNLFFBQVEsR0FBRyxNQUFNLGVBQUssQ0FBQyxHQUFHLENBQUksR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUFPLFVBQWdDO1FBQy9DLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUM7UUFDbEQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFNLElBQUEsZUFBSyxFQUFDO1lBQzVCLE1BQU0sRUFBRSxrQkFBVSxDQUFDLElBQUk7WUFDdkIsR0FBRztZQUNILElBQUk7WUFDSixPQUFPO1NBQ1IsQ0FBQyxDQUFxQixDQUFDO1FBQ3hCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxLQUFLLENBQUMsR0FBRyxDQUFPLFVBQWdDO1FBQzlDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUM7UUFDbEQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFNLElBQUEsZUFBSyxFQUFDO1lBQzVCLE1BQU0sRUFBRSxrQkFBVSxDQUFDLEdBQUc7WUFDdEIsR0FBRztZQUNILElBQUk7WUFDSixPQUFPO1NBQ1IsQ0FBQyxDQUFxQixDQUFDO1FBQ3hCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxLQUFLLENBQUMsR0FBRyxDQUFPLFVBQWdDO1FBQzlDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUM7UUFDbEQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFNLElBQUEsZUFBSyxFQUFDO1lBQzVCLE1BQU0sRUFBRSxrQkFBVSxDQUFDLE1BQU07WUFDekIsR0FBRztZQUNILElBQUk7WUFDSixPQUFPO1NBQ1IsQ0FBQyxDQUFxQixDQUFDO1FBQ3hCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBSyxDQUFPLFVBQWdDO1FBQ2hELE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUM7UUFDbEQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFNLElBQUEsZUFBSyxFQUFDO1lBQzVCLE1BQU0sRUFBRSxrQkFBVSxDQUFDLEtBQUs7WUFDeEIsR0FBRztZQUNILElBQUk7WUFDSixPQUFPO1NBQ1IsQ0FBQyxDQUFxQixDQUFDO1FBQ3hCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQUVELGtCQUFlLElBQUksWUFBWSxFQUFFLENBQUMifQ==

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(19);

/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(20);
var bind = __webpack_require__(21);
var Axios = __webpack_require__(22);
var mergeConfig = __webpack_require__(40);
var defaults = __webpack_require__(27);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(43);
axios.CancelToken = __webpack_require__(44);
axios.isCancel = __webpack_require__(39);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(45);

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(46);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(21);

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),
/* 21 */
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(20);
var buildURL = __webpack_require__(23);
var InterceptorManager = __webpack_require__(24);
var dispatchRequest = __webpack_require__(25);
var mergeConfig = __webpack_require__(40);
var validator = __webpack_require__(41);

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      forcedJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      clarifyTimeoutError: validators.transitional(validators.boolean, '1.0.0')
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(20);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(20);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(20);
var transformData = __webpack_require__(26);
var isCancel = __webpack_require__(39);
var defaults = __webpack_require__(27);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 26 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(20);
var defaults = __webpack_require__(27);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),
/* 27 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(20);
var normalizeHeaderName = __webpack_require__(28);
var enhanceError = __webpack_require__(29);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(30);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(30);
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),
/* 28 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(20);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 29 */
/***/ ((module) => {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),
/* 30 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(20);
var settle = __webpack_require__(31);
var cookies = __webpack_require__(33);
var buildURL = __webpack_require__(23);
var buildFullPath = __webpack_require__(34);
var parseHeaders = __webpack_require__(37);
var isURLSameOrigin = __webpack_require__(38);
var createError = __webpack_require__(32);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 31 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var createError = __webpack_require__(32);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 32 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var enhanceError = __webpack_require__(29);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 33 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(20);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),
/* 34 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(35);
var combineURLs = __webpack_require__(36);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),
/* 35 */
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 36 */
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 37 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(20);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 38 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(20);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),
/* 39 */
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 40 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(20);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),
/* 41 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var pkg = __webpack_require__(42);

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};
var currentVerArr = pkg.version.split('.');

/**
 * Compare package versions
 * @param {string} version
 * @param {string?} thanVersion
 * @returns {boolean}
 */
function isOlderVersion(version, thanVersion) {
  var pkgVersionArr = thanVersion ? thanVersion.split('.') : currentVerArr;
  var destVer = version.split('.');
  for (var i = 0; i < 3; i++) {
    if (pkgVersionArr[i] > destVer[i]) {
      return true;
    } else if (pkgVersionArr[i] < destVer[i]) {
      return false;
    }
  }
  return false;
}

/**
 * Transitional option validator
 * @param {function|boolean?} validator
 * @param {string?} version
 * @param {string} message
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  var isDeprecated = version && isOlderVersion(version);

  function formatMessage(opt, desc) {
    return '[Axios v' + pkg.version + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed in ' + version));
    }

    if (isDeprecated && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  isOlderVersion: isOlderVersion,
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),
/* 42 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}');

/***/ }),
/* 43 */
/***/ ((module) => {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 44 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Cancel = __webpack_require__(43);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 45 */
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 46 */
/***/ ((module) => {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const localforage = __webpack_require__(48);
class LocalForage {
    async set(key, value) {
        if (!key || value === undefined) {
            throw new Error("Key or value cannot be undefined");
        }
        try {
            await localforage.setItem(key, JSON.stringify(value));
        }
        catch (err) {
            console.error(err);
        }
    }
    async setAll(units) {
        if (units === undefined || units.length === 0) {
            throw new Error("Array cannot be null or empty");
        }
        units.forEach(async (kvPair) => {
            try {
                await this.set(kvPair.key, kvPair.value);
            }
            catch (err) {
                console.error(err);
            }
        });
        return true;
    }
    async get(key) {
        if (!key) {
            throw new Error("Must supply a key in get");
        }
        try {
            const value = await localforage.getItem(key);
            return value == null ? null : JSON.parse(value);
        }
        catch (err) {
            console.error(`LocalForage getItem error: ${err}`);
        }
    }
    async clear() {
        try {
            await localforage.clear();
        }
        catch (err) {
            console.error(err);
        }
    }
    async remove(key) {
        if (!key) {
            throw new Error("Must supply a key in remove");
        }
        try {
            await localforage.removeItem(key);
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports["default"] = new LocalForage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9jYWxGb3JhZ2VBZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RlZmF1bHRBZGFwdGVycy9Mb2NhbEZvcmFnZUFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMkM7QUFFM0MsTUFBTSxXQUFXO0lBQ2YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBYTtRQUNsQyxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsSUFBSTtZQUNGLE1BQU0sV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBdUM7UUFDbEQsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdDLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUNsRDtRQUVELEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzdCLElBQUk7Z0JBQ0YsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFDO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNwQjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFXO1FBQ25CLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDN0M7UUFFRCxJQUFJO1lBQ0YsTUFBTSxLQUFLLEdBQVcsTUFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXJELE9BQU8sS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pEO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLDhCQUE4QixHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLO1FBQ1QsSUFBSTtZQUNGLE1BQU0sV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzNCO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBVztRQUN0QixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsSUFBSTtZQUNGLE1BQU0sV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7Q0FDRjtBQUVELGtCQUFlLElBQUksV0FBVyxFQUFFLENBQUMifQ==

/***/ }),
/* 48 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=undefined;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=undefined;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
'use strict';
var immediate = _dereq_(1);

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"1":1}],3:[function(_dereq_,module,exports){
(function (global){
'use strict';
if (typeof global.Promise !== 'function') {
  global.Promise = _dereq_(2);
}

}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"2":2}],4:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getIDB() {
    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
    try {
        if (typeof indexedDB !== 'undefined') {
            return indexedDB;
        }
        if (typeof webkitIndexedDB !== 'undefined') {
            return webkitIndexedDB;
        }
        if (typeof mozIndexedDB !== 'undefined') {
            return mozIndexedDB;
        }
        if (typeof OIndexedDB !== 'undefined') {
            return OIndexedDB;
        }
        if (typeof msIndexedDB !== 'undefined') {
            return msIndexedDB;
        }
    } catch (e) {
        return;
    }
}

var idb = getIDB();

function isIndexedDBValid() {
    try {
        // Initialize IndexedDB; fall back to vendor-prefixed versions
        // if needed.
        if (!idb || !idb.open) {
            return false;
        }
        // We mimic PouchDB here;
        //
        // We test for openDatabase because IE Mobile identifies itself
        // as Safari. Oh the lulz...
        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

        // Safari <10.1 does not meet our requirements for IDB support
        // (see: https://github.com/pouchdb/pouchdb/issues/5572).
        // Safari 10.1 shipped with fetch, we can use that to detect it.
        // Note: this creates issues with `window.fetch` polyfills and
        // overrides; see:
        // https://github.com/localForage/localForage/issues/856
        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
        // some outdated implementations of IDB that appear on Samsung
        // and HTC Android devices <4.4 are missing IDBKeyRange
        // See: https://github.com/mozilla/localForage/issues/128
        // See: https://github.com/mozilla/localForage/issues/272
        typeof IDBKeyRange !== 'undefined';
    } catch (e) {
        return false;
    }
}

// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
function createBlob(parts, properties) {
    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
    parts = parts || [];
    properties = properties || {};
    try {
        return new Blob(parts, properties);
    } catch (e) {
        if (e.name !== 'TypeError') {
            throw e;
        }
        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
        var builder = new Builder();
        for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
        }
        return builder.getBlob(properties.type);
    }
}

// This is CommonJS because lie is an external dependency, so Rollup
// can just ignore it.
if (typeof Promise === 'undefined') {
    // In the "nopromises" build this will just throw if you don't have
    // a global promise object, but it would throw anyway later.
    _dereq_(3);
}
var Promise$1 = Promise;

function executeCallback(promise, callback) {
    if (callback) {
        promise.then(function (result) {
            callback(null, result);
        }, function (error) {
            callback(error);
        });
    }
}

function executeTwoCallbacks(promise, callback, errorCallback) {
    if (typeof callback === 'function') {
        promise.then(callback);
    }

    if (typeof errorCallback === 'function') {
        promise["catch"](errorCallback);
    }
}

function normalizeKey(key) {
    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    return key;
}

function getCallback() {
    if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
        return arguments[arguments.length - 1];
    }
}

// Some code originally from async_storage.js in
// [Gaia](https://github.com/mozilla-b2g/gaia).

var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
var supportsBlobs = void 0;
var dbContexts = {};
var toString = Object.prototype.toString;

// Transaction Modes
var READ_ONLY = 'readonly';
var READ_WRITE = 'readwrite';

// Transform a binary string to an array buffer, because otherwise
// weird stuff happens when you try to work with the binary string directly.
// It is known.
// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
function _binStringToArrayBuffer(bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
    }
    return buf;
}

//
// Blobs are not supported in all versions of IndexedDB, notably
// Chrome <37 and Android <5. In those versions, storing a blob will throw.
//
// Various other blob bugs exist in Chrome v37-42 (inclusive).
// Detecting them is expensive and confusing to users, and Chrome 37-42
// is at very low usage worldwide, so we do a hacky userAgent check instead.
//
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
//
// Code borrowed from PouchDB. See:
// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
//
function _checkBlobSupportWithoutCaching(idb) {
    return new Promise$1(function (resolve) {
        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
        var blob = createBlob(['']);
        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

        txn.onabort = function (e) {
            // If the transaction aborts now its due to not being able to
            // write to the database, likely due to the disk being full
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
        };

        txn.oncomplete = function () {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            // MS Edge pretends to be Chrome 42:
            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
        };
    })["catch"](function () {
        return false; // error, so assume unsupported
    });
}

function _checkBlobSupport(idb) {
    if (typeof supportsBlobs === 'boolean') {
        return Promise$1.resolve(supportsBlobs);
    }
    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
        supportsBlobs = value;
        return supportsBlobs;
    });
}

function _deferReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Create a deferred object representing the current database operation.
    var deferredOperation = {};

    deferredOperation.promise = new Promise$1(function (resolve, reject) {
        deferredOperation.resolve = resolve;
        deferredOperation.reject = reject;
    });

    // Enqueue the deferred operation.
    dbContext.deferredOperations.push(deferredOperation);

    // Chain its promise to the database readiness.
    if (!dbContext.dbReady) {
        dbContext.dbReady = deferredOperation.promise;
    } else {
        dbContext.dbReady = dbContext.dbReady.then(function () {
            return deferredOperation.promise;
        });
    }
}

function _advanceReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Resolve its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.resolve();
        return deferredOperation.promise;
    }
}

function _rejectReadiness(dbInfo, err) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Reject its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.reject(err);
        return deferredOperation.promise;
    }
}

function _getConnection(dbInfo, upgradeNeeded) {
    return new Promise$1(function (resolve, reject) {
        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

        if (dbInfo.db) {
            if (upgradeNeeded) {
                _deferReadiness(dbInfo);
                dbInfo.db.close();
            } else {
                return resolve(dbInfo.db);
            }
        }

        var dbArgs = [dbInfo.name];

        if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
        }

        var openreq = idb.open.apply(idb, dbArgs);

        if (upgradeNeeded) {
            openreq.onupgradeneeded = function (e) {
                var db = openreq.result;
                try {
                    db.createObjectStore(dbInfo.storeName);
                    if (e.oldVersion <= 1) {
                        // Added when support for blob shims was added
                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                    }
                } catch (ex) {
                    if (ex.name === 'ConstraintError') {
                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                    } else {
                        throw ex;
                    }
                }
            };
        }

        openreq.onerror = function (e) {
            e.preventDefault();
            reject(openreq.error);
        };

        openreq.onsuccess = function () {
            var db = openreq.result;
            db.onversionchange = function (e) {
                // Triggered when the database is modified (e.g. adding an objectStore) or
                // deleted (even when initiated by other sessions in different tabs).
                // Closing the connection here prevents those operations from being blocked.
                // If the database is accessed again later by this instance, the connection
                // will be reopened or the database recreated as needed.
                e.target.close();
            };
            resolve(db);
            _advanceReadiness(dbInfo);
        };
    });
}

function _getOriginalConnection(dbInfo) {
    return _getConnection(dbInfo, false);
}

function _getUpgradedConnection(dbInfo) {
    return _getConnection(dbInfo, true);
}

function _isUpgradeNeeded(dbInfo, defaultVersion) {
    if (!dbInfo.db) {
        return true;
    }

    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
    var isDowngrade = dbInfo.version < dbInfo.db.version;
    var isUpgrade = dbInfo.version > dbInfo.db.version;

    if (isDowngrade) {
        // If the version is not the default one
        // then warn for impossible downgrade.
        if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
        }
        // Align the versions to prevent errors.
        dbInfo.version = dbInfo.db.version;
    }

    if (isUpgrade || isNewStore) {
        // If the store is new then increment the version (if needed).
        // This will trigger an "upgradeneeded" event which is required
        // for creating a store.
        if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
                dbInfo.version = incVersion;
            }
        }

        return true;
    }

    return false;
}

// encode a blob for indexeddb engines that don't support blobs
function _encodeBlob(blob) {
    return new Promise$1(function (resolve, reject) {
        var reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = function (e) {
            var base64 = btoa(e.target.result || '');
            resolve({
                __local_forage_encoded_blob: true,
                data: base64,
                type: blob.type
            });
        };
        reader.readAsBinaryString(blob);
    });
}

// decode an encoded blob
function _decodeBlob(encodedBlob) {
    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
    return createBlob([arrayBuff], { type: encodedBlob.type });
}

// is this one of our fancy encoded blobs?
function _isEncodedBlob(value) {
    return value && value.__local_forage_encoded_blob;
}

// Specialize the default `ready()` function by making it dependent
// on the current database operations. Thus, the driver will be actually
// ready when it's been initialized (default) *and* there are no pending
// operations on the database (initiated by some other instances).
function _fullyReady(callback) {
    var self = this;

    var promise = self._initReady().then(function () {
        var dbContext = dbContexts[self._dbInfo.name];

        if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
        }
    });

    executeTwoCallbacks(promise, callback, callback);
    return promise;
}

// Try to establish a new db connection to replace the
// current one which is broken (i.e. experiencing
// InvalidStateError while creating a transaction).
function _tryReconnect(dbInfo) {
    _deferReadiness(dbInfo);

    var dbContext = dbContexts[dbInfo.name];
    var forages = dbContext.forages;

    for (var i = 0; i < forages.length; i++) {
        var forage = forages[i];
        if (forage._dbInfo.db) {
            forage._dbInfo.db.close();
            forage._dbInfo.db = null;
        }
    }
    dbInfo.db = null;

    return _getOriginalConnection(dbInfo).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        // store the latest db reference
        // in case the db was upgraded
        dbInfo.db = dbContext.db = db;
        for (var i = 0; i < forages.length; i++) {
            forages[i]._dbInfo.db = db;
        }
    })["catch"](function (err) {
        _rejectReadiness(dbInfo, err);
        throw err;
    });
}

// FF doesn't like Promises (micro-tasks) and IDDB store operations,
// so we have to do it with callbacks
function createTransaction(dbInfo, mode, callback, retries) {
    if (retries === undefined) {
        retries = 1;
    }

    try {
        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
        callback(null, tx);
    } catch (err) {
        if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
            return Promise$1.resolve().then(function () {
                if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                    // increase the db version, to create the new ObjectStore
                    if (dbInfo.db) {
                        dbInfo.version = dbInfo.db.version + 1;
                    }
                    // Reopen the database for upgrading.
                    return _getUpgradedConnection(dbInfo);
                }
            }).then(function () {
                return _tryReconnect(dbInfo).then(function () {
                    createTransaction(dbInfo, mode, callback, retries - 1);
                });
            })["catch"](callback);
        }

        callback(err);
    }
}

function createDbContext() {
    return {
        // Running localForages sharing a database.
        forages: [],
        // Shared database.
        db: null,
        // Database readiness (promise).
        dbReady: null,
        // Deferred operations on the database.
        deferredOperations: []
    };
}

// Open the IndexedDB database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    // Get the current context of the database;
    var dbContext = dbContexts[dbInfo.name];

    // ...or create a new context.
    if (!dbContext) {
        dbContext = createDbContext();
        // Register the new context in the global container.
        dbContexts[dbInfo.name] = dbContext;
    }

    // Register itself as a running localForage in the current context.
    dbContext.forages.push(self);

    // Replace the default `ready()` function with the specialized one.
    if (!self._initReady) {
        self._initReady = self.ready;
        self.ready = _fullyReady;
    }

    // Create an array of initialization states of the related localForages.
    var initPromises = [];

    function ignoreErrors() {
        // Don't handle errors here,
        // just makes sure related localForages aren't pending.
        return Promise$1.resolve();
    }

    for (var j = 0; j < dbContext.forages.length; j++) {
        var forage = dbContext.forages[j];
        if (forage !== self) {
            // Don't wait for itself...
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
        }
    }

    // Take a snapshot of the related localForages.
    var forages = dbContext.forages.slice(0);

    // Initialize the connection process only when
    // all the related localForages aren't pending.
    return Promise$1.all(initPromises).then(function () {
        dbInfo.db = dbContext.db;
        // Get the connection or open a new one without upgrade.
        return _getOriginalConnection(dbInfo);
    }).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        dbInfo.db = dbContext.db = db;
        self._dbInfo = dbInfo;
        // Share the final connection amongst related localForages.
        for (var k = 0; k < forages.length; k++) {
            var forage = forages[k];
            if (forage !== self) {
                // Self is already up-to-date.
                forage._dbInfo.db = dbInfo.db;
                forage._dbInfo.version = dbInfo.version;
            }
        }
    });
}

function getItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.get(key);

                    req.onsuccess = function () {
                        var value = req.result;
                        if (value === undefined) {
                            value = null;
                        }
                        if (_isEncodedBlob(value)) {
                            value = _decodeBlob(value);
                        }
                        resolve(value);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items stored in database.
function iterate(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var iterationNumber = 1;

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (cursor) {
                            var value = cursor.value;
                            if (_isEncodedBlob(value)) {
                                value = _decodeBlob(value);
                            }
                            var result = iterator(value, cursor.key, iterationNumber++);

                            // when the iterator callback returns any
                            // (non-`undefined`) value, then we stop
                            // the iteration immediately
                            if (result !== void 0) {
                                resolve(result);
                            } else {
                                cursor["continue"]();
                            }
                        } else {
                            resolve();
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);

    return promise;
}

function setItem(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        var dbInfo;
        self.ready().then(function () {
            dbInfo = self._dbInfo;
            if (toString.call(value) === '[object Blob]') {
                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                    if (blobSupport) {
                        return value;
                    }
                    return _encodeBlob(value);
                });
            }
            return value;
        }).then(function (value) {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);

                    // The reason we don't _save_ null is because IE 10 does
                    // not support saving the `null` type in IndexedDB. How
                    // ironic, given the bug below!
                    // See: https://github.com/mozilla/localForage/issues/161
                    if (value === null) {
                        value = undefined;
                    }

                    var req = store.put(value, key);

                    transaction.oncomplete = function () {
                        // Cast to undefined so the value passed to
                        // callback/promise is the same as what one would get out
                        // of `getItem()` later. This leads to some weirdness
                        // (setItem('foo', undefined) will return `null`), but
                        // it's not my fault localStorage is our baseline and that
                        // it's weird.
                        if (value === undefined) {
                            value = null;
                        }

                        resolve(value);
                    };
                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function removeItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    // We use a Grunt task to make this safe for IE and some
                    // versions of Android (including those used by Cordova).
                    // Normally IE won't like `.delete()` and will insist on
                    // using `['delete']()`, but we have a build step that
                    // fixes this for us now.
                    var req = store["delete"](key);
                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onerror = function () {
                        reject(req.error);
                    };

                    // The request will be also be aborted if we've exceeded our storage
                    // space.
                    transaction.onabort = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function clear(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.clear();

                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function length(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.count();

                    req.onsuccess = function () {
                        resolve(req.result);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function key(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        if (n < 0) {
            resolve(null);

            return;
        }

        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var advanced = false;
                    var req = store.openKeyCursor();

                    req.onsuccess = function () {
                        var cursor = req.result;
                        if (!cursor) {
                            // this means there weren't enough keys
                            resolve(null);

                            return;
                        }

                        if (n === 0) {
                            // We have the first key, return it if that's what they
                            // wanted.
                            resolve(cursor.key);
                        } else {
                            if (!advanced) {
                                // Otherwise, ask the cursor to skip ahead n
                                // records.
                                advanced = true;
                                cursor.advance(n);
                            } else {
                                // When we get here, we've got the nth key.
                                resolve(cursor.key);
                            }
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openKeyCursor();
                    var keys = [];

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (!cursor) {
                            resolve(keys);
                            return;
                        }

                        keys.push(cursor.key);
                        cursor["continue"]();
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;
            for (var i = 0; i < forages.length; i++) {
                forages[i]._dbInfo.db = db;
            }
            return db;
        });

        if (!options.storeName) {
            promise = dbPromise.then(function (db) {
                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                }

                var dropDBPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.deleteDatabase(options.name);

                    req.onerror = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        reject(req.error);
                    };

                    req.onblocked = function () {
                        // Closing all open connections in onversionchange handler should prevent this situation, but if
                        // we do get here, it just means the request remains pending - eventually it will succeed or error
                        console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        resolve(db);
                    };
                });

                return dropDBPromise.then(function (db) {
                    dbContext.db = db;
                    for (var i = 0; i < forages.length; i++) {
                        var _forage = forages[i];
                        _advanceReadiness(_forage._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        } else {
            promise = dbPromise.then(function (db) {
                if (!db.objectStoreNames.contains(options.storeName)) {
                    return;
                }

                var newVersion = db.version + 1;

                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                    forage._dbInfo.version = newVersion;
                }

                var dropObjectPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.open(options.name, newVersion);

                    req.onerror = function (err) {
                        var db = req.result;
                        db.close();
                        reject(err);
                    };

                    req.onupgradeneeded = function () {
                        var db = req.result;
                        db.deleteObjectStore(options.storeName);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        db.close();
                        resolve(db);
                    };
                });

                return dropObjectPromise.then(function (db) {
                    dbContext.db = db;
                    for (var j = 0; j < forages.length; j++) {
                        var _forage2 = forages[j];
                        _forage2._dbInfo.db = db;
                        _advanceReadiness(_forage2._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        }
    }

    executeCallback(promise, callback);
    return promise;
}

var asyncStorage = {
    _driver: 'asyncStorage',
    _initStorage: _initStorage,
    _support: isIndexedDBValid(),
    iterate: iterate,
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    clear: clear,
    length: length,
    key: key,
    keys: keys,
    dropInstance: dropInstance
};

function isWebSQLValid() {
    return typeof openDatabase === 'function';
}

// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
// it to Base64, so this is how we store it to prevent very strange errors with less
// verbose ways of binary <-> string data storage.
var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

var BLOB_TYPE_PREFIX = '~~local_forage_type~';
var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

var SERIALIZED_MARKER = '__lfsc__:';
var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

// OMG the serializations!
var TYPE_ARRAYBUFFER = 'arbf';
var TYPE_BLOB = 'blob';
var TYPE_INT8ARRAY = 'si08';
var TYPE_UINT8ARRAY = 'ui08';
var TYPE_UINT8CLAMPEDARRAY = 'uic8';
var TYPE_INT16ARRAY = 'si16';
var TYPE_INT32ARRAY = 'si32';
var TYPE_UINT16ARRAY = 'ur16';
var TYPE_UINT32ARRAY = 'ui32';
var TYPE_FLOAT32ARRAY = 'fl32';
var TYPE_FLOAT64ARRAY = 'fl64';
var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

var toString$1 = Object.prototype.toString;

function stringToBuffer(serializedString) {
    // Fill the string into a ArrayBuffer.
    var bufferLength = serializedString.length * 0.75;
    var len = serializedString.length;
    var i;
    var p = 0;
    var encoded1, encoded2, encoded3, encoded4;

    if (serializedString[serializedString.length - 1] === '=') {
        bufferLength--;
        if (serializedString[serializedString.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = new ArrayBuffer(bufferLength);
    var bytes = new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

        /*jslint bitwise: true */
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return buffer;
}

// Converts a buffer to a string to store, serialized, in the backend
// storage library.
function bufferToString(buffer) {
    // base64-arraybuffer
    var bytes = new Uint8Array(buffer);
    var base64String = '';
    var i;

    for (i = 0; i < bytes.length; i += 3) {
        /*jslint bitwise: true */
        base64String += BASE_CHARS[bytes[i] >> 2];
        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64String += BASE_CHARS[bytes[i + 2] & 63];
    }

    if (bytes.length % 3 === 2) {
        base64String = base64String.substring(0, base64String.length - 1) + '=';
    } else if (bytes.length % 3 === 1) {
        base64String = base64String.substring(0, base64String.length - 2) + '==';
    }

    return base64String;
}

// Serialize a value, afterwards executing a callback (which usually
// instructs the `setItem()` callback/promise to be executed). This is how
// we store binary data with localStorage.
function serialize(value, callback) {
    var valueType = '';
    if (value) {
        valueType = toString$1.call(value);
    }

    // Cannot use `value instanceof ArrayBuffer` or such here, as these
    // checks fail when running the tests using casper.js...
    //
    // TODO: See why those tests fail and use a better solution.
    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
        // Convert binary arrays to a string and prefix the string with
        // a special marker.
        var buffer;
        var marker = SERIALIZED_MARKER;

        if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
        } else {
            buffer = value.buffer;

            if (valueType === '[object Int8Array]') {
                marker += TYPE_INT8ARRAY;
            } else if (valueType === '[object Uint8Array]') {
                marker += TYPE_UINT8ARRAY;
            } else if (valueType === '[object Uint8ClampedArray]') {
                marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === '[object Int16Array]') {
                marker += TYPE_INT16ARRAY;
            } else if (valueType === '[object Uint16Array]') {
                marker += TYPE_UINT16ARRAY;
            } else if (valueType === '[object Int32Array]') {
                marker += TYPE_INT32ARRAY;
            } else if (valueType === '[object Uint32Array]') {
                marker += TYPE_UINT32ARRAY;
            } else if (valueType === '[object Float32Array]') {
                marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === '[object Float64Array]') {
                marker += TYPE_FLOAT64ARRAY;
            } else {
                callback(new Error('Failed to get type for BinaryArray'));
            }
        }

        callback(marker + bufferToString(buffer));
    } else if (valueType === '[object Blob]') {
        // Conver the blob to a binaryArray and then to a string.
        var fileReader = new FileReader();

        fileReader.onload = function () {
            // Backwards-compatible prefix for the blob type.
            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
        };

        fileReader.readAsArrayBuffer(value);
    } else {
        try {
            callback(JSON.stringify(value));
        } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);

            callback(null, e);
        }
    }
}

// Deserialize data we've inserted into a value column/field. We place
// special markers into our strings to mark them as encoded; this isn't
// as nice as a meta field, but it's the only sane thing we can do whilst
// keeping localStorage support intact.
//
// Oftentimes this will just deserialize JSON content, but if we have a
// special marker (SERIALIZED_MARKER, defined above), we will extract
// some kind of arraybuffer/binary data/typed array out of the string.
function deserialize(value) {
    // If we haven't marked this string as being specially serialized (i.e.
    // something other than serialized JSON), we can just return it and be
    // done with it.
    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
        return JSON.parse(value);
    }

    // The following code deals with deserializing some kind of Blob or
    // TypedArray. First we separate out the type of data we're dealing
    // with from the data itself.
    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

    var blobType;
    // Backwards-compatible blob type serialization strategy.
    // DBs created with older versions of localForage will simply not have the blob type.
    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
        blobType = matcher[1];
        serializedString = serializedString.substring(matcher[0].length);
    }
    var buffer = stringToBuffer(serializedString);

    // Return the right type based on the code/type set during
    // serialization.
    switch (type) {
        case TYPE_ARRAYBUFFER:
            return buffer;
        case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
        case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
        case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
        case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
        case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
        case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
        case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
        case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
        case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
        case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
        default:
            throw new Error('Unkown type: ' + type);
    }
}

var localforageSerializer = {
    serialize: serialize,
    deserialize: deserialize,
    stringToBuffer: stringToBuffer,
    bufferToString: bufferToString
};

/*
 * Includes code from:
 *
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */

function createDbTable(t, dbInfo, callback, errorCallback) {
    t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
}

// Open the WebSQL database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage$1(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
        }
    }

    var dbInfoPromise = new Promise$1(function (resolve, reject) {
        // Open the database; the openDatabase API will automatically
        // create it for us if it doesn't exist.
        try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
        } catch (e) {
            return reject(e);
        }

        // Create our key/value table if it doesn't exist.
        dbInfo.db.transaction(function (t) {
            createDbTable(t, dbInfo, function () {
                self._dbInfo = dbInfo;
                resolve();
            }, function (t, error) {
                reject(error);
            });
        }, reject);
    });

    dbInfo.serializer = localforageSerializer;
    return dbInfoPromise;
}

function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
    t.executeSql(sqlStatement, args, callback, function (t, error) {
        if (error.code === error.SYNTAX_ERR) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
                if (!results.rows.length) {
                    // if the table is missing (was deleted)
                    // re-create it table and retry
                    createDbTable(t, dbInfo, function () {
                        t.executeSql(sqlStatement, args, callback, errorCallback);
                    }, errorCallback);
                } else {
                    errorCallback(t, error);
                }
            }, errorCallback);
        } else {
            errorCallback(t, error);
        }
    }, errorCallback);
}

function getItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).value : null;

                    // Check to see if this is serialized content we need to
                    // unpack.
                    if (result) {
                        result = dbInfo.serializer.deserialize(result);
                    }

                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function iterate$1(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;

            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                    var rows = results.rows;
                    var length = rows.length;

                    for (var i = 0; i < length; i++) {
                        var item = rows.item(i);
                        var result = item.value;

                        // Check to see if this is serialized content
                        // we need to unpack.
                        if (result) {
                            result = dbInfo.serializer.deserialize(result);
                        }

                        result = iterator(result, item.key, i + 1);

                        // void(0) prevents problems with redefinition
                        // of `undefined`.
                        if (result !== void 0) {
                            resolve(result);
                            return;
                        }
                    }

                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function _setItem(key, value, callback, retriesLeft) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            // The localStorage API doesn't return undefined values in an
            // "expected" way, so undefined is always cast to null in all
            // drivers. See: https://github.com/mozilla/localForage/pull/42
            if (value === undefined) {
                value = null;
            }

            // Save the original value to pass to the callback.
            var originalValue = value;

            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    dbInfo.db.transaction(function (t) {
                        tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
                            resolve(originalValue);
                        }, function (t, error) {
                            reject(error);
                        });
                    }, function (sqlError) {
                        // The transaction failed; check
                        // to see if it's a quota error.
                        if (sqlError.code === sqlError.QUOTA_ERR) {
                            // We reject the callback outright for now, but
                            // it's worth trying to re-run the transaction.
                            // Even if the user accepts the prompt to use
                            // more storage on Safari, this error will
                            // be called.
                            //
                            // Try to re-run the transaction.
                            if (retriesLeft > 0) {
                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                return;
                            }
                            reject(sqlError);
                        }
                    });
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function setItem$1(key, value, callback) {
    return _setItem.apply(this, [key, value, callback, 1]);
}

function removeItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Deletes every item in the table.
// TODO: Find out if this resets the AUTO_INCREMENT number.
function clear$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Does a simple `COUNT(key)` to get the number of items stored in
// localForage.
function length$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                // Ahhh, SQL makes this one soooooo easy.
                tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                    var result = results.rows.item(0).c;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Return the key located at key index X; essentially gets the key from a
// `WHERE id = ?`. This is the most efficient way I can think to implement
// this rarely-used (in my experience) part of the API, but it can seem
// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
// the ID of each key will change every time it's updated. Perhaps a stored
// procedure for the `setItem()` SQL would solve this problem?
// TODO: Don't change ID on `setItem()`.
function key$1(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).key : null;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                    var keys = [];

                    for (var i = 0; i < results.rows.length; i++) {
                        keys.push(results.rows.item(i).key);
                    }

                    resolve(keys);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// https://www.w3.org/TR/webdatabase/#databases
// > There is no way to enumerate or delete the databases available for an origin from this API.
function getAllStoreNames(db) {
    return new Promise$1(function (resolve, reject) {
        db.transaction(function (t) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
                var storeNames = [];

                for (var i = 0; i < results.rows.length; i++) {
                    storeNames.push(results.rows.item(i).name);
                }

                resolve({
                    db: db,
                    storeNames: storeNames
                });
            }, function (t, error) {
                reject(error);
            });
        }, function (sqlError) {
            reject(sqlError);
        });
    });
}

function dropInstance$1(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            var db;
            if (options.name === currentConfig.name) {
                // use the db reference of the current instance
                db = self._dbInfo.db;
            } else {
                db = openDatabase(options.name, '', '', 0);
            }

            if (!options.storeName) {
                // drop all database tables
                resolve(getAllStoreNames(db));
            } else {
                resolve({
                    db: db,
                    storeNames: [options.storeName]
                });
            }
        }).then(function (operationInfo) {
            return new Promise$1(function (resolve, reject) {
                operationInfo.db.transaction(function (t) {
                    function dropTable(storeName) {
                        return new Promise$1(function (resolve, reject) {
                            t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
                                resolve();
                            }, function (t, error) {
                                reject(error);
                            });
                        });
                    }

                    var operations = [];
                    for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                        operations.push(dropTable(operationInfo.storeNames[i]));
                    }

                    Promise$1.all(operations).then(function () {
                        resolve();
                    })["catch"](function (e) {
                        reject(e);
                    });
                }, function (sqlError) {
                    reject(sqlError);
                });
            });
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var webSQLStorage = {
    _driver: 'webSQLStorage',
    _initStorage: _initStorage$1,
    _support: isWebSQLValid(),
    iterate: iterate$1,
    getItem: getItem$1,
    setItem: setItem$1,
    removeItem: removeItem$1,
    clear: clear$1,
    length: length$1,
    key: key$1,
    keys: keys$1,
    dropInstance: dropInstance$1
};

function isLocalStorageValid() {
    try {
        return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
        // in IE8 typeof localStorage.setItem === 'object'
        !!localStorage.setItem;
    } catch (e) {
        return false;
    }
}

function _getKeyPrefix(options, defaultConfig) {
    var keyPrefix = options.name + '/';

    if (options.storeName !== defaultConfig.storeName) {
        keyPrefix += options.storeName + '/';
    }
    return keyPrefix;
}

// Check if localStorage throws when saving an item
function checkIfLocalStorageThrows() {
    var localStorageTestKey = '_localforage_support_test';

    try {
        localStorage.setItem(localStorageTestKey, true);
        localStorage.removeItem(localStorageTestKey);

        return false;
    } catch (e) {
        return true;
    }
}

// Check if localStorage is usable and allows to save an item
// This method checks if localStorage is usable in Safari Private Browsing
// mode, or in any other case where the available quota for localStorage
// is 0 and there wasn't any saved items yet.
function _isLocalStorageUsable() {
    return !checkIfLocalStorageThrows() || localStorage.length > 0;
}

// Config the localStorage backend, using options set in the config.
function _initStorage$2(options) {
    var self = this;
    var dbInfo = {};
    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

    if (!_isLocalStorageUsable()) {
        return Promise$1.reject();
    }

    self._dbInfo = dbInfo;
    dbInfo.serializer = localforageSerializer;

    return Promise$1.resolve();
}

// Remove all keys from the datastore, effectively destroying all data in
// the app's key/value store!
function clear$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var keyPrefix = self._dbInfo.keyPrefix;

        for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);

            if (key.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key);
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Retrieve an item from the store. Unlike the original async_storage
// library in Gaia, we don't modify return values at all. If a key's value
// is `undefined`, we pass that value to the callback function.
function getItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result = localStorage.getItem(dbInfo.keyPrefix + key);

        // If a result was found, parse it from the serialized
        // string into a JS object. If result isn't truthy, the key
        // is likely undefined and we'll pass it straight to the
        // callback.
        if (result) {
            result = dbInfo.serializer.deserialize(result);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items in the store.
function iterate$2(iterator, callback) {
    var self = this;

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var keyPrefix = dbInfo.keyPrefix;
        var keyPrefixLength = keyPrefix.length;
        var length = localStorage.length;

        // We use a dedicated iterator instead of the `i` variable below
        // so other keys we fetch in localStorage aren't counted in
        // the `iterationNumber` argument passed to the `iterate()`
        // callback.
        //
        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
        var iterationNumber = 1;

        for (var i = 0; i < length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf(keyPrefix) !== 0) {
                continue;
            }
            var value = localStorage.getItem(key);

            // If a result was found, parse it from the serialized
            // string into a JS object. If result isn't truthy, the
            // key is likely undefined and we'll pass it straight
            // to the iterator.
            if (value) {
                value = dbInfo.serializer.deserialize(value);
            }

            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

            if (value !== void 0) {
                return value;
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Same as localStorage's key() method, except takes a callback.
function key$2(n, callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result;
        try {
            result = localStorage.key(n);
        } catch (error) {
            result = null;
        }

        // Remove the prefix from the key, if a key is found.
        if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var length = localStorage.length;
        var keys = [];

        for (var i = 0; i < length; i++) {
            var itemKey = localStorage.key(i);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                keys.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
        }

        return keys;
    });

    executeCallback(promise, callback);
    return promise;
}

// Supply the number of keys in the datastore to the callback function.
function length$2(callback) {
    var self = this;
    var promise = self.keys().then(function (keys) {
        return keys.length;
    });

    executeCallback(promise, callback);
    return promise;
}

// Remove an item from the store, nice and simple.
function removeItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        localStorage.removeItem(dbInfo.keyPrefix + key);
    });

    executeCallback(promise, callback);
    return promise;
}

// Set a key's value and run an optional callback once the value is set.
// Unlike Gaia's implementation, the callback function is passed the value,
// in case you want to operate on that value only after you're sure it
// saved, or something like that.
function setItem$2(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        // Convert undefined values to null.
        // https://github.com/mozilla/localForage/pull/42
        if (value === undefined) {
            value = null;
        }

        // Save the original value to pass to the callback.
        var originalValue = value;

        return new Promise$1(function (resolve, reject) {
            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        localStorage.setItem(dbInfo.keyPrefix + key, value);
                        resolve(originalValue);
                    } catch (e) {
                        // localStorage capacity exceeded.
                        // TODO: Make this a specific error/event.
                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                            reject(e);
                        }
                        reject(e);
                    }
                }
            });
        });
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance$2(options, callback) {
    callback = getCallback.apply(this, arguments);

    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        var currentConfig = this.config();
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            if (!options.storeName) {
                resolve(options.name + '/');
            } else {
                resolve(_getKeyPrefix(options, self._defaultConfig));
            }
        }).then(function (keyPrefix) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
                var key = localStorage.key(i);

                if (key.indexOf(keyPrefix) === 0) {
                    localStorage.removeItem(key);
                }
            }
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var localStorageWrapper = {
    _driver: 'localStorageWrapper',
    _initStorage: _initStorage$2,
    _support: isLocalStorageValid(),
    iterate: iterate$2,
    getItem: getItem$2,
    setItem: setItem$2,
    removeItem: removeItem$2,
    clear: clear$2,
    length: length$2,
    key: key$2,
    keys: keys$2,
    dropInstance: dropInstance$2
};

var sameValue = function sameValue(x, y) {
    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
};

var includes = function includes(array, searchElement) {
    var len = array.length;
    var i = 0;
    while (i < len) {
        if (sameValue(array[i], searchElement)) {
            return true;
        }
        i++;
    }

    return false;
};

var isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};

// Drivers are stored here when `defineDriver()` is called.
// They are shared across all instances of localForage.
var DefinedDrivers = {};

var DriverSupport = {};

var DefaultDrivers = {
    INDEXEDDB: asyncStorage,
    WEBSQL: webSQLStorage,
    LOCALSTORAGE: localStorageWrapper
};

var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

var OptionalDriverMethods = ['dropInstance'];

var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

var DefaultConfig = {
    description: '',
    driver: DefaultDriverOrder.slice(),
    name: 'localforage',
    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
    // we can use without a prompt.
    size: 4980736,
    storeName: 'keyvaluepairs',
    version: 1.0
};

function callWhenReady(localForageInstance, libraryMethod) {
    localForageInstance[libraryMethod] = function () {
        var _args = arguments;
        return localForageInstance.ready().then(function () {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
        });
    };
}

function extend() {
    for (var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];

        if (arg) {
            for (var _key in arg) {
                if (arg.hasOwnProperty(_key)) {
                    if (isArray(arg[_key])) {
                        arguments[0][_key] = arg[_key].slice();
                    } else {
                        arguments[0][_key] = arg[_key];
                    }
                }
            }
        }
    }

    return arguments[0];
}

var LocalForage = function () {
    function LocalForage(options) {
        _classCallCheck(this, LocalForage);

        for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                var driver = DefaultDrivers[driverTypeKey];
                var driverName = driver._driver;
                this[driverTypeKey] = driverName;

                if (!DefinedDrivers[driverName]) {
                    // we don't need to wait for the promise,
                    // since the default drivers can be defined
                    // in a blocking manner
                    this.defineDriver(driver);
                }
            }
        }

        this._defaultConfig = extend({}, DefaultConfig);
        this._config = extend({}, this._defaultConfig, options);
        this._driverSet = null;
        this._initDriver = null;
        this._ready = false;
        this._dbInfo = null;

        this._wrapLibraryMethodsWithReady();
        this.setDriver(this._config.driver)["catch"](function () {});
    }

    // Set any config values for localForage; can be called anytime before
    // the first API call (e.g. `getItem`, `setItem`).
    // We loop through options so we don't overwrite existing config
    // values.


    LocalForage.prototype.config = function config(options) {
        // If the options argument is an object, we use it to set values.
        // Otherwise, we return either a specified config value or all
        // config values.
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            // If localforage is ready and fully initialized, we can't set
            // any new configuration values. Instead, we return an error.
            if (this._ready) {
                return new Error("Can't call config() after localforage " + 'has been used.');
            }

            for (var i in options) {
                if (i === 'storeName') {
                    options[i] = options[i].replace(/\W/g, '_');
                }

                if (i === 'version' && typeof options[i] !== 'number') {
                    return new Error('Database version must be a number.');
                }

                this._config[i] = options[i];
            }

            // after all config options are set and
            // the driver option is used, try setting it
            if ('driver' in options && options.driver) {
                return this.setDriver(this._config.driver);
            }

            return true;
        } else if (typeof options === 'string') {
            return this._config[options];
        } else {
            return this._config;
        }
    };

    // Used to define a custom driver, shared across all instances of
    // localForage.


    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
        var promise = new Promise$1(function (resolve, reject) {
            try {
                var driverName = driverObject._driver;
                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

                // A driver name should be defined and not overlap with the
                // library-defined, default drivers.
                if (!driverObject._driver) {
                    reject(complianceError);
                    return;
                }

                var driverMethods = LibraryMethods.concat('_initStorage');
                for (var i = 0, len = driverMethods.length; i < len; i++) {
                    var driverMethodName = driverMethods[i];

                    // when the property is there,
                    // it should be a method even when optional
                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                        reject(complianceError);
                        return;
                    }
                }

                var configureMissingMethods = function configureMissingMethods() {
                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                        return function () {
                            var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                            var promise = Promise$1.reject(error);
                            executeCallback(promise, arguments[arguments.length - 1]);
                            return promise;
                        };
                    };

                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                        var optionalDriverMethod = OptionalDriverMethods[_i];
                        if (!driverObject[optionalDriverMethod]) {
                            driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                        }
                    }
                };

                configureMissingMethods();

                var setDriverSupport = function setDriverSupport(support) {
                    if (DefinedDrivers[driverName]) {
                        console.info('Redefining LocalForage driver: ' + driverName);
                    }
                    DefinedDrivers[driverName] = driverObject;
                    DriverSupport[driverName] = support;
                    // don't use a then, so that we can define
                    // drivers that have simple _support methods
                    // in a blocking manner
                    resolve();
                };

                if ('_support' in driverObject) {
                    if (driverObject._support && typeof driverObject._support === 'function') {
                        driverObject._support().then(setDriverSupport, reject);
                    } else {
                        setDriverSupport(!!driverObject._support);
                    }
                } else {
                    setDriverSupport(true);
                }
            } catch (e) {
                reject(e);
            }
        });

        executeTwoCallbacks(promise, callback, errorCallback);
        return promise;
    };

    LocalForage.prototype.driver = function driver() {
        return this._driver || null;
    };

    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
        return getDriverPromise;
    };

    LocalForage.prototype.getSerializer = function getSerializer(callback) {
        var serializerPromise = Promise$1.resolve(localforageSerializer);
        executeTwoCallbacks(serializerPromise, callback);
        return serializerPromise;
    };

    LocalForage.prototype.ready = function ready(callback) {
        var self = this;

        var promise = self._driverSet.then(function () {
            if (self._ready === null) {
                self._ready = self._initDriver();
            }

            return self._ready;
        });

        executeTwoCallbacks(promise, callback, callback);
        return promise;
    };

    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
        var self = this;

        if (!isArray(drivers)) {
            drivers = [drivers];
        }

        var supportedDrivers = this._getSupportedDrivers(drivers);

        function setDriverToConfig() {
            self._config.driver = self.driver();
        }

        function extendSelfWithDriver(driver) {
            self._extend(driver);
            setDriverToConfig();

            self._ready = self._initStorage(self._config);
            return self._ready;
        }

        function initDriver(supportedDrivers) {
            return function () {
                var currentDriverIndex = 0;

                function driverPromiseLoop() {
                    while (currentDriverIndex < supportedDrivers.length) {
                        var driverName = supportedDrivers[currentDriverIndex];
                        currentDriverIndex++;

                        self._dbInfo = null;
                        self._ready = null;

                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                    }

                    setDriverToConfig();
                    var error = new Error('No available storage method found.');
                    self._driverSet = Promise$1.reject(error);
                    return self._driverSet;
                }

                return driverPromiseLoop();
            };
        }

        // There might be a driver initialization in progress
        // so wait for it to finish in order to avoid a possible
        // race condition to set _dbInfo
        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
            return Promise$1.resolve();
        }) : Promise$1.resolve();

        this._driverSet = oldDriverSetDone.then(function () {
            var driverName = supportedDrivers[0];
            self._dbInfo = null;
            self._ready = null;

            return self.getDriver(driverName).then(function (driver) {
                self._driver = driver._driver;
                setDriverToConfig();
                self._wrapLibraryMethodsWithReady();
                self._initDriver = initDriver(supportedDrivers);
            });
        })["catch"](function () {
            setDriverToConfig();
            var error = new Error('No available storage method found.');
            self._driverSet = Promise$1.reject(error);
            return self._driverSet;
        });

        executeTwoCallbacks(this._driverSet, callback, errorCallback);
        return this._driverSet;
    };

    LocalForage.prototype.supports = function supports(driverName) {
        return !!DriverSupport[driverName];
    };

    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
        extend(this, libraryMethodsAndProperties);
    };

    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
        var supportedDrivers = [];
        for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
                supportedDrivers.push(driverName);
            }
        }
        return supportedDrivers;
    };

    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
        // Add a stub for each driver API method that delays the call to the
        // corresponding driver method until localForage is ready. These stubs
        // will be replaced by the driver methods as soon as the driver is
        // loaded, so there is no performance impact.
        for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
        }
    };

    LocalForage.prototype.createInstance = function createInstance(options) {
        return new LocalForage(options);
    };

    return LocalForage;
}();

// The actual localForage object that we expose as a module or via a
// global. It's extended by pulling in one of our other libraries.


var localforage_js = new LocalForage();

module.exports = localforage_js;

},{"3":3}]},{},[4])(4)
});


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getStorageMethods = void 0;
const utils_1 = __webpack_require__(4);
const RLean_1 = __webpack_require__(2);
const defaultAdapters_1 = __webpack_require__(16);
const getStorageMethods = (definition) => {
    const store = (0, utils_1.hasValue)(definition, "adapters.storage")
        ? definition.adapters.storage
        : (0, utils_1.getValue)(RLean_1.default, "config.storage.adapter", defaultAdapters_1.LocalForageAdapter);
    const setStorage = store.set;
    const getStorage = store.get;
    const removeStorage = store.remove;
    const clearStorage = store.clear;
    return { setStorage, getStorage, removeStorage, clearStorage };
};
exports.getStorageMethods = getStorageMethods;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U3RvcmFnZU1ldGhvZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvX2ludGVybmFsL2dldFN0b3JhZ2VNZXRob2RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFrRDtBQUNsRCxvQ0FBNkI7QUFDN0Isd0RBQXdEO0FBR2pELE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxVQUFvQyxFQUFFLEVBQUU7SUFDeEUsTUFBTSxLQUFLLEdBQUcsSUFBQSxnQkFBUSxFQUFDLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQztRQUNwRCxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPO1FBQzdCLENBQUMsQ0FBQyxJQUFBLGdCQUFRLEVBQUMsZUFBSyxFQUFFLHdCQUF3QixFQUFFLG9DQUFrQixDQUFDLENBQUM7SUFFbEUsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM3QixNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzdCLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDbkMsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUVqQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLENBQUM7QUFDakUsQ0FBQyxDQUFDO0FBWFcsUUFBQSxpQkFBaUIscUJBVzVCIn0=

/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.define = void 0;
const _internal_1 = __webpack_require__(6);
/**
 * define
 * Creates base entity definition using data type as generic
 */
const define = (key, options, callback) => {
    var _a;
    if (!key) {
        throw new Error('Key is required for definition.');
    }
    const { baseURLOverride, initialState, getURL, postURL, putURL, patchURL, deleteURL, persistData, preferStore, progressiveLoading, syncAfterTimeElapsed, adapters, type, reducer, updateState, nullableParams, includeInState, queueOffline, } = (0, _internal_1.getDefinitionOptions)(key, options);
    return Object.assign({ key,
        baseURLOverride,
        initialState,
        getURL,
        postURL,
        patchURL,
        putURL,
        deleteURL,
        persistData,
        preferStore,
        progressiveLoading,
        syncAfterTimeElapsed,
        adapters,
        type,
        reducer,
        updateState,
        callback,
        nullableParams,
        includeInState,
        queueOffline }, ((_a = options === null || options === void 0 ? void 0 : options.extensions) !== null && _a !== void 0 ? _a : {}));
};
exports.define = define;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlZmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyQ0FBbUQ7QUFFbkQ7OztHQUdHO0FBQ0ksTUFBTSxNQUFNLEdBQUcsQ0FDcEIsR0FBVyxFQUNYLE9BQXlDLEVBQ3pDLFFBQW1CLEVBQ0ssRUFBRTs7SUFDMUIsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztLQUNwRDtJQUVELE1BQU0sRUFDSixlQUFlLEVBQ2YsWUFBWSxFQUNaLE1BQU0sRUFDTixPQUFPLEVBQ1AsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsb0JBQW9CLEVBQ3BCLFFBQVEsRUFDUixJQUFJLEVBQ0osT0FBTyxFQUNQLFdBQVcsRUFDWCxjQUFjLEVBQ2QsY0FBYyxFQUNkLFlBQVksR0FDYixHQUFHLElBQUEsZ0NBQW9CLEVBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRXZDLHVCQUNFLEdBQUc7UUFDSCxlQUFlO1FBQ2YsWUFBWTtRQUNaLE1BQU07UUFDTixPQUFPO1FBQ1AsUUFBUTtRQUNSLE1BQU07UUFDTixTQUFTO1FBQ1QsV0FBVztRQUNYLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLFFBQVE7UUFDUixJQUFJO1FBQ0osT0FBTztRQUNQLFdBQVc7UUFDWCxRQUFRO1FBQ1IsY0FBYztRQUNkLGNBQWM7UUFDZCxZQUFZLElBQ1QsQ0FBQyxNQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxVQUFVLG1DQUFJLEVBQUUsQ0FBQyxFQUM5QjtBQUNKLENBQUMsQ0FBQztBQXJEVyxRQUFBLE1BQU0sVUFxRGpCIn0=

/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.keys = void 0;
const utils_1 = __webpack_require__(4);
const RLean_1 = __webpack_require__(2);
const convertToType_1 = __webpack_require__(7);
const getKeys = () => {
    const entityDefinitions = (0, utils_1.getValue)(RLean_1.default, "config.entities", {});
    const entityDefinitionsLength = entityDefinitions.length;
    const keys = {};
    for (let i = 0; i < entityDefinitionsLength; i += 1) {
        const key = (0, convertToType_1.convertToType)(entityDefinitions[i].key);
        Object.assign(keys, {
            [key]: entityDefinitions[i].key,
        });
    }
    return Object.freeze(keys);
};
exports.keys = getKeys();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9rZXlzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUF3QztBQUN4QyxtQ0FBNEI7QUFDNUIsNkRBQTBEO0FBRTFELE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRTtJQUNuQixNQUFNLGlCQUFpQixHQUFHLElBQUEsZ0JBQVEsRUFBQyxlQUFLLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakUsTUFBTSx1QkFBdUIsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7SUFDekQsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBRWhCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyx1QkFBdUIsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ25ELE1BQU0sR0FBRyxHQUFHLElBQUEsNkJBQWEsRUFBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNsQixDQUFDLEdBQUcsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7U0FDaEMsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDO0FBRVcsUUFBQSxJQUFJLEdBQUcsT0FBTyxFQUFFLENBQUMifQ==

/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(53);
const RLean_1 = __webpack_require__(2);
const _internal_1 = __webpack_require__(6);
const utils_1 = __webpack_require__(4);
const StateSingleton_1 = __webpack_require__(54);
const __1 = __webpack_require__(0);
/**
 * Save an object to state, and optionally to store if persistData
 * is true (default). Don't check if current state and new value are different
 * so if there is an infinite loop, the developer will know right away in the
 * console log.
 */
const save = async (options, state, dispatch = () => { }, callback = () => { }) => {
    if (typeof options === 'undefined' || typeof options.value === 'undefined') {
        return;
    }
    const { definition, value, type } = (0, _internal_1.getHookOptions)(options);
    //const stateValue: EntityState<
    //  T extends EntityDefineOptions<infer F> ? F : unknown
    //> = state && state[definition.key] ? deepCopy(state[definition.key]) : {};
    const stateValue = state && state[definition.key] ? (0, utils_1.deepCopy)(state[definition.key]) : {};
    if (definition.persistData) {
        __1.Store.set(definition, value);
    }
    RLean_1.default.definition = definition;
    dispatch(definition.updateState(Object.assign(Object.assign({}, stateValue), value), type));
    if (callback) {
        callback();
    }
};
/**
 * Save an object to state, and optionally to store if persistData
 * is true (default). Don't check if current state and new value are different
 * so if there is an infinite loop, the developer will know right away in the
 * console log.
 */
function useSave(options, callback = () => { }) {
    const [state, dispatch] = StateSingleton_1.StateSingleton.getInstance().zustand((s) => [
        s.state,
        s.dispatch,
    ]);
    if (typeof options === 'undefined') {
        return (options = undefined, callback = () => { }) => {
            save(options, state, dispatch, callback);
        };
    }
    (0, react_1.useEffect)(() => {
        save(options, dispatch, callback);
    }, [dispatch]);
}
exports["default"] = useSave;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlU2F2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VTYXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQWtDO0FBQ2xDLG9DQUE2QjtBQUM3Qiw0Q0FBOEM7QUFPOUMsd0NBQXdDO0FBQ3hDLHNEQUFtRDtBQUNuRCwwQkFBMkI7QUFFM0I7Ozs7O0dBS0c7QUFDSCxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ2hCLE9BQW1DLEVBQ25DLEtBQXFCLEVBQ3JCLFdBQXVDLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFDL0MsUUFBUSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFDbkIsRUFBRTtJQUNGLElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxJQUFJLE9BQU8sT0FBTyxDQUFDLEtBQUssS0FBSyxXQUFXLEVBQUU7UUFDMUUsT0FBTztLQUNSO0lBRUQsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBQSwwQkFBYyxFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTVELGdDQUFnQztJQUNoQyx3REFBd0Q7SUFDeEQsNEVBQTRFO0lBRTVFLE1BQU0sVUFBVSxHQUNkLEtBQUssSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFeEUsSUFBSSxVQUFVLENBQUMsV0FBVyxFQUFFO1FBQzFCLFNBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzlCO0lBRUQsZUFBSyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDOUIsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLGlDQUFNLFVBQVUsR0FBSyxLQUFLLEdBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVwRSxJQUFJLFFBQVEsRUFBRTtRQUNaLFFBQVEsRUFBRSxDQUFDO0tBQ1o7QUFDSCxDQUFDLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILFNBQXdCLE9BQU8sQ0FDN0IsT0FBd0IsRUFDeEIsUUFBUSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUM7SUFFbkIsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRywrQkFBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUM7UUFDekUsQ0FBQyxDQUFDLEtBQUs7UUFDUCxDQUFDLENBQUMsUUFBUTtLQUNYLENBQUMsQ0FBQztJQUVILElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxFQUFFO1FBQ2xDLE9BQU8sQ0FDTCxVQUEwQixTQUFTLEVBQ25DLFFBQVEsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQ25CLEVBQUU7WUFDRixJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDO0tBQ0g7SUFFRCxJQUFBLGlCQUFTLEVBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUNqQixDQUFDO0FBckJELDBCQXFCQyJ9

/***/ }),
/* 53 */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__53__;

/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RLeanState = exports.StateSingleton = void 0;
const initialState_1 = __webpack_require__(1);
const reducer_1 = __webpack_require__(55);
const zustand_1 = __webpack_require__(57);
const utils_1 = __webpack_require__(4);
const RLean_1 = __webpack_require__(2);
class StateSingleton {
    constructor() {
        const configEntities = (0, utils_1.getValue)(RLean_1.default, "config.entities", {});
        this.zustand = (0, zustand_1.create)((set) => ({
            state: (0, initialState_1.initialState)(configEntities),
            dispatch: (args) => {
                set((zustandState) => {
                    const nextState = (0, reducer_1.reducer)(zustandState, args);
                    // nextState contains also the rest of the entities' state, but
                    // undefined, so we delete them
                    Object.keys(nextState).forEach((key) => {
                        if (nextState[key] === undefined) {
                            delete nextState[key];
                        }
                    });
                    return {
                        state: Object.assign(Object.assign({}, zustandState.state), nextState),
                    };
                });
            },
        }));
        this.select = this.zustand;
    }
    static getInstance() {
        if (!StateSingleton.instance) {
            StateSingleton.instance = new StateSingleton();
        }
        return StateSingleton.instance;
    }
}
exports.StateSingleton = StateSingleton;
const RLeanState = () => ({
    select: StateSingleton.getInstance().select,
});
exports.RLeanState = RLeanState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGVTaW5nbGV0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvU3RhdGVTaW5nbGV0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQThDO0FBQzlDLHVDQUFvQztBQUNwQyxxQ0FBMEQ7QUFFMUQsd0NBQXdDO0FBQ3hDLG1DQUE0QjtBQUU1QixNQUFhLGNBQWM7SUFTekI7UUFDRSxNQUFNLGNBQWMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsZUFBSyxFQUFFLGlCQUFpQixFQUFFLEVBQUUsQ0FBUSxDQUFDO1FBRXJFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBQSxnQkFBTSxFQUdsQixDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNYLEtBQUssRUFBRSxJQUFBLDJCQUFZLEVBQUMsY0FBYyxDQUFDO1lBQ25DLFFBQVEsRUFBRSxDQUFDLElBQVMsRUFBRSxFQUFFO2dCQUN0QixHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRTtvQkFDbkIsTUFBTSxTQUFTLEdBQUcsSUFBQSxpQkFBTyxFQUFDLFlBQVksRUFBRSxJQUFJLENBQVEsQ0FBQztvQkFFckQsK0RBQStEO29CQUMvRCwrQkFBK0I7b0JBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7d0JBQ3JDLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTs0QkFDaEMsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ3ZCO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUVILE9BQU87d0JBQ0wsS0FBSyxrQ0FBTyxZQUFZLENBQUMsS0FBSyxHQUFLLFNBQVMsQ0FBRTtxQkFDL0MsQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRixDQUFDLENBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQWMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQVc7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsY0FBYyxDQUFDLFFBQVEsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1NBQ2hEO1FBRUQsT0FBTyxjQUFjLENBQUMsUUFLckIsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQW5ERCx3Q0FtREM7QUFFTSxNQUFNLFVBQVUsR0FBRyxHQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sRUFBRSxjQUFjLENBQUMsV0FBVyxFQUFLLENBQUMsTUFBTTtDQUMvQyxDQUFDLENBQUM7QUFGVSxRQUFBLFVBQVUsY0FFcEIifQ==

/***/ }),
/* 55 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.reducer = void 0;
const utils_1 = __webpack_require__(4);
const _1 = __webpack_require__(0);
const middleware_1 = __webpack_require__(56);
const reducer = (_a, action) => {
    var state = __rest(_a, []);
    const entityDefinitions = (0, utils_1.getValue)(_1.RLean, "config.entities", {});
    const middleware = (0, utils_1.getValue)(_1.RLean, "config.middleware", []);
    const definition = (0, utils_1.getValue)(_1.RLean, "definition", {});
    const objects = Object.values(entityDefinitions);
    const objectsLength = objects.length;
    let combinedReducer = {};
    for (let i = 0; i < objectsLength; i += 1) {
        if (objects[i].prototype) {
            const key = objects[i].prototype.key;
            const value = state[key];
            if (objects[i].prototype.includeInState) {
                Object.assign(combinedReducer, {
                    [key]: objects[i].prototype.reducer(value, action),
                });
            }
        }
        else {
            const key = objects[i].key;
            const value = state[key];
            if (objects[i].includeInState) {
                Object.assign(combinedReducer, {
                    [key]: objects[i].reducer(value, action),
                });
            }
        }
    }
    const nextState = (0, utils_1.deepCopy)(state);
    middleware.push(middleware_1.logActions);
    // middleware.push(saveToIndexedDB);
    (0, middleware_1.applyMiddleware)(definition, nextState, action, middleware);
    return combinedReducer;
};
exports.reducer = reducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQWtEO0FBQ2xELHdCQUEwQjtBQUMxQiw2Q0FBMkQ7QUFPcEQsTUFBTSxPQUFPLEdBQUcsQ0FDckIsRUFBNEIsRUFDNUIsTUFBa0IsRUFDbEIsRUFBRTtRQUZHLEtBQUssY0FBVixFQUFZLENBQUY7SUFHVixNQUFNLGlCQUFpQixHQUFHLElBQUEsZ0JBQVEsRUFBQyxRQUFLLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakUsTUFBTSxVQUFVLEdBQUcsSUFBQSxnQkFBUSxFQUFDLFFBQUssRUFBRSxtQkFBbUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1RCxNQUFNLFVBQVUsR0FBRyxJQUFBLGdCQUFRLEVBQUMsUUFBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyRCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUEwQixDQUFDO0lBQzFFLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDckMsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBRXpCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN6QyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDeEIsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFDckMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXpCLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUU7Z0JBQ3ZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFO29CQUM3QixDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7aUJBQ25ELENBQUMsQ0FBQzthQUNKO1NBQ0Y7YUFBTTtZQUNMLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDM0IsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXpCLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRTtnQkFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7b0JBQzdCLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO2lCQUN6QyxDQUFDLENBQUM7YUFDSjtTQUNGO0tBQ0Y7SUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFFbEMsVUFBVSxDQUFDLElBQUksQ0FBQyx1QkFBVSxDQUFDLENBQUM7SUFDNUIsb0NBQW9DO0lBQ3BDLElBQUEsNEJBQWUsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUUzRCxPQUFPLGVBQWUsQ0FBQztBQUN6QixDQUFDLENBQUM7QUF4Q1csUUFBQSxPQUFPLFdBd0NsQiJ9

/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.saveToIndexedDB = exports.logActions = exports.applyMiddleware = void 0;
const _1 = __webpack_require__(0);
const utils_1 = __webpack_require__(4);
async function logActions(definition, state, action) {
    const stateKey = Object.keys(action)[1].toString();
    const logToConsole = (0, utils_1.getValue)(_1.RLean, "config.logToConsole", false);
    if (logToConsole) {
        console.log(`state`, state);
        console.log(`dispatching ${action.type}`, { [stateKey]: action[stateKey] });
    }
    // TODO: stateKey is flawed. Doesn't work for nested state objects. Fix it.
    // const stateKey = Object.keys(action)[1].toString();
    // const stateValue = action[stateKey];
    // TODO: Update state object to display next state instead of current state. Previous attempt was flawed.
    // nextState[stateKey] = stateValue;
    // console.log(`next state`, state);
    return state;
}
exports.logActions = logActions;
async function saveToIndexedDB(definition, state, action) {
    if (definition.persistData) {
        await _1.Store.set(definition, Object.values(action)[1]);
    }
    return state;
}
exports.saveToIndexedDB = saveToIndexedDB;
async function applyMiddleware(definition, state, action, middleware) {
    return middleware.map(async (fn) => {
        const returnable = await fn(definition, state, action);
        return returnable;
    });
}
exports.applyMiddleware = applyMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdCQUFpQztBQUNqQyx3Q0FBd0M7QUFHeEMsS0FBSyxVQUFVLFVBQVUsQ0FDdkIsVUFBa0MsRUFDbEMsS0FBcUIsRUFDckIsTUFBa0I7SUFFbEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuRCxNQUFNLFlBQVksR0FBRyxJQUFBLGdCQUFRLEVBQUMsUUFBSyxFQUFFLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRW5FLElBQUksWUFBWSxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDN0U7SUFFRCwyRUFBMkU7SUFDM0Usc0RBQXNEO0lBQ3RELHVDQUF1QztJQUV2Qyx5R0FBeUc7SUFDekcsb0NBQW9DO0lBRXBDLG9DQUFvQztJQUVwQyxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUEyQnlCLGdDQUFVO0FBekJwQyxLQUFLLFVBQVUsZUFBZSxDQUM1QixVQUFrQyxFQUNsQyxLQUFxQixFQUNyQixNQUFrQjtJQUVsQixJQUFJLFVBQVUsQ0FBQyxXQUFXLEVBQUU7UUFDMUIsTUFBTSxRQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdkQ7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFlcUMsMENBQWU7QUFickQsS0FBSyxVQUFVLGVBQWUsQ0FDNUIsVUFBa0MsRUFDbEMsS0FBcUIsRUFDckIsTUFBa0IsRUFDbEIsVUFBc0I7SUFFdEIsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRTtRQUNqQyxNQUFNLFVBQVUsR0FBRyxNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXZELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVRLDBDQUFlIn0=

/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "createStore": () => (/* reexport safe */ zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__.createStore),
/* harmony export */   "default": () => (/* binding */ react),
/* harmony export */   "useStore": () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);





const { useSyncExternalStoreWithSelector } = use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_2__;
let didWarnAboutEqualityFn = false;
function useStore(api, selector = api.getState, equalityFn) {
  if (process.env.NODE_ENV !== "production" && equalityFn && !didWarnAboutEqualityFn) {
    console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    );
    didWarnAboutEqualityFn = true;
  }
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(slice);
  return slice;
}
const createImpl = (createState) => {
  if (process.env.NODE_ENV !== "production" && typeof createState !== "function") {
    console.warn(
      "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
    );
  }
  const api = typeof createState === "function" ? (0,zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__.createStore)(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
var react = (createState) => {
  if (process.env.NODE_ENV !== "production") {
    console.warn(
      "[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."
    );
  }
  return create(createState);
};




/***/ }),
/* 58 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStore": () => (/* binding */ createStore),
/* harmony export */   "default": () => (/* binding */ vanilla)
/* harmony export */ });
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if (( false ? 0 : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api = { setState, getState, subscribe, destroy };
  state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
var vanilla = (createState) => {
  if (( false ? 0 : void 0) !== "production") {
    console.warn(
      "[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."
    );
  }
  return createStore(createState);
};




/***/ }),
/* 59 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(60);
} else {
  module.exports = __webpack_require__(64);
}


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h=__webpack_require__(53),n=__webpack_require__(61);function p(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var q="function"===typeof Object.is?Object.is:p,r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;
exports.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;c=v(function(){function a(a){if(!c){c=!0;d=a;a=l(a);if(void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}b=k;if(q(d,a))return b;var e=l(a);if(void 0!==g&&g(b,e))return b;d=a;return k=e}var c=!1,d,k,m=void 0===e?null:e;return[function(){return a(b())},null===m?void 0:function(){return a(m())}]},[b,e,l,g]);var d=r(a,c[0],c[1]);
u(function(){f.hasValue=!0;f.value=d},[d]);w(d);return d};


/***/ }),
/* 61 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(62);
} else {
  module.exports = __webpack_require__(63);
}


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=__webpack_require__(53);function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c})},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c})})},[a]);p(d);return d}
function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = __webpack_require__(53);

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

// dispatch for CommonJS interop named imports.

var useState = React.useState,
    useEffect = React.useEffect,
    useLayoutEffect = React.useLayoutEffect,
    useDebugValue = React.useDebugValue;
var didWarnOld18Alpha = false;
var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
// because of a very particular set of implementation details and assumptions
// -- change any one of them and it will break. The most important assumption
// is that updates are always synchronous, because concurrent rendering is
// only available in versions of React that also have a built-in
// useSyncExternalStore API. And we only use this shim when the built-in API
// does not exist.
//
// Do not assume that the clever hacks used by this hook also work in general.
// The point of this shim is to replace the need for hacks by other libraries.

function useSyncExternalStore(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
// React do not expose a way to check if we're hydrating. So users of the shim
// will need to track that themselves and return the correct value
// from `getSnapshot`.
getServerSnapshot) {
  {
    if (!didWarnOld18Alpha) {
      if (React.startTransition !== undefined) {
        didWarnOld18Alpha = true;

        error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
      }
    }
  } // Read the current snapshot from the store on every render. Again, this
  // breaks the rules of React, and only works here because of specific
  // implementation details, most importantly that updates are
  // always synchronous.


  var value = getSnapshot();

  {
    if (!didWarnUncachedGetSnapshot) {
      var cachedValue = getSnapshot();

      if (!objectIs(value, cachedValue)) {
        error('The result of getSnapshot should be cached to avoid an infinite loop');

        didWarnUncachedGetSnapshot = true;
      }
    }
  } // Because updates are synchronous, we don't queue them. Instead we force a
  // re-render whenever the subscribed state changes by updating an some
  // arbitrary useState hook. Then, during render, we call getSnapshot to read
  // the current value.
  //
  // Because we don't actually use the state returned by the useState hook, we
  // can save a bit of memory by storing other stuff in that slot.
  //
  // To implement the early bailout, we need to track some things on a mutable
  // object. Usually, we would put that in a useRef hook, but we can stash it in
  // our useState hook instead.
  //
  // To force a re-render, we call forceUpdate({inst}). That works because the
  // new object always fails an equality check.


  var _useState = useState({
    inst: {
      value: value,
      getSnapshot: getSnapshot
    }
  }),
      inst = _useState[0].inst,
      forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
  // in the layout phase so we can access it during the tearing check that
  // happens on subscribe.


  useLayoutEffect(function () {
    inst.value = value;
    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
    // commit phase if there was an interleaved mutation. In concurrent mode
    // this can happen all the time, but even in synchronous mode, an earlier
    // effect may have mutated the store.

    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst: inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect(function () {
    // Check for changes right before subscribing. Subsequent changes will be
    // detected in the subscription handler.
    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst: inst
      });
    }

    var handleStoreChange = function () {
      // TODO: Because there is no cross-renderer API for batching updates, it's
      // up to the consumer of this library to wrap their subscription event
      // with unstable_batchedUpdates. Should we try to detect when this isn't
      // the case and print a warning in development?
      // The store changed. Check if the snapshot changed since the last time we
      // read from the store.
      if (checkIfSnapshotChanged(inst)) {
        // Force a re-render.
        forceUpdate({
          inst: inst
        });
      }
    }; // Subscribe to the store and return a clean-up function.


    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}

function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  var prevValue = inst.value;

  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}

function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
  // React do not expose a way to check if we're hydrating. So users of the shim
  // will need to track that themselves and return the correct value
  // from `getSnapshot`.
  return getSnapshot();
}

var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');

var isServerEnvironment = !canUseDOM;

var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
var useSyncExternalStore$2 = React.useSyncExternalStore !== undefined ? React.useSyncExternalStore : shim;

exports.useSyncExternalStore = useSyncExternalStore$2;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = __webpack_require__(53);
var shim = __webpack_require__(61);

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var useSyncExternalStore = shim.useSyncExternalStore;

// for CommonJS interop.

var useRef = React.useRef,
    useEffect = React.useEffect,
    useMemo = React.useMemo,
    useDebugValue = React.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.

function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
  // Use this to track the rendered snapshot.
  var instRef = useRef(null);
  var inst;

  if (instRef.current === null) {
    inst = {
      hasValue: false,
      value: null
    };
    instRef.current = inst;
  } else {
    inst = instRef.current;
  }

  var _useMemo = useMemo(function () {
    // Track the memoized state using closure variables that are local to this
    // memoized instance of a getSnapshot function. Intentionally not using a
    // useRef hook, because that state would be shared across all concurrent
    // copies of the hook/component.
    var hasMemo = false;
    var memoizedSnapshot;
    var memoizedSelection;

    var memoizedSelector = function (nextSnapshot) {
      if (!hasMemo) {
        // The first time the hook is called, there is no memoized result.
        hasMemo = true;
        memoizedSnapshot = nextSnapshot;

        var _nextSelection = selector(nextSnapshot);

        if (isEqual !== undefined) {
          // Even if the selector has changed, the currently rendered selection
          // may be equal to the new selection. We should attempt to reuse the
          // current value if possible, to preserve downstream memoizations.
          if (inst.hasValue) {
            var currentSelection = inst.value;

            if (isEqual(currentSelection, _nextSelection)) {
              memoizedSelection = currentSelection;
              return currentSelection;
            }
          }
        }

        memoizedSelection = _nextSelection;
        return _nextSelection;
      } // We may be able to reuse the previous invocation's result.


      // We may be able to reuse the previous invocation's result.
      var prevSnapshot = memoizedSnapshot;
      var prevSelection = memoizedSelection;

      if (objectIs(prevSnapshot, nextSnapshot)) {
        // The snapshot is the same as last time. Reuse the previous selection.
        return prevSelection;
      } // The snapshot has changed, so we need to compute a new selection.


      // The snapshot has changed, so we need to compute a new selection.
      var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.

      // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.
      if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
        return prevSelection;
      }

      memoizedSnapshot = nextSnapshot;
      memoizedSelection = nextSelection;
      return nextSelection;
    }; // Assigning this to a constant so that Flow knows it can't change.


    // Assigning this to a constant so that Flow knows it can't change.
    var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;

    var getSnapshotWithSelector = function () {
      return memoizedSelector(getSnapshot());
    };

    var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function () {
      return memoizedSelector(maybeGetServerSnapshot());
    };
    return [getSnapshotWithSelector, getServerSnapshotWithSelector];
  }, [getSnapshot, getServerSnapshot, selector, isEqual]),
      getSelection = _useMemo[0],
      getServerSelection = _useMemo[1];

  var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
  useEffect(function () {
    inst.hasValue = true;
    inst.value = value;
  }, [value]);
  useDebugValue(value);
  return value;
}

exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(53);
const StateSingleton_1 = __webpack_require__(54);
async function useRequest(options, method, callback) {
    const dispatch = StateSingleton_1.StateSingleton.getInstance().zustand((s) => s.dispatch);
    if (typeof options === 'undefined') {
        return (options, callback = null) => {
            method(options, dispatch, callback);
        };
    }
    (0, react_1.useEffect)(() => {
        try {
            method(options, dispatch, callback);
        }
        catch (e) {
            console.log(e);
        }
    }, []);
}
exports["default"] = useRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQWtDO0FBQ2xDLHNEQUFtRDtBQUVwQyxLQUFLLFVBQVUsVUFBVSxDQUN0QyxPQUFZLEVBQ1osTUFBZ0IsRUFDaEIsUUFBa0I7SUFFbEIsTUFBTSxRQUFRLEdBQUcsK0JBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUV6RSxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtRQUNsQyxPQUFPLENBQUMsT0FBWSxFQUFFLFdBQTRCLElBQUksRUFBRSxFQUFFO1lBQ3hELE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQztLQUNIO0lBRUQsSUFBQSxpQkFBUyxFQUFDLEdBQUcsRUFBRTtRQUNiLElBQUk7WUFDRixNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNyQztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQjtJQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNULENBQUM7QUFwQkQsNkJBb0JDIn0=

/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(53);
const request_1 = __webpack_require__(14);
const utils_1 = __webpack_require__(4);
const _internal_1 = __webpack_require__(6);
const __1 = __webpack_require__(0);
const types_1 = __webpack_require__(13);
const StateSingleton_1 = __webpack_require__(54);
/**
 * useGet - hook
 *
 * Exposed hook to access GET method.
 *
 * If the entity definition is passed, this gets data of an entity when mounted
 * and returns its EntityState. Otherwise, this returns the get() function to
 * manually get the entity data.
 *
 * @todo Type the response callback. See usePost and usePut for reference.
 */
function useGet(options, callback) {
    const [state, dispatch] = StateSingleton_1.StateSingleton.getInstance().zustand((s) => [
        s.state,
        s.dispatch,
    ]);
    const [init, setInit] = (0, react_1.useState)(false);
    const [data, setData] = (0, react_1.useState)();
    const [error, setError] = (0, react_1.useState)();
    const [isLoading, setIsLoading] = (0, react_1.useState)();
    const [isRefetching, setIsRefetching] = (0, react_1.useState)(false);
    const [lastUpdated, setLastUpdated] = (0, react_1.useState)();
    const stateRef = (0, react_1.useRef)(state);
    const abortCtrl = typeof new AbortController() === 'undefined'
        ? {
            signal: null,
            abort: () => console.warn('Browser does not support fetch canceling.'),
        }
        : new AbortController();
    let dependencies = [];
    // these should be useRef variables instead
    let isMounted = true;
    let canceled = false;
    (0, react_1.useEffect)(() => {
        stateRef.current = state;
    }, [state]);
    const get = async (options, innerStateRef, dispatch, callback = (res, err) => { }, isRefetch = false) => {
        const { definition, params, type } = (0, _internal_1.getHookOptions)(options);
        //const currentState: GlobalState<A> = state;
        const currentState = innerStateRef.current;
        // definition does not include a get call
        if (!(0, utils_1.hasValue)(definition, 'getURL')) {
            return null;
        }
        // check for null params
        if (!definition.nullableParams) {
            for (let key in params) {
                if (typeof params[key] === 'undefined' || params[key] === null) {
                    return null;
                }
            }
        }
        const stateValue = currentState && currentState[definition.key]
            ? (0, utils_1.deepCopy)(currentState[definition.key])
            : {};
        stateValue.refetch = () => refetch(options);
        try {
            /*
              if (
                stateValue[definition.key] &&
                stateValue[definition.key].isRefetching
              ) {
                return stateValue;
              }
              */
            if (isMounted) {
                setIsLoading(true);
                setInit(true);
                if (isRefetch) {
                    setIsRefetching(true);
                }
            }
            stateValue.isLoading = true;
            stateValue.init = true;
            if (isRefetch) {
                stateValue.isRefetching = true;
            }
            // set initial loading state
            if (definition.persistData) {
                __1.Store.set(definition, stateValue);
            }
            if (definition.includeInState) {
                dispatch(definition.updateState(stateValue, `${definition.type}_IS_LOADING`));
            }
            if (definition.preferStore) {
                return null;
            }
            const payload = {
                path: definition.getURL,
                query: params,
                signal: abortCtrl.signal,
            };
            const res = await (0, request_1.request)(payload, definition, types_1.API_METHOD.GET);
            if (res) {
                // Transform data if transformation function is set for entity definition.
                stateValue.data =
                    definition.transformation &&
                        typeof definition.transformation === 'function'
                        ? definition.transformation(res.data)
                        : res.data;
                stateValue.isLoading = false;
                stateValue.lastUpdated = new Date();
                stateValue.isRefetching = false;
            }
            else {
                stateValue.isLoading = false;
            }
            if (isMounted) {
                setData(stateValue.data);
                setIsLoading(stateValue.isLoading);
                setLastUpdated(stateValue.lastUpdated);
                setIsRefetching(stateValue.isRefetching);
            }
            // persist updated value with new loading status
            if (definition.persistData) {
                __1.Store.set(definition, stateValue);
            }
            if (definition.includeInState) {
                dispatch(definition.updateState(stateValue, type));
            }
            if (callback) {
                callback(res);
            }
        }
        catch (err) {
            console.error(err);
            stateValue.error = err;
            stateValue.isLoading = false;
            if (isMounted) {
                setError(stateValue.error);
                setIsLoading(stateValue.isLoading);
            }
            if (definition.includeInState) {
                dispatch(definition.updateState(stateValue, `${definition.type}_ERROR`));
            }
            if (callback) {
                callback(null, err);
            }
        }
        return {
            data,
            error,
            isLoading,
            isRefetching,
            lastUpdated,
            canceled,
            init,
            refetch: async () => {
                await get(options, stateRef, dispatch, callback, true);
            },
        };
    };
    const refetch = async (inner_options) => {
        await get(options !== null && options !== void 0 ? options : inner_options, stateRef, dispatch, callback, true);
    };
    if (typeof options === 'undefined' || options === null) {
        return (options, callback) => {
            get(options, stateRef, dispatch, callback);
        };
    }
    if (options && options.params) {
        dependencies = Object.values(options.params);
    }
    (0, react_1.useEffect)(() => {
        get(options, stateRef, dispatch, callback);
        return () => {
            isMounted = false;
            canceled = true;
            abortCtrl.abort();
        };
    }, dependencies);
}
exports["default"] = useGet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlR2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hvb2tzL3VzZUdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFpRTtBQUNqRSxrREFBK0M7QUFDL0Msd0NBQWtEO0FBQ2xELDRDQUE4QztBQUM5QywwQkFBMkI7QUFDM0Isb0NBS2tCO0FBQ2xCLHNEQUFtRDtBQUVuRDs7Ozs7Ozs7OztHQVVHO0FBQ0gsU0FBd0IsTUFBTSxDQUM1QixPQUF5QixFQUN6QixRQUErQztJQUUvQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLCtCQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQztRQUN6RSxDQUFDLENBQUMsS0FBSztRQUNQLENBQUMsQ0FBQyxRQUFRO0tBQ1gsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFBLGdCQUFRLEdBQUUsQ0FBQztJQUNuQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsR0FBRSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUcsSUFBQSxnQkFBUSxHQUFXLENBQUM7SUFDdEQsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEQsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBRyxJQUFBLGdCQUFRLEdBQUUsQ0FBQztJQUNqRCxNQUFNLFFBQVEsR0FBRyxJQUFBLGNBQU0sRUFBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixNQUFNLFNBQVMsR0FDYixPQUFPLElBQUksZUFBZSxF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

/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(53);
const _internal_1 = __webpack_require__(6);
const __1 = __webpack_require__(0);
const getHookOptions_1 = __webpack_require__(8);
const types_1 = __webpack_require__(13);
const StateSingleton_1 = __webpack_require__(54);
/**
 * Hook that exposes patch() safely and funly
 *
 * usePatch({ definition: Definition, body: { value: 'value' } });
 *
 * const patch = usePatch();
 * patch({ definition: Definition, body: { value: 'value' } });
 */
function usePatch(options, _callback = () => { }) {
    const dispatch = StateSingleton_1.StateSingleton.getInstance().zustand(s => s.dispatch);
    /**
     * Function that executes a PATCH against the API.
     *
     * @param {Object} options
     * @param {Function} dispatch
     * @param {Function} [callback=null]
     */
    const patch = async (options, dispatch, callback) => {
        const { definition, params, body, save } = (0, getHookOptions_1.getHookOptions)(options);
        const patchURL = definition.patchURL;
        if (patchURL !== null) {
            try {
                const payload = {
                    path: patchURL,
                    query: params,
                    body: body ? Object.assign({}, body) : {},
                };
                const response = await (0, _internal_1.request)(payload, definition, types_1.API_METHOD.PATCH);
                // Don't do a deep compare on the return value against the current value.
                // The return value will most likely be different regardless. Assume that
                // if dispatch was provided, we're supposed to use it.
                if (response && save) {
                    if (definition.persistData) {
                        await __1.Store.set(definition, response.data);
                    }
                    await dispatch(await definition.updateState(response.data));
                }
                if (response && callback) {
                    callback(response);
                }
            }
            catch (error) {
                console.error(error);
                if (callback) {
                    callback(null, error);
                }
            }
        }
        else {
            const o = (0, _internal_1.inspectClass)(definition);
            console.error(`The ${o.ClassName} object is missing the patchURL attribute.`);
        }
        return;
    };
    if (typeof options === 'undefined') {
        return (options, callback) => {
            patch(options, dispatch, callback);
        };
    }
    (0, react_1.useEffect)(() => {
        patch(options, dispatch, _callback);
    }, []);
}
exports["default"] = usePatch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlUGF0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaG9va3MvdXNlUGF0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBa0M7QUFDbEMsNENBQXFEO0FBQ3JELDBCQUF3QztBQUN4QyxnRUFBNkQ7QUFDN0Qsb0NBQXlFO0FBQ3pFLHNEQUFtRDtBQUVuRDs7Ozs7OztHQU9HO0FBQ0gsU0FBd0IsUUFBUSxDQUM5QixPQUE4QixFQUM5QixZQUErRCxHQUFHLEVBQUUsR0FBRSxDQUFDO0lBRXZFLE1BQU0sUUFBUSxHQUFHLCtCQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXZFOzs7Ozs7T0FNRztJQUNILE1BQU0sS0FBSyxHQUFHLEtBQUssRUFDakIsT0FBWSxFQUNaLFFBQWEsRUFDYixRQUF5QixFQUN6QixFQUFFO1FBQ0YsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUEsK0JBQWMsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUNuRSxNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBRXJDLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtZQUNyQixJQUFJO2dCQUNGLE1BQU0sT0FBTyxHQUFHO29CQUNkLElBQUksRUFBRSxRQUFRO29CQUNkLEtBQUssRUFBRSxNQUFNO29CQUNiLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2lCQUMxQyxDQUFDO2dCQUVGLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBQSxtQkFBTyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsa0JBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFdEUseUVBQXlFO2dCQUN6RSx5RUFBeUU7Z0JBQ3pFLHNEQUFzRDtnQkFDdEQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO29CQUNwQixJQUFJLFVBQVUsQ0FBQyxXQUFXLEVBQUU7d0JBQzFCLE1BQU0sU0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUM1QztvQkFFRCxNQUFNLFFBQVEsQ0FBQyxNQUFNLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQzdEO2dCQUVELElBQUksUUFBUSxJQUFJLFFBQVEsRUFBRTtvQkFDeEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNwQjthQUNGO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFckIsSUFBSSxRQUFRLEVBQUU7b0JBQ1osUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDdkI7YUFDRjtTQUNGO2FBQU07WUFDTCxNQUFNLENBQUMsR0FBRyxJQUFBLHdCQUFZLEVBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkMsT0FBTyxDQUFDLEtBQUssQ0FDWCxPQUFPLENBQUMsQ0FBQyxTQUFTLDRDQUE0QyxDQUMvRCxDQUFDO1NBQ0g7UUFFRCxPQUFPO0lBQ1QsQ0FBQyxDQUFDO0lBRUYsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUU7UUFDbEMsT0FBTyxDQUNMLE9BQXlDLEVBQ3pDLFFBQTJELEVBQzNELEVBQUU7WUFDRixLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUM7S0FDSDtJQUVELElBQUEsaUJBQVMsRUFBQyxHQUFHLEVBQUU7UUFDYixLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDVCxDQUFDO0FBMUVELDJCQTBFQyJ9

/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(53);
const _internal_1 = __webpack_require__(6);
const getHookOptions_1 = __webpack_require__(8);
const __1 = __webpack_require__(0);
const types_1 = __webpack_require__(13);
const StateSingleton_1 = __webpack_require__(54);
/**
 * Exposed Hook that allows user to access post method
 * If no definition given, returns function to use post to allow conditional operation.
 *
 * The hooks infers the types by using its parameters, but to give more flexibility
 * both the hook and the exposed function can be manually typed. The order of the
 * type is as follows: post<ResponseType, RequestType, DefinitionType>. The DefinitionType
 * is somewhat redundant but current versions of typescript doesn't allow defaults
 * on generic types yet.
 *
 * @constructor
 * @param {Object} options An object containing an instance of the definition whose state needs to be populated, an optional params object if an API call needs to be made, and an optional type if the definition has multiple types.
 * @param {Function} [callback=null] Optional callback function to be executed after usePost has executed its logic.
 * @example
 *
 * usePost({ definition: Definition, body: { value: 'value' } });
 *
 * const post = usePost();
 * post({ definition: Definition, body: { value: 'value' } });
 */
function usePost(options, callback = () => { }) {
    const dispatch = StateSingleton_1.StateSingleton.getInstance().zustand(s => s.dispatch);
    const mountedRef = (0, react_1.useRef)(true);
    const post = (0, react_1.useCallback)(async (options, dispatch, callback) => {
        const { definition, params, body, save } = (0, getHookOptions_1.getHookOptions)(options);
        const postURL = definition.postURL;
        const persistData = definition.persistData;
        if (postURL !== null) {
            try {
                const payload = {
                    path: postURL,
                    query: params,
                    body: body
                        ? Array.isArray(body)
                            ? Object.assign([], body)
                            : Object.assign({}, body)
                        : {},
                };
                const response = await (0, _internal_1.request)(payload, definition, types_1.API_METHOD.POST);
                if (!mountedRef.current) {
                    return null;
                }
                if (response && save) {
                    if (persistData) {
                        __1.Store.set(definition, response.data);
                    }
                    dispatch(definition.updateState(response.data));
                }
                if (callback && response) {
                    callback(response);
                }
            }
            catch (error) {
                console.error(error);
                if (callback) {
                    callback(null, error);
                }
            }
        }
        else {
            const o = (0, _internal_1.inspectClass)(definition);
            console.error(`The ${o.ClassName} object is missing the postURL attribute.`);
        }
    }, [mountedRef]);
    if (typeof options === 'undefined') {
        return (options, callback) => {
            post(options, dispatch, callback);
        };
    }
    // params.push(post);
    (0, react_1.useEffect)(() => {
        post(options, dispatch, callback);
        return () => {
            mountedRef.current = false; // clean up
        };
        // }, [params]);
    }, []);
}
exports["default"] = usePost;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlUG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VQb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQXVEO0FBQ3ZELDRDQUFxRDtBQUNyRCxnRUFBNkQ7QUFDN0QsMEJBQTJCO0FBQzNCLG9DQUtrQjtBQUNsQixzREFBbUQ7QUFFbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSCxTQUF3QixPQUFPLENBQzdCLE9BQStCLEVBQy9CLFdBQThELEdBQUcsRUFBRSxHQUFFLENBQUM7SUFFdEUsTUFBTSxRQUFRLEdBQUcsK0JBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkUsTUFBTSxVQUFVLEdBQUcsSUFBQSxjQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFFaEMsTUFBTSxJQUFJLEdBQUcsSUFBQSxtQkFBVyxFQUN0QixLQUFLLEVBQ0gsT0FBd0MsRUFDeEMsUUFBb0MsRUFDcEMsUUFBMkQsRUFDM0QsRUFBRTtRQUNGLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFBLCtCQUFjLEVBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkUsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUNuQyxNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBRTNDLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUNwQixJQUFJO2dCQUNGLE1BQU0sT0FBTyxHQUFHO29CQUNkLElBQUksRUFBRSxPQUFPO29CQUNiLEtBQUssRUFBRSxNQUFNO29CQUNiLElBQUksRUFBRSxJQUFJO3dCQUNSLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs0QkFDbkIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQzs0QkFDekIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQzt3QkFDM0IsQ0FBQyxDQUFDLEVBQUU7aUJBQ1AsQ0FBQztnQkFFRixNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUEsbUJBQU8sRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLGtCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRXJFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO29CQUN2QixPQUFPLElBQUksQ0FBQztpQkFDYjtnQkFFRCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7b0JBQ3BCLElBQUksV0FBVyxFQUFFO3dCQUNmLFNBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDdEM7b0JBRUQsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ2pEO2dCQUVELElBQUksUUFBUSxJQUFJLFFBQVEsRUFBRTtvQkFDeEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNwQjthQUNGO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFckIsSUFBSSxRQUFRLEVBQUU7b0JBQ1osUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDdkI7YUFDRjtTQUNGO2FBQU07WUFDTCxNQUFNLENBQUMsR0FBRyxJQUFBLHdCQUFZLEVBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkMsT0FBTyxDQUFDLEtBQUssQ0FDWCxPQUFPLENBQUMsQ0FBQyxTQUFTLDJDQUEyQyxDQUM5RCxDQUFDO1NBQ0g7SUFDSCxDQUFDLEVBQ0QsQ0FBQyxVQUFVLENBQUMsQ0FDYixDQUFDO0lBRUYsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUU7UUFDbEMsT0FBTyxDQUNMLE9BQTRCLEVBQzVCLFFBQTJELEVBQzNELEVBQUU7WUFDRixJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUM7S0FDSDtJQUVELHFCQUFxQjtJQUVyQixJQUFBLGlCQUFTLEVBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFbEMsT0FBTyxHQUFHLEVBQUU7WUFDVixVQUFVLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLFdBQVc7UUFDekMsQ0FBQyxDQUFDO1FBQ0YsZ0JBQWdCO0lBQ2xCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNULENBQUM7QUFsRkQsMEJBa0ZDIn0=

/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(53);
const _internal_1 = __webpack_require__(6);
const getHookOptions_1 = __webpack_require__(8);
const __1 = __webpack_require__(0);
const types_1 = __webpack_require__(13);
const StateSingleton_1 = __webpack_require__(54);
/**
 * usePut
 *
 * Hook that exposes put()
 *
 * The hooks infers the types by using its parameters, but to give more flexibility
 * both the hook and the exposed function can be manually typed. The order of the
 * type is as follows: put<ResponseType, RequestType, DefinitionType>. The DefinitionType
 * is somewhat redundant but current versions of typescript doesn't allow defaults
 * on generic types yet.
 *
 * @constructor
 * @param {Object} options An object containing an instance of the definition whose state needs to be populated, an optional params object if an API call needs to be made, and an optional type if the definition has multiple types.
 * @param {Function} [callback=null] Optional callback function to be executed after usePut has executed its logic.
 * @example
 *
 * usePut({ definition: Definition, body: { value: 'value' } });
 *
 * const put = usePut();
 * put({ definition: Definition, body: { value: 'value' } })
 */
function usePut(options, callback = () => { }) {
    const dispatch = StateSingleton_1.StateSingleton.getInstance().zustand((s) => s.dispatch);
    /**
     * Function that executes a PUT against the API.
     *
     */
    const put = async (options, dispatch, callback) => {
        const { definition, params, body, save } = (0, getHookOptions_1.getHookOptions)(options);
        const putURL = definition.putURL;
        if (putURL !== null) {
            try {
                const payload = {
                    path: putURL,
                    query: params,
                    body: body ? Object.assign({}, body) : {},
                };
                const response = await (0, _internal_1.request)(payload, definition, types_1.API_METHOD.PUT);
                // Don't do a deep compare on the return value against the current value.
                // The return value will most likely be different regardless. Assume that
                // if dispatch was provided, we're supposed to use it.
                if (response && save) {
                    if (definition.persistData) {
                        await __1.Store.set(definition, response.data);
                    }
                    await dispatch(await definition.updateState(response.data));
                }
                if (response && callback) {
                    callback(response);
                }
            }
            catch (error) {
                console.error(error);
                if (callback) {
                    callback(null, error);
                }
            }
        }
        else {
            const o = (0, _internal_1.inspectClass)(definition);
            console.error(`The ${o.ClassName} object is missing the putURL attribute.`);
        }
    };
    if (typeof options === 'undefined') {
        return (options = undefined, callback) => {
            put(options, dispatch, callback);
        };
    }
    (0, react_1.useEffect)(() => {
        put(options, dispatch, callback);
    }, []);
}
exports["default"] = usePut;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlUHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hvb2tzL3VzZVB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFrQztBQUNsQyw0Q0FBcUQ7QUFDckQsZ0VBQTZEO0FBQzdELDBCQUEyQjtBQUMzQixvQ0FLa0I7QUFDbEIsc0RBQW1EO0FBRW5EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUNILFNBQXdCLE1BQU0sQ0FDNUIsT0FBNEIsRUFDNUIsV0FBOEQsR0FBRyxFQUFFLEdBQUUsQ0FBQztJQUV0RSxNQUFNLFFBQVEsR0FBRywrQkFBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXpFOzs7T0FHRztJQUNILE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDZixPQUF1QyxFQUN2QyxRQUFvQyxFQUNwQyxRQUEyRCxFQUMzRCxFQUFFO1FBQ0YsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUEsK0JBQWMsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUVuRSxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBRWpDLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUNuQixJQUFJO2dCQUNGLE1BQU0sT0FBTyxHQUFHO29CQUNkLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxNQUFNO29CQUNiLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2lCQUMxQyxDQUFDO2dCQUVGLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBQSxtQkFBTyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsa0JBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFcEUseUVBQXlFO2dCQUN6RSx5RUFBeUU7Z0JBQ3pFLHNEQUFzRDtnQkFDdEQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO29CQUNwQixJQUFJLFVBQVUsQ0FBQyxXQUFXLEVBQUU7d0JBQzFCLE1BQU0sU0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUM1QztvQkFFRCxNQUFNLFFBQVEsQ0FBQyxNQUFNLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQzdEO2dCQUVELElBQUksUUFBUSxJQUFJLFFBQVEsRUFBRTtvQkFDeEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNwQjthQUNGO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFckIsSUFBSSxRQUFRLEVBQUU7b0JBQ1osUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDdkI7YUFDRjtTQUNGO2FBQU07WUFDTCxNQUFNLENBQUMsR0FBRyxJQUFBLHdCQUFZLEVBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkMsT0FBTyxDQUFDLEtBQUssQ0FDWCxPQUFPLENBQUMsQ0FBQyxTQUFTLDBDQUEwQyxDQUM3RCxDQUFDO1NBQ0g7SUFDSCxDQUFDLENBQUM7SUFFRixJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtRQUNsQyxPQUFPLENBQ0wsVUFBOEIsU0FBUyxFQUN2QyxRQUEyRCxFQUMzRCxFQUFFO1lBQ0YsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDO0tBQ0g7SUFFRCxJQUFBLGlCQUFTLEVBQUMsR0FBRyxFQUFFO1FBQ2IsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1QsQ0FBQztBQXRFRCx5QkFzRUMifQ==

/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(53);
const _internal_1 = __webpack_require__(6);
const getHookOptions_1 = __webpack_require__(8);
const __1 = __webpack_require__(0);
const types_1 = __webpack_require__(13);
const StateSingleton_1 = __webpack_require__(54);
/**
 * Hook that exposes del()
 *
 * @example
 *
 * useDelete({ definition: Definition, body: { value: 'value' } });
 *
 * const del = useDelete();
 * del({ definition: Definition, body: { value: 'value' } });
 */
function useDelete(options, callback = () => { }) {
    const dispatch = StateSingleton_1.StateSingleton.getInstance().zustand((s) => s.dispatch);
    // NOT CONVERTED
    /**
     * Function that executes a DELETE against the API.
     *
     * @constructor
     * @param {Object} options
     * @param {Function} dispatch
     * @param {Function} callback
     */
    const del = async (options, dispatch, callback = null) => {
        const { definition, body, save } = (0, getHookOptions_1.getHookOptions)(options);
        const deleteURL = definition.deleteURL;
        const persistData = definition.persistData;
        if (deleteURL !== null) {
            try {
                const payload = {
                    path: deleteURL,
                    body: body ? Object.assign({}, body) : {},
                };
                const response = await (0, _internal_1.request)(payload, definition, types_1.API_METHOD.DELETE);
                if (response && save) {
                    if (persistData) {
                        await __1.Store.set(definition, response.data);
                    }
                    await dispatch(await definition.updateState(response.data));
                }
                if (response && callback) {
                    callback(response);
                }
                return;
            }
            catch (error) {
                console.error(error);
                if (callback) {
                    callback(null, error);
                }
            }
        }
        const o = (0, _internal_1.inspectClass)(definition);
        console.error(`The ${o.ClassName} object is missing the deleteURL attribute.`);
    };
    if (typeof options === 'undefined') {
        return (options, callback) => {
            del(options, dispatch, callback);
        };
    }
    (0, react_1.useEffect)(() => {
        del(options, dispatch, callback);
    }, []);
}
exports["default"] = useDelete;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlRGVsZXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hvb2tzL3VzZURlbGV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFrQztBQUNsQyw0Q0FBcUQ7QUFFckQsZ0VBQTZEO0FBQzdELDBCQUEyQjtBQUMzQixvQ0FBMEU7QUFDMUUsc0RBQW1EO0FBRW5EOzs7Ozs7Ozs7R0FTRztBQUNILFNBQXdCLFNBQVMsQ0FDL0IsT0FBd0MsRUFDeEMsV0FBOEQsR0FBRyxFQUFFLEdBQUUsQ0FBQztJQUV0RSxNQUFNLFFBQVEsR0FBRywrQkFBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTlFLGdCQUFnQjtJQUNoQjs7Ozs7OztPQU9HO0lBQ0gsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUNmLE9BQVksRUFDWixRQUFhLEVBQ2IsV0FBNEIsSUFBSSxFQUNoQyxFQUFFO1FBQ0YsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBQSwrQkFBYyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNELE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDdkMsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUUzQyxJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDdEIsSUFBSTtnQkFDRixNQUFNLE9BQU8sR0FBRztvQkFDZCxJQUFJLEVBQUUsU0FBUztvQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDMUMsQ0FBQztnQkFFRixNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUEsbUJBQU8sRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLGtCQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRXZFLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtvQkFDcEIsSUFBSSxXQUFXLEVBQUU7d0JBQ2YsTUFBTSxTQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzVDO29CQUVELE1BQU0sUUFBUSxDQUFDLE1BQU0sVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDN0Q7Z0JBRUQsSUFBSSxRQUFRLElBQUksUUFBUSxFQUFFO29CQUN4QixRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3BCO2dCQUVELE9BQU87YUFDUjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRXJCLElBQUksUUFBUSxFQUFFO29CQUNaLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ3ZCO2FBQ0Y7U0FDRjtRQUVELE1BQU0sQ0FBQyxHQUFHLElBQUEsd0JBQVksRUFBQyxVQUFVLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsS0FBSyxDQUNYLE9BQU8sQ0FBQyxDQUFDLFNBQVMsNkNBQTZDLENBQ2hFLENBQUM7SUFDSixDQUFDLENBQUM7SUFFRixJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtRQUNsQyxPQUFPLENBQ0wsT0FBMEMsRUFDMUMsUUFBMkQsRUFDM0QsRUFBRTtZQUNGLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQztLQUNIO0lBRUQsSUFBQSxpQkFBUyxFQUFDLEdBQUcsRUFBRTtRQUNiLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNULENBQUM7QUF6RUQsNEJBeUVDIn0=

/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(53);
const __1 = __webpack_require__(0);
const RLean_1 = __webpack_require__(2);
const StateSingleton_1 = __webpack_require__(54);
const getHookOptions_1 = __webpack_require__(8);
/**
 * Main remove function from state
 * It does not execute a DELETE request
 */
const remove = async (options, dispatch, callback) => {
    if (typeof options === 'undefined') {
        return;
    }
    const { definition, type } = (0, getHookOptions_1.getHookOptions)(options);
    const persistData = definition.persistData;
    if (persistData) {
        __1.Store.remove(definition);
    }
    // Reset the state of the definition.
    RLean_1.default.definition = definition;
    if (dispatch) {
        dispatch(definition.updateState(null, type));
    }
    if (callback) {
        callback();
    }
};
/**
 * Clear an object from the store if persistData is true (default).
 *
 * @constructor
 * @param {Object} options An object containing an instance of the definition whose state needs to be populated, an optional params object if an API call needs to be made, and an optional type if the definition has multiple types.
 * @param {Function} [callback=null] Optional callback function to be executed after useSave has executed its logic.
 */
function useRemove(options, callback = () => { }) {
    const dispatch = StateSingleton_1.StateSingleton.getInstance().zustand(s => s.dispatch);
    if (typeof options === 'undefined') {
        return (options, callback = () => { }) => {
            remove(options, dispatch, callback);
        };
    }
    (0, react_1.useEffect)(() => {
        remove(options, dispatch, callback);
    }, [dispatch]);
}
exports["default"] = useRemove;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlUmVtb3ZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hvb2tzL3VzZVJlbW92ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFrQztBQUNsQywwQkFBMkI7QUFDM0Isb0NBQTZCO0FBQzdCLHNEQUFtRDtBQUNuRCxnRUFBNkQ7QUFHN0Q7OztHQUdHO0FBQ0gsTUFBTSxNQUFNLEdBQUcsS0FBSyxFQUNsQixPQUE0QixFQUM1QixRQUFvQyxFQUNwQyxRQUFrQixFQUNsQixFQUFFO0lBQ0YsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUU7UUFDbEMsT0FBTztLQUNSO0lBRUQsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFBLCtCQUFjLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFDckQsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQztJQUUzQyxJQUFJLFdBQVcsRUFBRTtRQUNmLFNBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDMUI7SUFFRCxxQ0FBcUM7SUFDckMsZUFBSyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFFOUIsSUFBSSxRQUFRLEVBQUU7UUFDWixRQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUM5QztJQUVELElBQUksUUFBUSxFQUFFO1FBQ1osUUFBUSxFQUFFLENBQUM7S0FDWjtBQUNILENBQUMsQ0FBQztBQUVGOzs7Ozs7R0FNRztBQUNILFNBQXdCLFNBQVMsQ0FDL0IsT0FBNkIsRUFDN0IsV0FBcUIsR0FBRyxFQUFFLEdBQUUsQ0FBQztJQUU3QixNQUFNLFFBQVEsR0FBRywrQkFBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUV2RSxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtRQUNsQyxPQUFPLENBQ0wsT0FBNEIsRUFDNUIsV0FBcUIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUM3QixFQUFFO1lBQ0YsTUFBTSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDO0tBQ0g7SUFFRCxJQUFBLGlCQUFTLEVBQUMsR0FBRyxFQUFFO1FBQ2IsTUFBTSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUNqQixDQUFDO0FBbEJELDRCQWtCQyJ9

/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(53);
const utils_1 = __webpack_require__(4);
const __1 = __webpack_require__(0);
const _internal_1 = __webpack_require__(6);
const RLean_1 = __webpack_require__(2);
const StateSingleton_1 = __webpack_require__(54);
function useSyncState() {
    const mountedRef = (0, react_1.useRef)(true);
    const [state, dispatch] = StateSingleton_1.StateSingleton.getInstance().zustand((s) => [
        s.state,
        s.dispatch,
    ]);
    const syncState = (0, react_1.useCallback)(() => {
        const entityDefinitions = (0, utils_1.getValue)(RLean_1.default, 'config.entities', {});
        const objects = Object.values(entityDefinitions);
        objects.map(async (definition) => {
            if (!mountedRef.current) {
                return null;
            }
            if (definition.persistData && definition.includeInState) {
                const key = definition.key;
                const stateValue = state[key];
                const storedValue = await __1.Store.get(definition);
                if (storedValue &&
                    !utils_1.Compare.deepCompare(storedValue, stateValue).isEqual) {
                    const type = `SET_${(0, _internal_1.convertToType)(definition.key)}`;
                    // @todo dispatch doesn't receive any parameters (?)
                    dispatch(definition.updateState(storedValue, type));
                }
            }
        });
    }, [mountedRef]);
    (0, react_1.useEffect)(() => {
        syncState();
        return () => {
            mountedRef.current = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}
exports["default"] = useSyncState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlU3luY1N0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hvb2tzL3VzZVN5bmNTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUF1RDtBQUN2RCx3Q0FBaUQ7QUFDakQsMEJBQTJCO0FBQzNCLDRDQUE2QztBQUU3QyxvQ0FBNkI7QUFDN0Isc0RBQW1EO0FBRW5ELFNBQXdCLFlBQVk7SUFDbEMsTUFBTSxVQUFVLEdBQUcsSUFBQSxjQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRywrQkFBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUM7UUFDekUsQ0FBQyxDQUFDLEtBQUs7UUFDUCxDQUFDLENBQUMsUUFBUTtLQUNYLENBQUMsQ0FBQztJQUVILE1BQU0sU0FBUyxHQUFHLElBQUEsbUJBQVcsRUFBQyxHQUFHLEVBQUU7UUFDakMsTUFBTSxpQkFBaUIsR0FBb0IsSUFBQSxnQkFBUSxFQUNqRCxlQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLEVBQUUsQ0FDSCxDQUFDO1FBQ0YsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRWpELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO2dCQUN2QixPQUFPLElBQUksQ0FBQzthQUNiO1lBRUQsSUFBSSxVQUFVLENBQUMsV0FBVyxJQUFJLFVBQVUsQ0FBQyxjQUFjLEVBQUU7Z0JBQ3ZELE1BQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUM7Z0JBQzNCLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxXQUFXLEdBQUcsTUFBTSxTQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUVoRCxJQUNFLFdBQVc7b0JBQ1gsQ0FBQyxlQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLEVBQ3JEO29CQUNBLE1BQU0sSUFBSSxHQUFHLE9BQU8sSUFBQSx5QkFBYSxFQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO29CQUVwRCxvREFBb0Q7b0JBQ25ELFFBQWdCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDOUQ7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUVqQixJQUFBLGlCQUFTLEVBQUMsR0FBRyxFQUFFO1FBQ2IsU0FBUyxFQUFFLENBQUM7UUFFWixPQUFPLEdBQUcsRUFBRTtZQUNWLFVBQVUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUMsQ0FBQztRQUVGLHVEQUF1RDtJQUN6RCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDVCxDQUFDO0FBL0NELCtCQStDQyJ9

/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const getStorageMethods_1 = __webpack_require__(49);
class Store {
    /*
     * Makes the 'set' call to local storage to store data
     */
    async set(definition, value) {
        const { setStorage, getStorage } = (0, getStorageMethods_1.getStorageMethods)(definition);
        const key = definition.key;
        try {
            await setStorage(key, value);
            const updatedValue = await getStorage(key);
            if (updatedValue === undefined) {
                throw new Error(`Could not set ${key} = ${value}`);
            }
            return { key, value };
        }
        catch (err) {
            console.log(err);
        }
    }
    /*
     * Makes the 'get' call to local storage to get some data
     */
    async get(definition) {
        const { getStorage } = (0, getStorageMethods_1.getStorageMethods)(definition);
        const key = definition.key;
        try {
            const value = await getStorage(key);
            return value;
        }
        catch (err) {
            console.log(err);
        }
    }
    async setAll(units) {
        const { setStorage } = (0, getStorageMethods_1.getStorageMethods)(null);
        if (units === undefined || units.length === 0) {
            throw new Error("Array cannot be null or empty");
        }
        units.forEach(async (unit) => {
            try {
                await setStorage(unit.key, unit.value);
            }
            catch (e) {
                console.log(e);
            }
        });
        return true;
    }
    /*
     * Makes the 'clear' call to local storage to get clear local storage
     * Uses the storage engine found by decideWhichEngine, either adapter or default.
     */
    async clear() {
        const { clearStorage } = (0, getStorageMethods_1.getStorageMethods)(null);
        try {
            await clearStorage();
        }
        catch (err) {
            console.error(err);
        }
    }
    /*
     * Makes the 'remove' call to local storage to get remove a value from local storage
     * Uses the storage engine found by decideWhichEngine, either adapter or default.
     */
    async remove(definition) {
        const { removeStorage } = (0, getStorageMethods_1.getStorageMethods)(definition);
        const key = definition.key;
        try {
            await removeStorage(key);
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports["default"] = new Store();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvU3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxRUFBa0U7QUFFbEUsTUFBTSxLQUFLO0lBQ1Q7O09BRUc7SUFDSCxLQUFLLENBQUMsR0FBRyxDQUFJLFVBQWtDLEVBQUUsS0FBaUI7UUFDaEUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFBLHFDQUFpQixFQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWpFLE1BQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFFM0IsSUFBSTtZQUNGLE1BQU0sVUFBVSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUU3QixNQUFNLFlBQVksR0FBRyxNQUFNLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUUzQyxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUU7Z0JBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ3BEO1lBRUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUN2QjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxHQUFHLENBQUksVUFBa0M7UUFDN0MsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUEscUNBQWlCLEVBQUMsVUFBVSxDQUFDLENBQUM7UUFFckQsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUUzQixJQUFJO1lBQ0YsTUFBTSxLQUFLLEdBQUcsTUFBTSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQXVDO1FBQ2xELE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFBLHFDQUFpQixFQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9DLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM3QyxNQUFNLElBQUksS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7U0FDbEQ7UUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUMzQixJQUFJO2dCQUNGLE1BQU0sVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hDO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoQjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLEtBQUs7UUFDVCxNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsSUFBQSxxQ0FBaUIsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUVqRCxJQUFJO1lBQ0YsTUFBTSxZQUFZLEVBQUUsQ0FBQztTQUN0QjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsTUFBTSxDQUFJLFVBQWtDO1FBQ2hELE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxJQUFBLHFDQUFpQixFQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXhELE1BQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFFM0IsSUFBSTtZQUNGLE1BQU0sYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztDQUNGO0FBRUQsa0JBQWUsSUFBSSxLQUFLLEVBQUUsQ0FBQyJ9

/***/ }),
/* 74 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RLeanBaseHooks = void 0;
const useSyncState_1 = __webpack_require__(72);
function RLeanBaseHooks() {
    (0, useSyncState_1.default)();
    return null;
}
exports.RLeanBaseHooks = RLeanBaseHooks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUhvb2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0Jhc2VIb29rcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdURBQWdEO0FBRWhELFNBQWdCLGNBQWM7SUFDNUIsSUFBQSxzQkFBWSxHQUFFLENBQUM7SUFFZixPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFKRCx3Q0FJQyJ9

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLDRDQUE0QyxTQUFTO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFNBQVM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFNBQVM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsU0FBUztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxtQkFBbUIscUJBQU0sbUJBQW1CLHFCQUFNLG1GQUFtRjtBQUN0SSxDQUFDLEdBQUc7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsQ0FBQyxFQUFFLE1BQU07QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsbUJBQW1CLHFCQUFNLG1CQUFtQixxQkFBTSxtRkFBbUY7QUFDdEksQ0FBQyxFQUFFLE1BQU07QUFDVDs7QUFFQSxxR0FBcUcscUJBQXFCLG1CQUFtQjs7QUFFN0ksa0RBQWtELDBDQUEwQzs7QUFFNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQkFBc0I7QUFDdEIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHdCQUF3QjtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw4QkFBOEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0Msb0JBQW9CO0FBQ3BEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQSxvQ0FBb0Msb0JBQW9CO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixtR0FBbUc7QUFDbkc7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLG9CQUFvQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBLG9DQUFvQyxvQkFBb0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsbUdBQW1HO0FBQ25HO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZ0JBQWdCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxrREFBa0QsUUFBUTtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1QztBQUN2QyxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRUFBbUU7QUFDbkU7O0FBRUEsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEU7O0FBRTlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDREQUE0RCxTQUFTO0FBQ3JFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBFQUEwRSxXQUFXO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BybGVhbi9jb3JlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL3NyYy9pbml0aWFsU3RhdGUudHMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9zcmMvUkxlYW4udHMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9zcmMvcmVtb3ZlQWxsLnRzIiwid2VicGFjazovL0BybGVhbi9jb3JlLy4vbm9kZV9tb2R1bGVzL0BybGVhbi91dGlscy9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL3NyYy9BZGFwdGVycy50cyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL3NyYy9faW50ZXJuYWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9zcmMvX2ludGVybmFsL2NvbnZlcnRUb1R5cGUudHMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9zcmMvX2ludGVybmFsL2dldEhvb2tPcHRpb25zLnRzIiwid2VicGFjazovL0BybGVhbi9jb3JlLy4vc3JjL19pbnRlcm5hbC9nZXREZWZpbml0aW9uT3B0aW9ucy50cyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL3NyYy9faW50ZXJuYWwvaW5zcGVjdENsYXNzLnRzIiwid2VicGFjazovL0BybGVhbi9jb3JlLy4vc3JjL19pbnRlcm5hbC9pbXBsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9zcmMvX2ludGVybmFsL21ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9zcmMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9zcmMvX2ludGVybmFsL3JlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9zcmMvX2ludGVybmFsL2dldEFwaU1ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9zcmMvZGVmYXVsdEFkYXB0ZXJzL2luZGV4LnRzIiwid2VicGFjazovL0BybGVhbi9jb3JlLy4vc3JjL2RlZmF1bHRBZGFwdGVycy9BeGlvc0FkYXB0ZXIudHMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovL0BybGVhbi9jb3JlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovL0BybGVhbi9jb3JlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovL0BybGVhbi9jb3JlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovL0BybGVhbi9jb3JlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovL0BybGVhbi9jb3JlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovL0BybGVhbi9jb3JlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovL0BybGVhbi9jb3JlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovL0BybGVhbi9jb3JlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovL0BybGVhbi9jb3JlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0F4aW9zRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9zcmMvZGVmYXVsdEFkYXB0ZXJzL0xvY2FsRm9yYWdlQWRhcHRlci50cyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL25vZGVfbW9kdWxlcy9sb2NhbGZvcmFnZS9kaXN0L2xvY2FsZm9yYWdlLmpzIiwid2VicGFjazovL0BybGVhbi9jb3JlLy4vc3JjL19pbnRlcm5hbC9nZXRTdG9yYWdlTWV0aG9kcy50cyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL3NyYy9kZWZpbmUudHMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9zcmMva2V5cy50cyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL3NyYy9ob29rcy91c2VTYXZlLnRzIiwid2VicGFjazovL0BybGVhbi9jb3JlL2V4dGVybmFsIHVtZCB7XCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcInJvb3RcIjpcIlJlYWN0XCJ9Iiwid2VicGFjazovL0BybGVhbi9jb3JlLy4vc3JjL1N0YXRlU2luZ2xldG9uLnRzIiwid2VicGFjazovL0BybGVhbi9jb3JlLy4vc3JjL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9zcmMvbWlkZGxld2FyZS50cyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL25vZGVfbW9kdWxlcy96dXN0YW5kL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL25vZGVfbW9kdWxlcy96dXN0YW5kL2VzbS92YW5pbGxhLm1qcyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltL3dpdGgtc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0vd2l0aC1zZWxlY3Rvci5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltL2luZGV4LmpzIiwid2VicGFjazovL0BybGVhbi9jb3JlLy4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL0BybGVhbi9jb3JlLy4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL0BybGVhbi9jb3JlLy4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltL3dpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9zcmMvaG9va3MvdXNlUmVxdWVzdC50cyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL3NyYy9ob29rcy91c2VHZXQudHMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9zcmMvaG9va3MvdXNlUGF0Y2gudHMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9zcmMvaG9va3MvdXNlUG9zdC50cyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL3NyYy9ob29rcy91c2VQdXQudHMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9zcmMvaG9va3MvdXNlRGVsZXRlLnRzIiwid2VicGFjazovL0BybGVhbi9jb3JlLy4vc3JjL2hvb2tzL3VzZVJlbW92ZS50cyIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS8uL3NyYy9ob29rcy91c2VTeW5jU3RhdGUudHMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9zcmMvU3RvcmUudHMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvLi9zcmMvQmFzZUhvb2tzLnRzeCIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BybGVhbi9jb3JlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9AcmxlYW4vY29yZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQHJsZWFuL2NvcmUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSkgOiBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNTNfXykgPT4ge1xucmV0dXJuICIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5STGVhbkJhc2VIb29rcyA9IGV4cG9ydHMuUkxlYW5TdGF0ZSA9IGV4cG9ydHMuU3RhdGVTaW5nbGV0b24gPSBleHBvcnRzLnVzZVN5bmNTdGF0ZSA9IGV4cG9ydHMudXNlU2F2ZSA9IGV4cG9ydHMudXNlR2V0ID0gZXhwb3J0cy5TdG9yZSA9IGV4cG9ydHMucmVtb3ZlQWxsID0gZXhwb3J0cy51c2VSZW1vdmUgPSBleHBvcnRzLnJlZHVjZXIgPSBleHBvcnRzLlJMZWFuID0gZXhwb3J0cy51c2VEZWxldGUgPSBleHBvcnRzLnVzZVB1dCA9IGV4cG9ydHMudXNlUG9zdCA9IGV4cG9ydHMudXNlUGF0Y2ggPSBleHBvcnRzLnVzZVJlcXVlc3QgPSBleHBvcnRzLkFkYXB0ZXJzID0gZXhwb3J0cy5rZXlzID0gZXhwb3J0cy5kZWZpbmUgPSBleHBvcnRzLmluaXRpYWxTdGF0ZSA9IHZvaWQgMDtcbmNvbnN0IGluaXRpYWxTdGF0ZV8xID0gcmVxdWlyZShcIi4vaW5pdGlhbFN0YXRlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaW5pdGlhbFN0YXRlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpbml0aWFsU3RhdGVfMS5pbml0aWFsU3RhdGU7IH0gfSk7XG5jb25zdCBBZGFwdGVyc18xID0gcmVxdWlyZShcIi4vQWRhcHRlcnNcIik7XG5leHBvcnRzLkFkYXB0ZXJzID0gQWRhcHRlcnNfMS5kZWZhdWx0O1xuY29uc3QgZGVmaW5lXzEgPSByZXF1aXJlKFwiLi9kZWZpbmVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZpbmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlZmluZV8xLmRlZmluZTsgfSB9KTtcbmNvbnN0IGtleXNfMSA9IHJlcXVpcmUoXCIuL2tleXNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJrZXlzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBrZXlzXzEua2V5czsgfSB9KTtcbmNvbnN0IHVzZVNhdmVfMSA9IHJlcXVpcmUoXCIuL2hvb2tzL3VzZVNhdmVcIik7XG5leHBvcnRzLnVzZVNhdmUgPSB1c2VTYXZlXzEuZGVmYXVsdDtcbmNvbnN0IHVzZVJlcXVlc3RfMSA9IHJlcXVpcmUoXCIuL2hvb2tzL3VzZVJlcXVlc3RcIik7XG5leHBvcnRzLnVzZVJlcXVlc3QgPSB1c2VSZXF1ZXN0XzEuZGVmYXVsdDtcbmNvbnN0IHVzZUdldF8xID0gcmVxdWlyZShcIi4vaG9va3MvdXNlR2V0XCIpO1xuZXhwb3J0cy51c2VHZXQgPSB1c2VHZXRfMS5kZWZhdWx0O1xuY29uc3QgdXNlUGF0Y2hfMSA9IHJlcXVpcmUoXCIuL2hvb2tzL3VzZVBhdGNoXCIpO1xuZXhwb3J0cy51c2VQYXRjaCA9IHVzZVBhdGNoXzEuZGVmYXVsdDtcbmNvbnN0IHVzZVBvc3RfMSA9IHJlcXVpcmUoXCIuL2hvb2tzL3VzZVBvc3RcIik7XG5leHBvcnRzLnVzZVBvc3QgPSB1c2VQb3N0XzEuZGVmYXVsdDtcbmNvbnN0IHVzZVB1dF8xID0gcmVxdWlyZShcIi4vaG9va3MvdXNlUHV0XCIpO1xuZXhwb3J0cy51c2VQdXQgPSB1c2VQdXRfMS5kZWZhdWx0O1xuY29uc3QgdXNlRGVsZXRlXzEgPSByZXF1aXJlKFwiLi9ob29rcy91c2VEZWxldGVcIik7XG5leHBvcnRzLnVzZURlbGV0ZSA9IHVzZURlbGV0ZV8xLmRlZmF1bHQ7XG5jb25zdCB1c2VSZW1vdmVfMSA9IHJlcXVpcmUoXCIuL2hvb2tzL3VzZVJlbW92ZVwiKTtcbmV4cG9ydHMudXNlUmVtb3ZlID0gdXNlUmVtb3ZlXzEuZGVmYXVsdDtcbmNvbnN0IHVzZVN5bmNTdGF0ZV8xID0gcmVxdWlyZShcIi4vaG9va3MvdXNlU3luY1N0YXRlXCIpO1xuZXhwb3J0cy51c2VTeW5jU3RhdGUgPSB1c2VTeW5jU3RhdGVfMS5kZWZhdWx0O1xuY29uc3QgUkxlYW5fMSA9IHJlcXVpcmUoXCIuL1JMZWFuXCIpO1xuZXhwb3J0cy5STGVhbiA9IFJMZWFuXzEuZGVmYXVsdDtcbmNvbnN0IHJlZHVjZXJfMSA9IHJlcXVpcmUoXCIuL3JlZHVjZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJyZWR1Y2VyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWR1Y2VyXzEucmVkdWNlcjsgfSB9KTtcbmNvbnN0IHJlbW92ZUFsbF8xID0gcmVxdWlyZShcIi4vcmVtb3ZlQWxsXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVtb3ZlQWxsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZW1vdmVBbGxfMS5yZW1vdmVBbGw7IH0gfSk7XG5jb25zdCBTdG9yZV8xID0gcmVxdWlyZShcIi4vU3RvcmVcIik7XG5leHBvcnRzLlN0b3JlID0gU3RvcmVfMS5kZWZhdWx0O1xuY29uc3QgU3RhdGVTaW5nbGV0b25fMSA9IHJlcXVpcmUoXCIuL1N0YXRlU2luZ2xldG9uXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU3RhdGVTaW5nbGV0b25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFN0YXRlU2luZ2xldG9uXzEuU3RhdGVTaW5nbGV0b247IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSTGVhblN0YXRlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBTdGF0ZVNpbmdsZXRvbl8xLlJMZWFuU3RhdGU7IH0gfSk7XG5jb25zdCBCYXNlSG9va3NfMSA9IHJlcXVpcmUoXCIuL0Jhc2VIb29rc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJMZWFuQmFzZUhvb2tzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBCYXNlSG9va3NfMS5STGVhbkJhc2VIb29rczsgfSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzYVVSQlFUaERPMEZCZFVJMVF5dzJSa0YyUWs4c01rSkJRVmtzVDBGMVFsQTdRVUYwUW1Rc2VVTkJRV3RETzBGQmVVSm9ReXh0UWtGNlFrc3NhMEpCUVZFc1EwRjVRa3c3UVVGNFFsWXNjVU5CUVd0RE8wRkJjMEpvUXl4MVJrRjBRazhzWlVGQlRTeFBRWE5DVUR0QlFYSkNVaXhwUTBGQk9FSTdRVUZ6UWpWQ0xIRkdRWFJDVHl4WFFVRkpMRTlCYzBKUU8wRkJja0pPTERaRFFVRnpRenRCUVd0RGNFTXNhMEpCYkVOTExHbENRVUZQTEVOQmEwTk1PMEZCYWtOVUxHMUVRVUUwUXp0QlFYTkNNVU1zY1VKQmRFSkxMRzlDUVVGVkxFTkJjMEpNTzBGQmNrSmFMREpEUVVGdlF6dEJRU3RDYkVNc2FVSkJMMEpMTEdkQ1FVRk5MRU5CSzBKTU8wRkJPVUpTTEN0RFFVRjNRenRCUVhGQ2RFTXNiVUpCY2tKTExHdENRVUZSTEVOQmNVSk1PMEZCY0VKV0xEWkRRVUZ6UXp0QlFYRkNjRU1zYTBKQmNrSkxMR2xDUVVGUExFTkJjVUpNTzBGQmNFSlVMREpEUVVGdlF6dEJRWEZDYkVNc2FVSkJja0pMTEdkQ1FVRk5MRU5CY1VKTU8wRkJjRUpTTEdsRVFVRXdRenRCUVhGQ2VFTXNiMEpCY2tKTExHMUNRVUZUTEVOQmNVSk1PMEZCY0VKWUxHbEVRVUV3UXp0QlFYVkNlRU1zYjBKQmRrSkxMRzFDUVVGVExFTkJkVUpNTzBGQmRFSllMSFZFUVVGblJEdEJRVEpDT1VNc2RVSkJNMEpMTEhOQ1FVRlpMRU5CTWtKTU8wRkJNVUprTEcxRFFVRTBRanRCUVcxQ01VSXNaMEpCYmtKTExHVkJRVXNzUTBGdFFrdzdRVUZzUWxBc2RVTkJRVzlETzBGQmJVSnNReXgzUmtGdVFrOHNhVUpCUVU4c1QwRnRRbEE3UVVGc1FsUXNNa05CUVhkRE8wRkJiMEowUXl3d1JrRndRazhzY1VKQlFWTXNUMEZ2UWxBN1FVRnVRbGdzYlVOQlFUUkNPMEZCYjBJeFFpeG5Ra0Z3UWtzc1pVRkJTeXhEUVc5Q1REdEJRVzVDVUN4eFJFRkJPRVE3UVVGMVFqVkVMQ3RHUVhaQ1R5d3JRa0ZCWXl4UFFYVkNVRHRCUVVOa0xESkdRWGhDZFVJc01rSkJRVlVzVDBGM1FuWkNPMEZCZGtKYUxESkRRVUUyUXp0QlFYZENNME1zSzBaQmVFSlBMREJDUVVGakxFOUJkMEpRSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pbml0aWFsU3RhdGUgPSB2b2lkIDA7XG5jb25zdCBSTGVhbl8xID0gcmVxdWlyZShcIi4vUkxlYW5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIkBybGVhbi91dGlsc1wiKTtcbi8qKlxuICogaW5pdGlhbFN0YXRlXG4gKiBDcmVhdGVzIGluaXRpYWwgR2xvYmFsU3RhdGUgb2JqZWN0XG4gKi9cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IChlbnRpdGllcykgPT4ge1xuICAgIGNvbnN0IGVudGl0eURlZmluaXRpb25zID0gZW50aXRpZXMgIT09IG51bGwgJiYgZW50aXRpZXMgIT09IHZvaWQgMCA/IGVudGl0aWVzIDogKDAsIHV0aWxzXzEuZ2V0VmFsdWUpKFJMZWFuXzEuZGVmYXVsdCwgXCJjb25maWcuZW50aXRpZXNcIiwge30pO1xuICAgIGNvbnN0IG9iamVjdHMgPSBPYmplY3QudmFsdWVzKGVudGl0eURlZmluaXRpb25zKTtcbiAgICBjb25zdCBvYmplY3RzTGVuZ3RoID0gb2JqZWN0cy5sZW5ndGg7XG4gICAgbGV0IGNvbWJpbmVkSW5pdGlhbFN0YXRlID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3RzTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKG9iamVjdHNbaV0uaW5jbHVkZUluU3RhdGUpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY29tYmluZWRJbml0aWFsU3RhdGUsIG9iamVjdHNbaV0uaW5pdGlhbFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29tYmluZWRJbml0aWFsU3RhdGU7XG59O1xuZXhwb3J0cy5pbml0aWFsU3RhdGUgPSBpbml0aWFsU3RhdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVwZEdsaGJGTjBZWFJsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwybHVhWFJwWVd4VGRHRjBaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3h0UTBGQk5FSTdRVUZETlVJc2QwTkJRWGRETzBGQlIzaERPenM3UjBGSFJ6dEJRVU5KTEUxQlFVMHNXVUZCV1N4SFFVRkhMRU5CUVVNc1VVRkJhVUlzUlVGQmIwSXNSVUZCUlR0SlFVTnNSU3hOUVVGTkxHbENRVUZwUWl4SFFVTnlRaXhSUVVGUkxHRkJRVklzVVVGQlVTeGpRVUZTTEZGQlFWRXNSMEZEVUN4SlFVRkJMR2RDUVVGUkxFVkJRVU1zWlVGQlN5eEZRVUZGTEdsQ1FVRnBRaXhGUVVGRkxFVkJRVVVzUTBGQlowTXNRMEZCUXp0SlFVTjZSU3hOUVVGTkxFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVOQlFVTTdTVUZEYWtRc1RVRkJUU3hoUVVGaExFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXp0SlFVTnlReXhKUVVGSkxHOUNRVUZ2UWl4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVVNVFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzWVVGQllTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1VVRkRla01zU1VGQlNTeFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1kwRkJZeXhGUVVGRk8xbEJRemRDTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc2IwSkJRVzlDTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzFOQlF6bEVPMHRCUTBZN1NVRkZSQ3hQUVVGUExHOUNRVUZ2UWl4RFFVRkRPMEZCUXpsQ0xFTkJRVU1zUTBGQlF6dEJRV1pYTEZGQlFVRXNXVUZCV1N4blFrRmxka0lpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVtb3ZlQWxsXzEgPSByZXF1aXJlKFwiLi9yZW1vdmVBbGxcIik7XG4vLyBpbXBvcnQgeyBnZXRWYWx1ZSB9IGZyb20gXCJAcmxlYW4vdXRpbHNcIjtcbi8vIGltcG9ydCB7IFJMZWFuX09mZmxpbmVRdWV1ZSB9IGZyb20gXCIuL19pbnRlcm5hbC9lbnRpdGllc1wiO1xuLyoqXG4gKiBSTGVhbiBDbGFzc1xuICogQ29udGFpbnMgdGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0LiBUeXBlIGlzIGluZmVycmVkIHVzaW5nIHRoZSBjb25maWcgb2JqZWN0LlxuICovXG5jbGFzcyBSTGVhbiB7XG4gICAgYXN5bmMgaW5pdChjb25maWcpIHtcbiAgICAgICAgLy8gY29uc3QgZW50aXRpZXMgPSBnZXRWYWx1ZShjb25maWcsIFwiZW50aXRpZXNcIiwge30pO1xuICAgICAgICAvLyBIZXJlLCB0aGUgb2ZmbGluZXF1ZXVlIGlzIGFkZGVkIGFzIGVudGl0eSBidXQgd2l0aG91dCBhIGtleVxuICAgICAgICAvLyBpdCBjb3VsZCBiZSBhZGRlZCBleHBhbmRpbmcgdGhlIFQgd2l0aCBhbiBzcGVjaWZpYyBSbGVhbk9mZmxpbmVRdWV1ZVxuICAgICAgICAvKlxuICAgICAgICBjb25zdCBlbnRpdGllcyA9IGNvbmZpZy5lbnRpdGllcyA/PyB7fTtcbiAgICAgICAgY29uZmlnLmVudGl0aWVzID0geyAuLi5lbnRpdGllcywgUkxlYW5fT2ZmbGluZVF1ZXVlIH07XG4gICAgICAgICovXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIH1cbiAgICBzZXRUb2tlbih0b2tlbikge1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmFwaS50b2tlbiA9IHRva2VuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICAoMCwgcmVtb3ZlQWxsXzEucmVtb3ZlQWxsKSgpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBSTGVhbigpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVWt4bFlXNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12VWt4bFlXNHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRFFTd3lRMEZCZDBNN1FVRkZlRU1zTWtOQlFUSkRPMEZCUXpORExEWkVRVUUyUkR0QlFVVTNSRHM3TzBkQlIwYzdRVUZEU0N4TlFVRk5MRXRCUVVzN1NVRkpWQ3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFYTkNPMUZCUXk5Q0xIRkVRVUZ4UkR0UlFVVnlSQ3c0UkVGQk9FUTdVVUZET1VRc2RVVkJRWFZGTzFGQlEzWkZPenM3VlVGSFJUdFJRVVZHTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8wbEJRM1pDTEVOQlFVTTdTVUZGUkN4UlFVRlJMRU5CUVVNc1MwRkJZVHRSUVVOd1FpeEpRVUZKTEV0QlFVc3NSVUZCUlR0WlFVTlVMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNN1UwRkRMMEk3U1VGRFNDeERRVUZETzBsQlJVUXNTMEZCU3p0UlFVTklMRWxCUVVFc2NVSkJRVk1zUjBGQlJTeERRVUZETzBsQlEyUXNRMEZCUXp0RFFVTkdPMEZCUlVRc2EwSkJRV1VzU1VGQlNTeExRVUZMTEVWQlFVVXNRMEZCUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZW1vdmVBbGwgPSB2b2lkIDA7XG5jb25zdCBfMSA9IHJlcXVpcmUoXCIuXCIpO1xuLyoqXG4gKiBDbGVhciBhbGwgZGF0YSBmcm9tIHRoZSBzdG9yZSBhbmQgZnJvbSBzZXNzaW9uLlxuICovXG5jb25zdCByZW1vdmVBbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBfMS5TdG9yZS5jbGVhcigpO1xufTtcbmV4cG9ydHMucmVtb3ZlQWxsID0gcmVtb3ZlQWxsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY21WdGIzWmxRV3hzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwzSmxiVzkyWlVGc2JDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeDNRa0ZCTUVJN1FVRkZNVUk3TzBkQlJVYzdRVUZEU1N4TlFVRk5MRk5CUVZNc1IwRkJSeXhMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU5zUXl4alFVRmpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03U1VGRGRrSXNXVUZCV1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8wbEJRM0pDTEZGQlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRCUVVOb1FpeERRVUZETEVOQlFVTTdRVUZLVnl4UlFVRkJMRk5CUVZNc1lVRkpjRUlpZlE9PSIsIi8qKioqKiovICgoKSA9PiB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0XCJ1c2Ugc3RyaWN0XCI7XG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKFtcbi8qIDAgKi8sXG4vKiAxICovXG4vKioqLyAoKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG5cbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0ICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XG4vKiBoYXJtb255IGV4cG9ydCAqLyAgIFwiZGVmYXVsdFwiOiAoKSA9PiAoX19XRUJQQUNLX0RFRkFVTFRfRVhQT1JUX18pXG4vKiBoYXJtb255IGV4cG9ydCAqLyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfZGVlcENvcHlfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbi8vIFRPRE86IFJlZmFjdG9yLiBTaG91bGQgbm90IHVzZSBhcnJvdyBmdW5jdGlvbnMgaW4gY2xhc3MuXG52YXIgQ29tcGFyZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb21wYXJlKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHN0cmljdEVxdWFsaXR5IHRvIGZhbHNlIHRvIGNvZXJjZSBjb252ZXJzaW9uIGlmIHZhbHVlcyBhcmUgZGlmZmVyZW50IHR5cGVzLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geyp9IGFcbiAgICAgICAgICogQHBhcmFtIHsqfSBiXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RyaWN0RXF1YWxpdHlcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGVlcENvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYiwgc3RyaWN0RXF1YWxpdHkpIHtcbiAgICAgICAgICAgIGlmIChzdHJpY3RFcXVhbGl0eSA9PT0gdm9pZCAwKSB7IHN0cmljdEVxdWFsaXR5ID0gdHJ1ZTsgfVxuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMsIF9yZXNldExvZyA9IF9hLl9yZXNldExvZywgX2luY3JlbWVudERlcHRoID0gX2EuX2luY3JlbWVudERlcHRoLCBfcGFzcyA9IF9hLl9wYXNzLCBfZmFpbCA9IF9hLl9mYWlsO1xuICAgICAgICAgICAgLyogI3JlZ2lvbiAgUmVzZXQgbG9nIGlmIG5lY2Vzc2FyeSAqL1xuICAgICAgICAgICAgX3Jlc2V0TG9nKCk7XG4gICAgICAgICAgICAvKiAjZW5kcmVnaW9uICovXG4gICAgICAgICAgICAvKiAjcmVnaW9uICBUcmFjayByZWN1cnNpb24gZGVwdGggKi9cbiAgICAgICAgICAgIF9pbmNyZW1lbnREZXB0aCgpO1xuICAgICAgICAgICAgLyogI2VuZHJlZ2lvbiAqL1xuICAgICAgICAgICAgLyogI3JlZ2lvbiAgVW5kZWZpbmVkICovXG4gICAgICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkICYmIGIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIGJvdGggdmFsdWVzIGFyZSB1bmRlZmluZWQsIHNvIHBhc3NcbiAgICAgICAgICAgICAgICByZXR1cm4gX3Bhc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZhaWwoYSwgYiwgJ09uZSBvZiB0aGUgdmFsdWVzIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogI2VuZHJlZ2lvbiAqL1xuICAgICAgICAgICAgLyogI3JlZ2lvbiAgTnVsbHMgKi9cbiAgICAgICAgICAgIGlmIChhID09PSBudWxsICYmIGIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBib3RoIHZhbHVlcyBhcmUgbnVsbCwgc28gcGFzc1xuICAgICAgICAgICAgICAgIHJldHVybiBfcGFzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYSA9PT0gbnVsbCB8fCBiID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gb25seSBvbmUgdmFsdWUgaXMgbnVsbFxuICAgICAgICAgICAgICAgIHJldHVybiBfZmFpbChhLCBiLCAnT25lIG9mIHRoZSB2YWx1ZXMgaXMgbnVsbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogI2VuZHJlZ2lvbiAqL1xuICAgICAgICAgICAgLyogI3JlZ2lvbiAgRnVuY3Rpb24gY29tcGFyaXNvbiAqL1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzRXF1YWwgPSBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9mYWlsKGEsIGIsICdGdW5jdGlvbnMgYXJlIG5vdCBlcXVhbCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX3Bhc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mYWlsKGEsIGIsICdUaGUgdmFsdWVzIGFyZSBub3QgdGhlIHNhbWUgdHlwZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogI2VuZHJlZ2lvbiAqL1xuICAgICAgICAgICAgLyogI3JlZ2lvbiAgTmVpdGhlciB2YWx1ZXMgYXJlIG9iamVjdHMgKi9cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgLy8gVmFsdWVzIGFyZSBub3Qgb2JqZWN0cyBzbyBkbyBhIHNpbXBsZSBjb21wYXJpc29uIHdpdGhvdXQgdHlwZSBjaGVja2luZ1xuICAgICAgICAgICAgICAgIC8vIHVubGVzcyBzdHJpY3RFcXVhbGl0eSBpcyB0cnVlLlxuICAgICAgICAgICAgICAgIHZhciBpc0VxdWFsID0gYSA9PSBiO1xuICAgICAgICAgICAgICAgIHZhciBpc1N0cmljdEVxdWFsID0gYSA9PT0gYjtcbiAgICAgICAgICAgICAgICBpZiAoc3RyaWN0RXF1YWxpdHkgJiYgIWlzU3RyaWN0RXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1zZyA9IGlzRXF1YWxcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ1RoZSB2YWx1ZXMgYXJlIGRpZmZlcmVudCB0eXBlcydcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ1RoZSB2YWx1ZXMgYXJlIG5vdCBlcXVhbCc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZmFpbChhLCBiLCBtc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2ZhaWwoYSwgYiwgJ1RoZSB2YWx1ZXMgYXJlIG5vdCBlcXVhbCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX3Bhc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgYiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZhaWwoYSwgYiwgJ1RoZSB2YWx1ZXMgYXJlIGRpZmZlcmVudCB0eXBlcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogI2VuZHJlZ2lvbiAqL1xuICAgICAgICAgICAgLyogI3JlZ2lvbiAgdmFsdWVzIGFyZSBvYmplY3RzIHNvIHdlIHNob3VsZCBkZWVwQ29weSBiZWZvcmUgZ29pbmcgZnVydGhlciAqL1xuICAgICAgICAgICAgYSA9ICgwLF9kZWVwQ29weV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fLmRlZXBDb3B5KShhKTtcbiAgICAgICAgICAgIGIgPSAoMCxfZGVlcENvcHlfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXy5kZWVwQ29weSkoYik7XG4gICAgICAgICAgICAvKiAjZW5kcmVnaW9uICovXG4gICAgICAgICAgICAvKiAjcmVnaW9uICBWZXJpZnkgdGhlIG9iamVjdHMgaGF2ZSB0aGUgc2FtZSBwcm90b3R5cGUgY2hhaW5zICovXG4gICAgICAgICAgICBpZiAoYS5jb25zdHJ1Y3RvciAhPT0gYi5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfZmFpbChhLCBiLCAnVGhlIG9iamVjdHMgaGF2ZSBkaWZmZXJlbnQgcHJvcHR5cGUgY2hhaW5zJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiAjZW5kcmVnaW9uICovXG4gICAgICAgICAgICAvKiAjcmVnaW9uICBEYXRlIGNvbXBhcmlzb24gKi9cbiAgICAgICAgICAgIGlmIChhIGluc3RhbmNlb2YgRGF0ZSAmJiBiIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbXBhcmUgZGF0ZXNcbiAgICAgICAgICAgICAgICB2YXIgaXNFcXVhbCA9IG5ldyBEYXRlKGEuZ2V0VGltZSgpKS50b1N0cmluZygpID09PSBuZXcgRGF0ZShiLmdldFRpbWUoKSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9mYWlsKGEsIGIsICdUaGUgZGF0ZXMgYXJlIG5vdCBlcXVhbCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX3Bhc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGEgaW5zdGFuY2VvZiBEYXRlIHx8IGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gb25seSBvbmUgdmFsdWUgaXMgYSBEYXRlXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mYWlsKGEsIGIsICdUaGUgdmFsdWVzIGFyZSBub3QgdGhlIHNhbWUgdHlwZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogI2VuZHJlZ2lvbiAqL1xuICAgICAgICAgICAgLyogI3JlZ2lvbiAgQXJyYXkgY29tcGFyaXNvbiAqL1xuICAgICAgICAgICAgaWYgKGEgaW5zdGFuY2VvZiBBcnJheSAmJiBiIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBhcnJheSBsZW5ndGhzLiBJZiBub3Qgb2YgZXF1YWwgbGVuZ3RoLCB0aGVuIHJldHVybiBmYWxzZS5cbiAgICAgICAgICAgICAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZmFpbChhLCBiLCAnVGhlIGFycmF5cyBhcmUgZGlmZmVyZW50IGxlbmd0aHMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYUkgPSBhLmxlbmd0aCAtIDE7IGFJID49IDA7IC0tYUkpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogI3JlZ2lvbiAgV2hhdCdzIGdvaW5nIG9uIGhlcmUuLi4gKi9cbiAgICAgICAgICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBmaXJzdCBhcnJheSwgZ2V0dGluZyB0aGUgdmFsdWUgYXQgZWFjaCBpbmRleC5cbiAgICAgICAgICAgICAgICAgICAgLy8gRmluZCB0aGF0IHZhbHVlIGluIHRoZSBvdGhlciBhcnJheS5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBhbiBvYmplY3QsIG5lZWQgdG8gc2VhcmNoIGZvciB0aGF0IG9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgLy8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBzZWNvbmQgYXJyYXkgZG9pbmcgYSBkZWVwQ29tcGFyZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gU3BsaWNlIGZyb20gZmlyc3QgYXJyYXkuIGlmIG1hdGNoIGlzIGZvdW5kIGluIHNlY29uZCBhcnJheSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlbiBzcGxpY2UgZnJvbSB0aGF0IGFycmF5LlxuICAgICAgICAgICAgICAgICAgICAvLyBBZnRlciB0aGUgZmlyc3QgYXJyYXkgaGFzIGJlZW4gaXRlcmF0ZWQgb3ZlcixcbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gYSBjb21wYXJpc29uIG9mIHRoZSBhcnJheSBsZW5ndGhzIHRvIGRldGVybWluZSBpZiB0aGUgYXJyYXlzIGFyZSBlcXVhbC5cbiAgICAgICAgICAgICAgICAgICAgLyogI2VuZHJlZ2lvbiAqL1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IGFbYUldO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHggPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXB0aFRyYWNraW5nLnBhdGgucHVzaChcIltcIi5jb25jYXQoYUksIFwiXVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiSSA9IGIubGVuZ3RoIC0gMTsgYkkgPj0gMDsgLS1iSSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0VxdWFsID0gX3RoaXMuZGVlcENvbXBhcmUoeCwgYltiSV0sIHN0cmljdEVxdWFsaXR5KS5pc0VxdWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0VxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIuc3BsaWNlKGJJLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYS5zcGxpY2UoYUksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfZmFpbChhLCBiLCAnVGhlIGFycmF5cyBjb250YWluIGRpZmZlcmVudCB2YWx1ZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlcHRoVHJhY2tpbmcucGF0aC5zcGxpY2UoX3RoaXMuZGVwdGhUcmFja2luZy5wYXRoLmxlbmd0aCAtIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiSSA9IGIubGVuZ3RoIC0gMTsgYkkgPj0gMDsgLS1iSSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0VxdWFsID0geC50b1N0cmluZygpID09PSBiW2JJXS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0VxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIuc3BsaWNlKGJJLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYS5zcGxpY2UoYUksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cmljdEVxdWFsaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZWFyY2ggZm9yIHRoYXQgdmFsdWUgaW4gdGhlIG90aGVyIGFycmF5IGFuZCBnZXQgdGhlIGluZGV4LlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJJID0gYi5pbmRleE9mKHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJJID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFZhbHVlIGRpZG4ndCBleGlzdC4gRXhpdCBjb21wYXJpc29uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfZmFpbChhLCBiLCAnVmFsdWUgaW4gZmlyc3QgYXJyYXkgZGlkIG5vdCBleGlzdCBpbiBzZWNvbmQgYXJyYXknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFZhbHVlIGV4aXN0cy4gUmVtb3ZlIGJvdGggdmFsdWVzIGZyb20gYXJyYXlzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuc3BsaWNlKGFJLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiLnNwbGljZShiSSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiSSA9IGIubGVuZ3RoIC0gMTsgYkkgPj0gMDsgLS1iSSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0VxdWFsID0geCA9PSBiW2JJXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdmFsdWUgZnJvbSBiIGlmIHRoZXJlIGlzIGEgbWF0Y2guXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIuc3BsaWNlKGJJLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHZhbHVlIGZyb20gYSByZWdhcmRsZXNzIG9mIG1hdGNoLlxuICAgICAgICAgICAgICAgICAgICAgICAgYS5zcGxpY2UoYUksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFmdGVyIGZpcnN0IGFycmF5IGlzIGVtcHR5LCBjaGVjayBhZ2FpbnN0IGxlbmd0aCBvZiBzZWNvbmQgYXJyYXkuXG4gICAgICAgICAgICAgICAgLy8gaWYgbGVuZ3RocyBhcmUgbm90IGVxdWFsLCB0aGVuIGFycmF5cyBhcmUgbm90IGVxdWFsLlxuICAgICAgICAgICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9mYWlsKGEsIGIsICdWYWx1ZSBpbiBzZWNvbmQgYXJyYXkgZGlkIG5vdCBleGlzdCBpbiBmaXJzdCBhcnJheScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBcnJheXMgd2VyZSB0aGUgc2FtZSBsZW5ndGguXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9wYXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhIGluc3RhbmNlb2YgQXJyYXkgfHwgYiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgLy8gVmFsdWVzIGFyZSBkaWZmZXJlbnQgdHlwZXMuIEV4aXQgY29tcGFyaXNvbi5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZhaWwoYSwgYiwgJ1RoZSB2YWx1ZXMgYXJlIG5vdCB0aGUgc2FtZSB0eXBlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiAjZW5kcmVnaW9uICovXG4gICAgICAgICAgICAvKiAjcmVnaW9uICBPYmplY3QgY29tcGFyaXNvbiAqL1xuICAgICAgICAgICAgaWYgKGEgaW5zdGFuY2VvZiBPYmplY3QgJiYgYiBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgICAgIC8vIEZpcnN0IGNoZWNrIGZvciBhbiBlcXVhbCBudW1iZXIgb2YgcHJvcGVydGllcy5cbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoYSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9mYWlsKGEsIGIsICdUaGUgb2JqZWN0cyBoYXZlIGRpZmZlcmVudCBwcm9wZXJ0aWVzJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBhKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qICNyZWdpb24gIFdoYXQncyBnb2luZyBvbiBoZXJlLi4uICovXG4gICAgICAgICAgICAgICAgICAgIC8vIE5lZWQgdG8gdHlwZSBjaGVjayB0aGVzZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHByb3BlcnR5IGlzIGFuIG9iamVjdCB0aGVuIGNhbGwgZGVlcENvbXBhcmVcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gYnJlYWsgZG93biB0aGUgb2JqZWN0IGEgbGl0dGxlIGZ1cnRoZXIuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG5vdCBhbiBvYmplY3QsIGhhbmRsZSBmdW5jdGlvbiBhbmQgcHJpbWl0aXZlIGNvbXBhcmlzb25zIHJpZ2h0IGhlcmUuXG4gICAgICAgICAgICAgICAgICAgIC8qICNlbmRyZWdpb24gKi9cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhW3Byb3BlcnR5TmFtZV0gPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgYltwcm9wZXJ0eU5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGVwdGhUcmFja2luZy5wYXRoLnB1c2gocHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0VxdWFsID0gX3RoaXMuZGVlcENvbXBhcmUoYVtwcm9wZXJ0eU5hbWVdLCBiW3Byb3BlcnR5TmFtZV0sIHN0cmljdEVxdWFsaXR5KS5pc0VxdWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9mYWlsKGEsIGIsIFwiVGhlIG9iamVjdHMnIHByb3BlcnRpZXMgaGF2ZSBkaWZmZXJlbnQgdmFsdWVzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGVwdGhUcmFja2luZy5wYXRoLnNwbGljZShfdGhpcy5kZXB0aFRyYWNraW5nLnBhdGgubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGFbcHJvcGVydHlOYW1lXSA9PT0gJ29iamVjdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBiW3Byb3BlcnR5TmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2ZhaWwoYSwgYiwgJ09ubHkgb25lIG9mIHRoZSBwcm9wZXJ0aWVzIGlzIGFuIG9iamVjdCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhW3Byb3BlcnR5TmFtZV0gPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBiW3Byb3BlcnR5TmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhW3Byb3BlcnR5TmFtZV0udG9TdHJpbmcoKSAhPT0gYltwcm9wZXJ0eU5hbWVdLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2ZhaWwoYSwgYiwgJ1RoZSBmdW5jdGlvbnMgYXJlIGRpZmZlcmVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhW3Byb3BlcnR5TmFtZV0gPT09ICdmdW5jdGlvbicgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBiW3Byb3BlcnR5TmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfZmFpbChhLCBiLCAnT25seSBvbmUgb2YgdGhlIHZhbHVlcyBpcyBhIGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyaWN0RXF1YWxpdHkgJiYgYVtwcm9wZXJ0eU5hbWVdICE9PSBiW3Byb3BlcnR5TmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtc2cgPSBhW3Byb3BlcnR5TmFtZV0gPT0gYltwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnVGhlIHZhbHVlcyBhcmUgZGlmZmVyZW50IHR5cGVzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ1RoZSB2YWx1ZXMgYXJlIG5vdCBlcXVhbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2ZhaWwoYSwgYiwgbXNnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhW3Byb3BlcnR5TmFtZV0gIT0gYltwcm9wZXJ0eU5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2ZhaWwoYSwgYiwgJ1RoZSB2YWx1ZXMgYXJlIG5vdCBlcXVhbCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfcGFzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYSBpbnN0YW5jZW9mIE9iamVjdCB8fCBiIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gVmFsdWVzIGFyZSBkaWZmZXJlbnQgdHlwZXMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mYWlsKGEsIGIsICdPbmx5IG9uZSBvZiB0aGUgdmFsdWVzIGlzIGFuIG9iamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogI2VuZHJlZ2lvbiAqL1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogV2lsbCBsb2cgZGV0YWlscyB0byB0aGUgY29uc29sZSBpZiBhbiBpbmVxdWFsaXR5IGlzIGZvdW5kLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZExvZ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb25zb2xlTG9nID0gZnVuY3Rpb24gKHNob3VsZExvZykge1xuICAgICAgICAgICAgaWYgKHNob3VsZExvZyA9PT0gdm9pZCAwKSB7IHNob3VsZExvZyA9IHRydWU7IH1cbiAgICAgICAgICAgIGlmIChzaG91bGRMb2cgJiYgdHlwZW9mIF90aGlzLmxvZy5tZXNzYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMgJWNkZWVwQ29tcGFyZSBpbmVxdWFsaXR5IGZvdW5kISBcIi5jb25jYXQoX3RoaXMubG9nLm1lc3NhZ2UsIFwiOiAlY1wiKS5jb25jYXQoX3RoaXMubG9nLnBhdGgsIFwiICVjXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShfdGhpcy5sb2cuYSksIFwiJWMsICVjXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShfdGhpcy5sb2cuYiksIFwiJWNcIiksIF90aGlzLnN0YW5kYXJkU3R5bGVzLCBfdGhpcy5wYXRoU3R5bGVzLCBfdGhpcy5lcnJvclN0eWxlcywgX3RoaXMuc3RhbmRhcmRTdHlsZXMsIF90aGlzLmVycm9yU3R5bGVzLCBfdGhpcy5zdGFuZGFyZFN0eWxlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaWxsIGxvZyBkZXRhaWxzIG9mIGNvbXBhcmlzb24gYXMgYSBjb25zb2xlIGVycm9yIGlmIHJlc3VsdCBkb2Vzbid0IG1hdGNoIHRoZSBhc3NlcnRUcnVlIGJvb2xlYW4uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYXNzZXJ0VHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hc3NlcnQgPSBmdW5jdGlvbiAoYXNzZXJ0VHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGFzc2VydFRydWUgJiYgX3RoaXMudmFsdWUgIT09IGFzc2VydFRydWUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiIyMjIyMjIyMgJWNkZWVwQ29tcGFyZSBpbmVxdWFsaXR5IGZvdW5kISBcIi5jb25jYXQoX3RoaXMubG9nLm1lc3NhZ2UsIFwiOiAlY1wiKS5jb25jYXQoX3RoaXMubG9nLnBhdGgsIFwiICVjXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShfdGhpcy5sb2cuYSksIFwiJWMsICVjXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShfdGhpcy5sb2cuYiksIFwiJWNcIiksIF90aGlzLnN0YW5kYXJkU3R5bGVzLCBfdGhpcy5wYXRoU3R5bGVzLCBfdGhpcy5lcnJvclN0eWxlcywgX3RoaXMuc3RhbmRhcmRTdHlsZXMsIF90aGlzLmVycm9yU3R5bGVzLCBfdGhpcy5zdGFuZGFyZFN0eWxlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghYXNzZXJ0VHJ1ZSAmJiBfdGhpcy52YWx1ZSAhPT0gYXNzZXJ0VHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCIjIyMjIyMjIyBkZWVwQ29tcGFyZSBlcnJvciEgVGhlIHZhbHVlcyBhcmUgZXF1YWwgYnV0IGV4cGVjdGVkIGluZXF1YWxpdHkuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQWxsb3dzIGZvciB0aGUgdXNlIG9mIGEgdGhpcmQgcGFydHkgbG9nZ2VyIGZ1bmN0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjbGllbnRMb2dnZXJcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVMb2dnZXJcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYXR0YWNoTG9nZ2VyID0gZnVuY3Rpb24gKGNsaWVudExvZ2dlciwgZW5hYmxlTG9nZ2VyKSB7XG4gICAgICAgICAgICBpZiAoZW5hYmxlTG9nZ2VyID09PSB2b2lkIDApIHsgZW5hYmxlTG9nZ2VyID0gdHJ1ZTsgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjbGllbnRMb2dnZXIgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgX3RoaXMuY2xpZW50TG9nZ2VyID09PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgICAgIGVuYWJsZUxvZ2dlciAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBfdGhpcy5sb2cubWVzc2FnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjbGllbnRMb2dnZXIoXCIjIyMjIyMjIyBkZWVwQ29tcGFyZSBpbmVxdWFsaXR5IGZvdW5kISBcIi5jb25jYXQoX3RoaXMubG9nLm1lc3NhZ2UsIFwiOiBcIikuY29uY2F0KF90aGlzLmxvZy5wYXRoLCBcIiBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KF90aGlzLmxvZy5hKSwgXCIsIFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkoX3RoaXMubG9nLmIpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH07XG4gICAgICAgIC8qICNyZWdpb24gIFByaXZhdGUgbWV0aG9kcyAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogRmFpbCB0aGUgY29tcGFyaXNvbiwgbG9nIHRoZSBlcnJvciBtZXNzYWdlIGFuZCBpbmVxdWFsIHZhbHVlcyxcbiAgICAgICAgICogYW5kIGRlY3JlbWVudCB0aGUgcmVjdXJzaW9uIGRlcHRoIGJlZm9yZSByZXR1cm5pbmcgdG8gcHJldmlvdXMgbGV2ZWwuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gYVxuICAgICAgICAgKiBAcGFyYW0geyp9IGJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2ZhaWwgPSBmdW5jdGlvbiAoYSwgYiwgbWVzc2FnZSkge1xuICAgICAgICAgICAgX3RoaXMuX2xvZ091dHB1dChhLCBiLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIF90aGlzLl9kZWNyZW1lbnREZXB0aCgpO1xuICAgICAgICAgICAgX3RoaXMudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhc3MgdGhlIGNvbXBhcmlzb24gYW5kIGRlY3JlbWVudCB0aGUgcmVjdXJzaW9uIGRlcHRoIGJlZm9yZSByZXR1cm5pbmcgdG8gcHJldmlvdXMgbGV2ZWwuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9wYXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuX2RlY3JlbWVudERlcHRoKCk7XG4gICAgICAgICAgICBfdGhpcy52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyp9IGFcbiAgICAgICAgICogQHBhcmFtIHsqfSBiXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9sb2dPdXRwdXQgPSBmdW5jdGlvbiAoYSwgYiwgbWVzc2FnZSkge1xuICAgICAgICAgICAgLy8gT25seSBjYXB0dXJlIHRoZSBmaXJzdCBlcnJvciwgbm90IHRoZSBlcnJvcnMgZnVydGhlciB1cC5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMubG9nLm1lc3NhZ2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhdGggPSAnJztcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZGVwdGhUcmFja2luZy5wYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IFwib2JqLlwiLmNvbmNhdChfdGhpcy5kZXB0aFRyYWNraW5nLnBhdGguam9pbignLicpKTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvKD86XFwuXFxbKS9nLCAnWycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy5sb2cubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgX3RoaXMubG9nLmEgPSBhO1xuICAgICAgICAgICAgICAgIF90aGlzLmxvZy5iID0gYjtcbiAgICAgICAgICAgICAgICBfdGhpcy5sb2cucGF0aCA9IHBhdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmNyZW1lbnQgZGVwdGggYWZ0ZXIgZHJpbGxpbmcgZG93biB0byBhIG5ldyBsZXZlbC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luY3JlbWVudERlcHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5kZXB0aFRyYWNraW5nLmRlcHRoID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIF90aGlzLmRlcHRoVHJhY2tpbmcuZGVwdGggPSAwO1xuICAgICAgICAgICAgICAgIF90aGlzLmRlcHRoVHJhY2tpbmcucGF0aCA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGVwdGhUcmFja2luZy5kZXB0aCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogRGVjcmVtZW50IGRlcHRoIGJlZm9yZSByZXR1cm5pbmcgdG8gYSBwcmV2aW91cyBsZXZlbC5cbiAgICAgICAgICogSWYgYXQgdGhlIGhpZ2hlc3QgbGV2ZWwgYW5kIGFuIGVycm9yIG1lc3NhZ2UgZXhpc3RzLCBsb2cgdGhlIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZGVjcmVtZW50RGVwdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIF90aGlzLmRlcHRoVHJhY2tpbmcuZGVwdGggIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgICAgX3RoaXMuZGVwdGhUcmFja2luZy5kZXB0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5kZXB0aFRyYWNraW5nLmRlcHRoLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG91bGQgcmVzZXQgdGhlIGxvZyBvYmplY3QgaWYgbmVjZXNzYXJ5LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fcmVzZXRMb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIF90aGlzLmRlcHRoVHJhY2tpbmcuZGVwdGggPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICAgICAgX3RoaXMuZGVwdGhUcmFja2luZy5kZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmxvZyA9IHsgYTogbnVsbCwgYjogbnVsbCwgbWVzc2FnZTogbnVsbCwgcGF0aDogbnVsbCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZXB0aFRyYWNraW5nID0geyBkZXB0aDogbnVsbCwgcGF0aDogbnVsbCB9O1xuICAgICAgICB0aGlzLmxvZyA9IHsgYTogbnVsbCwgYjogbnVsbCwgcGF0aDogbnVsbCwgbWVzc2FnZTogbnVsbCB9O1xuICAgICAgICB0aGlzLmVycm9yU3R5bGVzID0gJ2NvbG9yOnJlZDsnO1xuICAgICAgICB0aGlzLnN0YW5kYXJkU3R5bGVzID0gJ2NvbG9yOmJsYWNrOyc7XG4gICAgICAgIHRoaXMucGF0aFN0eWxlcyA9ICdmb250LXN0eWxlOml0YWxpYztjb2xvcjpibHVlOyc7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wYXJlLnByb3RvdHlwZSwgXCJpc0VxdWFsXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE11c3QgYmUgY2FsbGVkIGF0IHRoZSBlbmQgb2YgdGhlIGNoYWluIHRvIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBDb21wYXJlO1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgX19XRUJQQUNLX0RFRkFVTFRfRVhQT1JUX18gPSAobmV3IENvbXBhcmUoKSk7XG5cblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG5cbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0ICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XG4vKiBoYXJtb255IGV4cG9ydCAqLyAgIFwiZGVlcENvcHlcIjogKCkgPT4gKC8qIGJpbmRpbmcgKi8gZGVlcENvcHkpXG4vKiBoYXJtb255IGV4cG9ydCAqLyB9KTtcbnZhciBkZWVwQ29weSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmIChvYmogaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShvYmouZ2V0VGltZSgpKTtcbiAgICB9XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHJldHVybiBvYmoucmVkdWNlKGZ1bmN0aW9uIChhcnIsIGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIGFycltpXSA9IGRlZXBDb3B5KGl0ZW0pO1xuICAgICAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgICAgfSwgW10pO1xuICAgIH1cbiAgICBpZiAob2JqIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZShmdW5jdGlvbiAobmV3T2JqLCBrZXkpIHtcbiAgICAgICAgICAgIG5ld09ialtrZXldID0gZGVlcENvcHkob2JqW2tleV0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ld09iajtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbn07XG5cblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG5cbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0ICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XG4vKiBoYXJtb255IGV4cG9ydCAqLyAgIFwiZm9ybWF0UGhvbmVOdW1iZXJcIjogKCkgPT4gKC8qIGJpbmRpbmcgKi8gZm9ybWF0UGhvbmVOdW1iZXIpXG4vKiBoYXJtb255IGV4cG9ydCAqLyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcmVtb3ZlTm9uTnVtZXJpY0NoYXJzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgZm9ybWF0UGhvbmVOdW1iZXIgPSBmdW5jdGlvbiAocGhvbmVOdW1iZXIpIHtcbiAgICBwaG9uZU51bWJlciA9XG4gICAgICAgIHR5cGVvZiBwaG9uZU51bWJlciA9PT0gJ251bWJlcicgPyBwaG9uZU51bWJlci50b1N0cmluZygpIDogcGhvbmVOdW1iZXI7XG4gICAgaWYgKHBob25lTnVtYmVyLmxlbmd0aCA8IDEwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybigncGhvbmUtbnVtYmVyIG5lZWRzIHRvIGJlIGF0IGxlYXN0IDEwIGRpZ2l0cyBsb25nJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHN0cmlwcGVkTnVtYmVyID0gKDAsX3JlbW92ZU5vbk51bWVyaWNDaGFyc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fLnJlbW92ZU5vbk51bWVyaWNDaGFycykocGhvbmVOdW1iZXIpO1xuICAgIHJldHVybiBcIihcIi5jb25jYXQoc3RyaXBwZWROdW1iZXIuc2xpY2UoMCwgMyksIFwiKSBcIikuY29uY2F0KHN0cmlwcGVkTnVtYmVyLnNsaWNlKDMsIDYpLCBcIi1cIikuY29uY2F0KHN0cmlwcGVkTnVtYmVyLnNsaWNlKDYsIDEwKSk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKChfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykgPT4ge1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuLyogaGFybW9ueSBleHBvcnQgKi8gICBcInJlbW92ZU5vbk51bWVyaWNDaGFyc1wiOiAoKSA9PiAoLyogYmluZGluZyAqLyByZW1vdmVOb25OdW1lcmljQ2hhcnMpXG4vKiBoYXJtb255IGV4cG9ydCAqLyB9KTtcbnZhciByZW1vdmVOb25OdW1lcmljQ2hhcnMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG5cbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0ICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XG4vKiBoYXJtb255IGV4cG9ydCAqLyAgIFwiZ2V0VmFsdWVcIjogKCkgPT4gKC8qIGJpbmRpbmcgKi8gZ2V0VmFsdWUpXG4vKiBoYXJtb255IGV4cG9ydCAqLyB9KTtcbnZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIChvYmosIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmIChkZWZhdWx0VmFsdWUgPT09IHZvaWQgMCkgeyBkZWZhdWx0VmFsdWUgPSBudWxsOyB9XG4gICAgcmV0dXJuIHBhdGguc3BsaXQoJy4nKS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGMpIHtcbiAgICAgICAgcmV0dXJuIGEgIT0gbnVsbCAmJlxuICAgICAgICAgICAgdHlwZW9mIGEgIT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgIGFbY10gIT0gbnVsbCAmJlxuICAgICAgICAgICAgdHlwZW9mIGFbY10gIT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gYVtjXVxuICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWUgIT0gbnVsbFxuICAgICAgICAgICAgICAgID8gZGVmYXVsdFZhbHVlXG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgIH0sIG9iaik7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKChfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykgPT4ge1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuLyogaGFybW9ueSBleHBvcnQgKi8gICBcImhhc1ZhbHVlXCI6ICgpID0+ICgvKiBiaW5kaW5nICovIGhhc1ZhbHVlKVxuLyogaGFybW9ueSBleHBvcnQgKi8gfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2dldFZhbHVlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG52YXIgaGFzVmFsdWUgPSBmdW5jdGlvbiAob2JqLCBwYXRoKSB7XG4gICAgdmFyIHZhbHVlID0gKDAsX2dldFZhbHVlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18uZ2V0VmFsdWUpKG9iaiwgcGF0aCk7XG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyBmYWxzZSA6IHRydWU7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKChfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykgPT4ge1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuLyogaGFybW9ueSBleHBvcnQgKi8gICBcIm1ha2VDYW1lbENhc2VOb3JtYWxcIjogKCkgPT4gKC8qIGJpbmRpbmcgKi8gbWFrZUNhbWVsQ2FzZU5vcm1hbClcbi8qIGhhcm1vbnkgZXhwb3J0ICovIH0pO1xudmFyIG1ha2VDYW1lbENhc2VOb3JtYWwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvKFtBLVpdKS9nLCAnICQxJykucmVwbGFjZSgvXi4vLCBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA4ICovXG4vKioqLyAoKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG5cbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0ICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XG4vKiBoYXJtb255IGV4cG9ydCAqLyAgIFwib2JqZWN0SW5kZXhPZlwiOiAoKSA9PiAoLyogYmluZGluZyAqLyBvYmplY3RJbmRleE9mKVxuLyogaGFybW9ueSBleHBvcnQgKi8gfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX0NvbXBhcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QncyBpbmRleCBpbiBhbiBhcnJheSBvZiBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFyclxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICovXG52YXIgb2JqZWN0SW5kZXhPZiA9IGZ1bmN0aW9uIChhcnIsIG9iaikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChfQ29tcGFyZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXS5kZWVwQ29tcGFyZShhcnJbaV0sIG9iaikuaXNFcXVhbCkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDkgKi9cbi8qKiovICgoX191bnVzZWRfd2VicGFja19tb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pID0+IHtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIHtcbi8qIGhhcm1vbnkgZXhwb3J0ICovICAgXCJyZW1vdmVEdXBsaWNhdGVzXCI6ICgpID0+ICgvKiBiaW5kaW5nICovIHJlbW92ZUR1cGxpY2F0ZXMpXG4vKiBoYXJtb255IGV4cG9ydCAqLyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfb2JqZWN0SW5kZXhPZl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblxudmFyIHJlbW92ZUR1cGxpY2F0ZXMgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgdmFyIG5ld0FyciA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBpbmRleCA9ICgwLF9vYmplY3RJbmRleE9mX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18ub2JqZWN0SW5kZXhPZikobmV3QXJyLCBhcnJbaV0pO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBuZXdBcnIucHVzaChhcnJbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdBcnI7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMTAgKi9cbi8qKiovICgoX191bnVzZWRfd2VicGFja19tb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pID0+IHtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIHtcbi8qIGhhcm1vbnkgZXhwb3J0ICovICAgXCJ1dWlkXCI6ICgpID0+ICgvKiBiaW5kaW5nICovIHV1aWQpXG4vKiBoYXJtb255IGV4cG9ydCAqLyB9KTtcbnZhciB1dWlkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHZhciByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4O1xuICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gICAgfSk7XG59O1xuXG5cbi8qKiovIH0pXG4vKioqKioqLyBcdF0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMgKi9cbi8qKioqKiovIFx0KCgpID0+IHtcbi8qKioqKiovIFx0XHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcbi8qKioqKiovIFx0XHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcbi8qKioqKiovIFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKVxuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuLyoqKioqKi8gXHRcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuLy8gVGhpcyBlbnRyeSBuZWVkIHRvIGJlIHdyYXBwZWQgaW4gYW4gSUlGRSBiZWNhdXNlIGl0IG5lZWQgdG8gYmUgaXNvbGF0ZWQgYWdhaW5zdCBvdGhlciBtb2R1bGVzIGluIHRoZSBjaHVuay5cbigoKSA9PiB7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuLyogaGFybW9ueSBleHBvcnQgKi8gICBcIkNvbXBhcmVcIjogKCkgPT4gKC8qIHJlZXhwb3J0IHNhZmUgKi8gX0NvbXBhcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0pLFxuLyogaGFybW9ueSBleHBvcnQgKi8gICBcImRlZXBDb3B5XCI6ICgpID0+ICgvKiByZWV4cG9ydCBzYWZlICovIF9kZWVwQ29weV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fLmRlZXBDb3B5KSxcbi8qIGhhcm1vbnkgZXhwb3J0ICovICAgXCJmb3JtYXRQaG9uZU51bWJlclwiOiAoKSA9PiAoLyogcmVleHBvcnQgc2FmZSAqLyBfZm9ybWF0UGhvbmVOdW1iZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXy5mb3JtYXRQaG9uZU51bWJlciksXG4vKiBoYXJtb255IGV4cG9ydCAqLyAgIFwiZ2V0VmFsdWVcIjogKCkgPT4gKC8qIHJlZXhwb3J0IHNhZmUgKi8gX2dldFZhbHVlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18uZ2V0VmFsdWUpLFxuLyogaGFybW9ueSBleHBvcnQgKi8gICBcImhhc1ZhbHVlXCI6ICgpID0+ICgvKiByZWV4cG9ydCBzYWZlICovIF9oYXNWYWx1ZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fLmhhc1ZhbHVlKSxcbi8qIGhhcm1vbnkgZXhwb3J0ICovICAgXCJtYWtlQ2FtZWxDYXNlTm9ybWFsXCI6ICgpID0+ICgvKiByZWV4cG9ydCBzYWZlICovIF9tYWtlQ2FtZWxDYXNlTm9ybWFsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X18ubWFrZUNhbWVsQ2FzZU5vcm1hbCksXG4vKiBoYXJtb255IGV4cG9ydCAqLyAgIFwib2JqZWN0SW5kZXhPZlwiOiAoKSA9PiAoLyogcmVleHBvcnQgc2FmZSAqLyBfb2JqZWN0SW5kZXhPZl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fLm9iamVjdEluZGV4T2YpLFxuLyogaGFybW9ueSBleHBvcnQgKi8gICBcInJlbW92ZUR1cGxpY2F0ZXNcIjogKCkgPT4gKC8qIHJlZXhwb3J0IHNhZmUgKi8gX3JlbW92ZUR1cGxpY2F0ZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzdfXy5yZW1vdmVEdXBsaWNhdGVzKSxcbi8qIGhhcm1vbnkgZXhwb3J0ICovICAgXCJyZW1vdmVOb25OdW1lcmljQ2hhcnNcIjogKCkgPT4gKC8qIHJlZXhwb3J0IHNhZmUgKi8gX3JlbW92ZU5vbk51bWVyaWNDaGFyc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOF9fLnJlbW92ZU5vbk51bWVyaWNDaGFycyksXG4vKiBoYXJtb255IGV4cG9ydCAqLyAgIFwidXVpZFwiOiAoKSA9PiAoLyogcmVleHBvcnQgc2FmZSAqLyBfdXVpZF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9fLnV1aWQpXG4vKiBoYXJtb255IGV4cG9ydCAqLyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfQ29tcGFyZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfZGVlcENvcHlfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2Zvcm1hdFBob25lTnVtYmVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9nZXRWYWx1ZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfaGFzVmFsdWVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX21ha2VDYW1lbENhc2VOb3JtYWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX29iamVjdEluZGV4T2ZfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzZfXyA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3JlbW92ZUR1cGxpY2F0ZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzdfXyA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3JlbW92ZU5vbk51bWVyaWNDaGFyc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfdXVpZF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19leHBvcnRzX187XG4vKioqKioqLyB9KSgpXG47IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSTGVhbl8xID0gcmVxdWlyZShcIi4vUkxlYW5cIik7XG5jb25zdCBfaW50ZXJuYWxfMSA9IHJlcXVpcmUoXCIuL19pbnRlcm5hbFwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiQHJsZWFuL3V0aWxzXCIpO1xuY29uc3QgZGVmYXVsdEFkYXB0ZXJzXzEgPSByZXF1aXJlKFwiLi9kZWZhdWx0QWRhcHRlcnNcIik7XG5jbGFzcyBBZGFwdGVycyB7XG4gICAgY29uc3RydWN0b3IoYWRhcHRlck1hcCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJNYXAgPSBhZGFwdGVyTWFwID8gYWRhcHRlck1hcCA6IHt9O1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSAoMCwgdXRpbHNfMS5nZXRWYWx1ZSkoUkxlYW5fMS5kZWZhdWx0LCBcImNvbmZpZy5zdG9yYWdlLmFkYXB0ZXJcIiwgZGVmYXVsdEFkYXB0ZXJzXzEuTG9jYWxGb3JhZ2VBZGFwdGVyKTtcbiAgICAgICAgdGhpcy5hcGkgPSAoMCwgdXRpbHNfMS5nZXRWYWx1ZSkoUkxlYW5fMS5kZWZhdWx0LCBcImNvbmZpZy5hcGkuYWRhcHRlclwiLCBkZWZhdWx0QWRhcHRlcnNfMS5BeGlvc0FkYXB0ZXIpO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYWRhcHRlck1hcCkge1xuICAgICAgICAgICAgdGhpcy5waXBlKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGlwZShhZGFwdGVyTWFwS2V5KSB7XG4gICAgICAgIHN3aXRjaCAoYWRhcHRlck1hcEtleSkge1xuICAgICAgICAgICAgY2FzZSBcInN0b3JhZ2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UgPSB0aGlzLmVuc3VyZUNvcnJlY3RTdG9yYWdlSW1wbGVtZW50YXRpb24odGhpcy5hZGFwdGVyTWFwW2FkYXB0ZXJNYXBLZXldKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhcGlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmFwaSA9IHRoaXMuYWRhcHRlck1hcFthZGFwdGVyTWFwS2V5XTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsb2dnZXJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlciA9IHRoaXMuc2V0TG9nZ2luZ0VuZ2luZSh0aGlzLmFkYXB0ZXJNYXBbYWRhcHRlck1hcEtleV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzW2FkYXB0ZXJNYXBLZXldID0gdGhpcy5hZGFwdGVyTWFwW2FkYXB0ZXJNYXBLZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVuc3VyZUNvcnJlY3RTdG9yYWdlSW1wbGVtZW50YXRpb24oc3RvcmFnZSkge1xuICAgICAgICBjb25zdCBpbnNwZWN0aW9uID0gKDAsIF9pbnRlcm5hbF8xLmltcGxlbWVudCkoc3RvcmFnZSwge1xuICAgICAgICAgICAgbWV0aG9kczogW1wiZ2V0XCIsIFwic2V0XCIsIFwiY2xlYXJcIiwgXCJyZW1vdmVcIl0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5zcGVjdGlvbi5wYXNzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzdG9yYWdlO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihpbnNwZWN0aW9uLmVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgICBzZXRMb2dnaW5nRW5naW5lKGxvZ2dlcikge1xuICAgICAgICBjb25zdCBpbnNwZWN0aW9uID0gKDAsIF9pbnRlcm5hbF8xLmltcGxlbWVudCkobG9nZ2VyLCB7XG4gICAgICAgICAgICBtZXRob2RzOiBbXCJ0cmFjZVwiLCBcImluZm9cIiwgXCJ3YXJuXCIsIFwiZXJyb3JcIl0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5zcGVjdGlvbi5wYXNzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2dnZXI7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGluc3BlY3Rpb24uZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQWRhcHRlcnM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRV1JoY0hSbGNuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12UVdSaGNIUmxjbk11ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3h0UTBGQk5FSTdRVUZETlVJc01rTkJRWGRETzBGQlEzaERMSGREUVVGM1F6dEJRVU40UXl4MVJFRkJjVVU3UVVGSGNrVXNUVUZCY1VJc1VVRkJVVHRKUVUwelFpeFpRVUZaTEZWQlFYTkNPMUZCUTJoRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0UlFVVXZReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVRXNaMEpCUVZFc1JVRkRja0lzWlVGQlN5eEZRVU5NTEhkQ1FVRjNRaXhGUVVONFFpeHZRMEZCYTBJc1EwRkRia0lzUTBGQlF6dFJRVU5HTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1NVRkJRU3huUWtGQlVTeEZRVUZETEdWQlFVc3NSVUZCUlN4dlFrRkJiMElzUlVGQlJTdzRRa0ZCV1N4RFFVRkRMRU5CUVVNN1VVRkZMMFFzUzBGQlN5eEpRVUZKTEVkQlFVY3NTVUZCU1N4VlFVRlZMRVZCUVVVN1dVRkRNVUlzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRjFRaXhEUVVGRExFTkJRVU03VTBGRGNFTTdTVUZEU0N4RFFVRkRPMGxCUlVRc1NVRkJTU3hEUVVGRExHRkJRU3RDTzFGQlEyeERMRkZCUVZFc1lVRkJZU3hGUVVGRk8xbEJRM0pDTEV0QlFVc3NVMEZCVXp0blFrRkRXaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4clEwRkJhME1zUTBGRGNFUXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGREwwSXNRMEZCUXp0blFrRkRSaXhOUVVGTk8xbEJRMUlzUzBGQlN5eExRVUZMTzJkQ1FVTlNMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRuUWtGRE1VTXNUVUZCVFR0WlFVTlNMRXRCUVVzc1VVRkJVVHRuUWtGRFdDeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNCRkxFMUJRVTA3V1VGRFVqdG5Ra0ZEUlN4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRUUVVONFJEdEpRVU5JTEVOQlFVTTdTVUZGUkN4clEwRkJhME1zUTBGQlF5eFBRVUZaTzFGQlF6ZERMRTFCUVUwc1ZVRkJWU3hIUVVGSExFbEJRVUVzY1VKQlFWTXNSVUZCUXl4UFFVRlBMRVZCUVVVN1dVRkRjRU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRXRCUVVzc1JVRkJSU3hQUVVGUExFVkJRVVVzVVVGQlVTeERRVUZETzFOQlF6TkRMRU5CUVVNc1EwRkJRenRSUVVWSUxFbEJRVWtzVlVGQlZTeERRVUZETEUxQlFVMHNSVUZCUlR0WlFVTnlRaXhQUVVGUExFOUJRVThzUTBGQlF6dFRRVU5vUWp0UlFVVkVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVNMVF5eERRVUZETzBsQlJVUXNaMEpCUVdkQ0xFTkJRVU1zVFVGQlZ6dFJRVU14UWl4TlFVRk5MRlZCUVZVc1IwRkJSeXhKUVVGQkxIRkNRVUZUTEVWQlFVTXNUVUZCVFN4RlFVRkZPMWxCUTI1RExFOUJRVThzUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1RVRkJUU3hGUVVGRkxFOUJRVThzUTBGQlF6dFRRVU0xUXl4RFFVRkRMRU5CUVVNN1VVRkZTQ3hKUVVGSkxGVkJRVlVzUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZEY2tJc1QwRkJUeXhOUVVGTkxFTkJRVU03VTBGRFpqdFJRVVZFTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0SlFVTTFReXhEUVVGRE8wTkJRMFk3UVVFNVJFUXNNa0pCT0VSREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0U3RvcmFnZU1ldGhvZHMgPSBleHBvcnRzLmdldEFwaU1ldGhvZHMgPSBleHBvcnRzLmNvbnZlcnRUb1R5cGUgPSBleHBvcnRzLmdldERlZmluaXRpb25PcHRpb25zID0gZXhwb3J0cy5nZXRIb29rT3B0aW9ucyA9IGV4cG9ydHMucmVxdWVzdCA9IGV4cG9ydHMubWV0aG9kcyA9IGV4cG9ydHMuaW1wbGVtZW50ID0gZXhwb3J0cy5pbnNwZWN0Q2xhc3MgPSB2b2lkIDA7XG5jb25zdCBjb252ZXJ0VG9UeXBlXzEgPSByZXF1aXJlKFwiLi9jb252ZXJ0VG9UeXBlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY29udmVydFRvVHlwZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29udmVydFRvVHlwZV8xLmNvbnZlcnRUb1R5cGU7IH0gfSk7XG5jb25zdCBnZXRIb29rT3B0aW9uc18xID0gcmVxdWlyZShcIi4vZ2V0SG9va09wdGlvbnNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRIb29rT3B0aW9uc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0SG9va09wdGlvbnNfMS5nZXRIb29rT3B0aW9uczsgfSB9KTtcbmNvbnN0IGdldERlZmluaXRpb25PcHRpb25zXzEgPSByZXF1aXJlKFwiLi9nZXREZWZpbml0aW9uT3B0aW9uc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldERlZmluaXRpb25PcHRpb25zXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXREZWZpbml0aW9uT3B0aW9uc18xLmdldERlZmluaXRpb25PcHRpb25zOyB9IH0pO1xuY29uc3QgaW5zcGVjdENsYXNzXzEgPSByZXF1aXJlKFwiLi9pbnNwZWN0Q2xhc3NcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpbnNwZWN0Q2xhc3NcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGluc3BlY3RDbGFzc18xLmluc3BlY3RDbGFzczsgfSB9KTtcbmNvbnN0IGltcGxlbWVudF8xID0gcmVxdWlyZShcIi4vaW1wbGVtZW50XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaW1wbGVtZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpbXBsZW1lbnRfMS5pbXBsZW1lbnQ7IH0gfSk7XG5jb25zdCBtZXRob2RzXzEgPSByZXF1aXJlKFwiLi9tZXRob2RzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWV0aG9kc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWV0aG9kc18xLm1ldGhvZHM7IH0gfSk7XG5jb25zdCByZXF1ZXN0XzEgPSByZXF1aXJlKFwiLi9yZXF1ZXN0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVxdWVzdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVxdWVzdF8xLnJlcXVlc3Q7IH0gfSk7XG5jb25zdCBnZXRBcGlNZXRob2RzXzEgPSByZXF1aXJlKFwiLi9nZXRBcGlNZXRob2RzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0QXBpTWV0aG9kc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0QXBpTWV0aG9kc18xLmdldEFwaU1ldGhvZHM7IH0gfSk7XG5jb25zdCBnZXRTdG9yYWdlTWV0aG9kc18xID0gcmVxdWlyZShcIi4vZ2V0U3RvcmFnZU1ldGhvZHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRTdG9yYWdlTWV0aG9kc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0U3RvcmFnZU1ldGhvZHNfMS5nZXRTdG9yYWdlTWV0aG9kczsgfSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZYMmx1ZEdWeWJtRnNMMmx1WkdWNExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxHMUVRVUZuUkR0QlFXbENPVU1zT0VaQmFrSlBMRFpDUVVGaExFOUJhVUpRTzBGQmFFSm1MSEZFUVVGclJEdEJRV05vUkN3clJrRmtUeXdyUWtGQll5eFBRV05RTzBGQlltaENMR2xGUVVFNFJEdEJRV00xUkN4eFIwRmtUeXd5UTBGQmIwSXNUMEZqVUR0QlFXSjBRaXhwUkVGQk9FTTdRVUZSTlVNc05rWkJVazhzTWtKQlFWa3NUMEZSVUR0QlFWQmtMREpEUVVGM1F6dEJRVkYwUXl3d1JrRlNUeXh4UWtGQlV5eFBRVkZRTzBGQlVGZ3NkVU5CUVc5RE8wRkJVV3hETEhkR1FWSlBMR2xDUVVGUExFOUJVVkE3UVVGUVZDeDFRMEZCYjBNN1FVRlJiRU1zZDBaQlVrOHNhVUpCUVU4c1QwRlJVRHRCUVZCVUxHMUVRVUZuUkR0QlFWYzVReXc0UmtGWVR5dzJRa0ZCWVN4UFFWZFFPMEZCVm1Zc01rUkJRWGRFTzBGQlYzUkVMR3RIUVZoUExIRkRRVUZwUWl4UFFWZFFJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNvbnZlcnRUb1R5cGUgPSB2b2lkIDA7XG4vKipcbiAqIGNvbnZlcnRUb1R5cGVcbiAqIENyZWF0ZXMgYWxsIHVwcGVyIGNhc2Ugc3RyaW5nIHNlcGFyYXRpbmcgY2FwaXRhbGl6ZWQgd29yZHMgd2l0aCBhbiB1bmRlcnNjb3JlXG4gKi9cbmNvbnN0IGNvbnZlcnRUb1R5cGUgPSAocykgPT4ge1xuICAgIHJldHVybiBzXG4gICAgICAgID8gcy5yZXBsYWNlKC8oW2EtejAtOV18KD89W0EtWl0pKShbQS1aXSkvZywgXCIkMV8kMlwiKS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIDogbnVsbDtcbn07XG5leHBvcnRzLmNvbnZlcnRUb1R5cGUgPSBjb252ZXJ0VG9UeXBlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dWRtVnlkRlJ2Vkhsd1pTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5ZmFXNTBaWEp1WVd3dlkyOXVkbVZ5ZEZSdlZIbHdaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRVHM3TzBkQlIwYzdRVUZEU1N4TlFVRk5MR0ZCUVdFc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeEZRVUZGTzBsQlEzcERMRTlCUVU4c1EwRkJRenRSUVVOT0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRGhDUVVFNFFpeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMRmRCUVZjc1JVRkJSVHRSUVVOc1JTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMEZCUTFnc1EwRkJReXhEUVVGRE8wRkJTbGNzVVVGQlFTeGhRVUZoTEdsQ1FVbDRRaUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldEhvb2tPcHRpb25zID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCJAcmxlYW4vdXRpbHNcIik7XG5jb25zdCBSTGVhbl8xID0gcmVxdWlyZShcIi4uL1JMZWFuXCIpO1xuY29uc3QgY29udmVydFRvVHlwZV8xID0gcmVxdWlyZShcIi4vY29udmVydFRvVHlwZVwiKTtcbmNvbnN0IGdldEhvb2tPcHRpb25zID0gKG9wdGlvbnMpID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWZpbml0aW9uOiBudWxsLFxuICAgICAgICAgICAgcGFyYW1zOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgYm9keTogbnVsbCxcbiAgICAgICAgICAgIHNhdmU6IGZhbHNlLFxuICAgICAgICAgICAga2V5OiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBlbnRpdHlEZWZpbml0aW9ucyA9ICgwLCB1dGlsc18xLmdldFZhbHVlKShSTGVhbl8xLmRlZmF1bHQsIFwiY29uZmlnLmVudGl0aWVzXCIsIHt9KTtcbiAgICBjb25zdCBlbnRpdGllcyA9IE9iamVjdC52YWx1ZXMoZW50aXR5RGVmaW5pdGlvbnMpO1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBvcHRpb25zLmtleVxuICAgICAgICA/IGVudGl0aWVzLmZpbmQoKGVudGl0eSkgPT4gZW50aXR5LmtleSA9PT0gb3B0aW9ucy5rZXkpXG4gICAgICAgIDogKF9hID0gb3B0aW9ucy5lbnRpdHkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGw7XG4gICAgY29uc3Qga2V5ID0gZGVmaW5pdGlvbi5rZXk7XG4gICAgY29uc3QgYWRkID0gb3B0aW9ucy5hZGQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVmaW5pdGlvbixcbiAgICAgICAgcGFyYW1zOiAoX2IgPSBvcHRpb25zLnBhcmFtcykgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogbnVsbCxcbiAgICAgICAgdmFsdWU6IHR5cGVvZiBvcHRpb25zLnZhbHVlICE9PSBcInVuZGVmaW5lZFwiID8gb3B0aW9ucy52YWx1ZSA6IG51bGwsXG4gICAgICAgIHR5cGU6IGFkZCA/IGBBRERfJHsoMCwgY29udmVydFRvVHlwZV8xLmNvbnZlcnRUb1R5cGUpKGtleSl9YCA6IChfYyA9IG9wdGlvbnMudHlwZSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogbnVsbCxcbiAgICAgICAgYm9keTogKF9kID0gb3B0aW9ucy5ib2R5KSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiBudWxsLFxuICAgICAgICBzYXZlOiBvcHRpb25zLnNhdmUsXG4gICAgfTtcbn07XG5leHBvcnRzLmdldEhvb2tPcHRpb25zID0gZ2V0SG9va09wdGlvbnM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laMlYwU0c5dmEwOXdkR2x2Ym5NdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WDJsdWRHVnlibUZzTDJkbGRFaHZiMnRQY0hScGIyNXpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVRkJMSGREUVVGM1F6dEJRVU40UXl4dlEwRkJOa0k3UVVGRE4wSXNiVVJCUVdkRU8wRkJSM3BETEUxQlFVMHNZMEZCWXl4SFFVRkhMRU5CU1RWQ0xFOUJRVlVzUlVGRFRTeEZRVUZGT3p0SlFVTnNRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzFGQlExb3NUMEZCVHp0WlFVTk1MRlZCUVZVc1JVRkJSU3hKUVVGSk8xbEJRMmhDTEUxQlFVMHNSVUZCUlN4SlFVRkpPMWxCUTFvc1MwRkJTeXhGUVVGRkxFbEJRVWs3V1VGRFdDeEpRVUZKTEVWQlFVVXNTVUZCU1R0WlFVTldMRWxCUVVrc1JVRkJSU3hKUVVGSk8xbEJRMVlzU1VGQlNTeEZRVUZGTEV0QlFVczdXVUZEV0N4SFFVRkhMRVZCUVVVc1NVRkJTVHRUUVVOV0xFTkJRVU03UzBGRFNEdEpRVVZFTEUxQlFVMHNhVUpCUVdsQ0xFZEJRVWNzU1VGQlFTeG5Ra0ZCVVN4RlFVRkRMR1ZCUVVzc1JVRkJSU3hwUWtGQmFVSXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVOcVJTeE5RVUZOTEZGQlFWRXNSMEZEV2l4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1NVRkZia01zVFVGQlRTeFZRVUZWTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWRCUVVjN1VVRkROVUlzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRXRCUVVzc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF6dFJRVU4yUkN4RFFVRkRMRU5CUVVNc1RVRkJRU3hQUVVGUExFTkJRVU1zVFVGQlRTeHRRMEZCU1N4SlFVRkpMRU5CUVVNN1NVRkRNMElzVFVGQlRTeEhRVUZITEVkQlFVY3NWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJRenRKUVVNelFpeE5RVUZOTEVkQlFVY3NSMEZCUnl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRE8wbEJSWGhDTEU5QlFVODdVVUZEVEN4VlFVRlZPMUZCUTFZc1RVRkJUU3hGUVVGRkxFMUJRVUVzVDBGQlR5eERRVUZETEUxQlFVMHNiVU5CUVVrc1NVRkJTVHRSUVVNNVFpeExRVUZMTEVWQlFVVXNUMEZCVHl4UFFVRlBMRU5CUVVNc1MwRkJTeXhMUVVGTExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNUdFJRVU5zUlN4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVsQlFVRXNOa0pCUVdFc1JVRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRkJMRTlCUVU4c1EwRkJReXhKUVVGSkxHMURRVUZKTEVsQlFVazdVVUZET1VRc1NVRkJTU3hGUVVGRkxFMUJRVUVzVDBGQlR5eERRVUZETEVsQlFVa3NiVU5CUVVrc1NVRkJTVHRSUVVNeFFpeEpRVUZKTEVWQlFVVXNUMEZCVHl4RFFVRkRMRWxCUVVrN1MwRkRia0lzUTBGQlF6dEJRVU5LTEVOQlFVTXNRMEZCUXp0QlFYQkRWeXhSUVVGQkxHTkJRV01zYTBKQmIwTjZRaUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldERlZmluaXRpb25PcHRpb25zID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCJAcmxlYW4vdXRpbHNcIik7XG5jb25zdCBjb252ZXJ0VG9UeXBlXzEgPSByZXF1aXJlKFwiLi9jb252ZXJ0VG9UeXBlXCIpO1xuY29uc3QgZ2V0RGVmaW5pdGlvbk9wdGlvbnMgPSAoa2V5LCBvcHRpb25zKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaCwgX2osIF9rLCBfbCwgX20sIF9vLCBfcCwgX3EsIF9yLCBfcywgX3QsIF91LCBfdjtcbiAgICBjb25zdCBkZWZhdWx0VHlwZSA9IGBTRVRfJHsoMCwgY29udmVydFRvVHlwZV8xLmNvbnZlcnRUb1R5cGUpKGtleSl9YDtcbiAgICBjb25zdCBhZGRUeXBlID0gYEFERF8keygwLCBjb252ZXJ0VG9UeXBlXzEuY29udmVydFRvVHlwZSkoa2V5KX1gO1xuICAgIGNvbnN0IGdldEluaXRpYWxTdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB7IFtrZXldOiBudWxsIH07XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0VVJMKSB7XG4gICAgICAgICAgICB2YWx1ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhbHVlLmxhc3RVcGRhdGVkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgaW5pdGlhbFN0YXRlOiBnZXRJbml0aWFsU3RhdGUoKSxcbiAgICAgICAgYmFzZVVSTE92ZXJyaWRlOiBudWxsLFxuICAgICAgICBnZXRVUkw6IG51bGwsXG4gICAgICAgIHBvc3RVUkw6IG51bGwsXG4gICAgICAgIHB1dFVSTDogbnVsbCxcbiAgICAgICAgcGF0Y2hVUkw6IG51bGwsXG4gICAgICAgIGRlbGV0ZVVSTDogbnVsbCxcbiAgICAgICAgbnVsbGFibGVQYXJhbXM6IG51bGwsXG4gICAgICAgIHBlcnNpc3REYXRhOiB0cnVlLFxuICAgICAgICBwcmVmZXJTdG9yZTogZmFsc2UsXG4gICAgICAgIHByb2dyZXNzaXZlTG9hZGluZzogZmFsc2UsXG4gICAgICAgIHN5bmNJbnRlcnZhbDogbnVsbCxcbiAgICAgICAgc3luY0FmdGVyVGltZUVsYXBzZWQ6IGZhbHNlLFxuICAgICAgICBhZGFwdGVyczogbnVsbCxcbiAgICAgICAgaW5jbHVkZUluU3RhdGU6IHRydWUsXG4gICAgICAgIHF1ZXVlT2ZmbGluZTogZmFsc2UsXG4gICAgICAgIHR5cGU6IGRlZmF1bHRUeXBlLFxuICAgICAgICB1cGRhdGVTdGF0ZTogKHZhbHVlLCBnaXZlblR5cGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogZ2l2ZW5UeXBlICE9PSBudWxsICYmIGdpdmVuVHlwZSAhPT0gdm9pZCAwID8gZ2l2ZW5UeXBlIDogZGVmYXVsdFR5cGUsXG4gICAgICAgICAgICAgICAgW2tleV06IHZhbHVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVkdWNlcjogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGAke2RlZmF1bHRUeXBlfV9JU19MT0FESU5HYDpcbiAgICAgICAgICAgICAgICBjYXNlIGAke2RlZmF1bHRUeXBlfV9MQVNUX1VQREFURURgOlxuICAgICAgICAgICAgICAgIGNhc2UgYCR7ZGVmYXVsdFR5cGV9X0VSUk9SYDpcbiAgICAgICAgICAgICAgICBjYXNlIGRlZmF1bHRUeXBlOlxuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYW4gb2JqZWN0IGlmIHZhbHVlIGlzIGEgc3RyaW5nIG9yIG51bWJlci5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb25ba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgeyB2YWx1ZTogYWN0aW9uW2tleV0gfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gdmFsdWUgdG8gc2V0LCBjbGVhciBzdGF0ZSBmb3IgdGhpcyBkZWZpbml0aW9uLlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksIGFjdGlvbltrZXldKTtcbiAgICAgICAgICAgICAgICBjYXNlIGFkZFR5cGU6XG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0byBleGlzdGluZyBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICBpZiAoKDAsIHV0aWxzXzEuaGFzVmFsdWUpKHN0YXRlLCAnZGF0YScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksIHsgZGF0YTogW10uY29uY2F0KFtdLCAuLi5zdGF0ZS5kYXRhLCAuLi5hY3Rpb25ba2V5XS5kYXRhKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgYWN0aW9uW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsaXN0ZW5lcjogbnVsbCxcbiAgICAgICAgdHJhbnNmb3JtYXRpb246IG51bGwsXG4gICAgfTtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xuICAgIH1cbiAgICBjb25zdCBiYXNlVVJMT3ZlcnJpZGUgPSAoX2EgPSBvcHRpb25zLmJhc2VVUkxPdmVycmlkZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZGVmYXVsdE9wdGlvbnMuYmFzZVVSTE92ZXJyaWRlO1xuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IG9wdGlvbnMuaW5pdGlhbFN0YXRlXG4gICAgICAgID8geyBba2V5XTogb3B0aW9ucy5pbml0aWFsU3RhdGUgfVxuICAgICAgICA6IGRlZmF1bHRPcHRpb25zLmluaXRpYWxTdGF0ZTtcbiAgICBjb25zdCBnZXRVUkwgPSAoX2IgPSBvcHRpb25zLmdldFVSTCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogZGVmYXVsdE9wdGlvbnMuZ2V0VVJMO1xuICAgIGNvbnN0IHBvc3RVUkwgPSAoX2MgPSBvcHRpb25zLnBvc3RVUkwpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IGRlZmF1bHRPcHRpb25zLnBvc3RVUkw7XG4gICAgY29uc3QgcHV0VVJMID0gKF9kID0gb3B0aW9ucy5wdXRVUkwpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IGRlZmF1bHRPcHRpb25zLnB1dFVSTDtcbiAgICBjb25zdCBwYXRjaFVSTCA9IChfZSA9IG9wdGlvbnMucGF0Y2hVUkwpICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IGRlZmF1bHRPcHRpb25zLnBhdGNoVVJMO1xuICAgIGNvbnN0IGRlbGV0ZVVSTCA9IChfZiA9IG9wdGlvbnMuZGVsZXRlVVJMKSAhPT0gbnVsbCAmJiBfZiAhPT0gdm9pZCAwID8gX2YgOiBkZWZhdWx0T3B0aW9ucy5kZWxldGVVUkw7XG4gICAgY29uc3QgbnVsbGFibGVQYXJhbXMgPSAoX2cgPSBvcHRpb25zLm51bGxhYmxlUGFyYW1zKSAhPT0gbnVsbCAmJiBfZyAhPT0gdm9pZCAwID8gX2cgOiBkZWZhdWx0T3B0aW9ucy5udWxsYWJsZVBhcmFtcztcbiAgICBjb25zdCBwZXJzaXN0RGF0YSA9IChfaCA9IG9wdGlvbnMucGVyc2lzdERhdGEpICE9PSBudWxsICYmIF9oICE9PSB2b2lkIDAgPyBfaCA6IGRlZmF1bHRPcHRpb25zLnBlcnNpc3REYXRhO1xuICAgIGNvbnN0IHByZWZlclN0b3JlID0gKF9qID0gb3B0aW9ucy5wcmVmZXJTdG9yZSkgIT09IG51bGwgJiYgX2ogIT09IHZvaWQgMCA/IF9qIDogZGVmYXVsdE9wdGlvbnMucHJlZmVyU3RvcmU7XG4gICAgY29uc3QgcHJvZ3Jlc3NpdmVMb2FkaW5nID0gKF9rID0gb3B0aW9ucy5wcm9ncmVzc2l2ZUxvYWRpbmcpICE9PSBudWxsICYmIF9rICE9PSB2b2lkIDAgPyBfayA6IGRlZmF1bHRPcHRpb25zLnByb2dyZXNzaXZlTG9hZGluZztcbiAgICBjb25zdCBzeW5jSW50ZXJ2YWwgPSAoX2wgPSBvcHRpb25zLnN5bmNJbnRlcnZhbCkgIT09IG51bGwgJiYgX2wgIT09IHZvaWQgMCA/IF9sIDogZGVmYXVsdE9wdGlvbnMuc3luY0ludGVydmFsO1xuICAgIGNvbnN0IHN5bmNBZnRlclRpbWVFbGFwc2VkID0gKF9tID0gb3B0aW9ucy5zeW5jQWZ0ZXJUaW1lRWxhcHNlZCkgIT09IG51bGwgJiYgX20gIT09IHZvaWQgMCA/IF9tIDogZGVmYXVsdE9wdGlvbnMuc3luY0FmdGVyVGltZUVsYXBzZWQ7XG4gICAgY29uc3QgYWRhcHRlcnMgPSAoX28gPSBvcHRpb25zLmFkYXB0ZXJzKSAhPT0gbnVsbCAmJiBfbyAhPT0gdm9pZCAwID8gX28gOiBkZWZhdWx0T3B0aW9ucy5hZGFwdGVycztcbiAgICBjb25zdCBxdWV1ZU9mZmxpbmUgPSAoX3AgPSBvcHRpb25zLnF1ZXVlT2ZmbGluZSkgIT09IG51bGwgJiYgX3AgIT09IHZvaWQgMCA/IF9wIDogZGVmYXVsdE9wdGlvbnMucXVldWVPZmZsaW5lO1xuICAgIGNvbnN0IHR5cGUgPSAoX3EgPSBvcHRpb25zLnR5cGUpICE9PSBudWxsICYmIF9xICE9PSB2b2lkIDAgPyBfcSA6IGRlZmF1bHRPcHRpb25zLnR5cGU7XG4gICAgY29uc3QgdXBkYXRlU3RhdGUgPSAoX3IgPSBvcHRpb25zLnVwZGF0ZVN0YXRlKSAhPT0gbnVsbCAmJiBfciAhPT0gdm9pZCAwID8gX3IgOiBkZWZhdWx0T3B0aW9ucy51cGRhdGVTdGF0ZTtcbiAgICBjb25zdCByZWR1Y2VyID0gKF9zID0gb3B0aW9ucy5yZWR1Y2VyKSAhPT0gbnVsbCAmJiBfcyAhPT0gdm9pZCAwID8gX3MgOiBkZWZhdWx0T3B0aW9ucy5yZWR1Y2VyO1xuICAgIGNvbnN0IGluY2x1ZGVJblN0YXRlID0gKF90ID0gb3B0aW9ucy5pbmNsdWRlSW5TdGF0ZSkgIT09IG51bGwgJiYgX3QgIT09IHZvaWQgMCA/IF90IDogZGVmYXVsdE9wdGlvbnMuaW5jbHVkZUluU3RhdGU7XG4gICAgY29uc3QgbGlzdGVuZXIgPSAoX3UgPSBvcHRpb25zLmxpc3RlbmVyKSAhPT0gbnVsbCAmJiBfdSAhPT0gdm9pZCAwID8gX3UgOiBkZWZhdWx0T3B0aW9ucy5saXN0ZW5lcjtcbiAgICBjb25zdCB0cmFuc2Zvcm1hdGlvbiA9IChfdiA9IG9wdGlvbnMudHJhbnNmb3JtYXRpb24pICE9PSBudWxsICYmIF92ICE9PSB2b2lkIDAgPyBfdiA6IGRlZmF1bHRPcHRpb25zLnRyYW5zZm9ybWF0aW9uO1xuICAgIHJldHVybiB7XG4gICAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICAgICAgYmFzZVVSTE92ZXJyaWRlLFxuICAgICAgICBnZXRVUkwsXG4gICAgICAgIHBvc3RVUkwsXG4gICAgICAgIHB1dFVSTCxcbiAgICAgICAgcGF0Y2hVUkwsXG4gICAgICAgIGRlbGV0ZVVSTCxcbiAgICAgICAgbnVsbGFibGVQYXJhbXMsXG4gICAgICAgIHBlcnNpc3REYXRhLFxuICAgICAgICBwcmVmZXJTdG9yZSxcbiAgICAgICAgcHJvZ3Jlc3NpdmVMb2FkaW5nLFxuICAgICAgICBzeW5jSW50ZXJ2YWwsXG4gICAgICAgIHN5bmNBZnRlclRpbWVFbGFwc2VkLFxuICAgICAgICBhZGFwdGVycyxcbiAgICAgICAgcXVldWVPZmZsaW5lLFxuICAgICAgICB0eXBlLFxuICAgICAgICB1cGRhdGVTdGF0ZSxcbiAgICAgICAgcmVkdWNlcixcbiAgICAgICAgaW5jbHVkZUluU3RhdGUsXG4gICAgICAgIGxpc3RlbmVyLFxuICAgICAgICB0cmFuc2Zvcm1hdGlvbixcbiAgICB9O1xufTtcbmV4cG9ydHMuZ2V0RGVmaW5pdGlvbk9wdGlvbnMgPSBnZXREZWZpbml0aW9uT3B0aW9ucztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVoyVjBSR1ZtYVc1cGRHbHZiazl3ZEdsdmJuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlgybHVkR1Z5Ym1Gc0wyZGxkRVJsWm1sdWFYUnBiMjVQY0hScGIyNXpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVTkJMSGREUVVGM1F6dEJRVU40UXl4dFJFRkJaMFE3UVVGRmVrTXNUVUZCVFN4dlFrRkJiMElzUjBGQlJ5eERRVU5zUXl4SFFVRlhMRVZCUTFnc1QwRkJkME1zUlVGRGVFTXNSVUZCUlRzN1NVRkRSaXhOUVVGTkxGZEJRVmNzUjBGQlJ5eFBRVUZQTEVsQlFVRXNOa0pCUVdFc1JVRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETzBsQlEyaEVMRTFCUVUwc1QwRkJUeXhIUVVGSExFOUJRVThzU1VGQlFTdzJRa0ZCWVN4RlFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU03U1VGRk5VTXNUVUZCVFN4bFFVRmxMRWRCUVVjc1IwRkJSeXhGUVVGRk8xRkJRek5DTEUxQlFVMHNTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVVTVRaXhKUVVGSkxFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUXpkQ0xFdEJRVXNzUTBGQlF5eFRRVUZUTEVkQlFVY3NTMEZCU3l4RFFVRkRPMWxCUTNoQ0xFdEJRVXNzUTBGQlF5eFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRPMU5CUXpGQ08xRkJSVVFzVDBGQlR5eExRVUZMTEVOQlFVTTdTVUZEWml4RFFVRkRMRU5CUVVNN1NVRkZSaXhOUVVGTkxHTkJRV01zUjBGQlJ6dFJRVU55UWl4WlFVRlpMRVZCUVVVc1pVRkJaU3hGUVVGRk8xRkJReTlDTEdWQlFXVXNSVUZCUlN4SlFVRkpPMUZCUTNKQ0xFMUJRVTBzUlVGQlJTeEpRVUZKTzFGQlExb3NUMEZCVHl4RlFVRkZMRWxCUVVrN1VVRkRZaXhOUVVGTkxFVkJRVVVzU1VGQlNUdFJRVU5hTEZGQlFWRXNSVUZCUlN4SlFVRkpPMUZCUTJRc1UwRkJVeXhGUVVGRkxFbEJRVWs3VVVGRFppeGpRVUZqTEVWQlFVVXNTVUZCU1R0UlFVTndRaXhYUVVGWExFVkJRVVVzU1VGQlNUdFJRVU5xUWl4WFFVRlhMRVZCUVVVc1MwRkJTenRSUVVOc1FpeHJRa0ZCYTBJc1JVRkJSU3hMUVVGTE8xRkJRM3BDTEZsQlFWa3NSVUZCUlN4SlFVRkpPMUZCUTJ4Q0xHOUNRVUZ2UWl4RlFVRkZMRXRCUVVzN1VVRkRNMElzVVVGQlVTeEZRVUZGTEVsQlFVazdVVUZEWkN4alFVRmpMRVZCUVVVc1NVRkJTVHRSUVVOd1FpeFpRVUZaTEVWQlFVVXNTMEZCU3p0UlFVTnVRaXhKUVVGSkxFVkJRVVVzVjBGQlZ6dFJRVU5xUWl4WFFVRlhMRVZCUVVVc1EwRkJReXhMUVVGVkxFVkJRVVVzVTBGQmFVSXNSVUZCUlN4RlFVRkZPMWxCUXpkRExFOUJRVTg3WjBKQlEwd3NTVUZCU1N4RlFVRkZMRk5CUVZNc1lVRkJWQ3hUUVVGVExHTkJRVlFzVTBGQlV5eEhRVUZKTEZkQlFWYzdaMEpCUXpsQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3p0aFFVTmlMRU5CUVVNN1VVRkRTaXhEUVVGRE8xRkJRMFFzVDBGQlR5eEZRVUZGTEVOQlFVa3NTMEZCY1VJc1JVRkJSU3hOUVVGclFpeEZRVUZGTEVWQlFVVTdXVUZEZUVRc1VVRkJVU3hOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTzJkQ1FVTnVRaXhMUVVGTExFZEJRVWNzVjBGQlZ5eGhRVUZoTEVOQlFVTTdaMEpCUTJwRExFdEJRVXNzUjBGQlJ5eFhRVUZYTEdWQlFXVXNRMEZCUXp0blFrRkRia01zUzBGQlN5eEhRVUZITEZkQlFWY3NVVUZCVVN4RFFVRkRPMmRDUVVNMVFpeExRVUZMTEZkQlFWYzdiMEpCUTJRc2JVUkJRVzFFTzI5Q1FVTnVSQ3hKUVVGSkxFOUJRVThzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRkZCUVZFc1JVRkJSVHQzUWtGRGJrTXNkVU5CUTBzc1MwRkJTeXhMUVVOU0xFdEJRVXNzUlVGQlJTeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUTJ4Q08zRkNRVU5JTzI5Q1FVVkVMR2RGUVVGblJUdHZRa0ZEYUVVc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0M1FrRkRhRUlzVDBGQlR5eEpRVUZKTEVOQlFVTTdjVUpCUTJJN2IwSkJSVVFzZFVOQlEwc3NTMEZCU3l4SFFVTk1MRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGRFpEdG5Ra0ZGU2l4TFFVRkxMRTlCUVU4N2IwSkJRMVlzZDBKQlFYZENPMjlDUVVONFFpeEpRVUZKTEVsQlFVRXNaMEpCUVZFc1JVRkJReXhMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVWQlFVVTdkMEpCUXpOQ0xIVkRRVU5MTEV0QlFVc3NTMEZEVWl4SlFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGRFlpeEZRVUZGTEVWQlEwWXNSMEZCU1N4TFFVRkxMRU5CUVVNc1NVRkJPRUlzUlVGRGVFTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVU53UWl4SlFVTkVPM0ZDUVVOSU8zbENRVUZOTzNkQ1FVTk1MSFZEUVVOTExFdEJRVXNzUjBGRFRDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUTJRN2NVSkJRMGc3WjBKQlJVZzdiMEpCUTBVc1QwRkJUeXhMUVVGTExFTkJRVU03WVVGRGFFSTdVVUZEU0N4RFFVRkRPMUZCUTBRc1VVRkJVU3hGUVVGRkxFbEJRVWs3VVVGRFpDeGpRVUZqTEVWQlFVVXNTVUZCU1R0TFFVTnlRaXhEUVVGRE8wbEJSVVlzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0UlFVTmFMRTlCUVU4c1kwRkJZeXhEUVVGRE8wdEJRM1pDTzBsQlJVUXNUVUZCVFN4bFFVRmxMRWRCUTI1Q0xFMUJRVUVzVDBGQlR5eERRVUZETEdWQlFXVXNiVU5CUVVrc1kwRkJZeXhEUVVGRExHVkJRV1VzUTBGQlF6dEpRVU0xUkN4TlFVRk5MRmxCUVZrc1IwRkJSeXhQUVVGUExFTkJRVU1zV1VGQldUdFJRVU4yUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEU5QlFVOHNRMEZCUXl4WlFVRlpMRVZCUVVVN1VVRkRha01zUTBGQlF5eERRVUZETEdOQlFXTXNRMEZCUXl4WlFVRlpMRU5CUVVNN1NVRkRhRU1zVFVGQlRTeE5RVUZOTEVkQlFVY3NUVUZCUVN4UFFVRlBMRU5CUVVNc1RVRkJUU3h0UTBGQlNTeGpRVUZqTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTNaRUxFMUJRVTBzVDBGQlR5eEhRVUZITEUxQlFVRXNUMEZCVHl4RFFVRkRMRTlCUVU4c2JVTkJRVWtzWTBGQll5eERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTXhSQ3hOUVVGTkxFMUJRVTBzUjBGQlJ5eE5RVUZCTEU5QlFVOHNRMEZCUXl4TlFVRk5MRzFEUVVGSkxHTkJRV01zUTBGQlF5eE5RVUZOTEVOQlFVTTdTVUZEZGtRc1RVRkJUU3hSUVVGUkxFZEJRVWNzVFVGQlFTeFBRVUZQTEVOQlFVTXNVVUZCVVN4dFEwRkJTU3hqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETzBsQlF6ZEVMRTFCUVUwc1UwRkJVeXhIUVVGSExFMUJRVUVzVDBGQlR5eERRVUZETEZOQlFWTXNiVU5CUVVrc1kwRkJZeXhEUVVGRExGTkJRVk1zUTBGQlF6dEpRVU5vUlN4TlFVRk5MR05CUVdNc1IwRkRiRUlzVFVGQlFTeFBRVUZQTEVOQlFVTXNZMEZCWXl4dFEwRkJTU3hqUVVGakxFTkJRVU1zWTBGQll5eERRVUZETzBsQlF6RkVMRTFCUVUwc1YwRkJWeXhIUVVGSExFMUJRVUVzVDBGQlR5eERRVUZETEZkQlFWY3NiVU5CUVVrc1kwRkJZeXhEUVVGRExGZEJRVmNzUTBGQlF6dEpRVU4wUlN4TlFVRk5MRmRCUVZjc1IwRkJSeXhOUVVGQkxFOUJRVThzUTBGQlF5eFhRVUZYTEcxRFFVRkpMR05CUVdNc1EwRkJReXhYUVVGWExFTkJRVU03U1VGRGRFVXNUVUZCVFN4clFrRkJhMElzUjBGRGRFSXNUVUZCUVN4UFFVRlBMRU5CUVVNc2EwSkJRV3RDTEcxRFFVRkpMR05CUVdNc1EwRkJReXhyUWtGQmEwSXNRMEZCUXp0SlFVTnNSU3hOUVVGTkxGbEJRVmtzUjBGQlJ5eE5RVUZCTEU5QlFVOHNRMEZCUXl4WlFVRlpMRzFEUVVGSkxHTkJRV01zUTBGQlF5eFpRVUZaTEVOQlFVTTdTVUZEZWtVc1RVRkJUU3h2UWtGQmIwSXNSMEZEZUVJc1RVRkJRU3hQUVVGUExFTkJRVU1zYjBKQlFXOUNMRzFEUVVGSkxHTkJRV01zUTBGQlF5eHZRa0ZCYjBJc1EwRkJRenRKUVVOMFJTeE5RVUZOTEZGQlFWRXNSMEZCUnl4TlFVRkJMRTlCUVU4c1EwRkJReXhSUVVGUkxHMURRVUZKTEdOQlFXTXNRMEZCUXl4UlFVRlJMRU5CUVVNN1NVRkROMFFzVFVGQlRTeFpRVUZaTEVkQlFVY3NUVUZCUVN4UFFVRlBMRU5CUVVNc1dVRkJXU3h0UTBGQlNTeGpRVUZqTEVOQlFVTXNXVUZCV1N4RFFVRkRPMGxCUTNwRkxFMUJRVTBzU1VGQlNTeEhRVUZITEUxQlFVRXNUMEZCVHl4RFFVRkRMRWxCUVVrc2JVTkJRVWtzWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTnFSQ3hOUVVGTkxGZEJRVmNzUjBGQlJ5eE5RVUZCTEU5QlFVOHNRMEZCUXl4WFFVRlhMRzFEUVVGSkxHTkJRV01zUTBGQlF5eFhRVUZYTEVOQlFVTTdTVUZEZEVVc1RVRkJUU3hQUVVGUExFZEJRVWNzVFVGQlFTeFBRVUZQTEVOQlFVTXNUMEZCVHl4dFEwRkJTU3hqUVVGakxFTkJRVU1zVDBGQlR5eERRVUZETzBsQlF6RkVMRTFCUVUwc1kwRkJZeXhIUVVOc1FpeE5RVUZCTEU5QlFVOHNRMEZCUXl4alFVRmpMRzFEUVVGSkxHTkJRV01zUTBGQlF5eGpRVUZqTEVOQlFVTTdTVUZETVVRc1RVRkJUU3hSUVVGUkxFZEJRVWNzVFVGQlFTeFBRVUZQTEVOQlFVTXNVVUZCVVN4dFEwRkJTU3hqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETzBsQlF6ZEVMRTFCUVUwc1kwRkJZeXhIUVVOc1FpeE5RVUZCTEU5QlFVOHNRMEZCUXl4alFVRmpMRzFEUVVGSkxHTkJRV01zUTBGQlF5eGpRVUZqTEVOQlFVTTdTVUZGTVVRc1QwRkJUenRSUVVOTUxGbEJRVms3VVVGRFdpeGxRVUZsTzFGQlEyWXNUVUZCVFR0UlFVTk9MRTlCUVU4N1VVRkRVQ3hOUVVGTk8xRkJRMDRzVVVGQlVUdFJRVU5TTEZOQlFWTTdVVUZEVkN4alFVRmpPMUZCUTJRc1YwRkJWenRSUVVOWUxGZEJRVmM3VVVGRFdDeHJRa0ZCYTBJN1VVRkRiRUlzV1VGQldUdFJRVU5hTEc5Q1FVRnZRanRSUVVOd1FpeFJRVUZSTzFGQlExSXNXVUZCV1R0UlFVTmFMRWxCUVVrN1VVRkRTaXhYUVVGWE8xRkJRMWdzVDBGQlR6dFJRVU5RTEdOQlFXTTdVVUZEWkN4UlFVRlJPMUZCUTFJc1kwRkJZenRMUVVObUxFTkJRVU03UVVGRFNpeERRVUZETEVOQlFVTTdRVUZ5U2xjc1VVRkJRU3h2UWtGQmIwSXNkMEpCY1VvdlFpSjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaW5zcGVjdENsYXNzID0gdm9pZCAwO1xuY29uc3QgaW5zcGVjdENsYXNzID0gKG9iaikgPT4ge1xuICAgIGxldCBjbGFzc05hbWU7XG4gICAgbGV0IGF0dHJpYnV0ZXMgPSB7fTtcbiAgICBjb25zdCBtZXRob2RzID0gW107XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IG9iakNsYXNzO1xuICAgICAgICBpZiAodHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvYmpDbGFzcyA9IG9iai5jb25zdHJ1Y3RvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9iakNsYXNzID0gb2JqO1xuICAgICAgICB9XG4gICAgICAgIGNsYXNzTmFtZSA9IG9iakNsYXNzLm5hbWU7XG4gICAgICAgIGNvbnN0IGNsYXNzUHJvdG8gPSBvYmpDbGFzcy5wcm90b3R5cGU7XG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNsYXNzUHJvdG8pLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0eXBlb2YgY2xhc3NQcm90b1ttXTtcbiAgICAgICAgICAgIGlmICh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBtZXRob2RzLnB1c2gobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzW21dID0gY2xhc3NQcm90b1ttXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY2xhc3NOYW1lID0gXCJ1bmRlZmluZWRcIjtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgICByZXR1cm4geyBDbGFzc05hbWU6IGNsYXNzTmFtZSwgTWV0aG9kczogbWV0aG9kcywgQXR0cmlidXRlczogYXR0cmlidXRlcyB9O1xufTtcbmV4cG9ydHMuaW5zcGVjdENsYXNzID0gaW5zcGVjdENsYXNzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1emNHVmpkRU5zWVhOekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDE5cGJuUmxjbTVoYkM5cGJuTndaV04wUTJ4aGMzTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVOHNUVUZCVFN4WlFVRlpMRWRCUVVjc1EwRkJReXhIUVVGWExFVkJRVVVzUlVGQlJUdEpRVU14UXl4SlFVRkpMRk5CUVdsQ0xFTkJRVU03U1VGRGRFSXNTVUZCU1N4VlFVRlZMRWRCUVVjc1JVRkJSU3hEUVVGRE8wbEJRM0JDTEUxQlFVMHNUMEZCVHl4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVWdVFpeEpRVUZKTzFGQlEwWXNTVUZCU1N4UlFVRmhMRU5CUVVNN1VVRkZiRUlzU1VGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4VlFVRlZMRVZCUVVVN1dVRkROMElzVVVGQlVTeEhRVUZITEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNN1UwRkROVUk3WVVGQlRUdFpRVU5NTEZGQlFWRXNSMEZCUnl4SFFVRkhMRU5CUVVNN1UwRkRhRUk3VVVGRlJDeFRRVUZUTEVkQlFVY3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJRenRSUVVNeFFpeE5RVUZOTEZWQlFWVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1UwRkJVeXhEUVVGRE8xRkJSWFJETEUxQlFVMHNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRE8xbEJRM2hFTEUxQlFVMHNRMEZCUXl4SFFVRkhMRTlCUVU4c1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlJTOUNMRWxCUVVrc1EwRkJReXhMUVVGTExGVkJRVlVzUlVGQlJUdG5Ra0ZEY0VJc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTnFRanRwUWtGQlRUdG5Ra0ZEVEN4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUXk5Q08xRkJRMGdzUTBGQlF5eERRVUZETEVOQlFVTTdTMEZEU2p0SlFVRkRMRTlCUVU4c1IwRkJSeXhGUVVGRk8xRkJRMW9zVTBGQlV5eEhRVUZITEZkQlFWY3NRMEZCUXp0UlFVTjRRaXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMHRCUTNCQ08wbEJSVVFzVDBGQlR5eEZRVUZGTEZOQlFWTXNSVUZCUlN4VFFVRlRMRVZCUVVVc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRU5CUVVNN1FVRkROVVVzUTBGQlF5eERRVUZETzBGQmFFTlhMRkZCUVVFc1dVRkJXU3huUWtGblEzWkNJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmltcGxlbWVudCA9IHZvaWQgMDtcbmNvbnN0IF8xID0gcmVxdWlyZShcIi4vXCIpO1xuY29uc3QgaW1wbGVtZW50ID0gKHRlc3RhYmxlQ2xhc3MsIHJ1bGVzKSA9PiB7XG4gICAgY29uc3QgZ2l2ZW4gPSAoMCwgXzEuaW5zcGVjdENsYXNzKSh0ZXN0YWJsZUNsYXNzKTtcbiAgICAvLyBUaGUgaW5zcGVjdGlvbiBtZXNzYWdlIHdlIHNlbmQgYmFjayB0byBnaXZlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBpbnRlcmZhY2UgY2hlY2suXG4gICAgY29uc3QgaW5zcGVjdGlvbk1lc3NhZ2UgPSB7XG4gICAgICAgIHJ1bGVzLFxuICAgICAgICBnaXZlbixcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlwiLFxuICAgICAgICAgICAgaW52YWxpZE1ldGhvZHM6IFtdLFxuICAgICAgICAgICAgbWV0aG9kc05vdEluY2x1ZGVkOiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgcGFzc2VkOiB0cnVlLFxuICAgIH07XG4gICAgY29uc3QgcnVsZXNEaWZmZXJlbnRpYWwgPSBydWxlcy5tZXRob2RzLmZpbHRlcigobWV0aG9kKSA9PiB7XG4gICAgICAgIGlmIChnaXZlbi5NZXRob2RzLmluZGV4T2YobWV0aG9kKSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2Q7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAocnVsZXNEaWZmZXJlbnRpYWwubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGluc3BlY3Rpb25NZXNzYWdlLmVycm9yLnR5cGUgPSBcIk1ldGhvZEVycm9yXCI7XG4gICAgICAgIGluc3BlY3Rpb25NZXNzYWdlLnBhc3NlZCA9IGZhbHNlO1xuICAgICAgICBpbnNwZWN0aW9uTWVzc2FnZS5lcnJvci5pbnZhbGlkTWV0aG9kcyA9IFtdO1xuICAgICAgICBpbnNwZWN0aW9uTWVzc2FnZS5lcnJvci5tZXRob2RzTm90SW5jbHVkZWQgPSBydWxlc0RpZmZlcmVudGlhbDtcbiAgICAgICAgaW5zcGVjdGlvbk1lc3NhZ2UuZXJyb3IubWVzc2FnZSA9IGAke2luc3BlY3Rpb25NZXNzYWdlLmVycm9yLnR5cGV9OiBJbiBjbGFzcyAke2luc3BlY3Rpb25NZXNzYWdlLmdpdmVuLkNsYXNzTmFtZX0sIHdlIGNvdWxkIG5vdCBmaW5kIHJlcXVpcmVkIG1ldGhvZHMgJHtpbnNwZWN0aW9uTWVzc2FnZS5lcnJvci5tZXRob2RzTm90SW5jbHVkZWR9YDtcbiAgICB9XG4gICAgcmV0dXJuIGluc3BlY3Rpb25NZXNzYWdlO1xufTtcbmV4cG9ydHMuaW1wbGVtZW50ID0gaW1wbGVtZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVcxd2JHVnRaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMTlwYm5SbGNtNWhiQzlwYlhCc1pXMWxiblF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzZVVKQlFXdERPMEZCUlROQ0xFMUJRVTBzVTBGQlV5eEhRVUZITEVOQlEzWkNMR0ZCUVhGQ0xFVkJRM0pDTEV0QlFUUkNMRVZCUXpWQ0xFVkJRVVU3U1VGRFJpeE5RVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkJMR1ZCUVZrc1JVRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dEpRVVV4UXl4eFJrRkJjVVk3U1VGRGNrWXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ6dFJRVU40UWl4TFFVRkxPMUZCUTB3c1MwRkJTenRSUVVOTUxFdEJRVXNzUlVGQlJUdFpRVU5NTEVsQlFVa3NSVUZCUlN4RlFVRkZPMWxCUTFJc1QwRkJUeXhGUVVGRkxFVkJRVVU3V1VGRFdDeGpRVUZqTEVWQlFVVXNSVUZCUlR0WlFVTnNRaXhyUWtGQmEwSXNSVUZCUlN4RlFVRkZPMU5CUTNaQ08xRkJRMFFzVFVGQlRTeEZRVUZGTEVsQlFVazdTMEZEWWl4RFFVRkRPMGxCUlVZc1RVRkJUU3hwUWtGQmFVSXNSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4RlFVRkZPMUZCUTNoRUxFbEJRVWtzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlEzSkRMRTlCUVU4c1RVRkJUU3hEUVVGRE8xTkJRMlk3U1VGRFNDeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVVklMRWxCUVVrc2FVSkJRV2xDTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1JVRkJSVHRSUVVOc1F5eHBRa0ZCYVVJc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEhRVUZITEdGQlFXRXNRMEZCUXp0UlFVTTNReXhwUWtGQmFVSXNRMEZCUXl4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRMnBETEdsQ1FVRnBRaXhEUVVGRExFdEJRVXNzUTBGQlF5eGpRVUZqTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUXpWRExHbENRVUZwUWl4RFFVRkRMRXRCUVVzc1EwRkJReXhyUWtGQmEwSXNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dFJRVU12UkN4cFFrRkJhVUlzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1kwRkJZeXhwUWtGQmFVSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXgzUTBGQmQwTXNhVUpCUVdsQ0xFTkJRVU1zUzBGQlN5eERRVUZETEd0Q1FVRnJRaXhGUVVGRkxFTkJRVU03UzBGRGRFMDdTVUZGUkN4UFFVRlBMR2xDUVVGcFFpeERRVUZETzBGQlF6TkNMRU5CUVVNc1EwRkJRenRCUVd4RFZ5eFJRVUZCTEZOQlFWTXNZVUZyUTNCQ0luMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubWV0aG9kcyA9IHZvaWQgMDtcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5leHBvcnRzLm1ldGhvZHMgPSB0eXBlc18xLkFQSV9NRVRIT0Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV1YwYUc5a2N5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5ZmFXNTBaWEp1WVd3dmJXVjBhRzlrY3k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN4dlEwRkJjME03UVVGRmVrSXNVVUZCUVN4UFFVRlBMRWRCUVVjc2EwSkJRVlVzUTBGQlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQVBJX01FVEhPRCA9IHZvaWQgMDtcbi8qKlxuICogQVBJIG1ldGhvZHNcbiAqL1xudmFyIEFQSV9NRVRIT0Q7XG4oZnVuY3Rpb24gKEFQSV9NRVRIT0QpIHtcbiAgICBBUElfTUVUSE9EW1wiREVMRVRFXCJdID0gXCJERUxFVEVcIjtcbiAgICBBUElfTUVUSE9EW1wiR0VUXCJdID0gXCJHRVRcIjtcbiAgICBBUElfTUVUSE9EW1wiUEFUQ0hcIl0gPSBcIlBBVENIXCI7XG4gICAgQVBJX01FVEhPRFtcIlBPU1RcIl0gPSBcIlBPU1RcIjtcbiAgICBBUElfTUVUSE9EW1wiUFVUXCJdID0gXCJQVVRcIjtcbn0pKEFQSV9NRVRIT0QgPSBleHBvcnRzLkFQSV9NRVRIT0QgfHwgKGV4cG9ydHMuQVBJX01FVEhPRCA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSGx3WlhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZkSGx3WlhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCYzBSQk96dEhRVVZITzBGQlEwZ3NTVUZCV1N4VlFVMVlPMEZCVGtRc1YwRkJXU3hWUVVGVk8wbEJRM0JDTEN0Q1FVRnBRaXhEUVVGQk8wbEJRMnBDTEhsQ1FVRlhMRU5CUVVFN1NVRkRXQ3cyUWtGQlpTeERRVUZCTzBsQlEyWXNNa0pCUVdFc1EwRkJRVHRKUVVOaUxIbENRVUZYTEVOQlFVRTdRVUZEWWl4RFFVRkRMRVZCVGxjc1ZVRkJWU3hIUVVGV0xHdENRVUZWTEV0QlFWWXNhMEpCUVZVc1VVRk5ja0lpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZXF1ZXN0ID0gZXhwb3J0cy5mb3JtYXRQYXRoID0gdm9pZCAwO1xuY29uc3QgUkxlYW5fMSA9IHJlcXVpcmUoXCIuLi9STGVhblwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiQHJsZWFuL3V0aWxzXCIpO1xuY29uc3QgZ2V0QXBpTWV0aG9kc18xID0gcmVxdWlyZShcIi4vZ2V0QXBpTWV0aG9kc1wiKTtcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5jb25zdCBmb3JtYXRQYXRoID0gKHBhdGgsIHBheWxvYWRRdWVyeSwgcGF5bG9hZEJvZHksIG1ldGhvZCwgbnVsbGFibGVQYXJhbXMpID0+IHtcbiAgICAvLyBDaGVjayBmb3IgbnVsbCBwYXJhbXMgaWYgdGhleSBhcmVuJ3QgYWxsb3dlZC5cbiAgICBpZiAoIW51bGxhYmxlUGFyYW1zKSB7XG4gICAgICAgIGlmIChwYXlsb2FkUXVlcnkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwYXlsb2FkUXVlcnkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBheWxvYWRRdWVyeVtrZXldID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkUXVlcnlba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXJhbXMgY2Fubm90IGJlIG51bGwuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBheWxvYWRCb2R5KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGF5bG9hZEJvZHkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBheWxvYWRCb2R5W2tleV0gPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWRCb2R5W2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFyYW1zIGNhbm5vdCBiZSBudWxsLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIElmIHRoZSByZXF1ZXN0IGhhcyBubyBwYXJhbXMsIHJldHVybiB0aGUgYmFzZSBwYXRoLlxuICAgIGlmIChwYXRoICYmICFwYXlsb2FkUXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuICAgIC8vIElmIHBheWxvYWRRdWVyeSBleGlzdHMsIHJldHVybiB0aGUgcGF0aCB3aXRoIHRoZSBwYXJhbXMgYXBwZW5kZWQuXG4gICAgaWYgKHBhdGggJiYgcGF5bG9hZFF1ZXJ5KSB7XG4gICAgICAgIGxldCByZXR1cm5WYWx1ZSA9ICcnO1xuICAgICAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgYWxsIHBheWxvYWQga2V5cy5cbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmdLZXlzID0gW107XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwYXlsb2FkUXVlcnkpIHtcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nS2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVwbGFjZSBhbGwgdGhlIDprZXkgaW5zdGFuY2VzIHdpdGggdGhlIGFjdHVhbCB2YWx1ZXMgZ2l2ZW4uXG4gICAgICAgIHJldHVyblZhbHVlID0gcGF0aFxuICAgICAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgICAgIC5tYXAoc2VjdGlvbiA9PiB7XG4gICAgICAgICAgICBpZiAoc2VjdGlvbi5pbmNsdWRlcygnOicpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gc2VjdGlvbi5tYXRjaCgvOiguKikvKS5wb3AoKTtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUga2V5IGZyb20gcXVlcnlTdHJpbmdLZXlzIGFycmF5IHNpbmNlIGl0IGlzIGEgcGF0aCBwYXJhbS5cbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHF1ZXJ5U3RyaW5nS2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgICAgICAgICAgcXVlcnlTdHJpbmdLZXlzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb24ucmVwbGFjZSgnOicgKyBrZXksIHBheWxvYWRRdWVyeVtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJy8nKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBbXTtcbiAgICAgICAgLy8gQ3JlYXRlIHF1ZXJ5IHN0cmluZyB3aXRoIHF1ZXJ5IHN0cmluZyBwYXJhbXMuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwYXlsb2FkUXVlcnkpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeVN0cmluZ0tleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LnB1c2goYCR7a2V5fT0ke3BheWxvYWRRdWVyeVtrZXldfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChxdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSArPSAnPycgKyBxdWVyeS5qb2luKCcmJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cbiAgICB0aHJvdyBFcnJvcignQ291bGQgbm90IGZvcm1hdCB0aGUgcGF0aC4nKTtcbn07XG5leHBvcnRzLmZvcm1hdFBhdGggPSBmb3JtYXRQYXRoO1xuY29uc3QgcmVxdWVzdCA9IGFzeW5jIChwYXlsb2FkLCBkZWZpbml0aW9uLCBtZXRob2QpID0+IHtcbiAgICBjb25zdCB7IGdldCwgcG9zdCwgZGVsLCBwdXQsIHBhdGNoIH0gPSAoMCwgZ2V0QXBpTWV0aG9kc18xLmdldEFwaU1ldGhvZHMpKGRlZmluaXRpb24pO1xuICAgIGNvbnN0IG51bGxhYmxlUGFyYW1zID0gZGVmaW5pdGlvbi5udWxsYWJsZVBhcmFtcztcbiAgICBjb25zdCBiYXNlVVJMT3ZlcnJpZGUgPSBkZWZpbml0aW9uLmJhc2VVUkxPdmVycmlkZTtcbiAgICAvLyBAdG9kbyB0eXBlIGhlYWRlcnMgb24gUkxlYW5Db25maWcgdHlwZVxuICAgIGxldCBoZWFkZXJzID0gKDAsIHV0aWxzXzEuZ2V0VmFsdWUpKFJMZWFuXzEuZGVmYXVsdCwgJ2NvbmZpZy5hcGkuaGVhZGVycycsIHt9KTtcbiAgICBjb25zdCB1cmwgPSBiYXNlVVJMT3ZlcnJpZGVcbiAgICAgICAgPyBiYXNlVVJMT3ZlcnJpZGVcbiAgICAgICAgOiAoMCwgdXRpbHNfMS5nZXRWYWx1ZSkoUkxlYW5fMS5kZWZhdWx0LCAnY29uZmlnLmFwaS5iYXNlVVJMJywgJycpO1xuICAgIGNvbnN0IHRva2VuID0gKDAsIHV0aWxzXzEuZ2V0VmFsdWUpKFJMZWFuXzEuZGVmYXVsdCwgJ2NvbmZpZy5hcGkudG9rZW4nLCBudWxsKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Rva2VufWA7XG4gICAgfVxuICAgIGNvbnN0IHBhdGggPSAoMCwgZXhwb3J0cy5mb3JtYXRQYXRoKShwYXlsb2FkLnBhdGgsIHBheWxvYWQucXVlcnksIHBheWxvYWQuYm9keSwgbWV0aG9kLCBudWxsYWJsZVBhcmFtcyk7XG4gICAgLy8gTm8gcGF0aCBzcGVjaWZpZWQuIFJldHVybiB1bmRlZmluZWQuXG4gICAgaWYgKHBhdGggPT09IHVuZGVmaW5lZCB8fCBwYXRoID09PSAnJykge1xuICAgICAgICBjb25zb2xlLndhcm4oYFBhdGggaXMgcmVxdWlyZWQuYCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYXBpUGF5bG9hZCA9IHtcbiAgICAgICAgdXJsOiB1cmwgKyBwYXRoLFxuICAgICAgICBkYXRhOiBwYXlsb2FkLmJvZHksXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIHNpZ25hbDogcGF5bG9hZC5zaWduYWwsXG4gICAgfTtcbiAgICBsZXQgcmVzID0gbnVsbDtcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgICBjYXNlIHR5cGVzXzEuQVBJX01FVEhPRC5HRVQ6XG4gICAgICAgICAgICByZXMgPSBhd2FpdCBnZXQoYXBpUGF5bG9hZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSB0eXBlc18xLkFQSV9NRVRIT0QuUE9TVDpcbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IHBvc3QoYXBpUGF5bG9hZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSB0eXBlc18xLkFQSV9NRVRIT0QuREVMRVRFOlxuICAgICAgICAgICAgcmVzID0gYXdhaXQgZGVsKGFwaVBheWxvYWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgdHlwZXNfMS5BUElfTUVUSE9ELlBVVDpcbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IHB1dChhcGlQYXlsb2FkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHR5cGVzXzEuQVBJX01FVEhPRC5QQVRDSDpcbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IHBhdGNoKGFwaVBheWxvYWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmtub3duIEFQSSBtZXRob2Qgc3BlY2lmaWVkLicpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59O1xuZXhwb3J0cy5yZXF1ZXN0ID0gcmVxdWVzdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNtVnhkV1Z6ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlmYVc1MFpYSnVZV3d2Y21WeGRXVnpkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3h2UTBGQk5rSTdRVUZETjBJc2QwTkJRWGRETzBGQlEzaERMRzFFUVVGblJEdEJRVU5vUkN4dlEwRkxhMEk3UVVGRldDeE5RVUZOTEZWQlFWVXNSMEZCUnl4RFFVTjRRaXhKUVVGWkxFVkJRMW9zV1VGQmIwSXNSVUZEY0VJc1YwRkJiVUlzUlVGRGJrSXNUVUZCYTBJc1JVRkRiRUlzWTBGQmRVSXNSVUZEWml4RlFVRkZPMGxCUTFZc1owUkJRV2RFTzBsQlEyaEVMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVVU3VVVGRGJrSXNTVUZCU1N4WlFVRlpMRVZCUVVVN1dVRkRhRUlzUzBGQlN5eEpRVUZKTEVkQlFVY3NTVUZCU1N4WlFVRlpMRVZCUVVVN1owSkJRelZDTEVsQlEwVXNUMEZCVHl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzVjBGQlZ6dHZRa0ZEZUVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVsQlFVa3NSVUZETVVJN2IwSkJRMEVzZVVKQlFYbENPMjlDUVVONlFpeFBRVUZQTzJsQ1FVTlNPMkZCUTBZN1UwRkRSanRSUVVORUxFbEJRVWtzVjBGQlZ5eEZRVUZGTzFsQlEyWXNTMEZCU3l4SlFVRkpMRWRCUVVjc1NVRkJTU3hYUVVGWExFVkJRVVU3WjBKQlF6TkNMRWxCUTBVc1QwRkJUeXhYUVVGWExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NWMEZCVnp0dlFrRkRka01zVjBGQlZ5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRWxCUVVrc1JVRkRla0k3YjBKQlEwRXNlVUpCUVhsQ08yOUNRVU42UWl4UFFVRlBPMmxDUVVOU08yRkJRMFk3VTBGRFJqdExRVU5HTzBsQlJVUXNjMFJCUVhORU8wbEJRM1JFTEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRk8xRkJRM3BDTEU5QlFVOHNTVUZCU1N4RFFVRkRPMHRCUTJJN1NVRkZSQ3h2UlVGQmIwVTdTVUZEY0VVc1NVRkJTU3hKUVVGSkxFbEJRVWtzV1VGQldTeEZRVUZGTzFGQlEzaENMRWxCUVVrc1YwRkJWeXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVVZ5UWl4MVEwRkJkVU03VVVGRGRrTXNUVUZCVFN4bFFVRmxMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRek5DTEV0QlFVc3NTVUZCU1N4SFFVRkhMRWxCUVVrc1dVRkJXU3hGUVVGRk8xbEJRelZDTEdWQlFXVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRE0wSTdVVUZGUkN3clJFRkJLMFE3VVVGREwwUXNWMEZCVnl4SFFVRkhMRWxCUVVrN1lVRkRaaXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETzJGQlExWXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRk8xbEJRMklzU1VGQlNTeFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8yZENRVU42UWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZENRVVY2UXl4clJVRkJhMFU3WjBKQlEyeEZMRTFCUVUwc1MwRkJTeXhIUVVGSExHVkJRV1VzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRek5ETEdWQlFXVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVVnFReXhQUVVGUExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1JVRkJSU3haUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTjBSRHRaUVVWRUxFOUJRVThzVDBGQlR5eERRVUZETzFGQlEycENMRU5CUVVNc1EwRkJRenRoUVVORUxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVmlMRTFCUVUwc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVVZxUWl4blJFRkJaMFE3VVVGRGFFUXNTMEZCU3l4SlFVRkpMRWRCUVVjc1NVRkJTU3haUVVGWkxFVkJRVVU3V1VGRE5VSXNTVUZCU1N4bFFVRmxMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzJkQ1FVTnFReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4SlFVRkpMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdZVUZETTBNN1UwRkRSanRSUVVWRUxFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRjRUlzVjBGQlZ5eEpRVUZKTEVkQlFVY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlEzUkRPMUZCUlVRc1QwRkJUeXhYUVVGWExFTkJRVU03UzBGRGNFSTdTVUZGUkN4TlFVRk5MRXRCUVVzc1EwRkJReXcwUWtGQk5FSXNRMEZCUXl4RFFVRkRPMEZCUXpWRExFTkJRVU1zUTBGQlF6dEJRVzVHVnl4UlFVRkJMRlZCUVZVc1kwRnRSbkpDTzBGQlJVc3NUVUZCVFN4UFFVRlBMRWRCUVVjc1MwRkJTeXhGUVVNeFFpeFBRVUZ0UXl4RlFVTnVReXhWUVVFeVF5eEZRVU16UXl4TlFVRnJRaXhGUVVOc1FpeEZRVUZGTzBsQlEwWXNUVUZCVFN4RlFVRkZMRWRCUVVjc1JVRkJSU3hKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4TFFVRkxMRVZCUVVVc1IwRkJSeXhKUVVGQkxEWkNRVUZoTEVWQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1NVRkZha1VzVFVGQlRTeGpRVUZqTEVkQlFVY3NWVUZCVlN4RFFVRkRMR05CUVdNc1EwRkJRenRKUVVOcVJDeE5RVUZOTEdWQlFXVXNSMEZCUnl4VlFVRlZMRU5CUVVNc1pVRkJaU3hEUVVGRE8wbEJSVzVFTEhsRFFVRjVRenRKUVVONlF5eEpRVUZKTEU5QlFVOHNSMEZCUnl4SlFVRkJMR2RDUVVGUkxFVkJRVU1zWlVGQlN5eEZRVUZGTEc5Q1FVRnZRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlJYaEVMRTFCUVUwc1IwRkJSeXhIUVVGWExHVkJRV1U3VVVGRGFrTXNRMEZCUXl4RFFVRkRMR1ZCUVdVN1VVRkRha0lzUTBGQlF5eERRVUZETEVsQlFVRXNaMEpCUVZFc1JVRkJReXhsUVVGTExFVkJRVVVzYjBKQlFXOUNMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRE9VTXNUVUZCVFN4TFFVRkxMRWRCUVZjc1NVRkJRU3huUWtGQlVTeEZRVUZETEdWQlFVc3NSVUZCUlN4clFrRkJhMElzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVVm9SU3hKUVVGSkxFdEJRVXNzUlVGQlJUdFJRVU5VTEU5QlFVOHNRMEZCUXl4aFFVRmhMRWRCUVVjc1ZVRkJWU3hMUVVGTExFVkJRVVVzUTBGQlF6dExRVU16UXp0SlFVVkVMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVUVzYTBKQlFWVXNSVUZEY2tJc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGRFdpeFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVTmlMRTlCUVU4c1EwRkJReXhKUVVGSkxFVkJRMW9zVFVGQlRTeEZRVU5PTEdOQlFXTXNRMEZEWml4RFFVRkRPMGxCUlVZc2RVTkJRWFZETzBsQlEzWkRMRWxCUVVrc1NVRkJTU3hMUVVGTExGTkJRVk1zU1VGQlNTeEpRVUZKTEV0QlFVc3NSVUZCUlN4RlFVRkZPMUZCUTNKRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlF6dFJRVU5zUXl4UFFVRlBPMHRCUTFJN1NVRkZSQ3hOUVVGTkxGVkJRVlVzUjBGQmEwTTdVVUZEYUVRc1IwRkJSeXhGUVVGRkxFZEJRVWNzUjBGQlJ5eEpRVUZKTzFGQlEyWXNTVUZCU1N4RlFVRkZMRTlCUVU4c1EwRkJReXhKUVVGSk8xRkJRMnhDTEU5QlFVODdVVUZEVUN4TlFVRk5MRVZCUVVVc1QwRkJUeXhEUVVGRExFMUJRVTA3UzBGRGRrSXNRMEZCUXp0SlFVVkdMRWxCUVVrc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF6dEpRVVZtTEZGQlFWRXNUVUZCVFN4RlFVRkZPMUZCUTJRc1MwRkJTeXhyUWtGQlZTeERRVUZETEVkQlFVYzdXVUZEYWtJc1IwRkJSeXhIUVVGSExFMUJRVTBzUjBGQlJ5eERRVUZyUWl4VlFVRlZMRU5CUVVNc1EwRkJRenRaUVVNM1F5eE5RVUZOTzFGQlExSXNTMEZCU3l4clFrRkJWU3hEUVVGRExFbEJRVWs3V1VGRGJFSXNSMEZCUnl4SFFVRkhMRTFCUVUwc1NVRkJTU3hEUVVGclFpeFZRVUZWTEVOQlFVTXNRMEZCUXp0WlFVTTVReXhOUVVGTk8xRkJRMUlzUzBGQlN5eHJRa0ZCVlN4RFFVRkRMRTFCUVUwN1dVRkRjRUlzUjBGQlJ5eEhRVUZITEUxQlFVMHNSMEZCUnl4RFFVRnJRaXhWUVVGVkxFTkJRVU1zUTBGQlF6dFpRVU0zUXl4TlFVRk5PMUZCUTFJc1MwRkJTeXhyUWtGQlZTeERRVUZETEVkQlFVYzdXVUZEYWtJc1IwRkJSeXhIUVVGSExFMUJRVTBzUjBGQlJ5eERRVUZyUWl4VlFVRlZMRU5CUVVNc1EwRkJRenRaUVVNM1F5eE5RVUZOTzFGQlExSXNTMEZCU3l4clFrRkJWU3hEUVVGRExFdEJRVXM3V1VGRGJrSXNSMEZCUnl4SFFVRkhMRTFCUVUwc1MwRkJTeXhEUVVGclFpeFZRVUZWTEVOQlFVTXNRMEZCUXp0WlFVTXZReXhOUVVGTk8xRkJRMUk3V1VGRFJTeFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMQ3RDUVVFclFpeERRVUZETEVOQlFVTTdXVUZETDBNc1RVRkJUVHRMUVVOVU8wbEJSVVFzVDBGQlR5eEhRVUZITEVOQlFVTTdRVUZEWWl4RFFVRkRMRU5CUVVNN1FVRnVSVmNzVVVGQlFTeFBRVUZQTEZkQmJVVnNRaUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldEFwaU1ldGhvZHMgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIkBybGVhbi91dGlsc1wiKTtcbmNvbnN0IFJMZWFuXzEgPSByZXF1aXJlKFwiLi4vUkxlYW5cIik7XG5jb25zdCBkZWZhdWx0QWRhcHRlcnNfMSA9IHJlcXVpcmUoXCIuLi9kZWZhdWx0QWRhcHRlcnNcIik7XG4vKipcbiAqIGdldEFwaU1ldGhvZHNcbiAqIFJldHVybnMgYWxsIGFwaSBtZXRob2RzIGZyb20gdGhlIGFkYXB0ZXIgaW4gYW4gZW50aXR5IGRlZmluaXRpb24sIG9yLCBpZiBub3RcbiAqIGRlZmluZWQsIGZyb20gdGhlIGNvbmZpZ3VyYXRlZCBhZGFwdGVyXG4gKi9cbmNvbnN0IGdldEFwaU1ldGhvZHMgPSAoZGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IGFwaSA9ICgwLCB1dGlsc18xLmhhc1ZhbHVlKShkZWZpbml0aW9uLCBcImFkYXB0ZXJzLmFwaVwiKVxuICAgICAgICA/IGRlZmluaXRpb24uYWRhcHRlcnMuYXBpXG4gICAgICAgIDogKDAsIHV0aWxzXzEuZ2V0VmFsdWUpKFJMZWFuXzEuZGVmYXVsdCwgXCJjb25maWcuYXBpLmFkYXB0ZXJcIiwgZGVmYXVsdEFkYXB0ZXJzXzEuQXhpb3NBZGFwdGVyKTtcbiAgICBjb25zdCBnZXQgPSBhcGkuZ2V0O1xuICAgIGNvbnN0IHB1dCA9IGFwaS5wdXQ7XG4gICAgY29uc3QgcG9zdCA9IGFwaS5wb3N0O1xuICAgIGNvbnN0IGRlbCA9IGFwaS5kZWw7XG4gICAgY29uc3QgcGF0Y2ggPSBhcGkucGF0Y2g7XG4gICAgcmV0dXJuIHsgZ2V0LCBwdXQsIHBvc3QsIGRlbCwgcGF0Y2ggfTtcbn07XG5leHBvcnRzLmdldEFwaU1ldGhvZHMgPSBnZXRBcGlNZXRob2RzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWjJWMFFYQnBUV1YwYUc5a2N5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5ZmFXNTBaWEp1WVd3dloyVjBRWEJwVFdWMGFHOWtjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3gzUTBGQmEwUTdRVUZEYkVRc2IwTkJRVFpDTzBGQlF6ZENMSGRFUVVGclJEdEJRVWRzUkRzN096dEhRVWxITzBGQlEwa3NUVUZCVFN4aFFVRmhMRWRCUVVjc1EwRkJTU3hWUVVGclF5eEZRVUZGTEVWQlFVVTdTVUZEY2tVc1RVRkJUU3hIUVVGSExFZEJRV1VzU1VGQlFTeG5Ra0ZCVVN4RlFVRkRMRlZCUVZVc1JVRkJSU3hqUVVGakxFTkJRVU03VVVGRE1VUXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ6dFJRVU42UWl4RFFVRkRMRU5CUVVNc1NVRkJRU3huUWtGQlVTeEZRVUZETEdWQlFVc3NSVUZCUlN4dlFrRkJiMElzUlVGQlJTdzRRa0ZCV1N4RFFVRkRMRU5CUVVNN1NVRkZlRVFzVFVGQlRTeEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJRenRKUVVOd1FpeE5RVUZOTEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRE8wbEJRM0JDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU03U1VGRGRFSXNUVUZCVFN4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF6dEpRVU53UWl4TlFVRk5MRXRCUVVzc1IwRkJSeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETzBsQlJYaENMRTlCUVU4c1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU03UVVGRGVFTXNRMEZCUXl4RFFVRkRPMEZCV2xjc1VVRkJRU3hoUVVGaExHbENRVmw0UWlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Mb2NhbEZvcmFnZUFkYXB0ZXIgPSBleHBvcnRzLkF4aW9zQWRhcHRlciA9IHZvaWQgMDtcbmNvbnN0IEF4aW9zQWRhcHRlcl8xID0gcmVxdWlyZShcIi4vQXhpb3NBZGFwdGVyXCIpO1xuZXhwb3J0cy5BeGlvc0FkYXB0ZXIgPSBBeGlvc0FkYXB0ZXJfMS5kZWZhdWx0O1xuY29uc3QgTG9jYWxGb3JhZ2VBZGFwdGVyXzEgPSByZXF1aXJlKFwiLi9Mb2NhbEZvcmFnZUFkYXB0ZXJcIik7XG5leHBvcnRzLkxvY2FsRm9yYWdlQWRhcHRlciA9IExvY2FsRm9yYWdlQWRhcHRlcl8xLmRlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WkdWbVlYVnNkRUZrWVhCMFpYSnpMMmx1WkdWNExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxHbEVRVUV3UXp0QlFVZHFReXgxUWtGSVJpeHpRa0ZCV1N4RFFVZEZPMEZCUm5KQ0xEWkVRVUZ6UkR0QlFVVXZRaXcyUWtGR2FFSXNORUpCUVd0Q0xFTkJSV2RDSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgYXhpb3NfMSA9IHJlcXVpcmUoXCJheGlvc1wiKTtcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5jbGFzcyBBeGlvc0FkYXB0ZXIge1xuICAgIGFzeW5jIGdldChhcGlQYXlsb2FkKSB7XG4gICAgICAgIGNvbnN0IHsgdXJsLCBoZWFkZXJzLCBzaWduYWwgfSA9IGFwaVBheWxvYWQ7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NfMS5kZWZhdWx0LmdldCh1cmwsIGhlYWRlcnMpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIGFzeW5jIHBvc3QoYXBpUGF5bG9hZCkge1xuICAgICAgICBjb25zdCB7IHVybCwgZGF0YSwgaGVhZGVycywgc2lnbmFsIH0gPSBhcGlQYXlsb2FkO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IChhd2FpdCAoMCwgYXhpb3NfMS5kZWZhdWx0KSh7XG4gICAgICAgICAgICBtZXRob2Q6IHR5cGVzXzEuQVBJX01FVEhPRC5QT1NULFxuICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICBhc3luYyBwdXQoYXBpUGF5bG9hZCkge1xuICAgICAgICBjb25zdCB7IHVybCwgZGF0YSwgaGVhZGVycywgc2lnbmFsIH0gPSBhcGlQYXlsb2FkO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IChhd2FpdCAoMCwgYXhpb3NfMS5kZWZhdWx0KSh7XG4gICAgICAgICAgICBtZXRob2Q6IHR5cGVzXzEuQVBJX01FVEhPRC5QVVQsXG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIGFzeW5jIGRlbChhcGlQYXlsb2FkKSB7XG4gICAgICAgIGNvbnN0IHsgdXJsLCBkYXRhLCBoZWFkZXJzLCBzaWduYWwgfSA9IGFwaVBheWxvYWQ7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0ICgwLCBheGlvc18xLmRlZmF1bHQpKHtcbiAgICAgICAgICAgIG1ldGhvZDogdHlwZXNfMS5BUElfTUVUSE9ELkRFTEVURSxcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgYXN5bmMgcGF0Y2goYXBpUGF5bG9hZCkge1xuICAgICAgICBjb25zdCB7IHVybCwgZGF0YSwgaGVhZGVycywgc2lnbmFsIH0gPSBhcGlQYXlsb2FkO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IChhd2FpdCAoMCwgYXhpb3NfMS5kZWZhdWx0KSh7XG4gICAgICAgICAgICBtZXRob2Q6IHR5cGVzXzEuQVBJX01FVEhPRC5QQVRDSCxcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgQXhpb3NBZGFwdGVyKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRWGhwYjNOQlpHRndkR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlJsWm1GMWJIUkJaR0Z3ZEdWeWN5OUJlR2x2YzBGa1lYQjBaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3hwUTBGQk5rTTdRVUZETjBNc2IwTkJRWGxFTzBGQlJYcEVMRTFCUVUwc1dVRkJXVHRKUVVOb1FpeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRlBMRlZCUVdkRE8xRkJRemxETEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeEhRVUZITEZWQlFWVXNRMEZCUXp0UlFVTTFReXhOUVVGTkxGRkJRVkVzUjBGQlJ5eE5RVUZOTEdWQlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVrc1IwRkJSeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFGQlEyeEVMRTlCUVU4c1VVRkJVU3hEUVVGRE8wbEJRMnhDTEVOQlFVTTdTVUZGUkN4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGUExGVkJRV2RETzFGQlF5OURMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1IwRkJSeXhWUVVGVkxFTkJRVU03VVVGRGJFUXNUVUZCVFN4UlFVRlJMRWRCUVVjc1EwRkJReXhOUVVGTkxFbEJRVUVzWlVGQlN5eEZRVUZETzFsQlF6VkNMRTFCUVUwc1JVRkJSU3hyUWtGQlZTeERRVUZETEVsQlFVazdXVUZEZGtJc1IwRkJSenRaUVVOSUxFbEJRVWs3V1VGRFNpeFBRVUZQTzFOQlExSXNRMEZCUXl4RFFVRnhRaXhEUVVGRE8xRkJRM2hDTEU5QlFVOHNVVUZCVVN4RFFVRkRPMGxCUTJ4Q0xFTkJRVU03U1VGRlJDeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRlBMRlZCUVdkRE8xRkJRemxETEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVc1NVRkJTU3hGUVVGRkxFOUJRVThzUlVGQlJTeE5RVUZOTEVWQlFVVXNSMEZCUnl4VlFVRlZMRU5CUVVNN1VVRkRiRVFzVFVGQlRTeFJRVUZSTEVkQlFVY3NRMEZCUXl4TlFVRk5MRWxCUVVFc1pVRkJTeXhGUVVGRE8xbEJRelZDTEUxQlFVMHNSVUZCUlN4clFrRkJWU3hEUVVGRExFZEJRVWM3V1VGRGRFSXNSMEZCUnp0WlFVTklMRWxCUVVrN1dVRkRTaXhQUVVGUE8xTkJRMUlzUTBGQlF5eERRVUZ4UWl4RFFVRkRPMUZCUTNoQ0xFOUJRVThzVVVGQlVTeERRVUZETzBsQlEyeENMRU5CUVVNN1NVRkZSQ3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZQTEZWQlFXZERPMUZCUXpsRExFMUJRVTBzUlVGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RlFVRkZMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzUjBGQlJ5eFZRVUZWTEVOQlFVTTdVVUZEYkVRc1RVRkJUU3hSUVVGUkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVsQlFVRXNaVUZCU3l4RlFVRkRPMWxCUXpWQ0xFMUJRVTBzUlVGQlJTeHJRa0ZCVlN4RFFVRkRMRTFCUVUwN1dVRkRla0lzUjBGQlJ6dFpRVU5JTEVsQlFVazdXVUZEU2l4UFFVRlBPMU5CUTFJc1EwRkJReXhEUVVGeFFpeERRVUZETzFGQlEzaENMRTlCUVU4c1VVRkJVU3hEUVVGRE8wbEJRMnhDTEVOQlFVTTdTVUZGUkN4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGUExGVkJRV2RETzFGQlEyaEVMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1IwRkJSeXhWUVVGVkxFTkJRVU03VVVGRGJFUXNUVUZCVFN4UlFVRlJMRWRCUVVjc1EwRkJReXhOUVVGTkxFbEJRVUVzWlVGQlN5eEZRVUZETzFsQlF6VkNMRTFCUVUwc1JVRkJSU3hyUWtGQlZTeERRVUZETEV0QlFVczdXVUZEZUVJc1IwRkJSenRaUVVOSUxFbEJRVWs3V1VGRFNpeFBRVUZQTzFOQlExSXNRMEZCUXl4RFFVRnhRaXhEUVVGRE8xRkJRM2hDTEU5QlFVOHNVVUZCVVN4RFFVRkRPMGxCUTJ4Q0xFTkJRVU03UTBGRFJqdEJRVVZFTEd0Q1FVRmxMRWxCUVVrc1dVRkJXU3hGUVVGRkxFTkJRVU1pZlE9PSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxuLy8gRXhwb3NlIGlzQXhpb3NFcnJvclxuYXhpb3MuaXNBeGlvc0Vycm9yID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzQXhpb3NFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcilcbiAgICAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsKSB7XG4gIGlmICh0b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWwpO1xuICByZXR1cm4gcHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnRyaW0gPyBzdHIudHJpbSgpIDogc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QocmVzdWx0W2tleV0pICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWwuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIFJlbW92ZSBieXRlIG9yZGVyIG1hcmtlci4gVGhpcyBjYXRjaGVzIEVGIEJCIEJGICh0aGUgVVRGLTggQk9NKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IHdpdGggQk9NXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGNvbnRlbnQgdmFsdWUgd2l0aG91dCBCT01cbiAqL1xuZnVuY3Rpb24gc3RyaXBCT00oY29udGVudCkge1xuICBpZiAoY29udGVudC5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHtcbiAgICBjb250ZW50ID0gY29udGVudC5zbGljZSgxKTtcbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0OiBpc1BsYWluT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW0sXG4gIHN0cmlwQk9NOiBzdHJpcEJPTVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcbnZhciB2YWxpZGF0b3IgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3ZhbGlkYXRvcicpO1xuXG52YXIgdmFsaWRhdG9ycyA9IHZhbGlkYXRvci52YWxpZGF0b3JzO1xuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgaWYgKGNvbmZpZy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdHMubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IHRoaXMuZGVmYXVsdHMubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1ldGhvZCA9ICdnZXQnO1xuICB9XG5cbiAgdmFyIHRyYW5zaXRpb25hbCA9IGNvbmZpZy50cmFuc2l0aW9uYWw7XG5cbiAgaWYgKHRyYW5zaXRpb25hbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnModHJhbnNpdGlvbmFsLCB7XG4gICAgICBzaWxlbnRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuLCAnMS4wLjAnKSxcbiAgICAgIGZvcmNlZEpTT05QYXJzaW5nOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4sICcxLjAuMCcpLFxuICAgICAgY2xhcmlmeVRpbWVvdXRFcnJvcjogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuLCAnMS4wLjAnKVxuICAgIH0sIGZhbHNlKTtcbiAgfVxuXG4gIC8vIGZpbHRlciBvdXQgc2tpcHBlZCBpbnRlcmNlcHRvcnNcbiAgdmFyIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluID0gW107XG4gIHZhciBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgPSB0cnVlO1xuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBpZiAodHlwZW9mIGludGVyY2VwdG9yLnJ1bldoZW4gPT09ICdmdW5jdGlvbicgJiYgaW50ZXJjZXB0b3IucnVuV2hlbihjb25maWcpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyA9IHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyAmJiBpbnRlcmNlcHRvci5zeW5jaHJvbm91cztcblxuICAgIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHZhciByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4gPSBbXTtcbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdmFyIHByb21pc2U7XG5cbiAgaWYgKCFzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMpIHtcbiAgICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuXG4gICAgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoY2hhaW4sIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluKTtcbiAgICBjaGFpbiA9IGNoYWluLmNvbmNhdChyZXNwb25zZUludGVyY2VwdG9yQ2hhaW4pO1xuXG4gICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuXG4gIHZhciBuZXdDb25maWcgPSBjb25maWc7XG4gIHdoaWxlIChyZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi5sZW5ndGgpIHtcbiAgICB2YXIgb25GdWxmaWxsZWQgPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi5zaGlmdCgpO1xuICAgIHZhciBvblJlamVjdGVkID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4uc2hpZnQoKTtcbiAgICB0cnkge1xuICAgICAgbmV3Q29uZmlnID0gb25GdWxmaWxsZWQobmV3Q29uZmlnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgb25SZWplY3RlZChlcnJvcik7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB0cnkge1xuICAgIHByb21pc2UgPSBkaXNwYXRjaFJlcXVlc3QobmV3Q29uZmlnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG5cbiAgd2hpbGUgKHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5zaGlmdCgpLCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IChjb25maWcgfHwge30pLmRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIG9wdGlvbnMpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWQsXG4gICAgc3luY2hyb25vdXM6IG9wdGlvbnMgPyBvcHRpb25zLnN5bmNocm9ub3VzIDogZmFsc2UsXG4gICAgcnVuV2hlbjogb3B0aW9ucyA/IG9wdGlvbnMucnVuV2hlbiA6IG51bGxcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgIGNvbmZpZyxcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1xuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgICAgY29uZmlnLFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi8uLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgdmFyIGNvbnRleHQgPSB0aGlzIHx8IGRlZmF1bHRzO1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbi5jYWxsKGNvbnRleHQsIGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2NvcmUvZW5oYW5jZUVycm9yJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5U2FmZWx5KHJhd1ZhbHVlLCBwYXJzZXIsIGVuY29kZXIpIHtcbiAgaWYgKHV0aWxzLmlzU3RyaW5nKHJhd1ZhbHVlKSkge1xuICAgIHRyeSB7XG4gICAgICAocGFyc2VyIHx8IEpTT04ucGFyc2UpKHJhd1ZhbHVlKTtcbiAgICAgIHJldHVybiB1dGlscy50cmltKHJhd1ZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lICE9PSAnU3ludGF4RXJyb3InKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChlbmNvZGVyIHx8IEpTT04uc3RyaW5naWZ5KShyYXdWYWx1ZSk7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcblxuICB0cmFuc2l0aW9uYWw6IHtcbiAgICBzaWxlbnRKU09OUGFyc2luZzogdHJ1ZSxcbiAgICBmb3JjZWRKU09OUGFyc2luZzogdHJ1ZSxcbiAgICBjbGFyaWZ5VGltZW91dEVycm9yOiBmYWxzZVxuICB9LFxuXG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkgfHwgKGhlYWRlcnMgJiYgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJykpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgcmV0dXJuIHN0cmluZ2lmeVNhZmVseShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIHZhciB0cmFuc2l0aW9uYWwgPSB0aGlzLnRyYW5zaXRpb25hbDtcbiAgICB2YXIgc2lsZW50SlNPTlBhcnNpbmcgPSB0cmFuc2l0aW9uYWwgJiYgdHJhbnNpdGlvbmFsLnNpbGVudEpTT05QYXJzaW5nO1xuICAgIHZhciBmb3JjZWRKU09OUGFyc2luZyA9IHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwuZm9yY2VkSlNPTlBhcnNpbmc7XG4gICAgdmFyIHN0cmljdEpTT05QYXJzaW5nID0gIXNpbGVudEpTT05QYXJzaW5nICYmIHRoaXMucmVzcG9uc2VUeXBlID09PSAnanNvbic7XG5cbiAgICBpZiAoc3RyaWN0SlNPTlBhcnNpbmcgfHwgKGZvcmNlZEpTT05QYXJzaW5nICYmIHV0aWxzLmlzU3RyaW5nKGRhdGEpICYmIGRhdGEubGVuZ3RoKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChzdHJpY3RKU09OUGFyc2luZykge1xuICAgICAgICAgIGlmIChlLm5hbWUgPT09ICdTeW50YXhFcnJvcicpIHtcbiAgICAgICAgICAgIHRocm93IGVuaGFuY2VFcnJvcihlLCB0aGlzLCAnRV9KU09OX1BBUlNFJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBidWlsZEZ1bGxQYXRoID0gcmVxdWlyZSgnLi4vY29yZS9idWlsZEZ1bGxQYXRoJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuICAgIHZhciByZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgPyB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoY29uZmlnLmF1dGgucGFzc3dvcmQpKSA6ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICB2YXIgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICBmdW5jdGlvbiBvbmxvYWRlbmQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhcmVzcG9uc2VUeXBlIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnIHx8ICByZXNwb25zZVR5cGUgPT09ICdqc29uJyA/XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCdvbmxvYWRlbmQnIGluIHJlcXVlc3QpIHtcbiAgICAgIC8vIFVzZSBvbmxvYWRlbmQgaWYgYXZhaWxhYmxlXG4gICAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IG9ubG9hZGVuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZSB0byBlbXVsYXRlIG9ubG9hZGVuZFxuICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlYWR5c3RhdGUgaGFuZGxlciBpcyBjYWxsaW5nIGJlZm9yZSBvbmVycm9yIG9yIG9udGltZW91dCBoYW5kbGVycyxcbiAgICAgICAgLy8gc28gd2Ugc2hvdWxkIGNhbGwgb25sb2FkZW5kIG9uIHRoZSBuZXh0ICd0aWNrJ1xuICAgICAgICBzZXRUaW1lb3V0KG9ubG9hZGVuZCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCc7XG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIGNvbmZpZy50cmFuc2l0aW9uYWwgJiYgY29uZmlnLnRyYW5zaXRpb25hbC5jbGFyaWZ5VGltZW91dEVycm9yID8gJ0VUSU1FRE9VVCcgOiAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGZ1bGxQYXRoKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIWNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChyZXNwb25zZVR5cGUgJiYgcmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXJlcXVlc3REYXRhKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAnZGF0YSddO1xuICB2YXIgbWVyZ2VEZWVwUHJvcGVydGllc0tleXMgPSBbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eScsICdwYXJhbXMnXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gW1xuICAgICdiYXNlVVJMJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsXG4gICAgJ3RpbWVvdXQnLCAndGltZW91dE1lc3NhZ2UnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJyxcbiAgICAneHNyZkhlYWRlck5hbWUnLCAnb25VcGxvYWRQcm9ncmVzcycsICdvbkRvd25sb2FkUHJvZ3Jlc3MnLCAnZGVjb21wcmVzcycsXG4gICAgJ21heENvbnRlbnRMZW5ndGgnLCAnbWF4Qm9keUxlbmd0aCcsICdtYXhSZWRpcmVjdHMnLCAndHJhbnNwb3J0JywgJ2h0dHBBZ2VudCcsXG4gICAgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLCAnc29ja2V0UGF0aCcsICdyZXNwb25zZUVuY29kaW5nJ1xuICBdO1xuICB2YXIgZGlyZWN0TWVyZ2VLZXlzID0gWyd2YWxpZGF0ZVN0YXR1cyddO1xuXG4gIGZ1bmN0aW9uIGdldE1lcmdlZFZhbHVlKHRhcmdldCwgc291cmNlKSB7XG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiB1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh0YXJnZXQsIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7fSwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zbGljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9XG5cbiAgdXRpbHMuZm9yRWFjaCh2YWx1ZUZyb21Db25maWcyS2V5cywgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gobWVyZ2VEZWVwUHJvcGVydGllc0tleXMsIG1lcmdlRGVlcFByb3BlcnRpZXMpO1xuXG4gIHV0aWxzLmZvckVhY2goZGVmYXVsdFRvQ29uZmlnMktleXMsIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKGRpcmVjdE1lcmdlS2V5cywgZnVuY3Rpb24gbWVyZ2UocHJvcCkge1xuICAgIGlmIChwcm9wIGluIGNvbmZpZzIpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAocHJvcCBpbiBjb25maWcxKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzXG4gICAgLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cylcbiAgICAuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKVxuICAgIC5jb25jYXQoZGlyZWN0TWVyZ2VLZXlzKTtcblxuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0XG4gICAgLmtleXMoY29uZmlnMSlcbiAgICAuY29uY2F0KE9iamVjdC5rZXlzKGNvbmZpZzIpKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gZmlsdGVyQXhpb3NLZXlzKGtleSkge1xuICAgICAgcmV0dXJuIGF4aW9zS2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xuICAgIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gob3RoZXJLZXlzLCBtZXJnZURlZXBQcm9wZXJ0aWVzKTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHBrZyA9IHJlcXVpcmUoJy4vLi4vLi4vcGFja2FnZS5qc29uJyk7XG5cbnZhciB2YWxpZGF0b3JzID0ge307XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5bJ29iamVjdCcsICdib29sZWFuJywgJ251bWJlcicsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnc3ltYm9sJ10uZm9yRWFjaChmdW5jdGlvbih0eXBlLCBpKSB7XG4gIHZhbGlkYXRvcnNbdHlwZV0gPSBmdW5jdGlvbiB2YWxpZGF0b3IodGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSB0eXBlIHx8ICdhJyArIChpIDwgMSA/ICduICcgOiAnICcpICsgdHlwZTtcbiAgfTtcbn0pO1xuXG52YXIgZGVwcmVjYXRlZFdhcm5pbmdzID0ge307XG52YXIgY3VycmVudFZlckFyciA9IHBrZy52ZXJzaW9uLnNwbGl0KCcuJyk7XG5cbi8qKlxuICogQ29tcGFyZSBwYWNrYWdlIHZlcnNpb25zXG4gKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvblxuICogQHBhcmFtIHtzdHJpbmc/fSB0aGFuVmVyc2lvblxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzT2xkZXJWZXJzaW9uKHZlcnNpb24sIHRoYW5WZXJzaW9uKSB7XG4gIHZhciBwa2dWZXJzaW9uQXJyID0gdGhhblZlcnNpb24gPyB0aGFuVmVyc2lvbi5zcGxpdCgnLicpIDogY3VycmVudFZlckFycjtcbiAgdmFyIGRlc3RWZXIgPSB2ZXJzaW9uLnNwbGl0KCcuJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgaWYgKHBrZ1ZlcnNpb25BcnJbaV0gPiBkZXN0VmVyW2ldKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHBrZ1ZlcnNpb25BcnJbaV0gPCBkZXN0VmVyW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBUcmFuc2l0aW9uYWwgb3B0aW9uIHZhbGlkYXRvclxuICogQHBhcmFtIHtmdW5jdGlvbnxib29sZWFuP30gdmFsaWRhdG9yXG4gKiBAcGFyYW0ge3N0cmluZz99IHZlcnNpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbnZhbGlkYXRvcnMudHJhbnNpdGlvbmFsID0gZnVuY3Rpb24gdHJhbnNpdGlvbmFsKHZhbGlkYXRvciwgdmVyc2lvbiwgbWVzc2FnZSkge1xuICB2YXIgaXNEZXByZWNhdGVkID0gdmVyc2lvbiAmJiBpc09sZGVyVmVyc2lvbih2ZXJzaW9uKTtcblxuICBmdW5jdGlvbiBmb3JtYXRNZXNzYWdlKG9wdCwgZGVzYykge1xuICAgIHJldHVybiAnW0F4aW9zIHYnICsgcGtnLnZlcnNpb24gKyAnXSBUcmFuc2l0aW9uYWwgb3B0aW9uIFxcJycgKyBvcHQgKyAnXFwnJyArIGRlc2MgKyAobWVzc2FnZSA/ICcuICcgKyBtZXNzYWdlIDogJycpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBvcHQsIG9wdHMpIHtcbiAgICBpZiAodmFsaWRhdG9yID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGZvcm1hdE1lc3NhZ2Uob3B0LCAnIGhhcyBiZWVuIHJlbW92ZWQgaW4gJyArIHZlcnNpb24pKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEZXByZWNhdGVkICYmICFkZXByZWNhdGVkV2FybmluZ3Nbb3B0XSkge1xuICAgICAgZGVwcmVjYXRlZFdhcm5pbmdzW29wdF0gPSB0cnVlO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgZm9ybWF0TWVzc2FnZShcbiAgICAgICAgICBvcHQsXG4gICAgICAgICAgJyBoYXMgYmVlbiBkZXByZWNhdGVkIHNpbmNlIHYnICsgdmVyc2lvbiArICcgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmVhciBmdXR1cmUnXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvciA/IHZhbGlkYXRvcih2YWx1ZSwgb3B0LCBvcHRzKSA6IHRydWU7XG4gIH07XG59O1xuXG4vKipcbiAqIEFzc2VydCBvYmplY3QncyBwcm9wZXJ0aWVzIHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gc2NoZW1hXG4gKiBAcGFyYW0ge2Jvb2xlYW4/fSBhbGxvd1Vua25vd25cbiAqL1xuXG5mdW5jdGlvbiBhc3NlcnRPcHRpb25zKG9wdGlvbnMsIHNjaGVtYSwgYWxsb3dVbmtub3duKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICB2YXIgb3B0ID0ga2V5c1tpXTtcbiAgICB2YXIgdmFsaWRhdG9yID0gc2NoZW1hW29wdF07XG4gICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgdmFyIHZhbHVlID0gb3B0aW9uc1tvcHRdO1xuICAgICAgdmFyIHJlc3VsdCA9IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gJyArIG9wdCArICcgbXVzdCBiZSAnICsgcmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYWxsb3dVbmtub3duICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBFcnJvcignVW5rbm93biBvcHRpb24gJyArIG9wdCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc09sZGVyVmVyc2lvbjogaXNPbGRlclZlcnNpb24sXG4gIGFzc2VydE9wdGlvbnM6IGFzc2VydE9wdGlvbnMsXG4gIHZhbGlkYXRvcnM6IHZhbGlkYXRvcnNcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvc1xuICpcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0F4aW9zRXJyb3IocGF5bG9hZCkge1xuICByZXR1cm4gKHR5cGVvZiBwYXlsb2FkID09PSAnb2JqZWN0JykgJiYgKHBheWxvYWQuaXNBeGlvc0Vycm9yID09PSB0cnVlKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGxvY2FsZm9yYWdlID0gcmVxdWlyZShcImxvY2FsZm9yYWdlXCIpO1xuY2xhc3MgTG9jYWxGb3JhZ2Uge1xuICAgIGFzeW5jIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICgha2V5IHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIktleSBvciB2YWx1ZSBjYW5ub3QgYmUgdW5kZWZpbmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBsb2NhbGZvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgc2V0QWxsKHVuaXRzKSB7XG4gICAgICAgIGlmICh1bml0cyA9PT0gdW5kZWZpbmVkIHx8IHVuaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXJyYXkgY2Fubm90IGJlIG51bGwgb3IgZW1wdHlcIik7XG4gICAgICAgIH1cbiAgICAgICAgdW5pdHMuZm9yRWFjaChhc3luYyAoa3ZQYWlyKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KGt2UGFpci5rZXksIGt2UGFpci52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGFzeW5jIGdldChrZXkpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3Qgc3VwcGx5IGEga2V5IGluIGdldFwiKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBsb2NhbGZvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IG51bGwgOiBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBMb2NhbEZvcmFnZSBnZXRJdGVtIGVycm9yOiAke2Vycn1gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBjbGVhcigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGxvY2FsZm9yYWdlLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIHJlbW92ZShrZXkpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3Qgc3VwcGx5IGEga2V5IGluIHJlbW92ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgbG9jYWxmb3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBMb2NhbEZvcmFnZSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVEc5allXeEdiM0poWjJWQlpHRndkR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlJsWm1GMWJIUkJaR0Z3ZEdWeWN5OU1iMk5oYkVadmNtRm5aVUZrWVhCMFpYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTd3lRMEZCTWtNN1FVRkZNME1zVFVGQlRTeFhRVUZYTzBsQlEyWXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGWExFVkJRVVVzUzBGQllUdFJRVU5zUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFdEJRVXNzUzBGQlN5eFRRVUZUTEVWQlFVVTdXVUZETDBJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHJRMEZCYTBNc1EwRkJReXhEUVVGRE8xTkJRM0pFTzFGQlJVUXNTVUZCU1R0WlFVTkdMRTFCUVUwc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzWkVPMUZCUVVNc1QwRkJUeXhIUVVGSExFVkJRVVU3V1VGRFdpeFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRM0JDTzBsQlEwZ3NRMEZCUXp0SlFVVkVMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQmRVTTdVVUZEYkVRc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRemRETEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc0swSkJRU3RDTEVOQlFVTXNRMEZCUXp0VFFVTnNSRHRSUVVWRUxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRTFCUVUwc1JVRkJSU3hGUVVGRk8xbEJRemRDTEVsQlFVazdaMEpCUTBZc1RVRkJUU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzJGQlF6RkRPMWxCUVVNc1QwRkJUeXhIUVVGSExFVkJRVVU3WjBKQlExb3NUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU53UWp0UlFVTklMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSVWdzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEWkN4RFFVRkRPMGxCUlVRc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZYTzFGQlEyNUNMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVU3V1VGRFVpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMREJDUVVFd1FpeERRVUZETEVOQlFVTTdVMEZETjBNN1VVRkZSQ3hKUVVGSk8xbEJRMFlzVFVGQlRTeExRVUZMTEVkQlFWY3NUVUZCVFN4WFFVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlJYSkVMRTlCUVU4c1MwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMU5CUTJwRU8xRkJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVTdXVUZEV2l4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExEaENRVUU0UWl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM0JFTzBsQlEwZ3NRMEZCUXp0SlFVVkVMRXRCUVVzc1EwRkJReXhMUVVGTE8xRkJRMVFzU1VGQlNUdFpRVU5HTEUxQlFVMHNWMEZCVnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xTkJRek5DTzFGQlFVTXNUMEZCVHl4SFFVRkhMRVZCUVVVN1dVRkRXaXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUTNCQ08wbEJRMGdzUTBGQlF6dEpRVVZFTEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJWenRSUVVOMFFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZPMWxCUTFJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5dzJRa0ZCTmtJc1EwRkJReXhEUVVGRE8xTkJRMmhFTzFGQlJVUXNTVUZCU1R0WlFVTkdMRTFCUVUwc1YwRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTnVRenRSUVVGRExFOUJRVThzUjBGQlJ5eEZRVUZGTzFsQlExb3NUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU53UWp0SlFVTklMRU5CUVVNN1EwRkRSanRCUVVWRUxHdENRVUZsTEVsQlFVa3NWMEZCVnl4RlFVRkZMRU5CUVVNaWZRPT0iLCIvKiFcbiAgICBsb2NhbEZvcmFnZSAtLSBPZmZsaW5lIFN0b3JhZ2UsIEltcHJvdmVkXG4gICAgVmVyc2lvbiAxLjEwLjBcbiAgICBodHRwczovL2xvY2FsZm9yYWdlLmdpdGh1Yi5pby9sb2NhbEZvcmFnZVxuICAgIChjKSAyMDEzLTIwMTcgTW96aWxsYSwgQXBhY2hlIExpY2Vuc2UgMi4wXG4qL1xuKGZ1bmN0aW9uKGYpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCIpe21vZHVsZS5leHBvcnRzPWYoKX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXSxmKX1lbHNle3ZhciBnO2lmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiKXtnPXdpbmRvd31lbHNlIGlmKHR5cGVvZiBnbG9iYWwhPT1cInVuZGVmaW5lZFwiKXtnPWdsb2JhbH1lbHNlIGlmKHR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIil7Zz1zZWxmfWVsc2V7Zz10aGlzfWcubG9jYWxmb3JhZ2UgPSBmKCl9fSkoZnVuY3Rpb24oKXt2YXIgZGVmaW5lLG1vZHVsZSxleHBvcnRzO3JldHVybiAoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgKGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIiwgZil9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gKGdsb2JhbCl7XG4ndXNlIHN0cmljdCc7XG52YXIgTXV0YXRpb24gPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcblxudmFyIHNjaGVkdWxlRHJhaW47XG5cbntcbiAgaWYgKE11dGF0aW9uKSB7XG4gICAgdmFyIGNhbGxlZCA9IDA7XG4gICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uKG5leHRUaWNrKTtcbiAgICB2YXIgZWxlbWVudCA9IGdsb2JhbC5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XG4gICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gICAgfSk7XG4gICAgc2NoZWR1bGVEcmFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGVsZW1lbnQuZGF0YSA9IChjYWxsZWQgPSArK2NhbGxlZCAlIDIpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoIWdsb2JhbC5zZXRJbW1lZGlhdGUgJiYgdHlwZW9mIGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgY2hhbm5lbCA9IG5ldyBnbG9iYWwuTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IG5leHRUaWNrO1xuICAgIHNjaGVkdWxlRHJhaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoJ2RvY3VtZW50JyBpbiBnbG9iYWwgJiYgJ29ucmVhZHlzdGF0ZWNoYW5nZScgaW4gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKSB7XG4gICAgc2NoZWR1bGVEcmFpbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgdmFyIHNjcmlwdEVsID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0RWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXh0VGljaygpO1xuXG4gICAgICAgIHNjcmlwdEVsLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgIHNjcmlwdEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0RWwpO1xuICAgICAgICBzY3JpcHRFbCA9IG51bGw7XG4gICAgICB9O1xuICAgICAgZ2xvYmFsLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHRFbCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBzY2hlZHVsZURyYWluID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2V0VGltZW91dChuZXh0VGljaywgMCk7XG4gICAgfTtcbiAgfVxufVxuXG52YXIgZHJhaW5pbmc7XG52YXIgcXVldWUgPSBbXTtcbi8vbmFtZWQgbmV4dFRpY2sgZm9yIGxlc3MgY29uZnVzaW5nIHN0YWNrIHRyYWNlc1xuZnVuY3Rpb24gbmV4dFRpY2soKSB7XG4gIGRyYWluaW5nID0gdHJ1ZTtcbiAgdmFyIGksIG9sZFF1ZXVlO1xuICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICB3aGlsZSAobGVuKSB7XG4gICAgb2xkUXVldWUgPSBxdWV1ZTtcbiAgICBxdWV1ZSA9IFtdO1xuICAgIGkgPSAtMTtcbiAgICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgICBvbGRRdWV1ZVtpXSgpO1xuICAgIH1cbiAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gIH1cbiAgZHJhaW5pbmcgPSBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbW1lZGlhdGU7XG5mdW5jdGlvbiBpbW1lZGlhdGUodGFzaykge1xuICBpZiAocXVldWUucHVzaCh0YXNrKSA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICBzY2hlZHVsZURyYWluKCk7XG4gIH1cbn1cblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG59LHt9XSwyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBpbW1lZGlhdGUgPSBfZGVyZXFfKDEpO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gSU5URVJOQUwoKSB7fVxuXG52YXIgaGFuZGxlcnMgPSB7fTtcblxudmFyIFJFSkVDVEVEID0gWydSRUpFQ1RFRCddO1xudmFyIEZVTEZJTExFRCA9IFsnRlVMRklMTEVEJ107XG52YXIgUEVORElORyA9IFsnUEVORElORyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cbmZ1bmN0aW9uIFByb21pc2UocmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiByZXNvbHZlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Jlc29sdmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG4gIHRoaXMuc3RhdGUgPSBQRU5ESU5HO1xuICB0aGlzLnF1ZXVlID0gW107XG4gIHRoaXMub3V0Y29tZSA9IHZvaWQgMDtcbiAgaWYgKHJlc29sdmVyICE9PSBJTlRFUk5BTCkge1xuICAgIHNhZmVseVJlc29sdmVUaGVuYWJsZSh0aGlzLCByZXNvbHZlcik7XG4gIH1cbn1cblxuUHJvbWlzZS5wcm90b3R5cGVbXCJjYXRjaFwiXSA9IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG59O1xuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICBpZiAodHlwZW9mIG9uRnVsZmlsbGVkICE9PSAnZnVuY3Rpb24nICYmIHRoaXMuc3RhdGUgPT09IEZVTEZJTExFRCB8fFxuICAgIHR5cGVvZiBvblJlamVjdGVkICE9PSAnZnVuY3Rpb24nICYmIHRoaXMuc3RhdGUgPT09IFJFSkVDVEVEKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdmFyIHByb21pc2UgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihJTlRFUk5BTCk7XG4gIGlmICh0aGlzLnN0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgdmFyIHJlc29sdmVyID0gdGhpcy5zdGF0ZSA9PT0gRlVMRklMTEVEID8gb25GdWxmaWxsZWQgOiBvblJlamVjdGVkO1xuICAgIHVud3JhcChwcm9taXNlLCByZXNvbHZlciwgdGhpcy5vdXRjb21lKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnF1ZXVlLnB1c2gobmV3IFF1ZXVlSXRlbShwcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuZnVuY3Rpb24gUXVldWVJdGVtKHByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gIGlmICh0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLm9uRnVsZmlsbGVkID0gb25GdWxmaWxsZWQ7XG4gICAgdGhpcy5jYWxsRnVsZmlsbGVkID0gdGhpcy5vdGhlckNhbGxGdWxmaWxsZWQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5vblJlamVjdGVkID0gb25SZWplY3RlZDtcbiAgICB0aGlzLmNhbGxSZWplY3RlZCA9IHRoaXMub3RoZXJDYWxsUmVqZWN0ZWQ7XG4gIH1cbn1cblF1ZXVlSXRlbS5wcm90b3R5cGUuY2FsbEZ1bGZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBoYW5kbGVycy5yZXNvbHZlKHRoaXMucHJvbWlzZSwgdmFsdWUpO1xufTtcblF1ZXVlSXRlbS5wcm90b3R5cGUub3RoZXJDYWxsRnVsZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHVud3JhcCh0aGlzLnByb21pc2UsIHRoaXMub25GdWxmaWxsZWQsIHZhbHVlKTtcbn07XG5RdWV1ZUl0ZW0ucHJvdG90eXBlLmNhbGxSZWplY3RlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBoYW5kbGVycy5yZWplY3QodGhpcy5wcm9taXNlLCB2YWx1ZSk7XG59O1xuUXVldWVJdGVtLnByb3RvdHlwZS5vdGhlckNhbGxSZWplY3RlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB1bndyYXAodGhpcy5wcm9taXNlLCB0aGlzLm9uUmVqZWN0ZWQsIHZhbHVlKTtcbn07XG5cbmZ1bmN0aW9uIHVud3JhcChwcm9taXNlLCBmdW5jLCB2YWx1ZSkge1xuICBpbW1lZGlhdGUoZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXR1cm5WYWx1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuVmFsdWUgPSBmdW5jKHZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gaGFuZGxlcnMucmVqZWN0KHByb21pc2UsIGUpO1xuICAgIH1cbiAgICBpZiAocmV0dXJuVmFsdWUgPT09IHByb21pc2UpIHtcbiAgICAgIGhhbmRsZXJzLnJlamVjdChwcm9taXNlLCBuZXcgVHlwZUVycm9yKCdDYW5ub3QgcmVzb2x2ZSBwcm9taXNlIHdpdGggaXRzZWxmJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVycy5yZXNvbHZlKHByb21pc2UsIHJldHVyblZhbHVlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5oYW5kbGVycy5yZXNvbHZlID0gZnVuY3Rpb24gKHNlbGYsIHZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSB0cnlDYXRjaChnZXRUaGVuLCB2YWx1ZSk7XG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgcmV0dXJuIGhhbmRsZXJzLnJlamVjdChzZWxmLCByZXN1bHQudmFsdWUpO1xuICB9XG4gIHZhciB0aGVuYWJsZSA9IHJlc3VsdC52YWx1ZTtcblxuICBpZiAodGhlbmFibGUpIHtcbiAgICBzYWZlbHlSZXNvbHZlVGhlbmFibGUoc2VsZiwgdGhlbmFibGUpO1xuICB9IGVsc2Uge1xuICAgIHNlbGYuc3RhdGUgPSBGVUxGSUxMRUQ7XG4gICAgc2VsZi5vdXRjb21lID0gdmFsdWU7XG4gICAgdmFyIGkgPSAtMTtcbiAgICB2YXIgbGVuID0gc2VsZi5xdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgICAgc2VsZi5xdWV1ZVtpXS5jYWxsRnVsZmlsbGVkKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59O1xuaGFuZGxlcnMucmVqZWN0ID0gZnVuY3Rpb24gKHNlbGYsIGVycm9yKSB7XG4gIHNlbGYuc3RhdGUgPSBSRUpFQ1RFRDtcbiAgc2VsZi5vdXRjb21lID0gZXJyb3I7XG4gIHZhciBpID0gLTE7XG4gIHZhciBsZW4gPSBzZWxmLnF1ZXVlLmxlbmd0aDtcbiAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgIHNlbGYucXVldWVbaV0uY2FsbFJlamVjdGVkKGVycm9yKTtcbiAgfVxuICByZXR1cm4gc2VsZjtcbn07XG5cbmZ1bmN0aW9uIGdldFRoZW4ob2JqKSB7XG4gIC8vIE1ha2Ugc3VyZSB3ZSBvbmx5IGFjY2VzcyB0aGUgYWNjZXNzb3Igb25jZSBhcyByZXF1aXJlZCBieSB0aGUgc3BlY1xuICB2YXIgdGhlbiA9IG9iaiAmJiBvYmoudGhlbjtcbiAgaWYgKG9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gYXBweVRoZW4oKSB7XG4gICAgICB0aGVuLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHNhZmVseVJlc29sdmVUaGVuYWJsZShzZWxmLCB0aGVuYWJsZSkge1xuICAvLyBFaXRoZXIgZnVsZmlsbCwgcmVqZWN0IG9yIHJlamVjdCB3aXRoIGVycm9yXG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gb25FcnJvcih2YWx1ZSkge1xuICAgIGlmIChjYWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2FsbGVkID0gdHJ1ZTtcbiAgICBoYW5kbGVycy5yZWplY3Qoc2VsZiwgdmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25TdWNjZXNzKHZhbHVlKSB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYWxsZWQgPSB0cnVlO1xuICAgIGhhbmRsZXJzLnJlc29sdmUoc2VsZiwgdmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJ5VG9VbndyYXAoKSB7XG4gICAgdGhlbmFibGUob25TdWNjZXNzLCBvbkVycm9yKTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSB0cnlDYXRjaCh0cnlUb1Vud3JhcCk7XG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgb25FcnJvcihyZXN1bHQudmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyeUNhdGNoKGZ1bmMsIHZhbHVlKSB7XG4gIHZhciBvdXQgPSB7fTtcbiAgdHJ5IHtcbiAgICBvdXQudmFsdWUgPSBmdW5jKHZhbHVlKTtcbiAgICBvdXQuc3RhdHVzID0gJ3N1Y2Nlc3MnO1xuICB9IGNhdGNoIChlKSB7XG4gICAgb3V0LnN0YXR1cyA9ICdlcnJvcic7XG4gICAgb3V0LnZhbHVlID0gZTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG5Qcm9taXNlLnJlc29sdmUgPSByZXNvbHZlO1xuZnVuY3Rpb24gcmVzb2x2ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiB0aGlzKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBoYW5kbGVycy5yZXNvbHZlKG5ldyB0aGlzKElOVEVSTkFMKSwgdmFsdWUpO1xufVxuXG5Qcm9taXNlLnJlamVjdCA9IHJlamVjdDtcbmZ1bmN0aW9uIHJlamVjdChyZWFzb24pIHtcbiAgdmFyIHByb21pc2UgPSBuZXcgdGhpcyhJTlRFUk5BTCk7XG4gIHJldHVybiBoYW5kbGVycy5yZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbn1cblxuUHJvbWlzZS5hbGwgPSBhbGw7XG5mdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXJhYmxlKSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIHJldHVybiB0aGlzLnJlamVjdChuZXcgVHlwZUVycm9yKCdtdXN0IGJlIGFuIGFycmF5JykpO1xuICB9XG5cbiAgdmFyIGxlbiA9IGl0ZXJhYmxlLmxlbmd0aDtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICBpZiAoIWxlbikge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmUoW10pO1xuICB9XG5cbiAgdmFyIHZhbHVlcyA9IG5ldyBBcnJheShsZW4pO1xuICB2YXIgcmVzb2x2ZWQgPSAwO1xuICB2YXIgaSA9IC0xO1xuICB2YXIgcHJvbWlzZSA9IG5ldyB0aGlzKElOVEVSTkFMKTtcblxuICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgYWxsUmVzb2x2ZXIoaXRlcmFibGVbaV0sIGkpO1xuICB9XG4gIHJldHVybiBwcm9taXNlO1xuICBmdW5jdGlvbiBhbGxSZXNvbHZlcih2YWx1ZSwgaSkge1xuICAgIHNlbGYucmVzb2x2ZSh2YWx1ZSkudGhlbihyZXNvbHZlRnJvbUFsbCwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICBoYW5kbGVycy5yZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHJlc29sdmVGcm9tQWxsKG91dFZhbHVlKSB7XG4gICAgICB2YWx1ZXNbaV0gPSBvdXRWYWx1ZTtcbiAgICAgIGlmICgrK3Jlc29sdmVkID09PSBsZW4gJiYgIWNhbGxlZCkge1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICBoYW5kbGVycy5yZXNvbHZlKHByb21pc2UsIHZhbHVlcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblByb21pc2UucmFjZSA9IHJhY2U7XG5mdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyYWJsZSkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICByZXR1cm4gdGhpcy5yZWplY3QobmV3IFR5cGVFcnJvcignbXVzdCBiZSBhbiBhcnJheScpKTtcbiAgfVxuXG4gIHZhciBsZW4gPSBpdGVyYWJsZS5sZW5ndGg7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgaWYgKCFsZW4pIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlKFtdKTtcbiAgfVxuXG4gIHZhciBpID0gLTE7XG4gIHZhciBwcm9taXNlID0gbmV3IHRoaXMoSU5URVJOQUwpO1xuXG4gIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICByZXNvbHZlcihpdGVyYWJsZVtpXSk7XG4gIH1cbiAgcmV0dXJuIHByb21pc2U7XG4gIGZ1bmN0aW9uIHJlc29sdmVyKHZhbHVlKSB7XG4gICAgc2VsZi5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgaGFuZGxlcnMucmVzb2x2ZShwcm9taXNlLCByZXNwb25zZSk7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICBoYW5kbGVycy5yZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbn0se1wiMVwiOjF9XSwzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbihmdW5jdGlvbiAoZ2xvYmFsKXtcbid1c2Ugc3RyaWN0JztcbmlmICh0eXBlb2YgZ2xvYmFsLlByb21pc2UgIT09ICdmdW5jdGlvbicpIHtcbiAgZ2xvYmFsLlByb21pc2UgPSBfZGVyZXFfKDIpO1xufVxuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbn0se1wiMlwiOjJ9XSw0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBnZXRJREIoKSB7XG4gICAgLyogZ2xvYmFsIGluZGV4ZWREQix3ZWJraXRJbmRleGVkREIsbW96SW5kZXhlZERCLE9JbmRleGVkREIsbXNJbmRleGVkREIgKi9cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGluZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleGVkREI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3ZWJraXRJbmRleGVkREIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gd2Via2l0SW5kZXhlZERCO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbW96SW5kZXhlZERCICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIG1vekluZGV4ZWREQjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIE9JbmRleGVkREIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gT0luZGV4ZWREQjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG1zSW5kZXhlZERCICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIG1zSW5kZXhlZERCO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG52YXIgaWRiID0gZ2V0SURCKCk7XG5cbmZ1bmN0aW9uIGlzSW5kZXhlZERCVmFsaWQoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBJbmRleGVkREI7IGZhbGwgYmFjayB0byB2ZW5kb3ItcHJlZml4ZWQgdmVyc2lvbnNcbiAgICAgICAgLy8gaWYgbmVlZGVkLlxuICAgICAgICBpZiAoIWlkYiB8fCAhaWRiLm9wZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBtaW1pYyBQb3VjaERCIGhlcmU7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIFdlIHRlc3QgZm9yIG9wZW5EYXRhYmFzZSBiZWNhdXNlIElFIE1vYmlsZSBpZGVudGlmaWVzIGl0c2VsZlxuICAgICAgICAvLyBhcyBTYWZhcmkuIE9oIHRoZSBsdWx6Li4uXG4gICAgICAgIHZhciBpc1NhZmFyaSA9IHR5cGVvZiBvcGVuRGF0YWJhc2UgIT09ICd1bmRlZmluZWQnICYmIC8oU2FmYXJpfGlQaG9uZXxpUGFkfGlQb2QpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEvQ2hyb21lLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEvQmxhY2tCZXJyeS8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pO1xuXG4gICAgICAgIHZhciBoYXNGZXRjaCA9IHR5cGVvZiBmZXRjaCA9PT0gJ2Z1bmN0aW9uJyAmJiBmZXRjaC50b1N0cmluZygpLmluZGV4T2YoJ1tuYXRpdmUgY29kZScpICE9PSAtMTtcblxuICAgICAgICAvLyBTYWZhcmkgPDEwLjEgZG9lcyBub3QgbWVldCBvdXIgcmVxdWlyZW1lbnRzIGZvciBJREIgc3VwcG9ydFxuICAgICAgICAvLyAoc2VlOiBodHRwczovL2dpdGh1Yi5jb20vcG91Y2hkYi9wb3VjaGRiL2lzc3Vlcy81NTcyKS5cbiAgICAgICAgLy8gU2FmYXJpIDEwLjEgc2hpcHBlZCB3aXRoIGZldGNoLCB3ZSBjYW4gdXNlIHRoYXQgdG8gZGV0ZWN0IGl0LlxuICAgICAgICAvLyBOb3RlOiB0aGlzIGNyZWF0ZXMgaXNzdWVzIHdpdGggYHdpbmRvdy5mZXRjaGAgcG9seWZpbGxzIGFuZFxuICAgICAgICAvLyBvdmVycmlkZXM7IHNlZTpcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2xvY2FsRm9yYWdlL2xvY2FsRm9yYWdlL2lzc3Vlcy84NTZcbiAgICAgICAgcmV0dXJuICghaXNTYWZhcmkgfHwgaGFzRmV0Y2gpICYmIHR5cGVvZiBpbmRleGVkREIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIC8vIHNvbWUgb3V0ZGF0ZWQgaW1wbGVtZW50YXRpb25zIG9mIElEQiB0aGF0IGFwcGVhciBvbiBTYW1zdW5nXG4gICAgICAgIC8vIGFuZCBIVEMgQW5kcm9pZCBkZXZpY2VzIDw0LjQgYXJlIG1pc3NpbmcgSURCS2V5UmFuZ2VcbiAgICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9pc3N1ZXMvMTI4XG4gICAgICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvaXNzdWVzLzI3MlxuICAgICAgICB0eXBlb2YgSURCS2V5UmFuZ2UgIT09ICd1bmRlZmluZWQnO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuLy8gQWJzdHJhY3RzIGNvbnN0cnVjdGluZyBhIEJsb2Igb2JqZWN0LCBzbyBpdCBhbHNvIHdvcmtzIGluIG9sZGVyXG4vLyBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIG5hdGl2ZSBCbG9iIGNvbnN0cnVjdG9yLiAoaS5lLlxuLy8gb2xkIFF0V2ViS2l0IHZlcnNpb25zLCBhdCBsZWFzdCkuXG4vLyBBYnN0cmFjdHMgY29uc3RydWN0aW5nIGEgQmxvYiBvYmplY3QsIHNvIGl0IGFsc28gd29ya3MgaW4gb2xkZXJcbi8vIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0aGUgbmF0aXZlIEJsb2IgY29uc3RydWN0b3IuIChpLmUuXG4vLyBvbGQgUXRXZWJLaXQgdmVyc2lvbnMsIGF0IGxlYXN0KS5cbmZ1bmN0aW9uIGNyZWF0ZUJsb2IocGFydHMsIHByb3BlcnRpZXMpIHtcbiAgICAvKiBnbG9iYWwgQmxvYkJ1aWxkZXIsTVNCbG9iQnVpbGRlcixNb3pCbG9iQnVpbGRlcixXZWJLaXRCbG9iQnVpbGRlciAqL1xuICAgIHBhcnRzID0gcGFydHMgfHwgW107XG4gICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBCbG9iKHBhcnRzLCBwcm9wZXJ0aWVzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlLm5hbWUgIT09ICdUeXBlRXJyb3InKSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBCdWlsZGVyID0gdHlwZW9mIEJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IEJsb2JCdWlsZGVyIDogdHlwZW9mIE1TQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gTVNCbG9iQnVpbGRlciA6IHR5cGVvZiBNb3pCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBNb3pCbG9iQnVpbGRlciA6IFdlYktpdEJsb2JCdWlsZGVyO1xuICAgICAgICB2YXIgYnVpbGRlciA9IG5ldyBCdWlsZGVyKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGJ1aWxkZXIuYXBwZW5kKHBhcnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVpbGRlci5nZXRCbG9iKHByb3BlcnRpZXMudHlwZSk7XG4gICAgfVxufVxuXG4vLyBUaGlzIGlzIENvbW1vbkpTIGJlY2F1c2UgbGllIGlzIGFuIGV4dGVybmFsIGRlcGVuZGVuY3ksIHNvIFJvbGx1cFxuLy8gY2FuIGp1c3QgaWdub3JlIGl0LlxuaWYgKHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEluIHRoZSBcIm5vcHJvbWlzZXNcIiBidWlsZCB0aGlzIHdpbGwganVzdCB0aHJvdyBpZiB5b3UgZG9uJ3QgaGF2ZVxuICAgIC8vIGEgZ2xvYmFsIHByb21pc2Ugb2JqZWN0LCBidXQgaXQgd291bGQgdGhyb3cgYW55d2F5IGxhdGVyLlxuICAgIF9kZXJlcV8oMyk7XG59XG52YXIgUHJvbWlzZSQxID0gUHJvbWlzZTtcblxuZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBleGVjdXRlVHdvQ2FsbGJhY2tzKHByb21pc2UsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9taXNlLnRoZW4oY2FsbGJhY2spO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZXJyb3JDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9taXNlW1wiY2F0Y2hcIl0oZXJyb3JDYWxsYmFjayk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVLZXkoa2V5KSB7XG4gICAgLy8gQ2FzdCB0aGUga2V5IHRvIGEgc3RyaW5nLCBhcyB0aGF0J3MgYWxsIHdlIGNhbiBzZXQgYXMgYSBrZXkuXG4gICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihrZXkgKyAnIHVzZWQgYXMgYSBrZXksIGJ1dCBpdCBpcyBub3QgYSBzdHJpbmcuJyk7XG4gICAgICAgIGtleSA9IFN0cmluZyhrZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBrZXk7XG59XG5cbmZ1bmN0aW9uIGdldENhbGxiYWNrKCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICYmIHR5cGVvZiBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdO1xuICAgIH1cbn1cblxuLy8gU29tZSBjb2RlIG9yaWdpbmFsbHkgZnJvbSBhc3luY19zdG9yYWdlLmpzIGluXG4vLyBbR2FpYV0oaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEtYjJnL2dhaWEpLlxuXG52YXIgREVURUNUX0JMT0JfU1VQUE9SVF9TVE9SRSA9ICdsb2NhbC1mb3JhZ2UtZGV0ZWN0LWJsb2Itc3VwcG9ydCc7XG52YXIgc3VwcG9ydHNCbG9icyA9IHZvaWQgMDtcbnZhciBkYkNvbnRleHRzID0ge307XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vLyBUcmFuc2FjdGlvbiBNb2Rlc1xudmFyIFJFQURfT05MWSA9ICdyZWFkb25seSc7XG52YXIgUkVBRF9XUklURSA9ICdyZWFkd3JpdGUnO1xuXG4vLyBUcmFuc2Zvcm0gYSBiaW5hcnkgc3RyaW5nIHRvIGFuIGFycmF5IGJ1ZmZlciwgYmVjYXVzZSBvdGhlcndpc2Vcbi8vIHdlaXJkIHN0dWZmIGhhcHBlbnMgd2hlbiB5b3UgdHJ5IHRvIHdvcmsgd2l0aCB0aGUgYmluYXJ5IHN0cmluZyBkaXJlY3RseS5cbi8vIEl0IGlzIGtub3duLlxuLy8gRnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE0OTY3NjQ3LyAoY29udGludWVzIG9uIG5leHQgbGluZSlcbi8vIGVuY29kZS1kZWNvZGUtaW1hZ2Utd2l0aC1iYXNlNjQtYnJlYWtzLWltYWdlICgyMDEzLTA0LTIxKVxuZnVuY3Rpb24gX2JpblN0cmluZ1RvQXJyYXlCdWZmZXIoYmluKSB7XG4gICAgdmFyIGxlbmd0aCA9IGJpbi5sZW5ndGg7XG4gICAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihsZW5ndGgpO1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShidWYpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyW2ldID0gYmluLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBidWY7XG59XG5cbi8vXG4vLyBCbG9icyBhcmUgbm90IHN1cHBvcnRlZCBpbiBhbGwgdmVyc2lvbnMgb2YgSW5kZXhlZERCLCBub3RhYmx5XG4vLyBDaHJvbWUgPDM3IGFuZCBBbmRyb2lkIDw1LiBJbiB0aG9zZSB2ZXJzaW9ucywgc3RvcmluZyBhIGJsb2Igd2lsbCB0aHJvdy5cbi8vXG4vLyBWYXJpb3VzIG90aGVyIGJsb2IgYnVncyBleGlzdCBpbiBDaHJvbWUgdjM3LTQyIChpbmNsdXNpdmUpLlxuLy8gRGV0ZWN0aW5nIHRoZW0gaXMgZXhwZW5zaXZlIGFuZCBjb25mdXNpbmcgdG8gdXNlcnMsIGFuZCBDaHJvbWUgMzctNDJcbi8vIGlzIGF0IHZlcnkgbG93IHVzYWdlIHdvcmxkd2lkZSwgc28gd2UgZG8gYSBoYWNreSB1c2VyQWdlbnQgY2hlY2sgaW5zdGVhZC5cbi8vXG4vLyBjb250ZW50LXR5cGUgYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDA4MTIwXG4vLyA0MDQgYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDQ3OTE2XG4vLyBGaWxlUmVhZGVyIGJ1ZzogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ0NzgzNlxuLy9cbi8vIENvZGUgYm9ycm93ZWQgZnJvbSBQb3VjaERCLiBTZWU6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vcG91Y2hkYi9wb3VjaGRiL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL25vZGVfbW9kdWxlcy9wb3VjaGRiLWFkYXB0ZXItaWRiL3NyYy9ibG9iU3VwcG9ydC5qc1xuLy9cbmZ1bmN0aW9uIF9jaGVja0Jsb2JTdXBwb3J0V2l0aG91dENhY2hpbmcoaWRiKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgdmFyIHR4biA9IGlkYi50cmFuc2FjdGlvbihERVRFQ1RfQkxPQl9TVVBQT1JUX1NUT1JFLCBSRUFEX1dSSVRFKTtcbiAgICAgICAgdmFyIGJsb2IgPSBjcmVhdGVCbG9iKFsnJ10pO1xuICAgICAgICB0eG4ub2JqZWN0U3RvcmUoREVURUNUX0JMT0JfU1VQUE9SVF9TVE9SRSkucHV0KGJsb2IsICdrZXknKTtcblxuICAgICAgICB0eG4ub25hYm9ydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdHJhbnNhY3Rpb24gYWJvcnRzIG5vdyBpdHMgZHVlIHRvIG5vdCBiZWluZyBhYmxlIHRvXG4gICAgICAgICAgICAvLyB3cml0ZSB0byB0aGUgZGF0YWJhc2UsIGxpa2VseSBkdWUgdG8gdGhlIGRpc2sgYmVpbmcgZnVsbFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHR4bi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1hdGNoZWRDaHJvbWUgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICAgICAgICAgIHZhciBtYXRjaGVkRWRnZSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8vKTtcbiAgICAgICAgICAgIC8vIE1TIEVkZ2UgcHJldGVuZHMgdG8gYmUgQ2hyb21lIDQyOlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9oaDg2OTMwMSUyOHY9dnMuODUlMjkuYXNweFxuICAgICAgICAgICAgcmVzb2x2ZShtYXRjaGVkRWRnZSB8fCAhbWF0Y2hlZENocm9tZSB8fCBwYXJzZUludChtYXRjaGVkQ2hyb21lWzFdLCAxMCkgPj0gNDMpO1xuICAgICAgICB9O1xuICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIGVycm9yLCBzbyBhc3N1bWUgdW5zdXBwb3J0ZWRcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX2NoZWNrQmxvYlN1cHBvcnQoaWRiKSB7XG4gICAgaWYgKHR5cGVvZiBzdXBwb3J0c0Jsb2JzID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UkMS5yZXNvbHZlKHN1cHBvcnRzQmxvYnMpO1xuICAgIH1cbiAgICByZXR1cm4gX2NoZWNrQmxvYlN1cHBvcnRXaXRob3V0Q2FjaGluZyhpZGIpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHN1cHBvcnRzQmxvYnMgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRzQmxvYnM7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIF9kZWZlclJlYWRpbmVzcyhkYkluZm8pIHtcbiAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tkYkluZm8ubmFtZV07XG5cbiAgICAvLyBDcmVhdGUgYSBkZWZlcnJlZCBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IGRhdGFiYXNlIG9wZXJhdGlvbi5cbiAgICB2YXIgZGVmZXJyZWRPcGVyYXRpb24gPSB7fTtcblxuICAgIGRlZmVycmVkT3BlcmF0aW9uLnByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZGVmZXJyZWRPcGVyYXRpb24ucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIGRlZmVycmVkT3BlcmF0aW9uLnJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcblxuICAgIC8vIEVucXVldWUgdGhlIGRlZmVycmVkIG9wZXJhdGlvbi5cbiAgICBkYkNvbnRleHQuZGVmZXJyZWRPcGVyYXRpb25zLnB1c2goZGVmZXJyZWRPcGVyYXRpb24pO1xuXG4gICAgLy8gQ2hhaW4gaXRzIHByb21pc2UgdG8gdGhlIGRhdGFiYXNlIHJlYWRpbmVzcy5cbiAgICBpZiAoIWRiQ29udGV4dC5kYlJlYWR5KSB7XG4gICAgICAgIGRiQ29udGV4dC5kYlJlYWR5ID0gZGVmZXJyZWRPcGVyYXRpb24ucHJvbWlzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkYkNvbnRleHQuZGJSZWFkeSA9IGRiQ29udGV4dC5kYlJlYWR5LnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkT3BlcmF0aW9uLnByb21pc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX2FkdmFuY2VSZWFkaW5lc3MoZGJJbmZvKSB7XG4gICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdO1xuXG4gICAgLy8gRGVxdWV1ZSBhIGRlZmVycmVkIG9wZXJhdGlvbi5cbiAgICB2YXIgZGVmZXJyZWRPcGVyYXRpb24gPSBkYkNvbnRleHQuZGVmZXJyZWRPcGVyYXRpb25zLnBvcCgpO1xuXG4gICAgLy8gUmVzb2x2ZSBpdHMgcHJvbWlzZSAod2hpY2ggaXMgcGFydCBvZiB0aGUgZGF0YWJhc2UgcmVhZGluZXNzXG4gICAgLy8gY2hhaW4gb2YgcHJvbWlzZXMpLlxuICAgIGlmIChkZWZlcnJlZE9wZXJhdGlvbikge1xuICAgICAgICBkZWZlcnJlZE9wZXJhdGlvbi5yZXNvbHZlKCk7XG4gICAgICAgIHJldHVybiBkZWZlcnJlZE9wZXJhdGlvbi5wcm9taXNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX3JlamVjdFJlYWRpbmVzcyhkYkluZm8sIGVycikge1xuICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcblxuICAgIC8vIERlcXVldWUgYSBkZWZlcnJlZCBvcGVyYXRpb24uXG4gICAgdmFyIGRlZmVycmVkT3BlcmF0aW9uID0gZGJDb250ZXh0LmRlZmVycmVkT3BlcmF0aW9ucy5wb3AoKTtcblxuICAgIC8vIFJlamVjdCBpdHMgcHJvbWlzZSAod2hpY2ggaXMgcGFydCBvZiB0aGUgZGF0YWJhc2UgcmVhZGluZXNzXG4gICAgLy8gY2hhaW4gb2YgcHJvbWlzZXMpLlxuICAgIGlmIChkZWZlcnJlZE9wZXJhdGlvbikge1xuICAgICAgICBkZWZlcnJlZE9wZXJhdGlvbi5yZWplY3QoZXJyKTtcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkT3BlcmF0aW9uLnByb21pc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfZ2V0Q29ubmVjdGlvbihkYkluZm8sIHVwZ3JhZGVOZWVkZWQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdID0gZGJDb250ZXh0c1tkYkluZm8ubmFtZV0gfHwgY3JlYXRlRGJDb250ZXh0KCk7XG5cbiAgICAgICAgaWYgKGRiSW5mby5kYikge1xuICAgICAgICAgICAgaWYgKHVwZ3JhZGVOZWVkZWQpIHtcbiAgICAgICAgICAgICAgICBfZGVmZXJSZWFkaW5lc3MoZGJJbmZvKTtcbiAgICAgICAgICAgICAgICBkYkluZm8uZGIuY2xvc2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZGJJbmZvLmRiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYkFyZ3MgPSBbZGJJbmZvLm5hbWVdO1xuXG4gICAgICAgIGlmICh1cGdyYWRlTmVlZGVkKSB7XG4gICAgICAgICAgICBkYkFyZ3MucHVzaChkYkluZm8udmVyc2lvbik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3BlbnJlcSA9IGlkYi5vcGVuLmFwcGx5KGlkYiwgZGJBcmdzKTtcblxuICAgICAgICBpZiAodXBncmFkZU5lZWRlZCkge1xuICAgICAgICAgICAgb3BlbnJlcS5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBkYiA9IG9wZW5yZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKGRiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5vbGRWZXJzaW9uIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZGVkIHdoZW4gc3VwcG9ydCBmb3IgYmxvYiBzaGltcyB3YXMgYWRkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKERFVEVDVF9CTE9CX1NVUFBPUlRfU1RPUkUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4Lm5hbWUgPT09ICdDb25zdHJhaW50RXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBkYXRhYmFzZSBcIicgKyBkYkluZm8ubmFtZSArICdcIicgKyAnIGhhcyBiZWVuIHVwZ3JhZGVkIGZyb20gdmVyc2lvbiAnICsgZS5vbGRWZXJzaW9uICsgJyB0byB2ZXJzaW9uICcgKyBlLm5ld1ZlcnNpb24gKyAnLCBidXQgdGhlIHN0b3JhZ2UgXCInICsgZGJJbmZvLnN0b3JlTmFtZSArICdcIiBhbHJlYWR5IGV4aXN0cy4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wZW5yZXEub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZWplY3Qob3BlbnJlcS5lcnJvcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgb3BlbnJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGIgPSBvcGVucmVxLnJlc3VsdDtcbiAgICAgICAgICAgIGRiLm9udmVyc2lvbmNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlcmVkIHdoZW4gdGhlIGRhdGFiYXNlIGlzIG1vZGlmaWVkIChlLmcuIGFkZGluZyBhbiBvYmplY3RTdG9yZSkgb3JcbiAgICAgICAgICAgICAgICAvLyBkZWxldGVkIChldmVuIHdoZW4gaW5pdGlhdGVkIGJ5IG90aGVyIHNlc3Npb25zIGluIGRpZmZlcmVudCB0YWJzKS5cbiAgICAgICAgICAgICAgICAvLyBDbG9zaW5nIHRoZSBjb25uZWN0aW9uIGhlcmUgcHJldmVudHMgdGhvc2Ugb3BlcmF0aW9ucyBmcm9tIGJlaW5nIGJsb2NrZWQuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGRhdGFiYXNlIGlzIGFjY2Vzc2VkIGFnYWluIGxhdGVyIGJ5IHRoaXMgaW5zdGFuY2UsIHRoZSBjb25uZWN0aW9uXG4gICAgICAgICAgICAgICAgLy8gd2lsbCBiZSByZW9wZW5lZCBvciB0aGUgZGF0YWJhc2UgcmVjcmVhdGVkIGFzIG5lZWRlZC5cbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbG9zZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlc29sdmUoZGIpO1xuICAgICAgICAgICAgX2FkdmFuY2VSZWFkaW5lc3MoZGJJbmZvKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX2dldE9yaWdpbmFsQ29ubmVjdGlvbihkYkluZm8pIHtcbiAgICByZXR1cm4gX2dldENvbm5lY3Rpb24oZGJJbmZvLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIF9nZXRVcGdyYWRlZENvbm5lY3Rpb24oZGJJbmZvKSB7XG4gICAgcmV0dXJuIF9nZXRDb25uZWN0aW9uKGRiSW5mbywgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIF9pc1VwZ3JhZGVOZWVkZWQoZGJJbmZvLCBkZWZhdWx0VmVyc2lvbikge1xuICAgIGlmICghZGJJbmZvLmRiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBpc05ld1N0b3JlID0gIWRiSW5mby5kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKGRiSW5mby5zdG9yZU5hbWUpO1xuICAgIHZhciBpc0Rvd25ncmFkZSA9IGRiSW5mby52ZXJzaW9uIDwgZGJJbmZvLmRiLnZlcnNpb247XG4gICAgdmFyIGlzVXBncmFkZSA9IGRiSW5mby52ZXJzaW9uID4gZGJJbmZvLmRiLnZlcnNpb247XG5cbiAgICBpZiAoaXNEb3duZ3JhZGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHZlcnNpb24gaXMgbm90IHRoZSBkZWZhdWx0IG9uZVxuICAgICAgICAvLyB0aGVuIHdhcm4gZm9yIGltcG9zc2libGUgZG93bmdyYWRlLlxuICAgICAgICBpZiAoZGJJbmZvLnZlcnNpb24gIT09IGRlZmF1bHRWZXJzaW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBkYXRhYmFzZSBcIicgKyBkYkluZm8ubmFtZSArICdcIicgKyBcIiBjYW4ndCBiZSBkb3duZ3JhZGVkIGZyb20gdmVyc2lvbiBcIiArIGRiSW5mby5kYi52ZXJzaW9uICsgJyB0byB2ZXJzaW9uICcgKyBkYkluZm8udmVyc2lvbiArICcuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWxpZ24gdGhlIHZlcnNpb25zIHRvIHByZXZlbnQgZXJyb3JzLlxuICAgICAgICBkYkluZm8udmVyc2lvbiA9IGRiSW5mby5kYi52ZXJzaW9uO1xuICAgIH1cblxuICAgIGlmIChpc1VwZ3JhZGUgfHwgaXNOZXdTdG9yZSkge1xuICAgICAgICAvLyBJZiB0aGUgc3RvcmUgaXMgbmV3IHRoZW4gaW5jcmVtZW50IHRoZSB2ZXJzaW9uIChpZiBuZWVkZWQpLlxuICAgICAgICAvLyBUaGlzIHdpbGwgdHJpZ2dlciBhbiBcInVwZ3JhZGVuZWVkZWRcIiBldmVudCB3aGljaCBpcyByZXF1aXJlZFxuICAgICAgICAvLyBmb3IgY3JlYXRpbmcgYSBzdG9yZS5cbiAgICAgICAgaWYgKGlzTmV3U3RvcmUpIHtcbiAgICAgICAgICAgIHZhciBpbmNWZXJzaW9uID0gZGJJbmZvLmRiLnZlcnNpb24gKyAxO1xuICAgICAgICAgICAgaWYgKGluY1ZlcnNpb24gPiBkYkluZm8udmVyc2lvbikge1xuICAgICAgICAgICAgICAgIGRiSW5mby52ZXJzaW9uID0gaW5jVmVyc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLy8gZW5jb2RlIGEgYmxvYiBmb3IgaW5kZXhlZGRiIGVuZ2luZXMgdGhhdCBkb24ndCBzdXBwb3J0IGJsb2JzXG5mdW5jdGlvbiBfZW5jb2RlQmxvYihibG9iKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGJhc2U2NCA9IGJ0b2EoZS50YXJnZXQucmVzdWx0IHx8ICcnKTtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIF9fbG9jYWxfZm9yYWdlX2VuY29kZWRfYmxvYjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBiYXNlNjQsXG4gICAgICAgICAgICAgICAgdHlwZTogYmxvYi50eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhibG9iKTtcbiAgICB9KTtcbn1cblxuLy8gZGVjb2RlIGFuIGVuY29kZWQgYmxvYlxuZnVuY3Rpb24gX2RlY29kZUJsb2IoZW5jb2RlZEJsb2IpIHtcbiAgICB2YXIgYXJyYXlCdWZmID0gX2JpblN0cmluZ1RvQXJyYXlCdWZmZXIoYXRvYihlbmNvZGVkQmxvYi5kYXRhKSk7XG4gICAgcmV0dXJuIGNyZWF0ZUJsb2IoW2FycmF5QnVmZl0sIHsgdHlwZTogZW5jb2RlZEJsb2IudHlwZSB9KTtcbn1cblxuLy8gaXMgdGhpcyBvbmUgb2Ygb3VyIGZhbmN5IGVuY29kZWQgYmxvYnM/XG5mdW5jdGlvbiBfaXNFbmNvZGVkQmxvYih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5fX2xvY2FsX2ZvcmFnZV9lbmNvZGVkX2Jsb2I7XG59XG5cbi8vIFNwZWNpYWxpemUgdGhlIGRlZmF1bHQgYHJlYWR5KClgIGZ1bmN0aW9uIGJ5IG1ha2luZyBpdCBkZXBlbmRlbnRcbi8vIG9uIHRoZSBjdXJyZW50IGRhdGFiYXNlIG9wZXJhdGlvbnMuIFRodXMsIHRoZSBkcml2ZXIgd2lsbCBiZSBhY3R1YWxseVxuLy8gcmVhZHkgd2hlbiBpdCdzIGJlZW4gaW5pdGlhbGl6ZWQgKGRlZmF1bHQpICphbmQqIHRoZXJlIGFyZSBubyBwZW5kaW5nXG4vLyBvcGVyYXRpb25zIG9uIHRoZSBkYXRhYmFzZSAoaW5pdGlhdGVkIGJ5IHNvbWUgb3RoZXIgaW5zdGFuY2VzKS5cbmZ1bmN0aW9uIF9mdWxseVJlYWR5KGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBzZWxmLl9pbml0UmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbc2VsZi5fZGJJbmZvLm5hbWVdO1xuXG4gICAgICAgIGlmIChkYkNvbnRleHQgJiYgZGJDb250ZXh0LmRiUmVhZHkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkNvbnRleHQuZGJSZWFkeTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXhlY3V0ZVR3b0NhbGxiYWNrcyhwcm9taXNlLCBjYWxsYmFjaywgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBUcnkgdG8gZXN0YWJsaXNoIGEgbmV3IGRiIGNvbm5lY3Rpb24gdG8gcmVwbGFjZSB0aGVcbi8vIGN1cnJlbnQgb25lIHdoaWNoIGlzIGJyb2tlbiAoaS5lLiBleHBlcmllbmNpbmdcbi8vIEludmFsaWRTdGF0ZUVycm9yIHdoaWxlIGNyZWF0aW5nIGEgdHJhbnNhY3Rpb24pLlxuZnVuY3Rpb24gX3RyeVJlY29ubmVjdChkYkluZm8pIHtcbiAgICBfZGVmZXJSZWFkaW5lc3MoZGJJbmZvKTtcblxuICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcbiAgICB2YXIgZm9yYWdlcyA9IGRiQ29udGV4dC5mb3JhZ2VzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBmb3JhZ2UgPSBmb3JhZ2VzW2ldO1xuICAgICAgICBpZiAoZm9yYWdlLl9kYkluZm8uZGIpIHtcbiAgICAgICAgICAgIGZvcmFnZS5fZGJJbmZvLmRiLmNsb3NlKCk7XG4gICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby5kYiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGJJbmZvLmRiID0gbnVsbDtcblxuICAgIHJldHVybiBfZ2V0T3JpZ2luYWxDb25uZWN0aW9uKGRiSW5mbykudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgZGJJbmZvLmRiID0gZGI7XG4gICAgICAgIGlmIChfaXNVcGdyYWRlTmVlZGVkKGRiSW5mbykpIHtcbiAgICAgICAgICAgIC8vIFJlb3BlbiB0aGUgZGF0YWJhc2UgZm9yIHVwZ3JhZGluZy5cbiAgICAgICAgICAgIHJldHVybiBfZ2V0VXBncmFkZWRDb25uZWN0aW9uKGRiSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRiO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgIC8vIHN0b3JlIHRoZSBsYXRlc3QgZGIgcmVmZXJlbmNlXG4gICAgICAgIC8vIGluIGNhc2UgdGhlIGRiIHdhcyB1cGdyYWRlZFxuICAgICAgICBkYkluZm8uZGIgPSBkYkNvbnRleHQuZGIgPSBkYjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3JhZ2VzW2ldLl9kYkluZm8uZGIgPSBkYjtcbiAgICAgICAgfVxuICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycikge1xuICAgICAgICBfcmVqZWN0UmVhZGluZXNzKGRiSW5mbywgZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuXG4vLyBGRiBkb2Vzbid0IGxpa2UgUHJvbWlzZXMgKG1pY3JvLXRhc2tzKSBhbmQgSUREQiBzdG9yZSBvcGVyYXRpb25zLFxuLy8gc28gd2UgaGF2ZSB0byBkbyBpdCB3aXRoIGNhbGxiYWNrc1xuZnVuY3Rpb24gY3JlYXRlVHJhbnNhY3Rpb24oZGJJbmZvLCBtb2RlLCBjYWxsYmFjaywgcmV0cmllcykge1xuICAgIGlmIChyZXRyaWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0cmllcyA9IDE7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHR4ID0gZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGRiSW5mby5zdG9yZU5hbWUsIG1vZGUpO1xuICAgICAgICBjYWxsYmFjayhudWxsLCB0eCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChyZXRyaWVzID4gMCAmJiAoIWRiSW5mby5kYiB8fCBlcnIubmFtZSA9PT0gJ0ludmFsaWRTdGF0ZUVycm9yJyB8fCBlcnIubmFtZSA9PT0gJ05vdEZvdW5kRXJyb3InKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UkMS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkYkluZm8uZGIgfHwgZXJyLm5hbWUgPT09ICdOb3RGb3VuZEVycm9yJyAmJiAhZGJJbmZvLmRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoZGJJbmZvLnN0b3JlTmFtZSkgJiYgZGJJbmZvLnZlcnNpb24gPD0gZGJJbmZvLmRiLnZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGRiIHZlcnNpb24sIHRvIGNyZWF0ZSB0aGUgbmV3IE9iamVjdFN0b3JlXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYkluZm8uZGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiSW5mby52ZXJzaW9uID0gZGJJbmZvLmRiLnZlcnNpb24gKyAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlb3BlbiB0aGUgZGF0YWJhc2UgZm9yIHVwZ3JhZGluZy5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9nZXRVcGdyYWRlZENvbm5lY3Rpb24oZGJJbmZvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RyeVJlY29ubmVjdChkYkluZm8pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihkYkluZm8sIG1vZGUsIGNhbGxiYWNrLCByZXRyaWVzIC0gMSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVtcImNhdGNoXCJdKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVEYkNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUnVubmluZyBsb2NhbEZvcmFnZXMgc2hhcmluZyBhIGRhdGFiYXNlLlxuICAgICAgICBmb3JhZ2VzOiBbXSxcbiAgICAgICAgLy8gU2hhcmVkIGRhdGFiYXNlLlxuICAgICAgICBkYjogbnVsbCxcbiAgICAgICAgLy8gRGF0YWJhc2UgcmVhZGluZXNzIChwcm9taXNlKS5cbiAgICAgICAgZGJSZWFkeTogbnVsbCxcbiAgICAgICAgLy8gRGVmZXJyZWQgb3BlcmF0aW9ucyBvbiB0aGUgZGF0YWJhc2UuXG4gICAgICAgIGRlZmVycmVkT3BlcmF0aW9uczogW11cbiAgICB9O1xufVxuXG4vLyBPcGVuIHRoZSBJbmRleGVkREIgZGF0YWJhc2UgKGF1dG9tYXRpY2FsbHkgY3JlYXRlcyBvbmUgaWYgb25lIGRpZG4ndFxuLy8gcHJldmlvdXNseSBleGlzdCksIHVzaW5nIGFueSBvcHRpb25zIHNldCBpbiB0aGUgY29uZmlnLlxuZnVuY3Rpb24gX2luaXRTdG9yYWdlKG9wdGlvbnMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGRiSW5mbyA9IHtcbiAgICAgICAgZGI6IG51bGxcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBkYkluZm9baV0gPSBvcHRpb25zW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IGNvbnRleHQgb2YgdGhlIGRhdGFiYXNlO1xuICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcblxuICAgIC8vIC4uLm9yIGNyZWF0ZSBhIG5ldyBjb250ZXh0LlxuICAgIGlmICghZGJDb250ZXh0KSB7XG4gICAgICAgIGRiQ29udGV4dCA9IGNyZWF0ZURiQ29udGV4dCgpO1xuICAgICAgICAvLyBSZWdpc3RlciB0aGUgbmV3IGNvbnRleHQgaW4gdGhlIGdsb2JhbCBjb250YWluZXIuXG4gICAgICAgIGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdID0gZGJDb250ZXh0O1xuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVyIGl0c2VsZiBhcyBhIHJ1bm5pbmcgbG9jYWxGb3JhZ2UgaW4gdGhlIGN1cnJlbnQgY29udGV4dC5cbiAgICBkYkNvbnRleHQuZm9yYWdlcy5wdXNoKHNlbGYpO1xuXG4gICAgLy8gUmVwbGFjZSB0aGUgZGVmYXVsdCBgcmVhZHkoKWAgZnVuY3Rpb24gd2l0aCB0aGUgc3BlY2lhbGl6ZWQgb25lLlxuICAgIGlmICghc2VsZi5faW5pdFJlYWR5KSB7XG4gICAgICAgIHNlbGYuX2luaXRSZWFkeSA9IHNlbGYucmVhZHk7XG4gICAgICAgIHNlbGYucmVhZHkgPSBfZnVsbHlSZWFkeTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgaW5pdGlhbGl6YXRpb24gc3RhdGVzIG9mIHRoZSByZWxhdGVkIGxvY2FsRm9yYWdlcy5cbiAgICB2YXIgaW5pdFByb21pc2VzID0gW107XG5cbiAgICBmdW5jdGlvbiBpZ25vcmVFcnJvcnMoKSB7XG4gICAgICAgIC8vIERvbid0IGhhbmRsZSBlcnJvcnMgaGVyZSxcbiAgICAgICAgLy8ganVzdCBtYWtlcyBzdXJlIHJlbGF0ZWQgbG9jYWxGb3JhZ2VzIGFyZW4ndCBwZW5kaW5nLlxuICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRiQ29udGV4dC5mb3JhZ2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBmb3JhZ2UgPSBkYkNvbnRleHQuZm9yYWdlc1tqXTtcbiAgICAgICAgaWYgKGZvcmFnZSAhPT0gc2VsZikge1xuICAgICAgICAgICAgLy8gRG9uJ3Qgd2FpdCBmb3IgaXRzZWxmLi4uXG4gICAgICAgICAgICBpbml0UHJvbWlzZXMucHVzaChmb3JhZ2UuX2luaXRSZWFkeSgpW1wiY2F0Y2hcIl0oaWdub3JlRXJyb3JzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUYWtlIGEgc25hcHNob3Qgb2YgdGhlIHJlbGF0ZWQgbG9jYWxGb3JhZ2VzLlxuICAgIHZhciBmb3JhZ2VzID0gZGJDb250ZXh0LmZvcmFnZXMuc2xpY2UoMCk7XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBjb25uZWN0aW9uIHByb2Nlc3Mgb25seSB3aGVuXG4gICAgLy8gYWxsIHRoZSByZWxhdGVkIGxvY2FsRm9yYWdlcyBhcmVuJ3QgcGVuZGluZy5cbiAgICByZXR1cm4gUHJvbWlzZSQxLmFsbChpbml0UHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBkYkluZm8uZGIgPSBkYkNvbnRleHQuZGI7XG4gICAgICAgIC8vIEdldCB0aGUgY29ubmVjdGlvbiBvciBvcGVuIGEgbmV3IG9uZSB3aXRob3V0IHVwZ3JhZGUuXG4gICAgICAgIHJldHVybiBfZ2V0T3JpZ2luYWxDb25uZWN0aW9uKGRiSW5mbyk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgZGJJbmZvLmRiID0gZGI7XG4gICAgICAgIGlmIChfaXNVcGdyYWRlTmVlZGVkKGRiSW5mbywgc2VsZi5fZGVmYXVsdENvbmZpZy52ZXJzaW9uKSkge1xuICAgICAgICAgICAgLy8gUmVvcGVuIHRoZSBkYXRhYmFzZSBmb3IgdXBncmFkaW5nLlxuICAgICAgICAgICAgcmV0dXJuIF9nZXRVcGdyYWRlZENvbm5lY3Rpb24oZGJJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGI7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgZGJJbmZvLmRiID0gZGJDb250ZXh0LmRiID0gZGI7XG4gICAgICAgIHNlbGYuX2RiSW5mbyA9IGRiSW5mbztcbiAgICAgICAgLy8gU2hhcmUgdGhlIGZpbmFsIGNvbm5lY3Rpb24gYW1vbmdzdCByZWxhdGVkIGxvY2FsRm9yYWdlcy5cbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBmb3JhZ2VzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICB2YXIgZm9yYWdlID0gZm9yYWdlc1trXTtcbiAgICAgICAgICAgIGlmIChmb3JhZ2UgIT09IHNlbGYpIHtcbiAgICAgICAgICAgICAgICAvLyBTZWxmIGlzIGFscmVhZHkgdXAtdG8tZGF0ZS5cbiAgICAgICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby5kYiA9IGRiSW5mby5kYjtcbiAgICAgICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby52ZXJzaW9uID0gZGJJbmZvLnZlcnNpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SXRlbShrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfT05MWSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLmdldChrZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2lzRW5jb2RlZEJsb2IodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBfZGVjb2RlQmxvYih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBJdGVyYXRlIG92ZXIgYWxsIGl0ZW1zIHN0b3JlZCBpbiBkYXRhYmFzZS5cbmZ1bmN0aW9uIGl0ZXJhdGUoaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX09OTFksIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5vcGVuQ3Vyc29yKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVyYXRpb25OdW1iZXIgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3Vyc29yID0gcmVxLnJlc3VsdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGN1cnNvci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2lzRW5jb2RlZEJsb2IodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gX2RlY29kZUJsb2IodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IodmFsdWUsIGN1cnNvci5rZXksIGl0ZXJhdGlvbk51bWJlcisrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGl0ZXJhdG9yIGNhbGxiYWNrIHJldHVybnMgYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKG5vbi1gdW5kZWZpbmVkYCkgdmFsdWUsIHRoZW4gd2Ugc3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBpdGVyYXRpb24gaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcltcImNvbnRpbnVlXCJdKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcblxuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBzZXRJdGVtKGtleSwgdmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgZGJJbmZvO1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBpZiAodG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEJsb2JdJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfY2hlY2tCbG9iU3VwcG9ydChkYkluZm8uZGIpLnRoZW4oZnVuY3Rpb24gKGJsb2JTdXBwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9iU3VwcG9ydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZW5jb2RlQmxvYih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfV1JJVEUsIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlYXNvbiB3ZSBkb24ndCBfc2F2ZV8gbnVsbCBpcyBiZWNhdXNlIElFIDEwIGRvZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90IHN1cHBvcnQgc2F2aW5nIHRoZSBgbnVsbGAgdHlwZSBpbiBJbmRleGVkREIuIEhvd1xuICAgICAgICAgICAgICAgICAgICAvLyBpcm9uaWMsIGdpdmVuIHRoZSBidWcgYmVsb3chXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvaXNzdWVzLzE2MVxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLnB1dCh2YWx1ZSwga2V5KTtcblxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FzdCB0byB1bmRlZmluZWQgc28gdGhlIHZhbHVlIHBhc3NlZCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FsbGJhY2svcHJvbWlzZSBpcyB0aGUgc2FtZSBhcyB3aGF0IG9uZSB3b3VsZCBnZXQgb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvZiBgZ2V0SXRlbSgpYCBsYXRlci4gVGhpcyBsZWFkcyB0byBzb21lIHdlaXJkbmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKHNldEl0ZW0oJ2ZvbycsIHVuZGVmaW5lZCkgd2lsbCByZXR1cm4gYG51bGxgKSwgYnV0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdCBteSBmYXVsdCBsb2NhbFN0b3JhZ2UgaXMgb3VyIGJhc2VsaW5lIGFuZCB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIHdlaXJkLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmFib3J0ID0gdHJhbnNhY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSByZXEuZXJyb3IgPyByZXEuZXJyb3IgOiByZXEudHJhbnNhY3Rpb24uZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSXRlbShrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfV1JJVEUsIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIHVzZSBhIEdydW50IHRhc2sgdG8gbWFrZSB0aGlzIHNhZmUgZm9yIElFIGFuZCBzb21lXG4gICAgICAgICAgICAgICAgICAgIC8vIHZlcnNpb25zIG9mIEFuZHJvaWQgKGluY2x1ZGluZyB0aG9zZSB1c2VkIGJ5IENvcmRvdmEpLlxuICAgICAgICAgICAgICAgICAgICAvLyBOb3JtYWxseSBJRSB3b24ndCBsaWtlIGAuZGVsZXRlKClgIGFuZCB3aWxsIGluc2lzdCBvblxuICAgICAgICAgICAgICAgICAgICAvLyB1c2luZyBgWydkZWxldGUnXSgpYCwgYnV0IHdlIGhhdmUgYSBidWlsZCBzdGVwIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgLy8gZml4ZXMgdGhpcyBmb3IgdXMgbm93LlxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmVbXCJkZWxldGVcIl0oa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2lsbCBiZSBhbHNvIGJlIGFib3J0ZWQgaWYgd2UndmUgZXhjZWVkZWQgb3VyIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gc3BhY2UuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gcmVxLmVycm9yID8gcmVxLmVycm9yIDogcmVxLnRyYW5zYWN0aW9uLmVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGNsZWFyKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX1dSSVRFLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUuY2xlYXIoKTtcblxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSB0cmFuc2FjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHJlcS5lcnJvciA/IHJlcS5lcnJvciA6IHJlcS50cmFuc2FjdGlvbi5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBsZW5ndGgoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfT05MWSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLmNvdW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVxLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24ga2V5KG4sIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKG4gPCAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfT05MWSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkdmFuY2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5vcGVuS2V5Q3Vyc29yKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJzb3IgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIG1lYW5zIHRoZXJlIHdlcmVuJ3QgZW5vdWdoIGtleXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgdGhlIGZpcnN0IGtleSwgcmV0dXJuIGl0IGlmIHRoYXQncyB3aGF0IHRoZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3YW50ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjdXJzb3Iua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhZHZhbmNlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGFzayB0aGUgY3Vyc29yIHRvIHNraXAgYWhlYWQgblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZWNvcmRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZHZhbmNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5hZHZhbmNlKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gd2UgZ2V0IGhlcmUsIHdlJ3ZlIGdvdCB0aGUgbnRoIGtleS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjdXJzb3Iua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24ga2V5cyhjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9PTkxZLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUub3BlbktleUN1cnNvcigpO1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3Vyc29yID0gcmVxLnJlc3VsdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGtleXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKGN1cnNvci5rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yW1wiY29udGludWVcIl0oKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBkcm9wSW5zdGFuY2Uob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayA9IGdldENhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB2YXIgY3VycmVudENvbmZpZyA9IHRoaXMuY29uZmlnKCk7XG4gICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zICE9PSAnZnVuY3Rpb24nICYmIG9wdGlvbnMgfHwge307XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IGN1cnJlbnRDb25maWcubmFtZTtcbiAgICAgICAgb3B0aW9ucy5zdG9yZU5hbWUgPSBvcHRpb25zLnN0b3JlTmFtZSB8fCBjdXJyZW50Q29uZmlnLnN0b3JlTmFtZTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2U7XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UkMS5yZWplY3QoJ0ludmFsaWQgYXJndW1lbnRzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGlzQ3VycmVudERiID0gb3B0aW9ucy5uYW1lID09PSBjdXJyZW50Q29uZmlnLm5hbWUgJiYgc2VsZi5fZGJJbmZvLmRiO1xuXG4gICAgICAgIHZhciBkYlByb21pc2UgPSBpc0N1cnJlbnREYiA/IFByb21pc2UkMS5yZXNvbHZlKHNlbGYuX2RiSW5mby5kYikgOiBfZ2V0T3JpZ2luYWxDb25uZWN0aW9uKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgICAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tvcHRpb25zLm5hbWVdO1xuICAgICAgICAgICAgdmFyIGZvcmFnZXMgPSBkYkNvbnRleHQuZm9yYWdlcztcbiAgICAgICAgICAgIGRiQ29udGV4dC5kYiA9IGRiO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yYWdlc1tpXS5fZGJJbmZvLmRiID0gZGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghb3B0aW9ucy5zdG9yZU5hbWUpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBkYlByb21pc2UudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgICAgICAgICBfZGVmZXJSZWFkaW5lc3Mob3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tvcHRpb25zLm5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciBmb3JhZ2VzID0gZGJDb250ZXh0LmZvcmFnZXM7XG5cbiAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9yYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm9yYWdlID0gZm9yYWdlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8uZGIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBkcm9wREJQcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBpZGIuZGVsZXRlRGF0YWJhc2Uob3B0aW9ucy5uYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYiA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uYmxvY2tlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsb3NpbmcgYWxsIG9wZW4gY29ubmVjdGlvbnMgaW4gb252ZXJzaW9uY2hhbmdlIGhhbmRsZXIgc2hvdWxkIHByZXZlbnQgdGhpcyBzaXR1YXRpb24sIGJ1dCBpZlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG8gZ2V0IGhlcmUsIGl0IGp1c3QgbWVhbnMgdGhlIHJlcXVlc3QgcmVtYWlucyBwZW5kaW5nIC0gZXZlbnR1YWxseSBpdCB3aWxsIHN1Y2NlZWQgb3IgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignZHJvcEluc3RhbmNlIGJsb2NrZWQgZm9yIGRhdGFiYXNlIFwiJyArIG9wdGlvbnMubmFtZSArICdcIiB1bnRpbCBhbGwgb3BlbiBjb25uZWN0aW9ucyBhcmUgY2xvc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYiA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZHJvcERCUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgICAgICAgICBkYkNvbnRleHQuZGIgPSBkYjtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2ZvcmFnZSA9IGZvcmFnZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYWR2YW5jZVJlYWRpbmVzcyhfZm9yYWdlLl9kYkluZm8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIChfcmVqZWN0UmVhZGluZXNzKG9wdGlvbnMsIGVycikgfHwgUHJvbWlzZSQxLnJlc29sdmUoKSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZSA9IGRiUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhvcHRpb25zLnN0b3JlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBuZXdWZXJzaW9uID0gZGIudmVyc2lvbiArIDE7XG5cbiAgICAgICAgICAgICAgICBfZGVmZXJSZWFkaW5lc3Mob3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tvcHRpb25zLm5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciBmb3JhZ2VzID0gZGJDb250ZXh0LmZvcmFnZXM7XG5cbiAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9yYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm9yYWdlID0gZm9yYWdlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8uZGIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby52ZXJzaW9uID0gbmV3VmVyc2lvbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZHJvcE9iamVjdFByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IGlkYi5vcGVuKG9wdGlvbnMubmFtZSwgbmV3VmVyc2lvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGIgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGIgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGIuZGVsZXRlT2JqZWN0U3RvcmUob3B0aW9ucy5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGIgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRyb3BPYmplY3RQcm9taXNlLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRiQ29udGV4dC5kYiA9IGRiO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZvcmFnZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfZm9yYWdlMiA9IGZvcmFnZXNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9yYWdlMi5fZGJJbmZvLmRiID0gZGI7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYWR2YW5jZVJlYWRpbmVzcyhfZm9yYWdlMi5fZGJJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAoX3JlamVjdFJlYWRpbmVzcyhvcHRpb25zLCBlcnIpIHx8IFByb21pc2UkMS5yZXNvbHZlKCkpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge30pO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbnZhciBhc3luY1N0b3JhZ2UgPSB7XG4gICAgX2RyaXZlcjogJ2FzeW5jU3RvcmFnZScsXG4gICAgX2luaXRTdG9yYWdlOiBfaW5pdFN0b3JhZ2UsXG4gICAgX3N1cHBvcnQ6IGlzSW5kZXhlZERCVmFsaWQoKSxcbiAgICBpdGVyYXRlOiBpdGVyYXRlLFxuICAgIGdldEl0ZW06IGdldEl0ZW0sXG4gICAgc2V0SXRlbTogc2V0SXRlbSxcbiAgICByZW1vdmVJdGVtOiByZW1vdmVJdGVtLFxuICAgIGNsZWFyOiBjbGVhcixcbiAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICBrZXk6IGtleSxcbiAgICBrZXlzOiBrZXlzLFxuICAgIGRyb3BJbnN0YW5jZTogZHJvcEluc3RhbmNlXG59O1xuXG5mdW5jdGlvbiBpc1dlYlNRTFZhbGlkKCkge1xuICAgIHJldHVybiB0eXBlb2Ygb3BlbkRhdGFiYXNlID09PSAnZnVuY3Rpb24nO1xufVxuXG4vLyBTYWRseSwgdGhlIGJlc3Qgd2F5IHRvIHNhdmUgYmluYXJ5IGRhdGEgaW4gV2ViU1FML2xvY2FsU3RvcmFnZSBpcyBzZXJpYWxpemluZ1xuLy8gaXQgdG8gQmFzZTY0LCBzbyB0aGlzIGlzIGhvdyB3ZSBzdG9yZSBpdCB0byBwcmV2ZW50IHZlcnkgc3RyYW5nZSBlcnJvcnMgd2l0aCBsZXNzXG4vLyB2ZXJib3NlIHdheXMgb2YgYmluYXJ5IDwtPiBzdHJpbmcgZGF0YSBzdG9yYWdlLlxudmFyIEJBU0VfQ0hBUlMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbnZhciBCTE9CX1RZUEVfUFJFRklYID0gJ35+bG9jYWxfZm9yYWdlX3R5cGV+JztcbnZhciBCTE9CX1RZUEVfUFJFRklYX1JFR0VYID0gL15+fmxvY2FsX2ZvcmFnZV90eXBlfihbXn5dKyl+LztcblxudmFyIFNFUklBTElaRURfTUFSS0VSID0gJ19fbGZzY19fOic7XG52YXIgU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIID0gU0VSSUFMSVpFRF9NQVJLRVIubGVuZ3RoO1xuXG4vLyBPTUcgdGhlIHNlcmlhbGl6YXRpb25zIVxudmFyIFRZUEVfQVJSQVlCVUZGRVIgPSAnYXJiZic7XG52YXIgVFlQRV9CTE9CID0gJ2Jsb2InO1xudmFyIFRZUEVfSU5UOEFSUkFZID0gJ3NpMDgnO1xudmFyIFRZUEVfVUlOVDhBUlJBWSA9ICd1aTA4JztcbnZhciBUWVBFX1VJTlQ4Q0xBTVBFREFSUkFZID0gJ3VpYzgnO1xudmFyIFRZUEVfSU5UMTZBUlJBWSA9ICdzaTE2JztcbnZhciBUWVBFX0lOVDMyQVJSQVkgPSAnc2kzMic7XG52YXIgVFlQRV9VSU5UMTZBUlJBWSA9ICd1cjE2JztcbnZhciBUWVBFX1VJTlQzMkFSUkFZID0gJ3VpMzInO1xudmFyIFRZUEVfRkxPQVQzMkFSUkFZID0gJ2ZsMzInO1xudmFyIFRZUEVfRkxPQVQ2NEFSUkFZID0gJ2ZsNjQnO1xudmFyIFRZUEVfU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIID0gU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIICsgVFlQRV9BUlJBWUJVRkZFUi5sZW5ndGg7XG5cbnZhciB0b1N0cmluZyQxID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gc3RyaW5nVG9CdWZmZXIoc2VyaWFsaXplZFN0cmluZykge1xuICAgIC8vIEZpbGwgdGhlIHN0cmluZyBpbnRvIGEgQXJyYXlCdWZmZXIuXG4gICAgdmFyIGJ1ZmZlckxlbmd0aCA9IHNlcmlhbGl6ZWRTdHJpbmcubGVuZ3RoICogMC43NTtcbiAgICB2YXIgbGVuID0gc2VyaWFsaXplZFN0cmluZy5sZW5ndGg7XG4gICAgdmFyIGk7XG4gICAgdmFyIHAgPSAwO1xuICAgIHZhciBlbmNvZGVkMSwgZW5jb2RlZDIsIGVuY29kZWQzLCBlbmNvZGVkNDtcblxuICAgIGlmIChzZXJpYWxpemVkU3RyaW5nW3NlcmlhbGl6ZWRTdHJpbmcubGVuZ3RoIC0gMV0gPT09ICc9Jykge1xuICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgICAgaWYgKHNlcmlhbGl6ZWRTdHJpbmdbc2VyaWFsaXplZFN0cmluZy5sZW5ndGggLSAyXSA9PT0gJz0nKSB7XG4gICAgICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnVmZmVyTGVuZ3RoKTtcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIGVuY29kZWQxID0gQkFTRV9DSEFSUy5pbmRleE9mKHNlcmlhbGl6ZWRTdHJpbmdbaV0pO1xuICAgICAgICBlbmNvZGVkMiA9IEJBU0VfQ0hBUlMuaW5kZXhPZihzZXJpYWxpemVkU3RyaW5nW2kgKyAxXSk7XG4gICAgICAgIGVuY29kZWQzID0gQkFTRV9DSEFSUy5pbmRleE9mKHNlcmlhbGl6ZWRTdHJpbmdbaSArIDJdKTtcbiAgICAgICAgZW5jb2RlZDQgPSBCQVNFX0NIQVJTLmluZGV4T2Yoc2VyaWFsaXplZFN0cmluZ1tpICsgM10pO1xuXG4gICAgICAgIC8qanNsaW50IGJpdHdpc2U6IHRydWUgKi9cbiAgICAgICAgYnl0ZXNbcCsrXSA9IGVuY29kZWQxIDw8IDIgfCBlbmNvZGVkMiA+PiA0O1xuICAgICAgICBieXRlc1twKytdID0gKGVuY29kZWQyICYgMTUpIDw8IDQgfCBlbmNvZGVkMyA+PiAyO1xuICAgICAgICBieXRlc1twKytdID0gKGVuY29kZWQzICYgMykgPDwgNiB8IGVuY29kZWQ0ICYgNjM7XG4gICAgfVxuICAgIHJldHVybiBidWZmZXI7XG59XG5cbi8vIENvbnZlcnRzIGEgYnVmZmVyIHRvIGEgc3RyaW5nIHRvIHN0b3JlLCBzZXJpYWxpemVkLCBpbiB0aGUgYmFja2VuZFxuLy8gc3RvcmFnZSBsaWJyYXJ5LlxuZnVuY3Rpb24gYnVmZmVyVG9TdHJpbmcoYnVmZmVyKSB7XG4gICAgLy8gYmFzZTY0LWFycmF5YnVmZmVyXG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICB2YXIgYmFzZTY0U3RyaW5nID0gJyc7XG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgLypqc2xpbnQgYml0d2lzZTogdHJ1ZSAqL1xuICAgICAgICBiYXNlNjRTdHJpbmcgKz0gQkFTRV9DSEFSU1tieXRlc1tpXSA+PiAyXTtcbiAgICAgICAgYmFzZTY0U3RyaW5nICs9IEJBU0VfQ0hBUlNbKGJ5dGVzW2ldICYgMykgPDwgNCB8IGJ5dGVzW2kgKyAxXSA+PiA0XTtcbiAgICAgICAgYmFzZTY0U3RyaW5nICs9IEJBU0VfQ0hBUlNbKGJ5dGVzW2kgKyAxXSAmIDE1KSA8PCAyIHwgYnl0ZXNbaSArIDJdID4+IDZdO1xuICAgICAgICBiYXNlNjRTdHJpbmcgKz0gQkFTRV9DSEFSU1tieXRlc1tpICsgMl0gJiA2M107XG4gICAgfVxuXG4gICAgaWYgKGJ5dGVzLmxlbmd0aCAlIDMgPT09IDIpIHtcbiAgICAgICAgYmFzZTY0U3RyaW5nID0gYmFzZTY0U3RyaW5nLnN1YnN0cmluZygwLCBiYXNlNjRTdHJpbmcubGVuZ3RoIC0gMSkgKyAnPSc7XG4gICAgfSBlbHNlIGlmIChieXRlcy5sZW5ndGggJSAzID09PSAxKSB7XG4gICAgICAgIGJhc2U2NFN0cmluZyA9IGJhc2U2NFN0cmluZy5zdWJzdHJpbmcoMCwgYmFzZTY0U3RyaW5nLmxlbmd0aCAtIDIpICsgJz09JztcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZTY0U3RyaW5nO1xufVxuXG4vLyBTZXJpYWxpemUgYSB2YWx1ZSwgYWZ0ZXJ3YXJkcyBleGVjdXRpbmcgYSBjYWxsYmFjayAod2hpY2ggdXN1YWxseVxuLy8gaW5zdHJ1Y3RzIHRoZSBgc2V0SXRlbSgpYCBjYWxsYmFjay9wcm9taXNlIHRvIGJlIGV4ZWN1dGVkKS4gVGhpcyBpcyBob3dcbi8vIHdlIHN0b3JlIGJpbmFyeSBkYXRhIHdpdGggbG9jYWxTdG9yYWdlLlxuZnVuY3Rpb24gc2VyaWFsaXplKHZhbHVlLCBjYWxsYmFjaykge1xuICAgIHZhciB2YWx1ZVR5cGUgPSAnJztcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWVUeXBlID0gdG9TdHJpbmckMS5jYWxsKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBDYW5ub3QgdXNlIGB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyYCBvciBzdWNoIGhlcmUsIGFzIHRoZXNlXG4gICAgLy8gY2hlY2tzIGZhaWwgd2hlbiBydW5uaW5nIHRoZSB0ZXN0cyB1c2luZyBjYXNwZXIuanMuLi5cbiAgICAvL1xuICAgIC8vIFRPRE86IFNlZSB3aHkgdGhvc2UgdGVzdHMgZmFpbCBhbmQgdXNlIGEgYmV0dGVyIHNvbHV0aW9uLlxuICAgIGlmICh2YWx1ZSAmJiAodmFsdWVUeXBlID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nIHx8IHZhbHVlLmJ1ZmZlciAmJiB0b1N0cmluZyQxLmNhbGwodmFsdWUuYnVmZmVyKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykpIHtcbiAgICAgICAgLy8gQ29udmVydCBiaW5hcnkgYXJyYXlzIHRvIGEgc3RyaW5nIGFuZCBwcmVmaXggdGhlIHN0cmluZyB3aXRoXG4gICAgICAgIC8vIGEgc3BlY2lhbCBtYXJrZXIuXG4gICAgICAgIHZhciBidWZmZXI7XG4gICAgICAgIHZhciBtYXJrZXIgPSBTRVJJQUxJWkVEX01BUktFUjtcblxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgYnVmZmVyID0gdmFsdWU7XG4gICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9BUlJBWUJVRkZFUjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZmZlciA9IHZhbHVlLmJ1ZmZlcjtcblxuICAgICAgICAgICAgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgSW50OEFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9JTlQ4QVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgVWludDhBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfVUlOVDhBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfVUlOVDhDTEFNUEVEQVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgSW50MTZBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfSU5UMTZBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBVaW50MTZBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfVUlOVDE2QVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgSW50MzJBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfSU5UMzJBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBVaW50MzJBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfVUlOVDMyQVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9GTE9BVDMyQVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9GTE9BVDY0QVJSQVk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcignRmFpbGVkIHRvIGdldCB0eXBlIGZvciBCaW5hcnlBcnJheScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKG1hcmtlciArIGJ1ZmZlclRvU3RyaW5nKGJ1ZmZlcikpO1xuICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBCbG9iXScpIHtcbiAgICAgICAgLy8gQ29udmVyIHRoZSBibG9iIHRvIGEgYmluYXJ5QXJyYXkgYW5kIHRoZW4gdG8gYSBzdHJpbmcuXG4gICAgICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIEJhY2t3YXJkcy1jb21wYXRpYmxlIHByZWZpeCBmb3IgdGhlIGJsb2IgdHlwZS5cbiAgICAgICAgICAgIHZhciBzdHIgPSBCTE9CX1RZUEVfUFJFRklYICsgdmFsdWUudHlwZSArICd+JyArIGJ1ZmZlclRvU3RyaW5nKHRoaXMucmVzdWx0KTtcblxuICAgICAgICAgICAgY2FsbGJhY2soU0VSSUFMSVpFRF9NQVJLRVIgKyBUWVBFX0JMT0IgKyBzdHIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjYWxsYmFjayhKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGRuJ3QgY29udmVydCB2YWx1ZSBpbnRvIGEgSlNPTiBzdHJpbmc6IFwiLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBEZXNlcmlhbGl6ZSBkYXRhIHdlJ3ZlIGluc2VydGVkIGludG8gYSB2YWx1ZSBjb2x1bW4vZmllbGQuIFdlIHBsYWNlXG4vLyBzcGVjaWFsIG1hcmtlcnMgaW50byBvdXIgc3RyaW5ncyB0byBtYXJrIHRoZW0gYXMgZW5jb2RlZDsgdGhpcyBpc24ndFxuLy8gYXMgbmljZSBhcyBhIG1ldGEgZmllbGQsIGJ1dCBpdCdzIHRoZSBvbmx5IHNhbmUgdGhpbmcgd2UgY2FuIGRvIHdoaWxzdFxuLy8ga2VlcGluZyBsb2NhbFN0b3JhZ2Ugc3VwcG9ydCBpbnRhY3QuXG4vL1xuLy8gT2Z0ZW50aW1lcyB0aGlzIHdpbGwganVzdCBkZXNlcmlhbGl6ZSBKU09OIGNvbnRlbnQsIGJ1dCBpZiB3ZSBoYXZlIGFcbi8vIHNwZWNpYWwgbWFya2VyIChTRVJJQUxJWkVEX01BUktFUiwgZGVmaW5lZCBhYm92ZSksIHdlIHdpbGwgZXh0cmFjdFxuLy8gc29tZSBraW5kIG9mIGFycmF5YnVmZmVyL2JpbmFyeSBkYXRhL3R5cGVkIGFycmF5IG91dCBvZiB0aGUgc3RyaW5nLlxuZnVuY3Rpb24gZGVzZXJpYWxpemUodmFsdWUpIHtcbiAgICAvLyBJZiB3ZSBoYXZlbid0IG1hcmtlZCB0aGlzIHN0cmluZyBhcyBiZWluZyBzcGVjaWFsbHkgc2VyaWFsaXplZCAoaS5lLlxuICAgIC8vIHNvbWV0aGluZyBvdGhlciB0aGFuIHNlcmlhbGl6ZWQgSlNPTiksIHdlIGNhbiBqdXN0IHJldHVybiBpdCBhbmQgYmVcbiAgICAvLyBkb25lIHdpdGggaXQuXG4gICAgaWYgKHZhbHVlLnN1YnN0cmluZygwLCBTRVJJQUxJWkVEX01BUktFUl9MRU5HVEgpICE9PSBTRVJJQUxJWkVEX01BUktFUikge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gVGhlIGZvbGxvd2luZyBjb2RlIGRlYWxzIHdpdGggZGVzZXJpYWxpemluZyBzb21lIGtpbmQgb2YgQmxvYiBvclxuICAgIC8vIFR5cGVkQXJyYXkuIEZpcnN0IHdlIHNlcGFyYXRlIG91dCB0aGUgdHlwZSBvZiBkYXRhIHdlJ3JlIGRlYWxpbmdcbiAgICAvLyB3aXRoIGZyb20gdGhlIGRhdGEgaXRzZWxmLlxuICAgIHZhciBzZXJpYWxpemVkU3RyaW5nID0gdmFsdWUuc3Vic3RyaW5nKFRZUEVfU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIKTtcbiAgICB2YXIgdHlwZSA9IHZhbHVlLnN1YnN0cmluZyhTRVJJQUxJWkVEX01BUktFUl9MRU5HVEgsIFRZUEVfU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIKTtcblxuICAgIHZhciBibG9iVHlwZTtcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0aWJsZSBibG9iIHR5cGUgc2VyaWFsaXphdGlvbiBzdHJhdGVneS5cbiAgICAvLyBEQnMgY3JlYXRlZCB3aXRoIG9sZGVyIHZlcnNpb25zIG9mIGxvY2FsRm9yYWdlIHdpbGwgc2ltcGx5IG5vdCBoYXZlIHRoZSBibG9iIHR5cGUuXG4gICAgaWYgKHR5cGUgPT09IFRZUEVfQkxPQiAmJiBCTE9CX1RZUEVfUFJFRklYX1JFR0VYLnRlc3Qoc2VyaWFsaXplZFN0cmluZykpIHtcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBzZXJpYWxpemVkU3RyaW5nLm1hdGNoKEJMT0JfVFlQRV9QUkVGSVhfUkVHRVgpO1xuICAgICAgICBibG9iVHlwZSA9IG1hdGNoZXJbMV07XG4gICAgICAgIHNlcmlhbGl6ZWRTdHJpbmcgPSBzZXJpYWxpemVkU3RyaW5nLnN1YnN0cmluZyhtYXRjaGVyWzBdLmxlbmd0aCk7XG4gICAgfVxuICAgIHZhciBidWZmZXIgPSBzdHJpbmdUb0J1ZmZlcihzZXJpYWxpemVkU3RyaW5nKTtcblxuICAgIC8vIFJldHVybiB0aGUgcmlnaHQgdHlwZSBiYXNlZCBvbiB0aGUgY29kZS90eXBlIHNldCBkdXJpbmdcbiAgICAvLyBzZXJpYWxpemF0aW9uLlxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFRZUEVfQVJSQVlCVUZGRVI6XG4gICAgICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgICAgICBjYXNlIFRZUEVfQkxPQjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVCbG9iKFtidWZmZXJdLCB7IHR5cGU6IGJsb2JUeXBlIH0pO1xuICAgICAgICBjYXNlIFRZUEVfSU5UOEFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX1VJTlQ4QVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX1VJTlQ4Q0xBTVBFREFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OENsYW1wZWRBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfSU5UMTZBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW50MTZBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfVUlOVDE2QVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQxNkFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9JTlQzMkFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnQzMkFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9VSU5UMzJBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDMyQXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX0ZMT0FUMzJBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9GTE9BVDY0QVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZsb2F0NjRBcnJheShidWZmZXIpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtvd24gdHlwZTogJyArIHR5cGUpO1xuICAgIH1cbn1cblxudmFyIGxvY2FsZm9yYWdlU2VyaWFsaXplciA9IHtcbiAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZSxcbiAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemUsXG4gICAgc3RyaW5nVG9CdWZmZXI6IHN0cmluZ1RvQnVmZmVyLFxuICAgIGJ1ZmZlclRvU3RyaW5nOiBidWZmZXJUb1N0cmluZ1xufTtcblxuLypcbiAqIEluY2x1ZGVzIGNvZGUgZnJvbTpcbiAqXG4gKiBiYXNlNjQtYXJyYXlidWZmZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXN2aC9iYXNlNjQtYXJyYXlidWZmZXJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgTmlrbGFzIHZvbiBIZXJ0emVuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRGJUYWJsZSh0LCBkYkluZm8sIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgdC5leGVjdXRlU3FsKCdDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgJyArICcoaWQgSU5URUdFUiBQUklNQVJZIEtFWSwga2V5IHVuaXF1ZSwgdmFsdWUpJywgW10sIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbn1cblxuLy8gT3BlbiB0aGUgV2ViU1FMIGRhdGFiYXNlIChhdXRvbWF0aWNhbGx5IGNyZWF0ZXMgb25lIGlmIG9uZSBkaWRuJ3Rcbi8vIHByZXZpb3VzbHkgZXhpc3QpLCB1c2luZyBhbnkgb3B0aW9ucyBzZXQgaW4gdGhlIGNvbmZpZy5cbmZ1bmN0aW9uIF9pbml0U3RvcmFnZSQxKG9wdGlvbnMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGRiSW5mbyA9IHtcbiAgICAgICAgZGI6IG51bGxcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBkYkluZm9baV0gPSB0eXBlb2Ygb3B0aW9uc1tpXSAhPT0gJ3N0cmluZycgPyBvcHRpb25zW2ldLnRvU3RyaW5nKCkgOiBvcHRpb25zW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRiSW5mb1Byb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gT3BlbiB0aGUgZGF0YWJhc2U7IHRoZSBvcGVuRGF0YWJhc2UgQVBJIHdpbGwgYXV0b21hdGljYWxseVxuICAgICAgICAvLyBjcmVhdGUgaXQgZm9yIHVzIGlmIGl0IGRvZXNuJ3QgZXhpc3QuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYkluZm8uZGIgPSBvcGVuRGF0YWJhc2UoZGJJbmZvLm5hbWUsIFN0cmluZyhkYkluZm8udmVyc2lvbiksIGRiSW5mby5kZXNjcmlwdGlvbiwgZGJJbmZvLnNpemUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIG91ciBrZXkvdmFsdWUgdGFibGUgaWYgaXQgZG9lc24ndCBleGlzdC5cbiAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBjcmVhdGVEYlRhYmxlKHQsIGRiSW5mbywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuX2RiSW5mbyA9IGRiSW5mbztcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBkYkluZm8uc2VyaWFsaXplciA9IGxvY2FsZm9yYWdlU2VyaWFsaXplcjtcbiAgICByZXR1cm4gZGJJbmZvUHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sIHNxbFN0YXRlbWVudCwgYXJncywgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICB0LmV4ZWN1dGVTcWwoc3FsU3RhdGVtZW50LCBhcmdzLCBjYWxsYmFjaywgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvci5jb2RlID09PSBlcnJvci5TWU5UQVhfRVJSKSB7XG4gICAgICAgICAgICB0LmV4ZWN1dGVTcWwoJ1NFTEVDVCBuYW1lIEZST00gc3FsaXRlX21hc3RlciAnICsgXCJXSEVSRSB0eXBlPSd0YWJsZScgQU5EIG5hbWUgPSA/XCIsIFtkYkluZm8uc3RvcmVOYW1lXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdHMucm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHRhYmxlIGlzIG1pc3NpbmcgKHdhcyBkZWxldGVkKVxuICAgICAgICAgICAgICAgICAgICAvLyByZS1jcmVhdGUgaXQgdGFibGUgYW5kIHJldHJ5XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZURiVGFibGUodCwgZGJJbmZvLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LmV4ZWN1dGVTcWwoc3FsU3RhdGVtZW50LCBhcmdzLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sodCwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3JDYWxsYmFjayh0LCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9LCBlcnJvckNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gZ2V0SXRlbSQxKGtleSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ1NFTEVDVCAqIEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnIFdIRVJFIGtleSA9ID8gTElNSVQgMScsIFtrZXldLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzdWx0cy5yb3dzLmxlbmd0aCA/IHJlc3VsdHMucm93cy5pdGVtKDApLnZhbHVlIDogbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhpcyBpcyBzZXJpYWxpemVkIGNvbnRlbnQgd2UgbmVlZCB0b1xuICAgICAgICAgICAgICAgICAgICAvLyB1bnBhY2suXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRiSW5mby5zZXJpYWxpemVyLmRlc2VyaWFsaXplKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gaXRlcmF0ZSQxKGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG5cbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnU0VMRUNUICogRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSwgW10sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb3dzID0gcmVzdWx0cy5yb3dzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gcm93cy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByb3dzLml0ZW0oaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlbS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoaXMgaXMgc2VyaWFsaXplZCBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHVucGFjay5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBkYkluZm8uc2VyaWFsaXplci5kZXNlcmlhbGl6ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBpdGVyYXRvcihyZXN1bHQsIGl0ZW0ua2V5LCBpICsgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZvaWQoMCkgcHJldmVudHMgcHJvYmxlbXMgd2l0aCByZWRlZmluaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9mIGB1bmRlZmluZWRgLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBfc2V0SXRlbShrZXksIHZhbHVlLCBjYWxsYmFjaywgcmV0cmllc0xlZnQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFRoZSBsb2NhbFN0b3JhZ2UgQVBJIGRvZXNuJ3QgcmV0dXJuIHVuZGVmaW5lZCB2YWx1ZXMgaW4gYW5cbiAgICAgICAgICAgIC8vIFwiZXhwZWN0ZWRcIiB3YXksIHNvIHVuZGVmaW5lZCBpcyBhbHdheXMgY2FzdCB0byBudWxsIGluIGFsbFxuICAgICAgICAgICAgLy8gZHJpdmVycy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9wdWxsLzQyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgb3JpZ2luYWwgdmFsdWUgdG8gcGFzcyB0byB0aGUgY2FsbGJhY2suXG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLnNlcmlhbGl6ZXIuc2VyaWFsaXplKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ0lOU0VSVCBPUiBSRVBMQUNFIElOVE8gJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnICcgKyAnKGtleSwgdmFsdWUpIFZBTFVFUyAoPywgPyknLCBba2V5LCB2YWx1ZV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9yaWdpbmFsVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoc3FsRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSB0cmFuc2FjdGlvbiBmYWlsZWQ7IGNoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBzZWUgaWYgaXQncyBhIHF1b3RhIGVycm9yLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNxbEVycm9yLmNvZGUgPT09IHNxbEVycm9yLlFVT1RBX0VSUikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIHJlamVjdCB0aGUgY2FsbGJhY2sgb3V0cmlnaHQgZm9yIG5vdywgYnV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQncyB3b3J0aCB0cnlpbmcgdG8gcmUtcnVuIHRoZSB0cmFuc2FjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFdmVuIGlmIHRoZSB1c2VyIGFjY2VwdHMgdGhlIHByb21wdCB0byB1c2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtb3JlIHN0b3JhZ2Ugb24gU2FmYXJpLCB0aGlzIGVycm9yIHdpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiZSBjYWxsZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUcnkgdG8gcmUtcnVuIHRoZSB0cmFuc2FjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmV0cmllc0xlZnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX3NldEl0ZW0uYXBwbHkoc2VsZiwgW2tleSwgb3JpZ2luYWxWYWx1ZSwgY2FsbGJhY2ssIHJldHJpZXNMZWZ0IC0gMV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoc3FsRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gc2V0SXRlbSQxKGtleSwgdmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIF9zZXRJdGVtLmFwcGx5KHRoaXMsIFtrZXksIHZhbHVlLCBjYWxsYmFjaywgMV0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJdGVtJDEoa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnREVMRVRFIEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnIFdIRVJFIGtleSA9ID8nLCBba2V5XSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gRGVsZXRlcyBldmVyeSBpdGVtIGluIHRoZSB0YWJsZS5cbi8vIFRPRE86IEZpbmQgb3V0IGlmIHRoaXMgcmVzZXRzIHRoZSBBVVRPX0lOQ1JFTUVOVCBudW1iZXIuXG5mdW5jdGlvbiBjbGVhciQxKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnREVMRVRFIEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUsIFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBEb2VzIGEgc2ltcGxlIGBDT1VOVChrZXkpYCB0byBnZXQgdGhlIG51bWJlciBvZiBpdGVtcyBzdG9yZWQgaW5cbi8vIGxvY2FsRm9yYWdlLlxuZnVuY3Rpb24gbGVuZ3RoJDEoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgLy8gQWhoaCwgU1FMIG1ha2VzIHRoaXMgb25lIHNvb29vb28gZWFzeS5cbiAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ1NFTEVDVCBDT1VOVChrZXkpIGFzIGMgRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSwgW10sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXN1bHRzLnJvd3MuaXRlbSgwKS5jO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gUmV0dXJuIHRoZSBrZXkgbG9jYXRlZCBhdCBrZXkgaW5kZXggWDsgZXNzZW50aWFsbHkgZ2V0cyB0aGUga2V5IGZyb20gYVxuLy8gYFdIRVJFIGlkID0gP2AuIFRoaXMgaXMgdGhlIG1vc3QgZWZmaWNpZW50IHdheSBJIGNhbiB0aGluayB0byBpbXBsZW1lbnRcbi8vIHRoaXMgcmFyZWx5LXVzZWQgKGluIG15IGV4cGVyaWVuY2UpIHBhcnQgb2YgdGhlIEFQSSwgYnV0IGl0IGNhbiBzZWVtXG4vLyBpbmNvbnNpc3RlbnQsIGJlY2F1c2Ugd2UgZG8gYElOU0VSVCBPUiBSRVBMQUNFIElOVE9gIG9uIGBzZXRJdGVtKClgLCBzb1xuLy8gdGhlIElEIG9mIGVhY2gga2V5IHdpbGwgY2hhbmdlIGV2ZXJ5IHRpbWUgaXQncyB1cGRhdGVkLiBQZXJoYXBzIGEgc3RvcmVkXG4vLyBwcm9jZWR1cmUgZm9yIHRoZSBgc2V0SXRlbSgpYCBTUUwgd291bGQgc29sdmUgdGhpcyBwcm9ibGVtP1xuLy8gVE9ETzogRG9uJ3QgY2hhbmdlIElEIG9uIGBzZXRJdGVtKClgLlxuZnVuY3Rpb24ga2V5JDEobiwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdTRUxFQ1Qga2V5IEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnIFdIRVJFIGlkID0gPyBMSU1JVCAxJywgW24gKyAxXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3VsdHMucm93cy5sZW5ndGggPyByZXN1bHRzLnJvd3MuaXRlbSgwKS5rZXkgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24ga2V5cyQxKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnU0VMRUNUIGtleSBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lLCBbXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHJlc3VsdHMucm93cy5pdGVtKGkpLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGtleXMpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93ZWJkYXRhYmFzZS8jZGF0YWJhc2VzXG4vLyA+IFRoZXJlIGlzIG5vIHdheSB0byBlbnVtZXJhdGUgb3IgZGVsZXRlIHRoZSBkYXRhYmFzZXMgYXZhaWxhYmxlIGZvciBhbiBvcmlnaW4gZnJvbSB0aGlzIEFQSS5cbmZ1bmN0aW9uIGdldEFsbFN0b3JlTmFtZXMoZGIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB0LmV4ZWN1dGVTcWwoJ1NFTEVDVCBuYW1lIEZST00gc3FsaXRlX21hc3RlciAnICsgXCJXSEVSRSB0eXBlPSd0YWJsZScgQU5EIG5hbWUgPD4gJ19fV2ViS2l0RGF0YWJhc2VJbmZvVGFibGVfXydcIiwgW10sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3JlTmFtZXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlTmFtZXMucHVzaChyZXN1bHRzLnJvd3MuaXRlbShpKS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgZGI6IGRiLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZU5hbWVzOiBzdG9yZU5hbWVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChzcWxFcnJvcikge1xuICAgICAgICAgICAgcmVqZWN0KHNxbEVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRyb3BJbnN0YW5jZSQxKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBnZXRDYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdmFyIGN1cnJlbnRDb25maWcgPSB0aGlzLmNvbmZpZygpO1xuICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyAhPT0gJ2Z1bmN0aW9uJyAmJiBvcHRpb25zIHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIG9wdGlvbnMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCBjdXJyZW50Q29uZmlnLm5hbWU7XG4gICAgICAgIG9wdGlvbnMuc3RvcmVOYW1lID0gb3B0aW9ucy5zdG9yZU5hbWUgfHwgY3VycmVudENvbmZpZy5zdG9yZU5hbWU7XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlO1xuICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlJDEucmVqZWN0KCdJbnZhbGlkIGFyZ3VtZW50cycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICB2YXIgZGI7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5uYW1lID09PSBjdXJyZW50Q29uZmlnLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIGRiIHJlZmVyZW5jZSBvZiB0aGUgY3VycmVudCBpbnN0YW5jZVxuICAgICAgICAgICAgICAgIGRiID0gc2VsZi5fZGJJbmZvLmRiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYiA9IG9wZW5EYXRhYmFzZShvcHRpb25zLm5hbWUsICcnLCAnJywgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5zdG9yZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBkcm9wIGFsbCBkYXRhYmFzZSB0YWJsZXNcbiAgICAgICAgICAgICAgICByZXNvbHZlKGdldEFsbFN0b3JlTmFtZXMoZGIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRiOiBkYixcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVOYW1lczogW29wdGlvbnMuc3RvcmVOYW1lXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChvcGVyYXRpb25JbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBkcm9wVGFibGUoc3RvcmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5leGVjdXRlU3FsKCdEUk9QIFRBQkxFIElGIEVYSVNUUyAnICsgc3RvcmVOYW1lLCBbXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcGVyYXRpb25zID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBvcGVyYXRpb25JbmZvLnN0b3JlTmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbnMucHVzaChkcm9wVGFibGUob3BlcmF0aW9uSW5mby5zdG9yZU5hbWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBQcm9taXNlJDEuYWxsKG9wZXJhdGlvbnMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChzcWxFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3Qoc3FsRXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbnZhciB3ZWJTUUxTdG9yYWdlID0ge1xuICAgIF9kcml2ZXI6ICd3ZWJTUUxTdG9yYWdlJyxcbiAgICBfaW5pdFN0b3JhZ2U6IF9pbml0U3RvcmFnZSQxLFxuICAgIF9zdXBwb3J0OiBpc1dlYlNRTFZhbGlkKCksXG4gICAgaXRlcmF0ZTogaXRlcmF0ZSQxLFxuICAgIGdldEl0ZW06IGdldEl0ZW0kMSxcbiAgICBzZXRJdGVtOiBzZXRJdGVtJDEsXG4gICAgcmVtb3ZlSXRlbTogcmVtb3ZlSXRlbSQxLFxuICAgIGNsZWFyOiBjbGVhciQxLFxuICAgIGxlbmd0aDogbGVuZ3RoJDEsXG4gICAga2V5OiBrZXkkMSxcbiAgICBrZXlzOiBrZXlzJDEsXG4gICAgZHJvcEluc3RhbmNlOiBkcm9wSW5zdGFuY2UkMVxufTtcblxuZnVuY3Rpb24gaXNMb2NhbFN0b3JhZ2VWYWxpZCgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3NldEl0ZW0nIGluIGxvY2FsU3RvcmFnZSAmJlxuICAgICAgICAvLyBpbiBJRTggdHlwZW9mIGxvY2FsU3RvcmFnZS5zZXRJdGVtID09PSAnb2JqZWN0J1xuICAgICAgICAhIWxvY2FsU3RvcmFnZS5zZXRJdGVtO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX2dldEtleVByZWZpeChvcHRpb25zLCBkZWZhdWx0Q29uZmlnKSB7XG4gICAgdmFyIGtleVByZWZpeCA9IG9wdGlvbnMubmFtZSArICcvJztcblxuICAgIGlmIChvcHRpb25zLnN0b3JlTmFtZSAhPT0gZGVmYXVsdENvbmZpZy5zdG9yZU5hbWUpIHtcbiAgICAgICAga2V5UHJlZml4ICs9IG9wdGlvbnMuc3RvcmVOYW1lICsgJy8nO1xuICAgIH1cbiAgICByZXR1cm4ga2V5UHJlZml4O1xufVxuXG4vLyBDaGVjayBpZiBsb2NhbFN0b3JhZ2UgdGhyb3dzIHdoZW4gc2F2aW5nIGFuIGl0ZW1cbmZ1bmN0aW9uIGNoZWNrSWZMb2NhbFN0b3JhZ2VUaHJvd3MoKSB7XG4gICAgdmFyIGxvY2FsU3RvcmFnZVRlc3RLZXkgPSAnX2xvY2FsZm9yYWdlX3N1cHBvcnRfdGVzdCc7XG5cbiAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VUZXN0S2V5LCB0cnVlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obG9jYWxTdG9yYWdlVGVzdEtleSk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG4vLyBDaGVjayBpZiBsb2NhbFN0b3JhZ2UgaXMgdXNhYmxlIGFuZCBhbGxvd3MgdG8gc2F2ZSBhbiBpdGVtXG4vLyBUaGlzIG1ldGhvZCBjaGVja3MgaWYgbG9jYWxTdG9yYWdlIGlzIHVzYWJsZSBpbiBTYWZhcmkgUHJpdmF0ZSBCcm93c2luZ1xuLy8gbW9kZSwgb3IgaW4gYW55IG90aGVyIGNhc2Ugd2hlcmUgdGhlIGF2YWlsYWJsZSBxdW90YSBmb3IgbG9jYWxTdG9yYWdlXG4vLyBpcyAwIGFuZCB0aGVyZSB3YXNuJ3QgYW55IHNhdmVkIGl0ZW1zIHlldC5cbmZ1bmN0aW9uIF9pc0xvY2FsU3RvcmFnZVVzYWJsZSgpIHtcbiAgICByZXR1cm4gIWNoZWNrSWZMb2NhbFN0b3JhZ2VUaHJvd3MoKSB8fCBsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMDtcbn1cblxuLy8gQ29uZmlnIHRoZSBsb2NhbFN0b3JhZ2UgYmFja2VuZCwgdXNpbmcgb3B0aW9ucyBzZXQgaW4gdGhlIGNvbmZpZy5cbmZ1bmN0aW9uIF9pbml0U3RvcmFnZSQyKG9wdGlvbnMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGRiSW5mbyA9IHt9O1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgZGJJbmZvW2ldID0gb3B0aW9uc1tpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRiSW5mby5rZXlQcmVmaXggPSBfZ2V0S2V5UHJlZml4KG9wdGlvbnMsIHNlbGYuX2RlZmF1bHRDb25maWcpO1xuXG4gICAgaWYgKCFfaXNMb2NhbFN0b3JhZ2VVc2FibGUoKSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlamVjdCgpO1xuICAgIH1cblxuICAgIHNlbGYuX2RiSW5mbyA9IGRiSW5mbztcbiAgICBkYkluZm8uc2VyaWFsaXplciA9IGxvY2FsZm9yYWdlU2VyaWFsaXplcjtcblxuICAgIHJldHVybiBQcm9taXNlJDEucmVzb2x2ZSgpO1xufVxuXG4vLyBSZW1vdmUgYWxsIGtleXMgZnJvbSB0aGUgZGF0YXN0b3JlLCBlZmZlY3RpdmVseSBkZXN0cm95aW5nIGFsbCBkYXRhIGluXG4vLyB0aGUgYXBwJ3Mga2V5L3ZhbHVlIHN0b3JlIVxuZnVuY3Rpb24gY2xlYXIkMihjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGtleVByZWZpeCA9IHNlbGYuX2RiSW5mby5rZXlQcmVmaXg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IGxvY2FsU3RvcmFnZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG5cbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZihrZXlQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gUmV0cmlldmUgYW4gaXRlbSBmcm9tIHRoZSBzdG9yZS4gVW5saWtlIHRoZSBvcmlnaW5hbCBhc3luY19zdG9yYWdlXG4vLyBsaWJyYXJ5IGluIEdhaWEsIHdlIGRvbid0IG1vZGlmeSByZXR1cm4gdmFsdWVzIGF0IGFsbC4gSWYgYSBrZXkncyB2YWx1ZVxuLy8gaXMgYHVuZGVmaW5lZGAsIHdlIHBhc3MgdGhhdCB2YWx1ZSB0byB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG5mdW5jdGlvbiBnZXRJdGVtJDIoa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgIHZhciByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYkluZm8ua2V5UHJlZml4ICsga2V5KTtcblxuICAgICAgICAvLyBJZiBhIHJlc3VsdCB3YXMgZm91bmQsIHBhcnNlIGl0IGZyb20gdGhlIHNlcmlhbGl6ZWRcbiAgICAgICAgLy8gc3RyaW5nIGludG8gYSBKUyBvYmplY3QuIElmIHJlc3VsdCBpc24ndCB0cnV0aHksIHRoZSBrZXlcbiAgICAgICAgLy8gaXMgbGlrZWx5IHVuZGVmaW5lZCBhbmQgd2UnbGwgcGFzcyBpdCBzdHJhaWdodCB0byB0aGVcbiAgICAgICAgLy8gY2FsbGJhY2suXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGRiSW5mby5zZXJpYWxpemVyLmRlc2VyaWFsaXplKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gSXRlcmF0ZSBvdmVyIGFsbCBpdGVtcyBpbiB0aGUgc3RvcmUuXG5mdW5jdGlvbiBpdGVyYXRlJDIoaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgIHZhciBrZXlQcmVmaXggPSBkYkluZm8ua2V5UHJlZml4O1xuICAgICAgICB2YXIga2V5UHJlZml4TGVuZ3RoID0ga2V5UHJlZml4Lmxlbmd0aDtcbiAgICAgICAgdmFyIGxlbmd0aCA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XG5cbiAgICAgICAgLy8gV2UgdXNlIGEgZGVkaWNhdGVkIGl0ZXJhdG9yIGluc3RlYWQgb2YgdGhlIGBpYCB2YXJpYWJsZSBiZWxvd1xuICAgICAgICAvLyBzbyBvdGhlciBrZXlzIHdlIGZldGNoIGluIGxvY2FsU3RvcmFnZSBhcmVuJ3QgY291bnRlZCBpblxuICAgICAgICAvLyB0aGUgYGl0ZXJhdGlvbk51bWJlcmAgYXJndW1lbnQgcGFzc2VkIHRvIHRoZSBgaXRlcmF0ZSgpYFxuICAgICAgICAvLyBjYWxsYmFjay5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gU2VlOiBnaXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvcHVsbC80MzUjZGlzY3Vzc2lvbl9yMzgwNjE1MzBcbiAgICAgICAgdmFyIGl0ZXJhdGlvbk51bWJlciA9IDE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2Yoa2V5UHJlZml4KSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcblxuICAgICAgICAgICAgLy8gSWYgYSByZXN1bHQgd2FzIGZvdW5kLCBwYXJzZSBpdCBmcm9tIHRoZSBzZXJpYWxpemVkXG4gICAgICAgICAgICAvLyBzdHJpbmcgaW50byBhIEpTIG9iamVjdC4gSWYgcmVzdWx0IGlzbid0IHRydXRoeSwgdGhlXG4gICAgICAgICAgICAvLyBrZXkgaXMgbGlrZWx5IHVuZGVmaW5lZCBhbmQgd2UnbGwgcGFzcyBpdCBzdHJhaWdodFxuICAgICAgICAgICAgLy8gdG8gdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkYkluZm8uc2VyaWFsaXplci5kZXNlcmlhbGl6ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlID0gaXRlcmF0b3IodmFsdWUsIGtleS5zdWJzdHJpbmcoa2V5UHJlZml4TGVuZ3RoKSwgaXRlcmF0aW9uTnVtYmVyKyspO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gU2FtZSBhcyBsb2NhbFN0b3JhZ2UncyBrZXkoKSBtZXRob2QsIGV4Y2VwdCB0YWtlcyBhIGNhbGxiYWNrLlxuZnVuY3Rpb24ga2V5JDIobiwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBsb2NhbFN0b3JhZ2Uua2V5KG4pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgcHJlZml4IGZyb20gdGhlIGtleSwgaWYgYSBrZXkgaXMgZm91bmQuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHJpbmcoZGJJbmZvLmtleVByZWZpeC5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGtleXMkMihjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgdmFyIGxlbmd0aCA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XG4gICAgICAgIHZhciBrZXlzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW1LZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICAgICAgaWYgKGl0ZW1LZXkuaW5kZXhPZihkYkluZm8ua2V5UHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChpdGVtS2V5LnN1YnN0cmluZyhkYkluZm8ua2V5UHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBTdXBwbHkgdGhlIG51bWJlciBvZiBrZXlzIGluIHRoZSBkYXRhc3RvcmUgdG8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuZnVuY3Rpb24gbGVuZ3RoJDIoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBzZWxmLmtleXMoKS50aGVuKGZ1bmN0aW9uIChrZXlzKSB7XG4gICAgICAgIHJldHVybiBrZXlzLmxlbmd0aDtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIFJlbW92ZSBhbiBpdGVtIGZyb20gdGhlIHN0b3JlLCBuaWNlIGFuZCBzaW1wbGUuXG5mdW5jdGlvbiByZW1vdmVJdGVtJDIoa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGRiSW5mby5rZXlQcmVmaXggKyBrZXkpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gU2V0IGEga2V5J3MgdmFsdWUgYW5kIHJ1biBhbiBvcHRpb25hbCBjYWxsYmFjayBvbmNlIHRoZSB2YWx1ZSBpcyBzZXQuXG4vLyBVbmxpa2UgR2FpYSdzIGltcGxlbWVudGF0aW9uLCB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gaXMgcGFzc2VkIHRoZSB2YWx1ZSxcbi8vIGluIGNhc2UgeW91IHdhbnQgdG8gb3BlcmF0ZSBvbiB0aGF0IHZhbHVlIG9ubHkgYWZ0ZXIgeW91J3JlIHN1cmUgaXRcbi8vIHNhdmVkLCBvciBzb21ldGhpbmcgbGlrZSB0aGF0LlxuZnVuY3Rpb24gc2V0SXRlbSQyKGtleSwgdmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQ29udmVydCB1bmRlZmluZWQgdmFsdWVzIHRvIG51bGwuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2xvY2FsRm9yYWdlL3B1bGwvNDJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNhdmUgdGhlIG9yaWdpbmFsIHZhbHVlIHRvIHBhc3MgdG8gdGhlIGNhbGxiYWNrLlxuICAgICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uc2VyaWFsaXplci5zZXJpYWxpemUodmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZGJJbmZvLmtleVByZWZpeCArIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvcmlnaW5hbFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlIGNhcGFjaXR5IGV4Y2VlZGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogTWFrZSB0aGlzIGEgc3BlY2lmaWMgZXJyb3IvZXZlbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fCBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBkcm9wSW5zdGFuY2UkMihvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gZ2V0Q2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyAhPT0gJ2Z1bmN0aW9uJyAmJiBvcHRpb25zIHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIHZhciBjdXJyZW50Q29uZmlnID0gdGhpcy5jb25maWcoKTtcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IGN1cnJlbnRDb25maWcubmFtZTtcbiAgICAgICAgb3B0aW9ucy5zdG9yZU5hbWUgPSBvcHRpb25zLnN0b3JlTmFtZSB8fCBjdXJyZW50Q29uZmlnLnN0b3JlTmFtZTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2U7XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UkMS5yZWplY3QoJ0ludmFsaWQgYXJndW1lbnRzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5zdG9yZU5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG9wdGlvbnMubmFtZSArICcvJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoX2dldEtleVByZWZpeChvcHRpb25zLCBzZWxmLl9kZWZhdWx0Q29uZmlnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGtleVByZWZpeCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGxvY2FsU3RvcmFnZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKGtleVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbnZhciBsb2NhbFN0b3JhZ2VXcmFwcGVyID0ge1xuICAgIF9kcml2ZXI6ICdsb2NhbFN0b3JhZ2VXcmFwcGVyJyxcbiAgICBfaW5pdFN0b3JhZ2U6IF9pbml0U3RvcmFnZSQyLFxuICAgIF9zdXBwb3J0OiBpc0xvY2FsU3RvcmFnZVZhbGlkKCksXG4gICAgaXRlcmF0ZTogaXRlcmF0ZSQyLFxuICAgIGdldEl0ZW06IGdldEl0ZW0kMixcbiAgICBzZXRJdGVtOiBzZXRJdGVtJDIsXG4gICAgcmVtb3ZlSXRlbTogcmVtb3ZlSXRlbSQyLFxuICAgIGNsZWFyOiBjbGVhciQyLFxuICAgIGxlbmd0aDogbGVuZ3RoJDIsXG4gICAga2V5OiBrZXkkMixcbiAgICBrZXlzOiBrZXlzJDIsXG4gICAgZHJvcEluc3RhbmNlOiBkcm9wSW5zdGFuY2UkMlxufTtcblxudmFyIHNhbWVWYWx1ZSA9IGZ1bmN0aW9uIHNhbWVWYWx1ZSh4LCB5KSB7XG4gICAgcmV0dXJuIHggPT09IHkgfHwgdHlwZW9mIHggPT09ICdudW1iZXInICYmIHR5cGVvZiB5ID09PSAnbnVtYmVyJyAmJiBpc05hTih4KSAmJiBpc05hTih5KTtcbn07XG5cbnZhciBpbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzKGFycmF5LCBzZWFyY2hFbGVtZW50KSB7XG4gICAgdmFyIGxlbiA9IGFycmF5Lmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgICAgaWYgKHNhbWVWYWx1ZShhcnJheVtpXSwgc2VhcmNoRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbi8vIERyaXZlcnMgYXJlIHN0b3JlZCBoZXJlIHdoZW4gYGRlZmluZURyaXZlcigpYCBpcyBjYWxsZWQuXG4vLyBUaGV5IGFyZSBzaGFyZWQgYWNyb3NzIGFsbCBpbnN0YW5jZXMgb2YgbG9jYWxGb3JhZ2UuXG52YXIgRGVmaW5lZERyaXZlcnMgPSB7fTtcblxudmFyIERyaXZlclN1cHBvcnQgPSB7fTtcblxudmFyIERlZmF1bHREcml2ZXJzID0ge1xuICAgIElOREVYRUREQjogYXN5bmNTdG9yYWdlLFxuICAgIFdFQlNRTDogd2ViU1FMU3RvcmFnZSxcbiAgICBMT0NBTFNUT1JBR0U6IGxvY2FsU3RvcmFnZVdyYXBwZXJcbn07XG5cbnZhciBEZWZhdWx0RHJpdmVyT3JkZXIgPSBbRGVmYXVsdERyaXZlcnMuSU5ERVhFRERCLl9kcml2ZXIsIERlZmF1bHREcml2ZXJzLldFQlNRTC5fZHJpdmVyLCBEZWZhdWx0RHJpdmVycy5MT0NBTFNUT1JBR0UuX2RyaXZlcl07XG5cbnZhciBPcHRpb25hbERyaXZlck1ldGhvZHMgPSBbJ2Ryb3BJbnN0YW5jZSddO1xuXG52YXIgTGlicmFyeU1ldGhvZHMgPSBbJ2NsZWFyJywgJ2dldEl0ZW0nLCAnaXRlcmF0ZScsICdrZXknLCAna2V5cycsICdsZW5ndGgnLCAncmVtb3ZlSXRlbScsICdzZXRJdGVtJ10uY29uY2F0KE9wdGlvbmFsRHJpdmVyTWV0aG9kcyk7XG5cbnZhciBEZWZhdWx0Q29uZmlnID0ge1xuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICBkcml2ZXI6IERlZmF1bHREcml2ZXJPcmRlci5zbGljZSgpLFxuICAgIG5hbWU6ICdsb2NhbGZvcmFnZScsXG4gICAgLy8gRGVmYXVsdCBEQiBzaXplIGlzIF9KVVNUIFVOREVSXyA1TUIsIGFzIGl0J3MgdGhlIGhpZ2hlc3Qgc2l6ZVxuICAgIC8vIHdlIGNhbiB1c2Ugd2l0aG91dCBhIHByb21wdC5cbiAgICBzaXplOiA0OTgwNzM2LFxuICAgIHN0b3JlTmFtZTogJ2tleXZhbHVlcGFpcnMnLFxuICAgIHZlcnNpb246IDEuMFxufTtcblxuZnVuY3Rpb24gY2FsbFdoZW5SZWFkeShsb2NhbEZvcmFnZUluc3RhbmNlLCBsaWJyYXJ5TWV0aG9kKSB7XG4gICAgbG9jYWxGb3JhZ2VJbnN0YW5jZVtsaWJyYXJ5TWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hcmdzID0gYXJndW1lbnRzO1xuICAgICAgICByZXR1cm4gbG9jYWxGb3JhZ2VJbnN0YW5jZS5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsRm9yYWdlSW5zdGFuY2VbbGlicmFyeU1ldGhvZF0uYXBwbHkobG9jYWxGb3JhZ2VJbnN0YW5jZSwgX2FyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgICBpZiAoYXJnKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfa2V5IGluIGFyZykge1xuICAgICAgICAgICAgICAgIGlmIChhcmcuaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkoYXJnW19rZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzBdW19rZXldID0gYXJnW19rZXldLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbMF1bX2tleV0gPSBhcmdbX2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xufVxuXG52YXIgTG9jYWxGb3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTG9jYWxGb3JhZ2Uob3B0aW9ucykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9jYWxGb3JhZ2UpO1xuXG4gICAgICAgIGZvciAodmFyIGRyaXZlclR5cGVLZXkgaW4gRGVmYXVsdERyaXZlcnMpIHtcbiAgICAgICAgICAgIGlmIChEZWZhdWx0RHJpdmVycy5oYXNPd25Qcm9wZXJ0eShkcml2ZXJUeXBlS2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciBkcml2ZXIgPSBEZWZhdWx0RHJpdmVyc1tkcml2ZXJUeXBlS2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IGRyaXZlci5fZHJpdmVyO1xuICAgICAgICAgICAgICAgIHRoaXNbZHJpdmVyVHlwZUtleV0gPSBkcml2ZXJOYW1lO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFEZWZpbmVkRHJpdmVyc1tkcml2ZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRvIHdhaXQgZm9yIHRoZSBwcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSB0aGUgZGVmYXVsdCBkcml2ZXJzIGNhbiBiZSBkZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGluIGEgYmxvY2tpbmcgbWFubmVyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmaW5lRHJpdmVyKGRyaXZlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGVmYXVsdENvbmZpZyA9IGV4dGVuZCh7fSwgRGVmYXVsdENvbmZpZyk7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGV4dGVuZCh7fSwgdGhpcy5fZGVmYXVsdENvbmZpZywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2RyaXZlclNldCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2luaXREcml2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLl9yZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9kYkluZm8gPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX3dyYXBMaWJyYXJ5TWV0aG9kc1dpdGhSZWFkeSgpO1xuICAgICAgICB0aGlzLnNldERyaXZlcih0aGlzLl9jb25maWcuZHJpdmVyKVtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9XG5cbiAgICAvLyBTZXQgYW55IGNvbmZpZyB2YWx1ZXMgZm9yIGxvY2FsRm9yYWdlOyBjYW4gYmUgY2FsbGVkIGFueXRpbWUgYmVmb3JlXG4gICAgLy8gdGhlIGZpcnN0IEFQSSBjYWxsIChlLmcuIGBnZXRJdGVtYCwgYHNldEl0ZW1gKS5cbiAgICAvLyBXZSBsb29wIHRocm91Z2ggb3B0aW9ucyBzbyB3ZSBkb24ndCBvdmVyd3JpdGUgZXhpc3RpbmcgY29uZmlnXG4gICAgLy8gdmFsdWVzLlxuXG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuY29uZmlnID0gZnVuY3Rpb24gY29uZmlnKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gSWYgdGhlIG9wdGlvbnMgYXJndW1lbnQgaXMgYW4gb2JqZWN0LCB3ZSB1c2UgaXQgdG8gc2V0IHZhbHVlcy5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSByZXR1cm4gZWl0aGVyIGEgc3BlY2lmaWVkIGNvbmZpZyB2YWx1ZSBvciBhbGxcbiAgICAgICAgLy8gY29uZmlnIHZhbHVlcy5cbiAgICAgICAgaWYgKCh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob3B0aW9ucykpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8gSWYgbG9jYWxmb3JhZ2UgaXMgcmVhZHkgYW5kIGZ1bGx5IGluaXRpYWxpemVkLCB3ZSBjYW4ndCBzZXRcbiAgICAgICAgICAgIC8vIGFueSBuZXcgY29uZmlndXJhdGlvbiB2YWx1ZXMuIEluc3RlYWQsIHdlIHJldHVybiBhbiBlcnJvci5cbiAgICAgICAgICAgIGlmICh0aGlzLl9yZWFkeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJDYW4ndCBjYWxsIGNvbmZpZygpIGFmdGVyIGxvY2FsZm9yYWdlIFwiICsgJ2hhcyBiZWVuIHVzZWQuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChpID09PSAnc3RvcmVOYW1lJykge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zW2ldID0gb3B0aW9uc1tpXS5yZXBsYWNlKC9cXFcvZywgJ18nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gJ3ZlcnNpb24nICYmIHR5cGVvZiBvcHRpb25zW2ldICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdEYXRhYmFzZSB2ZXJzaW9uIG11c3QgYmUgYSBudW1iZXIuJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5fY29uZmlnW2ldID0gb3B0aW9uc1tpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWZ0ZXIgYWxsIGNvbmZpZyBvcHRpb25zIGFyZSBzZXQgYW5kXG4gICAgICAgICAgICAvLyB0aGUgZHJpdmVyIG9wdGlvbiBpcyB1c2VkLCB0cnkgc2V0dGluZyBpdFxuICAgICAgICAgICAgaWYgKCdkcml2ZXInIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5kcml2ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXREcml2ZXIodGhpcy5fY29uZmlnLmRyaXZlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ1tvcHRpb25zXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gVXNlZCB0byBkZWZpbmUgYSBjdXN0b20gZHJpdmVyLCBzaGFyZWQgYWNyb3NzIGFsbCBpbnN0YW5jZXMgb2ZcbiAgICAvLyBsb2NhbEZvcmFnZS5cblxuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLmRlZmluZURyaXZlciA9IGZ1bmN0aW9uIGRlZmluZURyaXZlcihkcml2ZXJPYmplY3QsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBkcml2ZXJOYW1lID0gZHJpdmVyT2JqZWN0Ll9kcml2ZXI7XG4gICAgICAgICAgICAgICAgdmFyIGNvbXBsaWFuY2VFcnJvciA9IG5ldyBFcnJvcignQ3VzdG9tIGRyaXZlciBub3QgY29tcGxpYW50OyBzZWUgJyArICdodHRwczovL21vemlsbGEuZ2l0aHViLmlvL2xvY2FsRm9yYWdlLyNkZWZpbmVkcml2ZXInKTtcblxuICAgICAgICAgICAgICAgIC8vIEEgZHJpdmVyIG5hbWUgc2hvdWxkIGJlIGRlZmluZWQgYW5kIG5vdCBvdmVybGFwIHdpdGggdGhlXG4gICAgICAgICAgICAgICAgLy8gbGlicmFyeS1kZWZpbmVkLCBkZWZhdWx0IGRyaXZlcnMuXG4gICAgICAgICAgICAgICAgaWYgKCFkcml2ZXJPYmplY3QuX2RyaXZlcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoY29tcGxpYW5jZUVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBkcml2ZXJNZXRob2RzID0gTGlicmFyeU1ldGhvZHMuY29uY2F0KCdfaW5pdFN0b3JhZ2UnKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZHJpdmVyTWV0aG9kcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZHJpdmVyTWV0aG9kTmFtZSA9IGRyaXZlck1ldGhvZHNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgcHJvcGVydHkgaXMgdGhlcmUsXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0IHNob3VsZCBiZSBhIG1ldGhvZCBldmVuIHdoZW4gb3B0aW9uYWxcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzUmVxdWlyZWQgPSAhaW5jbHVkZXMoT3B0aW9uYWxEcml2ZXJNZXRob2RzLCBkcml2ZXJNZXRob2ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChpc1JlcXVpcmVkIHx8IGRyaXZlck9iamVjdFtkcml2ZXJNZXRob2ROYW1lXSkgJiYgdHlwZW9mIGRyaXZlck9iamVjdFtkcml2ZXJNZXRob2ROYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGNvbXBsaWFuY2VFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgY29uZmlndXJlTWlzc2luZ01ldGhvZHMgPSBmdW5jdGlvbiBjb25maWd1cmVNaXNzaW5nTWV0aG9kcygpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1ldGhvZE5vdEltcGxlbWVudGVkRmFjdG9yeSA9IGZ1bmN0aW9uIG1ldGhvZE5vdEltcGxlbWVudGVkRmFjdG9yeShtZXRob2ROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcignTWV0aG9kICcgKyBtZXRob2ROYW1lICsgJyBpcyBub3QgaW1wbGVtZW50ZWQgYnkgdGhlIGN1cnJlbnQgZHJpdmVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBQcm9taXNlJDEucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2xlbiA9IE9wdGlvbmFsRHJpdmVyTWV0aG9kcy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbmFsRHJpdmVyTWV0aG9kID0gT3B0aW9uYWxEcml2ZXJNZXRob2RzW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZHJpdmVyT2JqZWN0W29wdGlvbmFsRHJpdmVyTWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyaXZlck9iamVjdFtvcHRpb25hbERyaXZlck1ldGhvZF0gPSBtZXRob2ROb3RJbXBsZW1lbnRlZEZhY3Rvcnkob3B0aW9uYWxEcml2ZXJNZXRob2QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyZU1pc3NpbmdNZXRob2RzKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgc2V0RHJpdmVyU3VwcG9ydCA9IGZ1bmN0aW9uIHNldERyaXZlclN1cHBvcnQoc3VwcG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoRGVmaW5lZERyaXZlcnNbZHJpdmVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnUmVkZWZpbmluZyBMb2NhbEZvcmFnZSBkcml2ZXI6ICcgKyBkcml2ZXJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBEZWZpbmVkRHJpdmVyc1tkcml2ZXJOYW1lXSA9IGRyaXZlck9iamVjdDtcbiAgICAgICAgICAgICAgICAgICAgRHJpdmVyU3VwcG9ydFtkcml2ZXJOYW1lXSA9IHN1cHBvcnQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvbid0IHVzZSBhIHRoZW4sIHNvIHRoYXQgd2UgY2FuIGRlZmluZVxuICAgICAgICAgICAgICAgICAgICAvLyBkcml2ZXJzIHRoYXQgaGF2ZSBzaW1wbGUgX3N1cHBvcnQgbWV0aG9kc1xuICAgICAgICAgICAgICAgICAgICAvLyBpbiBhIGJsb2NraW5nIG1hbm5lclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmICgnX3N1cHBvcnQnIGluIGRyaXZlck9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZHJpdmVyT2JqZWN0Ll9zdXBwb3J0ICYmIHR5cGVvZiBkcml2ZXJPYmplY3QuX3N1cHBvcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyaXZlck9iamVjdC5fc3VwcG9ydCgpLnRoZW4oc2V0RHJpdmVyU3VwcG9ydCwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERyaXZlclN1cHBvcnQoISFkcml2ZXJPYmplY3QuX3N1cHBvcnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJpdmVyU3VwcG9ydCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKHByb21pc2UsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5kcml2ZXIgPSBmdW5jdGlvbiBkcml2ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcml2ZXIgfHwgbnVsbDtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLmdldERyaXZlciA9IGZ1bmN0aW9uIGdldERyaXZlcihkcml2ZXJOYW1lLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgICAgICB2YXIgZ2V0RHJpdmVyUHJvbWlzZSA9IERlZmluZWREcml2ZXJzW2RyaXZlck5hbWVdID8gUHJvbWlzZSQxLnJlc29sdmUoRGVmaW5lZERyaXZlcnNbZHJpdmVyTmFtZV0pIDogUHJvbWlzZSQxLnJlamVjdChuZXcgRXJyb3IoJ0RyaXZlciBub3QgZm91bmQuJykpO1xuXG4gICAgICAgIGV4ZWN1dGVUd29DYWxsYmFja3MoZ2V0RHJpdmVyUHJvbWlzZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gZ2V0RHJpdmVyUHJvbWlzZTtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLmdldFNlcmlhbGl6ZXIgPSBmdW5jdGlvbiBnZXRTZXJpYWxpemVyKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZXJpYWxpemVyUHJvbWlzZSA9IFByb21pc2UkMS5yZXNvbHZlKGxvY2FsZm9yYWdlU2VyaWFsaXplcik7XG4gICAgICAgIGV4ZWN1dGVUd29DYWxsYmFja3Moc2VyaWFsaXplclByb21pc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZXJQcm9taXNlO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUucmVhZHkgPSBmdW5jdGlvbiByZWFkeShjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSBzZWxmLl9kcml2ZXJTZXQudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5fcmVhZHkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9yZWFkeSA9IHNlbGYuX2luaXREcml2ZXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX3JlYWR5O1xuICAgICAgICB9KTtcblxuICAgICAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKHByb21pc2UsIGNhbGxiYWNrLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuc2V0RHJpdmVyID0gZnVuY3Rpb24gc2V0RHJpdmVyKGRyaXZlcnMsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoIWlzQXJyYXkoZHJpdmVycykpIHtcbiAgICAgICAgICAgIGRyaXZlcnMgPSBbZHJpdmVyc107XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3VwcG9ydGVkRHJpdmVycyA9IHRoaXMuX2dldFN1cHBvcnRlZERyaXZlcnMoZHJpdmVycyk7XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0RHJpdmVyVG9Db25maWcoKSB7XG4gICAgICAgICAgICBzZWxmLl9jb25maWcuZHJpdmVyID0gc2VsZi5kcml2ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGV4dGVuZFNlbGZXaXRoRHJpdmVyKGRyaXZlcikge1xuICAgICAgICAgICAgc2VsZi5fZXh0ZW5kKGRyaXZlcik7XG4gICAgICAgICAgICBzZXREcml2ZXJUb0NvbmZpZygpO1xuXG4gICAgICAgICAgICBzZWxmLl9yZWFkeSA9IHNlbGYuX2luaXRTdG9yYWdlKHNlbGYuX2NvbmZpZyk7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5fcmVhZHk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbml0RHJpdmVyKHN1cHBvcnRlZERyaXZlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnREcml2ZXJJbmRleCA9IDA7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkcml2ZXJQcm9taXNlTG9vcCgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnREcml2ZXJJbmRleCA8IHN1cHBvcnRlZERyaXZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IHN1cHBvcnRlZERyaXZlcnNbY3VycmVudERyaXZlckluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREcml2ZXJJbmRleCsrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9kYkluZm8gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fcmVhZHkgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5nZXREcml2ZXIoZHJpdmVyTmFtZSkudGhlbihleHRlbmRTZWxmV2l0aERyaXZlcilbXCJjYXRjaFwiXShkcml2ZXJQcm9taXNlTG9vcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzZXREcml2ZXJUb0NvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ05vIGF2YWlsYWJsZSBzdG9yYWdlIG1ldGhvZCBmb3VuZC4nKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fZHJpdmVyU2V0ID0gUHJvbWlzZSQxLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLl9kcml2ZXJTZXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRyaXZlclByb21pc2VMb29wKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlcmUgbWlnaHQgYmUgYSBkcml2ZXIgaW5pdGlhbGl6YXRpb24gaW4gcHJvZ3Jlc3NcbiAgICAgICAgLy8gc28gd2FpdCBmb3IgaXQgdG8gZmluaXNoIGluIG9yZGVyIHRvIGF2b2lkIGEgcG9zc2libGVcbiAgICAgICAgLy8gcmFjZSBjb25kaXRpb24gdG8gc2V0IF9kYkluZm9cbiAgICAgICAgdmFyIG9sZERyaXZlclNldERvbmUgPSB0aGlzLl9kcml2ZXJTZXQgIT09IG51bGwgPyB0aGlzLl9kcml2ZXJTZXRbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlc29sdmUoKTtcbiAgICAgICAgfSkgOiBQcm9taXNlJDEucmVzb2x2ZSgpO1xuXG4gICAgICAgIHRoaXMuX2RyaXZlclNldCA9IG9sZERyaXZlclNldERvbmUudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IHN1cHBvcnRlZERyaXZlcnNbMF07XG4gICAgICAgICAgICBzZWxmLl9kYkluZm8gPSBudWxsO1xuICAgICAgICAgICAgc2VsZi5fcmVhZHkgPSBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5nZXREcml2ZXIoZHJpdmVyTmFtZSkudGhlbihmdW5jdGlvbiAoZHJpdmVyKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fZHJpdmVyID0gZHJpdmVyLl9kcml2ZXI7XG4gICAgICAgICAgICAgICAgc2V0RHJpdmVyVG9Db25maWcoKTtcbiAgICAgICAgICAgICAgICBzZWxmLl93cmFwTGlicmFyeU1ldGhvZHNXaXRoUmVhZHkoKTtcbiAgICAgICAgICAgICAgICBzZWxmLl9pbml0RHJpdmVyID0gaW5pdERyaXZlcihzdXBwb3J0ZWREcml2ZXJzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldERyaXZlclRvQ29uZmlnKCk7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ05vIGF2YWlsYWJsZSBzdG9yYWdlIG1ldGhvZCBmb3VuZC4nKTtcbiAgICAgICAgICAgIHNlbGYuX2RyaXZlclNldCA9IFByb21pc2UkMS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2RyaXZlclNldDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXhlY3V0ZVR3b0NhbGxiYWNrcyh0aGlzLl9kcml2ZXJTZXQsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyaXZlclNldDtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLnN1cHBvcnRzID0gZnVuY3Rpb24gc3VwcG9ydHMoZHJpdmVyTmFtZSkge1xuICAgICAgICByZXR1cm4gISFEcml2ZXJTdXBwb3J0W2RyaXZlck5hbWVdO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuX2V4dGVuZCA9IGZ1bmN0aW9uIF9leHRlbmQobGlicmFyeU1ldGhvZHNBbmRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIGV4dGVuZCh0aGlzLCBsaWJyYXJ5TWV0aG9kc0FuZFByb3BlcnRpZXMpO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuX2dldFN1cHBvcnRlZERyaXZlcnMgPSBmdW5jdGlvbiBfZ2V0U3VwcG9ydGVkRHJpdmVycyhkcml2ZXJzKSB7XG4gICAgICAgIHZhciBzdXBwb3J0ZWREcml2ZXJzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkcml2ZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IGRyaXZlcnNbaV07XG4gICAgICAgICAgICBpZiAodGhpcy5zdXBwb3J0cyhkcml2ZXJOYW1lKSkge1xuICAgICAgICAgICAgICAgIHN1cHBvcnRlZERyaXZlcnMucHVzaChkcml2ZXJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwcG9ydGVkRHJpdmVycztcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLl93cmFwTGlicmFyeU1ldGhvZHNXaXRoUmVhZHkgPSBmdW5jdGlvbiBfd3JhcExpYnJhcnlNZXRob2RzV2l0aFJlYWR5KCkge1xuICAgICAgICAvLyBBZGQgYSBzdHViIGZvciBlYWNoIGRyaXZlciBBUEkgbWV0aG9kIHRoYXQgZGVsYXlzIHRoZSBjYWxsIHRvIHRoZVxuICAgICAgICAvLyBjb3JyZXNwb25kaW5nIGRyaXZlciBtZXRob2QgdW50aWwgbG9jYWxGb3JhZ2UgaXMgcmVhZHkuIFRoZXNlIHN0dWJzXG4gICAgICAgIC8vIHdpbGwgYmUgcmVwbGFjZWQgYnkgdGhlIGRyaXZlciBtZXRob2RzIGFzIHNvb24gYXMgdGhlIGRyaXZlciBpc1xuICAgICAgICAvLyBsb2FkZWQsIHNvIHRoZXJlIGlzIG5vIHBlcmZvcm1hbmNlIGltcGFjdC5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IExpYnJhcnlNZXRob2RzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjYWxsV2hlblJlYWR5KHRoaXMsIExpYnJhcnlNZXRob2RzW2ldKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuY3JlYXRlSW5zdGFuY2UgPSBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgTG9jYWxGb3JhZ2Uob3B0aW9ucyk7XG4gICAgfTtcblxuICAgIHJldHVybiBMb2NhbEZvcmFnZTtcbn0oKTtcblxuLy8gVGhlIGFjdHVhbCBsb2NhbEZvcmFnZSBvYmplY3QgdGhhdCB3ZSBleHBvc2UgYXMgYSBtb2R1bGUgb3IgdmlhIGFcbi8vIGdsb2JhbC4gSXQncyBleHRlbmRlZCBieSBwdWxsaW5nIGluIG9uZSBvZiBvdXIgb3RoZXIgbGlicmFyaWVzLlxuXG5cbnZhciBsb2NhbGZvcmFnZV9qcyA9IG5ldyBMb2NhbEZvcmFnZSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2FsZm9yYWdlX2pzO1xuXG59LHtcIjNcIjozfV19LHt9LFs0XSkoNClcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldFN0b3JhZ2VNZXRob2RzID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCJAcmxlYW4vdXRpbHNcIik7XG5jb25zdCBSTGVhbl8xID0gcmVxdWlyZShcIi4uL1JMZWFuXCIpO1xuY29uc3QgZGVmYXVsdEFkYXB0ZXJzXzEgPSByZXF1aXJlKFwiLi4vZGVmYXVsdEFkYXB0ZXJzXCIpO1xuY29uc3QgZ2V0U3RvcmFnZU1ldGhvZHMgPSAoZGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gKDAsIHV0aWxzXzEuaGFzVmFsdWUpKGRlZmluaXRpb24sIFwiYWRhcHRlcnMuc3RvcmFnZVwiKVxuICAgICAgICA/IGRlZmluaXRpb24uYWRhcHRlcnMuc3RvcmFnZVxuICAgICAgICA6ICgwLCB1dGlsc18xLmdldFZhbHVlKShSTGVhbl8xLmRlZmF1bHQsIFwiY29uZmlnLnN0b3JhZ2UuYWRhcHRlclwiLCBkZWZhdWx0QWRhcHRlcnNfMS5Mb2NhbEZvcmFnZUFkYXB0ZXIpO1xuICAgIGNvbnN0IHNldFN0b3JhZ2UgPSBzdG9yZS5zZXQ7XG4gICAgY29uc3QgZ2V0U3RvcmFnZSA9IHN0b3JlLmdldDtcbiAgICBjb25zdCByZW1vdmVTdG9yYWdlID0gc3RvcmUucmVtb3ZlO1xuICAgIGNvbnN0IGNsZWFyU3RvcmFnZSA9IHN0b3JlLmNsZWFyO1xuICAgIHJldHVybiB7IHNldFN0b3JhZ2UsIGdldFN0b3JhZ2UsIHJlbW92ZVN0b3JhZ2UsIGNsZWFyU3RvcmFnZSB9O1xufTtcbmV4cG9ydHMuZ2V0U3RvcmFnZU1ldGhvZHMgPSBnZXRTdG9yYWdlTWV0aG9kcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVoyVjBVM1J2Y21GblpVMWxkR2h2WkhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WDJsdWRHVnlibUZzTDJkbGRGTjBiM0poWjJWTlpYUm9iMlJ6TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTEhkRFFVRnJSRHRCUVVOc1JDeHZRMEZCTmtJN1FVRkROMElzZDBSQlFYZEVPMEZCUjJwRUxFMUJRVTBzYVVKQlFXbENMRWRCUVVjc1EwRkJReXhWUVVGdlF5eEZRVUZGTEVWQlFVVTdTVUZEZUVVc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlFTeG5Ra0ZCVVN4RlFVRkRMRlZCUVZVc1JVRkJSU3hyUWtGQmEwSXNRMEZCUXp0UlFVTndSQ3hEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBPMUZCUXpkQ0xFTkJRVU1zUTBGQlF5eEpRVUZCTEdkQ1FVRlJMRVZCUVVNc1pVRkJTeXhGUVVGRkxIZENRVUYzUWl4RlFVRkZMRzlEUVVGclFpeERRVUZETEVOQlFVTTdTVUZGYkVVc1RVRkJUU3hWUVVGVkxFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXp0SlFVTTNRaXhOUVVGTkxGVkJRVlVzUjBGQlJ5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRPMGxCUXpkQ0xFMUJRVTBzWVVGQllTeEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRia01zVFVGQlRTeFpRVUZaTEVkQlFVY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVWcVF5eFBRVUZQTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hoUVVGaExFVkJRVVVzV1VGQldTeEZRVUZGTEVOQlFVTTdRVUZEYWtVc1EwRkJReXhEUVVGRE8wRkJXRmNzVVVGQlFTeHBRa0ZCYVVJc2NVSkJWelZDSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZpbmUgPSB2b2lkIDA7XG5jb25zdCBfaW50ZXJuYWxfMSA9IHJlcXVpcmUoXCIuL19pbnRlcm5hbFwiKTtcbi8qKlxuICogZGVmaW5lXG4gKiBDcmVhdGVzIGJhc2UgZW50aXR5IGRlZmluaXRpb24gdXNpbmcgZGF0YSB0eXBlIGFzIGdlbmVyaWNcbiAqL1xuY29uc3QgZGVmaW5lID0gKGtleSwgb3B0aW9ucywgY2FsbGJhY2spID0+IHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdLZXkgaXMgcmVxdWlyZWQgZm9yIGRlZmluaXRpb24uJyk7XG4gICAgfVxuICAgIGNvbnN0IHsgYmFzZVVSTE92ZXJyaWRlLCBpbml0aWFsU3RhdGUsIGdldFVSTCwgcG9zdFVSTCwgcHV0VVJMLCBwYXRjaFVSTCwgZGVsZXRlVVJMLCBwZXJzaXN0RGF0YSwgcHJlZmVyU3RvcmUsIHByb2dyZXNzaXZlTG9hZGluZywgc3luY0FmdGVyVGltZUVsYXBzZWQsIGFkYXB0ZXJzLCB0eXBlLCByZWR1Y2VyLCB1cGRhdGVTdGF0ZSwgbnVsbGFibGVQYXJhbXMsIGluY2x1ZGVJblN0YXRlLCBxdWV1ZU9mZmxpbmUsIH0gPSAoMCwgX2ludGVybmFsXzEuZ2V0RGVmaW5pdGlvbk9wdGlvbnMpKGtleSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyBrZXksXG4gICAgICAgIGJhc2VVUkxPdmVycmlkZSxcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgICBnZXRVUkwsXG4gICAgICAgIHBvc3RVUkwsXG4gICAgICAgIHBhdGNoVVJMLFxuICAgICAgICBwdXRVUkwsXG4gICAgICAgIGRlbGV0ZVVSTCxcbiAgICAgICAgcGVyc2lzdERhdGEsXG4gICAgICAgIHByZWZlclN0b3JlLFxuICAgICAgICBwcm9ncmVzc2l2ZUxvYWRpbmcsXG4gICAgICAgIHN5bmNBZnRlclRpbWVFbGFwc2VkLFxuICAgICAgICBhZGFwdGVycyxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgcmVkdWNlcixcbiAgICAgICAgdXBkYXRlU3RhdGUsXG4gICAgICAgIGNhbGxiYWNrLFxuICAgICAgICBudWxsYWJsZVBhcmFtcyxcbiAgICAgICAgaW5jbHVkZUluU3RhdGUsXG4gICAgICAgIHF1ZXVlT2ZmbGluZSB9LCAoKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmV4dGVuc2lvbnMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHt9KSk7XG59O1xuZXhwb3J0cy5kZWZpbmUgPSBkZWZpbmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR1ZtYVc1bExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMlJsWm1sdVpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGRFFTd3lRMEZCYlVRN1FVRkZia1E3T3p0SFFVZEhPMEZCUTBrc1RVRkJUU3hOUVVGTkxFZEJRVWNzUTBGRGNFSXNSMEZCVnl4RlFVTllMRTlCUVhsRExFVkJRM3BETEZGQlFXMUNMRVZCUTBzc1JVRkJSVHM3U1VGRE1VSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSVHRSUVVOU0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNhVU5CUVdsRExFTkJRVU1zUTBGQlF6dExRVU53UkR0SlFVVkVMRTFCUVUwc1JVRkRTaXhsUVVGbExFVkJRMllzV1VGQldTeEZRVU5hTEUxQlFVMHNSVUZEVGl4UFFVRlBMRVZCUTFBc1RVRkJUU3hGUVVOT0xGRkJRVkVzUlVGRFVpeFRRVUZUTEVWQlExUXNWMEZCVnl4RlFVTllMRmRCUVZjc1JVRkRXQ3hyUWtGQmEwSXNSVUZEYkVJc2IwSkJRVzlDTEVWQlEzQkNMRkZCUVZFc1JVRkRVaXhKUVVGSkxFVkJRMG9zVDBGQlR5eEZRVU5RTEZkQlFWY3NSVUZEV0N4alFVRmpMRVZCUTJRc1kwRkJZeXhGUVVOa0xGbEJRVmtzUjBGRFlpeEhRVUZITEVsQlFVRXNaME5CUVc5Q0xFVkJRVU1zUjBGQlJ5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUlhaRExIVkNRVU5GTEVkQlFVYzdVVUZEU0N4bFFVRmxPMUZCUTJZc1dVRkJXVHRSUVVOYUxFMUJRVTA3VVVGRFRpeFBRVUZQTzFGQlExQXNVVUZCVVR0UlFVTlNMRTFCUVUwN1VVRkRUaXhUUVVGVE8xRkJRMVFzVjBGQlZ6dFJRVU5ZTEZkQlFWYzdVVUZEV0N4clFrRkJhMEk3VVVGRGJFSXNiMEpCUVc5Q08xRkJRM0JDTEZGQlFWRTdVVUZEVWl4SlFVRkpPMUZCUTBvc1QwRkJUenRSUVVOUUxGZEJRVmM3VVVGRFdDeFJRVUZSTzFGQlExSXNZMEZCWXp0UlFVTmtMR05CUVdNN1VVRkRaQ3haUVVGWkxFbEJRMVFzUTBGQlF5eE5RVUZCTEU5QlFVOHNZVUZCVUN4UFFVRlBMSFZDUVVGUUxFOUJRVThzUTBGQlJTeFZRVUZWTEcxRFFVRkpMRVZCUVVVc1EwRkJReXhGUVVNNVFqdEJRVU5LTEVOQlFVTXNRMEZCUXp0QlFYSkVWeXhSUVVGQkxFMUJRVTBzVlVGeFJHcENJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmtleXMgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIkBybGVhbi91dGlsc1wiKTtcbmNvbnN0IFJMZWFuXzEgPSByZXF1aXJlKFwiLi9STGVhblwiKTtcbmNvbnN0IGNvbnZlcnRUb1R5cGVfMSA9IHJlcXVpcmUoXCIuL19pbnRlcm5hbC9jb252ZXJ0VG9UeXBlXCIpO1xuY29uc3QgZ2V0S2V5cyA9ICgpID0+IHtcbiAgICBjb25zdCBlbnRpdHlEZWZpbml0aW9ucyA9ICgwLCB1dGlsc18xLmdldFZhbHVlKShSTGVhbl8xLmRlZmF1bHQsIFwiY29uZmlnLmVudGl0aWVzXCIsIHt9KTtcbiAgICBjb25zdCBlbnRpdHlEZWZpbml0aW9uc0xlbmd0aCA9IGVudGl0eURlZmluaXRpb25zLmxlbmd0aDtcbiAgICBjb25zdCBrZXlzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbnRpdHlEZWZpbml0aW9uc0xlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGtleSA9ICgwLCBjb252ZXJ0VG9UeXBlXzEuY29udmVydFRvVHlwZSkoZW50aXR5RGVmaW5pdGlvbnNbaV0ua2V5KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihrZXlzLCB7XG4gICAgICAgICAgICBba2V5XTogZW50aXR5RGVmaW5pdGlvbnNbaV0ua2V5LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUoa2V5cyk7XG59O1xuZXhwb3J0cy5rZXlzID0gZ2V0S2V5cygpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYTJWNWN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlyWlhsekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxIZERRVUYzUXp0QlFVTjRReXh0UTBGQk5FSTdRVUZETlVJc05rUkJRVEJFTzBGQlJURkVMRTFCUVUwc1QwRkJUeXhIUVVGSExFZEJRVWNzUlVGQlJUdEpRVU51UWl4TlFVRk5MR2xDUVVGcFFpeEhRVUZITEVsQlFVRXNaMEpCUVZFc1JVRkJReXhsUVVGTExFVkJRVVVzYVVKQlFXbENMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRGFrVXNUVUZCVFN4MVFrRkJkVUlzUjBGQlJ5eHBRa0ZCYVVJc1EwRkJReXhOUVVGTkxFTkJRVU03U1VGRGVrUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRE8wbEJSV2hDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eDFRa0ZCZFVJc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzFGQlEyNUVMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVUVzTmtKQlFXRXNSVUZCUXl4cFFrRkJhVUlzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWd1JDeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSVHRaUVVOc1FpeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMR2xDUVVGcFFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjN1UwRkRhRU1zUTBGQlF5eERRVUZETzB0QlEwbzdTVUZGUkN4UFFVRlBMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRVUZETjBJc1EwRkJReXhEUVVGRE8wRkJSVmNzVVVGQlFTeEpRVUZKTEVkQlFVY3NUMEZCVHl4RlFVRkZMRU5CUVVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBSTGVhbl8xID0gcmVxdWlyZShcIi4uL1JMZWFuXCIpO1xuY29uc3QgX2ludGVybmFsXzEgPSByZXF1aXJlKFwiLi4vX2ludGVybmFsXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCJAcmxlYW4vdXRpbHNcIik7XG5jb25zdCBTdGF0ZVNpbmdsZXRvbl8xID0gcmVxdWlyZShcIi4uL1N0YXRlU2luZ2xldG9uXCIpO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuLyoqXG4gKiBTYXZlIGFuIG9iamVjdCB0byBzdGF0ZSwgYW5kIG9wdGlvbmFsbHkgdG8gc3RvcmUgaWYgcGVyc2lzdERhdGFcbiAqIGlzIHRydWUgKGRlZmF1bHQpLiBEb24ndCBjaGVjayBpZiBjdXJyZW50IHN0YXRlIGFuZCBuZXcgdmFsdWUgYXJlIGRpZmZlcmVudFxuICogc28gaWYgdGhlcmUgaXMgYW4gaW5maW5pdGUgbG9vcCwgdGhlIGRldmVsb3BlciB3aWxsIGtub3cgcmlnaHQgYXdheSBpbiB0aGVcbiAqIGNvbnNvbGUgbG9nLlxuICovXG5jb25zdCBzYXZlID0gYXN5bmMgKG9wdGlvbnMsIHN0YXRlLCBkaXNwYXRjaCA9ICgpID0+IHsgfSwgY2FsbGJhY2sgPSAoKSA9PiB7IH0pID0+IHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBvcHRpb25zLnZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgZGVmaW5pdGlvbiwgdmFsdWUsIHR5cGUgfSA9ICgwLCBfaW50ZXJuYWxfMS5nZXRIb29rT3B0aW9ucykob3B0aW9ucyk7XG4gICAgLy9jb25zdCBzdGF0ZVZhbHVlOiBFbnRpdHlTdGF0ZTxcbiAgICAvLyAgVCBleHRlbmRzIEVudGl0eURlZmluZU9wdGlvbnM8aW5mZXIgRj4gPyBGIDogdW5rbm93blxuICAgIC8vPiA9IHN0YXRlICYmIHN0YXRlW2RlZmluaXRpb24ua2V5XSA/IGRlZXBDb3B5KHN0YXRlW2RlZmluaXRpb24ua2V5XSkgOiB7fTtcbiAgICBjb25zdCBzdGF0ZVZhbHVlID0gc3RhdGUgJiYgc3RhdGVbZGVmaW5pdGlvbi5rZXldID8gKDAsIHV0aWxzXzEuZGVlcENvcHkpKHN0YXRlW2RlZmluaXRpb24ua2V5XSkgOiB7fTtcbiAgICBpZiAoZGVmaW5pdGlvbi5wZXJzaXN0RGF0YSkge1xuICAgICAgICBfXzEuU3RvcmUuc2V0KGRlZmluaXRpb24sIHZhbHVlKTtcbiAgICB9XG4gICAgUkxlYW5fMS5kZWZhdWx0LmRlZmluaXRpb24gPSBkZWZpbml0aW9uO1xuICAgIGRpc3BhdGNoKGRlZmluaXRpb24udXBkYXRlU3RhdGUoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZVZhbHVlKSwgdmFsdWUpLCB0eXBlKSk7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxufTtcbi8qKlxuICogU2F2ZSBhbiBvYmplY3QgdG8gc3RhdGUsIGFuZCBvcHRpb25hbGx5IHRvIHN0b3JlIGlmIHBlcnNpc3REYXRhXG4gKiBpcyB0cnVlIChkZWZhdWx0KS4gRG9uJ3QgY2hlY2sgaWYgY3VycmVudCBzdGF0ZSBhbmQgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAqIHNvIGlmIHRoZXJlIGlzIGFuIGluZmluaXRlIGxvb3AsIHRoZSBkZXZlbG9wZXIgd2lsbCBrbm93IHJpZ2h0IGF3YXkgaW4gdGhlXG4gKiBjb25zb2xlIGxvZy5cbiAqL1xuZnVuY3Rpb24gdXNlU2F2ZShvcHRpb25zLCBjYWxsYmFjayA9ICgpID0+IHsgfSkge1xuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gU3RhdGVTaW5nbGV0b25fMS5TdGF0ZVNpbmdsZXRvbi5nZXRJbnN0YW5jZSgpLnp1c3RhbmQoKHMpID0+IFtcbiAgICAgICAgcy5zdGF0ZSxcbiAgICAgICAgcy5kaXNwYXRjaCxcbiAgICBdKTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAob3B0aW9ucyA9IHVuZGVmaW5lZCwgY2FsbGJhY2sgPSAoKSA9PiB7IH0pID0+IHtcbiAgICAgICAgICAgIHNhdmUob3B0aW9ucywgc3RhdGUsIGRpc3BhdGNoLCBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgfVxuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBzYXZlKG9wdGlvbnMsIGRpc3BhdGNoLCBjYWxsYmFjayk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB1c2VTYXZlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhObFUyRjJaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OW9iMjlyY3k5MWMyVlRZWFpsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzYVVOQlFXdERPMEZCUTJ4RExHOURRVUUyUWp0QlFVTTNRaXcwUTBGQk9FTTdRVUZQT1VNc2QwTkJRWGRETzBGQlEzaERMSE5FUVVGdFJEdEJRVU51UkN3d1FrRkJNa0k3UVVGRk0wSTdPenM3TzBkQlMwYzdRVUZEU0N4TlFVRk5MRWxCUVVrc1IwRkJSeXhMUVVGTExFVkJRMmhDTEU5QlFXMURMRVZCUTI1RExFdEJRWEZDTEVWQlEzSkNMRmRCUVhWRExFZEJRVWNzUlVGQlJTeEhRVUZGTEVOQlFVTXNSVUZETDBNc1VVRkJVU3hIUVVGSExFZEJRVWNzUlVGQlJTeEhRVUZGTEVOQlFVTXNSVUZEYmtJc1JVRkJSVHRKUVVOR0xFbEJRVWtzVDBGQlR5eFBRVUZQTEV0QlFVc3NWMEZCVnl4SlFVRkpMRTlCUVU4c1QwRkJUeXhEUVVGRExFdEJRVXNzUzBGQlN5eFhRVUZYTEVWQlFVVTdVVUZETVVVc1QwRkJUenRMUVVOU08wbEJSVVFzVFVGQlRTeEZRVUZGTEZWQlFWVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hGUVVGRkxFZEJRVWNzU1VGQlFTd3dRa0ZCWXl4RlFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8wbEJSVFZFTEdkRFFVRm5RenRKUVVOb1F5eDNSRUZCZDBRN1NVRkRlRVFzTkVWQlFUUkZPMGxCUlRWRkxFMUJRVTBzVlVGQlZTeEhRVU5rTEV0QlFVc3NTVUZCU1N4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkJMR2RDUVVGUkxFVkJRVU1zUzBGQlN5eERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdTVUZGZUVVc1NVRkJTU3hWUVVGVkxFTkJRVU1zVjBGQlZ5eEZRVUZGTzFGQlF6RkNMRk5CUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zVlVGQlZTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMHRCUXpsQ08wbEJSVVFzWlVGQlN5eERRVUZETEZWQlFWVXNSMEZCUnl4VlFVRlZMRU5CUVVNN1NVRkRPVUlzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4WFFVRlhMR2xEUVVGTkxGVkJRVlVzUjBGQlN5eExRVUZMTEVkQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVWd1JTeEpRVUZKTEZGQlFWRXNSVUZCUlR0UlFVTmFMRkZCUVZFc1JVRkJSU3hEUVVGRE8wdEJRMW83UVVGRFNDeERRVUZETEVOQlFVTTdRVUZGUmpzN096czdSMEZMUnp0QlFVTklMRk5CUVhkQ0xFOUJRVThzUTBGRE4wSXNUMEZCZDBJc1JVRkRlRUlzVVVGQlVTeEhRVUZITEVkQlFVY3NSVUZCUlN4SFFVRkZMRU5CUVVNN1NVRkZia0lzVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4UlFVRlJMRU5CUVVNc1IwRkJSeXdyUWtGQll5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVTBzUlVGQlJTeEZRVUZGTEVOQlFVTTdVVUZEZWtVc1EwRkJReXhEUVVGRExFdEJRVXM3VVVGRFVDeERRVUZETEVOQlFVTXNVVUZCVVR0TFFVTllMRU5CUVVNc1EwRkJRenRKUVVWSUxFbEJRVWtzVDBGQlR5eFBRVUZQTEV0QlFVc3NWMEZCVnl4RlFVRkZPMUZCUTJ4RExFOUJRVThzUTBGRFRDeFZRVUV3UWl4VFFVRlRMRVZCUTI1RExGRkJRVkVzUjBGQlJ5eEhRVUZITEVWQlFVVXNSMEZCUlN4RFFVRkRMRVZCUTI1Q0xFVkJRVVU3V1VGRFJpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRXRCUVVzc1JVRkJSU3hSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdVVUZETTBNc1EwRkJReXhEUVVGRE8wdEJRMGc3U1VGRlJDeEpRVUZCTEdsQ1FVRlRMRVZCUVVNc1IwRkJSeXhGUVVGRk8xRkJRMklzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRGNFTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5xUWl4RFFVRkRPMEZCY2tKRUxEQkNRWEZDUXlKOSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNTNfXzsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUkxlYW5TdGF0ZSA9IGV4cG9ydHMuU3RhdGVTaW5nbGV0b24gPSB2b2lkIDA7XG5jb25zdCBpbml0aWFsU3RhdGVfMSA9IHJlcXVpcmUoXCIuL2luaXRpYWxTdGF0ZVwiKTtcbmNvbnN0IHJlZHVjZXJfMSA9IHJlcXVpcmUoXCIuL3JlZHVjZXJcIik7XG5jb25zdCB6dXN0YW5kXzEgPSByZXF1aXJlKFwienVzdGFuZFwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiQHJsZWFuL3V0aWxzXCIpO1xuY29uc3QgUkxlYW5fMSA9IHJlcXVpcmUoXCIuL1JMZWFuXCIpO1xuY2xhc3MgU3RhdGVTaW5nbGV0b24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBjb25maWdFbnRpdGllcyA9ICgwLCB1dGlsc18xLmdldFZhbHVlKShSTGVhbl8xLmRlZmF1bHQsIFwiY29uZmlnLmVudGl0aWVzXCIsIHt9KTtcbiAgICAgICAgdGhpcy56dXN0YW5kID0gKDAsIHp1c3RhbmRfMS5jcmVhdGUpKChzZXQpID0+ICh7XG4gICAgICAgICAgICBzdGF0ZTogKDAsIGluaXRpYWxTdGF0ZV8xLmluaXRpYWxTdGF0ZSkoY29uZmlnRW50aXRpZXMpLFxuICAgICAgICAgICAgZGlzcGF0Y2g6IChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0KCh6dXN0YW5kU3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dFN0YXRlID0gKDAsIHJlZHVjZXJfMS5yZWR1Y2VyKSh6dXN0YW5kU3RhdGUsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXh0U3RhdGUgY29udGFpbnMgYWxzbyB0aGUgcmVzdCBvZiB0aGUgZW50aXRpZXMnIHN0YXRlLCBidXRcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5kZWZpbmVkLCBzbyB3ZSBkZWxldGUgdGhlbVxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhuZXh0U3RhdGUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRTdGF0ZVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbmV4dFN0YXRlW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgenVzdGFuZFN0YXRlLnN0YXRlKSwgbmV4dFN0YXRlKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSB0aGlzLnp1c3RhbmQ7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFTdGF0ZVNpbmdsZXRvbi5pbnN0YW5jZSkge1xuICAgICAgICAgICAgU3RhdGVTaW5nbGV0b24uaW5zdGFuY2UgPSBuZXcgU3RhdGVTaW5nbGV0b24oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3RhdGVTaW5nbGV0b24uaW5zdGFuY2U7XG4gICAgfVxufVxuZXhwb3J0cy5TdGF0ZVNpbmdsZXRvbiA9IFN0YXRlU2luZ2xldG9uO1xuY29uc3QgUkxlYW5TdGF0ZSA9ICgpID0+ICh7XG4gICAgc2VsZWN0OiBTdGF0ZVNpbmdsZXRvbi5nZXRJbnN0YW5jZSgpLnNlbGVjdCxcbn0pO1xuZXhwb3J0cy5STGVhblN0YXRlID0gUkxlYW5TdGF0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVUzUmhkR1ZUYVc1bmJHVjBiMjR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdlUzUmhkR1ZUYVc1bmJHVjBiMjR1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzYVVSQlFUaERPMEZCUXpsRExIVkRRVUZ2UXp0QlFVTndReXh4UTBGQk1FUTdRVUZGTVVRc2QwTkJRWGRETzBGQlEzaERMRzFEUVVFMFFqdEJRVVUxUWl4TlFVRmhMR05CUVdNN1NVRlRla0k3VVVGRFJTeE5RVUZOTEdOQlFXTXNSMEZCUnl4SlFVRkJMR2RDUVVGUkxFVkJRVU1zWlVGQlN5eEZRVUZGTEdsQ1FVRnBRaXhGUVVGRkxFVkJRVVVzUTBGQlVTeERRVUZETzFGQlJYSkZMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlFTeG5Ra0ZCVFN4RlFVZHNRaXhEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTllMRXRCUVVzc1JVRkJSU3hKUVVGQkxESkNRVUZaTEVWQlFVTXNZMEZCWXl4RFFVRkRPMWxCUTI1RExGRkJRVkVzUlVGQlJTeERRVUZETEVsQlFWTXNSVUZCUlN4RlFVRkZPMmRDUVVOMFFpeEhRVUZITEVOQlFVTXNRMEZCUXl4WlFVRlpMRVZCUVVVc1JVRkJSVHR2UWtGRGJrSXNUVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJRU3hwUWtGQlR5eEZRVUZETEZsQlFWa3NSVUZCUlN4SlFVRkpMRU5CUVZFc1EwRkJRenR2UWtGRmNrUXNLMFJCUVN0RU8yOUNRVU12UkN3clFrRkJLMEk3YjBKQlF5OUNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVU3ZDBKQlEzSkRMRWxCUVVrc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEZOQlFWTXNSVUZCUlRzMFFrRkRhRU1zVDBGQlR5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2VVSkJRM1pDTzI5Q1FVTklMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVVZJTEU5QlFVODdkMEpCUTB3c1MwRkJTeXhyUTBGQlR5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkxMRk5CUVZNc1EwRkJSVHR4UWtGREwwTXNRMEZCUXp0blFrRkRTaXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5NTEVOQlFVTTdVMEZEUml4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVWS0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVdNc1EwRkJRenRKUVVOd1F5eERRVUZETzBsQlJVMHNUVUZCVFN4RFFVRkRMRmRCUVZjN1VVRkRka0lzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4UlFVRlJMRVZCUVVVN1dVRkROVUlzWTBGQll5eERRVUZETEZGQlFWRXNSMEZCUnl4SlFVRkpMR05CUVdNc1JVRkJSU3hEUVVGRE8xTkJRMmhFTzFGQlJVUXNUMEZCVHl4alFVRmpMRU5CUVVNc1VVRkxja0lzUTBGQlF6dEpRVU5LTEVOQlFVTTdRMEZEUmp0QlFXNUVSQ3gzUTBGdFJFTTdRVUZGVFN4TlFVRk5MRlZCUVZVc1IwRkJSeXhIUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEyeERMRTFCUVUwc1JVRkJSU3hqUVVGakxFTkJRVU1zVjBGQlZ5eEZRVUZMTEVOQlFVTXNUVUZCVFR0RFFVTXZReXhEUVVGRExFTkJRVU03UVVGR1ZTeFJRVUZCTEZWQlFWVXNZMEZGY0VJaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVkdWNlciA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiQHJsZWFuL3V0aWxzXCIpO1xuY29uc3QgXzEgPSByZXF1aXJlKFwiLlwiKTtcbmNvbnN0IG1pZGRsZXdhcmVfMSA9IHJlcXVpcmUoXCIuL21pZGRsZXdhcmVcIik7XG5jb25zdCByZWR1Y2VyID0gKF9hLCBhY3Rpb24pID0+IHtcbiAgICB2YXIgc3RhdGUgPSBfX3Jlc3QoX2EsIFtdKTtcbiAgICBjb25zdCBlbnRpdHlEZWZpbml0aW9ucyA9ICgwLCB1dGlsc18xLmdldFZhbHVlKShfMS5STGVhbiwgXCJjb25maWcuZW50aXRpZXNcIiwge30pO1xuICAgIGNvbnN0IG1pZGRsZXdhcmUgPSAoMCwgdXRpbHNfMS5nZXRWYWx1ZSkoXzEuUkxlYW4sIFwiY29uZmlnLm1pZGRsZXdhcmVcIiwgW10pO1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSAoMCwgdXRpbHNfMS5nZXRWYWx1ZSkoXzEuUkxlYW4sIFwiZGVmaW5pdGlvblwiLCB7fSk7XG4gICAgY29uc3Qgb2JqZWN0cyA9IE9iamVjdC52YWx1ZXMoZW50aXR5RGVmaW5pdGlvbnMpO1xuICAgIGNvbnN0IG9iamVjdHNMZW5ndGggPSBvYmplY3RzLmxlbmd0aDtcbiAgICBsZXQgY29tYmluZWRSZWR1Y2VyID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3RzTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKG9iamVjdHNbaV0ucHJvdG90eXBlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBvYmplY3RzW2ldLnByb3RvdHlwZS5rZXk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHN0YXRlW2tleV07XG4gICAgICAgICAgICBpZiAob2JqZWN0c1tpXS5wcm90b3R5cGUuaW5jbHVkZUluU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGNvbWJpbmVkUmVkdWNlciwge1xuICAgICAgICAgICAgICAgICAgICBba2V5XTogb2JqZWN0c1tpXS5wcm90b3R5cGUucmVkdWNlcih2YWx1ZSwgYWN0aW9uKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IG9iamVjdHNbaV0ua2V5O1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzdGF0ZVtrZXldO1xuICAgICAgICAgICAgaWYgKG9iamVjdHNbaV0uaW5jbHVkZUluU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGNvbWJpbmVkUmVkdWNlciwge1xuICAgICAgICAgICAgICAgICAgICBba2V5XTogb2JqZWN0c1tpXS5yZWR1Y2VyKHZhbHVlLCBhY3Rpb24pLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG5leHRTdGF0ZSA9ICgwLCB1dGlsc18xLmRlZXBDb3B5KShzdGF0ZSk7XG4gICAgbWlkZGxld2FyZS5wdXNoKG1pZGRsZXdhcmVfMS5sb2dBY3Rpb25zKTtcbiAgICAvLyBtaWRkbGV3YXJlLnB1c2goc2F2ZVRvSW5kZXhlZERCKTtcbiAgICAoMCwgbWlkZGxld2FyZV8xLmFwcGx5TWlkZGxld2FyZSkoZGVmaW5pdGlvbiwgbmV4dFN0YXRlLCBhY3Rpb24sIG1pZGRsZXdhcmUpO1xuICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXI7XG59O1xuZXhwb3J0cy5yZWR1Y2VyID0gcmVkdWNlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNtVmtkV05sY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OXlaV1IxWTJWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3TzBGQlFVRXNkME5CUVd0RU8wRkJRMnhFTEhkQ1FVRXdRanRCUVVNeFFpdzJRMEZCTWtRN1FVRlBjRVFzVFVGQlRTeFBRVUZQTEVkQlFVY3NRMEZEY2tJc1JVRkJORUlzUlVGRE5VSXNUVUZCYTBJc1JVRkRiRUlzUlVGQlJUdFJRVVpITEV0QlFVc3NZMEZCVml4RlFVRlpMRU5CUVVZN1NVRkhWaXhOUVVGTkxHbENRVUZwUWl4SFFVRkhMRWxCUVVFc1owSkJRVkVzUlVGQlF5eFJRVUZMTEVWQlFVVXNhVUpCUVdsQ0xFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEYWtVc1RVRkJUU3hWUVVGVkxFZEJRVWNzU1VGQlFTeG5Ra0ZCVVN4RlFVRkRMRkZCUVVzc1JVRkJSU3h0UWtGQmJVSXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVNMVJDeE5RVUZOTEZWQlFWVXNSMEZCUnl4SlFVRkJMR2RDUVVGUkxFVkJRVU1zVVVGQlN5eEZRVUZGTEZsQlFWa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVOeVJDeE5RVUZOTEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExHbENRVUZwUWl4RFFVRXdRaXhEUVVGRE8wbEJRekZGTEUxQlFVMHNZVUZCWVN4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU03U1VGRGNrTXNTVUZCU1N4bFFVRmxMRWRCUVVjc1JVRkJSU3hEUVVGRE8wbEJSWHBDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eGhRVUZoTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRSUVVONlF5eEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFVkJRVVU3V1VGRGVFSXNUVUZCVFN4SFFVRkhMRWRCUVVjc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNN1dVRkRja01zVFVGQlRTeExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJSWHBDTEVsQlFVa3NUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF5eGpRVUZqTEVWQlFVVTdaMEpCUTNaRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNaVUZCWlN4RlFVRkZPMjlDUVVNM1FpeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFTkJRVU03YVVKQlEyNUVMRU5CUVVNc1EwRkJRenRoUVVOS08xTkJRMFk3WVVGQlRUdFpRVU5NTEUxQlFVMHNSMEZCUnl4SFFVRkhMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTTdXVUZETTBJc1RVRkJUU3hMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUlhwQ0xFbEJRVWtzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMR05CUVdNc1JVRkJSVHRuUWtGRE4wSXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhsUVVGbExFVkJRVVU3YjBKQlF6ZENMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETzJsQ1FVTjZReXhEUVVGRExFTkJRVU03WVVGRFNqdFRRVU5HTzB0QlEwWTdTVUZGUkN4TlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGQkxHZENRVUZSTEVWQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkZiRU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4MVFrRkJWU3hEUVVGRExFTkJRVU03U1VGRE5VSXNiME5CUVc5RE8wbEJRM0JETEVsQlFVRXNORUpCUVdVc1JVRkJReXhWUVVGVkxFVkJRVVVzVTBGQlV5eEZRVUZGTEUxQlFVMHNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRKUVVVelJDeFBRVUZQTEdWQlFXVXNRMEZCUXp0QlFVTjZRaXhEUVVGRExFTkJRVU03UVVGNFExY3NVVUZCUVN4UFFVRlBMRmRCZDBOc1FpSjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2F2ZVRvSW5kZXhlZERCID0gZXhwb3J0cy5sb2dBY3Rpb25zID0gZXhwb3J0cy5hcHBseU1pZGRsZXdhcmUgPSB2b2lkIDA7XG5jb25zdCBfMSA9IHJlcXVpcmUoXCIuXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCJAcmxlYW4vdXRpbHNcIik7XG5hc3luYyBmdW5jdGlvbiBsb2dBY3Rpb25zKGRlZmluaXRpb24sIHN0YXRlLCBhY3Rpb24pIHtcbiAgICBjb25zdCBzdGF0ZUtleSA9IE9iamVjdC5rZXlzKGFjdGlvbilbMV0udG9TdHJpbmcoKTtcbiAgICBjb25zdCBsb2dUb0NvbnNvbGUgPSAoMCwgdXRpbHNfMS5nZXRWYWx1ZSkoXzEuUkxlYW4sIFwiY29uZmlnLmxvZ1RvQ29uc29sZVwiLCBmYWxzZSk7XG4gICAgaWYgKGxvZ1RvQ29uc29sZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgc3RhdGVgLCBzdGF0ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBkaXNwYXRjaGluZyAke2FjdGlvbi50eXBlfWAsIHsgW3N0YXRlS2V5XTogYWN0aW9uW3N0YXRlS2V5XSB9KTtcbiAgICB9XG4gICAgLy8gVE9ETzogc3RhdGVLZXkgaXMgZmxhd2VkLiBEb2Vzbid0IHdvcmsgZm9yIG5lc3RlZCBzdGF0ZSBvYmplY3RzLiBGaXggaXQuXG4gICAgLy8gY29uc3Qgc3RhdGVLZXkgPSBPYmplY3Qua2V5cyhhY3Rpb24pWzFdLnRvU3RyaW5nKCk7XG4gICAgLy8gY29uc3Qgc3RhdGVWYWx1ZSA9IGFjdGlvbltzdGF0ZUtleV07XG4gICAgLy8gVE9ETzogVXBkYXRlIHN0YXRlIG9iamVjdCB0byBkaXNwbGF5IG5leHQgc3RhdGUgaW5zdGVhZCBvZiBjdXJyZW50IHN0YXRlLiBQcmV2aW91cyBhdHRlbXB0IHdhcyBmbGF3ZWQuXG4gICAgLy8gbmV4dFN0YXRlW3N0YXRlS2V5XSA9IHN0YXRlVmFsdWU7XG4gICAgLy8gY29uc29sZS5sb2coYG5leHQgc3RhdGVgLCBzdGF0ZSk7XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuZXhwb3J0cy5sb2dBY3Rpb25zID0gbG9nQWN0aW9ucztcbmFzeW5jIGZ1bmN0aW9uIHNhdmVUb0luZGV4ZWREQihkZWZpbml0aW9uLCBzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKGRlZmluaXRpb24ucGVyc2lzdERhdGEpIHtcbiAgICAgICAgYXdhaXQgXzEuU3RvcmUuc2V0KGRlZmluaXRpb24sIE9iamVjdC52YWx1ZXMoYWN0aW9uKVsxXSk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbn1cbmV4cG9ydHMuc2F2ZVRvSW5kZXhlZERCID0gc2F2ZVRvSW5kZXhlZERCO1xuYXN5bmMgZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKGRlZmluaXRpb24sIHN0YXRlLCBhY3Rpb24sIG1pZGRsZXdhcmUpIHtcbiAgICByZXR1cm4gbWlkZGxld2FyZS5tYXAoYXN5bmMgKGZuKSA9PiB7XG4gICAgICAgIGNvbnN0IHJldHVybmFibGUgPSBhd2FpdCBmbihkZWZpbml0aW9uLCBzdGF0ZSwgYWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHJldHVybmFibGU7XG4gICAgfSk7XG59XG5leHBvcnRzLmFwcGx5TWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXbGtaR3hsZDJGeVpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTl0YVdSa2JHVjNZWEpsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTEhkQ1FVRnBRenRCUVVOcVF5eDNRMEZCZDBNN1FVRkhlRU1zUzBGQlN5eFZRVUZWTEZWQlFWVXNRMEZEZGtJc1ZVRkJhME1zUlVGRGJFTXNTMEZCY1VJc1JVRkRja0lzVFVGQmEwSTdTVUZGYkVJc1RVRkJUU3hSUVVGUkxFZEJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTnVSQ3hOUVVGTkxGbEJRVmtzUjBGQlJ5eEpRVUZCTEdkQ1FVRlJMRVZCUVVNc1VVRkJTeXhGUVVGRkxIRkNRVUZ4UWl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJSVzVGTEVsQlFVa3NXVUZCV1N4RlFVRkZPMUZCUTJoQ0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRelZDTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1pVRkJaU3hOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1MwRkROMFU3U1VGRlJDd3lSVUZCTWtVN1NVRkRNMFVzYzBSQlFYTkVPMGxCUTNSRUxIVkRRVUYxUXp0SlFVVjJReXg1UjBGQmVVYzdTVUZEZWtjc2IwTkJRVzlETzBsQlJYQkRMRzlEUVVGdlF6dEpRVVZ3UXl4UFFVRlBMRXRCUVVzc1EwRkJRenRCUVVObUxFTkJRVU03UVVFeVFubENMR2REUVVGVk8wRkJla0p3UXl4TFFVRkxMRlZCUVZVc1pVRkJaU3hEUVVNMVFpeFZRVUZyUXl4RlFVTnNReXhMUVVGeFFpeEZRVU55UWl4TlFVRnJRanRKUVVWc1FpeEpRVUZKTEZWQlFWVXNRMEZCUXl4WFFVRlhMRVZCUVVVN1VVRkRNVUlzVFVGQlRTeFJRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1JVRkJSU3hOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UzBGRGRrUTdTVUZGUkN4UFFVRlBMRXRCUVVzc1EwRkJRenRCUVVObUxFTkJRVU03UVVGbGNVTXNNRU5CUVdVN1FVRmlja1FzUzBGQlN5eFZRVUZWTEdWQlFXVXNRMEZETlVJc1ZVRkJhME1zUlVGRGJFTXNTMEZCY1VJc1JVRkRja0lzVFVGQmEwSXNSVUZEYkVJc1ZVRkJjMEk3U1VGRmRFSXNUMEZCVHl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlR0UlFVTnFReXhOUVVGTkxGVkJRVlVzUjBGQlJ5eE5RVUZOTEVWQlFVVXNRMEZCUXl4VlFVRlZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzFGQlJYWkVMRTlCUVU4c1ZVRkJWU3hEUVVGRE8wbEJRM0JDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTB3c1EwRkJRenRCUVVWUkxEQkRRVUZsSW4wPSIsImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAnenVzdGFuZC92YW5pbGxhJztcbmV4cG9ydCAqIGZyb20gJ3p1c3RhbmQvdmFuaWxsYSc7XG5pbXBvcnQgeyB1c2VEZWJ1Z1ZhbHVlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVN5bmNFeHRlcm5hbFN0b3JlRXhwb3J0cyBmcm9tICd1c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltL3dpdGgtc2VsZWN0b3IuanMnO1xuXG5jb25zdCB7IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yIH0gPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZUV4cG9ydHM7XG5sZXQgZGlkV2FybkFib3V0RXF1YWxpdHlGbiA9IGZhbHNlO1xuZnVuY3Rpb24gdXNlU3RvcmUoYXBpLCBzZWxlY3RvciA9IGFwaS5nZXRTdGF0ZSwgZXF1YWxpdHlGbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGVxdWFsaXR5Rm4gJiYgIWRpZFdhcm5BYm91dEVxdWFsaXR5Rm4pIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBcIltERVBSRUNBVEVEXSBVc2UgYGNyZWF0ZVdpdGhFcXVhbGl0eUZuYCBpbnN0ZWFkIG9mIGBjcmVhdGVgIG9yIHVzZSBgdXNlU3RvcmVXaXRoRXF1YWxpdHlGbmAgaW5zdGVhZCBvZiBgdXNlU3RvcmVgLiBUaGV5IGNhbiBiZSBpbXBvcnRlZCBmcm9tICd6dXN0YW5kL3RyYWRpdGlvbmFsJy4gaHR0cHM6Ly9naXRodWIuY29tL3BtbmRycy96dXN0YW5kL2Rpc2N1c3Npb25zLzE5MzdcIlxuICAgICk7XG4gICAgZGlkV2FybkFib3V0RXF1YWxpdHlGbiA9IHRydWU7XG4gIH1cbiAgY29uc3Qgc2xpY2UgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcihcbiAgICBhcGkuc3Vic2NyaWJlLFxuICAgIGFwaS5nZXRTdGF0ZSxcbiAgICBhcGkuZ2V0U2VydmVyU3RhdGUgfHwgYXBpLmdldFN0YXRlLFxuICAgIHNlbGVjdG9yLFxuICAgIGVxdWFsaXR5Rm5cbiAgKTtcbiAgdXNlRGVidWdWYWx1ZShzbGljZSk7XG4gIHJldHVybiBzbGljZTtcbn1cbmNvbnN0IGNyZWF0ZUltcGwgPSAoY3JlYXRlU3RhdGUpID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiB0eXBlb2YgY3JlYXRlU3RhdGUgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIFwiW0RFUFJFQ0FURURdIFBhc3NpbmcgYSB2YW5pbGxhIHN0b3JlIHdpbGwgYmUgdW5zdXBwb3J0ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi4gSW5zdGVhZCB1c2UgYGltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnenVzdGFuZCdgLlwiXG4gICAgKTtcbiAgfVxuICBjb25zdCBhcGkgPSB0eXBlb2YgY3JlYXRlU3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IGNyZWF0ZVN0b3JlKGNyZWF0ZVN0YXRlKSA6IGNyZWF0ZVN0YXRlO1xuICBjb25zdCB1c2VCb3VuZFN0b3JlID0gKHNlbGVjdG9yLCBlcXVhbGl0eUZuKSA9PiB1c2VTdG9yZShhcGksIHNlbGVjdG9yLCBlcXVhbGl0eUZuKTtcbiAgT2JqZWN0LmFzc2lnbih1c2VCb3VuZFN0b3JlLCBhcGkpO1xuICByZXR1cm4gdXNlQm91bmRTdG9yZTtcbn07XG5jb25zdCBjcmVhdGUgPSAoY3JlYXRlU3RhdGUpID0+IGNyZWF0ZVN0YXRlID8gY3JlYXRlSW1wbChjcmVhdGVTdGF0ZSkgOiBjcmVhdGVJbXBsO1xudmFyIHJlYWN0ID0gKGNyZWF0ZVN0YXRlKSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBcIltERVBSRUNBVEVEXSBEZWZhdWx0IGV4cG9ydCBpcyBkZXByZWNhdGVkLiBJbnN0ZWFkIHVzZSBgaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnenVzdGFuZCdgLlwiXG4gICAgKTtcbiAgfVxuICByZXR1cm4gY3JlYXRlKGNyZWF0ZVN0YXRlKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZSwgcmVhY3QgYXMgZGVmYXVsdCwgdXNlU3RvcmUgfTtcbiIsImNvbnN0IGNyZWF0ZVN0b3JlSW1wbCA9IChjcmVhdGVTdGF0ZSkgPT4ge1xuICBsZXQgc3RhdGU7XG4gIGNvbnN0IGxpc3RlbmVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIGNvbnN0IHNldFN0YXRlID0gKHBhcnRpYWwsIHJlcGxhY2UpID0+IHtcbiAgICBjb25zdCBuZXh0U3RhdGUgPSB0eXBlb2YgcGFydGlhbCA9PT0gXCJmdW5jdGlvblwiID8gcGFydGlhbChzdGF0ZSkgOiBwYXJ0aWFsO1xuICAgIGlmICghT2JqZWN0LmlzKG5leHRTdGF0ZSwgc3RhdGUpKSB7XG4gICAgICBjb25zdCBwcmV2aW91c1N0YXRlID0gc3RhdGU7XG4gICAgICBzdGF0ZSA9IChyZXBsYWNlICE9IG51bGwgPyByZXBsYWNlIDogdHlwZW9mIG5leHRTdGF0ZSAhPT0gXCJvYmplY3RcIikgPyBuZXh0U3RhdGUgOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgbmV4dFN0YXRlKTtcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIoc3RhdGUsIHByZXZpb3VzU3RhdGUpKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGdldFN0YXRlID0gKCkgPT4gc3RhdGU7XG4gIGNvbnN0IHN1YnNjcmliZSA9IChsaXN0ZW5lcikgPT4ge1xuICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgIHJldHVybiAoKSA9PiBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgfTtcbiAgY29uc3QgZGVzdHJveSA9ICgpID0+IHtcbiAgICBpZiAoKGltcG9ydC5tZXRhLmVudiA/IGltcG9ydC5tZXRhLmVudi5NT0RFIDogdm9pZCAwKSAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgXCJbREVQUkVDQVRFRF0gVGhlIGBkZXN0cm95YCBtZXRob2Qgd2lsbCBiZSB1bnN1cHBvcnRlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLiBJbnN0ZWFkIHVzZSB1bnN1YnNjcmliZSBmdW5jdGlvbiByZXR1cm5lZCBieSBzdWJzY3JpYmUuIEV2ZXJ5dGhpbmcgd2lsbCBiZSBnYXJiYWdlLWNvbGxlY3RlZCBpZiBzdG9yZSBpcyBnYXJiYWdlLWNvbGxlY3RlZC5cIlxuICAgICAgKTtcbiAgICB9XG4gICAgbGlzdGVuZXJzLmNsZWFyKCk7XG4gIH07XG4gIGNvbnN0IGFwaSA9IHsgc2V0U3RhdGUsIGdldFN0YXRlLCBzdWJzY3JpYmUsIGRlc3Ryb3kgfTtcbiAgc3RhdGUgPSBjcmVhdGVTdGF0ZShzZXRTdGF0ZSwgZ2V0U3RhdGUsIGFwaSk7XG4gIHJldHVybiBhcGk7XG59O1xuY29uc3QgY3JlYXRlU3RvcmUgPSAoY3JlYXRlU3RhdGUpID0+IGNyZWF0ZVN0YXRlID8gY3JlYXRlU3RvcmVJbXBsKGNyZWF0ZVN0YXRlKSA6IGNyZWF0ZVN0b3JlSW1wbDtcbnZhciB2YW5pbGxhID0gKGNyZWF0ZVN0YXRlKSA9PiB7XG4gIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIFwiW0RFUFJFQ0FURURdIERlZmF1bHQgZXhwb3J0IGlzIGRlcHJlY2F0ZWQuIEluc3RlYWQgdXNlIGltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAnenVzdGFuZC92YW5pbGxhJy5cIlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKGNyZWF0ZVN0YXRlKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVN0b3JlLCB2YW5pbGxhIGFzIGRlZmF1bHQgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS93aXRoLXNlbGVjdG9yLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltL3dpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHVzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0vd2l0aC1zZWxlY3Rvci5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7dmFyIGg9cmVxdWlyZShcInJlYWN0XCIpLG49cmVxdWlyZShcInVzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3NoaW1cIik7ZnVuY3Rpb24gcChhLGIpe3JldHVybiBhPT09YiYmKDAhPT1hfHwxL2E9PT0xL2IpfHxhIT09YSYmYiE9PWJ9dmFyIHE9XCJmdW5jdGlvblwiPT09dHlwZW9mIE9iamVjdC5pcz9PYmplY3QuaXM6cCxyPW4udXNlU3luY0V4dGVybmFsU3RvcmUsdD1oLnVzZVJlZix1PWgudXNlRWZmZWN0LHY9aC51c2VNZW1vLHc9aC51c2VEZWJ1Z1ZhbHVlO1xuZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3Rvcj1mdW5jdGlvbihhLGIsZSxsLGcpe3ZhciBjPXQobnVsbCk7aWYobnVsbD09PWMuY3VycmVudCl7dmFyIGY9e2hhc1ZhbHVlOiExLHZhbHVlOm51bGx9O2MuY3VycmVudD1mfWVsc2UgZj1jLmN1cnJlbnQ7Yz12KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhKXtpZighYyl7Yz0hMDtkPWE7YT1sKGEpO2lmKHZvaWQgMCE9PWcmJmYuaGFzVmFsdWUpe3ZhciBiPWYudmFsdWU7aWYoZyhiLGEpKXJldHVybiBrPWJ9cmV0dXJuIGs9YX1iPWs7aWYocShkLGEpKXJldHVybiBiO3ZhciBlPWwoYSk7aWYodm9pZCAwIT09ZyYmZyhiLGUpKXJldHVybiBiO2Q9YTtyZXR1cm4gaz1lfXZhciBjPSExLGQsayxtPXZvaWQgMD09PWU/bnVsbDplO3JldHVybltmdW5jdGlvbigpe3JldHVybiBhKGIoKSl9LG51bGw9PT1tP3ZvaWQgMDpmdW5jdGlvbigpe3JldHVybiBhKG0oKSl9XX0sW2IsZSxsLGddKTt2YXIgZD1yKGEsY1swXSxjWzFdKTtcbnUoZnVuY3Rpb24oKXtmLmhhc1ZhbHVlPSEwO2YudmFsdWU9ZH0sW2RdKTt3KGQpO3JldHVybiBkfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7dmFyIGU9cmVxdWlyZShcInJlYWN0XCIpO2Z1bmN0aW9uIGgoYSxiKXtyZXR1cm4gYT09PWImJigwIT09YXx8MS9hPT09MS9iKXx8YSE9PWEmJmIhPT1ifXZhciBrPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBPYmplY3QuaXM/T2JqZWN0LmlzOmgsbD1lLnVzZVN0YXRlLG09ZS51c2VFZmZlY3Qsbj1lLnVzZUxheW91dEVmZmVjdCxwPWUudXNlRGVidWdWYWx1ZTtmdW5jdGlvbiBxKGEsYil7dmFyIGQ9YigpLGY9bCh7aW5zdDp7dmFsdWU6ZCxnZXRTbmFwc2hvdDpifX0pLGM9ZlswXS5pbnN0LGc9ZlsxXTtuKGZ1bmN0aW9uKCl7Yy52YWx1ZT1kO2MuZ2V0U25hcHNob3Q9YjtyKGMpJiZnKHtpbnN0OmN9KX0sW2EsZCxiXSk7bShmdW5jdGlvbigpe3IoYykmJmcoe2luc3Q6Y30pO3JldHVybiBhKGZ1bmN0aW9uKCl7cihjKSYmZyh7aW5zdDpjfSl9KX0sW2FdKTtwKGQpO3JldHVybiBkfVxuZnVuY3Rpb24gcihhKXt2YXIgYj1hLmdldFNuYXBzaG90O2E9YS52YWx1ZTt0cnl7dmFyIGQ9YigpO3JldHVybiFrKGEsZCl9Y2F0Y2goZil7cmV0dXJuITB9fWZ1bmN0aW9uIHQoYSxiKXtyZXR1cm4gYigpfXZhciB1PVwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93fHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvdy5kb2N1bWVudHx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudD90OnE7ZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZT12b2lkIDAhPT1lLnVzZVN5bmNFeHRlcm5hbFN0b3JlP2UudXNlU3luY0V4dGVybmFsU3RvcmU6dTtcbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHVzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0uZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgICB2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cblxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBTdHJpbmcoaXRlbSk7XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vKipcbiAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICovXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIHJldHVybiB4ID09PSB5ICYmICh4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSkgfHwgeCAhPT0geCAmJiB5ICE9PSB5IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIDtcbn1cblxudmFyIG9iamVjdElzID0gdHlwZW9mIE9iamVjdC5pcyA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC5pcyA6IGlzO1xuXG4vLyBkaXNwYXRjaCBmb3IgQ29tbW9uSlMgaW50ZXJvcCBuYW1lZCBpbXBvcnRzLlxuXG52YXIgdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSxcbiAgICB1c2VFZmZlY3QgPSBSZWFjdC51c2VFZmZlY3QsXG4gICAgdXNlTGF5b3V0RWZmZWN0ID0gUmVhY3QudXNlTGF5b3V0RWZmZWN0LFxuICAgIHVzZURlYnVnVmFsdWUgPSBSZWFjdC51c2VEZWJ1Z1ZhbHVlO1xudmFyIGRpZFdhcm5PbGQxOEFscGhhID0gZmFsc2U7XG52YXIgZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QgPSBmYWxzZTsgLy8gRGlzY2xhaW1lcjogVGhpcyBzaGltIGJyZWFrcyBtYW55IG9mIHRoZSBydWxlcyBvZiBSZWFjdCwgYW5kIG9ubHkgd29ya3Ncbi8vIGJlY2F1c2Ugb2YgYSB2ZXJ5IHBhcnRpY3VsYXIgc2V0IG9mIGltcGxlbWVudGF0aW9uIGRldGFpbHMgYW5kIGFzc3VtcHRpb25zXG4vLyAtLSBjaGFuZ2UgYW55IG9uZSBvZiB0aGVtIGFuZCBpdCB3aWxsIGJyZWFrLiBUaGUgbW9zdCBpbXBvcnRhbnQgYXNzdW1wdGlvblxuLy8gaXMgdGhhdCB1cGRhdGVzIGFyZSBhbHdheXMgc3luY2hyb25vdXMsIGJlY2F1c2UgY29uY3VycmVudCByZW5kZXJpbmcgaXNcbi8vIG9ubHkgYXZhaWxhYmxlIGluIHZlcnNpb25zIG9mIFJlYWN0IHRoYXQgYWxzbyBoYXZlIGEgYnVpbHQtaW5cbi8vIHVzZVN5bmNFeHRlcm5hbFN0b3JlIEFQSS4gQW5kIHdlIG9ubHkgdXNlIHRoaXMgc2hpbSB3aGVuIHRoZSBidWlsdC1pbiBBUElcbi8vIGRvZXMgbm90IGV4aXN0LlxuLy9cbi8vIERvIG5vdCBhc3N1bWUgdGhhdCB0aGUgY2xldmVyIGhhY2tzIHVzZWQgYnkgdGhpcyBob29rIGFsc28gd29yayBpbiBnZW5lcmFsLlxuLy8gVGhlIHBvaW50IG9mIHRoaXMgc2hpbSBpcyB0byByZXBsYWNlIHRoZSBuZWVkIGZvciBoYWNrcyBieSBvdGhlciBsaWJyYXJpZXMuXG5cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIC8vIE5vdGU6IFRoZSBzaGltIGRvZXMgbm90IHVzZSBnZXRTZXJ2ZXJTbmFwc2hvdCwgYmVjYXVzZSBwcmUtMTggdmVyc2lvbnMgb2Zcbi8vIFJlYWN0IGRvIG5vdCBleHBvc2UgYSB3YXkgdG8gY2hlY2sgaWYgd2UncmUgaHlkcmF0aW5nLiBTbyB1c2VycyBvZiB0aGUgc2hpbVxuLy8gd2lsbCBuZWVkIHRvIHRyYWNrIHRoYXQgdGhlbXNlbHZlcyBhbmQgcmV0dXJuIHRoZSBjb3JyZWN0IHZhbHVlXG4vLyBmcm9tIGBnZXRTbmFwc2hvdGAuXG5nZXRTZXJ2ZXJTbmFwc2hvdCkge1xuICB7XG4gICAgaWYgKCFkaWRXYXJuT2xkMThBbHBoYSkge1xuICAgICAgaWYgKFJlYWN0LnN0YXJ0VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRpZFdhcm5PbGQxOEFscGhhID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignWW91IGFyZSB1c2luZyBhbiBvdXRkYXRlZCwgcHJlLXJlbGVhc2UgYWxwaGEgb2YgUmVhY3QgMTggdGhhdCAnICsgJ2RvZXMgbm90IHN1cHBvcnQgdXNlU3luY0V4dGVybmFsU3RvcmUuIFRoZSAnICsgJ3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlIHNoaW0gd2lsbCBub3Qgd29yayBjb3JyZWN0bHkuIFVwZ3JhZGUgJyArICd0byBhIG5ld2VyIHByZS1yZWxlYXNlLicpO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBSZWFkIHRoZSBjdXJyZW50IHNuYXBzaG90IGZyb20gdGhlIHN0b3JlIG9uIGV2ZXJ5IHJlbmRlci4gQWdhaW4sIHRoaXNcbiAgLy8gYnJlYWtzIHRoZSBydWxlcyBvZiBSZWFjdCwgYW5kIG9ubHkgd29ya3MgaGVyZSBiZWNhdXNlIG9mIHNwZWNpZmljXG4gIC8vIGltcGxlbWVudGF0aW9uIGRldGFpbHMsIG1vc3QgaW1wb3J0YW50bHkgdGhhdCB1cGRhdGVzIGFyZVxuICAvLyBhbHdheXMgc3luY2hyb25vdXMuXG5cblxuICB2YXIgdmFsdWUgPSBnZXRTbmFwc2hvdCgpO1xuXG4gIHtcbiAgICBpZiAoIWRpZFdhcm5VbmNhY2hlZEdldFNuYXBzaG90KSB7XG4gICAgICB2YXIgY2FjaGVkVmFsdWUgPSBnZXRTbmFwc2hvdCgpO1xuXG4gICAgICBpZiAoIW9iamVjdElzKHZhbHVlLCBjYWNoZWRWYWx1ZSkpIHtcbiAgICAgICAgZXJyb3IoJ1RoZSByZXN1bHQgb2YgZ2V0U25hcHNob3Qgc2hvdWxkIGJlIGNhY2hlZCB0byBhdm9pZCBhbiBpbmZpbml0ZSBsb29wJyk7XG5cbiAgICAgICAgZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBCZWNhdXNlIHVwZGF0ZXMgYXJlIHN5bmNocm9ub3VzLCB3ZSBkb24ndCBxdWV1ZSB0aGVtLiBJbnN0ZWFkIHdlIGZvcmNlIGFcbiAgLy8gcmUtcmVuZGVyIHdoZW5ldmVyIHRoZSBzdWJzY3JpYmVkIHN0YXRlIGNoYW5nZXMgYnkgdXBkYXRpbmcgYW4gc29tZVxuICAvLyBhcmJpdHJhcnkgdXNlU3RhdGUgaG9vay4gVGhlbiwgZHVyaW5nIHJlbmRlciwgd2UgY2FsbCBnZXRTbmFwc2hvdCB0byByZWFkXG4gIC8vIHRoZSBjdXJyZW50IHZhbHVlLlxuICAvL1xuICAvLyBCZWNhdXNlIHdlIGRvbid0IGFjdHVhbGx5IHVzZSB0aGUgc3RhdGUgcmV0dXJuZWQgYnkgdGhlIHVzZVN0YXRlIGhvb2ssIHdlXG4gIC8vIGNhbiBzYXZlIGEgYml0IG9mIG1lbW9yeSBieSBzdG9yaW5nIG90aGVyIHN0dWZmIGluIHRoYXQgc2xvdC5cbiAgLy9cbiAgLy8gVG8gaW1wbGVtZW50IHRoZSBlYXJseSBiYWlsb3V0LCB3ZSBuZWVkIHRvIHRyYWNrIHNvbWUgdGhpbmdzIG9uIGEgbXV0YWJsZVxuICAvLyBvYmplY3QuIFVzdWFsbHksIHdlIHdvdWxkIHB1dCB0aGF0IGluIGEgdXNlUmVmIGhvb2ssIGJ1dCB3ZSBjYW4gc3Rhc2ggaXQgaW5cbiAgLy8gb3VyIHVzZVN0YXRlIGhvb2sgaW5zdGVhZC5cbiAgLy9cbiAgLy8gVG8gZm9yY2UgYSByZS1yZW5kZXIsIHdlIGNhbGwgZm9yY2VVcGRhdGUoe2luc3R9KS4gVGhhdCB3b3JrcyBiZWNhdXNlIHRoZVxuICAvLyBuZXcgb2JqZWN0IGFsd2F5cyBmYWlscyBhbiBlcXVhbGl0eSBjaGVjay5cblxuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSh7XG4gICAgaW5zdDoge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZ2V0U25hcHNob3Q6IGdldFNuYXBzaG90XG4gICAgfVxuICB9KSxcbiAgICAgIGluc3QgPSBfdXNlU3RhdGVbMF0uaW5zdCxcbiAgICAgIGZvcmNlVXBkYXRlID0gX3VzZVN0YXRlWzFdOyAvLyBUcmFjayB0aGUgbGF0ZXN0IGdldFNuYXBzaG90IGZ1bmN0aW9uIHdpdGggYSByZWYuIFRoaXMgbmVlZHMgdG8gYmUgdXBkYXRlZFxuICAvLyBpbiB0aGUgbGF5b3V0IHBoYXNlIHNvIHdlIGNhbiBhY2Nlc3MgaXQgZHVyaW5nIHRoZSB0ZWFyaW5nIGNoZWNrIHRoYXRcbiAgLy8gaGFwcGVucyBvbiBzdWJzY3JpYmUuXG5cblxuICB1c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGluc3QudmFsdWUgPSB2YWx1ZTtcbiAgICBpbnN0LmdldFNuYXBzaG90ID0gZ2V0U25hcHNob3Q7IC8vIFdoZW5ldmVyIGdldFNuYXBzaG90IG9yIHN1YnNjcmliZSBjaGFuZ2VzLCB3ZSBuZWVkIHRvIGNoZWNrIGluIHRoZVxuICAgIC8vIGNvbW1pdCBwaGFzZSBpZiB0aGVyZSB3YXMgYW4gaW50ZXJsZWF2ZWQgbXV0YXRpb24uIEluIGNvbmN1cnJlbnQgbW9kZVxuICAgIC8vIHRoaXMgY2FuIGhhcHBlbiBhbGwgdGhlIHRpbWUsIGJ1dCBldmVuIGluIHN5bmNocm9ub3VzIG1vZGUsIGFuIGVhcmxpZXJcbiAgICAvLyBlZmZlY3QgbWF5IGhhdmUgbXV0YXRlZCB0aGUgc3RvcmUuXG5cbiAgICBpZiAoY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSkge1xuICAgICAgLy8gRm9yY2UgYSByZS1yZW5kZXIuXG4gICAgICBmb3JjZVVwZGF0ZSh7XG4gICAgICAgIGluc3Q6IGluc3RcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3N1YnNjcmliZSwgdmFsdWUsIGdldFNuYXBzaG90XSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgLy8gQ2hlY2sgZm9yIGNoYW5nZXMgcmlnaHQgYmVmb3JlIHN1YnNjcmliaW5nLiBTdWJzZXF1ZW50IGNoYW5nZXMgd2lsbCBiZVxuICAgIC8vIGRldGVjdGVkIGluIHRoZSBzdWJzY3JpcHRpb24gaGFuZGxlci5cbiAgICBpZiAoY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSkge1xuICAgICAgLy8gRm9yY2UgYSByZS1yZW5kZXIuXG4gICAgICBmb3JjZVVwZGF0ZSh7XG4gICAgICAgIGluc3Q6IGluc3RcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVTdG9yZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFRPRE86IEJlY2F1c2UgdGhlcmUgaXMgbm8gY3Jvc3MtcmVuZGVyZXIgQVBJIGZvciBiYXRjaGluZyB1cGRhdGVzLCBpdCdzXG4gICAgICAvLyB1cCB0byB0aGUgY29uc3VtZXIgb2YgdGhpcyBsaWJyYXJ5IHRvIHdyYXAgdGhlaXIgc3Vic2NyaXB0aW9uIGV2ZW50XG4gICAgICAvLyB3aXRoIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLiBTaG91bGQgd2UgdHJ5IHRvIGRldGVjdCB3aGVuIHRoaXMgaXNuJ3RcbiAgICAgIC8vIHRoZSBjYXNlIGFuZCBwcmludCBhIHdhcm5pbmcgaW4gZGV2ZWxvcG1lbnQ/XG4gICAgICAvLyBUaGUgc3RvcmUgY2hhbmdlZC4gQ2hlY2sgaWYgdGhlIHNuYXBzaG90IGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgdGltZSB3ZVxuICAgICAgLy8gcmVhZCBmcm9tIHRoZSBzdG9yZS5cbiAgICAgIGlmIChjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpKSB7XG4gICAgICAgIC8vIEZvcmNlIGEgcmUtcmVuZGVyLlxuICAgICAgICBmb3JjZVVwZGF0ZSh7XG4gICAgICAgICAgaW5zdDogaW5zdFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9OyAvLyBTdWJzY3JpYmUgdG8gdGhlIHN0b3JlIGFuZCByZXR1cm4gYSBjbGVhbi11cCBmdW5jdGlvbi5cblxuXG4gICAgcmV0dXJuIHN1YnNjcmliZShoYW5kbGVTdG9yZUNoYW5nZSk7XG4gIH0sIFtzdWJzY3JpYmVdKTtcbiAgdXNlRGVidWdWYWx1ZSh2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSB7XG4gIHZhciBsYXRlc3RHZXRTbmFwc2hvdCA9IGluc3QuZ2V0U25hcHNob3Q7XG4gIHZhciBwcmV2VmFsdWUgPSBpbnN0LnZhbHVlO1xuXG4gIHRyeSB7XG4gICAgdmFyIG5leHRWYWx1ZSA9IGxhdGVzdEdldFNuYXBzaG90KCk7XG4gICAgcmV0dXJuICFvYmplY3RJcyhwcmV2VmFsdWUsIG5leHRWYWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmUkMShzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCkge1xuICAvLyBOb3RlOiBUaGUgc2hpbSBkb2VzIG5vdCB1c2UgZ2V0U2VydmVyU25hcHNob3QsIGJlY2F1c2UgcHJlLTE4IHZlcnNpb25zIG9mXG4gIC8vIFJlYWN0IGRvIG5vdCBleHBvc2UgYSB3YXkgdG8gY2hlY2sgaWYgd2UncmUgaHlkcmF0aW5nLiBTbyB1c2VycyBvZiB0aGUgc2hpbVxuICAvLyB3aWxsIG5lZWQgdG8gdHJhY2sgdGhhdCB0aGVtc2VsdmVzIGFuZCByZXR1cm4gdGhlIGNvcnJlY3QgdmFsdWVcbiAgLy8gZnJvbSBgZ2V0U25hcHNob3RgLlxuICByZXR1cm4gZ2V0U25hcHNob3QoKTtcbn1cblxudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpO1xuXG52YXIgaXNTZXJ2ZXJFbnZpcm9ubWVudCA9ICFjYW5Vc2VET007XG5cbnZhciBzaGltID0gaXNTZXJ2ZXJFbnZpcm9ubWVudCA/IHVzZVN5bmNFeHRlcm5hbFN0b3JlJDEgOiB1c2VTeW5jRXh0ZXJuYWxTdG9yZTtcbnZhciB1c2VTeW5jRXh0ZXJuYWxTdG9yZSQyID0gUmVhY3QudXNlU3luY0V4dGVybmFsU3RvcmUgIT09IHVuZGVmaW5lZCA/IFJlYWN0LnVzZVN5bmNFeHRlcm5hbFN0b3JlIDogc2hpbTtcblxuZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlJDI7XG4gICAgICAgICAgLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AobmV3IEVycm9yKCkpO1xufVxuICAgICAgICBcbiAgfSkoKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHVzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0vd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQobmV3IEVycm9yKCkpO1xufVxuICAgICAgICAgIHZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgc2hpbSA9IHJlcXVpcmUoJ3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3NoaW0nKTtcblxuLyoqXG4gKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAqL1xuZnVuY3Rpb24gaXMoeCwgeSkge1xuICByZXR1cm4geCA9PT0geSAmJiAoeCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkpIHx8IHggIT09IHggJiYgeSAhPT0geSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxuICA7XG59XG5cbnZhciBvYmplY3RJcyA9IHR5cGVvZiBPYmplY3QuaXMgPT09ICdmdW5jdGlvbicgPyBPYmplY3QuaXMgOiBpcztcblxudmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gc2hpbS51c2VTeW5jRXh0ZXJuYWxTdG9yZTtcblxuLy8gZm9yIENvbW1vbkpTIGludGVyb3AuXG5cbnZhciB1c2VSZWYgPSBSZWFjdC51c2VSZWYsXG4gICAgdXNlRWZmZWN0ID0gUmVhY3QudXNlRWZmZWN0LFxuICAgIHVzZU1lbW8gPSBSZWFjdC51c2VNZW1vLFxuICAgIHVzZURlYnVnVmFsdWUgPSBSZWFjdC51c2VEZWJ1Z1ZhbHVlOyAvLyBTYW1lIGFzIHVzZVN5bmNFeHRlcm5hbFN0b3JlLCBidXQgc3VwcG9ydHMgc2VsZWN0b3IgYW5kIGlzRXF1YWwgYXJndW1lbnRzLlxuXG5mdW5jdGlvbiB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcihzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCwgc2VsZWN0b3IsIGlzRXF1YWwpIHtcbiAgLy8gVXNlIHRoaXMgdG8gdHJhY2sgdGhlIHJlbmRlcmVkIHNuYXBzaG90LlxuICB2YXIgaW5zdFJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGluc3Q7XG5cbiAgaWYgKGluc3RSZWYuY3VycmVudCA9PT0gbnVsbCkge1xuICAgIGluc3QgPSB7XG4gICAgICBoYXNWYWx1ZTogZmFsc2UsXG4gICAgICB2YWx1ZTogbnVsbFxuICAgIH07XG4gICAgaW5zdFJlZi5jdXJyZW50ID0gaW5zdDtcbiAgfSBlbHNlIHtcbiAgICBpbnN0ID0gaW5zdFJlZi5jdXJyZW50O1xuICB9XG5cbiAgdmFyIF91c2VNZW1vID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gVHJhY2sgdGhlIG1lbW9pemVkIHN0YXRlIHVzaW5nIGNsb3N1cmUgdmFyaWFibGVzIHRoYXQgYXJlIGxvY2FsIHRvIHRoaXNcbiAgICAvLyBtZW1vaXplZCBpbnN0YW5jZSBvZiBhIGdldFNuYXBzaG90IGZ1bmN0aW9uLiBJbnRlbnRpb25hbGx5IG5vdCB1c2luZyBhXG4gICAgLy8gdXNlUmVmIGhvb2ssIGJlY2F1c2UgdGhhdCBzdGF0ZSB3b3VsZCBiZSBzaGFyZWQgYWNyb3NzIGFsbCBjb25jdXJyZW50XG4gICAgLy8gY29waWVzIG9mIHRoZSBob29rL2NvbXBvbmVudC5cbiAgICB2YXIgaGFzTWVtbyA9IGZhbHNlO1xuICAgIHZhciBtZW1vaXplZFNuYXBzaG90O1xuICAgIHZhciBtZW1vaXplZFNlbGVjdGlvbjtcblxuICAgIHZhciBtZW1vaXplZFNlbGVjdG9yID0gZnVuY3Rpb24gKG5leHRTbmFwc2hvdCkge1xuICAgICAgaWYgKCFoYXNNZW1vKSB7XG4gICAgICAgIC8vIFRoZSBmaXJzdCB0aW1lIHRoZSBob29rIGlzIGNhbGxlZCwgdGhlcmUgaXMgbm8gbWVtb2l6ZWQgcmVzdWx0LlxuICAgICAgICBoYXNNZW1vID0gdHJ1ZTtcbiAgICAgICAgbWVtb2l6ZWRTbmFwc2hvdCA9IG5leHRTbmFwc2hvdDtcblxuICAgICAgICB2YXIgX25leHRTZWxlY3Rpb24gPSBzZWxlY3RvcihuZXh0U25hcHNob3QpO1xuXG4gICAgICAgIGlmIChpc0VxdWFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBFdmVuIGlmIHRoZSBzZWxlY3RvciBoYXMgY2hhbmdlZCwgdGhlIGN1cnJlbnRseSByZW5kZXJlZCBzZWxlY3Rpb25cbiAgICAgICAgICAvLyBtYXkgYmUgZXF1YWwgdG8gdGhlIG5ldyBzZWxlY3Rpb24uIFdlIHNob3VsZCBhdHRlbXB0IHRvIHJldXNlIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgdmFsdWUgaWYgcG9zc2libGUsIHRvIHByZXNlcnZlIGRvd25zdHJlYW0gbWVtb2l6YXRpb25zLlxuICAgICAgICAgIGlmIChpbnN0Lmhhc1ZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFNlbGVjdGlvbiA9IGluc3QudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChpc0VxdWFsKGN1cnJlbnRTZWxlY3Rpb24sIF9uZXh0U2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICBtZW1vaXplZFNlbGVjdGlvbiA9IGN1cnJlbnRTZWxlY3Rpb247XG4gICAgICAgICAgICAgIHJldHVybiBjdXJyZW50U2VsZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lbW9pemVkU2VsZWN0aW9uID0gX25leHRTZWxlY3Rpb247XG4gICAgICAgIHJldHVybiBfbmV4dFNlbGVjdGlvbjtcbiAgICAgIH0gLy8gV2UgbWF5IGJlIGFibGUgdG8gcmV1c2UgdGhlIHByZXZpb3VzIGludm9jYXRpb24ncyByZXN1bHQuXG5cblxuICAgICAgLy8gV2UgbWF5IGJlIGFibGUgdG8gcmV1c2UgdGhlIHByZXZpb3VzIGludm9jYXRpb24ncyByZXN1bHQuXG4gICAgICB2YXIgcHJldlNuYXBzaG90ID0gbWVtb2l6ZWRTbmFwc2hvdDtcbiAgICAgIHZhciBwcmV2U2VsZWN0aW9uID0gbWVtb2l6ZWRTZWxlY3Rpb247XG5cbiAgICAgIGlmIChvYmplY3RJcyhwcmV2U25hcHNob3QsIG5leHRTbmFwc2hvdCkpIHtcbiAgICAgICAgLy8gVGhlIHNuYXBzaG90IGlzIHRoZSBzYW1lIGFzIGxhc3QgdGltZS4gUmV1c2UgdGhlIHByZXZpb3VzIHNlbGVjdGlvbi5cbiAgICAgICAgcmV0dXJuIHByZXZTZWxlY3Rpb247XG4gICAgICB9IC8vIFRoZSBzbmFwc2hvdCBoYXMgY2hhbmdlZCwgc28gd2UgbmVlZCB0byBjb21wdXRlIGEgbmV3IHNlbGVjdGlvbi5cblxuXG4gICAgICAvLyBUaGUgc25hcHNob3QgaGFzIGNoYW5nZWQsIHNvIHdlIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBzZWxlY3Rpb24uXG4gICAgICB2YXIgbmV4dFNlbGVjdGlvbiA9IHNlbGVjdG9yKG5leHRTbmFwc2hvdCk7IC8vIElmIGEgY3VzdG9tIGlzRXF1YWwgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIHVzZSB0aGF0IHRvIGNoZWNrIGlmIHRoZSBkYXRhXG4gICAgICAvLyBoYXMgY2hhbmdlZC4gSWYgaXQgaGFzbid0LCByZXR1cm4gdGhlIHByZXZpb3VzIHNlbGVjdGlvbi4gVGhhdCBzaWduYWxzXG4gICAgICAvLyB0byBSZWFjdCB0aGF0IHRoZSBzZWxlY3Rpb25zIGFyZSBjb25jZXB0dWFsbHkgZXF1YWwsIGFuZCB3ZSBjYW4gYmFpbFxuICAgICAgLy8gb3V0IG9mIHJlbmRlcmluZy5cblxuICAgICAgLy8gSWYgYSBjdXN0b20gaXNFcXVhbCBmdW5jdGlvbiBpcyBwcm92aWRlZCwgdXNlIHRoYXQgdG8gY2hlY2sgaWYgdGhlIGRhdGFcbiAgICAgIC8vIGhhcyBjaGFuZ2VkLiBJZiBpdCBoYXNuJ3QsIHJldHVybiB0aGUgcHJldmlvdXMgc2VsZWN0aW9uLiBUaGF0IHNpZ25hbHNcbiAgICAgIC8vIHRvIFJlYWN0IHRoYXQgdGhlIHNlbGVjdGlvbnMgYXJlIGNvbmNlcHR1YWxseSBlcXVhbCwgYW5kIHdlIGNhbiBiYWlsXG4gICAgICAvLyBvdXQgb2YgcmVuZGVyaW5nLlxuICAgICAgaWYgKGlzRXF1YWwgIT09IHVuZGVmaW5lZCAmJiBpc0VxdWFsKHByZXZTZWxlY3Rpb24sIG5leHRTZWxlY3Rpb24pKSB7XG4gICAgICAgIHJldHVybiBwcmV2U2VsZWN0aW9uO1xuICAgICAgfVxuXG4gICAgICBtZW1vaXplZFNuYXBzaG90ID0gbmV4dFNuYXBzaG90O1xuICAgICAgbWVtb2l6ZWRTZWxlY3Rpb24gPSBuZXh0U2VsZWN0aW9uO1xuICAgICAgcmV0dXJuIG5leHRTZWxlY3Rpb247XG4gICAgfTsgLy8gQXNzaWduaW5nIHRoaXMgdG8gYSBjb25zdGFudCBzbyB0aGF0IEZsb3cga25vd3MgaXQgY2FuJ3QgY2hhbmdlLlxuXG5cbiAgICAvLyBBc3NpZ25pbmcgdGhpcyB0byBhIGNvbnN0YW50IHNvIHRoYXQgRmxvdyBrbm93cyBpdCBjYW4ndCBjaGFuZ2UuXG4gICAgdmFyIG1heWJlR2V0U2VydmVyU25hcHNob3QgPSBnZXRTZXJ2ZXJTbmFwc2hvdCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGdldFNlcnZlclNuYXBzaG90O1xuXG4gICAgdmFyIGdldFNuYXBzaG90V2l0aFNlbGVjdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG1lbW9pemVkU2VsZWN0b3IoZ2V0U25hcHNob3QoKSk7XG4gICAgfTtcblxuICAgIHZhciBnZXRTZXJ2ZXJTbmFwc2hvdFdpdGhTZWxlY3RvciA9IG1heWJlR2V0U2VydmVyU25hcHNob3QgPT09IG51bGwgPyB1bmRlZmluZWQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbWVtb2l6ZWRTZWxlY3RvcihtYXliZUdldFNlcnZlclNuYXBzaG90KCkpO1xuICAgIH07XG4gICAgcmV0dXJuIFtnZXRTbmFwc2hvdFdpdGhTZWxlY3RvciwgZ2V0U2VydmVyU25hcHNob3RXaXRoU2VsZWN0b3JdO1xuICB9LCBbZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90LCBzZWxlY3RvciwgaXNFcXVhbF0pLFxuICAgICAgZ2V0U2VsZWN0aW9uID0gX3VzZU1lbW9bMF0sXG4gICAgICBnZXRTZXJ2ZXJTZWxlY3Rpb24gPSBfdXNlTWVtb1sxXTtcblxuICB2YXIgdmFsdWUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNlbGVjdGlvbiwgZ2V0U2VydmVyU2VsZWN0aW9uKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpbnN0Lmhhc1ZhbHVlID0gdHJ1ZTtcbiAgICBpbnN0LnZhbHVlID0gdmFsdWU7XG4gIH0sIFt2YWx1ZV0pO1xuICB1c2VEZWJ1Z1ZhbHVlKHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3I7XG4gICAgICAgICAgLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AobmV3IEVycm9yKCkpO1xufVxuICAgICAgICBcbiAgfSkoKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IFN0YXRlU2luZ2xldG9uXzEgPSByZXF1aXJlKFwiLi4vU3RhdGVTaW5nbGV0b25cIik7XG5hc3luYyBmdW5jdGlvbiB1c2VSZXF1ZXN0KG9wdGlvbnMsIG1ldGhvZCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IFN0YXRlU2luZ2xldG9uXzEuU3RhdGVTaW5nbGV0b24uZ2V0SW5zdGFuY2UoKS56dXN0YW5kKChzKSA9PiBzLmRpc3BhdGNoKTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAob3B0aW9ucywgY2FsbGJhY2sgPSBudWxsKSA9PiB7XG4gICAgICAgICAgICBtZXRob2Qob3B0aW9ucywgZGlzcGF0Y2gsIGNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtZXRob2Qob3B0aW9ucywgZGlzcGF0Y2gsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB1c2VSZXF1ZXN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhObFVtVnhkV1Z6ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlvYjI5cmN5OTFjMlZTWlhGMVpYTjBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNhVU5CUVd0RE8wRkJRMnhETEhORVFVRnRSRHRCUVVWd1F5eExRVUZMTEZWQlFWVXNWVUZCVlN4RFFVTjBReXhQUVVGWkxFVkJRMW9zVFVGQlowSXNSVUZEYUVJc1VVRkJhMEk3U1VGRmJFSXNUVUZCVFN4UlFVRlJMRWRCUVVjc0swSkJRV01zUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVWNlJTeEpRVUZKTEU5QlFVOHNUMEZCVHl4TFFVRkxMRmRCUVZjc1JVRkJSVHRSUVVOc1F5eFBRVUZQTEVOQlFVTXNUMEZCV1N4RlFVRkZMRmRCUVRSQ0xFbEJRVWtzUlVGQlJTeEZRVUZGTzFsQlEzaEVMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzVVVGQlVTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUTNSRExFTkJRVU1zUTBGQlF6dExRVU5JTzBsQlJVUXNTVUZCUVN4cFFrRkJVeXhGUVVGRExFZEJRVWNzUlVGQlJUdFJRVU5pTEVsQlFVazdXVUZEUml4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxGRkJRVkVzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0VFFVTnlRenRSUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTzFsQlExWXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5vUWp0SlFVTklMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEJRVU5VTEVOQlFVTTdRVUZ3UWtRc05rSkJiMEpESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IHJlcXVlc3RfMSA9IHJlcXVpcmUoXCIuLi9faW50ZXJuYWwvcmVxdWVzdFwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiQHJsZWFuL3V0aWxzXCIpO1xuY29uc3QgX2ludGVybmFsXzEgPSByZXF1aXJlKFwiLi4vX2ludGVybmFsXCIpO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcbmNvbnN0IFN0YXRlU2luZ2xldG9uXzEgPSByZXF1aXJlKFwiLi4vU3RhdGVTaW5nbGV0b25cIik7XG4vKipcbiAqIHVzZUdldCAtIGhvb2tcbiAqXG4gKiBFeHBvc2VkIGhvb2sgdG8gYWNjZXNzIEdFVCBtZXRob2QuXG4gKlxuICogSWYgdGhlIGVudGl0eSBkZWZpbml0aW9uIGlzIHBhc3NlZCwgdGhpcyBnZXRzIGRhdGEgb2YgYW4gZW50aXR5IHdoZW4gbW91bnRlZFxuICogYW5kIHJldHVybnMgaXRzIEVudGl0eVN0YXRlLiBPdGhlcndpc2UsIHRoaXMgcmV0dXJucyB0aGUgZ2V0KCkgZnVuY3Rpb24gdG9cbiAqIG1hbnVhbGx5IGdldCB0aGUgZW50aXR5IGRhdGEuXG4gKlxuICogQHRvZG8gVHlwZSB0aGUgcmVzcG9uc2UgY2FsbGJhY2suIFNlZSB1c2VQb3N0IGFuZCB1c2VQdXQgZm9yIHJlZmVyZW5jZS5cbiAqL1xuZnVuY3Rpb24gdXNlR2V0KG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBTdGF0ZVNpbmdsZXRvbl8xLlN0YXRlU2luZ2xldG9uLmdldEluc3RhbmNlKCkuenVzdGFuZCgocykgPT4gW1xuICAgICAgICBzLnN0YXRlLFxuICAgICAgICBzLmRpc3BhdGNoLFxuICAgIF0pO1xuICAgIGNvbnN0IFtpbml0LCBzZXRJbml0XSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShmYWxzZSk7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKCk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKCk7XG4gICAgY29uc3QgW2lzUmVmZXRjaGluZywgc2V0SXNSZWZldGNoaW5nXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShmYWxzZSk7XG4gICAgY29uc3QgW2xhc3RVcGRhdGVkLCBzZXRMYXN0VXBkYXRlZF0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoKTtcbiAgICBjb25zdCBzdGF0ZVJlZiA9ICgwLCByZWFjdF8xLnVzZVJlZikoc3RhdGUpO1xuICAgIGNvbnN0IGFib3J0Q3RybCA9IHR5cGVvZiBuZXcgQWJvcnRDb250cm9sbGVyKCkgPT09ICd1bmRlZmluZWQnXG4gICAgICAgID8ge1xuICAgICAgICAgICAgc2lnbmFsOiBudWxsLFxuICAgICAgICAgICAgYWJvcnQ6ICgpID0+IGNvbnNvbGUud2FybignQnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGZldGNoIGNhbmNlbGluZy4nKSxcbiAgICAgICAgfVxuICAgICAgICA6IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICBsZXQgZGVwZW5kZW5jaWVzID0gW107XG4gICAgLy8gdGhlc2Ugc2hvdWxkIGJlIHVzZVJlZiB2YXJpYWJsZXMgaW5zdGVhZFxuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlO1xuICAgIGxldCBjYW5jZWxlZCA9IGZhbHNlO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBzdGF0ZVJlZi5jdXJyZW50ID0gc3RhdGU7XG4gICAgfSwgW3N0YXRlXSk7XG4gICAgY29uc3QgZ2V0ID0gYXN5bmMgKG9wdGlvbnMsIGlubmVyU3RhdGVSZWYsIGRpc3BhdGNoLCBjYWxsYmFjayA9IChyZXMsIGVycikgPT4geyB9LCBpc1JlZmV0Y2ggPSBmYWxzZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGRlZmluaXRpb24sIHBhcmFtcywgdHlwZSB9ID0gKDAsIF9pbnRlcm5hbF8xLmdldEhvb2tPcHRpb25zKShvcHRpb25zKTtcbiAgICAgICAgLy9jb25zdCBjdXJyZW50U3RhdGU6IEdsb2JhbFN0YXRlPEE+ID0gc3RhdGU7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGlubmVyU3RhdGVSZWYuY3VycmVudDtcbiAgICAgICAgLy8gZGVmaW5pdGlvbiBkb2VzIG5vdCBpbmNsdWRlIGEgZ2V0IGNhbGxcbiAgICAgICAgaWYgKCEoMCwgdXRpbHNfMS5oYXNWYWx1ZSkoZGVmaW5pdGlvbiwgJ2dldFVSTCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBmb3IgbnVsbCBwYXJhbXNcbiAgICAgICAgaWYgKCFkZWZpbml0aW9uLm51bGxhYmxlUGFyYW1zKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNba2V5XSA9PT0gJ3VuZGVmaW5lZCcgfHwgcGFyYW1zW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXRlVmFsdWUgPSBjdXJyZW50U3RhdGUgJiYgY3VycmVudFN0YXRlW2RlZmluaXRpb24ua2V5XVxuICAgICAgICAgICAgPyAoMCwgdXRpbHNfMS5kZWVwQ29weSkoY3VycmVudFN0YXRlW2RlZmluaXRpb24ua2V5XSlcbiAgICAgICAgICAgIDoge307XG4gICAgICAgIHN0YXRlVmFsdWUucmVmZXRjaCA9ICgpID0+IHJlZmV0Y2gob3B0aW9ucyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc3RhdGVWYWx1ZVtkZWZpbml0aW9uLmtleV0gJiZcbiAgICAgICAgICAgICAgICBzdGF0ZVZhbHVlW2RlZmluaXRpb24ua2V5XS5pc1JlZmV0Y2hpbmdcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlVmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmIChpc01vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0SW5pdCh0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNSZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldElzUmVmZXRjaGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGF0ZVZhbHVlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICBzdGF0ZVZhbHVlLmluaXQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGlzUmVmZXRjaCkge1xuICAgICAgICAgICAgICAgIHN0YXRlVmFsdWUuaXNSZWZldGNoaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNldCBpbml0aWFsIGxvYWRpbmcgc3RhdGVcbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uLnBlcnNpc3REYXRhKSB7XG4gICAgICAgICAgICAgICAgX18xLlN0b3JlLnNldChkZWZpbml0aW9uLCBzdGF0ZVZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uLmluY2x1ZGVJblN0YXRlKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goZGVmaW5pdGlvbi51cGRhdGVTdGF0ZShzdGF0ZVZhbHVlLCBgJHtkZWZpbml0aW9uLnR5cGV9X0lTX0xPQURJTkdgKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbi5wcmVmZXJTdG9yZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgICAgICAgICBwYXRoOiBkZWZpbml0aW9uLmdldFVSTCxcbiAgICAgICAgICAgICAgICBxdWVyeTogcGFyYW1zLFxuICAgICAgICAgICAgICAgIHNpZ25hbDogYWJvcnRDdHJsLnNpZ25hbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCAoMCwgcmVxdWVzdF8xLnJlcXVlc3QpKHBheWxvYWQsIGRlZmluaXRpb24sIHR5cGVzXzEuQVBJX01FVEhPRC5HRVQpO1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgIC8vIFRyYW5zZm9ybSBkYXRhIGlmIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIGlzIHNldCBmb3IgZW50aXR5IGRlZmluaXRpb24uXG4gICAgICAgICAgICAgICAgc3RhdGVWYWx1ZS5kYXRhID1cbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbi50cmFuc2Zvcm1hdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGRlZmluaXRpb24udHJhbnNmb3JtYXRpb24gPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZGVmaW5pdGlvbi50cmFuc2Zvcm1hdGlvbihyZXMuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgc3RhdGVWYWx1ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzdGF0ZVZhbHVlLmxhc3RVcGRhdGVkID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBzdGF0ZVZhbHVlLmlzUmVmZXRjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGVWYWx1ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc01vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICBzZXREYXRhKHN0YXRlVmFsdWUuZGF0YSk7XG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHN0YXRlVmFsdWUuaXNMb2FkaW5nKTtcbiAgICAgICAgICAgICAgICBzZXRMYXN0VXBkYXRlZChzdGF0ZVZhbHVlLmxhc3RVcGRhdGVkKTtcbiAgICAgICAgICAgICAgICBzZXRJc1JlZmV0Y2hpbmcoc3RhdGVWYWx1ZS5pc1JlZmV0Y2hpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcGVyc2lzdCB1cGRhdGVkIHZhbHVlIHdpdGggbmV3IGxvYWRpbmcgc3RhdHVzXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbi5wZXJzaXN0RGF0YSkge1xuICAgICAgICAgICAgICAgIF9fMS5TdG9yZS5zZXQoZGVmaW5pdGlvbiwgc3RhdGVWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbi5pbmNsdWRlSW5TdGF0ZSkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGRlZmluaXRpb24udXBkYXRlU3RhdGUoc3RhdGVWYWx1ZSwgdHlwZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICBzdGF0ZVZhbHVlLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgc3RhdGVWYWx1ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChpc01vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihzdGF0ZVZhbHVlLmVycm9yKTtcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoc3RhdGVWYWx1ZS5pc0xvYWRpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb24uaW5jbHVkZUluU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChkZWZpbml0aW9uLnVwZGF0ZVN0YXRlKHN0YXRlVmFsdWUsIGAke2RlZmluaXRpb24udHlwZX1fRVJST1JgKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICBpc0xvYWRpbmcsXG4gICAgICAgICAgICBpc1JlZmV0Y2hpbmcsXG4gICAgICAgICAgICBsYXN0VXBkYXRlZCxcbiAgICAgICAgICAgIGNhbmNlbGVkLFxuICAgICAgICAgICAgaW5pdCxcbiAgICAgICAgICAgIHJlZmV0Y2g6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBnZXQob3B0aW9ucywgc3RhdGVSZWYsIGRpc3BhdGNoLCBjYWxsYmFjaywgdHJ1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgcmVmZXRjaCA9IGFzeW5jIChpbm5lcl9vcHRpb25zKSA9PiB7XG4gICAgICAgIGF3YWl0IGdldChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCA/IG9wdGlvbnMgOiBpbm5lcl9vcHRpb25zLCBzdGF0ZVJlZiwgZGlzcGF0Y2gsIGNhbGxiYWNrLCB0cnVlKTtcbiAgICB9O1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gKG9wdGlvbnMsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBnZXQob3B0aW9ucywgc3RhdGVSZWYsIGRpc3BhdGNoLCBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgIGRlcGVuZGVuY2llcyA9IE9iamVjdC52YWx1ZXMob3B0aW9ucy5wYXJhbXMpO1xuICAgIH1cbiAgICAoMCwgcmVhY3RfMS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICAgICAgZ2V0KG9wdGlvbnMsIHN0YXRlUmVmLCBkaXNwYXRjaCwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaXNNb3VudGVkID0gZmFsc2U7XG4gICAgICAgICAgICBjYW5jZWxlZCA9IHRydWU7XG4gICAgICAgICAgICBhYm9ydEN0cmwuYWJvcnQoKTtcbiAgICAgICAgfTtcbiAgICB9LCBkZXBlbmRlbmNpZXMpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdXNlR2V0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhObFIyVjBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaHZiMnR6TDNWelpVZGxkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMR2xEUVVGcFJUdEJRVU5xUlN4clJFRkJLME03UVVGREwwTXNkME5CUVd0RU8wRkJRMnhFTERSRFFVRTRRenRCUVVNNVF5d3dRa0ZCTWtJN1FVRkRNMElzYjBOQlMydENPMEZCUTJ4Q0xITkVRVUZ0UkR0QlFVVnVSRHM3T3pzN096czdPenRIUVZWSE8wRkJRMGdzVTBGQmQwSXNUVUZCVFN4RFFVTTFRaXhQUVVGNVFpeEZRVU42UWl4UlFVRXJRenRKUVVVdlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhIUVVGSExDdENRVUZqTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlRTeEZRVUZGTEVWQlFVVXNRMEZCUXp0UlFVTjZSU3hEUVVGRExFTkJRVU1zUzBGQlN6dFJRVU5RTEVOQlFVTXNRMEZCUXl4UlFVRlJPMHRCUTFnc1EwRkJReXhEUVVGRE8wbEJSVWdzVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4UFFVRlBMRU5CUVVNc1IwRkJSeXhKUVVGQkxHZENRVUZSTEVWQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRlRU1zVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4UFFVRlBMRU5CUVVNc1IwRkJSeXhKUVVGQkxHZENRVUZSTEVkQlFVVXNRMEZCUXp0SlFVTnVReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4SFFVRkhMRWxCUVVFc1owSkJRVkVzUjBGQlJTeERRVUZETzBsQlEzSkRMRTFCUVUwc1EwRkJReXhUUVVGVExFVkJRVVVzV1VGQldTeERRVUZETEVkQlFVY3NTVUZCUVN4blFrRkJVU3hIUVVGWExFTkJRVU03U1VGRGRFUXNUVUZCVFN4RFFVRkRMRmxCUVZrc1JVRkJSU3hsUVVGbExFTkJRVU1zUjBGQlJ5eEpRVUZCTEdkQ1FVRlJMRVZCUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGVFUXNUVUZCVFN4RFFVRkRMRmRCUVZjc1JVRkJSU3hqUVVGakxFTkJRVU1zUjBGQlJ5eEpRVUZCTEdkQ1FVRlJMRWRCUVVVc1EwRkJRenRKUVVOcVJDeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkJMR05CUVUwc1JVRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU12UWl4TlFVRk5MRk5CUVZNc1IwRkRZaXhQUVVGUExFbEJRVWtzWlVGQlpTeEZRVUZGTEV0QlFVc3NWMEZCVnp0UlFVTXhReXhEUVVGRExFTkJRVU03V1VGRFJTeE5RVUZOTEVWQlFVVXNTVUZCU1R0WlFVTmFMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGRFZpeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMREpEUVVFeVF5eERRVUZETzFOQlF6VkVPMUZCUTBnc1EwRkJReXhEUVVGRExFbEJRVWtzWlVGQlpTeEZRVUZGTEVOQlFVTTdTVUZETlVJc1NVRkJTU3haUVVGWkxFZEJRVWNzUlVGQlJTeERRVUZETzBsQlEzUkNMREpEUVVFeVF6dEpRVU16UXl4SlFVRkpMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU03U1VGRGNrSXNTVUZCU1N4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRE8wbEJSWEpDTEVsQlFVRXNhVUpCUVZNc1JVRkJReXhIUVVGSExFVkJRVVU3VVVGRFlpeFJRVUZSTEVOQlFVTXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVNelFpeERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJSVm9zVFVGQlRTeEhRVUZITEVkQlFVY3NTMEZCU3l4RlFVTm1MRTlCUVd0RExFVkJRMnhETEdGQlFXdENMRVZCUTJ4Q0xGRkJRVzlETEVWQlEzQkRMRmRCUVZjc1EwRkJReXhIUVVGUkxFVkJRVVVzUjBGQlV5eEZRVUZGTEVWQlFVVXNSMEZCUlN4RFFVRkRMRVZCUTNSRExGbEJRWEZDTEV0QlFVc3NSVUZETVVJc1JVRkJSVHRSUVVOR0xFMUJRVTBzUlVGQlJTeFZRVUZWTEVWQlFVVXNUVUZCVFN4RlFVRkZMRWxCUVVrc1JVRkJSU3hIUVVGSExFbEJRVUVzTUVKQlFXTXNSVUZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVVM1JDdzJRMEZCTmtNN1VVRkROME1zVFVGQlRTeFpRVUZaTEVkQlFXMUNMR0ZCUVdFc1EwRkJReXhQUVVGUExFTkJRVU03VVVGRk0wUXNlVU5CUVhsRE8xRkJRM3BETEVsQlFVa3NRMEZCUXl4SlFVRkJMR2RDUVVGUkxFVkJRVU1zVlVGQlZTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RlFVRkZPMWxCUTI1RExFOUJRVThzU1VGQlNTeERRVUZETzFOQlEySTdVVUZGUkN4M1FrRkJkMEk3VVVGRGVFSXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhqUVVGakxFVkJRVVU3V1VGRE9VSXNTMEZCU3l4SlFVRkpMRWRCUVVjc1NVRkJTU3hOUVVGTkxFVkJRVVU3WjBKQlEzUkNMRWxCUVVrc1QwRkJUeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NWMEZCVnl4SlFVRkpMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eEpRVUZKTEVWQlFVVTdiMEpCUXpsRUxFOUJRVThzU1VGQlNTeERRVUZETzJsQ1FVTmlPMkZCUTBZN1UwRkRSanRSUVVWRUxFMUJRVTBzVlVGQlZTeEhRVU5rTEZsQlFWa3NTVUZCU1N4WlFVRlpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF6dFpRVU14UXl4RFFVRkRMRU5CUVVNc1NVRkJRU3huUWtGQlVTeEZRVUZETEZsQlFWa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGVFTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRSUVVOVUxGVkJRVlVzUTBGQlF5eFBRVUZQTEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlJUVkRMRWxCUVVrN1dVRkRSanM3T3pzN096dG5Ra0ZQU1R0WlFVVktMRWxCUVVrc1UwRkJVeXhGUVVGRk8yZENRVU5pTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRGJrSXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVVZrTEVsQlFVa3NVMEZCVXl4RlFVRkZPMjlDUVVOaUxHVkJRV1VzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0cFFrRkRka0k3WVVGRFJqdFpRVVZFTEZWQlFWVXNRMEZCUXl4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRE8xbEJRelZDTEZWQlFWVXNRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRE8xbEJSWFpDTEVsQlFVa3NVMEZCVXl4RlFVRkZPMmRDUVVOaUxGVkJRVlVzUTBGQlF5eFpRVUZaTEVkQlFVY3NTVUZCU1N4RFFVRkRPMkZCUTJoRE8xbEJSVVFzTkVKQlFUUkNPMWxCUXpWQ0xFbEJRVWtzVlVGQlZTeERRVUZETEZkQlFWY3NSVUZCUlR0blFrRkRNVUlzVTBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4VlFVRlZMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03WVVGRGJrTTdXVUZGUkN4SlFVRkpMRlZCUVZVc1EwRkJReXhqUVVGakxFVkJRVVU3WjBKQlF6ZENMRkZCUVZFc1EwRkRUaXhWUVVGVkxFTkJRVU1zVjBGQlZ5eERRVUZETEZWQlFWVXNSVUZCUlN4SFFVRkhMRlZCUVZVc1EwRkJReXhKUVVGSkxHRkJRV0VzUTBGQlF5eERRVU53UlN4RFFVRkRPMkZCUTBnN1dVRkZSQ3hKUVVGSkxGVkJRVlVzUTBGQlF5eFhRVUZYTEVWQlFVVTdaMEpCUXpGQ0xFOUJRVThzU1VGQlNTeERRVUZETzJGQlEySTdXVUZGUkN4TlFVRk5MRTlCUVU4c1IwRkJSenRuUWtGRFpDeEpRVUZKTEVWQlFVVXNWVUZCVlN4RFFVRkRMRTFCUVUwN1owSkJRM1pDTEV0QlFVc3NSVUZCUlN4TlFVRk5PMmRDUVVOaUxFMUJRVTBzUlVGQlJTeFRRVUZUTEVOQlFVTXNUVUZCVFR0aFFVTjZRaXhEUVVGRE8xbEJSVVlzVFVGQlRTeEhRVUZITEVkQlFVY3NUVUZCVFN4SlFVRkJMR2xDUVVGUExFVkJRVU1zVDBGQlR5eEZRVUZGTEZWQlFWVXNSVUZCUlN4clFrRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlJTOUVMRWxCUVVrc1IwRkJSeXhGUVVGRk8yZENRVU5RTERCRlFVRXdSVHRuUWtGRE1VVXNWVUZCVlN4RFFVRkRMRWxCUVVrN2IwSkJRMklzVlVGQlZTeERRVUZETEdOQlFXTTdkMEpCUTNwQ0xFOUJRVThzVlVGQlZTeERRVUZETEdOQlFXTXNTMEZCU3l4VlFVRlZPM2RDUVVNM1F5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETzNkQ1FVTnlReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXp0blFrRkRaaXhWUVVGVkxFTkJRVU1zVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXp0blFrRkROMElzVlVGQlZTeERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRWxCUVVrc1JVRkJSU3hEUVVGRE8yZENRVU53UXl4VlFVRlZMRU5CUVVNc1dVRkJXU3hIUVVGSExFdEJRVXNzUTBGQlF6dGhRVU5xUXp0cFFrRkJUVHRuUWtGRFRDeFZRVUZWTEVOQlFVTXNVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJRenRoUVVNNVFqdFpRVVZFTEVsQlFVa3NVMEZCVXl4RlFVRkZPMmRDUVVOaUxFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRM3BDTEZsQlFWa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03WjBKQlEyNURMR05CUVdNc1EwRkJReXhWUVVGVkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdaMEpCUTNaRExHVkJRV1VzUTBGQlF5eFZRVUZWTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1lVRkRNVU03V1VGRlJDeG5SRUZCWjBRN1dVRkRhRVFzU1VGQlNTeFZRVUZWTEVOQlFVTXNWMEZCVnl4RlFVRkZPMmRDUVVNeFFpeFRRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dGhRVU51UXp0WlFVVkVMRWxCUVVrc1ZVRkJWU3hEUVVGRExHTkJRV01zUlVGQlJUdG5Ra0ZETjBJc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFhRVUZYTEVOQlFVTXNWVUZCVlN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGNFUTdXVUZGUkN4SlFVRkpMRkZCUVZFc1JVRkJSVHRuUWtGRFdpeFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRaanRUUVVOR08xRkJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVTdXVUZEV2l4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlJXNUNMRlZCUVZVc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGQlJ5eERRVUZETzFsQlEzWkNMRlZCUVZVc1EwRkJReXhUUVVGVExFZEJRVWNzUzBGQlN5eERRVUZETzFsQlJUZENMRWxCUVVrc1UwRkJVeXhGUVVGRk8yZENRVU5pTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03WjBKQlF6TkNMRmxCUVZrc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdZVUZEY0VNN1dVRkZSQ3hKUVVGSkxGVkJRVlVzUTBGQlF5eGpRVUZqTEVWQlFVVTdaMEpCUXpkQ0xGRkJRVkVzUTBGRFRpeFZRVUZWTEVOQlFVTXNWMEZCVnl4RFFVRkRMRlZCUVZVc1JVRkJSU3hIUVVGSExGVkJRVlVzUTBGQlF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4RFFVTXZSQ3hEUVVGRE8yRkJRMGc3V1VGRlJDeEpRVUZKTEZGQlFWRXNSVUZCUlR0blFrRkRXaXhSUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTNKQ08xTkJRMFk3VVVGRlJDeFBRVUZQTzFsQlEwd3NTVUZCU1R0WlFVTktMRXRCUVVzN1dVRkRUQ3hUUVVGVE8xbEJRMVFzV1VGQldUdFpRVU5hTEZkQlFWYzdXVUZEV0N4UlFVRlJPMWxCUTFJc1NVRkJTVHRaUVVOS0xFOUJRVThzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0blFrRkRiRUlzVFVGQlRTeEhRVUZITEVOQlFVTXNUMEZCVHl4RlFVRkZMRkZCUVZFc1JVRkJSU3hSUVVGUkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTNwRUxFTkJRVU03VTBGRFJpeERRVUZETzBsQlEwb3NRMEZCUXl4RFFVRkRPMGxCUlVZc1RVRkJUU3hQUVVGUExFZEJRVWNzUzBGQlN5eEZRVUZGTEdGQlFXMUNMRVZCUVVVc1JVRkJSVHRSUVVNMVF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4UFFVRlBMR0ZCUVZBc1QwRkJUeXhqUVVGUUxFOUJRVThzUjBGQlNTeGhRVUZoTEVWQlFVVXNVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSU3hSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETVVVc1EwRkJReXhEUVVGRE8wbEJSVVlzU1VGQlNTeFBRVUZQTEU5QlFVOHNTMEZCU3l4WFFVRlhMRWxCUVVrc1QwRkJUeXhMUVVGTExFbEJRVWtzUlVGQlJUdFJRVU4wUkN4UFFVRlBMRU5CUTB3c1QwRkJkMElzUlVGRGVFSXNVVUZCSzBNc1JVRkRMME1zUlVGQlJUdFpRVU5HTEVkQlFVY3NRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hGUVVGRkxGRkJRVkVzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTTNReXhEUVVGRExFTkJRVU03UzBGRFNEdEpRVVZFTEVsQlFVa3NUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVU3VVVGRE4wSXNXVUZCV1N4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMHRCUXpsRE8wbEJSVVFzU1VGQlFTeHBRa0ZCVXl4RlFVRkRMRWRCUVVjc1JVRkJSVHRSUVVOaUxFZEJRVWNzUTBGQlF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVVV6UXl4UFFVRlBMRWRCUVVjc1JVRkJSVHRaUVVOV0xGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTTdXVUZEYkVJc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF6dFpRVU5vUWl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03VVVGRGNFSXNRMEZCUXl4RFFVRkRPMGxCUTBvc1EwRkJReXhGUVVGRkxGbEJRVmtzUTBGQlF5eERRVUZETzBGQlEyNUNMRU5CUVVNN1FVRnFUa1FzZVVKQmFVNURJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgX2ludGVybmFsXzEgPSByZXF1aXJlKFwiLi4vX2ludGVybmFsXCIpO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgZ2V0SG9va09wdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi9faW50ZXJuYWwvZ2V0SG9va09wdGlvbnNcIik7XG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xuY29uc3QgU3RhdGVTaW5nbGV0b25fMSA9IHJlcXVpcmUoXCIuLi9TdGF0ZVNpbmdsZXRvblwiKTtcbi8qKlxuICogSG9vayB0aGF0IGV4cG9zZXMgcGF0Y2goKSBzYWZlbHkgYW5kIGZ1bmx5XG4gKlxuICogdXNlUGF0Y2goeyBkZWZpbml0aW9uOiBEZWZpbml0aW9uLCBib2R5OiB7IHZhbHVlOiAndmFsdWUnIH0gfSk7XG4gKlxuICogY29uc3QgcGF0Y2ggPSB1c2VQYXRjaCgpO1xuICogcGF0Y2goeyBkZWZpbml0aW9uOiBEZWZpbml0aW9uLCBib2R5OiB7IHZhbHVlOiAndmFsdWUnIH0gfSk7XG4gKi9cbmZ1bmN0aW9uIHVzZVBhdGNoKG9wdGlvbnMsIF9jYWxsYmFjayA9ICgpID0+IHsgfSkge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gU3RhdGVTaW5nbGV0b25fMS5TdGF0ZVNpbmdsZXRvbi5nZXRJbnN0YW5jZSgpLnp1c3RhbmQocyA9PiBzLmRpc3BhdGNoKTtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIGEgUEFUQ0ggYWdhaW5zdCB0aGUgQVBJLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFjaz1udWxsXVxuICAgICAqL1xuICAgIGNvbnN0IHBhdGNoID0gYXN5bmMgKG9wdGlvbnMsIGRpc3BhdGNoLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICBjb25zdCB7IGRlZmluaXRpb24sIHBhcmFtcywgYm9keSwgc2F2ZSB9ID0gKDAsIGdldEhvb2tPcHRpb25zXzEuZ2V0SG9va09wdGlvbnMpKG9wdGlvbnMpO1xuICAgICAgICBjb25zdCBwYXRjaFVSTCA9IGRlZmluaXRpb24ucGF0Y2hVUkw7XG4gICAgICAgIGlmIChwYXRjaFVSTCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiBwYXRjaFVSTCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHBhcmFtcyxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogYm9keSA/IE9iamVjdC5hc3NpZ24oe30sIGJvZHkpIDoge30sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0ICgwLCBfaW50ZXJuYWxfMS5yZXF1ZXN0KShwYXlsb2FkLCBkZWZpbml0aW9uLCB0eXBlc18xLkFQSV9NRVRIT0QuUEFUQ0gpO1xuICAgICAgICAgICAgICAgIC8vIERvbid0IGRvIGEgZGVlcCBjb21wYXJlIG9uIHRoZSByZXR1cm4gdmFsdWUgYWdhaW5zdCB0aGUgY3VycmVudCB2YWx1ZS5cbiAgICAgICAgICAgICAgICAvLyBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgbW9zdCBsaWtlbHkgYmUgZGlmZmVyZW50IHJlZ2FyZGxlc3MuIEFzc3VtZSB0aGF0XG4gICAgICAgICAgICAgICAgLy8gaWYgZGlzcGF0Y2ggd2FzIHByb3ZpZGVkLCB3ZSdyZSBzdXBwb3NlZCB0byB1c2UgaXQuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHNhdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZmluaXRpb24ucGVyc2lzdERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IF9fMS5TdG9yZS5zZXQoZGVmaW5pdGlvbiwgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goYXdhaXQgZGVmaW5pdGlvbi51cGRhdGVTdGF0ZShyZXNwb25zZS5kYXRhKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBvID0gKDAsIF9pbnRlcm5hbF8xLmluc3BlY3RDbGFzcykoZGVmaW5pdGlvbik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGUgJHtvLkNsYXNzTmFtZX0gb2JqZWN0IGlzIG1pc3NpbmcgdGhlIHBhdGNoVVJMIGF0dHJpYnV0ZS5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAob3B0aW9ucywgY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIHBhdGNoKG9wdGlvbnMsIGRpc3BhdGNoLCBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgfVxuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBwYXRjaChvcHRpb25zLCBkaXNwYXRjaCwgX2NhbGxiYWNrKTtcbiAgICB9LCBbXSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB1c2VQYXRjaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRYTmxVR0YwWTJndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YUc5dmEzTXZkWE5sVUdGMFkyZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeHBRMEZCYTBNN1FVRkRiRU1zTkVOQlFYRkVPMEZCUTNKRUxEQkNRVUYzUXp0QlFVTjRReXhuUlVGQk5rUTdRVUZETjBRc2IwTkJRWGxGTzBGQlEzcEZMSE5FUVVGdFJEdEJRVVZ1UkRzN096czdPenRIUVU5SE8wRkJRMGdzVTBGQmQwSXNVVUZCVVN4RFFVTTVRaXhQUVVFNFFpeEZRVU01UWl4WlFVRXJSQ3hIUVVGSExFVkJRVVVzUjBGQlJTeERRVUZETzBsQlJYWkZMRTFCUVUwc1VVRkJVU3hIUVVGSExDdENRVUZqTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wbEJSWFpGT3pzN096czdUMEZOUnp0SlFVTklMRTFCUVUwc1MwRkJTeXhIUVVGSExFdEJRVXNzUlVGRGFrSXNUMEZCV1N4RlFVTmFMRkZCUVdFc1JVRkRZaXhSUVVGNVFpeEZRVU42UWl4RlFVRkZPMUZCUTBZc1RVRkJUU3hGUVVGRkxGVkJRVlVzUlVGQlJTeE5RVUZOTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hIUVVGSExFbEJRVUVzSzBKQlFXTXNSVUZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVOdVJTeE5RVUZOTEZGQlFWRXNSMEZCUnl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRE8xRkJSWEpETEVsQlFVa3NVVUZCVVN4TFFVRkxMRWxCUVVrc1JVRkJSVHRaUVVOeVFpeEpRVUZKTzJkQ1FVTkdMRTFCUVUwc1QwRkJUeXhIUVVGSE8yOUNRVU5rTEVsQlFVa3NSVUZCUlN4UlFVRlJPMjlDUVVOa0xFdEJRVXNzUlVGQlJTeE5RVUZOTzI5Q1FVTmlMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMmxDUVVNeFF5eERRVUZETzJkQ1FVVkdMRTFCUVUwc1VVRkJVU3hIUVVGSExFMUJRVTBzU1VGQlFTeHRRa0ZCVHl4RlFVRkRMRTlCUVU4c1JVRkJSU3hWUVVGVkxFVkJRVVVzYTBKQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRuUWtGRmRFVXNlVVZCUVhsRk8yZENRVU42UlN4NVJVRkJlVVU3WjBKQlEzcEZMSE5FUVVGelJEdG5Ra0ZEZEVRc1NVRkJTU3hSUVVGUkxFbEJRVWtzU1VGQlNTeEZRVUZGTzI5Q1FVTndRaXhKUVVGSkxGVkJRVlVzUTBGQlF5eFhRVUZYTEVWQlFVVTdkMEpCUXpGQ0xFMUJRVTBzVTBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4VlFVRlZMRVZCUVVVc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzNGQ1FVTTFRenR2UWtGRlJDeE5RVUZOTEZGQlFWRXNRMEZCUXl4TlFVRk5MRlZCUVZVc1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJRemRFTzJkQ1FVVkVMRWxCUVVrc1VVRkJVU3hKUVVGSkxGRkJRVkVzUlVGQlJUdHZRa0ZEZUVJc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJsQ1FVTndRanRoUVVOR08xbEJRVU1zVDBGQlR5eExRVUZMTEVWQlFVVTdaMEpCUTJRc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0blFrRkZja0lzU1VGQlNTeFJRVUZSTEVWQlFVVTdiMEpCUTFvc1VVRkJVU3hEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0cFFrRkRka0k3WVVGRFJqdFRRVU5HTzJGQlFVMDdXVUZEVEN4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGQkxIZENRVUZaTEVWQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1dVRkRia01zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZEV0N4UFFVRlBMRU5CUVVNc1EwRkJReXhUUVVGVExEUkRRVUUwUXl4RFFVTXZSQ3hEUVVGRE8xTkJRMGc3VVVGRlJDeFBRVUZQTzBsQlExUXNRMEZCUXl4RFFVRkRPMGxCUlVZc1NVRkJTU3hQUVVGUExFOUJRVThzUzBGQlN5eFhRVUZYTEVWQlFVVTdVVUZEYkVNc1QwRkJUeXhEUVVOTUxFOUJRWGxETEVWQlEzcERMRkZCUVRKRUxFVkJRek5FTEVWQlFVVTdXVUZEUml4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxGRkJRVkVzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTnlReXhEUVVGRExFTkJRVU03UzBGRFNEdEpRVVZFTEVsQlFVRXNhVUpCUVZNc1JVRkJReXhIUVVGSExFVkJRVVU3VVVGRFlpeExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRkZCUVZFc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF6dEpRVU4wUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRFZDeERRVUZETzBGQk1VVkVMREpDUVRCRlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBfaW50ZXJuYWxfMSA9IHJlcXVpcmUoXCIuLi9faW50ZXJuYWxcIik7XG5jb25zdCBnZXRIb29rT3B0aW9uc18xID0gcmVxdWlyZShcIi4uL19pbnRlcm5hbC9nZXRIb29rT3B0aW9uc1wiKTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5jb25zdCBTdGF0ZVNpbmdsZXRvbl8xID0gcmVxdWlyZShcIi4uL1N0YXRlU2luZ2xldG9uXCIpO1xuLyoqXG4gKiBFeHBvc2VkIEhvb2sgdGhhdCBhbGxvd3MgdXNlciB0byBhY2Nlc3MgcG9zdCBtZXRob2RcbiAqIElmIG5vIGRlZmluaXRpb24gZ2l2ZW4sIHJldHVybnMgZnVuY3Rpb24gdG8gdXNlIHBvc3QgdG8gYWxsb3cgY29uZGl0aW9uYWwgb3BlcmF0aW9uLlxuICpcbiAqIFRoZSBob29rcyBpbmZlcnMgdGhlIHR5cGVzIGJ5IHVzaW5nIGl0cyBwYXJhbWV0ZXJzLCBidXQgdG8gZ2l2ZSBtb3JlIGZsZXhpYmlsaXR5XG4gKiBib3RoIHRoZSBob29rIGFuZCB0aGUgZXhwb3NlZCBmdW5jdGlvbiBjYW4gYmUgbWFudWFsbHkgdHlwZWQuIFRoZSBvcmRlciBvZiB0aGVcbiAqIHR5cGUgaXMgYXMgZm9sbG93czogcG9zdDxSZXNwb25zZVR5cGUsIFJlcXVlc3RUeXBlLCBEZWZpbml0aW9uVHlwZT4uIFRoZSBEZWZpbml0aW9uVHlwZVxuICogaXMgc29tZXdoYXQgcmVkdW5kYW50IGJ1dCBjdXJyZW50IHZlcnNpb25zIG9mIHR5cGVzY3JpcHQgZG9lc24ndCBhbGxvdyBkZWZhdWx0c1xuICogb24gZ2VuZXJpYyB0eXBlcyB5ZXQuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBbiBvYmplY3QgY29udGFpbmluZyBhbiBpbnN0YW5jZSBvZiB0aGUgZGVmaW5pdGlvbiB3aG9zZSBzdGF0ZSBuZWVkcyB0byBiZSBwb3B1bGF0ZWQsIGFuIG9wdGlvbmFsIHBhcmFtcyBvYmplY3QgaWYgYW4gQVBJIGNhbGwgbmVlZHMgdG8gYmUgbWFkZSwgYW5kIGFuIG9wdGlvbmFsIHR5cGUgaWYgdGhlIGRlZmluaXRpb24gaGFzIG11bHRpcGxlIHR5cGVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrPW51bGxdIE9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGFmdGVyIHVzZVBvc3QgaGFzIGV4ZWN1dGVkIGl0cyBsb2dpYy5cbiAqIEBleGFtcGxlXG4gKlxuICogdXNlUG9zdCh7IGRlZmluaXRpb246IERlZmluaXRpb24sIGJvZHk6IHsgdmFsdWU6ICd2YWx1ZScgfSB9KTtcbiAqXG4gKiBjb25zdCBwb3N0ID0gdXNlUG9zdCgpO1xuICogcG9zdCh7IGRlZmluaXRpb246IERlZmluaXRpb24sIGJvZHk6IHsgdmFsdWU6ICd2YWx1ZScgfSB9KTtcbiAqL1xuZnVuY3Rpb24gdXNlUG9zdChvcHRpb25zLCBjYWxsYmFjayA9ICgpID0+IHsgfSkge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gU3RhdGVTaW5nbGV0b25fMS5TdGF0ZVNpbmdsZXRvbi5nZXRJbnN0YW5jZSgpLnp1c3RhbmQocyA9PiBzLmRpc3BhdGNoKTtcbiAgICBjb25zdCBtb3VudGVkUmVmID0gKDAsIHJlYWN0XzEudXNlUmVmKSh0cnVlKTtcbiAgICBjb25zdCBwb3N0ID0gKDAsIHJlYWN0XzEudXNlQ2FsbGJhY2spKGFzeW5jIChvcHRpb25zLCBkaXNwYXRjaCwgY2FsbGJhY2spID0+IHtcbiAgICAgICAgY29uc3QgeyBkZWZpbml0aW9uLCBwYXJhbXMsIGJvZHksIHNhdmUgfSA9ICgwLCBnZXRIb29rT3B0aW9uc18xLmdldEhvb2tPcHRpb25zKShvcHRpb25zKTtcbiAgICAgICAgY29uc3QgcG9zdFVSTCA9IGRlZmluaXRpb24ucG9zdFVSTDtcbiAgICAgICAgY29uc3QgcGVyc2lzdERhdGEgPSBkZWZpbml0aW9uLnBlcnNpc3REYXRhO1xuICAgICAgICBpZiAocG9zdFVSTCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiBwb3N0VVJMLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBib2R5XG4gICAgICAgICAgICAgICAgICAgICAgICA/IEFycmF5LmlzQXJyYXkoYm9keSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IE9iamVjdC5hc3NpZ24oW10sIGJvZHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBPYmplY3QuYXNzaWduKHt9LCBib2R5KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgKDAsIF9pbnRlcm5hbF8xLnJlcXVlc3QpKHBheWxvYWQsIGRlZmluaXRpb24sIHR5cGVzXzEuQVBJX01FVEhPRC5QT1NUKTtcbiAgICAgICAgICAgICAgICBpZiAoIW1vdW50ZWRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHNhdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlcnNpc3REYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfXzEuU3RvcmUuc2V0KGRlZmluaXRpb24sIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGRlZmluaXRpb24udXBkYXRlU3RhdGUocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbyA9ICgwLCBfaW50ZXJuYWxfMS5pbnNwZWN0Q2xhc3MpKGRlZmluaXRpb24pO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhlICR7by5DbGFzc05hbWV9IG9iamVjdCBpcyBtaXNzaW5nIHRoZSBwb3N0VVJMIGF0dHJpYnV0ZS5gKTtcbiAgICAgICAgfVxuICAgIH0sIFttb3VudGVkUmVmXSk7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gKG9wdGlvbnMsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBwb3N0KG9wdGlvbnMsIGRpc3BhdGNoLCBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIHBhcmFtcy5wdXNoKHBvc3QpO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBwb3N0KG9wdGlvbnMsIGRpc3BhdGNoLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTsgLy8gY2xlYW4gdXBcbiAgICAgICAgfTtcbiAgICAgICAgLy8gfSwgW3BhcmFtc10pO1xuICAgIH0sIFtdKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHVzZVBvc3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkWE5sVUc5emRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5b2IyOXJjeTkxYzJWUWIzTjBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNhVU5CUVhWRU8wRkJRM1pFTERSRFFVRnhSRHRCUVVOeVJDeG5SVUZCTmtRN1FVRkROMFFzTUVKQlFUSkNPMEZCUXpOQ0xHOURRVXRyUWp0QlFVTnNRaXh6UkVGQmJVUTdRVUZGYmtRN096czdPenM3T3pzN096czdPenM3T3pzN1IwRnRRa2M3UVVGRFNDeFRRVUYzUWl4UFFVRlBMRU5CUXpkQ0xFOUJRU3RDTEVWQlF5OUNMRmRCUVRoRUxFZEJRVWNzUlVGQlJTeEhRVUZGTEVOQlFVTTdTVUZGZEVVc1RVRkJUU3hSUVVGUkxFZEJRVWNzSzBKQlFXTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRGRrVXNUVUZCVFN4VlFVRlZMRWRCUVVjc1NVRkJRU3hqUVVGTkxFVkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZGYUVNc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlFTeHRRa0ZCVnl4RlFVTjBRaXhMUVVGTExFVkJRMGdzVDBGQmQwTXNSVUZEZUVNc1VVRkJiME1zUlVGRGNFTXNVVUZCTWtRc1JVRkRNMFFzUlVGQlJUdFJRVU5HTEUxQlFVMHNSVUZCUlN4VlFVRlZMRVZCUVVVc1RVRkJUU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNSMEZCUnl4SlFVRkJMQ3RDUVVGakxFVkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZEYmtVc1RVRkJUU3hQUVVGUExFZEJRVWNzVlVGQlZTeERRVUZETEU5QlFVOHNRMEZCUXp0UlFVTnVReXhOUVVGTkxGZEJRVmNzUjBGQlJ5eFZRVUZWTEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUlRORExFbEJRVWtzVDBGQlR5eExRVUZMTEVsQlFVa3NSVUZCUlR0WlFVTndRaXhKUVVGSk8yZENRVU5HTEUxQlFVMHNUMEZCVHl4SFFVRkhPMjlDUVVOa0xFbEJRVWtzUlVGQlJTeFBRVUZQTzI5Q1FVTmlMRXRCUVVzc1JVRkJSU3hOUVVGTk8yOUNRVU5pTEVsQlFVa3NSVUZCUlN4SlFVRkpPM2RDUVVOU0xFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJRenMwUWtGRGJrSXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXpzMFFrRkRla0lzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF6dDNRa0ZETTBJc1EwRkJReXhEUVVGRExFVkJRVVU3YVVKQlExQXNRMEZCUXp0blFrRkZSaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eE5RVUZOTEVsQlFVRXNiVUpCUVU4c1JVRkJReXhQUVVGUExFVkJRVVVzVlVGQlZTeEZRVUZGTEd0Q1FVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlJYSkZMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eEZRVUZGTzI5Q1FVTjJRaXhQUVVGUExFbEJRVWtzUTBGQlF6dHBRa0ZEWWp0blFrRkZSQ3hKUVVGSkxGRkJRVkVzU1VGQlNTeEpRVUZKTEVWQlFVVTdiMEpCUTNCQ0xFbEJRVWtzVjBGQlZ5eEZRVUZGTzNkQ1FVTm1MRk5CUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zVlVGQlZTeEZRVUZGTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenR4UWtGRGRFTTdiMEpCUlVRc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03YVVKQlEycEVPMmRDUVVWRUxFbEJRVWtzVVVGQlVTeEpRVUZKTEZGQlFWRXNSVUZCUlR0dlFrRkRlRUlzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMmxDUVVOd1FqdGhRVU5HTzFsQlFVTXNUMEZCVHl4TFFVRkxMRVZCUVVVN1owSkJRMlFzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRuUWtGRmNrSXNTVUZCU1N4UlFVRlJMRVZCUVVVN2IwSkJRMW9zVVVGQlVTeERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRwUWtGRGRrSTdZVUZEUmp0VFFVTkdPMkZCUVUwN1dVRkRUQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZCTEhkQ1FVRlpMRVZCUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03V1VGRGJrTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkRXQ3hQUVVGUExFTkJRVU1zUTBGQlF5eFRRVUZUTERKRFFVRXlReXhEUVVNNVJDeERRVUZETzFOQlEwZzdTVUZEU0N4RFFVRkRMRVZCUTBRc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGRFlpeERRVUZETzBsQlJVWXNTVUZCU1N4UFFVRlBMRTlCUVU4c1MwRkJTeXhYUVVGWExFVkJRVVU3VVVGRGJFTXNUMEZCVHl4RFFVTk1MRTlCUVRSQ0xFVkJRelZDTEZGQlFUSkVMRVZCUXpORUxFVkJRVVU3V1VGRFJpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRkZCUVZFc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU53UXl4RFFVRkRMRU5CUVVNN1MwRkRTRHRKUVVWRUxIRkNRVUZ4UWp0SlFVVnlRaXhKUVVGQkxHbENRVUZUTEVWQlFVTXNSMEZCUnl4RlFVRkZPMUZCUTJJc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkZiRU1zVDBGQlR5eEhRVUZITEVWQlFVVTdXVUZEVml4VlFVRlZMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETEZkQlFWYzdVVUZEZWtNc1EwRkJReXhEUVVGRE8xRkJRMFlzWjBKQlFXZENPMGxCUTJ4Q0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0QlFVTlVMRU5CUVVNN1FVRnNSa1FzTUVKQmEwWkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgX2ludGVybmFsXzEgPSByZXF1aXJlKFwiLi4vX2ludGVybmFsXCIpO1xuY29uc3QgZ2V0SG9va09wdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi9faW50ZXJuYWwvZ2V0SG9va09wdGlvbnNcIik7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xuY29uc3QgU3RhdGVTaW5nbGV0b25fMSA9IHJlcXVpcmUoXCIuLi9TdGF0ZVNpbmdsZXRvblwiKTtcbi8qKlxuICogdXNlUHV0XG4gKlxuICogSG9vayB0aGF0IGV4cG9zZXMgcHV0KClcbiAqXG4gKiBUaGUgaG9va3MgaW5mZXJzIHRoZSB0eXBlcyBieSB1c2luZyBpdHMgcGFyYW1ldGVycywgYnV0IHRvIGdpdmUgbW9yZSBmbGV4aWJpbGl0eVxuICogYm90aCB0aGUgaG9vayBhbmQgdGhlIGV4cG9zZWQgZnVuY3Rpb24gY2FuIGJlIG1hbnVhbGx5IHR5cGVkLiBUaGUgb3JkZXIgb2YgdGhlXG4gKiB0eXBlIGlzIGFzIGZvbGxvd3M6IHB1dDxSZXNwb25zZVR5cGUsIFJlcXVlc3RUeXBlLCBEZWZpbml0aW9uVHlwZT4uIFRoZSBEZWZpbml0aW9uVHlwZVxuICogaXMgc29tZXdoYXQgcmVkdW5kYW50IGJ1dCBjdXJyZW50IHZlcnNpb25zIG9mIHR5cGVzY3JpcHQgZG9lc24ndCBhbGxvdyBkZWZhdWx0c1xuICogb24gZ2VuZXJpYyB0eXBlcyB5ZXQuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBbiBvYmplY3QgY29udGFpbmluZyBhbiBpbnN0YW5jZSBvZiB0aGUgZGVmaW5pdGlvbiB3aG9zZSBzdGF0ZSBuZWVkcyB0byBiZSBwb3B1bGF0ZWQsIGFuIG9wdGlvbmFsIHBhcmFtcyBvYmplY3QgaWYgYW4gQVBJIGNhbGwgbmVlZHMgdG8gYmUgbWFkZSwgYW5kIGFuIG9wdGlvbmFsIHR5cGUgaWYgdGhlIGRlZmluaXRpb24gaGFzIG11bHRpcGxlIHR5cGVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrPW51bGxdIE9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGFmdGVyIHVzZVB1dCBoYXMgZXhlY3V0ZWQgaXRzIGxvZ2ljLlxuICogQGV4YW1wbGVcbiAqXG4gKiB1c2VQdXQoeyBkZWZpbml0aW9uOiBEZWZpbml0aW9uLCBib2R5OiB7IHZhbHVlOiAndmFsdWUnIH0gfSk7XG4gKlxuICogY29uc3QgcHV0ID0gdXNlUHV0KCk7XG4gKiBwdXQoeyBkZWZpbml0aW9uOiBEZWZpbml0aW9uLCBib2R5OiB7IHZhbHVlOiAndmFsdWUnIH0gfSlcbiAqL1xuZnVuY3Rpb24gdXNlUHV0KG9wdGlvbnMsIGNhbGxiYWNrID0gKCkgPT4geyB9KSB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSBTdGF0ZVNpbmdsZXRvbl8xLlN0YXRlU2luZ2xldG9uLmdldEluc3RhbmNlKCkuenVzdGFuZCgocykgPT4gcy5kaXNwYXRjaCk7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCBleGVjdXRlcyBhIFBVVCBhZ2FpbnN0IHRoZSBBUEkuXG4gICAgICpcbiAgICAgKi9cbiAgICBjb25zdCBwdXQgPSBhc3luYyAob3B0aW9ucywgZGlzcGF0Y2gsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZGVmaW5pdGlvbiwgcGFyYW1zLCBib2R5LCBzYXZlIH0gPSAoMCwgZ2V0SG9va09wdGlvbnNfMS5nZXRIb29rT3B0aW9ucykob3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHB1dFVSTCA9IGRlZmluaXRpb24ucHV0VVJMO1xuICAgICAgICBpZiAocHV0VVJMICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IHB1dFVSTCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHBhcmFtcyxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogYm9keSA/IE9iamVjdC5hc3NpZ24oe30sIGJvZHkpIDoge30sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0ICgwLCBfaW50ZXJuYWxfMS5yZXF1ZXN0KShwYXlsb2FkLCBkZWZpbml0aW9uLCB0eXBlc18xLkFQSV9NRVRIT0QuUFVUKTtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBkbyBhIGRlZXAgY29tcGFyZSBvbiB0aGUgcmV0dXJuIHZhbHVlIGFnYWluc3QgdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAgICAgICAgICAgICAgLy8gVGhlIHJldHVybiB2YWx1ZSB3aWxsIG1vc3QgbGlrZWx5IGJlIGRpZmZlcmVudCByZWdhcmRsZXNzLiBBc3N1bWUgdGhhdFxuICAgICAgICAgICAgICAgIC8vIGlmIGRpc3BhdGNoIHdhcyBwcm92aWRlZCwgd2UncmUgc3VwcG9zZWQgdG8gdXNlIGl0LlxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiBzYXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWZpbml0aW9uLnBlcnNpc3REYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBfXzEuU3RvcmUuc2V0KGRlZmluaXRpb24sIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKGF3YWl0IGRlZmluaXRpb24udXBkYXRlU3RhdGUocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbyA9ICgwLCBfaW50ZXJuYWxfMS5pbnNwZWN0Q2xhc3MpKGRlZmluaXRpb24pO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhlICR7by5DbGFzc05hbWV9IG9iamVjdCBpcyBtaXNzaW5nIHRoZSBwdXRVUkwgYXR0cmlidXRlLmApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAob3B0aW9ucyA9IHVuZGVmaW5lZCwgY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIHB1dChvcHRpb25zLCBkaXNwYXRjaCwgY2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAoMCwgcmVhY3RfMS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICAgICAgcHV0KG9wdGlvbnMsIGRpc3BhdGNoLCBjYWxsYmFjayk7XG4gICAgfSwgW10pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdXNlUHV0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhObFVIVjBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaHZiMnR6TDNWelpWQjFkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMR2xEUVVGclF6dEJRVU5zUXl3MFEwRkJjVVE3UVVGRGNrUXNaMFZCUVRaRU8wRkJRemRFTERCQ1FVRXlRanRCUVVNelFpeHZRMEZMYTBJN1FVRkRiRUlzYzBSQlFXMUVPMEZCUlc1RU96czdPenM3T3pzN096czdPenM3T3pzN096dEhRVzlDUnp0QlFVTklMRk5CUVhkQ0xFMUJRVTBzUTBGRE5VSXNUMEZCTkVJc1JVRkROVUlzVjBGQk9FUXNSMEZCUnl4RlFVRkZMRWRCUVVVc1EwRkJRenRKUVVWMFJTeE5RVUZOTEZGQlFWRXNSMEZCUnl3clFrRkJZeXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMGxCUlhwRk96czdUMEZIUnp0SlFVTklMRTFCUVUwc1IwRkJSeXhIUVVGSExFdEJRVXNzUlVGRFppeFBRVUYxUXl4RlFVTjJReXhSUVVGdlF5eEZRVU53UXl4UlFVRXlSQ3hGUVVNelJDeEZRVUZGTzFGQlEwWXNUVUZCVFN4RlFVRkZMRlZCUVZVc1JVRkJSU3hOUVVGTkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SFFVRkhMRWxCUVVFc0swSkJRV01zUlVGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVVnVSU3hOUVVGTkxFMUJRVTBzUjBGQlJ5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUldwRExFbEJRVWtzVFVGQlRTeExRVUZMTEVsQlFVa3NSVUZCUlR0WlFVTnVRaXhKUVVGSk8yZENRVU5HTEUxQlFVMHNUMEZCVHl4SFFVRkhPMjlDUVVOa0xFbEJRVWtzUlVGQlJTeE5RVUZOTzI5Q1FVTmFMRXRCUVVzc1JVRkJSU3hOUVVGTk8yOUNRVU5pTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTzJsQ1FVTXhReXhEUVVGRE8yZENRVVZHTEUxQlFVMHNVVUZCVVN4SFFVRkhMRTFCUVUwc1NVRkJRU3h0UWtGQlR5eEZRVUZETEU5QlFVOHNSVUZCUlN4VlFVRlZMRVZCUVVVc2EwSkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkZjRVVzZVVWQlFYbEZPMmRDUVVONlJTeDVSVUZCZVVVN1owSkJRM3BGTEhORVFVRnpSRHRuUWtGRGRFUXNTVUZCU1N4UlFVRlJMRWxCUVVrc1NVRkJTU3hGUVVGRk8yOUNRVU53UWl4SlFVRkpMRlZCUVZVc1EwRkJReXhYUVVGWExFVkJRVVU3ZDBKQlF6RkNMRTFCUVUwc1UwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eFZRVUZWTEVWQlFVVXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8zRkNRVU0xUXp0dlFrRkZSQ3hOUVVGTkxGRkJRVkVzUTBGQlF5eE5RVUZOTEZWQlFWVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdhVUpCUXpkRU8yZENRVVZFTEVsQlFVa3NVVUZCVVN4SlFVRkpMRkZCUVZFc1JVRkJSVHR2UWtGRGVFSXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8ybENRVU53UWp0aFFVTkdPMWxCUVVNc1QwRkJUeXhMUVVGTExFVkJRVVU3WjBKQlEyUXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dG5Ra0ZGY2tJc1NVRkJTU3hSUVVGUkxFVkJRVVU3YjBKQlExb3NVVUZCVVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dHBRa0ZEZGtJN1lVRkRSanRUUVVOR08yRkJRVTA3V1VGRFRDeE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkJMSGRDUVVGWkxFVkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdXVUZEYmtNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGRFdDeFBRVUZQTEVOQlFVTXNRMEZCUXl4VFFVRlRMREJEUVVFd1F5eERRVU0zUkN4RFFVRkRPMU5CUTBnN1NVRkRTQ3hEUVVGRExFTkJRVU03U1VGRlJpeEpRVUZKTEU5QlFVOHNUMEZCVHl4TFFVRkxMRmRCUVZjc1JVRkJSVHRSUVVOc1F5eFBRVUZQTEVOQlEwd3NWVUZCT0VJc1UwRkJVeXhGUVVOMlF5eFJRVUV5UkN4RlFVTXpSQ3hGUVVGRk8xbEJRMFlzUjBGQlJ5eERRVUZETEU5QlFVOHNSVUZCUlN4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGRGJrTXNRMEZCUXl4RFFVRkRPMHRCUTBnN1NVRkZSQ3hKUVVGQkxHbENRVUZUTEVWQlFVTXNSMEZCUnl4RlFVRkZPMUZCUTJJc1IwRkJSeXhEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1NVRkRia01zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMEZCUTFRc1EwRkJRenRCUVhSRlJDeDVRa0Z6UlVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBfaW50ZXJuYWxfMSA9IHJlcXVpcmUoXCIuLi9faW50ZXJuYWxcIik7XG5jb25zdCBnZXRIb29rT3B0aW9uc18xID0gcmVxdWlyZShcIi4uL19pbnRlcm5hbC9nZXRIb29rT3B0aW9uc1wiKTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5jb25zdCBTdGF0ZVNpbmdsZXRvbl8xID0gcmVxdWlyZShcIi4uL1N0YXRlU2luZ2xldG9uXCIpO1xuLyoqXG4gKiBIb29rIHRoYXQgZXhwb3NlcyBkZWwoKVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogdXNlRGVsZXRlKHsgZGVmaW5pdGlvbjogRGVmaW5pdGlvbiwgYm9keTogeyB2YWx1ZTogJ3ZhbHVlJyB9IH0pO1xuICpcbiAqIGNvbnN0IGRlbCA9IHVzZURlbGV0ZSgpO1xuICogZGVsKHsgZGVmaW5pdGlvbjogRGVmaW5pdGlvbiwgYm9keTogeyB2YWx1ZTogJ3ZhbHVlJyB9IH0pO1xuICovXG5mdW5jdGlvbiB1c2VEZWxldGUob3B0aW9ucywgY2FsbGJhY2sgPSAoKSA9PiB7IH0pIHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IFN0YXRlU2luZ2xldG9uXzEuU3RhdGVTaW5nbGV0b24uZ2V0SW5zdGFuY2UoKS56dXN0YW5kKChzKSA9PiBzLmRpc3BhdGNoKTtcbiAgICAvLyBOT1QgQ09OVkVSVEVEXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCBleGVjdXRlcyBhIERFTEVURSBhZ2FpbnN0IHRoZSBBUEkuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBjb25zdCBkZWwgPSBhc3luYyAob3B0aW9ucywgZGlzcGF0Y2gsIGNhbGxiYWNrID0gbnVsbCkgPT4ge1xuICAgICAgICBjb25zdCB7IGRlZmluaXRpb24sIGJvZHksIHNhdmUgfSA9ICgwLCBnZXRIb29rT3B0aW9uc18xLmdldEhvb2tPcHRpb25zKShvcHRpb25zKTtcbiAgICAgICAgY29uc3QgZGVsZXRlVVJMID0gZGVmaW5pdGlvbi5kZWxldGVVUkw7XG4gICAgICAgIGNvbnN0IHBlcnNpc3REYXRhID0gZGVmaW5pdGlvbi5wZXJzaXN0RGF0YTtcbiAgICAgICAgaWYgKGRlbGV0ZVVSTCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiBkZWxldGVVUkwsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGJvZHkgPyBPYmplY3QuYXNzaWduKHt9LCBib2R5KSA6IHt9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCAoMCwgX2ludGVybmFsXzEucmVxdWVzdCkocGF5bG9hZCwgZGVmaW5pdGlvbiwgdHlwZXNfMS5BUElfTUVUSE9ELkRFTEVURSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHNhdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlcnNpc3REYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBfXzEuU3RvcmUuc2V0KGRlZmluaXRpb24sIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKGF3YWl0IGRlZmluaXRpb24udXBkYXRlU3RhdGUocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvID0gKDAsIF9pbnRlcm5hbF8xLmluc3BlY3RDbGFzcykoZGVmaW5pdGlvbik7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSAke28uQ2xhc3NOYW1lfSBvYmplY3QgaXMgbWlzc2luZyB0aGUgZGVsZXRlVVJMIGF0dHJpYnV0ZS5gKTtcbiAgICB9O1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIChvcHRpb25zLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgZGVsKG9wdGlvbnMsIGRpc3BhdGNoLCBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgfVxuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBkZWwob3B0aW9ucywgZGlzcGF0Y2gsIGNhbGxiYWNrKTtcbiAgICB9LCBbXSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB1c2VEZWxldGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkWE5sUkdWc1pYUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaHZiMnR6TDNWelpVUmxiR1YwWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEdsRFFVRnJRenRCUVVOc1F5dzBRMEZCY1VRN1FVRkZja1FzWjBWQlFUWkVPMEZCUXpkRUxEQkNRVUV5UWp0QlFVTXpRaXh2UTBGQk1FVTdRVUZETVVVc2MwUkJRVzFFTzBGQlJXNUVPenM3T3pzN096czdSMEZUUnp0QlFVTklMRk5CUVhkQ0xGTkJRVk1zUTBGREwwSXNUMEZCZDBNc1JVRkRlRU1zVjBGQk9FUXNSMEZCUnl4RlFVRkZMRWRCUVVVc1EwRkJRenRKUVVWMFJTeE5RVUZOTEZGQlFWRXNSMEZCUnl3clFrRkJZeXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVUwc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMGxCUlRsRkxHZENRVUZuUWp0SlFVTm9RanM3T3pzN096dFBRVTlITzBsQlEwZ3NUVUZCVFN4SFFVRkhMRWRCUVVjc1MwRkJTeXhGUVVObUxFOUJRVmtzUlVGRFdpeFJRVUZoTEVWQlEySXNWMEZCTkVJc1NVRkJTU3hGUVVOb1F5eEZRVUZGTzFGQlEwWXNUVUZCVFN4RlFVRkZMRlZCUVZVc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVkQlFVY3NTVUZCUVN3clFrRkJZeXhGUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlF6TkVMRTFCUVUwc1UwRkJVeXhIUVVGSExGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZEZGtNc1RVRkJUU3hYUVVGWExFZEJRVWNzVlVGQlZTeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVVXpReXhKUVVGSkxGTkJRVk1zUzBGQlN5eEpRVUZKTEVWQlFVVTdXVUZEZEVJc1NVRkJTVHRuUWtGRFJpeE5RVUZOTEU5QlFVOHNSMEZCUnp0dlFrRkRaQ3hKUVVGSkxFVkJRVVVzVTBGQlV6dHZRa0ZEWml4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0cFFrRkRNVU1zUTBGQlF6dG5Ra0ZGUml4TlFVRk5MRkZCUVZFc1IwRkJSeXhOUVVGTkxFbEJRVUVzYlVKQlFVOHNSVUZCUXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hGUVVGRkxHdENRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1owSkJSWFpGTEVsQlFVa3NVVUZCVVN4SlFVRkpMRWxCUVVrc1JVRkJSVHR2UWtGRGNFSXNTVUZCU1N4WFFVRlhMRVZCUVVVN2QwSkJRMllzVFVGQlRTeFRRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1JVRkJSU3hSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdjVUpCUXpWRE8yOUNRVVZFTEUxQlFVMHNVVUZCVVN4RFFVRkRMRTFCUVUwc1ZVRkJWU3hEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRwUWtGRE4wUTdaMEpCUlVRc1NVRkJTU3hSUVVGUkxFbEJRVWtzVVVGQlVTeEZRVUZGTzI5Q1FVTjRRaXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdhVUpCUTNCQ08yZENRVVZFTEU5QlFVODdZVUZEVWp0WlFVRkRMRTlCUVU4c1MwRkJTeXhGUVVGRk8yZENRVU5rTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03WjBKQlJYSkNMRWxCUVVrc1VVRkJVU3hGUVVGRk8yOUNRVU5hTEZGQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03YVVKQlEzWkNPMkZCUTBZN1UwRkRSanRSUVVWRUxFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVRXNkMEpCUVZrc1JVRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU51UXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVOWUxFOUJRVThzUTBGQlF5eERRVUZETEZOQlFWTXNOa05CUVRaRExFTkJRMmhGTEVOQlFVTTdTVUZEU2l4RFFVRkRMRU5CUVVNN1NVRkZSaXhKUVVGSkxFOUJRVThzVDBGQlR5eExRVUZMTEZkQlFWY3NSVUZCUlR0UlFVTnNReXhQUVVGUExFTkJRMHdzVDBGQk1FTXNSVUZETVVNc1VVRkJNa1FzUlVGRE0wUXNSVUZCUlR0WlFVTkdMRWRCUVVjc1EwRkJReXhQUVVGUExFVkJRVVVzVVVGQlVTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUTI1RExFTkJRVU1zUTBGQlF6dExRVU5JTzBsQlJVUXNTVUZCUVN4cFFrRkJVeXhGUVVGRExFZEJRVWNzUlVGQlJUdFJRVU5pTEVkQlFVY3NRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzBsQlEyNURMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEJRVU5VTEVOQlFVTTdRVUY2UlVRc05FSkJlVVZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IFJMZWFuXzEgPSByZXF1aXJlKFwiLi4vUkxlYW5cIik7XG5jb25zdCBTdGF0ZVNpbmdsZXRvbl8xID0gcmVxdWlyZShcIi4uL1N0YXRlU2luZ2xldG9uXCIpO1xuY29uc3QgZ2V0SG9va09wdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi9faW50ZXJuYWwvZ2V0SG9va09wdGlvbnNcIik7XG4vKipcbiAqIE1haW4gcmVtb3ZlIGZ1bmN0aW9uIGZyb20gc3RhdGVcbiAqIEl0IGRvZXMgbm90IGV4ZWN1dGUgYSBERUxFVEUgcmVxdWVzdFxuICovXG5jb25zdCByZW1vdmUgPSBhc3luYyAob3B0aW9ucywgZGlzcGF0Y2gsIGNhbGxiYWNrKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgZGVmaW5pdGlvbiwgdHlwZSB9ID0gKDAsIGdldEhvb2tPcHRpb25zXzEuZ2V0SG9va09wdGlvbnMpKG9wdGlvbnMpO1xuICAgIGNvbnN0IHBlcnNpc3REYXRhID0gZGVmaW5pdGlvbi5wZXJzaXN0RGF0YTtcbiAgICBpZiAocGVyc2lzdERhdGEpIHtcbiAgICAgICAgX18xLlN0b3JlLnJlbW92ZShkZWZpbml0aW9uKTtcbiAgICB9XG4gICAgLy8gUmVzZXQgdGhlIHN0YXRlIG9mIHRoZSBkZWZpbml0aW9uLlxuICAgIFJMZWFuXzEuZGVmYXVsdC5kZWZpbml0aW9uID0gZGVmaW5pdGlvbjtcbiAgICBpZiAoZGlzcGF0Y2gpIHtcbiAgICAgICAgZGlzcGF0Y2goZGVmaW5pdGlvbi51cGRhdGVTdGF0ZShudWxsLCB0eXBlKSk7XG4gICAgfVxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cbn07XG4vKipcbiAqIENsZWFyIGFuIG9iamVjdCBmcm9tIHRoZSBzdG9yZSBpZiBwZXJzaXN0RGF0YSBpcyB0cnVlIChkZWZhdWx0KS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEFuIG9iamVjdCBjb250YWluaW5nIGFuIGluc3RhbmNlIG9mIHRoZSBkZWZpbml0aW9uIHdob3NlIHN0YXRlIG5lZWRzIHRvIGJlIHBvcHVsYXRlZCwgYW4gb3B0aW9uYWwgcGFyYW1zIG9iamVjdCBpZiBhbiBBUEkgY2FsbCBuZWVkcyB0byBiZSBtYWRlLCBhbmQgYW4gb3B0aW9uYWwgdHlwZSBpZiB0aGUgZGVmaW5pdGlvbiBoYXMgbXVsdGlwbGUgdHlwZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2s9bnVsbF0gT3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgdXNlU2F2ZSBoYXMgZXhlY3V0ZWQgaXRzIGxvZ2ljLlxuICovXG5mdW5jdGlvbiB1c2VSZW1vdmUob3B0aW9ucywgY2FsbGJhY2sgPSAoKSA9PiB7IH0pIHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IFN0YXRlU2luZ2xldG9uXzEuU3RhdGVTaW5nbGV0b24uZ2V0SW5zdGFuY2UoKS56dXN0YW5kKHMgPT4gcy5kaXNwYXRjaCk7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gKG9wdGlvbnMsIGNhbGxiYWNrID0gKCkgPT4geyB9KSA9PiB7XG4gICAgICAgICAgICByZW1vdmUob3B0aW9ucywgZGlzcGF0Y2gsIGNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgICAgIHJlbW92ZShvcHRpb25zLCBkaXNwYXRjaCwgY2FsbGJhY2spO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdXNlUmVtb3ZlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhObFVtVnRiM1psTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmh2YjJ0ekwzVnpaVkpsYlc5MlpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxHbERRVUZyUXp0QlFVTnNReXd3UWtGQk1rSTdRVUZETTBJc2IwTkJRVFpDTzBGQlF6ZENMSE5FUVVGdFJEdEJRVU51UkN4blJVRkJOa1E3UVVGSE4wUTdPenRIUVVkSE8wRkJRMGdzVFVGQlRTeE5RVUZOTEVkQlFVY3NTMEZCU3l4RlFVTnNRaXhQUVVFMFFpeEZRVU0xUWl4UlFVRnZReXhGUVVOd1F5eFJRVUZyUWl4RlFVTnNRaXhGUVVGRk8wbEJRMFlzU1VGQlNTeFBRVUZQTEU5QlFVOHNTMEZCU3l4WFFVRlhMRVZCUVVVN1VVRkRiRU1zVDBGQlR6dExRVU5TTzBsQlJVUXNUVUZCVFN4RlFVRkZMRlZCUVZVc1JVRkJSU3hKUVVGSkxFVkJRVVVzUjBGQlJ5eEpRVUZCTEN0Q1FVRmpMRVZCUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRGNrUXNUVUZCVFN4WFFVRlhMRWRCUVVjc1ZVRkJWU3hEUVVGRExGZEJRVmNzUTBGQlF6dEpRVVV6UXl4SlFVRkpMRmRCUVZjc1JVRkJSVHRSUVVObUxGTkJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1MwRkRNVUk3U1VGRlJDeHhRMEZCY1VNN1NVRkRja01zWlVGQlN5eERRVUZETEZWQlFWVXNSMEZCUnl4VlFVRlZMRU5CUVVNN1NVRkZPVUlzU1VGQlNTeFJRVUZSTEVWQlFVVTdVVUZEV2l4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVNNVF6dEpRVVZFTEVsQlFVa3NVVUZCVVN4RlFVRkZPMUZCUTFvc1VVRkJVU3hGUVVGRkxFTkJRVU03UzBGRFdqdEJRVU5JTEVOQlFVTXNRMEZCUXp0QlFVVkdPenM3T3pzN1IwRk5SenRCUVVOSUxGTkJRWGRDTEZOQlFWTXNRMEZETDBJc1QwRkJOa0lzUlVGRE4wSXNWMEZCY1VJc1IwRkJSeXhGUVVGRkxFZEJRVVVzUTBGQlF6dEpRVVUzUWl4TlFVRk5MRkZCUVZFc1IwRkJSeXdyUWtGQll5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVWMlJTeEpRVUZKTEU5QlFVOHNUMEZCVHl4TFFVRkxMRmRCUVZjc1JVRkJSVHRSUVVOc1F5eFBRVUZQTEVOQlEwd3NUMEZCTkVJc1JVRkROVUlzVjBGQmNVSXNSMEZCUnl4RlFVRkZMRWRCUVVVc1EwRkJReXhGUVVNM1FpeEZRVUZGTzFsQlEwWXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdVVUZEZEVNc1EwRkJReXhEUVVGRE8wdEJRMGc3U1VGRlJDeEpRVUZCTEdsQ1FVRlRMRVZCUVVNc1IwRkJSeXhGUVVGRk8xRkJRMklzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRGRFTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5xUWl4RFFVRkRPMEZCYkVKRUxEUkNRV3RDUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiQHJsZWFuL3V0aWxzXCIpO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgX2ludGVybmFsXzEgPSByZXF1aXJlKFwiLi4vX2ludGVybmFsXCIpO1xuY29uc3QgUkxlYW5fMSA9IHJlcXVpcmUoXCIuLi9STGVhblwiKTtcbmNvbnN0IFN0YXRlU2luZ2xldG9uXzEgPSByZXF1aXJlKFwiLi4vU3RhdGVTaW5nbGV0b25cIik7XG5mdW5jdGlvbiB1c2VTeW5jU3RhdGUoKSB7XG4gICAgY29uc3QgbW91bnRlZFJlZiA9ICgwLCByZWFjdF8xLnVzZVJlZikodHJ1ZSk7XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBTdGF0ZVNpbmdsZXRvbl8xLlN0YXRlU2luZ2xldG9uLmdldEluc3RhbmNlKCkuenVzdGFuZCgocykgPT4gW1xuICAgICAgICBzLnN0YXRlLFxuICAgICAgICBzLmRpc3BhdGNoLFxuICAgIF0pO1xuICAgIGNvbnN0IHN5bmNTdGF0ZSA9ICgwLCByZWFjdF8xLnVzZUNhbGxiYWNrKSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVudGl0eURlZmluaXRpb25zID0gKDAsIHV0aWxzXzEuZ2V0VmFsdWUpKFJMZWFuXzEuZGVmYXVsdCwgJ2NvbmZpZy5lbnRpdGllcycsIHt9KTtcbiAgICAgICAgY29uc3Qgb2JqZWN0cyA9IE9iamVjdC52YWx1ZXMoZW50aXR5RGVmaW5pdGlvbnMpO1xuICAgICAgICBvYmplY3RzLm1hcChhc3luYyAoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKCFtb3VudGVkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uLnBlcnNpc3REYXRhICYmIGRlZmluaXRpb24uaW5jbHVkZUluU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBkZWZpbml0aW9uLmtleTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZVZhbHVlID0gc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdG9yZWRWYWx1ZSA9IGF3YWl0IF9fMS5TdG9yZS5nZXQoZGVmaW5pdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3JlZFZhbHVlICYmXG4gICAgICAgICAgICAgICAgICAgICF1dGlsc18xLkNvbXBhcmUuZGVlcENvbXBhcmUoc3RvcmVkVmFsdWUsIHN0YXRlVmFsdWUpLmlzRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IGBTRVRfJHsoMCwgX2ludGVybmFsXzEuY29udmVydFRvVHlwZSkoZGVmaW5pdGlvbi5rZXkpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0b2RvIGRpc3BhdGNoIGRvZXNuJ3QgcmVjZWl2ZSBhbnkgcGFyYW1ldGVycyAoPylcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goZGVmaW5pdGlvbi51cGRhdGVTdGF0ZShzdG9yZWRWYWx1ZSwgdHlwZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW21vdW50ZWRSZWZdKTtcbiAgICAoMCwgcmVhY3RfMS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICAgICAgc3luY1N0YXRlKCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIH0sIFtdKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHVzZVN5bmNTdGF0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRYTmxVM2x1WTFOMFlYUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaHZiMnR6TDNWelpWTjVibU5UZEdGMFpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxHbERRVUYxUkR0QlFVTjJSQ3gzUTBGQmFVUTdRVUZEYWtRc01FSkJRVEpDTzBGQlF6TkNMRFJEUVVFMlF6dEJRVVUzUXl4dlEwRkJOa0k3UVVGRE4wSXNjMFJCUVcxRU8wRkJSVzVFTEZOQlFYZENMRmxCUVZrN1NVRkRiRU1zVFVGQlRTeFZRVUZWTEVkQlFVY3NTVUZCUVN4alFVRk5MRVZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRGFFTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hSUVVGUkxFTkJRVU1zUjBGQlJ5d3JRa0ZCWXl4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVMHNSVUZCUlN4RlFVRkZMRU5CUVVNN1VVRkRla1VzUTBGQlF5eERRVUZETEV0QlFVczdVVUZEVUN4RFFVRkRMRU5CUVVNc1VVRkJVVHRMUVVOWUxFTkJRVU1zUTBGQlF6dEpRVVZJTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVFc2JVSkJRVmNzUlVGQlF5eEhRVUZITEVWQlFVVTdVVUZEYWtNc1RVRkJUU3hwUWtGQmFVSXNSMEZCYjBJc1NVRkJRU3huUWtGQlVTeEZRVU5xUkN4bFFVRkxMRVZCUTB3c2FVSkJRV2xDTEVWQlEycENMRVZCUVVVc1EwRkRTQ3hEUVVGRE8xRkJRMFlzVFVGQlRTeFBRVUZQTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMUZCUldwRUxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkRMRlZCUVZVc1JVRkJReXhGUVVGRk8xbEJRemRDTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhGUVVGRk8yZENRVU4yUWl4UFFVRlBMRWxCUVVrc1EwRkJRenRoUVVOaU8xbEJSVVFzU1VGQlNTeFZRVUZWTEVOQlFVTXNWMEZCVnl4SlFVRkpMRlZCUVZVc1EwRkJReXhqUVVGakxFVkJRVVU3WjBKQlEzWkVMRTFCUVUwc1IwRkJSeXhIUVVGSExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTTdaMEpCUXpOQ0xFMUJRVTBzVlVGQlZTeEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRE9VSXNUVUZCVFN4WFFVRlhMRWRCUVVjc1RVRkJUU3hUUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMmRDUVVWb1JDeEpRVU5GTEZkQlFWYzdiMEpCUTFnc1EwRkJReXhsUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEZkQlFWY3NSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRM0pFTzI5Q1FVTkJMRTFCUVUwc1NVRkJTU3hIUVVGSExFOUJRVThzU1VGQlFTeDVRa0ZCWVN4RlFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETzI5Q1FVVndSQ3h2UkVGQmIwUTdiMEpCUTI1RUxGRkJRV2RDTEVOQlFVTXNWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJReXhYUVVGWExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0cFFrRkRPVVE3WVVGRFJqdFJRVU5JTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTB3c1EwRkJReXhGUVVGRkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVVnFRaXhKUVVGQkxHbENRVUZUTEVWQlFVTXNSMEZCUnl4RlFVRkZPMUZCUTJJc1UwRkJVeXhGUVVGRkxFTkJRVU03VVVGRldpeFBRVUZQTEVkQlFVY3NSVUZCUlR0WlFVTldMRlZCUVZVc1EwRkJReXhQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlF6ZENMRU5CUVVNc1EwRkJRenRSUVVWR0xIVkVRVUYxUkR0SlFVTjZSQ3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZEVkN4RFFVRkRPMEZCTDBORUxDdENRU3REUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZ2V0U3RvcmFnZU1ldGhvZHNfMSA9IHJlcXVpcmUoXCIuL19pbnRlcm5hbC9nZXRTdG9yYWdlTWV0aG9kc1wiKTtcbmNsYXNzIFN0b3JlIHtcbiAgICAvKlxuICAgICAqIE1ha2VzIHRoZSAnc2V0JyBjYWxsIHRvIGxvY2FsIHN0b3JhZ2UgdG8gc3RvcmUgZGF0YVxuICAgICAqL1xuICAgIGFzeW5jIHNldChkZWZpbml0aW9uLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCB7IHNldFN0b3JhZ2UsIGdldFN0b3JhZ2UgfSA9ICgwLCBnZXRTdG9yYWdlTWV0aG9kc18xLmdldFN0b3JhZ2VNZXRob2RzKShkZWZpbml0aW9uKTtcbiAgICAgICAgY29uc3Qga2V5ID0gZGVmaW5pdGlvbi5rZXk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBzZXRTdG9yYWdlKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFZhbHVlID0gYXdhaXQgZ2V0U3RvcmFnZShrZXkpO1xuICAgICAgICAgICAgaWYgKHVwZGF0ZWRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3Qgc2V0ICR7a2V5fSA9ICR7dmFsdWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBrZXksIHZhbHVlIH07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKlxuICAgICAqIE1ha2VzIHRoZSAnZ2V0JyBjYWxsIHRvIGxvY2FsIHN0b3JhZ2UgdG8gZ2V0IHNvbWUgZGF0YVxuICAgICAqL1xuICAgIGFzeW5jIGdldChkZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IHsgZ2V0U3RvcmFnZSB9ID0gKDAsIGdldFN0b3JhZ2VNZXRob2RzXzEuZ2V0U3RvcmFnZU1ldGhvZHMpKGRlZmluaXRpb24pO1xuICAgICAgICBjb25zdCBrZXkgPSBkZWZpbml0aW9uLmtleTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgZ2V0U3RvcmFnZShrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgc2V0QWxsKHVuaXRzKSB7XG4gICAgICAgIGNvbnN0IHsgc2V0U3RvcmFnZSB9ID0gKDAsIGdldFN0b3JhZ2VNZXRob2RzXzEuZ2V0U3RvcmFnZU1ldGhvZHMpKG51bGwpO1xuICAgICAgICBpZiAodW5pdHMgPT09IHVuZGVmaW5lZCB8fCB1bml0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFycmF5IGNhbm5vdCBiZSBudWxsIG9yIGVtcHR5XCIpO1xuICAgICAgICB9XG4gICAgICAgIHVuaXRzLmZvckVhY2goYXN5bmMgKHVuaXQpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgc2V0U3RvcmFnZSh1bml0LmtleSwgdW5pdC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qXG4gICAgICogTWFrZXMgdGhlICdjbGVhcicgY2FsbCB0byBsb2NhbCBzdG9yYWdlIHRvIGdldCBjbGVhciBsb2NhbCBzdG9yYWdlXG4gICAgICogVXNlcyB0aGUgc3RvcmFnZSBlbmdpbmUgZm91bmQgYnkgZGVjaWRlV2hpY2hFbmdpbmUsIGVpdGhlciBhZGFwdGVyIG9yIGRlZmF1bHQuXG4gICAgICovXG4gICAgYXN5bmMgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2xlYXJTdG9yYWdlIH0gPSAoMCwgZ2V0U3RvcmFnZU1ldGhvZHNfMS5nZXRTdG9yYWdlTWV0aG9kcykobnVsbCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBjbGVhclN0b3JhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLypcbiAgICAgKiBNYWtlcyB0aGUgJ3JlbW92ZScgY2FsbCB0byBsb2NhbCBzdG9yYWdlIHRvIGdldCByZW1vdmUgYSB2YWx1ZSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICAgKiBVc2VzIHRoZSBzdG9yYWdlIGVuZ2luZSBmb3VuZCBieSBkZWNpZGVXaGljaEVuZ2luZSwgZWl0aGVyIGFkYXB0ZXIgb3IgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBhc3luYyByZW1vdmUoZGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCB7IHJlbW92ZVN0b3JhZ2UgfSA9ICgwLCBnZXRTdG9yYWdlTWV0aG9kc18xLmdldFN0b3JhZ2VNZXRob2RzKShkZWZpbml0aW9uKTtcbiAgICAgICAgY29uc3Qga2V5ID0gZGVmaW5pdGlvbi5rZXk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCByZW1vdmVTdG9yYWdlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBTdG9yZSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVTNSdmNtVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12VTNSdmNtVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRFFTeHhSVUZCYTBVN1FVRkZiRVVzVFVGQlRTeExRVUZMTzBsQlExUTdPMDlCUlVjN1NVRkRTQ3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZKTEZWQlFXdERMRVZCUVVVc1MwRkJhVUk3VVVGRGFFVXNUVUZCVFN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzUjBGQlJ5eEpRVUZCTEhGRFFVRnBRaXhGUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlJXcEZMRTFCUVUwc1IwRkJSeXhIUVVGSExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZGTTBJc1NVRkJTVHRaUVVOR0xFMUJRVTBzVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVVM1FpeE5RVUZOTEZsQlFWa3NSMEZCUnl4TlFVRk5MRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVVV6UXl4SlFVRkpMRmxCUVZrc1MwRkJTeXhUUVVGVExFVkJRVVU3WjBKQlF6bENMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYVVKQlFXbENMRWRCUVVjc1RVRkJUU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzJGQlEzQkVPMWxCUlVRc1QwRkJUeXhGUVVGRkxFZEJRVWNzUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXp0VFFVTjJRanRSUVVGRExFOUJRVThzUjBGQlJ5eEZRVUZGTzFsQlExb3NUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU5zUWp0SlFVTklMRU5CUVVNN1NVRkZSRHM3VDBGRlJ6dEpRVU5JTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVrc1ZVRkJhME03VVVGRE4wTXNUVUZCVFN4RlFVRkZMRlZCUVZVc1JVRkJSU3hIUVVGSExFbEJRVUVzY1VOQlFXbENMRVZCUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRmNrUXNUVUZCVFN4SFFVRkhMRWRCUVVjc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF6dFJRVVV6UWl4SlFVRkpPMWxCUTBZc1RVRkJUU3hMUVVGTExFZEJRVWNzVFVGQlRTeFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRjRU1zVDBGQlR5eExRVUZMTEVOQlFVTTdVMEZEWkR0UlFVRkRMRTlCUVU4c1IwRkJSeXhGUVVGRk8xbEJRMW9zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVOc1FqdEpRVU5JTEVOQlFVTTdTVUZGUkN4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRWFZETzFGQlEyeEVMRTFCUVUwc1JVRkJSU3hWUVVGVkxFVkJRVVVzUjBGQlJ5eEpRVUZCTEhGRFFVRnBRaXhGUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlJTOURMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk1zU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVNM1F5eE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMQ3RDUVVFclFpeERRVUZETEVOQlFVTTdVMEZEYkVRN1VVRkZSQ3hMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSVHRaUVVNelFpeEpRVUZKTzJkQ1FVTkdMRTFCUVUwc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yRkJRM2hETzFsQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVN1owSkJRMVlzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOb1FqdFJRVU5JTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUlVnc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRFpDeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGdzUzBGQlN5eERRVUZETEV0QlFVczdVVUZEVkN4TlFVRk5MRVZCUVVVc1dVRkJXU3hGUVVGRkxFZEJRVWNzU1VGQlFTeHhRMEZCYVVJc1JVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVVZxUkN4SlFVRkpPMWxCUTBZc1RVRkJUU3haUVVGWkxFVkJRVVVzUTBGQlF6dFRRVU4wUWp0UlFVRkRMRTlCUVU4c1IwRkJSeXhGUVVGRk8xbEJRMW9zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVOd1FqdEpRVU5JTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNDeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkpMRlZCUVd0RE8xRkJRMmhFTEUxQlFVMHNSVUZCUlN4aFFVRmhMRVZCUVVVc1IwRkJSeXhKUVVGQkxIRkRRVUZwUWl4RlFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJSWGhFTEUxQlFVMHNSMEZCUnl4SFFVRkhMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU03VVVGRk0wSXNTVUZCU1R0WlFVTkdMRTFCUVUwc1lVRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlF6RkNPMUZCUVVNc1QwRkJUeXhIUVVGSExFVkJRVVU3V1VGRFdpeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRMnhDTzBsQlEwZ3NRMEZCUXp0RFFVTkdPMEZCUlVRc2EwSkJRV1VzU1VGQlNTeExRVUZMTEVWQlFVVXNRMEZCUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5STGVhbkJhc2VIb29rcyA9IHZvaWQgMDtcbmNvbnN0IHVzZVN5bmNTdGF0ZV8xID0gcmVxdWlyZShcIi4vaG9va3MvdXNlU3luY1N0YXRlXCIpO1xuZnVuY3Rpb24gUkxlYW5CYXNlSG9va3MoKSB7XG4gICAgKDAsIHVzZVN5bmNTdGF0ZV8xLmRlZmF1bHQpKCk7XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnRzLlJMZWFuQmFzZUhvb2tzID0gUkxlYW5CYXNlSG9va3M7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbUZ6WlVodmIydHpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDBKaGMyVkliMjlyY3k1MGMzZ2lYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUTBFc2RVUkJRV2RFTzBGQlJXaEVMRk5CUVdkQ0xHTkJRV003U1VGRE5VSXNTVUZCUVN4elFrRkJXU3hIUVVGRkxFTkJRVU03U1VGRlppeFBRVUZQTEVsQlFVa3NRMEZCUXp0QlFVTmtMRU5CUVVNN1FVRktSQ3gzUTBGSlF5SjkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=