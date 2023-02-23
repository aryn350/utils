### 浏览器环境工具类函数

---

#### 弹出浏览器小窗口打开指定链接
```typescript
interface OpenUrlInSmallWindowOptionsT {
  /**
   * 窗口宽度
   */
  width?: number;
  /**
   * 窗口高度
   */
  height?: number;
}

/**
 * @param options 配置选项
 */
function openUrlInSmallWindow(url: string, options?: OpenUrlInSmallWindowOptionsT): void;
```

#### 判断当前浏览记录是否存在上一页
```typescript
function hasHistory(): boolean;
```

#### 判断指定DOM元素是否存在某个class
```typescript
function hasClass($el: Element, className: string): boolean;
```

#### 给指定元素添加class
```typescript
function addClass($el: Element, className: string): void;
```

#### 删除指定元素的class
```typescript
function removeClass($el: Element, className: string): void;
```

#### 滚动到顶部
```typescript
/**
 * @param $el 滚动的元素
 * @default window
 */
function scrollToTop($el?: HTMLElement): void;
```

#### 滚动到底部
```typescript
/**
 * @param $el 滚动的元素
 * @default window
 */
function scrollToBottom($el?: HTMLElement): void;
```

#### 滚动到最左侧
```typescript
/**
 * @param $el 滚动的元素
 * @default window
 */
function scrollToLeft($el?: HTMLElement): void;
```

#### 滚动到最右侧
```typescript
/**
 * @param $el 滚动的元素
 * @default window
 */
function scrollToRight($el?: HTMLElement): void;
```

#### 滚动到指定位置
```typescript
interface ScrollPositionT {
  x?: number;
  y?: number;
}

/**
 * @param position 滚动的位置
 * @param $el 滚动的元素
 * @default window
 */
function scrollToPosition(position: ScrollPositionT, $el?: HTMLElement): void;
```

#### 开启全屏
```typescript
/**
 * @param $el 需要全屏的元素，不传时默认控制整页全屏
 */
function requestFullscreen($el?: HTMLElement): void;
```

#### 退出全屏
```typescript
function exitFullscreen(): void;
```

#### 拨打电话
```typescript
function callPhone(phone: string): void;
```

#### 判断当前是否是苹果设备
```typescript
function isAppleDevice(): boolean;
```

#### 判断当前是否是安卓设备
```typescript
function isAndroidDevice(): boolean;
```

#### 判断当前是否是移动设备
```typescript
function isMobileDevice(): boolean;
```

#### 判断当前是否是微信浏览器
```typescript
function isWechatBrowser(): boolean;
```

#### 文件下载
```typescript
/**
 * @param url 下载地址
 */
function downloadFile(url: string): void;
```

#### 复制文本
```typescript
function copyText(value: string): Promise<null>;
```

#### 读取剪贴板文本（浏览器需开启读取权限）
```typescript
function readClipboard(): Promise<string>;
```
