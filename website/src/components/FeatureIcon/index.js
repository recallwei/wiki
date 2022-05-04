import React from "react";
import styles from "./styles.module.css";

export default function FeatureIcon({ src, alt, title, onClick = () => {} }) {
  return (
    <div className={styles.featureIconArea}>
      <img src={src} alt={alt} loading="lazy" onClick={onClick} />
      <div className={styles.title}>{title}</div>
    </div>
  );
}
