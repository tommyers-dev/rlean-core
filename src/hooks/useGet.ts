import { useCallback, useEffect, useRef, useState } from 'react';
import { request } from '../_internal/request';
import { deepCopy, hasValue } from '@rlean/utils';
import { getHookOptions } from '../_internal';
import { Store } from '..';
import {
  GlobalState,
  EntityDefineOptions,
  GetOptions,
  API_METHOD,
} from '../types';
import { StateSingleton } from '../StateSingleton';

/**
 * useGet - hook
 *
 * Exposed hook to access GET method.
 *
 * If the entity definition is passed, this gets data of an entity when mounted
 * and returns its EntityState. Otherwise, this returns the get() function to
 * manually get the entity data.
 *
 * @todo Type the response callback. See usePost and usePut for reference.
 */
export default function useGet<Def extends EntityDefineOptions<any>>(
  options?: GetOptions<Def>,
  callback?: (response: any, error?: any) => void
) {
  const [state, dispatch] = StateSingleton.getInstance().zustand((s: any) => [
    s.state,
    s.dispatch,
  ]);

  const [init, setInit] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [isRefetching, setIsRefetching] = useState(false);
  const [lastUpdated, setLastUpdated] = useState();
  const stateRef = useRef(state);
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

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  const get = async <T extends EntityDefineOptions<any>, A>(
    options: GetOptions<T> | undefined,
    innerStateRef: any,
    dispatch: (updateState: any) => void,
    callback = (res: any, err?: any) => {},
    isRefetch: boolean = false
  ) => {
    const { definition, params, type } = getHookOptions(options);

    //const currentState: GlobalState<A> = state;
    const currentState: GlobalState<A> = innerStateRef.current;

    // definition does not include a get call
    if (!hasValue(definition, 'getURL')) {
      return null;
    }

    // check for null params
    if (!definition.nullableParams) {
      for (let key in params) {
        if (typeof params[key] === 'undefined' || params[key] === null) {
          return null;
        }
      }
    }

    const stateValue =
      currentState && currentState[definition.key]
        ? deepCopy(currentState[definition.key])
        : {};
    stateValue.refetch = () => refetch(options);

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
      if (definition.persistData) {
        Store.set(definition, stateValue);
      }

      if (definition.includeInState) {
        dispatch(
          definition.updateState(stateValue, `${definition.type}_IS_LOADING`)
        );
      }

      if (definition.preferStore) {
        return null;
      }

      const payload = {
        path: definition.getURL,
        query: params,
        signal: abortCtrl.signal,
      };

      const res = await request(payload, definition, API_METHOD.GET);

      if (res) {
        // Transform data if transformation function is set for entity definition.
        stateValue.data =
          definition.transformation &&
          typeof definition.transformation === 'function'
            ? definition.transformation(res.data)
            : res.data;
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
      if (definition.persistData) {
        Store.set(definition, stateValue);
      }

      if (definition.includeInState) {
        dispatch(definition.updateState(stateValue, type));
      }

      if (callback) {
        callback(res);
      }
    } catch (err) {
      console.error(err);

      stateValue.error = err;
      stateValue.isLoading = false;

      if (isMounted) {
        setError(stateValue.error);
        setIsLoading(stateValue.isLoading);
      }

      if (definition.includeInState) {
        dispatch(
          definition.updateState(stateValue, `${definition.type}_ERROR`)
        );
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
        await get(options, stateRef, dispatch, callback, true);
      },
    };
  };

  const refetch = async (inner_options?: any) => {
    await get(options ?? inner_options, stateRef, dispatch, callback, true);
  };

  if (typeof options === 'undefined' || options === null) {
    return <Def extends EntityDefineOptions<any>>(
      options: GetOptions<Def>,
      callback?: (response: any, error?: any) => void
    ) => {
      get(options, stateRef, dispatch, callback);
    };
  }

  if (options && options.params) {
    dependencies = Object.values(options.params);
  }

  useEffect(() => {
    get(options, stateRef, dispatch, callback);

    return () => {
      isMounted = false;
      canceled = true;
      abortCtrl.abort();
    };
  }, dependencies);
}
