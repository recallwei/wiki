import ThemedImage from '@theme/ThemedImage'
import clsx from 'clsx'
import type { CSSProperties } from 'react'
import React from 'react'

import styles from './styles.module.css'

type Props = {
  onClick?: () => void
  src: any
  srcDark?: any
  title: string
  wrapperClassName?: string
  wrapperStyle?: CSSProperties
}

export default function FeatureIcon({
  onClick,
  src,
  srcDark,
  title,
  wrapperClassName,
  wrapperStyle
}: Props): JSX.Element {
  return (
    <div
      className={clsx(styles.featureIconArea, wrapperClassName)}
      style={wrapperStyle}
    >
      <ThemedImage
        sources={{
          light: src,
          dark: srcDark || src
        }}
        alt={title}
        loading="lazy"
        onClick={onClick}
      />
      <div className={styles.title}>{title}</div>
    </div>
  )
}
