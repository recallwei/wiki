import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

// TODO - Use Link Component
export default function Badge({
  children,
  color,
  customStyle,
  url,
  wrapperClassName,
}) {
  return (
    <span
      className={clsx(
        "badge",
        `badge--${color}`,
        styles.badge,
        url && styles.badgeHover,
        wrapperClassName
      )}
      style={customStyle}
      onClick={() => {
        if (url) {
          window.location.href = url;
        }
        return;
      }}
    >
      {children}
    </span>
  );
}
