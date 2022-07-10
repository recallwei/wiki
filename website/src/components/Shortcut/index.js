import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

export default function Shortcut({ children, customStyle, wrapperClassName }) {
  return (
    <span
      className={clsx(styles.shortcut, wrapperClassName)}
      style={customStyle}
    >
      {children}
    </span>
  );
}
