import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState, useSyncState } from './';

export const StateContext = createContext();

const SyncState = () => {
  useSyncState();
  return null;
};

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState())}>
    <SyncState />
    {children}
  </StateContext.Provider>
);

export const useGlobalState = () => useContext(StateContext);
