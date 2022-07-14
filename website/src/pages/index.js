import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  isMobile,
  setClipBoardText,
  contactMeData,
  frontendGridList,
  backendGridList,
} from "/src/utils/index";
import styles from "./styles.module.css";
import favicon from "/static/img/favicon/favicon.png";
import github from "/static/img/icon/github.png";
import gmail from "/static/img/icon/gmail.png";
import twitter from "/static/img/icon/twitter.png";
import telegram from "/static/img/icon/telegram.png";
import wechat from "/static/img/icon/wexin-mini-program.png";
import zhihu from "/static/img/icon/zhihu.png";
import GridList from "/src/components/GridList/index.js";

function HomepageHeader(props) {
  const { siteConfig } = useDocusaurusContext();
  const TO_WIKI_BUTTON_TEXT = "Go to Wiki";
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={clsx(styles.heroTextContainer)}>
        {!props.isMobileDevice && (
          <div className={styles.avatarArea}>
            <img src={favicon} alt="Bruce" />
          </div>
        )}
        <div className={styles.heroTextArea}>
          <p className={styles.heroTextTitle}>{siteConfig.title}</p>
          <p className={styles.heroTextSubTitle}>{siteConfig.tagline}</p>
          <div className={styles.heroTextAreaButton}>
            <Link
              className={clsx(
                "button",
                "button--secondary",
                "button--sm",
                styles.heroTextAreaButton
              )}
              to="/docs/front-end"
            >
              {TO_WIKI_BUTTON_TEXT}
            </Link>
          </div>
        </div>
        <div className={styles.navLinkIconArea}>
          <ContactMeButton
            title={contactMeData.github}
            src={github}
            link={siteConfig.customFields.githubLink}
          />
          <ContactMeButton
            title={contactMeData.telegram}
            src={telegram}
            link={siteConfig.customFields.telegramLink}
          />
          <ContactMeButton
            title={contactMeData.gmail}
            src={gmail}
            link={siteConfig.customFields.gmailAddress}
            isCopyBtn
          />
          <ContactMeButton
            title={contactMeData.twitter}
            src={twitter}
            link="/"
          />
          <ContactMeButton title={contactMeData.wechat} src={wechat} link="/" />
          <ContactMeButton title={contactMeData.zhihu} src={zhihu} link="/" />
        </div>
      </div>
    </header>
  );
}

function ContactMeButton({ title, src, link, isCopyBtn }) {
  // TODO - Add a tip for copy action
  if (isCopyBtn) {
    return (
      <div
        className={styles.navLink}
        onClick={() => {
          setClipBoardText(link);
        }}
      >
        <div className={styles.imageWrapper}>
          <img src={src} alt={title} title={title} />
        </div>
      </div>
    );
  }
  return (
    <Link className={styles.navLink} to={link} href="_blank">
      <div className={styles.imageWrapper}>
        <img src={src} alt={title} title={title} />
      </div>
    </Link>
  );
}

export default function Home() {
  const FRONTEND = "前端";
  const BACKEND = "后端";
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
              <div className={styles.mainContainer}>
                <div className={styles.listTitle}>{FRONTEND}</div>
                <GridList data={frontendGridList} />
                <div className={clsx(styles.listTitle, styles.marginTop)}>
                  {BACKEND}
                </div>
                <GridList data={backendGridList} />
              </div>
            </main>
          </Layout>
        );
      }}
    </BrowserOnly>
  );
}
