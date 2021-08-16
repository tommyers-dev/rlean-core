import { useRef } from 'react';
import { getValue } from '@rlean/utils';
import { useSave, useGlobalState } from '../';
import { RLean_OfflineQueue } from '../_internal/entities';

export default function useOfflineQueue() {
  const [save] = useSave();
  const [{ rlean_offlineQueue }] = useGlobalState();
  const rlean_offlineQueueRef = useRef(rlean_offlineQueue);

  const enqueue = (params, rlean_offlineQueueRef) => {
    const { method, options, callback } = params;
    const data = getValue(rlean_offlineQueueRef, 'data', []);
    data.push({ method, options, callback });

    const stateValue = { data };

    save({ entity: RLean_OfflineQueue, value: stateValue, add: true });
  };

  return [
    params => {
      enqueue(params, rlean_offlineQueueRef);
    },
  ];
}
