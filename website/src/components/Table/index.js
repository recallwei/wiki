import React from "react";
import styles from "./styles.module.css";

export default function Table({ data = [] }) {
  let getPosition = (text) => {
    switch (text) {
      case "center":
        return "center";
      case "start":
        return "start";
      case "end":
        return "end";
      default:
        return undefined;
    }
  };
  return (
    <div className={styles.tableAreaWrapper}>
      <div className={styles.tableArea}>
        <table role="table">
          {data.caption ? (
            <caption className={styles.caption}>{data.caption}</caption>
          ) : null}
          {data.header && data.header.length > 0 && (
            <thead>
              <tr role="row">
                {data.header.map((x, idx) => {
                  return (
                    <th
                      key={idx}
                      style={{
                        textAlign: `${getPosition(x.position)}`,
                      }}
                    >
                      {x.title}
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
                return x.length > 0 ? (
                  <tr role="row" key={idx}>
                    {x.map((y, idx) => {
                      return (
                        <td
                          role="gridcell"
                          key={idx}
                          style={{
                            textAlign: `${getPosition(
                              data.body.position[idx]
                            )}`,
                          }}
                        >
                          {y}
                        </td>
                      );
                    })}
                  </tr>
                ) : null;
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
                        textAlign: `${getPosition(x.position)}`,
                      }}
                    >
                      {x.title}
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
