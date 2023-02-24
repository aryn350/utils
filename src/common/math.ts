/**
 * 获取指定范围内的随机数
 * @param min
 * @default 0
 *
 * @param max
 * @default 100
 */
export function random(min = 0, max = 100) {
  min = Math.floor(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * 一组数字求和
 * @param arr
 */
export function sum(arr: number[]) {
  return arr.reduce((result, value) => result + value, 0);
}

/**
 * 求一组数字平均值
 * @param arr
 */
export function average(arr: number[]) {
  return sum(arr) / arr.length;
}

/**
 * 验证数字是否是偶数
 * @param value
 */
export function isEven(value: number) {
  return value % 2 === 0;
}
