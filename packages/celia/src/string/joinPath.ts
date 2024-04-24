
/**
 * 拼接路径
 *
 * @example
 * ```js
 * joinPath();  // '.'
 * joinPath('https://www.taobao.com', 'path1');  // 'https://www.taobao.com/path1'
 * joinPath('https://www.taobao.com/', 'path1');  // 'https://www.taobao.com/path1'
 * joinPath('https://www.taobao.com/', '/path1');  // 'https://www.taobao.com/path1'
 * joinPath('https://www.taobao.com', null, '/path1');  // 'https://www.taobao.com/path1'
 * joinPath('https://www.taobao.com', null, undefined);  // 'https://www.taobao.com'
 * ```
 *
 * @param basePath 路径
 * @param args     需要拼接的路径片段
 * @returns        拼接后的路径
 */
function joinPath<T>(basePath: string, ...args: T[]): string;

/**
 * 拼接路径
 *
 * @example
 * ```js
 * joinPath();  // '.'
 * joinPath('https://www.taobao.com', 'path1');  // 'https://www.taobao.com/path1'
 * joinPath('https://www.taobao.com/', 'path1');  // 'https://www.taobao.com/path1'
 * joinPath('https://www.taobao.com/', '/path1');  // 'https://www.taobao.com/path1'
 * joinPath('https://www.taobao.com', null, '/path1');  // 'https://www.taobao.com/path1'
 * joinPath('https://www.taobao.com', null, undefined);  // 'https://www.taobao.com'
 * ```
 *
 * @param basePath 路径
 * @param args     需要拼接的路径片段
 * @returns        拼接后的路径
 */
function joinPath(basePath: string, ...args: any[]): string;

function joinPath(basePath) {
  const len = arguments.length;
  if (len < 1) {
    return '.';
  }
  let str = '';
  for (let i = 1; i < len; i++) {
    const arg = arguments[i];
    if (arg) {
      str += `/${arg}`;
    }
  }
  if (str) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    basePath = basePath.replace(/\/+$/, '') + str.replace(/\/+/g, '/');
  }
  return basePath;
}

export default joinPath;
