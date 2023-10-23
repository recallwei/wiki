import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import LinkSVG from '@site/static/svg/link.svg'
import clsx from 'clsx'
import type { CSSProperties, ReactNode } from 'react'
import React from 'react'

import styles from './styles.module.css'

type Props = {
  bold?: boolean
  children?: ReactNode
  link?: string
  openWindow?: boolean
  type?: 'doc' | 'external'
  wrapperClassName?: string
  wrapperStyle?: CSSProperties
}

export default function HyperLink({
  bold = false,
  children,
  link,
  openWindow = false,
  type = 'doc',
  wrapperClassName,
  wrapperStyle
}: Props): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <span
      style={wrapperStyle}
      className={clsx(styles.linkWrapper, wrapperClassName)}
    >
      <Link to={openWindow ? siteConfig.url + link : link}>
        <span className={clsx(styles.textArea, bold && styles.textBold)}>
          {children}
          {(openWindow || type === 'external') && (
            <LinkSVG className={styles.linkSVG} />
          )}
        </span>
      </Link>
    </span>
  )
}
