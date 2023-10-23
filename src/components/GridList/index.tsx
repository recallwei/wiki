import Link from '@docusaurus/Link'
import type { GridItemType } from '@site/src/data'
import clsx from 'clsx'
import type { CSSProperties } from 'react'
import React from 'react'

import styles from './styles.module.css'

type Props = {
  data?: Array<GridItemType>
  wrapperClassName?: string
  wrapperStyle?: CSSProperties
}

// TODO - Card Design

export default function GridList({
  data = [],
  wrapperClassName,
  wrapperStyle
}: Props): JSX.Element {
  return (
    <div
      style={wrapperStyle}
      className={clsx(styles.listWrapper, wrapperClassName)}
    >
      {data.map((item) => (
        <Link
          key={item.title}
          className={styles.cardWrapper}
          to={item.link}
        >
          <img
            src={item.src}
            className={clsx(styles.image)}
            alt={item.title}
          />
          <div
            className={clsx(
              styles.title,
              item.fontSize === 'md' && styles.title_md,
              item.fontSize === 'sm' && styles.title_sm
            )}
          >
            {item.title}
          </div>
        </Link>
      ))}
    </div>
  )
}
