import type { TimeZoneId } from "timezone-ids";

/** 正则表达式 */
export const REG_EXP = {
  /** 国内手机号 */
  MOBILE: /^1[3,4,5,6,7,8,9]\d{9}$/,
  /** 邮箱 */
  EMAIL: /^[a-zA-Z0-9-_]+@[a-zA-Z0-9-_]{1,20}\.[a-zA-Z0-9]{1,20}$/i,
  /** URL */
  URL: /^((((ht|f)tps?)|(ws)):\/\/)?(www\.)?[a-z0-9-_]+\.[a-z0-9-_]+((\/[a-z0-9-_]+)+)?((\/[a-z0-9-_]+\.[a-z0-9-_]+)|\/)?$/g,
  /** 数字 */
  NUMBER: /^\d+(\.\d+)?$/,
  /** 正整数 */
  INT: /^\d+$/,
};

/**
 * 排序
 * * ASC 升序
 * * DESC 降序
 */
export type OrderByT = "ASC" | "DESC";

/** IANA时区标识 */
export type TimezoneKeyT = TimeZoneId;

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
