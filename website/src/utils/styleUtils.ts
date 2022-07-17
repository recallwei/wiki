import { themeColor } from "./styleConstants";

enum Color {
  "Primary" = 0,
  "Red" = 1,
  "Pink" = 2,
  "Blue" = 3,
  "Purple" = 4,
  "Yellow" = 5,
}

function switchColor(color: Color | string | undefined | null): string {
  switch (color) {
    case Color.Primary:
    case "":
    case undefined:
    case null:
      return themeColor;
    case Color.Red:
      return "#e53935";
    case Color.Pink:
      return "#d81b60";
    case Color.Blue:
      return "#1e88e5";
    case Color.Purple:
      return "#ba68c8";
    case Color.Yellow:
      return "#ffff8d";
    default:
      return color;
  }
}

export { switchColor };
