import React from "react";
import styles from "./styles.module.css";
import colorSwitch from "@site/src/util/color-switch.js";

export default function TextHighlight({ bgColor, children }) {
  const bgStyle = { color: `${colorSwitch(bgColor)}` };
  return (
    <span
      className={styles.highlightArea}
      style={bgStyle}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
