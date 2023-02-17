export { REG_EXP, CURRENCY } from "./constants";
export type { CurrencyT } from "./constants";

export { deepClone } from "./object";

export { useTimeout, useInterval, sleep, debounce, throttle } from "./timeout";

export { getRandom } from "./math";

export { formatPrice, encryptMobile } from "./format";

export {
  formatDateTime,
  getLocalTimezone,
  checkTimezoneKey,
} from "./date-time";
export type { TimezoneKeyT } from "./date-time";

export {
  isMobile,
  isEmail,
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
