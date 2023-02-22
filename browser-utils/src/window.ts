interface OpenSmallWindowOptionsT {
  /** 窗口宽度 */
  width?: number;
  /** 窗口高度 */
  height?: number;
}

/**
 * 弹出浏览器小窗口打开指定链接
 * @param url
 * @param options 配置选项
 */
export function openSmallWindow(
  url: string,
  options?: OpenSmallWindowOptionsT
) {
  const { width = 300, height = 200 } = options ?? {};
  window.open(
    url,
    "_blank",
    `width=${width},height=${height},menubar=no,toolbar=no,status=no,scrollbars=yes`
  );
}
