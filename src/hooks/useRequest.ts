import { useEffect } from "react";
import { getValue } from "@rlean/utils";
import RLean from "../RLean";

export default async function useRequest(
  options: any,
  method: Function,
  callback: Function
) {
  const zustand = getValue(RLean, "state", {}) as typeof RLean.state;
  const dispatch = zustand((s) => s.dispatch);

  if (typeof options === "undefined") {
    return [
      (options: any, callback: Function) => {
        method(options, dispatch, callback);
      },
    ];
  }

  useEffect(() => {
    try {
      method(options, dispatch, callback);
    } catch (e) {
      console.log(e);
    }
  }, []);
}
