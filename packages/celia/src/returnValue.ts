
function returnValue(): void;
function returnValue<T>(
  value: T
): T;

/**
 * 将指定值转换成一个函数并返回该值
 *
 * @param value 指定值
 * @returns 传入的值
 */
function returnValue(value?) {
  return value;
}

export default returnValue;
