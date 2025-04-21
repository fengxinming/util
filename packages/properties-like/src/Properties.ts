import { parse } from './parse';

interface PropertiesOptions {
  /** Default properties */
  defaults?: Properties | Map<string, string> | null;
  /** Variable regular expression */
  variableRegex?: RegExp | null;
  /** Line feed for stringify (default: \n) */
  lineFeed?: string;
  /** Specify separators used to split key-value pairs, default is [':', '='] */
  separators?: string[];
  /** Specify comment prefixes, default is ['#', '!'] */
  commentPrefixes?: string[];
}

export interface PropertiesConfig extends PropertiesOptions {
  props?: Map<string, string>;
  raw?: Map<string, string>;
}

const ESCAPE_MAP: Record<string, string> = {
  t: '\t',
  r: '\r',
  n: '\n',
  f: '\f',
  '\\': '\\',
  ' ': '\\ '
};

function saveConvert(
  theString: string,
  separators: string[],
  escapeUnicode: boolean
): string {
  let out = '';
  const len = theString.length;
  for (let x = 0; x < len; x++) {
    const aChar = theString[x];
    let aCharCode;
    const c = ESCAPE_MAP[aChar];
    if (c !== void 0) {
      out += '\\';
      out += c;
    }
    else if (separators.includes(aChar)) {
      out += '\\';
      out += aChar;
    }
    else if (escapeUnicode && (((aCharCode = aChar.charCodeAt(0)) < 0x0020) || (aCharCode > 0x007e))) {
      out += `\\u${aCharCode.toString(16).padStart(4, '0')}`;
    }
    else {
      out += aChar;
    }
  }
  return out;
}

const RAW_TYPE_COMMENT = 'COMMENT';
const RAW_TYPE_PROPERTY = 'PROPERTY';
const RAW_TYPE_NEW_PROPERTY = 'NEW_PROPERTY';

const falseLike = {
  false: true,
  null: true,
  undefined: true,
  0: true,
  NaN: true,
  '': true
};

export class Properties extends Map<string, string> {
  /**
   * @deprecated Use `setProperty()` instead
   */
  set!: (key: string, value: string) => this;
  /**
   * @deprecated Use `getProperty()` instead
   */
  get!: (key: string) => string | undefined;

  private readonly raw: Map<string, string>;
  private readonly options: Required<PropertiesOptions>;

  constructor({
    defaults,
    variableRegex,
    lineFeed,
    separators,
    commentPrefixes,
    props,
    raw
  }: PropertiesConfig = {}) {
    super(props);
    this.options = {
      defaults: defaults || null,
      variableRegex: variableRegex || /\$\{\s*([^}]+)\s*\}/g,
      lineFeed: lineFeed || '\n',
      separators: separators || ['=', ':'],
      commentPrefixes: commentPrefixes || ['#', '!']
    };
    const _raw = new Map<string, string>();
    if (raw) {
      for (const [key, value] of raw) {
        _raw.set(key, value);
      }
    }
    this.raw = _raw;
  }

  get [Symbol.toStringTag]() {
    return this.toString();
  }

  setProperty(key: string, value: string): this {
    const { raw } = this;
    this.set(key, value);
    raw.set(key, raw.has(key) ? RAW_TYPE_PROPERTY : RAW_TYPE_NEW_PROPERTY);
    return this;
  }

  getProperty<T = string>(key: string, defaultValue?: T): string | undefined | T {
    const { options: { defaults, variableRegex } } = this;
    let value = this.get(key);
    if (value === void 0) {
      if (defaults === null) {
        return defaultValue;
      }
      value = defaults.get(key);
      if (value === void 0) {
        return defaultValue;
      }
    }
    return variableRegex
      ? value.replace(variableRegex, (match, variable) => {
        const val = this.get(variable);
        return val !== void 0 ? val : '';
      })
      : value;
  }

  getNumber(key: string, defaultValue?: number): number {
    const value = parseFloat(this.getProperty(key) as string);
    return Number.isNaN(value)
      ? defaultValue === void 0
        ? NaN
        : defaultValue
      : value;
  }

  getBoolean(key: string, defaultValue?: boolean): boolean {
    const value = this.getProperty(key);
    return value === void 0
      ? defaultValue === void 0
        ? false
        : defaultValue
      : !falseLike[value];
  }

  remove(key: string, specifiedValue?: string): boolean {
    let result = false;
    const { raw } = this;
    if (specifiedValue === void 0) {
      result = this.delete(key);
    }
    else {
      for (const [k, v] of this) {
        if (k === key && v === specifiedValue) {
          result = this.delete(k);
          break;
        }
      }
    }
    if (result && raw.get(key) === RAW_TYPE_NEW_PROPERTY) {
      raw.delete(key);
    }
    return result;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  replace(key: string, oldValue: string, newValue?: string): boolean {
    if (newValue === void 0) {
      if (this.has(key)) {
        this.set(key, oldValue);
        return true;
      }
    }
    else if (this.get(key) === oldValue) {
      this.set(key, newValue);
      return true;
    }
    return false;
  }

  clone(): Properties {
    return new Properties(Object.assign({
      props: this,
      raw: this.raw
    }, this.options));
  }

  parse(content: string, clear?: boolean): void {
    const { raw } = this;
    if (clear) {
      this.clear();
      raw.clear();
    }
    parse(content, {
      onData: (key, value) => {
        raw.set(key, RAW_TYPE_PROPERTY);
        this.set(key, value);
      },
      onComment(comment) {
        raw.set(comment, RAW_TYPE_COMMENT);
      }
    });
  }

  stringify(comments?: string, escapeUnicode?: boolean): string {
    if (typeof comments === 'boolean') {
      escapeUnicode = comments;
      comments = void 0;
    }
    escapeUnicode = escapeUnicode !== false;
    let out = comments || '';
    const { raw, options: { lineFeed, separators } } = this;
    if (out.length > 0) {
      out += lineFeed;
    }
    for (const [key, rawType] of raw) {
      out += rawType === RAW_TYPE_COMMENT
        ? `${key}${lineFeed}`
        : `${saveConvert(
          key, separators, escapeUnicode
        )}=${saveConvert(
          this.get(key) || '', separators, escapeUnicode
        )}${lineFeed}`;
    }
    return out;
  }

  toString(): string {
    return '[object Properties]';
  }
}
