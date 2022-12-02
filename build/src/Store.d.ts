import { EntityDefineOptions } from "./types";
declare class Store {
    set<T>(definition: EntityDefineOptions<T>, value: Partial<T>): Promise<{
        key: string;
        value: Partial<T>;
    }>;
    get<T>(definition: EntityDefineOptions<T>): Promise<any>;
    setAll(units: {
        key: string;
        value: Object;
    }[]): Promise<boolean>;
    clear(): Promise<void>;
    remove<T>(definition: EntityDefineOptions<T>): Promise<void>;
}
declare const _default: Store;
export default _default;
