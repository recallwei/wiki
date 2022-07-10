import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import LinkSVG from "@site/static/svg/link.svg";

export default function HyperLink({
  bold,
  children,
  customStyle,
  link,
  wrapperClassName,
}) {
  return (
    <span
      style={customStyle}
      className={clsx(styles.linkWrapper, wrapperClassName)}
    >
      <Link to={link}>
        <span className={clsx(styles.textArea, bold && styles.textBold)}>
          {children}
          <span className={styles.linkSVG}>
            <LinkSVG />
          </span>
        </span>
      </Link>
    </span>
  );
}
