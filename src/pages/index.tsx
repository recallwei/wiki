import React, { useState } from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import BrowserOnly from "@docusaurus/BrowserOnly"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import { isMobile, setClipBoardText } from "@site/src/utils"
import {
  contactMeData,
  frontendGridList,
  backendGridList,
  frontendMenuData,
  backendMenuData,
  type PortfolioType,
  type TagType,
  portfolioListData,
  othersGridList,
  othersMenuData
} from "@site/src/data"
import GridList from "@site/src/components/GridList"
import styles from "./styles.module.css"
import favicon from "@site/static/img/favicon/favicon.png"
import github from "@site/static/img/icon/github.png"
import gmail from "@site/static/img/icon/gmail.png"
import twitter from "@site/static/img/icon/twitter.png"
import telegram from "@site/static/img/icon/telegram.png"
import wechat from "@site/static/img/icon/wexin_mini_program.png"
import zhihu from "@site/static/img/icon/zhihu.png"
import PageProgressBar from "@site/src/components/PageProgressBar"
import Notification from "@site/src/components/Notification"

type HomepageHeaderProps = {
  isMobileDevice: boolean
}

type ContactMeBtnProps = {
  readonly title?: string
  readonly src: any
  link?: string
  isCopyBtn?: boolean
  copySuccess?: () => void
}

export default function Home(): JSX.Element {
  return (
    <BrowserOnly fallback={undefined}>
      {() => {
        const isMobileDevice: boolean = isMobile()
        return (
          <Layout title="Home" description="Description will go into a meta tag in <head />">
            <HomepageHeader isMobileDevice={isMobileDevice} />
            <main>
              {/* <div className={styles.mainContainer}>
                <div className={styles.listTitle}>
                  {frontendMenuData.frontend}
                </div>
                <GridList data={frontendGridList} />
                <div className={clsx(styles.listTitle, styles.marginTop)}>
                  {backendMenuData.backend}
                </div>
                <GridList data={backendGridList} />
                <div className={clsx(styles.listTitle, styles.marginTop)}>
                  {othersMenuData.others}
                </div>
                <GridList data={othersGridList} />
                <PortfolioArea isMobileDevice={isMobileDevice} />
              </div> */}
            </main>
          </Layout>
        )
      }}
    </BrowserOnly>
  )
}

function HomepageHeader({ isMobileDevice }: HomepageHeaderProps): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  const BRUCE = "Bruce Song"
  const TO_WIKI_BUTTON_TEXT = "Go to Wiki"
  const COPY_SUCCESS = "已复制到剪切板"
  const [show, setShow] = useState<boolean>(false)

  const copySuccess = (): void => {
    setShow(true)
    if (!show) {
      setTimeout(() => {
        setShow(false)
      }, 4000)
    }
  }

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
              to="/docs/javascript">
              {TO_WIKI_BUTTON_TEXT}
            </Link>
          </div>
        </div>
        <div className={styles.navLinkIconArea}>
          <ContactMeBtn title={contactMeData.github} src={github} link={contactMeData.githubLink} />
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
            copySuccess={copySuccess}
          />
          <ContactMeBtn title={contactMeData.twitter} src={twitter} link="/" />
          <ContactMeBtn
            title={contactMeData.wechat}
            src={wechat}
            link={contactMeData.wechatAccount}
            isCopyBtn
            copySuccess={copySuccess}
          />
          <ContactMeBtn title={contactMeData.zhihu} src={zhihu} link="/" />
        </div>
        {!isMobileDevice && (
          <>
            <ArrowDownBtn />
            <PageProgressBar />
          </>
        )}
        <Notification show={show} title={COPY_SUCCESS} changeShow={setShow} />
      </div>
    </header>
  )
}

function ContactMeBtn({
  title,
  src,
  link,
  isCopyBtn = false,
  copySuccess
}: ContactMeBtnProps): JSX.Element {
  if (isCopyBtn && typeof link !== "undefined") {
    return (
      <div
        className={styles.navLink}
        onClick={() => {
          setClipBoardText(link)
          if (copySuccess) {
            copySuccess()
          }
        }}>
        <div className={styles.imageWrapper}>
          <img src={src} alt={title} title={title} />
        </div>
      </div>
    )
  }
  return (
    <Link className={styles.navLink} to={link} href="_blank">
      <div className={styles.imageWrapper}>
        <img src={src} alt={title} title={title} />
      </div>
    </Link>
  )
}

function ArrowDownBtn(): JSX.Element {
  return (
    <span className={styles.arrowDownBtnWrapper}>
      <svg
        className={styles.arrowDownBtn}
        aria-hidden="true"
        viewBox="-75.52 -43.52 599.04 599.04"
        fill="currentColor"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
          })
        }}>
        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
      </svg>
    </span>
  )
}

function PortfolioArea({ isMobileDevice }: HomepageHeaderProps): JSX.Element {
  const PORTFOLIO = "Portfolio"
  return (
    <div className={styles.portfolioArea}>
      <div className={styles.listTitle}>{PORTFOLIO}</div>
      <div className={styles.portfolioListWrapper}>
        {portfolioListData.map((item: PortfolioType) => {
          return (
            <Link className={styles.portfolioCardWrapper} key={item.name} to={item.siteLink}>
              <div className={styles.portfolioCardLeft}>
                <h4>{item.name}</h4>
                <div className={styles.description}>{item.description}</div>
                {!isMobileDevice && (
                  <div className={styles.tagWrapper}>
                    {item.stackTags?.map((tag: TagType) => {
                      return (
                        <div
                          key={tag.name}
                          className={styles.tag}
                          style={{ background: tag.bgColor }}>
                          <img src={tag.iconSrc} loading="eager" width="12" height="12" />
                          {tag.name}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
              <div className={styles.portfolioCardRight}>
                <img src={item.src} loading="eager" width="40" height="40" />
                {!isMobileDevice && (
                  <div
                    className={clsx(
                      item.status === "In Development" && styles.development,
                      item.status === "In Production" && styles.production,
                      styles.tag
                    )}>
                    {item.status}
                  </div>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
