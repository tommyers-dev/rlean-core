import { EntityDefineOptions, SaveOptions } from "../types";
/**
 * Save an object to state, and optionally to store if persistData
 * is true (default). Don't check if current state and new value are different
 * so if there is an infinite loop, the developer will know right away in the
 * console log.
 */
export default function useSave<T extends EntityDefineOptions<any>>(options?: SaveOptions<T>, callback?: () => void): (<T_1 extends EntityDefineOptions<any>>(options?: Partial<import("../types").Options<T_1, T_1 extends EntityDefineOptions<infer F> ? F : unknown, (T_1 extends EntityDefineOptions<infer F> ? F : unknown) extends infer T_2 ? T_2 extends (T_1 extends EntityDefineOptions<infer F> ? F : unknown) ? T_2 extends unknown[] ? unknown : T_2 : never : never>>, callback?: () => void) => void)[];
