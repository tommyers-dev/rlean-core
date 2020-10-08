import { useEffect, useRef, useState } from 'react';
import { request } from './_internal/request';
import { deepCopy, hasValue } from '@rlean/utils';
import { useGlobalState } from './State';
import useSave from './useSave';
import { getHookOptions, methods } from './_internal';

export default function useGet(options, callback) {
  const [refetchIndex, setRefetchIndex] = useState(0);
  const [init, setInit] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();
  const [isRefetching, setIsRefetching] = useState(false);
  const [lastUpdated, setLastUpdated] = useState();
  const [{ ...state }, dispatch] = useGlobalState();
  const stateRef = useRef(state);
  const [save] = useSave();
  const abortCtrl = new AbortController();
  let dependencies = [];
  let isMounted = true;
  let canceled = false;

  const refetch = () => {
    const newIndex = refetchIndex + 1;
    setRefetchIndex(newIndex);
  };

  const get = async (options, stateRef, dispatch, callback, save) => {
    const { model, params, type } = getHookOptions(options);
    const currentState = stateRef.current;

    // model does not include a get call
    if (!hasValue(model, 'getURL')) {
      return null;
    }

    // check for null params
    if (!model.nullableParams) {
      for (let key in params) {
        if (typeof params[key] === 'undefined' || params[key] === null) {
          return null;
        }
      }
    }

    const stateValue = currentState && currentState[model.key] ? deepCopy(currentState[model.key]) : {};
    stateValue.refetch = () => refetch();

    try {
      if (isMounted) {
        setIsLoading(true);
        setInit(true);

        if (refetchIndex > 0) {
          setIsRefetching(true);
          stateValue.isRefetching = true;
        }
      }

      stateValue.isLoading = true;
      stateValue.init = true;

      // set initial loading state
      if (model.persistData) {
        save({ model, value: stateValue });
      }

      if (model.includeInState) {
        dispatch(model.updateState(stateValue, `${model.type}_IS_LOADING`));
      }

      if (model.preferStore) {
        return null;
      }

      const payload = {
        path: model.getURL,
        query: params,
        signal: abortCtrl.signal,
      };

      const res = await request(payload, model, methods.GET);

      if (isMounted && res) {
        stateValue.data = res.data;
        stateValue.isLoading = false;
        stateValue.lastUpdated = new Date();
        stateValue.isRefetching = false;

        setData(stateValue.data);
        setIsLoading(stateValue.isLoading);
        setLastUpdated(stateValue.lastUpdated);
        setIsRefetching(stateValue.isRefetching);
      } else {
        stateValue.isLoading = false;
      }

      // persist updated value with new loading status
      if (model.persistData) {
        save({ model, value: stateValue });
      }

      if (model.includeInState) {
        dispatch(model.updateState(stateValue, type));
      }

      if (callback) {
        callback(res);
      }
    } catch (err) {
      stateValue.error = err;
      stateValue.isLoading = false;

      if (isMounted) {
        setError(stateValue.error);
        setIsLoading(stateValue.isLoading);
      }

      if (includeInState) {
        dispatch(model.updateState(stateValue, `${model.type}_ERROR`));
      }
    }

    return {
      data,
      error,
      isLoading,
      isRefetching,
      lastUpdated,
      canceled,
      init,
    };
  };

  if (typeof options === 'undefined') {
    return [
      (options, callback) => {
        get(options, stateRef, dispatch, callback, save);
      },
    ];
  }

  if (options && options.params) {
    dependencies = Object.values(options.params);
  }

  useEffect(() => {
    get(options, stateRef, dispatch, callback, save);

    return () => {
      isMounted = false;
      canceled = true;
      abortCtrl.abort();
    };
  }, [...dependencies, refetchIndex]);

  return {
    data,
    error,
    isLoading,
    isRefetching,
    lastUpdated,
    canceled,
    init,
    get,
    refetch,
  };
}
