import { UseBoundStore, StoreApi } from "zustand";
import { GlobalState } from "./types";
export declare class StateSingleton<T = {}> {
    static instance: StateSingleton;
    state: UseBoundStore<StoreApi<{
        global: GlobalState<T>;
        dispatch: any;
    }>>;
    private constructor();
    static getInstance<T>(): StateSingleton<T>;
}
