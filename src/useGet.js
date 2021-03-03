import { useEffect, useRef, useState } from 'react';
import { request } from './_internal/request';
import { deepCopy, hasValue } from '@rlean/utils';
import { useGlobalState } from './State';
import useSave from './useSave';
import { getHookOptions, methods } from './_internal';

export default function useGet(options, callback) {
  const [init, setInit] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();
  const [isRefetching, setIsRefetching] = useState(false);
  const [lastUpdated, setLastUpdated] = useState();
  const [{ ...state }, dispatch] = useGlobalState();
  const stateRef = useRef(state);
  const [save] = useSave();
  const abortCtrl =
    typeof new AbortController() === 'undefined'
      ? {
          signal: null,
          abort: () =>
            console.warn('Browser does not support fetch canceling.'),
        }
      : new AbortController();
  let dependencies = [];
  // these should be useRef variables instead
  let isMounted = true;
  let canceled = false;

  const get = async (
    options,
    stateRef,
    dispatch,
    callback,
    save,
    isRefetch
  ) => {
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

    const stateValue =
      currentState && currentState[model.key]
        ? deepCopy(currentState[model.key])
        : {};
    stateValue.refetch = () => refetch();

    try {
      if (isMounted) {
        setIsLoading(true);
        setInit(true);

        if (isRefetch) {
          setIsRefetching(true);
        }
      }

      stateValue.isLoading = true;
      stateValue.init = true;

      if (isRefetch) {
        stateValue.isRefetching = true;
      }

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

      if (res) {
        stateValue.data = res.data;
        stateValue.isLoading = false;
        stateValue.lastUpdated = new Date();
        stateValue.isRefetching = false;
      } else {
        stateValue.isLoading = false;
      }

      if (isMounted) {
        setData(stateValue.data);
        setIsLoading(stateValue.isLoading);
        setLastUpdated(stateValue.lastUpdated);
        setIsRefetching(stateValue.isRefetching);
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

      if (model.includeInState) {
        dispatch(model.updateState(stateValue, `${model.type}_ERROR`));
      }

      if (callback) {
        callback(null, err);
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
      refetch: async () => {
        await get(options, stateRef, dispatch, callback, save, true);
      },
    };
  };

  const refetch = async () => {
    await get(options, stateRef, dispatch, callback, save, true);
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
  }, [...dependencies]);

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
