import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

export default function PageProgressBar(): JSX.Element | null {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll(): void {
    setProgress(
      +(
        ((document.documentElement.scrollTop || document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight ||
            document.body.scrollHeight - document.body.clientHeight)) *
        100
      ).toFixed(0)
    );
  }

  function handleScrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div
      className={clsx(
        styles.menuBtnContainer,
        progress === 0 && styles.hideBtn
      )}
    >
      <div className={styles.menuBtn}>
        <div className={styles.progressBarText} onClick={handleScrollToTop}>
          {progress}%
        </div>
      </div>
    </div>
  );
}
