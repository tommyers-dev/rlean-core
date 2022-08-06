import axios, { AxiosResponse } from "axios";
import { AdapterAPIPayload, API_METHOD } from "../types";

class AxiosAdapter {
  async get<R, T>(apiPayload: AdapterAPIPayload<T>) {
    const { url, headers, signal } = apiPayload;
    const response = await axios.get<R>(url, headers);
    return response;
  }

  async post<R, T>(apiPayload: AdapterAPIPayload<T>) {
    const { url, data, headers, signal } = apiPayload;
    const response = (await axios({
      method: API_METHOD.POST,
      url,
      data,
      headers,
    })) as AxiosResponse<R>;
    return response;
  }

  async put<R, T>(apiPayload: AdapterAPIPayload<T>) {
    const { url, data, headers, signal } = apiPayload;
    const response = (await axios({
      method: API_METHOD.PUT,
      url,
      data,
      headers,
    })) as AxiosResponse<R>;
    return response;
  }

  async del<R, T>(apiPayload: AdapterAPIPayload<T>) {
    const { url, data, headers, signal } = apiPayload;
    const response = (await axios({
      method: API_METHOD.DELETE,
      url,
      data,
      headers,
    })) as AxiosResponse<R>;
    return response;
  }

  async patch<R, T>(apiPayload: AdapterAPIPayload<T>) {
    const { url, data, headers, signal } = apiPayload;
    const response = (await axios({
      method: API_METHOD.PATCH,
      url,
      data,
      headers,
    })) as AxiosResponse<R>;
    return response;
  }
}

export default new AxiosAdapter();
