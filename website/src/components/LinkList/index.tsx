import React, { CSSProperties } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";
import type LinkItemType from "@components/LinkItem";

type LinkListProps = {
  data: [];
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
};

export default function LinkList({
  data = [],
  wrapperClassName,
  wrapperStyle,
}: LinkListProps): JSX.Element {
  return (
    <div style={wrapperStyle} className={clsx(styles.list, wrapperClassName)}>
      {data.map((item: LinkItemType) => {
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
