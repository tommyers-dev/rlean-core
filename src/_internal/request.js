import RLean from '../RLean';
import { getValue } from '@rlean/utils';
import { methods } from './methods';
import { getApiMethods } from './getApiMethods';

export const formatPath = (
  path,
  payloadQuery,
  payloadBody,
  method,
  nullableParams
) => {
  // Check for null params if they aren't allowed.
  if (!nullableParams) {
    if (payloadQuery) {
      for (let key in payloadQuery) {
        if (
          typeof payloadQuery[key] === 'undefined' ||
          payloadQuery[key] === null
        ) {
          // Params cannot be null.
          return;
        }
      }
    }
    if (payloadBody) {
      for (let key in payloadBody) {
        if (
          typeof payloadBody[key] === 'undefined' ||
          payloadBody[key] === null
        ) {
          // Params cannot be null.
          return;
        }
      }
    }
  }

  // If the request has no params, return the base path.
  if (path && !payloadQuery) {
    return path;
  }

  // If payloadQuery exists, return the path with the params appended.
  if (path && payloadQuery) {
    let returnValue;

    // Create an array of all payload keys.
    const queryStringKeys = [];
    for (let key in payloadQuery) {
      queryStringKeys.push(key);
    }

    // Replace all the :key instances with the actual values given.
    returnValue = path
      .split('/')
      .map(section => {
        if (section.includes(':')) {
          const key = section.match(/:(.*)/).pop();

          // Remove key from queryStringKeys array since it is a path param.
          const index = queryStringKeys.indexOf(key);
          queryStringKeys.splice(index, 1);

          return section.replace(':' + key, payloadQuery[key]);
        }

        return section;
      })
      .join('/');

    const query = [];

    // Create query string with query string params.
    for (let key in payloadQuery) {
      if (queryStringKeys.includes(key)) {
        query.push(`${key}=${payloadQuery[key]}`);
      }
    }

    if (query.length > 0) {
      returnValue += '?' + query.join('&');
    }

    return returnValue;
  }

  return console.error('Could not format the path.');
};

export const request = async (payload, model, method) => {
  const { get, post, del, put, patch } = getApiMethods(model);

  const nullableParams = model.nullableParams;
  const apiUriOverride = model.apiUriOverride;
  const headers = getValue(RLean, 'config.api.headers', {});
  const url = apiUriOverride
    ? apiUriOverride
    : getValue(RLean, 'config.api.baseURL', '');
  const path = formatPath(
    payload.path,
    payload.query,
    payload.body,
    method,
    nullableParams
  );

  // No path specified. Return undefined.
  if (path === undefined || path === '') {
    console.warn(`Path is required.`);
    return;
  }

  const apiPayload = {
    url: url + path,
    data: payload.body,
    headers,
    signal: payload.signal,  
  };

  let res = null;

  switch (method) {
    case methods.GET:
      res = await get(apiPayload);
      break;
    case methods.POST:
      res = await post(apiPayload);
      break;
    case methods.DELETE:
      res = await del(apiPayload);
      break;
    case methods.PUT:
      res = await put(apiPayload);
      break;
    case methods.PATCH:
      res = await patch(apiPayload);
      break;
    default:
      console.error('Unknown API method specified.');
      break;
  }

  return res;
};
