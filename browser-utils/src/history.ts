/**
 * 判断当前浏览记录是否存在上一页
 */
export function hasHistory() {
  return !!window.history.state?.back as boolean;
}
