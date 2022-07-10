import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import ThemedImage from "@theme/ThemedImage";

export default function FeatureIcon({
  customStyle,
  onClick = () => {},
  src,
  srcDark,
  title,
  wrapperClassName,
}) {
  return (
    <div
      className={clsx(styles.featureIconArea, wrapperClassName)}
      style={customStyle}
    >
      <ThemedImage
        sources={{
          light: src,
          dark: srcDark ? srcDark : src,
        }}
        alt={title}
        loading="lazy"
        onClick={onClick}
      />
      <div className={styles.title}>{title}</div>
    </div>
  );
}
