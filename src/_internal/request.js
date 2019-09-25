import axios from 'axios';
import ReactEnt from '../ReactEnt';
import { get } from '@react-ent/utils';
import { methods } from './methods';

export const request = async (payload, nullableParams, method) => {
  const headers = get(ReactEnt, 'config.api.headers', {});
  const uri = get(ReactEnt, 'config.api.uri', '');

  // Replaces all the :key instances with the actual values given
  let path = payload.path
    .split('/')
    .map((section, index) => {
      if (section.includes(':')) {
        const key = section.match(/:(.*)/).pop();
        return section.replace(':' + key, payload.query[key]);
      }

      return section;
    })
    .join('/');

  if (payload.query) {
    const query = [];

    for (let key in payload.query) {
      if (typeof payload.query[key] !== 'undefined' && (payload.query[key] !== null || nullableParams)) {
        query.push(`${key}=${payload.query[key]}`);
      } else {
        // If a param is undefined, don't call API. If a param is null, don't
        // call API unless nullableParams is set to true.
        return;
      }
    }

    path += '?' + query.join('&');
  }

  switch (method) {
    case methods.GET:
      return await axios.get(uri + path, { headers });
    case methods.POST:
    case methods.DELETE:
    case methods.PUT:
    case methods.PATCH:
      return await axios({
        method: method,
        url: uri + path,
        headers: headers,
        data: payload.body
      });
    default:
      return;
  }
};
