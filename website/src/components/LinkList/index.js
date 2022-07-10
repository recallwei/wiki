import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";

export default function LinkList({ customStyle, data = [], wrapperClassName }) {
  return (
    <div style={customStyle} className={clsx(styles.list, wrapperClassName)}>
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
