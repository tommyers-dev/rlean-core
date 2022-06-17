import React, { createContext, useContext, useReducer } from 'react';
import { getValue } from '@rlean/utils';
import { RLean } from '.';

const createHook = (hookName: string) => {
  const EntityContext = createContext();
  const { [hookName]: useContext } = {
    [hookName]: () => {
      const context = useContext(EntityContext);
      return context;
    },
  };

  return [useContext, EntityContext];
};

export const EntityContexts = ({ children }) => {
  const entityDefinitions = getValue(RLean, 'config.entities', {});
  const objects = Object.values(entityDefinitions);
  const objectsLength = objects.length;
  let entityHooks = {};
  let contexts = children;

  for (let i = 0; i < objectsLength; i += 1) {
    const entity = objects[i].prototype ? objects[i].prototype : objects[i];
    const reducer = entity.reducer;
    const initialState = entity.initialState;
    const key = entity.key;
    const keyFormatted = key.charAt(0).toUpperCase() + key.slice(1);
    const hookName = `use${keyFormatted}`;
    const [hook, EntityContext] = createHook(hookName);

    contexts = (
      <EntityContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </EntityContext.Provider>
    );

    console.log('hook', hook);

    Object.assign(entityHooks, { [hookName]: hook });
    // entityHooks.push(hook);
  }

  RLean.hooks = entityHooks;

  return contexts;
};
