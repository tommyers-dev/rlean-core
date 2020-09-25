import { useEffect, useCallback, useRef } from 'react';
import { getValue, Compare } from '@rlean/utils';
import { RLean, useGlobalState, Store } from './';
import { convertToType } from './_internal';

export default function useSyncState() {
  const mountedRef = useRef(true);
  const [{ ...state }, dispatch] = useGlobalState();

  const syncState = useCallback(() => {
    const models = getValue(RLean, 'config.models', {});
    const objects = Object.values(models);

    objects.map(async model => {
      if (!mountedRef.current) {
        return null;
      }

      if (model.persistData) {
        const key = model.key;
        const stateValue = state[key];
        const storedValue = await Store.get(model);

        if (
          storedValue &&
          !Compare.deepCompare(storedValue, stateValue).isEqual
        ) {
          const type = convertToType(model.key);

          dispatch(model.updateState(storedValue, type));
        }
      }
    });
  }, [mountedRef]);

  useEffect(() => {
    syncState();

    return () => {
      mountedRef.current = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
