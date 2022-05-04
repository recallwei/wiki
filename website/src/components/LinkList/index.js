import React from "react";
import styles from "./styles.module.css";
export default function LinkList({ srcList = [], style }) {
  return (
    <div style={style}>
      {srcList.map((item) => {
        return (
          <div key={item.title} className={styles.item}>
            <a href={item.link} target="_self" rel="noreferrer noopener">
              <img src={item.src} alt={item.alt} loading="lazy" />
              {item.title}
            </a>
          </div>
        );
      })}
    </div>
  );
}
