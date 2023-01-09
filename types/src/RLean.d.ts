import { RLeanConfig } from "./types";
/**
 * RLean Class
 * Contains the configuration object. Type is inferred using the config object.
 */
declare class RLeanClass<T> {
    definition: any;
    config: RLeanConfig<T>;
    init(config: RLeanConfig<T>): Promise<void>;
    setToken(token: string): void;
}
declare const _default: RLeanClass<unknown>;
export default _default;
