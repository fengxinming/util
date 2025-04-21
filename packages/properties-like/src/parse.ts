export interface ParseOptions {
  /** Specify separators used to split key-value pairs, default is [':', '='] */
  separators?: string[];
  /** Specify comment prefixes, default is ['#', '!'] */
  commentPrefixes?: string[];
  /** Callback function to handle key-value pairs */
  onData?: (key: string, value: string, lineno: number) => void;
  /** Callback function to handle comments */
  onComment?: (comment: string, lineno: number) => void;
}

const WHITE_SPACE = {
  ' ': true, // 空格符
  '\t': true, // 水平制表符
  '\f': true // 换页符
};

const LINE_FEED = {
  '\r': true, // 回车符
  '\n': true // 换行符
};

function noop() {}

export function parse(
  input: string,
  {
    separators = ['=', ':'],
    commentPrefixes = ['#', '!'],
    onData = noop,
    onComment = noop
  }: ParseOptions
) {
  /** 内容长度 */
  const limit = input.length;
  /** 游标 */
  let cursor = 0;
  /** 行号 */
  let lineno = 1;

  /** 读取到的key */
  let currentKey = '';
  /** 读取到的value */
  let currentValue = '';
  /** 是否存在分隔符 */
  let hasSep = false;

  /** 是否是转义字符 */
  let precedingBackslash = false;
  /** 是否跳过空白字符 */
  let skipWhiteSpace = true;
  /** 是否已处理过换行符 */
  let appendedLineBegin = false;
  /** 行注释 */
  let commentLine = '';

  let c: string;

  // 收集键值对
  const collectKVPairs = (c: string): void => {
    if (!hasSep) {
      currentKey += c;
    }
    else {
      currentValue += c;
    }
  };

  while (cursor < limit) {
    c = input[cursor++];

    if (skipWhiteSpace) {
      if (WHITE_SPACE.hasOwnProperty(c)) {
        continue;
      }
      if (!appendedLineBegin && LINE_FEED.hasOwnProperty(c)) {
        lineno++; // 记录行号用于报错提示
        continue;
      }
      skipWhiteSpace = false;
      appendedLineBegin = false;
    }

    // 如果当前字符是#或者是!，那么表示该行是一个注释行
    if (commentPrefixes.includes(c) && !precedingBackslash) {
      // 注释行, 快速消耗掉整行的注释
      // 当检查换行符时从高到低，这样当遇到换行符时，就可以直接跳出循环，而不需要再进行判断。
      commentLine += c;

      do {
        c = input[cursor++];
        if (c <= '\r' && LINE_FEED.hasOwnProperty(c)) {
          skipWhiteSpace = true;
          break;
        }
        commentLine += c;
      } while (cursor < limit);

      onComment(commentLine, lineno);
      commentLine = '';
      lineno++; // 记录行号用于报错提示
      continue;
    }

    // 非换行符
    if (!LINE_FEED.hasOwnProperty(c)) {
      // 如果当前字符是分隔符，并且不是转义字符，那么表示该行是一个键值对行
      if (separators.includes(c)) {
        // 转义中
        if (precedingBackslash) {
          collectKVPairs(c);
        }
        // 非转义中，并且没有分隔符
        else if (!hasSep) {
          hasSep = true;
        }
        // 非转义中，再次出现分隔符
        else {
          throw new Error(`Multiple separators '${c}' at [row: ${lineno}].`);
        }
        precedingBackslash = false;
      }
      // 空白字符
      else if (WHITE_SPACE.hasOwnProperty(c)) {
        // 转义中
        if (precedingBackslash) {
          collectKVPairs(c);
        }
        precedingBackslash = false;
      }
      // 转义字符
      else if (c === '\\') {
        // 转义中
        if (precedingBackslash) {
          collectKVPairs(c);
        }
        // 翻转转义标志
        precedingBackslash = !precedingBackslash;
      }
      // Unicode字符
      else if (c === 'u') {
        if (precedingBackslash) {
          let value = 0;
          for (let i = 0; i < 4; i++) {
            c = input[cursor++];
            switch (c) {
              case '0': case '1': case '2': case '3': case '4':
              case '5': case '6': case '7': case '8': case '9':
                value = (value << 4) + c.charCodeAt(0) - 48/* '0' */;
                break;
              case 'a': case 'b': case 'c': case 'd': case 'e': case 'f':
                value = (value << 4) + 10 + c.charCodeAt(0) - 97/* 'a' */;
                break;
              case 'A': case 'B': case 'C': case 'D': case 'E': case 'F':
                value = (value << 4) + 10 + c.charCodeAt(0) - 65/* 'A' */;
                break;
              default:
                throw new TypeError(`Malformed \\uxxxx encoding at [row: ${lineno}].`);
            }
          }
          // 将ascii码转为对应字母
          c = String.fromCharCode(value);
        }
        precedingBackslash = false;
        collectKVPairs(c);
      }
      else {
        precedingBackslash = false;
        collectKVPairs(c);
      }

      // 兼容最后一个不是换行符的情况
      if (cursor >= limit) {
        onData(currentKey, currentValue, lineno); // 进入回调处理
      }
    }
    // 换行
    else {
      // 转义符在结尾
      if (precedingBackslash) {
        appendedLineBegin = true;
        precedingBackslash = false;

        // 不处理后面的换行符
        if (c === '\r' && input[cursor] === '\n') {
          cursor++;
        }
      }
      else {
        hasSep = false;
        onData(currentKey, currentValue, lineno); // 进入回调处理
        currentKey = '';
        currentValue = '';
      }

      // 跳过下一行的空白字符
      skipWhiteSpace = true;
      lineno++; // 记录行号用于报错提示
    }
  }
}
