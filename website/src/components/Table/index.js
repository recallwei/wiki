import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { isMobile } from "/src/utils/funcUtils";

export default function Table({
  wrapperStyle,
  data = [],
  mobileWrapperStyle,
  wrapperClassName,
}) {
  let getPosition = (text) => {
    switch (text) {
      case "center":
        return "center";
      case "end":
        return "end";
      case "start":
      default:
        return "start";
    }
  };
  return (
    <div
      className={clsx(styles.tableAreaWrapper, wrapperClassName)}
      style={isMobile() ? mobileWrapperStyle : wrapperStyle}
    >
      <div className={styles.tableArea}>
        <table role="table">
          {data.caption && (
            <caption className={styles.caption}>{data.caption}</caption>
          )}
          {data.header && data.header.length > 0 && (
            <thead>
              <tr role="row">
                {data.header.map((x, idx) => {
                  return (
                    <th
                      key={idx}
                      style={{
                        textAlign: `${getPosition(data.position[idx])}`,
                      }}
                    >
                      {x}
                    </th>
                  );
                })}
              </tr>
            </thead>
          )}
          <tbody>
            {data.body &&
              data.body.items.length > 0 &&
              data.body.items.map((x, idx) => {
                return (
                  x.length > 0 && (
                    <tr role="row" key={idx}>
                      {x.map((y, idx) => {
                        return (
                          <td
                            role="gridcell"
                            key={idx}
                            style={{
                              textAlign: `${getPosition(data.position[idx])}`,
                            }}
                          >
                            {y}
                          </td>
                        );
                      })}
                    </tr>
                  )
                );
              })}
          </tbody>
          {data.footer && data.footer.length > 0 && (
            <tfoot>
              <tr role="row">
                {data.footer.map((x, idx) => {
                  return (
                    <th
                      key={idx}
                      style={{
                        textAlign: `${getPosition(data.position[idx])}`,
                      }}
                    >
                      {x}
                    </th>
                  );
                })}
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
}
