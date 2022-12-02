import { AdapterMap, ApiAdapter } from "./types";
export default class Adapters {
    adapterMap: AdapterMap;
    api: ApiAdapter;
    storage: any;
    logger: any;
    constructor(adapterMap: AdapterMap);
    pipe(adapterMapKey: keyof AdapterMap): void;
    ensureCorrectStorageImplementation(storage: any): any;
    setLoggingEngine(logger: any): any;
}
