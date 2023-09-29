import { RLeanConfig } from './types';
/**
 * RLean Class
 * Contains the configuration object. Type is inferred using the config object.
 */
declare class RLean<T> {
    definition: any;
    config: RLeanConfig<T>;
    init(config: RLeanConfig<T>): Promise<void>;
    setToken(token: string): void;
    clear(): void;
}
declare const _default: RLean<unknown>;
export default _default;
