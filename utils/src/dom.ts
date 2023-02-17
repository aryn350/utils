/**
 * 判断指定DOM元素是否存在某个class
 * @param el
 * @param className
 */
export const hasClass = (el: Element, className: string) =>
  el.className.includes(className);

/**
 * 给指定元素添加class
 * @param el
 * @param className
 */
export const addClass = (el: Element, className: string) => {
  if (hasClass(el, className)) return;
  const classList = el.className.split(" ");
  classList.push(className);
  el.className = classList.join(" ");
};

/**
 * 删除指定元素的class
 * @param el
 * @param className
 */
export const removeClass = (el: Element, className: string) => {
  if (!hasClass(el, className)) return;
  const classList = el.className.split(" ");
  const index = classList.findIndex(item => item === className);
  classList.splice(index, 1);
  el.className = classList.join(" ");
};

/**
 * 拨打电话
 * @param phone
 */
export const callPhone = (phone: string) => {
  const $a = document.createElement("a");
  $a.setAttribute("href", `tel:${phone}`);
  $a.click();
};

/**
 * 复制文本
 * @param value
 */
export const copyText = (value: string) =>
  new Promise<null>(resolve => {
    const fallbackCopyText = () => {
      const $input = document.createElement("input");
      $input.value = value;
      $input.style.position = "fixed";
      $input.style.top = "-100%";
      document.body.appendChild($input);
      $input?.select();
      $input?.setSelectionRange(0, $input.value.length);
      document.execCommand("Copy");
      document.body.removeChild($input);
      resolve(null);
    };

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(value)
        .then(() => resolve(null))
        .catch(fallbackCopyText);
    } else {
      fallbackCopyText();
    }
  });

/**
 * 读取剪贴板文本（需要浏览器开启读取权限）
 */
export const readClipboard = async () => {
  if (!navigator.clipboard) {
    throw new Error("Clipboard API 不可用");
  }
  return await navigator.clipboard.readText();
};
