import type { TimeZoneId } from "timezone-ids";

/** 正则表达式 */
export const REG_EXP = {
  /** 国内手机号 */
  MOBILE: /^1[3,4,5,6,7,8,9]\d{9}$/,
  /** 邮箱 */
  EMAIL: /^[a-zA-Z0-9-_]+@[a-zA-Z0-9-_]{1,20}\.[a-zA-Z0-9]{1,20}$/i,
  /** URL */
  URL: /^((((ht|f)tps?)|(ws)):\/\/)?(www\.)?[a-z0-9-_]+\.[a-z0-9-_]+((\/[a-z0-9-_]+)+)?((\/[a-z0-9-_]+\.[a-z0-9-_]+)|\/)?$/g,
  /** 字母 */
  LETTER: /^[a-z]+$/gi,
  /** 小写字母 */
  LOWER_CASE_LETTER: /^[a-z]+$/g,
  /** 大写字母 */
  UPPER_CASE_LETTER: /^[A_Z]+$/g,
  /** 数字 */
  NUMBER: /^-?\d+(\.\d+)?$/,
  /** 整数 */
  INT: /^-?\d+$/,
  /** 汉字 */
  CHINESE: /^[\u4E00-\u9FA5]+$/g,
  /** 文件名 */
  FILENAME: {
    /** 图片 */
    IMAGE: /\.(png|jpg|jpeg|gif|bmp|webp)$/i,
    /** 视频 */
    VIDEO: /\.(mp4|mov|m4v|3gp|rmvb|mkv|wmv|flv|avi)$/i,
    /** PDF */
    PDF: /\.pdf$/i,
    /** Word */
    WORD: /\.docx?$/i,
    /** Excel */
    EXCEL: /\.xlsx?$/i,
  },
};

/** Content-Type */
export type ContentTypeT =
  | "text/plain"
  | "text/html"
  | "text/css"
  | "application/xml"
  | "application/javascript"
  | "application/json"
  | "application/x-www-form-urlencoded"
  | "multipart/form-data";

/**
 * 排序
 * - ASC 升序
 * - DESC 降序
 */
export type OrderByT = "ASC" | "DESC";

/** IANA时区标识 */
export type TimezoneKeyT = TimeZoneId;

/** 语言标识 */
export type LocalsT = "zh-CN" | "en-US" | "de-DE" | "en-GB" | "ja-JP";

/** 货币标识 */
export type CurrencyT = "CNY" | "USD" | "EUR" | "GBP" | "JPY";

/** 货币符号 */
export const CURRENCY: Record<CurrencyT, string> = {
  /** 人民币 */
  CNY: "¥",
  /** 美元 */
  USD: "$",
  /** 欧元 */
  EUR: "€",
  /** 英镑 */
  GBP: "￡",
  /** 日元 */
  JPY: "¥",
};
