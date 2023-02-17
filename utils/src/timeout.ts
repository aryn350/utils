/**
 * setTimeout hook
 */
export const useTimeout = () => {
  let timer: NodeJS.Timer | null = null;

  const setTimer = (callback: () => void, timeout: number) => {
    timer = setTimeout(() => {
      callback();
      clearTimer();
    }, Math.floor(timeout));
  };

  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  return {
    /** 定时器实例 */
    timer,
    /** 设置定时器 */
    setTimer,
    /** 清空定时器 */
    clearTimer,
  };
};

interface SetIntervalOptionsT {
  /** 是否立即执行 */
  flush?: boolean;
  /** 重复次数 */
  repeatCount?: number;
  /** 指定时间后中止定时器 */
  delay?: number;
}

/**
 * setInterval hook
 */
export const useInterval = () => {
  let timer: NodeJS.Timer | null = null;

  const setTimer = (
    callback: () => void,
    timeout: number,
    options?: SetIntervalOptionsT
  ) => {
    const { flush = false } = options ?? {};
    let { repeatCount = 0, delay = 0 } = options ?? {};
    repeatCount = Math.floor(repeatCount);
    delay = Math.floor(delay);

    const { setTimer: setTimeoutTimer, clearTimer: clearTimeoutTimer } =
      useTimeout();

    const hasCount = repeatCount > 0;
    const exec = () => {
      callback();
      if (hasCount) {
        repeatCount--;
        if (repeatCount <= 0) {
          clearTimer();
          clearTimeoutTimer();
        }
      }
    };

    flush && exec();
    timer = setInterval(exec, Math.floor(timeout));

    delay > 0 && setTimeoutTimer(clearTimer, delay);
  };

  const clearTimer = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };

  return {
    /** 定时器实例 */
    timer,
    /** 设置定时器 */
    setTimer,
    /** 清空定时器 */
    clearTimer,
  };
};

/**
 * 睡眠函数
 * @param timeout
 */
export const sleep = (timeout: number) =>
  new Promise<null>(resolve => {
    const { setTimer } = useTimeout();
    setTimer(() => resolve(null), timeout);
  });

/**
 * 防抖函数
 * @param callback
 * @param timeout
 */
export const debounce = (callback: (...args: any[]) => any, timeout = 300) => {
  const { setTimer, clearTimer } = useTimeout();
  return function (this: unknown, ...args: any[]) {
    clearTimer();
    setTimer(() => {
      callback.apply(this, [...args]);
    }, Math.floor(timeout));
  };
};

/**
 * 节流函数
 * @param callback
 * @param timeout
 */
export const throttle = (callback: (...args: any[]) => any, timeout = 300) => {
  const { timer, setTimer } = useTimeout();
  return function (this: unknown, ...args: any[]) {
    if (timer) return;
    setTimer(() => null, Math.floor(timeout));
    callback.apply(this, [...args]);
  };
};
