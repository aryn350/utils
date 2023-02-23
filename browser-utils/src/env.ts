/**
 * 判断当前是否是苹果设备
 */
export function isAppleDevice() {
  return /Apple|Safari|iOS|iPhone|iPad|iPod|Mac/i.test(navigator.userAgent);
}

/**
 * 判断当前是否是安卓设备
 */
export function isAndroidDevice() {
  return /Android/i.test(navigator.userAgent);
}

/**
 * 判断当前是否是移动设备
 */
export function isMobileDevice() {
  return /mobile|iPhone|iPad|iPod|iOS|Android|adr|Windows Phone|SymbianOS/i.test(
    navigator.userAgent
  );
}

/**
 * 判断当前是否是微信浏览器
 */
export function isWechatBrowser() {
  return /MicroMessenger/i.test(navigator.userAgent);
}
