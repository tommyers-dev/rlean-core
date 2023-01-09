import { GlobalState, RLeanConfig } from "./types";
import { UseBoundStore, StoreApi } from "zustand";
/**
 * RLean Class
 * Contains the configuration object. Type is inferred using the config object.
 */
export declare class RLeanClass<T> {
    definition: any;
    config: RLeanConfig<T>;
    state: UseBoundStore<StoreApi<{
        global: GlobalState<T>;
        dispatch: any;
    }>>;
    init(config: RLeanConfig<T>): Promise<this>;
    setToken(token: string): void;
}
declare const _default: RLeanClass<unknown>;
export default _default;
