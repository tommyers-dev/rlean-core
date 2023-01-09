import { GlobalState, RLeanConfig } from "./types";
import create, { UseBoundStore, StoreApi } from "zustand";
import { initialState } from "./initialState";
import { reducer } from "./reducer";
// import { getValue } from "@rlean/utils";
// import { RLean_OfflineQueue } from "./_internal/entities";

// export class StateSingleton {
//   static instance: StateSingleton;

//   public state: UseBoundStore<
//     StoreApi<{ global: GlobalState; dispatch: any }>
//   >

//   private constructor() {
//     this.state = create<{ global: GlobalState<T>; dispatch: any }>((set) => ({
//       global: initialState(config.entities),
//       dispatch: (args: any) => {
//         set((state) => {
//           const nextState = reducer(state, args) as any;
//           // The next state contains also the rest of the entities' state, but
//           // set as undefined
//           Object.keys(nextState).forEach((key) => {
//             if (nextState[key] === undefined) {
//               delete nextState[key];
//             }
//           });

//           return {
//             global: { ...state.global, ...nextState },
//           };
//         });
//       },
//     }));
//   }

//   public static getInstance<T>(entities?: T): StateSingleton {
//     if (!StateSingleton.instance) {
//         StateSingleton.instance = new StateSingleton(entities);
//     }
//     return StateSingleton.instance as {state: UseBoundStore<
//       StoreApi<{ global: GlobalState<T>; dispatch: any }>
//     >};
// }

// }

/**
 * RLean Class
 * Contains the configuration object. Type is inferred using the config object.
 */
class RLeanClass<T> {
  public definition: any;
  public config: RLeanConfig<T>;
  public state: UseBoundStore<
    StoreApi<{ global: GlobalState<T>; dispatch: any }>
  >;

  async init(config: RLeanConfig<T>) {
    // const entities = getValue(config, "entities", {});

    // Here, the offlinequeue is added as entity but without a key
    // it could be added expanding the T with an specific RleanOfflineQueue
    /*
    const entities = config.entities ?? {};
    config.entities = { ...entities, RLean_OfflineQueue };
    */

    this.state = create<{ global: GlobalState<T>; dispatch: any }>((set) => ({
      global: initialState(config.entities),
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

    this.config = config;

    return this;
  }

  setToken(token: string) {
    if (token) {
      this.config.api.token = token;
    }
  }
}

export default new RLeanClass();
