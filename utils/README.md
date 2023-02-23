### 类型
```typescript
/** Content-Type */
type ContentTypeT = "text/plain" | "text/html" | "text/css" | "application/xml" | "application/javascript" | "application/json" | "application/x-www-form-urlencoded" | "multipart/form-data";

/**
 * 排序
 * - ASC 升序
 * - DESC 降序
 */
type OrderByT = "ASC" | "DESC";

/** IANA时区标识 */
import type { TimeZoneId } from "timezone-ids";
type TimezoneKeyT = TimeZoneId;

/** 语言标识 */
type LocalsT = "zh-CN" | "en-US" | "de-DE" | "en-GB" | "ja-JP";

/** 货币标识 */
type CurrencyT = "CNY" | "USD" | "EUR" | "GBP" | "JPY"
```

---

### 常量

#### 正则表达式
```typescript
const REG_EXP: {
  /** 国内手机号 */
  MOBILE: RegExp;
  /** 邮箱 */
  EMAIL: RegExp;
  /** URL */
  URL: RegExp;
  /** 字母 */
  LETTER: RegExp;
  /** 小写字母 */
  LOWER_CASE_LETTER: RegExp;
  /** 大写字母 */
  UPPER_CASE_LETTER: RegExp;
  /** 数字 */
  NUMBER: RegExp;
  /** 整数 */
  INT: RegExp;
  /** 汉字 */
  CHINESE: RegExp;
  /** 文件名 */
  FILENAME: {
    /** 图片 */
    IMAGE: RegExp;
    /** 视频 */
    VIDEO: RegExp;
    /** PDF */
    PDF: RegExp;
    /** Word */
    WORD: RegExp;
    /** Excel */
    EXCEL: RegExp;
  };
};
```

#### 货币符号
```typescript
const CURRENCY: Record<CurrencyT, string>;
```

---

### 通用工具类函数

#### 对象深拷贝
```typescript
function deepClone<T extends Record<string, any>>(obj: T): T;
```

#### 一维数组去重
```typescript
type LinearArrayItemT = string | number | boolean | undefined | null;

function arrayUnique(arr: LinearArrayItemT[]): LinearArrayItemT[];
```

#### 获取一维数组并集
```typescript
type LinearArrayItemT = string | number | boolean | undefined | null;

function arrayUnion(arr1: LinearArrayItemT[], arr2: LinearArrayItemT[]): LinearArrayItemT[];
```

#### 获取一维数组交集
```typescript
type LinearArrayItemT = string | number | boolean | undefined | null;

function arrayIntersect(arr1: LinearArrayItemT[], arr2: LinearArrayItemT[]): LinearArrayItemT[];
```

#### 获取一维数组（参数一相对于参数二的）差集
```typescript
type LinearArrayItemT = string | number | boolean | undefined | null;

function arrayDifference(arr1: LinearArrayItemT[], arr2: LinearArrayItemT[]): LinearArrayItemT[];
```

#### 一维数组排序
```typescript
/**
 * @param orderBy 排序方式
 * @default "ASC"
 */
function arraySort(arr: number[], orderBy?: OrderByT): number[];
function arraySort(arr: string[], orderBy?: OrderByT): string[];
function arraySort(arr: number[] | string[], orderBy?: OrderByT): number[] | string[];
```

#### setTimeout Hook
```typescript
function useTimeout(): {
  /**
   * 定时器实例
   */
  timer: NodeJS.Timer | null;
  /**
   * 设置定时器（已设置自动清空机制）
   */
  setTimer: (callback: () => void, timeout: number) => void;
  /**
   * 清空定时器
   */
  clearTimer: () => void;
};
```

#### setInterval Hook
```typescript
function useInterval(): {
  /**
   * 定时器实例
   */
  timer: NodeJS.Timer | null;
  /**
   * 设置定时器
   */
  setTimer: (callback: () => void, timeout: number, options?: SetIntervalOptionsT) => void;
  /**
   * 清空定时器
   */
  clearTimer: () => void;
};
```

#### 睡眠函数
```typescript
function sleep(timeout: number): Promise<null>;
```

#### 防抖函数
```typescript
function debounce(callback: (...args: any[]) => any, timeout?: number): (this: unknown, ...args: any[]) => void;
```

#### 节流函数
```typescript
function throttle(callback: (...args: any[]) => any, timeout?: number): (this: unknown, ...args: any[]) => void;
```

#### 顺序执行异步队列，并将当前任务结果传递给下一个任务
```typescript
interface AsyncTaskT<ResultT> {
  (param?: ResultT): Promise<ResultT>;
}

/**
 * @param tasks 任务列表
 */
function execAsyncQueue<ResultT>(tasks: AsyncTaskT<ResultT>[]): Promise<ResultT>;
```

