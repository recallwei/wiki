import React, { useState, useEffect, CSSProperties } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

export default function Notification(props: any): JSX.Element | null {
  const COPY_SUCCESS = "复制成功";

  return (
    <div
      className={clsx(
        styles.cardWrapper,
        props.show ? styles.show : styles.hidden
      )}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.title}>{COPY_SUCCESS}</div>
        <svg
          className={styles.closeBtn}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          preserveAspectRatio="xMaxYMax meet"
          onClick={() => {
            props.changeShow();
            console.log(props.changeShow);
            console.log(props.show);
          }}
        >
          <path d="M10.05 23.95a1 1 0 0 0 1.414 0L17 18.414l5.536 5.536a1 1 0 0 0 1.414-1.414L18.414 17l5.536-5.536a1 1 0 0 0-1.414-1.414L17 15.586l-5.536-5.536a1 1 0 0 0-1.414 1.414L15.586 17l-5.536 5.536a1 1 0 0 0 0 1.414z" />
        </svg>
      </div>
    </div>
  );
}
