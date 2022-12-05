declare class LocalForage {
    set(key: string, value: Object): Promise<void>;
    setAll(units: {
        key: string;
        value: Object;
    }[]): Promise<boolean>;
    get(key: string): Promise<any>;
    clear(): Promise<void>;
    remove(key: string): Promise<void>;
}
declare const _default: LocalForage;
export default _default;
