import { format } from "date-fns";

/**
 * 加法运算
 * @param a 数1
 * @param b 数2
 * @returns 结果
 */
export const add = (a: number, b: number) => a + b;

/**
 * 日期格式化
 * @param date 日期
 * @param str 格式化规则
 * @returns
 */
export const dateFormat = (date: Date, str: string) => format(date, str);
