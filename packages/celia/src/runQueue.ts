
/**
 * 依次遍历队列，执行回调函数
 *
 * @example
 * ```js
 * const middlewares = [
      (ctx) => {
        ctx.params.i++;
      },
      (a) => {
        ctx.params.i += 2;
      }
    ];
    const ctx = { params: { i: 0 };
    runQueue(
      middlewares,
      (middleware, next) => {
        Promise.resolve(middleware(ctx)).then(next);
      },
      () => {
        // console.log(ctx.params);
      });
 * ```
 *
 * @param queue 数组队列
 * @param next 控制下次执行的函数
 * @param done 队列执行完毕的回调函数
 */
export default function runQueue<T>(
  queue: T[],
  next: (item: T, goNext: () => void) => void,
  done?: () => void
): void {
  const step = (index: number) => {
    let item: T;
    if (index >= queue.length) {
      typeof done === 'function' && done();
    }
    else if ((item = queue[index])) {
      next(item, () => {
        step(index + 1);
      });
    }
    else {
      step(index + 1);
    }
  };
  step(0);
}
