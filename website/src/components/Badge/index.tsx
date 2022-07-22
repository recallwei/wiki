import React, { CSSProperties, ReactNode } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

type BadgeType = {
  children: ReactNode;
  color?: string;
  url?: string;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
};

// TODO - Refactor: Use Link Component

export default function Badge({
  children,
  color,
  url,
  wrapperClassName,
  wrapperStyle,
}: BadgeType): JSX.Element {
  return (
    <span
      className={clsx(
        "badge",
        `badge--${color}`,
        styles.badge,
        url && styles.badgeHover,
        wrapperClassName
      )}
      style={wrapperStyle}
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
