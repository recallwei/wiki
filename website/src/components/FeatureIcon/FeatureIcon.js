import React from "react";
import featureIconStyles from "./featureIconStyles.module.css";

export default function FeatureIcon({ src, alt, title, onClick = () => {} }) {
  return (
    <div className={featureIconStyles["feature-icon-area"]}>
      <img src={src} alt={alt} loading="lazy" onClick={onClick} />
      <div className={featureIconStyles.title}>{title}</div>
    </div>
  );
}
