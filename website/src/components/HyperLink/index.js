import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import LinkSVG from "@site/static/img/svg/link.svg";
import clsx from "clsx";

export default function HyperLink({ customStyle, children, link, bold }) {
  return (
    <span style={customStyle} className={styles.linkWrapper}>
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
