import { REG_EXP } from "./constants";

/**
 * 手机号验证
 * @param str
 */
export const isMobile = (str: string) => REG_EXP.MOBILE.test(str);

/**
 * 邮箱验证
 * @param str
 */
export const isEmail = (str: string) => REG_EXP.EMAIL.test(str);

/**
 * 数字验证
 * @param str
 */
export const isNumber = (str: string) => REG_EXP.NUMBER.test(str);

/**
 * 正整数验证
 * @param str
 */
export const isInt = (str: string) => REG_EXP.INT.test(str);

/**
 * 判断当前是否是苹果设备
 */
export const isAppleDevice = () =>
  /Apple|Safari|iOS|iPhone|iPad|iPod|Mac/i.test(navigator.userAgent);

/**
 * 判断当前是否是安卓设备
 */
export const isAndroidDevice = () => /Android/i.test(navigator.userAgent);

/**
 * 判断当前是否是移动设备
 */
export const isMobileDevice = () =>
  /mobile|iPhone|iPad|iPod|iOS|Android|adr|Windows Phone|SymbianOS/i.test(
    navigator.userAgent
  );

/**
 * 判断当前是否是微信浏览器
 */
export const isWechatBrowser = () =>
  /MicroMessenger/i.test(navigator.userAgent);

/**
 * 版本号对比
 * @param version1
 * @param version2
 * @returns
 * * 1 前者大于后者
 * * 0 相等
 * * -1 前者小于后者
 */
export const compareVersion = (version1: string, version2: string) => {
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
};

/**
 * 判断是否是图片
 * @param filename 文件名
 */
export const isImage = (filename: string) =>
  /\.(png|jpg|jpeg|gif|bmp|webp)$/i.test(filename);

/**
 * 判断是否是视频
 * @param filename 文件名
 */
export const isVideo = (filename: string) =>
  /\.(mp4|mov|m4v|3gp|rmvb|mkv|wmv|flv|avi)$/i.test(filename);

/**
 * 判断是否是PDF
 * @param filename 文件名
 */
export const isPdf = (filename: string) => /\.(pdf)$/i.test(filename);

/**
 * 判断是否是Word
 * @param filename 文件名
 */
export const isWord = (filename: string) => /\.(doc|docx)$/i.test(filename);

/**
 * 判断是否是Excel
 * @param filename 文件名
 */
export const isExcel = (filename: string) => /\.(xls|xlsx)$/i.test(filename);
