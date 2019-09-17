import axios from 'axios';
import { ReactEnt } from '../';

export const request = async (payload, nullableParams, method) => {
  // const headers = {
  //   Authorization: `Bearer ${getToken()}`
  // };

  const headers = ReactEnt.config.api.headers;
  const apiWrapper = ReactEnt.config.api.fetchWrapper;
  const uri = ReactEnt.config.api.uri;

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
    case 'get':
      return await apiWrapper(axios, uri + path, { headers });
    case 'post':
      return await axios({
        method: 'POST',
        url: uri + path,
        headers: headers,
        data: payload.body
      });
    case 'put':
      // TODO: implement put
      break;
    case 'delete':
      // TODO: implement delete
      break;
    default:
      return;
  }

  // TODO: create config file that sets the fetch method so we can access it here

  // create an error handler for api calls. dispatch an action to set a code
  // that will get picked up by middleware and redirect to a configured page.
  // if (typeof response !== 'undefined') {
  //   switch (response.status) {
  //     case 200:
  //       return response.data;
  //     case 401:
  //     case 403:
  //       // should dispatch an action
  //       return 'access denied';
  //     case 404:
  //     case 500:
  //     case 503:
  //       return 'internal error';
  //     default:
  //       return 'unknown error';
  //   }
  // }

  // return 'internal error';
};
