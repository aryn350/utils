import { isValidTimeZoneId } from "timezone-ids";
import { REG_EXP } from "./constants";

/**
 * 验证是否是手机号
 * @param str
 */
export function checkMobile(str: string) {
  return REG_EXP.MOBILE.test(str);
}

/**
 * 验证是否是邮箱
 * @param str
 */
export function checkEmail(str: string) {
  return REG_EXP.EMAIL.test(str);
}

/**
 * 验证是否是URL
 * @param str
 */
export function checkUrl(str: string) {
  return REG_EXP.URL.test(str);
}

/**
 * 验证是否是字母
 * @param str
 * @param letterCase 区分大小写的方式
 * - undefined 不区分
 * - "LOWER_CASE" 全小写
 * - "UPPER_CASE" 全大写
 */
export function checkLetter(
  str: string,
  letterCase?: "LOWER_CASE" | "UPPER_CASE"
) {
  switch (letterCase) {
    case "LOWER_CASE":
      return REG_EXP.LOWER_CASE_LETTER.test(str);
    case "UPPER_CASE":
      return REG_EXP.UPPER_CASE_LETTER.test(str);
    default:
      return REG_EXP.LETTER.test(str);
  }
}

/**
 * 验证是否是数字
 * @param str
 * @param precision 数字精度
 * - undefined 不区分精度
 * - "INT" 整型
 * - "FLOAT" 浮点型
 */
export function checkNumber(str: string, precision?: "INT" | "FLOAT") {
  const isNumber = REG_EXP.NUMBER.test(str);
  if (!isNumber) return false;
  switch (precision) {
    case "INT":
      return REG_EXP.INT.test(str);
    case "FLOAT":
      return !REG_EXP.INT.test(str);
    default:
      return isNumber;
  }
}

/**
 * 验证是否是汉字
 * @param str
 */
export function checkChinese(str: string) {
  return REG_EXP.CHINESE.test(str);
}

/**
 * 验证是否是IANA时区标识
 * @param timezone
 */
export function checkTimezoneKey(timezone: string) {
  return isValidTimeZoneId(timezone);
}

/**
 * 通过文件名判断文件类型
 * @param filename 文件名
 * @param filetype 文件类型
 */
export function checkFiletype(
  filename: string,
  filetype: keyof typeof REG_EXP.FILENAME
) {
  return REG_EXP.FILENAME[filetype].test(filename);
}

/**
 * 版本号对比
 * @param version1
 * @param version2
 * @returns
 * - 1 前者大于后者
 * - 0 相等
 * - -1 前者小于后者
 */
export function compareVersion(version1: string, version2: string) {
  const arr1 = version1.split(".").map(item => Number.parseInt(item));
  const arr2 = version2.split(".").map(item => Number.parseInt(item));
  const length = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < length; i++) {
    const item1 = arr1[i] ?? 0;
    const item2 = arr2[i] ?? 0;
    if (item1 > item2) return 1;
    if (item1 < item2) return -1;
  }
  return 0;
}
