/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import SkipToContent from "@theme/SkipToContent";
import AnnouncementBar from "@theme/AnnouncementBar";
import Navbar from "@theme/Navbar";
import Footer from "@theme/Footer";
import LayoutProviders from "@theme/LayoutProviders";
import {
  PageMetadata,
  ThemeClassNames,
  useKeyboardNavigation,
} from "@docusaurus/theme-common";
import ErrorPageContent from "@theme/ErrorPageContent";
import "./styles.css";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function Layout(props) {
  const {
    children,
    noFooter,
    wrapperClassName,
    // not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props;
  useKeyboardNavigation();
  return (
    <BrowserOnly>
      {() => {
        // 检查是否是首页
        const isHomePage = window.location.pathname === "/";
        return (
          <LayoutProviders>
            <PageMetadata title={title} description={description} />

            <SkipToContent />

            {!isHomePage && <AnnouncementBar />}

            {!isHomePage && <Navbar />}

            <div
              className={clsx(ThemeClassNames.wrapper.main, wrapperClassName)}
            >
              <ErrorBoundary fallback={ErrorPageContent}>
                {children}
              </ErrorBoundary>
            </div>

            {!noFooter && <Footer />}
          </LayoutProviders>
        );
      }}
    </BrowserOnly>
  );
}
