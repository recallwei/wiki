import React, { CSSProperties, ReactNode } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

type ShortcutProps = {
  children: ReactNode;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
};

export default function Shortcut({
  children,
  wrapperClassName,
  wrapperStyle,
}: ShortcutProps): JSX.Element {
  return (
    <span
      className={clsx(styles.shortcut, wrapperClassName)}
      style={wrapperStyle}
    >
      {children}
    </span>
  );
}
