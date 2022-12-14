import { EntityState, EntityDefineOptions, GetOptions } from '../types';
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
export default function useGet<Def extends EntityDefineOptions<any>>(options: GetOptions<Def> | undefined, callback?: () => void): EntityState<Def> | [(options: GetOptions<Def>, callback: Function) => void];
