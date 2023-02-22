/**
 * 复制文本
 * @param value
 */
export function copyText(value: string) {
  return new Promise<null>(resolve => {
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
}

/**
 * 读取剪贴板文本（需要浏览器开启读取权限）
 */
export async function readClipboard() {
  if (!navigator.clipboard) {
    throw new Error("Clipboard API 不可用");
  }
  return await navigator.clipboard.readText();
}
