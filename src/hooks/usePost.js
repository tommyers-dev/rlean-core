import { useEffect } from 'react';
import { useStateValue } from '../core';
import { Store } from '../core';
import { inspectClass } from 'framework/helpers/inspectClass';
import Compare from '../helpers/Compare';
import { request } from '../helpers/request';
import { deepCopy } from 'framework/helpers/deepCopy';

// TODO: Remove and create post method
export default async function usePost(model, params, type = null) {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    async function postData() {
      const obj = inspectClass(model);
      const persistData = model.persistData;
      const nullableParams = model.nullableParams;
      const postUri = model.postUri;

      const storeValue = await Store.get(obj.ClassName);

      async function callApi() {
        if (persistData) {
          await dispatch(await model.updateState(params, type));
        }

        if (postUri !== null) {
          const payload = { body: deepCopy(params) };
          const response = await request(payload, nullableParams, 'post');
          return response;
        }

        return;
      }
    }

    postData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
