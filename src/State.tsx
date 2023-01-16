// import React, { createContext, useContext, useReducer } from "react";
import * as React from "react";
import { reducer, initialState, useSyncState } from ".";
import { useProcessQueue } from "./_internal/hooks";
import { ContextType } from "./types";

export const StateContext = React.createContext([] as any);

const SyncState = (): any => {
  useSyncState();
  return null;
};

const ProcessQueue = (): any => {
  useProcessQueue();
  return null;
};

type StateProviderProps = {
  children: JSX.Element;
};

/**
 * StateProvider<T>
 * The generic must be the `typeof` the entities config object
 */
export function StateProvider<T>({ children }: StateProviderProps) {
  return (
    <StateContext.Provider
      value={React.useReducer(reducer, initialState()) as ContextType<T>}
    >
      <ProcessQueue />
      <SyncState />
      {children}
    </StateContext.Provider>
  );
}

/**
 * useGlobalState<T>
 * The generic must be the `typeof` the entities config object
 */
export const useGlobalState = <T,>() =>
  React.useContext(StateContext as React.Context<ContextType<T>>);
