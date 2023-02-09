import { DeleteOptions, EntityDefineOptions, APIResponse } from '../types';
/**
 * Hook that exposes del()
 *
 * @example
 *
 * useDelete({ definition: Definition, body: { value: 'value' } });
 *
 * const del = useDelete();
 * del({ definition: Definition, body: { value: 'value' } });
 */
export default function useDelete<Res, Req, T extends EntityDefineOptions<any>>(options?: Partial<DeleteOptions<T, Req>>, callback?: (response: APIResponse<Res>, error?: any) => void): <Res_1, Req_1, T_1 extends EntityDefineOptions<any>>(options: Partial<import("../types").Options<T_1, T_1 extends EntityDefineOptions<infer F> ? F : unknown, Req_1>>, callback: (response: APIResponse<Res_1>, error?: any) => void) => void;
