import { useEffect } from 'react';
import { useStateValue, Store } from '../core';
import { inspectClass, Compare, deepCopy } from '../helpers';

// TODO: Remove function or convert into a method
export default async function useSet(model, stateValue, newValue, dependencies = [], type = null) {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    async function setData() {
      const o = inspectClass(model);
      const persistData = model.persistData;

      if (newValue === undefined) return;

      const newValueClone = deepCopy(newValue);
      const isEqual = Compare.deepCompare(stateValue, newValueClone).isEqual;

      if (!isEqual) {
        await dispatch(await model.updateState(newValueClone, type));

        if (persistData) {
          await Store.set(o.ClassName, newValueClone);
        }
      }
    }

    setData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
