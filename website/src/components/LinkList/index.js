import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";

export default function LinkList({ customStyle, data = [] }) {
  return (
    <div style={customStyle} className={styles.list}>
      {data.map((item) => {
        return (
          <div key={item.title} className={styles.item}>
            <Link to={item.link}>
              <ThemedImage
                sources={{
                  light: item.src,
                  dark: item.srcDark ? item.srcDark : item.src,
                }}
                alt={item.title}
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
