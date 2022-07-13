export type GlobalState<F> = {
  [K in keyof F]: F[K] | EntityState<F[K]>;
};

export type EntityState<T> = {
  data: T;
  init: boolean;
  isLoading: boolean;
  isRefetching: boolean;
  lastUpdated: Date;
};

export type Adapter = {};

export type EntityDefineOptions<T> = {
  key: string;
  initialState?: T;
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
  adapters?: Adapter[];
  queueOffline?: boolean;
  type?: string;
  updateState?: Function;
  reducer?: Function;
  includeInState?: boolean;
  listener?: Function;
  extensions?: any;
};
