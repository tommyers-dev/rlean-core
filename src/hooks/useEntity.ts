import { getValue } from "@rlean/utils";
import { StateSingleton } from "../StateSingleton";

export default function useEntity(key: string) {
  const state = StateSingleton.getInstance().zustand((s) => s.state);

  const add = (value: any) => {
    const data = getValue(state[key], "data", []);
    data.push(value);
    save({ value });
  };

  const select = (exp: any) => {
    const data = getValue(state[key], "data", []);

    return data.filter(exp);
  };

  const selectAll = () => {
    return getValue(state[key], "data", []);
  };

  const save = (value: any) => {};

  const remove = (/* exp: any */) => {};

  const clear = () => {};

  const get = () => {};

  const post = () => {};

  const put = () => {};

  const patch = () => {};

  const del = () => {};

  return {
    add,
    select,
    selectAll,
    remove,
    clear,
    get,
    post,
    put,
    patch,
    del,
  };
}
