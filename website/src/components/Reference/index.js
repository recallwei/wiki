import React from "react";
import styles from "./styles.module.css";
import ThemedImage from "@theme/ThemedImage";

export function List({ style, children }) {
  return (
    <div style={style} className={styles.unorderedList}>
      <ul>{children}</ul>
    </div>
  );
}

export function ListItem({ data = [] }) {
  return data.map((item) => {
    return (
      <li className={styles.listItem}>
        <ThemedImage
          sources={{
            light: item.src,
            dark: item.srcDark ? item.srcDark : item.src,
          }}
          alt={item.alt}
          loading="lazy"
        />
        {item.title}
      </li>
    );
  });
}
