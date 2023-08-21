import { switchColor } from '@site/src/utils/index'
import clsx from 'clsx'
import type { CSSProperties, ReactNode } from 'react'
import React from 'react'

import styles from './styles.module.css'

type TextHighlightProps = {
  /**
   * Define the backgroundColor of TextHighlight Component.
   * If not set the value, the default color will be the themeColor `#25c2a0`.
   */
  children: ReactNode
  bgColor?: string
  wrapperClassName?: string
  /**
   * If assign the `backgroundColor` property in wrapperStyle, bgColor property will be covered.
   */
  wrapperStyle?: CSSProperties
}

export default function TextHighlight({
  children,
  bgColor,
  wrapperClassName,
  wrapperStyle
}: TextHighlightProps): JSX.Element {
  const bgStyle: CSSProperties = { backgroundColor: `${switchColor(bgColor)}` }
  const mergedStyle: CSSProperties = Object.assign(bgStyle, wrapperStyle)
  return (
    <span
      className={clsx(styles.highlightArea, wrapperClassName)}
      style={mergedStyle}
    >
      {children}
    </span>
  )
}
