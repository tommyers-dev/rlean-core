import RLean from '../RLean';
import { getValue } from '@rlean/utils';
import { methods } from './methods';

export const formatPath = (path, payloadQuery, payloadBody, method, nullableParams) => {
  // Check for null params if they aren't allowed.
  if (!nullableParams) {
    if (payloadQuery) {
      for (let key in payloadQuery) {
        if (typeof payloadQuery[key] === 'undefined' || payloadQuery[key] === null) {
          // Params cannot be null.
          return;
        }
      }
    }
    if (payloadBody) {
      for (let key in payloadBody) {
        if (typeof payloadBody[key] === 'undefined' || payloadBody[key] === null) {
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
    let queryStringKeys = [];
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
  const nullableParams = model.nullableParams;
  const apiUriOverride = model.apiUriOverride;
  const headers = getValue(RLean, 'config.api.headers', {});
  const uri = apiUriOverride ? apiUriOverride : getValue(RLean, 'config.api.uri', '');
  const path = formatPath(payload.path, payload.query, payload.body, method, nullableParams);

  // No path specified. Return undefined.
  if (path === undefined || path === '') {
    console.warn(`Path is required.`);
    return;
  }

  const apiPayload = {
    url: uri + path,
    data: payload.body,
    headers,
  };

  switch (method) {
    case methods.GET:
      return await model.adapters.api.get(apiPayload);
    case methods.POST:
      return await model.adapters.api.post(apiPayload);
    case methods.DELETE:
      return await model.adapters.api.del(apiPayload);
    case methods.PUT:
      return await model.adapters.api.put(apiPayload);
    case methods.PATCH:
      return await model.adapters.api.patch(apiPayload);
    default:
      console.error('Unknown method specified.');
      return;
  }
};
