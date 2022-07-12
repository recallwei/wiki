import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { isMobile } from "/src/utils/index";

// TODO - Card Design

export default function GridList({ customStyle, data = [], wrapperClassName }) {
  return (
    <div
      style={customStyle}
      className={clsx(
        styles.grid,
        isMobile() && styles.mobileGrid,
        wrapperClassName
      )}
    >
      {data.map((item) => {
        return (
          <div key={item.title} className={styles.cardWrapper}>
            <Link to={item.link} className={styles.card}>
              <img
                src={item.src}
                className={clsx(
                  isMobile() ? styles.imageMobile : styles.image,
                  styles.imageActive
                )}
                alt={item.title}
              />
            </Link>
            <div className={styles.title}>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
}
