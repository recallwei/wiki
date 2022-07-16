import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import LinkSVG from "/static/svg/link.svg";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function HyperLink({
  bold,
  children,
  customStyle,
  link,
  openWindow = false,
  wrapperClassName,
}) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <span
      style={customStyle}
      className={clsx(styles.linkWrapper, wrapperClassName)}
    >
      <Link to={openWindow ? siteConfig.url + link : link}>
        <span className={clsx(styles.textArea, bold && styles.textBold)}>
          {children}
          {openWindow && (
            <span className={styles.linkSVG}>
              <LinkSVG />
            </span>
          )}
        </span>
      </Link>
    </span>
  );
}
