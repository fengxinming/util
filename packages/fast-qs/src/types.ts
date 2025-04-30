export interface ParseOptions {
  sep?: string;
  eq?: string;
  decodeURIComponent?: (str: string) => string;
  filter?: (key: string, val: any) => any;
  start?: number | string;
}

export interface StringifyOptions {
  sep?: string;
  eq?: string;
  encodeURIComponent?: (str: string) => string;
  filter?: (key: string, val: any) => any;
}

export interface AppendOptions {
  sep?: string;
  eq?: string;
  decodeURIComponent?: (str: string) => string;
  encodeURIComponent?: (str: string) => string;
  filter?: (key: string, val: any) => any;
}
