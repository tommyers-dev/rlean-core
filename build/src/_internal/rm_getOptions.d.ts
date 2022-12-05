import { Options } from "../types";
/**
 * @todo definition should be entity??
 */
export declare const getOptions: <T>(options: Partial<Options<T, T extends import("../types").EntityDefineOptions<infer F> ? F : unknown, (T extends import("../types").EntityDefineOptions<infer F> ? F : unknown) extends infer T_1 ? T_1 extends (T extends import("../types").EntityDefineOptions<infer F> ? F : unknown) ? T_1 extends unknown[] ? unknown : T_1 : never : never>>) => {
    definition: T;
    params: Object;
    value: Partial<import("../types").EntityState<T extends import("../types").EntityDefineOptions<infer F> ? F : unknown>>;
    type: string;
    body: (T extends import("../types").EntityDefineOptions<infer F> ? F : unknown) extends infer T_2 ? T_2 extends (T extends import("../types").EntityDefineOptions<infer F> ? F : unknown) ? T_2 extends unknown[] ? unknown : T_2 : never : never;
    save: boolean;
};
