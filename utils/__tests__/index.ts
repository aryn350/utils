import { compareVersion, formatNumber } from "@/index";

describe("validator测试", () => {
  test("compareVersion", () => {
    expect(compareVersion("4.5.1", "4.3.2")).toBe(1);
  });
});

describe("format测试", () => {
  test("formatNumber", () => {
    expect(
      formatNumber(99326752.2999, { currency: "CNY", fractionDigits: 3 })
    ).toBe("¥99,326,752.299");
  });
});
