import _forOwn from '../_/_forOwn';

function forArray(
  classes: any[],
  args: any,
  len: number
) {
  for (let i = 0; i < len; i++) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    join(classes, args[i]);
  }
  return classes;
}

function join(
  classes: any[],
  arg: any
) {
  if (arg) {
    const argType = typeof arg;
    if (argType === 'string' || argType === 'number') {
      classes[classes.length] = arg;
    }
    else if (Array.isArray(arg)) {
      forArray(classes, arg, arg.length);
    }
    else if (argType === 'object') {
      let i = classes.length;
      _forOwn(arg, (value, key) => {
        if (value) {
          classes[i++] = key;
        }
      });
    }
  }
  return classes;
}

/**
 * 拼接 `className`
 *
 * @example
 * ```js
 * joinClassName('one', 'two', 'three');  // 'one two three'
 *
 * joinClassName(['one', 'two', 'three']);  // 'one two three'
 *
 * joinClassName({ one: true, two: true, three: false });  // 'one two'
 *
 * joinClassName('one', 'two', { four: true, three: false });  // 'one two four'
 *
 * joinClassName('one', { two: true, three: false },{ four: 'four', five: true }, 6, {});
 * // 'one two four five 6');
 *
 * joinClassName(['one', 'two'], ['three'], ['four', ['five']], [{ six: true }, { seven: false }]);
 * // 'one two three four five six'
 * ```
 *
 * @param args `className`列表
 * @returns 拼接后的 `className`
 */
function joinClassName(...args: any[]): string;

function joinClassName() {
  const len = arguments.length;
  switch (len) {
    case 0:
      return '';
    case 1:
      return join([], arguments[0]).join(' ');
    default:
      return forArray([], arguments, len).join(' ');
  }
}

export default joinClassName;
