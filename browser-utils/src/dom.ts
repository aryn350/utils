/**
 * 判断指定DOM元素是否存在某个class
 * @param $el
 * @param className
 */
export function hasClass($el: Element, className: string) {
  return $el.className.includes(className);
}

/**
 * 给指定元素添加class
 * @param $el
 * @param className
 */
export function addClass($el: Element, className: string) {
  if (hasClass($el, className)) return;
  const classList = $el.className.split(" ");
  classList.push(className);
  $el.className = classList.join(" ");
}

/**
 * 删除指定元素的class
 * @param $el
 * @param className
 */
export function removeClass($el: Element, className: string) {
  if (!hasClass($el, className)) return;
  const classList = $el.className.split(" ");
  const index = classList.findIndex(item => item === className);
  classList.splice(index, 1);
  $el.className = classList.join(" ");
}

/**
 * 滚动到顶部
 * @param $el 滚动的元素，不传时默认滚动window
 */
export function scrollToTop($el?: HTMLElement) {
  if ($el) {
    $el.scrollTop = 0;
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

/**
 * 滚动到底部
 * @param $el 滚动的元素，不传时默认滚动window
 */
export function scrollToBottom($el?: HTMLElement) {
  if ($el) {
    $el.scrollTop = $el.scrollHeight;
  } else {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
}

/**
 * 滚动到最左侧
 * @param $el 滚动的元素，不传时默认滚动window
 */
export function scrollToLeft($el?: HTMLElement) {
  if ($el) {
    $el.scrollLeft = 0;
  } else {
    window.scrollTo({ left: 0, behavior: "smooth" });
  }
}

/**
 * 滚动到最右侧
 * @param $el 滚动的元素，不传时默认滚动window
 */
export function scrollToRight($el?: HTMLElement) {
  if ($el) {
    $el.scrollLeft = $el.scrollWidth;
  } else {
    window.scrollTo({
      left: document.documentElement.scrollWidth,
      behavior: "smooth",
    });
  }
}

interface ScrollPositionT {
  x?: number;
  y?: number;
}

/**
 * 滚动到指定位置
 * @param position 滚动的位置
 * @param $el 滚动的元素，不传时默认滚动window
 */
export function scrollToPosition(position: ScrollPositionT, $el?: HTMLElement) {
  const { x = 0, y = 0 } = position;
  if ($el) {
    $el.scrollLeft = x;
    $el.scrollTop = y;
  } else {
    window.scrollTo({
      left: x,
      top: y,
      behavior: "smooth",
    });
  }
}

interface RequestFullscreenElementT
  extends Omit<HTMLElement, "requestFullscreen"> {
  requestFullscreen?: HTMLElement["requestFullscreen"];
  webkitRequestFullScreen?: HTMLElement["requestFullscreen"];
  mozRequestFullScreen?: HTMLElement["requestFullscreen"];
  msRequestFullscreen?: HTMLElement["requestFullscreen"];
}

/**
 * 开启全屏
 * @param $el 需要全屏的元素，不传时默认控制整页全屏
 */
export function requestFullscreen($el: HTMLElement = document.documentElement) {
  const $ele = $el as RequestFullscreenElementT;
  $ele.requestFullscreen?.();
  $ele.webkitRequestFullScreen?.();
  $ele.mozRequestFullScreen?.();
  $ele.msRequestFullscreen?.();
}

interface ExitFullscreenDocumentT extends Omit<Document, "exitFullscreen"> {
  exitFullscreen?: Document["exitFullscreen"];
  webkitCancelFullScreen?: Document["exitFullscreen"];
  mozCancelFullScreen?: Document["exitFullscreen"];
  msExitFullscreen?: Document["exitFullscreen"];
}

/**
 * 退出全屏
 */
export function exitFullscreen() {
  const $doc = document as ExitFullscreenDocumentT;
  $doc.exitFullscreen?.();
  $doc.webkitCancelFullScreen?.();
  $doc.mozCancelFullScreen?.();
  $doc.msExitFullscreen?.();
}

/**
 * 拨打电话
 * @param phone
 */
export function callPhone(phone: string) {
  const $a = document.createElement("a");
  $a.href = `tel:${phone}`;
  $a.click();
}
