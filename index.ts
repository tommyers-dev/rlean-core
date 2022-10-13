import { initialState } from "./src/initialState";
import Adapters from "./src/Adapters";
import { define } from "./src/define";
import { keys } from "./src/keys";
import useSave from "./src/hooks/useSave";
import useRequest from "./src/hooks/useRequest";
import useGet from "./src/hooks/useGet";
import usePatch from "./src/hooks/usePatch";
import usePost from "./src/hooks/usePost";
import usePut from "./src/hooks/usePut";
import useDelete from "./src/hooks/useDelete";
import useRemove from "./src/hooks/useRemove";
import useSyncState from "./src/hooks/useSyncState";
import RLean from "./src/RLean";
import { reducer } from "./src/reducer";
import { removeAll } from "./src/removeAll";
import { StateContext, StateProvider, useGlobalState } from "./src/State";
import Store from "./src/Store";

import { ApiAdapter, APIResponse } from "./src/types";

export {
  initialState,
  define,
  keys,
  Adapters,
  useRequest,
  usePatch,
  usePost,
  usePut,
  useDelete,
  RLean,
  reducer,
  useRemove,
  removeAll,
  StateContext,
  StateProvider,
  Store,
  useGet,
  useSave,
  useGlobalState,
  useSyncState,

  // types & interfaces
  ApiAdapter,
  APIResponse,
};