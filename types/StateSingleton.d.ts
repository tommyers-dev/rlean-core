import { UseBoundStore, StoreApi } from "zustand";
import { GlobalState } from "./types";
export declare class StateSingleton<T = {}> {
    static instance: StateSingleton;
    zustand: UseBoundStore<StoreApi<{
        state: GlobalState<T>;
        dispatch: any;
    }>>;
    select: UseBoundStore<StoreApi<{
        state: GlobalState<T>;
    }>>;
    private constructor();
    static getInstance<T>(): StateSingleton<T>;
}
export declare const RLeanState: <T>() => {
    select: UseBoundStore<StoreApi<{
        state: GlobalState<T>;
    }>>;
};
