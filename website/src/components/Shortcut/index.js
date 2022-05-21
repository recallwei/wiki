import React from "react";
import styles from "./styles.module.css";

export default function Shortcut({ customStyle, children }) {
  return (
    <span className={styles.shortcut} style={customStyle}>
      {children}
    </span>
  );
}
