declare module '@rlean/utils' {
  export const hasValue: (obj: any, key: string) => boolean;
  export const getValue: (obj: object, path: string, defaultValue?: any) => any;
  /*
  export const getValue: <T, K extends keyof T>(
    obj: T,
    key: K,
    defValue?: T[K]
  ) => T[K];
  */
  export const deepCopy: (obj: any) => any;
  export class Compare {
    static deepCompare: any;
  }
}
