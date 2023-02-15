import { APIResponse, EntityDefineOptions, PutOptions } from "../types";
/**
 * usePut
 *
 * Hook that exposes put()
 *
 * The hooks infers the types by using its parameters, but to give more flexibility
 * both the hook and the exposed function can be manually typed. The order of the
 * type is as follows: put<ResponseType, RequestType, DefinitionType>. The DefinitionType
 * is somewhat redundant but current versions of typescript doesn't allow defaults
 * on generic types yet.
 *
 * @constructor
 * @param {Object} options An object containing an instance of the definition whose state needs to be populated, an optional params object if an API call needs to be made, and an optional type if the definition has multiple types.
 * @param {Function} [callback=null] Optional callback function to be executed after usePut has executed its logic.
 * @example
 *
 * usePut({ definition: Definition, body: { value: 'value' } });
 *
 * const put = usePut();
 * put({ definition: Definition, body: { value: 'value' } })
 */
export default function usePut<Res, Req, T extends EntityDefineOptions<any>>(options?: PutOptions<T, Req>, callback?: (response: APIResponse<Res>, error?: any) => void): <Res_1, Req_1, T_1 extends EntityDefineOptions<any>>(options: Partial<import("../types").Options<T_1, T_1 extends EntityDefineOptions<infer F> ? F : unknown, Req_1>>, callback: (response: APIResponse<Res_1>, error?: any) => void) => void;
