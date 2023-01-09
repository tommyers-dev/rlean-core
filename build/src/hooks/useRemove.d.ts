import { EntityDefineOptions, Options } from "../types";
/**
 * Clear an object from the store if persistData is true (default).
 *
 * @constructor
 * @param {Object} options An object containing an instance of the definition whose state needs to be populated, an optional params object if an API call needs to be made, and an optional type if the definition has multiple types.
 * @param {Function} [callback=null] Optional callback function to be executed after useSave has executed its logic.
 */
export default function useRemove<T extends EntityDefineOptions<any>>(options?: Partial<Options<T>>, callback?: Function): (<T_1 extends EntityDefineOptions<any>>(options: Partial<Options<T_1, T_1 extends EntityDefineOptions<infer F> ? F : unknown, (T_1 extends EntityDefineOptions<infer F> ? F : unknown) extends infer T_2 ? T_2 extends (T_1 extends EntityDefineOptions<infer F> ? F : unknown) ? T_2 extends unknown[] ? unknown : T_2 : never : never>>, callback?: Function) => void)[];
