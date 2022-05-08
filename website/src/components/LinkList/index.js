import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
export default function LinkList({ srcList = [], style }) {
  return (
    <div style={style}>
      {srcList.map((item) => {
        return (
          <div key={item.title} className={styles.item}>
            <Link to={item.link}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              {item.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
