import { EntityDefineOptions, GetOptions } from '../types';
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
export default function useGet<Def extends EntityDefineOptions<any>>(options?: GetOptions<Def>, callback?: (response: any, error?: any) => void): <Def_1 extends EntityDefineOptions<any>>(options: Partial<import("../types").Options<Def_1, Def_1 extends EntityDefineOptions<infer F> ? F : unknown, (Def_1 extends EntityDefineOptions<infer F> ? F : unknown) extends infer T ? T extends (Def_1 extends EntityDefineOptions<infer F> ? F : unknown) ? T extends unknown[] ? unknown : T : never : never>>, callback?: (response: any, error?: any) => void) => void;
