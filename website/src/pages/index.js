import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { openWindow, isMobile } from "/src/utils/index";
import styles from "./styles.module.css";
import favicon from "/static/img/favicon/favicon.png";
import github from "/static/img/icon/github.png";
import google from "/static/img/icon/google.png";
import twitter from "/static/img/icon/twitter.png";
import telegram from "/static/img/icon/telegram.png";
import wechat from "/static/img/icon/wexin-mini-program.png";
import zhihu from "/static/img/icon/zhihu.png";
import GridList from "/src/components/GridList/index.js";
import { frontendList, backendList } from "/src/data/gridListData";

function HomepageHeader(props) {
  const { siteConfig } = useDocusaurusContext();
  const LINK_BUTTON_TEXT = "Go to Wiki";
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
              {LINK_BUTTON_TEXT}
            </Link>
          </div>
        </div>
      </div>
      <BrowserOnly fallback={null}>
        {() => {
          return (
            <div className={styles.navLinkIconArea}>
              <img
                src={github}
                alt="Github"
                title="Github"
                onClick={() => {
                  openWindow(siteConfig.customFields.githubLink);
                }}
              />
              <img
                src={telegram}
                alt="Telegram"
                title="Telegram"
                onClick={() => {
                  openWindow(siteConfig.customFields.telegramLink);
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
        const isMobileDevice = isMobile();
        return (
          <Layout
            title="Home"
            description="Description will go into a meta tag in <head />"
          >
            <HomepageHeader isMobileDevice={isMobileDevice} />
            <main>
              <div
                className={clsx(
                  isMobileDevice
                    ? styles.mainContainerMobile
                    : styles.mainContainer
                )}
              >
                <h1>前端</h1>
                <GridList data={frontendList} />
                <h1 className={styles.marginTop}>后端</h1>
                <GridList data={backendList} />
              </div>
            </main>
          </Layout>
        );
      }}
    </BrowserOnly>
  );
}
