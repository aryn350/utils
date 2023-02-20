/**
 * 获取指定范围内的随机数
 * @param min
 * @param max
 */
export function getRandom(min = 0, max = 100) {
  min = Math.floor(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
