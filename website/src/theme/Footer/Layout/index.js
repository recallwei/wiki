import React from "react";
import clsx from "clsx";
import customizedStyles from "./customized.styles.module.css";

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx(
        "footer",
        {
          "footer--dark": style === "dark",
        },
        customizedStyles.footer
      )}
    >
      <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
