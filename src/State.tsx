// import React, { createContext, useContext, useReducer } from "react";
import * as React from "react";
import { reducer, initialState, useSyncState, RLean } from "..";
import { useProcessQueue } from "./_internal/hooks";
import { GlobalState } from "./types";

type ContextType<T> = [
  // state: GlobalState<typeof entityDefinitions>,
  state: GlobalState<T>,
  dispatch: React.DispatchWithoutAction
];

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

export const useGlobalState = <T,>() =>
  React.useContext(StateContext as React.Context<ContextType<T>>);
