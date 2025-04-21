// 类型定义
export interface CamelizeOptions {
  pascalCase?: boolean;
  preserveConsecutiveUppercase?: boolean;
  locale?: string | string[] | boolean;
}

// Unicode 正则表达式
const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

// 复合正则表达式
const LEADING_SEPARATORS = new RegExp(`^${SEPARATORS.source}`);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp(`\\d+${IDENTIFIER.source}`, 'gu');

// 保留驼峰格式处理
function preserveCamelize(
  string: string,
  toLowerCase: (s: string) => string,
  toUpperCase: (s: string) => string,
  preserveConsecutiveUppercase: boolean
): string {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;

  for (let index = 0; index < string.length; index++) {
    const character = string[index];
    const isLastLastCharPreserved = index > 2 ? string[index - 3] === '-' : true;

    if (isLastCharLower && UPPERCASE.test(character)) {
      string = `${string.slice(0, index)}-${string.slice(index)}`;
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      index++;
    }
    else if (
      isLastCharUpper
      && isLastLastCharUpper
      && LOWERCASE.test(character)
      && (!isLastLastCharPreserved || preserveConsecutiveUppercase)
    ) {
      string = `${string.slice(0, index - 1)}-${string.slice(index - 1)}`;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    }
    else {
      isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
    }
  }

  return string;
}

// 保留连续大写处理
function preserveConsecutiveUppercase(
  input: string,
  toLowerCase: (s: string) => string
): string {
  LEADING_CAPITAL.lastIndex = 0;
  return input.replaceAll(LEADING_CAPITAL, (match) => toLowerCase(match));
}

// 后处理流程
function postProcess(
  input: string,
  toUpperCase: (s: string) => string
): string {
  SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
  NUMBERS_AND_IDENTIFIER.lastIndex = 0;

  return input
    .replaceAll(NUMBERS_AND_IDENTIFIER, (match, _, offset: number) =>
      (['_', '-'].includes(input.charAt(offset + match.length)) ? match : toUpperCase(match))
    )
    .replaceAll(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier));
}

// 主函数
export function camelize(
  input: string | string[],
  options: Partial<CamelizeOptions> = {}
): string {
  // 参数验证
  if (!(typeof input === 'string' || Array.isArray(input))) {
    throw new TypeError('Expected the input to be `string | string[]`');
  }

  // 合并选项
  const mergedOptions = Object.assign({
    pascalCase: false,
    preserveConsecutiveUppercase: false
  }, options) as Required<CamelizeOptions>;

  // 处理数组输入
  let processedInput = Array.isArray(input)
    ? input
      .map((x) => x.trim())
      .filter((x) => x.length)
      .join('-')
    : input.trim();

  if (processedInput.length === 0) {
    return '';
  }

  // 本地化处理方法
  const toLowerCase = mergedOptions.locale === false
    ? (s: string) => s.toLowerCase()
    : (s: string) => s.toLocaleLowerCase(mergedOptions.locale as string[]);

  const toUpperCase = mergedOptions.locale === false
    ? (s: string) => s.toUpperCase()
    : (s: string) => s.toLocaleUpperCase(mergedOptions.locale as string[]);

  // 单字符处理
  if (processedInput.length === 1) {
    return SEPARATORS.test(processedInput)
      ? ''
      : mergedOptions.pascalCase
        ? toUpperCase(processedInput)
        : toLowerCase(processedInput);
  }

  // 处理包含大写的情况
  const hasUpperCase = processedInput !== toLowerCase(processedInput);
  if (hasUpperCase) {
    processedInput = preserveCamelize(
      processedInput,
      toLowerCase,
      toUpperCase,
      mergedOptions.preserveConsecutiveUppercase
    );
  }

  // 预处理
  processedInput = processedInput.replace(LEADING_SEPARATORS, '');
  if (mergedOptions.preserveConsecutiveUppercase) {
    processedInput = preserveConsecutiveUppercase(processedInput, toLowerCase);
  }
  else {
    processedInput = toLowerCase(processedInput);
  }

  // 帕斯卡式处理
  if (mergedOptions.pascalCase) {
    processedInput = toUpperCase(processedInput.charAt(0)) + processedInput.slice(1);
  }

  // 后处理流程
  return postProcess(processedInput, toUpperCase);
}
