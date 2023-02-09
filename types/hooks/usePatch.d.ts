import { APIResponse } from '..';
import { EntityDefineOptions, PatchOptions } from '../types';
/**
 * Hook that exposes patch() safely and funly
 *
 * usePatch({ definition: Definition, body: { value: 'value' } });
 *
 * const patch = usePatch();
 * patch({ definition: Definition, body: { value: 'value' } });
 */
export default function usePatch<Res, Req, T extends EntityDefineOptions<any>>(options?: PatchOptions<T, Req>, _callback?: (response: APIResponse<Res>, error?: any) => void): <Res_1, Req_1, T_1 extends EntityDefineOptions<any>>(options: Partial<import("../types").Options<T_1, T_1 extends EntityDefineOptions<infer F> ? F : unknown, Req_1>>, callback: (response: APIResponse<Res_1>, error?: any) => void) => void;
