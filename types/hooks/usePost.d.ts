import { APIResponse, EntityDefineOptions, PostOptions } from '../types';
/**
 * Exposed Hook that allows user to access post method
 * If no definition given, returns function to use post to allow conditional operation.
 *
 * The hooks infers the types by using its parameters, but to give more flexibility
 * both the hook and the exposed function can be manually typed. The order of the
 * type is as follows: post<ResponseType, RequestType, DefinitionType>. The DefinitionType
 * is somewhat redundant but current versions of typescript doesn't allow defaults
 * on generic types yet.
 *
 * @constructor
 * @param {Object} options An object containing an instance of the definition whose state needs to be populated, an optional params object if an API call needs to be made, and an optional type if the definition has multiple types.
 * @param {Function} [callback=null] Optional callback function to be executed after usePost has executed its logic.
 * @example
 *
 * usePost({ definition: Definition, body: { value: 'value' } });
 *
 * const post = usePost();
 * post({ definition: Definition, body: { value: 'value' } });
 */
export default function usePost<Res, Req, Def extends EntityDefineOptions<any>>(options?: PostOptions<Def, Req>, callback?: (response: APIResponse<Res>, error?: any) => void): <Res_1, Req_1, T extends EntityDefineOptions<any> = any>(options: Partial<import("../types").Options<T, T extends EntityDefineOptions<infer F> ? F : unknown, Req_1>>, callback?: (response: APIResponse<Res_1>, error?: any) => void) => void;
