import { EntityDefineOptions } from "../types";
export declare const getDefinitionOptions: <T>(key: string, options: Partial<EntityDefineOptions<T>>) => {
    initialState: {
        [x: string]: any;
    };
    getURL: any;
    postURL: any;
    putURL: any;
    patchURL: any;
    deleteURL: any;
    nullableParams: any;
    persistData: boolean;
    preferStore: boolean;
    progressiveLoading: boolean;
    syncInterval: any;
    syncAfterTimeElapsed: boolean;
    adapters: any;
    queueOffline: boolean;
    type: string;
    updateState: Function;
    reducer: Function;
    includeInState: boolean;
    listener: any;
};
