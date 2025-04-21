export interface DecamelizeOptions {
  separator?: string;
  preserveConsecutiveUppercase?: boolean;
}

function handlePreserveConsecutiveUppercase(decamelized: string, separator: string): string {
  // 处理单个大写字母小写化
  const singleUpperCaseRegex = /((?<![\p{Lu}\d])[\p{Lu}\d](?![\p{Lu}\d]))/gu;
  const stage1 = decamelized.replace(singleUpperCaseRegex, (match) => match.toLowerCase());

  // 分割连续大写序列
  const consecutiveUpperCaseRegex = /(\p{Lu}+)(\p{Lu}\p{Ll}+)/gu;
  return stage1.replace(consecutiveUpperCaseRegex, (_, group1, group2) =>
    `${group1}${separator}${group2.toLowerCase()}`
  );
}

export function decamelize(
  text: string,
  {
    separator = '_',
    preserveConsecutiveUppercase = false
  }: DecamelizeOptions = {}
): string {
  // 参数验证
  if (typeof text !== 'string' || typeof separator !== 'string') {
    throw new TypeError('The `text` and `separator` arguments should be of type `string`');
  }

  // 处理短字符串
  if (text.length < 2) {
    return preserveConsecutiveUppercase ? text : text.toLowerCase();
  }

  // 主要转换逻辑
  const replacement = `$1${separator}$2`;
  const basicDecamelized = text.replace(
    /([\p{Ll}\d])(\p{Lu})/gu,
    replacement
  );

  // 处理连续大写保留
  if (preserveConsecutiveUppercase) {
    return handlePreserveConsecutiveUppercase(basicDecamelized, separator);
  }

  // 标准处理流程
  return basicDecamelized
    .replace(
      /(\p{Lu})(\p{Lu}\p{Ll}+)/gu,
      replacement
    )
    .toLowerCase();
}
