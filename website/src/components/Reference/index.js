import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";

export default function ReferenceList({ style, data = [] }) {
  return (
    <div style={style} className={styles.unorderedList}>
      <ul>
        {data.map((item, idx) => {
          return (
            <li className={styles.listItem} key={idx}>
              <ThemedImage
                sources={{
                  light: item.src,
                  dark: item.srcDark ? item.srcDark : item.src,
                }}
                alt={item.alt}
                loading="lazy"
              />
              <text className={styles.title}>{item.title + ":"}&nbsp;</text>
              <Link to={item.link}>
                <text className={styles.subTitle}>{item.subTitle}</text>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
