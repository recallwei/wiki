import React, { CSSProperties } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import ThemedImage from "@theme/ThemedImage";

type Image = {
  src: any;
  title?: string;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
  onClick?: () => void;
};

export default function Image({
  src,
  title,
  wrapperClassName,
  wrapperStyle,
  onClick,
}: Image): JSX.Element {
  return (
    <div
      className={clsx(styles.wrapper, wrapperClassName)}
      style={wrapperStyle}
    >
      <ThemedImage
        className={styles.image}
        sources={{
          light: src,
          dark: src,
        }}
        alt={title}
        loading="lazy"
        onClick={onClick}
      />
      <div className={styles.title}>- {title} -</div>
    </div>
  );
}
