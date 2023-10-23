import type LinkItemType from '@components/LinkItem'
import Link from '@docusaurus/Link'
import ThemedImage from '@theme/ThemedImage'
import clsx from 'clsx'
import type { CSSProperties } from 'react'
import React from 'react'

import styles from './styles.module.css'

type LinkListProps = {
  data: []
  wrapperClassName?: string
  wrapperStyle?: CSSProperties
}

export default function LinkList({
  data = [],
  wrapperClassName,
  wrapperStyle
}: LinkListProps): JSX.Element {
  return (
    <div
      style={wrapperStyle}
      className={clsx(styles.list, wrapperClassName)}
    >
      {data.map((item: LinkItemType) => (
        <div
          key={item.title}
          className={styles.item}
        >
          <Link to={item.link}>
            <ThemedImage
              sources={{
                light: item.src,
                dark: item.srcDark ? item.srcDark : item.src
              }}
              alt={item.title}
              loading="lazy"
            />
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  )
}
