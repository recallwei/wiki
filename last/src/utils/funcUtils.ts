// 打开新页面
function openWindow(url: string): void {
  const w: Window | null = window.open("about:blank");
  if (w) {
    w.opener = null;
    w.location.href = url;
  }
  return;
}

// 移动端检测
function isMobile(): boolean {
  const userAgent: string = navigator.userAgent.toUpperCase();
  if (/IPHONE|IPOD/.test(userAgent) && /MOBILE/.test(userAgent)) {
    return true;
  } else if (/ANDROID/.test(userAgent) && /MOBILE/.test(userAgent)) {
    return true;
  } else if (/IPAD/.test(userAgent) && /MOBILE/.test(userAgent)) {
    return false;
  } else {
    return false;
  }
}

// 复制文本
function setClipBoardText(text: string): void {
  navigator.clipboard.writeText(text);
}

export { openWindow, isMobile, setClipBoardText };
