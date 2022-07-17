import React, { CSSProperties } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";

type LinkListProps = {
  data: [];
  wrapperClassName?: string;
  wrapperStyle: CSSProperties;
};

type LinkListItemType = {
  title: string;
  link: string;
  src: any;
  srcDark?: any;
};

export default function LinkList({
  data = [],
  wrapperClassName,
  wrapperStyle,
}: LinkListProps): JSX.Element {
  return (
    <div style={wrapperStyle} className={clsx(styles.list, wrapperClassName)}>
      {data.map((item: LinkListItemType) => {
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
