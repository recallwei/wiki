import React, { CSSProperties, ReactNode } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { isMobile } from "@site/src/utils/index";

type TableProps = {
  data: {
    position: Array<Position>;
    header: string[];
    body: Array<Array<ReactNode>>;
    footer: string[];
    caption: ReactNode;
  };
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
  mobileWrapperStyle?: CSSProperties;
};

enum Position {
  "Start" = 0,
  "End" = 1,
  "Center" = 2,
}

export default function Table({
  data,
  wrapperClassName,
  wrapperStyle,
  mobileWrapperStyle,
}: TableProps): JSX.Element {
  const getAlignStyle = (text: Position | undefined): any => {
    let position: string;
    switch (text) {
      case Position.Center:
        position = "center";
        break;
      case Position.End:
        position = "end";
        break;
      case undefined:
      case Position.Start:
      default:
        position = "start";
    }
    return {
      textAlign: position,
    };
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
                {data.header.map((x: string, index: number) => {
                  return (
                    <th key={index} style={getAlignStyle(data.position[index])}>
                      {x}
                    </th>
                  );
                })}
              </tr>
            </thead>
          )}
          <tbody>
            {data.body &&
              data.body.length > 0 &&
              data.body.map((x: ReactNode[], index: number) => {
                return (
                  x.length > 0 && (
                    <tr role="row" key={index}>
                      {x.map((y: ReactNode, index: number) => {
                        return (
                          <td
                            role="gridcell"
                            key={index}
                            style={getAlignStyle(data.position[index])}
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
                {data.footer.map((x: ReactNode, index: number) => {
                  return (
                    <th key={index} style={getAlignStyle(data.position[index])}>
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
