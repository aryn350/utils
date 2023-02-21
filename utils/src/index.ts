export { REG_EXP, CURRENCY } from "./constants";
export type { OrderByT, TimezoneKeyT, CurrencyT } from "./constants";

export { deepClone } from "./object";

export {
  arrayUnion,
  arrayIntersect,
  arrayDifference,
  arraySort,
} from "./array";

export {
  useTimeout,
  useInterval,
  sleep,
  debounce,
  throttle,
  execAsyncQueue,
  repeatAsyncTask,
} from "./async";

export { random, sum, average, isEven } from "./math";

export { formatNumber, encryptMobile } from "./format";

export { formatDateTime, getLocalTimezone } from "./date-time";

export {
  isMobile,
  isEmail,
  isUrl,
  isLetter,
  isNumber,
  isInt,
  isChinese,
  isTimezoneKey,
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
  scrollToTop,
  scrollToBottom,
  scrollToLeft,
  scrollToRight,
  scrollToPosition,
  requestFullscreen,
  exitFullscreen,
  callPhone,
  copyText,
  readClipboard,
} from "./dom";
