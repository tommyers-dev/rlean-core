import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState, useSyncState } from '.';
import { useProcessQueue } from './_internal/hooks';

export const StateContext = createContext();

const SyncState = () => {
  useSyncState();
  return null;
};

const ProcessQueue = () => {
  useProcessQueue();
  return null;
};

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState())}>
    <ProcessQueue />
    <SyncState />
    {children}
  </StateContext.Provider>
);

export const useGlobalState = () => useContext(StateContext);
