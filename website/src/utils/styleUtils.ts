import { themeColor } from "./styleConstants";

function switchColor(color: string | undefined | null): string {
  switch (color) {
    case "primary":
    case "":
    case undefined:
    case null:
      return themeColor;
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
}

export { switchColor };
