import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import src from "@site/static/img/favicon.png";
import BrowserOnly from "@docusaurus/BrowserOnly";

function HomepageHeader(props) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx("container", styles.container)}>
        {!props.isMobileDevice && (
          <div className={styles.avatarArea}>
            <img src={src} alt="Bruce" />
          </div>
        )}
        <div className={styles.infoArea}>
          <p className={styles.title}>{siteConfig.title}</p>
          <p className={styles.subTitle}>{siteConfig.tagline}</p>
          {!props.isMobileDevice && (
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--sm"
                to="/docs/front-end"
              >
                Go to Wiki
              </Link>
            </div>
          )}
          {props.isMobileDevice && (
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
    <BrowserOnly fallback={null}>
      {() => {
        // 检查是否是手机端
        const isMobileDevice = /Mobi|Android|iPhone/i.test(navigator.userAgent);
        return (
          <Layout
            title="Home"
            description="Description will go into a meta tag in <head />"
          >
            <HomepageHeader isMobileDevice={isMobileDevice} />
            <main>
              <HomepageFeatures />
            </main>
          </Layout>
        );
      }}
    </BrowserOnly>
  );
}
