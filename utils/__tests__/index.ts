import {
  isMobile,
  isEmail,
  compareVersion,
  isImage,
  formatNumber,
} from "@/index";

describe("validator测试", () => {
  test("isMobile", () => {
    expect(isMobile("13333333333")).toBe(true);
  });

  test("isEmail", () => {
    expect(isEmail("123@1-1.1")).toBe(true);
  });

  test("compareVersion", () => {
    expect(compareVersion("4.5.1", "4.3.2")).toBe(1);
  });

  test("isImage", () => {
    expect(isImage("world-122.2.jpeg")).toBe(true);
  });
});

describe("format测试", () => {
  test("formatNumber", () => {
    expect(
      formatNumber(99326752.2999, { currency: "CNY", fractionDigits: 3 })
    ).toBe("¥99,326,752.299");
  });
});
