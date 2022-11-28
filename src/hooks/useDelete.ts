import { useEffect } from "react";
import { request, inspectClass } from "../_internal";
import { APIResponse, useGlobalState } from "../..";
import { getHookOptions } from "../_internal/getHookOptions";
import { Store } from "../..";
import useOfflineQueue from "./useOfflineQueue";
import {
  API_METHOD,
  DeleteOptions,
  EntityDefineOptions,
  PatchOptions,
} from "../types";

/**
 * Function that executes a DELETE against the API.
 *
 */
const del = async <Res, Req, T extends EntityDefineOptions<any>>(
  options: Partial<DeleteOptions<T, Req>>,
  dispatch: Function,
  enqueue: Function,
  callback: (response: APIResponse<Res>, error?: any) => void
) => {
  const { definition, body, save } = getHookOptions(options);
  const deleteURL = definition.deleteURL;
  const persistData = definition.persistData;
  const queueOffline = definition.queueOffline;

  if (deleteURL !== null) {
    try {
      const payload = {
        path: deleteURL,
        body: body ? Object.assign({}, body) : {},
      };

      let response = null;

      if (navigator.onLine) {
        response = await request(payload, definition, API_METHOD.DELETE);
      } else if (queueOffline) {
        enqueue({ method: API_METHOD.DELETE, options, callback });
      }

      if (response && save) {
        if (persistData) {
          await Store.set(definition, response.data);
        }

        await dispatch(await definition.updateState(response.data));
      }

      if (response && callback) {
        callback(response);
      }

      return;
    } catch (error) {
      if (callback) {
        callback(null, error);
      }
    }
  }

  const o = inspectClass(definition);
  console.error(
    `The ${o.ClassName} object is missing the deleteURL attribute.`
  );
};

/**
 * Hook that exposes del()
 *
 * @example
 *
 * useDelete({ definition: Definition, body: { value: 'value' } });
 *
 * const [ del ] = useDelete();
 * del({ definition: Definition, body: { value: 'value' } });
 */
export default function useDelete<Res, Req, T extends EntityDefineOptions<any>>(
  options?: Partial<DeleteOptions<T, Req>>,
  callback: (response: APIResponse<Res>, error?: any) => void = () => {}
) {
  const [, dispatch] = useGlobalState();
  const [enqueue] = useOfflineQueue();

  if (typeof options === "undefined") {
    return [
      <Res, Req, T extends EntityDefineOptions<any>>(
        options: PatchOptions<T, Req> | undefined,
        callback: (response: APIResponse<Res>, error?: any) => void
      ) => {
        del(options, dispatch, enqueue, callback);
      },
    ];
  }

  useEffect(() => {
    del(options, dispatch, enqueue, callback);
  }, []);
}
