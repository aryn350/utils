import {
  isMobile,
  isEmail,
  compareVersion,
  isImage,
  formatPrice,
  getRandom,
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
  test("formatPrice", () => {
    expect(
      formatPrice(99326752.2999, { currency: "CNY", fractionDigits: 3 })
    ).toBe("¥99,326,752.299");
  });
});

describe("math测试", () => {
  test("getRandom", () => {
    expect(getRandom(1, 10)).toBe(1);
  });
});
