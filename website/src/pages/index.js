import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import src from "@site/static/img/favicon.png";
import { BrowserView, MobileView } from "react-device-detect";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx("container", styles.container)}>
        <BrowserView className={styles.avatarArea}>
          <img src={src} alt="Bruce" />
        </BrowserView>
        <div className={styles.infoArea}>
          <p className={styles.title}>{siteConfig.title}</p>
          <p className={styles.subTitle}>{siteConfig.tagline}</p>
          <BrowserView>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--sm"
                to="/docs/front-end"
              >
                Go to Wiki
              </Link>
            </div>
          </BrowserView>
          <MobileView>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--sm"
                to="/docs/front-end"
              >
                Go to Wiki
              </Link>
            </div>
          </MobileView>
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
