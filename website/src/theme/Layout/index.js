import React from "react";
import clsx from "clsx";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import { PageMetadata, ThemeClassNames } from "@docusaurus/theme-common";
import { useKeyboardNavigation } from "@docusaurus/theme-common/internal";
import SkipToContent from "@theme/SkipToContent";
import AnnouncementBar from "@theme/AnnouncementBar";
import Navbar from "@theme/Navbar";
import Footer from "@theme/Footer";
import LayoutProvider from "@theme/Layout/Provider";
import ErrorPageContent from "@theme/ErrorPageContent";
import styles from "./styles.module.css";
import BrowserOnly from "@docusaurus/BrowserOnly";
export default function Layout(props) {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props;
  useKeyboardNavigation();
  return (
    <BrowserOnly>
      {() => {
        // Detect whether is homepage
        const isHomePage = window.location.pathname === "/";
        return (
          <LayoutProvider>
            <PageMetadata title={title} description={description} />

            <SkipToContent />

            {!isHomePage && <AnnouncementBar />}

            {!isHomePage && <Navbar />}

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
        );
      }}
    </BrowserOnly>
  );
}
