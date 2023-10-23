import BrowserOnly from '@docusaurus/BrowserOnly'
import ErrorBoundary from '@docusaurus/ErrorBoundary'
import { PageMetadata, ThemeClassNames } from '@docusaurus/theme-common'
import AnnouncementBar from '@theme/AnnouncementBar'
import ErrorPageContent from '@theme/ErrorPageContent'
import Footer from '@theme/Footer'
import type { Props } from '@theme/Layout'
import LayoutProvider from '@theme/Layout/Provider'
import Navbar from '@theme/Navbar'
// import { useKeyboardNavigation } from "@docusaurus/theme-common/internal";
import SkipToContent from '@theme/SkipToContent'
import clsx from 'clsx'
import React from 'react'

import styles from './styles.module.css'

export default function Layout(props: Props): JSX.Element {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description
  } = props
  // useKeyboardNavigation();
  return (
    <BrowserOnly>
      {() => {
        // Detect whether is homepage
        const isHomePage: boolean = window.location.pathname === '/'
        return (
          <LayoutProvider>
            <PageMetadata
              title={title}
              description={description}
            />

            <SkipToContent />

            {!isHomePage && (
              <>
                <AnnouncementBar />
                <Navbar />
              </>
            )}

            <div
              className={clsx(
                ThemeClassNames.wrapper.main,
                styles.mainWrapper,
                wrapperClassName
              )}
            >
              <ErrorBoundary
                fallback={(params) => <ErrorPageContent {...params} />}
              >
                {children}
              </ErrorBoundary>
            </div>

            {!noFooter && <Footer />}
          </LayoutProvider>
        )
      }}
    </BrowserOnly>
  )
}
