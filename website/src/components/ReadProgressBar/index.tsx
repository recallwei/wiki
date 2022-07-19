import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function ReadProgressBar(): JSX.Element {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(
      +(
        (document.documentElement.scrollTop /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
        100
      ).toFixed(0)
    );
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    setProgress(
      +(
        (document.documentElement.scrollTop /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
        100
      ).toFixed(0)
    );
  }

  return (
    <div className={styles.menuBtnContainer}>
      <div className={styles.menuBtn}>
        <div
          className={styles.progressBarText}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}
