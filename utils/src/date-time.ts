import type { TimezoneKeyT } from "./constants";

interface FormatDateTimeOptionsT {
  /**
   * 日期连接符
   * @default "-"
   */
  dateJoiner?: string;
  /**
   * 时间连接符
   * @default ":"
   */
  timeJoiner?: string;
  /**
   * 是否隐藏日期
   * @default false
   */
  hideDate?: boolean;
  /**
   * 是否隐藏时间
   * @default false
   */
  hideTime?: boolean;
  /**
   * 是否隐藏秒数
   * @default false
   */
  hideMinute?: boolean;
  /**
   * 时区
   * @default "Asia/Shanghai"
   */
  timezone?: TimezoneKeyT;
}

/**
 * 时间日期格式化
 * @param dateTime
 * @param options 配置选项
 *
 * 此函数以性能优化为目的，仅提供基于原生的简易实现，在不依赖第三方库的情况下足以应对大部分日常使用场景。
 *
 * 如需更多日期操作请使用第三方库：
 * {@link https://www.npmjs.com/package/date-fns date-fns}、
 * {@link https://www.npmjs.com/package/date-fns-tz date-fns-tz}、
 * {@link https://www.npmjs.com/package/moment moment}
 */
export function formatDateTime(
  dateTime = new Date(),
  options: FormatDateTimeOptionsT
) {
  const {
    dateJoiner = "-",
    timeJoiner = ":",
    hideDate = false,
    hideTime = false,
    hideMinute = false,
    timezone = "Asia/Shanghai",
  } = options;

  const date = dateTime
    .toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: timezone,
    })
    .replace(/\//g, dateJoiner);
  const time = dateTime
    .toLocaleTimeString("zh-CN", {
      timeStyle: hideMinute ? "short" : "medium",
      timeZone: timezone,
    })
    .replace(/:/g, timeJoiner);

  if (hideDate) return time;
  if (hideTime) return date;
  return `${date} ${time}`;
}

/**
 * 获取本地时区
 * @returns 负数为东区，正数为西区
 */
export function getLocalTimezone() {
  return new Date().getTimezoneOffset() / 60;
}

/**
 * 秒/毫秒互相转换
 * @param timestamp
 * @param method 转换方式
 * - "s_to_ms" 秒转换成毫秒
 * - "ms_to_s" 毫秒转换成秒
 */
export function transTimestamp(
  timestamp: number,
  method: "s_to_ms" | "ms_to_s"
) {
  if (timestamp <= 0) return 0;
  const mapping: Record<typeof method, number> = {
    s_to_ms: Math.floor(timestamp * 1000),
    ms_to_s: Math.floor(timestamp / 1000),
  };
  return mapping[method];
}
