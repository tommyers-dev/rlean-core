import * as React from "react";
import { ContextType } from "./types";
export declare const StateContext: React.Context<any>;
declare type StateProviderProps = {
    children: JSX.Element;
};
/**
 * StateProvider<T>
 * The generic must be the `typeof` the entities config object
 */
export declare function StateProvider<T>({ children }: StateProviderProps): JSX.Element;
/**
 * useGlobalState<T>
 * The generic must be the `typeof` the entities config object
 */
export declare const useGlobalState: <T>() => ContextType<T>;
export {};
