const plusChar = '+';

function replaceAll(
  str: string,
  substr: string,
  replacement: any,
): string {
  const substrLen = substr.length;
  const totalLen = str.length;

  let currentIndex = 0;

  // 初始化循环变量
  let result = '';
  let lastIndex = 0;

  while (currentIndex <= totalLen - substrLen) {
    const matchIndex = str.indexOf(substr, currentIndex);
    if (matchIndex === -1) {
      break;
    }

    // 拼接未匹配部分
    result += str.slice(lastIndex, matchIndex);
    result += replacement;

    // 更新索引
    lastIndex = matchIndex + substrLen;
    currentIndex = lastIndex;
  }

  return lastIndex === 0 ? str : result + str.slice(lastIndex);
}

/**
 * @hidden
 */
// eslint-disable-next-line max-params
export function _parse(
  input: string,
  start: number,
  length: number,
  sep: string,
  eq: string,
  decode: ((val: string) => string),
  callback: (key: string, value: string) => void
): void {
  const sepCode = sep.charCodeAt(0);
  const eqCode = eq.charCodeAt(0);

  let currentKey = '';
  let currentValue = '';

  let needDecodeKey = false;
  let needDecodeValue = false;

  let keyHasPlus = false;
  let valueHasPlus = false;

  let eqMatched = false;
  let cursor = start;

  const commitSegment = () => {
    if (keyHasPlus) {
      currentKey = replaceAll(currentKey, plusChar, ' ');
    }
    if (valueHasPlus) {
      currentValue = replaceAll(currentValue, plusChar, ' ');
    }
    if (needDecodeKey) {
      currentKey = decode(currentKey) || currentKey;
    }
    if (needDecodeValue) {
      currentValue = decode(currentValue) || currentValue;
    }
    callback(currentKey, currentValue);
  };

  for (let c = 0; start < length; start++) {
    c = input.charCodeAt(start);

    switch (c) {
      case sepCode: { // '&'
        if (eqMatched) {
          currentValue = input.substring(cursor, start);
        }
        else {
          currentKey = input.substring(cursor, start);
        }
        if (eqMatched || currentKey.length) {
          commitSegment();
        }
        // 重置变量
        currentKey = '';
        currentValue = '';
        needDecodeKey = false;
        needDecodeValue = false;
        keyHasPlus = false;
        valueHasPlus = false;
        eqMatched = false;
        cursor = start + 1;
        break;
      }
      case eqCode: // '='
        if (eqMatched) {
          needDecodeValue = true;
        }
        else {
          eqMatched = true;
          currentKey = input.substring(cursor, start);
          cursor = start + 1;
        }
        break;

      case 43: // '+'
        if (eqMatched) {
          valueHasPlus = true;
        }
        else {
          keyHasPlus = true;
        }
        break;

      case 37: // '%'
        if (eqMatched) {
          needDecodeValue = true;
        }
        else {
          needDecodeKey = true;
        }
        break;
      case 35: // 不解析hash
        length = start;
        break;
    }
  }
  if (eqMatched) {
    currentValue = input.substring(cursor, length);
    commitSegment();
  }
  else if (cursor < length) {
    currentKey = input.substring(cursor, length);
    commitSegment();
  }
}

