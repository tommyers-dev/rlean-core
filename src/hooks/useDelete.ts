import { useEffect } from "react";
import { request, inspectClass } from "../_internal";
import { APIResponse } from "..";
import { getHookOptions } from "../_internal/getHookOptions";
import { Store } from "..";
import {
  API_METHOD,
  DeleteOptions,
  EntityDefineOptions,
  PatchOptions,
} from "../types";
import { StateSingleton } from "../StateSingleton";

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
  const dispatch = StateSingleton.getInstance().state((s) => s.dispatch);

  // NOT CONVERTED
  /**
   * Function that executes a DELETE against the API.
   *
   * @constructor
   * @param {Object} options
   * @param {Function} dispatch
   * @param {Function} callback
   */
  const del = async (options, dispatch, callback) => {
    const { definition, body, save } = getHookOptions(options);
    const deleteURL = definition.deleteURL;
    const persistData = definition.persistData;

    if (deleteURL !== null) {
      try {
        const payload = {
          path: deleteURL,
          body: body ? Object.assign({}, body) : {},
        };

        const response = await request(payload, definition, API_METHOD.DELETE);

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
        console.error(error);

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

  if (typeof options === "undefined") {
    return [
      <Res, Req, T extends EntityDefineOptions<any>>(
        options: PatchOptions<T, Req> | undefined,
        callback: (response: APIResponse<Res>, error?: any) => void
      ) => {
        del(options, dispatch, callback);
      },
    ];
  }

  useEffect(() => {
    del(options, dispatch, callback);
  }, []);
}
