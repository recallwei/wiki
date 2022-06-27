function openWindow(url) {
  const w = window.open("about:blank");
  w.opener = null;
  w.location.href = url;
}

module.exports = { openWindow: openWindow };
