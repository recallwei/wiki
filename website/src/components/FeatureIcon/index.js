import React from "react";
import styles from "./styles.module.css";
import ThemedImage from "@theme/ThemedImage";

export default function FeatureIcon({
  customStyle,
  src,
  srcDark,
  title,
  onClick = () => {},
}) {
  return (
    <div className={styles.featureIconArea} style={customStyle}>
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
