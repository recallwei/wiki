import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

export default function Badge({ color, children, style, url }) {
  return (
    <span
      className={clsx(
        "badge",
        `badge--${color}`,
        styles.badge,
        url && styles.badgeHover
      )}
      style={style}
      onClick={() => {
        if (url) {
          window.location.href = url;
        }
      }}
    >
      {children}
    </span>
  );
}
