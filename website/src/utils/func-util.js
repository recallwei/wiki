// 打开新页面
function openWindow(url) {
  const w = window.open("about:blank");
  w.opener = null;
  w.location.href = url;
  return;
}

// 移动端检测
function isMobile() {
  const userAgent = navigator.userAgent.toUpperCase();
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

export { openWindow, isMobile };
