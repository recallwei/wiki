import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";

export default function LinkList({ srcList = [], style }) {
  return (
    <div style={style}>
      {srcList.map((item) => {
        return (
          <div key={item.title} className={styles.item}>
            <Link to={item.link}>
              <ThemedImage
                sources={{
                  light: item.src,
                  dark: item.srcDark ? item.srcDark : item.src,
                }}
                alt={item.alt}
                loading="lazy"
              />
              {item.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
