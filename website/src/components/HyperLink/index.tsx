import React, { type ReactNode } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import LinkSVG from "/static/svg/link.svg";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

interface HyperLinkProps {
  bold: boolean;
  children: ReactNode;
  customStyle?: any;
  link: string;
  openWindow: boolean;
  wrapperClassName?: string;
}

// const HyperLink: React.FC<HyperLinkProps> = ({
//   bold = false,
//   children,
//   customStyle,
//   link,
//   openWindow = false,
//   wrapperClassName,
// }: HyperLinkProps) => \
export default function HyperLink({
  bold = false,
  children,
  customStyle,
  link,
  openWindow = false,
  wrapperClassName,
}: HyperLinkProps): JSX.Element {
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

// export default HyperLink;
