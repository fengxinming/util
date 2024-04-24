
/**
 * @hidden
 */
export default function _arrayRemove<T>(
  arr: T[],
  target: any[] | any,
  removeDuplicates?: boolean
): boolean {
  let removed = false;
  const arrLen = arr.length;

  if (arrLen === 0) {
    return removed;
  }

  if (!removeDuplicates) {
    const remove = (item) => {
      const index = arr.indexOf(item);
      if (index !== -1) {
        arr.splice(index, 1);
        removed = true;
      }
    };

    if (!Array.isArray(target)) {
      remove(target);
      return removed;
    }

    switch (target.length) {
      case 0:
        break;
      case 1:
        remove(target[0]);
        break;
      default:
        target.forEach(remove);
    }
  }
  else {
    let compare = (item) => target === item;
    if (Array.isArray(target)) {
      switch (target.length) {
        case 0:
          return removed;
        case 1:
          target = target[0];
          break;
        default:
          compare = (item) => target.indexOf(item) !== -1;
      }
    }

    let size = 0;
    arr.forEach((item) => {
      if (!compare(item)) {
        arr[size++] = item;
      }
    });
    removed = arrLen !== size;
    if (removed) {
      arr.length = size;
    }
  }

  return removed;
}
