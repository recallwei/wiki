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
  frontendMenuData,
  backendMenuData,
} from "@site/src/utils/index";
import GridList from "@site/src/components/GridList/index";
import styles from "./styles.module.css";
import favicon from "/static/img/favicon/favicon.png";
import github from "/static/img/icon/github.png";
import gmail from "/static/img/icon/gmail.png";
import twitter from "/static/img/icon/twitter.png";
import telegram from "/static/img/icon/telegram.png";
import wechat from "/static/img/icon/wexin-mini-program.png";
import zhihu from "/static/img/icon/zhihu.png";

type HomepageHeaderProps = {
  isMobileDevice: boolean;
};

type ContactMeBtnProps = {
  readonly title?: string;
  readonly src: any;
  link: string;
  isCopyBtn?: boolean;
};

function HomepageHeader({ isMobileDevice }: HomepageHeaderProps): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const BRUCE = "Bruce Song";
  const TO_WIKI_BUTTON_TEXT = "Go to Wiki";
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={clsx(styles.heroTextContainer)}>
        {!isMobileDevice && (
          <div className={styles.avatarArea}>
            <img src={favicon} alt="Bruce" />
          </div>
        )}
        <div className={styles.heroTextArea}>
          <p className={styles.heroTextTitle}>{BRUCE}</p>
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
          <ContactMeBtn
            title={contactMeData.github}
            src={github}
            link={contactMeData.githubLink}
          />
          <ContactMeBtn
            title={contactMeData.telegram}
            src={telegram}
            link={contactMeData.telegramLink}
          />
          <ContactMeBtn
            title={contactMeData.gmail}
            src={gmail}
            link={contactMeData.gmailAddress}
            isCopyBtn
          />
          <ContactMeBtn title={contactMeData.twitter} src={twitter} link="/" />
          <ContactMeBtn title={contactMeData.wechat} src={wechat} link="/" />
          <ContactMeBtn title={contactMeData.zhihu} src={zhihu} link="/" />
        </div>
      </div>
    </header>
  );
}

function ContactMeBtn({
  title,
  src,
  link,
  isCopyBtn = false,
}: ContactMeBtnProps): JSX.Element {
  // TODO - Add a tip for copy action
  if (isCopyBtn && typeof link !== "undefined") {
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

export default function Home(): JSX.Element {
  return (
    <BrowserOnly fallback={undefined}>
      {() => {
        // Detect device type
        const isMobileDevice: boolean = isMobile();
        return (
          <Layout
            title="Home"
            description="Description will go into a meta tag in <head />"
          >
            <HomepageHeader isMobileDevice={isMobileDevice} />
            <main>
              <div className={styles.mainContainer}>
                <div className={styles.listTitle}>
                  {frontendMenuData.frontend}
                </div>
                <GridList data={frontendGridList} />
                <div className={clsx(styles.listTitle, styles.marginTop)}>
                  {backendMenuData.backend}
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
