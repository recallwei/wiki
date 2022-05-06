export default (color) => {
  switch (color) {
    // 未定义颜色时为主题色
    case "primary":
    case "":
    case undefined:
      return "#25c2a0";
    case "red":
      return "#e53935";
    case "pink":
      return "#d81b60";
    case "blue":
      return "#1e88e5";
    case "purple":
      return "#ba68c8";
    case "yellow":
      return "#ffff8d";
    default:
      return color;
  }
};
