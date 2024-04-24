/** @hidden */
function checkOwnProperty(object: any, key: string): boolean {
  // eslint-disable-next-line no-prototype-builtins
  return object.hasOwnProperty(key);
}

/** @hidden */
function checkOwnProperty2(object: any, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(object, key);
}

/** @hidden */
export default function _hasOwn(object: any): (object: any, key: string) => boolean {
  return object.hasOwnProperty ? checkOwnProperty : checkOwnProperty2;
}
