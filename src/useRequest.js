import { useEffect } from 'react';
import { useStateValue } from './';

export default async function useRequest(options, method, callback) {
  const [, dispatch] = useStateValue();

  if (typeof options === 'undefined') {
    return [
      (options, callback) => {
        method(options, dispatch, callback);
      }
    ];
  }

  useEffect(() => {
    try {
      method(options, dispatch, callback);
    } catch (e) {
      console.log(e);
    }
  }, [params]);
}
