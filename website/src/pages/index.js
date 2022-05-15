import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import favicon from "@site/static/img/favicon/favicon.png";
import github from "@site/static/img/icon/github.png";
import google from "@site/static/img/icon/google.png";
import twitter from "@site/static/img/icon/twitter.png";
import wechat from "@site/static/img/icon/wechat-mini-program.png";
import zhihu from "@site/static/img/icon/zhihu.png";

function HomepageHeader(props) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("hero", styles.heroBanner)}
      style={{ position: "relative" }}
    >
      <div className={clsx("container", styles.container)}>
        {!props.isMobileDevice && (
          <div className={styles.avatarArea}>
            <img src={favicon} alt="Bruce" />
          </div>
        )}
        <div className={styles.infoArea}>
          <p className={styles.title}>{siteConfig.title}</p>
          <p className={styles.subTitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--sm"
              to="/docs/front-end"
            >
              Go to Wiki
            </Link>
          </div>
        </div>
      </div>
      <BrowserOnly fallback={null}>
        {() => {
          const openLink = (url) => {
            const w = window.open("about:blank");
            w.location.href = url;
          };
          return (
            <div className={styles.navLinkIconArea}>
              <img
                src={github}
                alt="Github"
                title="Github"
                onClick={() => {
                  openLink(siteConfig.customFields.githubLink);
                }}
              />
              <img src={google} alt="GMail" title="GMail" />
              <img src={twitter} alt="Twitter" title="Twitter" />
              <img src={wechat} alt="WeChat" title="WeChat" />
              <img src={zhihu} alt="ZhiHu" title="ZhiHu" />
            </div>
          );
        }}
      </BrowserOnly>
    </header>
  );
}

export default function Home() {
  return (
    <BrowserOnly fallback={null}>
      {() => {
        // Detect device type
        const isMobileDevice = /Mobi|Android|iPhone/i.test(navigator.userAgent);
        return (
          <Layout
            title="Home"
            description="Description will go into a meta tag in <head />"
          >
            <HomepageHeader isMobileDevice={isMobileDevice} />
            <main></main>
          </Layout>
        );
      }}
    </BrowserOnly>
  );
}
