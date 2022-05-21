import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

export default function Badge({ customStyle, color, children, url }) {
  return (
    <span
      className={clsx(
        "badge",
        `badge--${color}`,
        styles.badge,
        url && styles.badgeHover
      )}
      style={customStyle}
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
