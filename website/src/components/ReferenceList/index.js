import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";
import LinkSVG from "@site/static/svg/link.svg";
import { isMobile } from "@site/src/utils/func-util";

export default function ReferenceList({ customStyle, data = [] }) {
  const isMobileDevice = isMobile();
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
              {!isMobileDevice && (
                <div className={styles.title}>{item.title + " :"}&nbsp;</div>
              )}
              <Link to={item.link} className={styles.subTitleArea}>
                <div className={styles.subTitle}>{item.subTitle}</div>
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
