import { EntityDefineOptions } from "../types";
/**
 * getApiMethods
 * Returns all api methods from the adapter in an entity definition, or, if not
 * defined, from the configurated adapter
 */
export declare const getApiMethods: <T>(definition: EntityDefineOptions<T>) => {
    get: <R, T_1>(payload: import("../types").AdapterAPIPayload<T_1>) => Promise<import("../types").APIResponse<R>>;
    put: <R_1, T_2>(payload: import("../types").AdapterAPIPayload<T_2>) => Promise<import("../types").APIResponse<R_1>>;
    post: <R_2, T_3>(payload: import("../types").AdapterAPIPayload<T_3>) => Promise<import("../types").APIResponse<R_2>>;
    del: <R_3, T_4>(payload: import("../types").AdapterAPIPayload<T_4>) => Promise<import("../types").APIResponse<R_3>>;
    patch: <R_4, T_5>(payload: import("../types").AdapterAPIPayload<T_5>) => Promise<import("../types").APIResponse<R_4>>;
};