#### 重复执行异步任务
```typescript
interface AsyncTaskT<ResultT> {
  (param?: ResultT): Promise<ResultT>;
}

/**
 * @param task 任务
 * @param count 重复次数
 */
function repeatAsyncTask<ResultT>(task: AsyncTaskT<ResultT>, count: number): Promise<ResultT>;
```

#### 获取指定范围内的随机数
```typescript
/**
 * @param min
 * @default 0
 *
 * @param max
 * @default 100
 */
function random(min?: number, max?: number): number;
```

#### 一组数字求和
```typescript
function sum(arr: number[]): number;
```

#### 求一组数字平均值
```typescript
function average(arr: number[]): number;
```

#### 验证数字是否是偶数
```typescript
function isEven(value: number): boolean;
```

#### 数字格式化
```typescript
interface FormatNumberOptionsT {
  /**
   * 货币
   */
  currency?: CurrencyT;
  /**
   * 保留小数位
   * @default 2
   */
  fractionDigits?: number;
  /**
   * 保留小数位时采用的计算规则
   * - "floor" 向下取整
   * - "round" 四舍五入
   * - "ceil" 向上取整
   * @default "floor"
   */
  computeMode?: keyof Pick<typeof Math, "floor" | "round" | "ceil">;
  /**
   * 是否使用逗号分隔符
   * @default true
   */
  useGrouping?: boolean;
}

/**
 * @param options 配置选项
 *
 * 此函数仅提供适用于大部分场景的用法，如有个性化需求请自行实现。
 */
function formatNumber(value: number, options?: FormatNumberOptionsT): string;
```

#### 手机号加密（隐藏中间四位）
```typescript
function encryptMobile(mobile: string): string;
```

#### 时间日期格式化
```typescript
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
 * @param options 配置选项
 *
 * 此函数以性能优化为目的，仅提供基于原生的简易实现，在不依赖第三方库的情况下足以应对大部分日常使用场景。
 *
 * 如需更多日期操作请使用第三方库：
 * {@link https://www.npmjs.com/package/date-fns date-fns}、
 * {@link https://www.npmjs.com/package/date-fns-tz date-fns-tz}、
 * {@link https://www.npmjs.com/package/moment moment}
 */
function formatDateTime(dateTime: Date | undefined, options: FormatDateTimeOptionsT): string;
```

#### 获取本地时区
```typescript
/**
 * @returns 负数为东区，正数为西区
 */
function getLocalTimezone(): number;
```

#### 秒/毫秒互相转换
```typescript
/**
 * @param method 转换方式
 * - "s_to_ms" 秒转换成毫秒
 * - "ms_to_s" 毫秒转换成秒
 */
function transTimestamp(timestamp: number, method: "s_to_ms" | "ms_to_s"): number;
```

#### 验证是否是手机号
```typescript
function checkMobile(str: string): boolean;
```

#### 验证是否是邮箱
```typescript
function checkEmail(str: string): boolean;
```

#### 验证是否是URL
```typescript
function checkUrl(str: string): boolean;
```

#### 验证是否是字母
```typescript
/**
 * @param letterCase 区分大小写的方式
 * - undefined 不区分
 * - "LOWER_CASE" 全小写
 * - "UPPER_CASE" 全大写
 * @default undefined
 */
function checkLetter(str: string, letterCase?: "LOWER_CASE" | "UPPER_CASE"): boolean;
```

#### 验证是否是数字
```typescript
/**
 * @param precision 数字精度
 * - undefined 不区分精度
 * - "INT" 整型
 * - "FLOAT" 浮点型
 * @default undefined
 */
function checkNumber(str: string, precision?: "INT" | "FLOAT"): boolean;
```

#### 验证是否是汉字
```typescript
function checkChinese(str: string): boolean;
```

#### 验证是否是IANA时区标识
```typescript
function checkTimezoneKey(timezone: string): boolean;
```

#### 通过文件名判断文件类型
```typescript
const REG_EXP = {
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

/**
 * @param filename 文件名
 * @param filetype 文件类型
 */
function checkFiletype(filename: string, filetype: keyof typeof REG_EXP.FILENAME): boolean;
```

#### 版本号对比
```typescript
/**
 * @returns
 * - 1 前者大于后者
 * - 0 相等
 * - -1 前者小于后者
 */
function compareVersion(version1: string, version2: string): 0 | 1 | -1;
```

---

### 其他库:

#### Cookie操作
[js-cookie](https://www.npmjs.com/package/js-cookie)、
[@types/js-cookie](https://www.npmjs.com/package/@types/js-cookie)

#### query参数操作
[query-string](https://www.npmjs.com/package/query-string)

#### json动画
[lottie-web](https://www.npmjs.com/package/lottie-web)

#### JWT解码
[jwt-decode](https://www.npmjs.com/package/jwt-decode)

#### 动画库
[motion](https://www.npmjs.com/package/motion)
