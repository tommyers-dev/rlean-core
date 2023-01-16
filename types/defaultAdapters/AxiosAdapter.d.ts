import { AxiosResponse } from "axios";
import { AdapterAPIPayload } from "../types";
declare class AxiosAdapter {
    get<R, T>(apiPayload: AdapterAPIPayload<T>): Promise<AxiosResponse<R>>;
    post<R, T>(apiPayload: AdapterAPIPayload<T>): Promise<AxiosResponse<R>>;
    put<R, T>(apiPayload: AdapterAPIPayload<T>): Promise<AxiosResponse<R>>;
    del<R, T>(apiPayload: AdapterAPIPayload<T>): Promise<AxiosResponse<R>>;
    patch<R, T>(apiPayload: AdapterAPIPayload<T>): Promise<AxiosResponse<R>>;
}
declare const _default: AxiosAdapter;
export default _default;
