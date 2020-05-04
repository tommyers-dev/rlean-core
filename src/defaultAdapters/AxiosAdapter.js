import axios from 'axios';
import { methods } from '../_internal/methods';

class AxiosAdapter {
  async get(apiPayload) {
    const { url, headers } = apiPayload;
    const response = await axios.get(url, headers);
    return response;
  }

  async post(apiPayload) {
    const { url, data, headers } = apiPayload;
    const response = await axios({ method: methods.POST, url, data, headers });
    return response;
  }

  async put(apiPayload) {
    const { url, data, headers } = apiPayload;
    const response = await axios({ method: methods.PUT, url, data, headers });
    return response;
  }

  async del(apiPayload) {
    const { url, data, headers } = apiPayload;
    const response = await axios({ method: methods.DELETE, url, data, headers });
    return response;
  }

  async patch(apiPayload) {
    const { url, data, headers } = apiPayload;
    const response = await axios({ method: methods.PATCH, url, data, headers });
    return response;
  }
}

export default new AxiosAdapter();
