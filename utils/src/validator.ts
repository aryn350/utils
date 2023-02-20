import { REG_EXP } from "./constants";

/**
 * 手机号验证
 * @param str
 */
export function isMobile(str: string) {
  return REG_EXP.MOBILE.test(str);
}

/**
 * 邮箱验证
 * @param str
 */
export function isEmail(str: string) {
  return REG_EXP.EMAIL.test(str);
}

/**
 * URL验证
 * @param str
 */
export function isUrl(str: string) {
  return REG_EXP.URL.test(str);
}

/**
 * 数字验证
 * @param str
 */
export function isNumber(str: string) {
  return REG_EXP.NUMBER.test(str);
}

/**
 * 正整数验证
 * @param str
 */
export function isInt(str: string) {
  return REG_EXP.INT.test(str);
}

/**
 * 判断当前是否是苹果设备
 */
export function isAppleDevice() {
  return /Apple|Safari|iOS|iPhone|iPad|iPod|Mac/i.test(navigator.userAgent);
}

/**
 * 判断当前是否是安卓设备
 */
export function isAndroidDevice() {
  return /Android/i.test(navigator.userAgent);
}

/**
 * 判断当前是否是移动设备
 */
export function isMobileDevice() {
  return /mobile|iPhone|iPad|iPod|iOS|Android|adr|Windows Phone|SymbianOS/i.test(
    navigator.userAgent
  );
}

/**
 * 判断当前是否是微信浏览器
 */
export function isWechatBrowser() {
  return /MicroMessenger/i.test(navigator.userAgent);
}

/**
 * 版本号对比
 * @param version1
 * @param version2
 * @returns
 * * 1 前者大于后者
 * * 0 相等
 * * -1 前者小于后者
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

/**
 * 判断是否是图片
 * @param filename 文件名
 */
export function isImage(filename: string) {
  return /\.(png|jpg|jpeg|gif|bmp|webp)$/i.test(filename);
}

/**
 * 判断是否是视频
 * @param filename 文件名
 */
export function isVideo(filename: string) {
  return /\.(mp4|mov|m4v|3gp|rmvb|mkv|wmv|flv|avi)$/i.test(filename);
}

/**
 * 判断是否是PDF
 * @param filename 文件名
 */
export function isPdf(filename: string) {
  return /\.(pdf)$/i.test(filename);
}

/**
 * 判断是否是Word
 * @param filename 文件名
 */
export function isWord(filename: string) {
  return /\.(doc|docx)$/i.test(filename);
}

/**
 * 判断是否是Excel
 * @param filename 文件名
 */
export function isExcel(filename: string) {
  return /\.(xls|xlsx)$/i.test(filename);
}
