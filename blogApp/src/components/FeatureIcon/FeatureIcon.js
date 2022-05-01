import React from "react";
import featureIconStyles from "./featureIconStyles.module.css";

export default function FeatureIcon({ src, alt, title }) {
  return (
    <div className={featureIconStyles["feature-icon-area"]}>
      <img className="feature-icon" src={src} alt={alt} loading="lazy" />
      <div className={featureIconStyles.title}>{title}</div>
    </div>
  );
}
