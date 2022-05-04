import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import src from "@site/static/img/favicon.png";
import { isMobile } from "react-device-detect";

function HomepageHeader() {
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  useEffect(() => {
    setIsMobileDevice(isMobile);
  }, []);
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx("container", styles.container)}>
        {!isMobileDevice && (
          <div className={styles.avatarArea}>
            <img src={src} alt="Bruce" />
          </div>
        )}
        <div className={styles.infoArea}>
          <p className={styles.title}>{siteConfig.title}</p>
          <p className={styles.subTitle}>{siteConfig.tagline}</p>
          {!isMobileDevice && (
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--sm"
                to="/docs/front-end"
              >
                Go to Wiki
              </Link>
            </div>
          )}
          {isMobileDevice && (
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--sm"
                to="/docs/front-end"
              >
                Go to Wiki
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
