import { useEffect } from "react";
import { StateSingleton } from "../StateSingleton";

export default async function useRequest(
  options: any,
  method: Function,
  callback: Function
) {
  const dispatch = StateSingleton.getInstance().state((s) => s.dispatch);

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
