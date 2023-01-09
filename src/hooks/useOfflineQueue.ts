import { useRef } from "react";
import { getValue } from "@rlean/utils";
import { useSave } from "../..";
import * as entities from "../_internal/entities";
import RLean from "../RLean";

export default function useOfflineQueue() {
  const [save] = useSave();
  const zustand = getValue(RLean, "state", {}) as typeof RLean.state;
  const rLean_OfflineQueue = zustand((s: any) => s.global?.rLean_OfflineQueue);
  const offlineQueueRef = useRef(rLean_OfflineQueue);

  const enqueue = (
    params: any,
    rlean_offlineQueueRef: typeof offlineQueueRef
  ) => {
    const { method, options, callback } = params;
    const data = getValue(rlean_offlineQueueRef, "data", []);
    data.push({ method, options, callback });

    const stateValue = { data };

    save({ entity: entities.RLean_OfflineQueue, value: stateValue, add: true });
  };

  return [
    (params: any) => {
      enqueue(params, offlineQueueRef);
    },
  ];
}
