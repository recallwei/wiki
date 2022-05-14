import React from "react";
import styles from "./styles.module.css";
import ThemedImage from "@theme/ThemedImage";

export default function FeatureIcon({
  src,
  srcDark,
  alt,
  title,
  onClick = () => {},
}) {
  return (
    <div className={styles.featureIconArea}>
      <ThemedImage
        sources={{
          light: src,
          dark: srcDark ? srcDark : src,
        }}
        alt={alt}
        loading="lazy"
        onClick={onClick}
      />
      <div className={styles.title}>{title}</div>
    </div>
  );
}
