import React, { CSSProperties } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { isMobile } from "@site/src/utils/index";
import { GridItemType } from "@site/src/utils/index";

type GridListProps = {
  customStyle?: CSSProperties;
  data: Array<GridItemType>;
  wrapperClassName?: string;
};

// TODO - Card Design

export default function GridList({
  customStyle,
  data = [],
  wrapperClassName,
}: GridListProps): JSX.Element {
  return (
    <div
      style={customStyle}
      className={clsx(
        styles.grid,
        isMobile() && styles.mobileGrid,
        wrapperClassName
      )}
    >
      {data.map((item) => {
        return (
          <div key={item.title} className={styles.cardWrapper}>
            <Link to={item.link} className={styles.card}>
              <img
                src={item.src}
                className={clsx(styles.image)}
                alt={item.title}
              />
            </Link>
            <div className={styles.title}>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
}
