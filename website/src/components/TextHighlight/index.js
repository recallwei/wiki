import React from "react";
import styles from "./styles.module.css";
import { switchColor } from "@site/src/utils/style-util";

export default function TextHighlight({ bgColor, children }) {
  const bgStyle = { backgroundColor: `${switchColor(bgColor)}` };
  return (
    <span
      className={styles.highlightArea}
      style={bgStyle}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
