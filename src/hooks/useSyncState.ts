import { useEffect, useCallback, useRef } from "react";
import { getValue, Compare } from "@rlean/utils";
import { RLean, useGlobalState, Store } from "../..";
import { convertToType } from "../_internal";
import * as entities from "../_internal/entities";

export default function useSyncState() {
  const mountedRef = useRef(true);
  const [{ ...state }, dispatch] = useGlobalState();

  const syncState = useCallback(() => {
    const entityDefinitions: typeof entities = getValue(
      RLean,
      "config.entities",
      {}
    );
    const objects = Object.values(entityDefinitions);

    objects.map(async (definition) => {
      if (!mountedRef.current) {
        return null;
      }

      if (definition.persistData && definition.includeInState) {
        const key = definition.key;
        const stateValue = state[key];
        const storedValue = await Store.get(definition);

        if (
          storedValue &&
          !Compare.deepCompare(storedValue, stateValue).isEqual
        ) {
          const type = `SET_${convertToType(definition.key)}`;

          // @todo dispatch doesn't receive any parameters (?)
          (dispatch as any)(definition.updateState(storedValue, type));
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