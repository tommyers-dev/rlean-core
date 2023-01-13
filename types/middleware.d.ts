import { ActionType, EntityDefineOptions, GlobalState } from "./types";
declare function logActions<T, K>(definition: EntityDefineOptions<T>, state: GlobalState<K>, action: ActionType): Promise<GlobalState<K>>;
declare function saveToIndexedDB<T, K>(definition: EntityDefineOptions<T>, state: GlobalState<K>, action: ActionType): Promise<GlobalState<K>>;
declare function applyMiddleware<T, K>(definition: EntityDefineOptions<T>, state: GlobalState<K>, action: ActionType, middleware: Function[]): Promise<Promise<any>[]>;
export { applyMiddleware, logActions, saveToIndexedDB };
