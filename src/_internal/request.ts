import RLean from "../RLean";
import { getValue } from "@rlean/utils";
import { getApiMethods } from "./getApiMethods";
import {
  AdapterAPIPayload,
  API_METHOD,
  EntityDefineOptions,
  RequestPayload,
} from "../types";

export const formatPath = (
  path: string,
  payloadQuery: Object,
  payloadBody: Object,
  method: API_METHOD,
  nullableParams: boolean
): string => {
  // Check for null params if they aren't allowed.
  if (!nullableParams) {
    if (payloadQuery) {
      for (let key in payloadQuery) {
        if (
          typeof payloadQuery[key] === "undefined" ||
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
          typeof payloadBody[key] === "undefined" ||
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
    let returnValue = "";

    // Create an array of all payload keys.
    const queryStringKeys = [];
    for (let key in payloadQuery) {
      queryStringKeys.push(key);
    }

    // Replace all the :key instances with the actual values given.
    returnValue = path
      .split("/")
      .map((section) => {
        if (section.includes(":")) {
          const key = section.match(/:(.*)/).pop();

          // Remove key from queryStringKeys array since it is a path param.
          const index = queryStringKeys.indexOf(key);
          queryStringKeys.splice(index, 1);

          return section.replace(":" + key, payloadQuery[key]);
        }

        return section;
      })
      .join("/");

    const query = [];

    // Create query string with query string params.
    for (let key in payloadQuery) {
      if (queryStringKeys.includes(key)) {
        query.push(`${key}=${payloadQuery[key]}`);
      }
    }

    if (query.length > 0) {
      returnValue += "?" + query.join("&");
    }

    return returnValue;
  }

  throw Error("Could not format the path.");
};

export const request = async <Res, EntityType>(
  payload: RequestPayload<EntityType>,
  definition: EntityDefineOptions<EntityType>,
  method: API_METHOD
) => {
  const { get, post, del, put, patch } = getApiMethods(definition);

  const nullableParams = definition.nullableParams;
  const apiUriOverride = definition.apiUriOverride;

  // @todo type headers on RLeanConfig type
  let headers = getValue(RLean, "config.api.headers", {});

  const url: string = apiUriOverride
    ? apiUriOverride
    : getValue(RLean, "config.api.baseURL", "");
  const token: string = getValue(RLean, "config.api.token", null);

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const path = formatPath(
    payload.path,
    payload.query,
    payload.body,
    method,
    nullableParams
  );

  // No path specified. Return undefined.
  if (path === undefined || path === "") {
    console.warn(`Path is required.`);
    return;
  }

  const apiPayload: AdapterAPIPayload<EntityType> = {
    url: url + path,
    data: payload.body,
    headers,
    signal: payload.signal,
  };

  let res = null;

  switch (method) {
    case API_METHOD.GET:
      res = await get<Res, EntityType>(apiPayload);
      break;
    case API_METHOD.POST:
      res = await post<Res, EntityType>(apiPayload);
      break;
    case API_METHOD.DELETE:
      res = await del<Res, EntityType>(apiPayload);
      break;
    case API_METHOD.PUT:
      res = await put<Res, EntityType>(apiPayload);
      break;
    case API_METHOD.PATCH:
      res = await patch<Res, EntityType>(apiPayload);
      break;
    default:
      console.error("Unknown API method specified.");
      break;
  }

  return res;
};
