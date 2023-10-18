import { initialState } from "./initialState";
import { reducer } from "./reducer";
import { create, UseBoundStore, StoreApi } from "zustand";
import { GlobalState } from "./types";
import { getValue } from "@rlean/utils";
import RLean from "./RLean";

export class StateSingleton<T = {}> {
  static instance: StateSingleton;

  public zustand: UseBoundStore<
    StoreApi<{ state: GlobalState<T>; dispatch: any }>
  >;

  public select: UseBoundStore<StoreApi<{ state: GlobalState<T> }>>;

  private constructor() {
    const configEntities = getValue(RLean, "config.entities", {}) as any;

    this.zustand = create<{
      state: GlobalState<typeof configEntities>;
      dispatch: any;
    }>((set) => ({
      state: initialState(configEntities),
      dispatch: (args: any) => {
        set((zustandState) => {
          const nextState = reducer(zustandState, args) as any;

          // nextState contains also the rest of the entities' state, but
          // undefined, so we delete them
          Object.keys(nextState).forEach((key) => {
            if (nextState[key] === undefined) {
              delete nextState[key];
            }
          });

          return {
            state: { ...zustandState.state, ...nextState },
          };
        });
      },
    }));

    this.select = this.zustand as any;
  }

  public static getInstance<T>(): StateSingleton<T> {
    if (!StateSingleton.instance) {
      StateSingleton.instance = new StateSingleton();
    }

    return StateSingleton.instance as {
      zustand: UseBoundStore<
        StoreApi<{ state: GlobalState<T>; dispatch: any }>
      >;
      select: UseBoundStore<StoreApi<{ state: GlobalState<T> }>>;
    };
  }
}

export const RLeanState = <T>() => ({
  select: StateSingleton.getInstance<T>().select,
});
