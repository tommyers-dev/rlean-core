import axios from 'axios';
import { methods } from '../_internal/methods';

class AxiosAdapter {
  async get(apiPayload) {
    const { url, headers } = apiPayload;
    return await axios.get(url, headers);
  }

  async post(apiPayload) {
    const { url, data, headers } = apiPayload;
    return await axios({ method: methods.POST, url, data, headers});
  }

  async put(apiPayload) {
    const { url, data, headers } = apiPayload;
    return await axios({ method: methods.PUT, url, data, headers});
  }

  async del(apiPayload) {
    const { url, data, headers } = apiPayload;
    return await axios({ method: methods.DELETE, url, data, headers});
  }

  async patch(apiPayload) {
    const { url, data, headers } = apiPayload;
    return await axios({ method: methods.PATCH, url, data, headers});
  }
}

export default new AxiosAdapter();
