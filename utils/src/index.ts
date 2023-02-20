export { REG_EXP, CURRENCY } from "./constants";
export type { OrderByT, TimezoneKeyT, CurrencyT } from "./constants";

export { deepClone } from "./object";

export {
  arrayUnion,
  arrayIntersect,
  arrayDifference,
  arraySort,
} from "./array";

export { useTimeout, useInterval, sleep, debounce, throttle } from "./timeout";

export { getRandom } from "./math";

export {
  formatPrice,
  encryptMobile,
  queryStringParse,
  queryStringStringify,
} from "./format";

export {
  formatDateTime,
  getLocalTimezone,
  checkTimezoneKey,
} from "./date-time";

export {
  isMobile,
  isEmail,
  isUrl,
  isAppleDevice,
  isAndroidDevice,
  isMobileDevice,
  isWechatBrowser,
  compareVersion,
  isImage,
  isVideo,
  isPdf,
  isWord,
  isExcel,
} from "./validator";

export {
  hasClass,
  addClass,
  removeClass,
  callPhone,
  copyText,
  readClipboard,
} from "./dom";
