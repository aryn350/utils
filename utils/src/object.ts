/**
 * 对象深拷贝
 * @param obj
 */
export const deepClone = (obj: Record<string, any>) => {
  if (Array.isArray(obj)) {
    return obj.map<any>(item => deepClone(item));
  }

  const cloneObj: Record<string, any> = {};
  Object.entries(obj).forEach(([key, value]) => {
    cloneObj[key] = typeof value !== "object" ? value : deepClone(value);
  });
  return cloneObj;
};
