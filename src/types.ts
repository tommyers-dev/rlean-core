/**
 * Main context type
 */
export type ContextType<T> = [
  state: GlobalState<T>,
  dispatch: React.DispatchWithoutAction
];

/**
 * Configuration type for RLean
 * Type this using the entities object
 */
export type RLeanConfig<F> = {
  entities: { [K in keyof F]: F[K] };
  utilities?: any;
  api: {
    headers: {
      Authorization?: string;
    };
    baseURL: string;
    adapter?: any;
    token?: string;
  };
  storage: {
    adapter?: any;
  };
  logToConsole?: boolean;
};

/**
 * Global State
 * Contains all entities
 * The generic is the object containing all entities' definitions. Infers the
 * entity data type and wraps it with EntityState
 */
export type GlobalState<F> = {
  [K in keyof F as Uncapitalize<string & K>]: F[K] extends EntityDefineOptions<
    infer A
  >
    ? EntityState<A>
    : never;
};

/**
 * Entity State Object, contains data and other useful attributes
 * The generic is used directly for the data attribute
 */
export type EntityState<T> = {
  data: T;
  init: boolean;
  isLoading: boolean;
  isRefetching: boolean;
  lastUpdated: Date;
  error?: any;
  canceled?: boolean;
};

/**
 * API methods
 */
export enum API_METHOD {
  DELETE = "DELETE",
  GET = "GET",
  PATCH = "PATCH",
  POST = "POST",
  PUT = "PUT",
}

/**
 * Request object type
 * The generic is used directly for the body attribute
 */
export type RequestPayload<T> = {
  path: string;
  query?: Object;
  body?: T;
  signal?: any;
};

/**
 * Payload object for the Adapter
 * The generic is used directly for the data attribute
 */
export type AdapterAPIPayload<T> = {
  url: string;
  method?: API_METHOD;
  data: T;
  headers: any;
  signal?: any;
};

/**
 * Basic API response object
 * The generic is used directly for the data attribute
 */
export interface APIResponse<T> {
  data: T;
  status: number;
}

/**
 * API Adapter object
 * All types are inferred based on the payload and the response
 */
export interface ApiAdapter {
  get?: <R, T>(payload: AdapterAPIPayload<T>) => Promise<APIResponse<R>>;
  put?: <R, T>(payload: AdapterAPIPayload<T>) => Promise<APIResponse<R>>;
  post?: <R, T>(payload: AdapterAPIPayload<T>) => Promise<APIResponse<R>>;
  del?: <R, T>(payload: AdapterAPIPayload<T>) => Promise<APIResponse<R>>;
  patch?: <R, T>(payload: AdapterAPIPayload<T>) => Promise<APIResponse<R>>;
}

/**
 * Adapter object
 */
export type Adapter = {
  api?: ApiAdapter;
  storage?: any;
};

/**
 * Adapter map
 */
export type AdapterMap = { storage?: any; api?: ApiAdapter; logger?: any };

/**
 * Action type
 * @todo The key should be changed
 */
export type ActionType = { type: string; [key: string]: any };

/**
 * Entity definition object
 * The generic type is used to define the initial state and to later be used in
 * the GlobalState type
 */
export type EntityDefineOptions<T> = {
  key: string;
  initialState?: Partial<T>;
  getURL?: string;
  postURL?: string;
  putURL?: string;
  patchURL?: string;
  deleteURL?: string;
  nullableParams?: boolean;
  persistData?: boolean;
  preferStore?: boolean;
  progressiveLoading?: boolean;
  syncInterval?: number;
  syncAfterTimeElapsed?: boolean;
  apiUriOverride?: string;
  adapters?: Adapter;
  queueOffline?: boolean;
  type?: string;
  updateState?: Function;
  reducer?: Function;
  includeInState?: boolean;
  listener?: Function;
  extensions?: any;
  callback?: Function;
};

/**
 * Options type
 * Used to define the options for each API Method.
 * The generics are inferred from the EntityDefineOptions<T>
 */
export interface Options<
  Def,
  F = Def extends EntityDefineOptions<infer F> ? F : unknown,
  Req = F extends Array<infer O> ? O : F
> {
  params: Object;
  value: Partial<
    // EntityState<Def extends EntityDefineOptions<infer F> ? F : unknown>
    EntityState<F>
  >;
  type: string;
  body: Req; //F extends Array<infer O> ? O : F;
  save: boolean;
  entity: Def;
  key: string;
  add?: any;
}

/**
 * GetOptions type
 */
export type GetOptions<Def extends EntityDefineOptions<any>> = Partial<
  Options<Def>
>;

/**
 * SaveOptions type
 */
export type SaveOptions<Def extends EntityDefineOptions<any>> = Partial<
  Options<Def>
>;

/**
 * PutOptions type
 */
export type PutOptions<Def extends EntityDefineOptions<any>, Body> = Partial<
  Options<Def, Def extends EntityDefineOptions<infer F> ? F : unknown, Body>
>;

/**
 * PostOptions type
 */
export type PostOptions<Def extends EntityDefineOptions<any>, Body> = Partial<
  Options<Def, Def extends EntityDefineOptions<infer F> ? F : unknown, Body>
>;

/**
 * DeleteOptions type
 */
export type DeleteOptions<Def extends EntityDefineOptions<any>, Body> = Partial<
  Options<Def, Def extends EntityDefineOptions<infer F> ? F : unknown, Body>
>;

/**
 * PatchOptions type
 */
export type PatchOptions<Def extends EntityDefineOptions<any>, Body> = Partial<
  Options<Def, Def extends EntityDefineOptions<infer F> ? F : unknown, Body>
>;

export type HookOptions<Def extends EntityDefineOptions<any>> = Partial<
  Options<Def>
> & {
  definition: Def;
};
