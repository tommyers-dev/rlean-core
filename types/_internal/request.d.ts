import { API_METHOD, EntityDefineOptions, RequestPayload } from "../types";
export declare const formatPath: (path: string, payloadQuery: Object, payloadBody: Object, method: API_METHOD, nullableParams: boolean) => string;
export declare const request: <Res, EntityType>(payload: RequestPayload<EntityType>, definition: EntityDefineOptions<EntityType>, method: API_METHOD) => Promise<any>;
