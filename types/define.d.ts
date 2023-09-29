import { EntityDefineOptions } from './types';
/**
 * define
 * Creates base entity definition using data type as generic
 */
export declare const define: <T>(key: string, options?: Partial<EntityDefineOptions<T>>, callback?: Function) => EntityDefineOptions<T>;
