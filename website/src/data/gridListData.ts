/* eslint-disable @typescript-eslint/no-explicit-any */
import markdown from "@site/static/img/icon/markdown.png";
import html from "@site/static/img/icon/html.png";
import css from "@site/static/img/icon/css.png";
import javascript from "@site/static/img/icon/javascript.png";
import typescript from "@site/static/img/icon/typescript.png";
import react from "@site/static/img/icon/react.png";
import docusaurus from "@site/static/img/icon/docusaurus.png";
import wexin_mini_program from "@site/static/img/icon/wexin_mini_program.png";
import npm from "@site/static/img/icon/npm.png";
import yarn from "@site/static/img/icon/yarn.png";
import graphql from "@site/static/img/icon/graphql.png";
import csharp from "@site/static/img/icon/csharp.png";
import go from "@site/static/img/icon/go.png";
import nodejs from "@site/static/img/icon/nodejs.png";
import microsoft_sqlserver from "@site/static/img/icon/microsoft_sqlserver.png";
import mongodb from "@site/static/img/icon/mongodb.png";
import redis from "@site/static/img/icon/redis.png";
import microsoft_azure from "@site/static/img/icon/microsoft_azure.png";

import {
  frontendMenuData as frontendData,
  backendMenuData as backendData,
} from "./index";

export interface GridItemType {
  readonly title: string;
  readonly link: string;
  readonly src: any;
}

function gridItem(title: string, link: string, src: any): GridItemType {
  return {
    title: title,
    link: link,
    src: src,
  };
}

const frontendGridList: Array<GridItemType> = [
  gridItem(frontendData.markdown, "/docs/markdown", markdown),
  gridItem(frontendData.html, "/docs/html", html),
  gridItem(frontendData.css, "/docs/css", css),
  gridItem(frontendData.javascript, "/docs/javascript", javascript),
  gridItem(frontendData.typescript, "/docs/typescript", typescript),
  gridItem(frontendData.react, "/docs/react", react),
  gridItem(frontendData.docusaurus, "/docs/docusaurus", docusaurus),
  gridItem(
    frontendData.wexinMiniprogram,
    "/docs/wexin-mini-program",
    wexin_mini_program
  ),
  gridItem(frontendData.npm, "/docs/npm", npm),
  gridItem(frontendData.yarn, "/docs/yarn", yarn),
  gridItem(frontendData.graphql, "/docs/graphql", graphql),
];

const backendGridList: Array<GridItemType> = [
  gridItem(backendData.csharp, "/docs/csharp", csharp),
  gridItem(backendData.go, "/docs/go", go),
  gridItem(backendData.nodejs, "/docs/nodejs", nodejs),
  gridItem(
    backendData.microsoft_sqlserver,
    "/docs/microsoft-sqlserver",
    microsoft_sqlserver
  ),
  gridItem(backendData.mongodb, "/docs/mongodb", mongodb),
  gridItem(backendData.redis, "/docs/redis", redis),
  gridItem(backendData.azure, "/docs/microsoft-azure", microsoft_azure),
];

export { frontendGridList, backendGridList };
