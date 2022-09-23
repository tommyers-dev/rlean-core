export type ContextType<T> = [
  state: GlobalState<T>,
  dispatch: React.DispatchWithoutAction
];

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
  logToConsole?: boolean;
};

export type GlobalState<F> = {
  [K in keyof F as Uncapitalize<string & K>]: F[K] extends EntityDefineOptions<
    infer A
  >
    ? EntityState<A>
    : never;
};

export type EntityState<T> = {
  data: T;
  init: boolean;
  isLoading: boolean;
  isRefetching: boolean;
  lastUpdated: Date;
  error?: any;
  canceled?: boolean;
};

export enum API_METHOD {
  DELETE = "DELETE",
  GET = "GET",
  PATCH = "PATCH",
  POST = "POST",
  PUT = "PUT",
}

export type RequestPayload<T> = {
  path: string;
  query: Object;
  body?: T;
  signal?: any;
};

export type AdapterAPIPayload<T> = {
  url: string;
  method?: API_METHOD;
  data: T;
  headers: any;
  signal?: any;
};

export interface APIResponse<T> {
  data: T;
  status: number;
}

export interface ApiAdapter {
  get?: <R, T>(payload: AdapterAPIPayload<T>) => Promise<APIResponse<R>>;
  put?: <R, T>(payload: AdapterAPIPayload<T>) => Promise<APIResponse<R>>;
  post?: <R, T>(payload: AdapterAPIPayload<T>) => Promise<APIResponse<R>>;
  del?: <R, T>(payload: AdapterAPIPayload<T>) => Promise<APIResponse<R>>;
  patch?: <R, T>(payload: AdapterAPIPayload<T>) => Promise<APIResponse<R>>;
}

export type Adapter = {
  api: ApiAdapter;
};

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
};

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

export type GetOptions<Def extends EntityDefineOptions<any>> = Partial<
  Options<Def>
>;

export type SaveOptions<Def extends EntityDefineOptions<any>> = Partial<
  Options<Def>
>;

export type PutOptions<Def extends EntityDefineOptions<any>, Body> = Partial<
  Options<Def, Def extends EntityDefineOptions<infer F> ? F : unknown, Body>
>;

export type PostOptions<Def extends EntityDefineOptions<any>, Body> = Partial<
  Options<Def, Def extends EntityDefineOptions<infer F> ? F : unknown, Body>
>;

export type HookOptions<Def extends EntityDefineOptions<any>> = Partial<
  Options<Def>
> & {
  definition: Def;
};
