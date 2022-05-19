import React from "react";
import styles from "./styles.module.css";

export default function Shortcut({ children, style }) {
  return (
    <span className={styles.shortcut} style={style}>
      {children}
    </span>
  );
}
