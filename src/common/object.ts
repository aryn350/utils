/**
 * 对象深拷贝
 * @param obj
 */
export function deepClone<T extends Record<string, any>>(obj: T): T {
  const isObjectOrArray =
    obj.constructor === Object || obj.constructor === Array;
  if (!isObjectOrArray) return obj;

  if (Array.isArray(obj)) {
    return obj.map(item =>
      typeof item !== "object" ? item : deepClone(item)
    ) as unknown as T;
  }

  const cloneObj = {} as T;
  Object.entries(obj).forEach(([key, value]) => {
    cloneObj[key as keyof T] =
      typeof value !== "object" ? value : deepClone(value);
  });
  return cloneObj;
}
