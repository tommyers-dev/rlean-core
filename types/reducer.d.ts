import { ActionType, GlobalState } from "./types";
/**
 * reducer
 * Gets next state value
 */
export declare const reducer: <T>({ ...state }: GlobalState<T>, action: ActionType) => {};
