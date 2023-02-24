/**
 * 文件下载
 * @param url 下载地址
 */
export function downloadFile(url: string) {
  const $a = document.createElement("a");
  $a.href = url;
  $a.download = url;
  $a.click();
}
