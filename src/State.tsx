import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, useSyncState, RLean } from "..";
import { useProcessQueue } from "./_internal/hooks";
import { GlobalState } from "./types";
import { getValue } from "@rlean/utils";

const entityDefinitions = getValue(RLean, "config.entities", {});

console.log({ entityDefinitions });

type ContextType = [
  state: GlobalState<any>,
  dispatch: React.DispatchWithoutAction
];

export const StateContext = createContext<ContextType>({} as any);

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

export const StateProvider = ({ children }: StateProviderProps) => (
  <StateContext.Provider
    value={useReducer(reducer, initialState()) as ContextType}
  >
    <ProcessQueue />
    <SyncState />
    {children}
  </StateContext.Provider>
);

export const useGlobalState = () => useContext(StateContext);
