import { useEffect } from 'react';
import { useStateValue } from './';

export default async function useRequest(model, params, method) {
  const [state, dispatch] = useStateValue();

  if(typeof model === "undefined") {
    return [
      (modelInput, body) => {
        method(modelInput, body, dispatch);
      }
    ];
  }

  useEffect(() => {
    try {
      method(model, params, dispatch);
    } catch(e) {
      console.log(e);
    }
  }, [params]);
}
