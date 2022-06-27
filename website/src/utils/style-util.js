import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function switchColor(color) {
  const { siteConfig } = useDocusaurusContext();
  switch (color) {
    case "primary":
    case "":
    case undefined:
      return siteConfig.customFields.primaryColor;
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

module.exports = { switchColor: switchColor };
