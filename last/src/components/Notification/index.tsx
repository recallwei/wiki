import React, { CSSProperties } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

type NotificationType = {
  show?: boolean;
  title?: string;
  changeShow: React.Dispatch<boolean>;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
};

export default function Notification({
  show = false,
  title,
  changeShow,
  wrapperClassName,
  wrapperStyle,
}: NotificationType): JSX.Element | null {
  return (
    <div
      className={clsx(
        styles.cardWrapper,
        show ? styles.show : styles.hidden,
        wrapperClassName
      )}
      style={wrapperStyle}
    >
      <div className={styles.contentWrapper}>
        <svg
          className={styles.checkSvg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22 22"
        >
          <g
            fill="#34a853"
            className="color000000 svgShape"
            data-name="Layer 2"
          >
            <g className="color000000 svgShape" data-name="checkmark-circle-2">
              <rect
                width="24"
                height="24"
                className="color000000 svgShape"
                opacity="0"
              />
              <path
                d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z"
                className="color000000 svgShape"
              />
            </g>
          </g>
        </svg>
        <div className={styles.title}>{title}</div>
        <svg
          className={styles.closeBtn}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          onClick={() => {
            changeShow(false);
          }}
        >
          <path d="M10.05 23.95a1 1 0 0 0 1.414 0L17 18.414l5.536 5.536a1 1 0 0 0 1.414-1.414L18.414 17l5.536-5.536a1 1 0 0 0-1.414-1.414L17 15.586l-5.536-5.536a1 1 0 0 0-1.414 1.414L15.586 17l-5.536 5.536a1 1 0 0 0 0 1.414z" />
        </svg>
      </div>
    </div>
  );
}
