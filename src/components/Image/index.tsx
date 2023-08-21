import ThemedImage from '@theme/ThemedImage'
import clsx from 'clsx'
import type { CSSProperties } from 'react'
import React from 'react'

import styles from './styles.module.css'

type Props = {
  src: any
  title?: string
  wrapperClassName?: string
  wrapperStyle?: CSSProperties
  onClick?: () => void
}

export default function Image({
  src,
  title,
  wrapperClassName,
  wrapperStyle,
  onClick
}: Props): JSX.Element {
  return (
    <div
      className={clsx(styles.wrapper, wrapperClassName)}
      style={wrapperStyle}
    >
      <ThemedImage
        className={styles.image}
        sources={{
          light: src,
          dark: src
        }}
        alt={title}
        loading="lazy"
        onClick={onClick}
      />
      <div className={styles.title}>- {title} -</div>
    </div>
  )
}
