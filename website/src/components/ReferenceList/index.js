import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";
import LinkSVG from "@site/static/svg/link.svg";

export default function ReferenceList({ customStyle, data = [] }) {
  return (
    <div style={customStyle} className={styles.unorderedList}>
      <ul>
        {data.map((item, idx) => {
          return (
            <li className={styles.listItem} key={idx}>
              <ThemedImage
                sources={{
                  light: item.src,
                  dark: item.srcDark ? item.srcDark : item.src,
                }}
                alt={item.title + ": " + item.subTitle}
                loading="lazy"
              />
              <Link to={item.link} className={styles.titleArea}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.linkSVG}>
                  <LinkSVG />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
