import { useEffect } from "react";
import { useGlobalState } from "..";

export default async function useRequest(
  options: any,
  method: Function,
  callback: Function
) {
  const [, dispatch] = useGlobalState();

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
