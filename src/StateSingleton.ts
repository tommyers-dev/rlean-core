import { initialState } from "./initialState";
import { reducer } from "./reducer";
import create, { UseBoundStore, StoreApi } from "zustand";
import { GlobalState } from "./types";
import { getValue } from "@rlean/utils";
import RLean from "./RLean";

export class StateSingleton<T = {}> {
  static instance: StateSingleton;

  public state: UseBoundStore<
    StoreApi<{ global: GlobalState<T>; dispatch: any }>
  >;

  private constructor() {
    const configEntities = getValue(RLean, "config.entities", {}) as any;

    this.state = create<{
      global: GlobalState<typeof configEntities>;
      dispatch: any;
    }>((set) => ({
      global: initialState(configEntities),
      dispatch: (args: any) => {
        set((state) => {
          const nextState = reducer(state, args) as any;
          // The next state contains also the rest of the entities' state, but
          // set as undefined
          Object.keys(nextState).forEach((key) => {
            if (nextState[key] === undefined) {
              delete nextState[key];
            }
          });

          return {
            global: { ...state.global, ...nextState },
          };
        });
      },
    }));
  }

  public static getInstance<T>(): StateSingleton<T> {
    if (!StateSingleton.instance) {
      StateSingleton.instance = new StateSingleton();
    }
    return StateSingleton.instance as {
      state: UseBoundStore<StoreApi<{ global: GlobalState<T>; dispatch: any }>>;
    };
  }
}
