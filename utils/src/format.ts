import type { CurrencyT } from "./constants";

interface FormatPriceOptionsT {
  /** 货币 */
  currency?: CurrencyT;
  /** 保留小数位 */
  fractionDigits?: number;
  /**
   * 保留小数位时采用的计算规则
   * * floor 向下取整（默认）
   * * round 四舍五入
   * * ceil 向上取整
   * */
  computeMode?: keyof Pick<typeof Math, "floor" | "round" | "ceil">;
  /** 是否使用逗号分隔符 */
  useGrouping?: boolean;
}

/**
 * 价格格式化
 * @param price
 * @param options 配置选项
 *
 * 此函数仅提供适用于大部分场景的用法，如有个性化需求请自行实现。
 */
export const formatPrice = (price: number, options?: FormatPriceOptionsT) => {
  const { currency, computeMode = "floor", useGrouping = true } = options ?? {};
  let { fractionDigits = 2 } = options ?? {};
  if (fractionDigits < 0) fractionDigits = 2;

  const localMapping: Record<CurrencyT, string> = {
    CNY: "zh-CN",
    USD: "en-US",
    EUR: "de-DE",
    GBP: "en-GB",
    JPY: "ja-JP",
  };

  if (computeMode !== "round") {
    const multiple = Math.pow(10, fractionDigits);
    price = Math[computeMode](price * multiple) / multiple;
  }

  return price.toLocaleString(localMapping[currency ?? "CNY"], {
    style: currency ? "currency" : undefined,
    currency,
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
    useGrouping,
  });
};

/**
 * 手机号加密（隐藏中间四位）
 * @param mobile
 */
export const encryptMobile = (mobile: string) =>
  mobile.replace(/^(\d{3})(\d{4})(\d{4})$/, "$1****$2");
