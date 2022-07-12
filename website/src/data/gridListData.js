import markdown from "/static/img/icon/markdown.png";
import html from "/static/img/icon/html.png";
import css from "/static/img/icon/css.png";
import javascript from "/static/img/icon/javascript.png";
import react from "/static/img/icon/react.png";
import docusaurus from "/static/img/icon/docusaurus.png";
import wexinMiniProgram from "/static/img/icon/wexin-mini-program.png";
import npm from "/static/img/icon/npm.png";
import graphql from "/static/img/icon/graphql.png";
import csharp from "/static/img/icon/csharp.png";
import go from "/static/img/icon/go.png";
import nodejs from "/static/img/icon/nodejs.png";
import sqlserver from "/static/img/icon/sqlserver.png";
import mongodb from "/static/img/icon/mongodb.png";
import redis from "/static/img/icon/redis.png";
import azure from "/static/img/icon/azure.png";

import {
  frontendMenuData as frontendData,
  backendMenuData as backendData,
} from "/src/utils/index.js";

function gridItem(title, link, src) {
  return {
    title: title,
    link: link,
    src: src,
  };
}

const frontendList = [
  gridItem(frontendData.markdown, "/docs/markdown", markdown),
  gridItem(frontendData.html, "/docs/html", html),
  gridItem(frontendData.css, "/docs/css", css),
  gridItem(frontendData.javascript, "/docs/javascript", javascript),
  gridItem(frontendData.react, "/docs/react", react),
  gridItem(frontendData.docusaurus, "/docs/docusaurus", docusaurus),
  gridItem(
    frontendData.wexinMiniprogram,
    "/docs/wexin-mini-program",
    wexinMiniProgram
  ),
  gridItem(frontendData.npm, "/docs/npm", npm),
  gridItem(frontendData.graphql, "/docs/graphql", graphql),
];

const backendList = [
  gridItem(backendData.csharp, "/docs/csharp", csharp),
  gridItem(backendData.go, "/docs/go", go),
  gridItem(backendData.nodejs, "/docs/nodejs", nodejs),
  gridItem(backendData.sqlserver, "/docs/sqlserver", sqlserver),
  gridItem(backendData.mongodb, "/docs/mongodb", mongodb),
  gridItem(backendData.redis, "/docs/redis", redis),
  gridItem(backendData.azure, "/docs/azure", azure),
];

export { frontendList, backendList };
