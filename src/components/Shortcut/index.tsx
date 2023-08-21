import clsx from 'clsx'
import type { CSSProperties, ReactNode } from 'react'
import React from 'react'

import styles from './styles.module.css'

type ShortcutProps = {
  children: ReactNode
  wrapperClassName?: string
  wrapperStyle?: CSSProperties
}

export default function Shortcut({
  children,
  wrapperClassName,
  wrapperStyle
}: ShortcutProps): JSX.Element {
  return (
    <span
      className={clsx(styles.shortcut, wrapperClassName)}
      style={wrapperStyle}
    >
      {children}
    </span>
  )
}
