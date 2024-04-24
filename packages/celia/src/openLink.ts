
import _forOwn from './_/_forOwn';

/**
 * 打开一个链接
 *
 * @example
 * ```js
 * openLink('https://iot.console.aliyun.com/');
 * openLink('https://iot.console.aliyun.com/');
 * ```
 *
 * @param url
 * @param attrs
 */
export default function openLink(
  url: string,
  attrs: Record<string, string> = { target: '_blank' }
): void {
  const link = document.body.appendChild(document.createElement('a'));
  const span = link.appendChild(document.createElement('span'));
  link.setAttribute('href', url);
  _forOwn(attrs, (val, key) => {
    link.setAttribute(key, val);
  });
  span.click();
  setTimeout(() => {
    document.body.removeChild(link);
  });
}
