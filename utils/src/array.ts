import type { OrderByT } from "./constants";

type LinearArrayItemT = string | number | boolean | undefined | null;

/**
 * 一维数组去重
 * @param arr
 */
export function arrayUnique(arr: LinearArrayItemT[]) {
  return Array.from(new Set(arr));
}

/**
 * 获取一维数组并集
 * @param arr1
 * @param arr2
 */
export function arrayUnion(arr1: LinearArrayItemT[], arr2: LinearArrayItemT[]) {
  return Array.from(new Set([...arr1, arr2]));
}

/**
 * 获取一维数组交集
 * @param arr1
 * @param arr2
 */
export function arrayIntersect(
  arr1: LinearArrayItemT[],
  arr2: LinearArrayItemT[]
) {
  return Array.from(new Set(arr1.filter(item => new Set(arr2).has(item))));
}

/**
 * 获取一维数组（参数一相对于参数二的）差集
 * @param arr1
 * @param arr2
 */
export function arrayDifference(
  arr1: LinearArrayItemT[],
  arr2: LinearArrayItemT[]
) {
  return Array.from(new Set(arr1.filter(item => !new Set(arr2).has(item))));
}

/**
 * 一维数组排序
 * @param arr
 * @param orderBy 排序方式
 */
export function arraySort(arr: number[], orderBy?: OrderByT): number[];
export function arraySort(arr: string[], orderBy?: OrderByT): string[];
export function arraySort(arr: string[] | number[], orderBy: OrderByT = "ASC") {
  if (arr.length <= 1) return arr;

  switch (typeof arr[0]) {
    case "number":
      arr = arr as number[];
      return orderBy === "ASC"
        ? arr.sort((a, b) => a - b)
        : arr.sort((a, b) => b - a);

    case "string": {
      const result = (arr as string[]).sort((a, b) => a.localeCompare(b));
      return orderBy === "ASC" ? result : result.reverse();
    }
  }
}
