import { getValue } from '@rlean/utils';
import { useGlobalState } from '../';

export default function useEntity(key, options) {
  const [{ ...state }] = useGlobalState();

  const add = value => {
    const data = getValue(state[key], 'data', []);
    data.push(value);
    save({ value });
  };

  const select = exp => {
    const data = getValue(state[key], 'data', []);

    return data.filter(exp);
  };

  const selectAll = () => {
    return getValue(state[key], 'data', []);
  };

  const save = value => {};

  const remove = exp => {};

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
