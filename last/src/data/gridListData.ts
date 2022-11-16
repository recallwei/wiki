/* eslint-disable @typescript-eslint/no-explicit-any */
import markdown from "@site/static/img/icon/markdown.png";
import html from "@site/static/img/icon/html.png";
import css from "@site/static/img/icon/css.png";
import javascript from "@site/static/img/icon/javascript.png";
import typescript from "@site/static/img/icon/typescript.png";
import react from "@site/static/img/icon/react.png";
import vue from "@site/static/img/icon/vue.png";
import docusaurus from "@site/static/img/icon/docusaurus.png";
import tailwindcss from "@site/static/img/icon/tailwindcss.png";
import sass from "@site/static/img/icon/sass.png";
import wexin_mini_program from "@site/static/img/icon/wexin_mini_program.png";
import npm from "@site/static/img/icon/npm.png";
import yarn from "@site/static/img/icon/yarn.png";
import vite from "@site/static/img/icon/vite.png";
import graphql from "@site/static/img/icon/graphql.png";

import csharp from "@site/static/img/icon/csharp.png";
import go from "@site/static/img/icon/go.png";
import nodejs from "@site/static/img/icon/nodejs.png";
import postgresql from "@site/static/img/icon/postgresql.png";
import microsoft_sqlserver from "@site/static/img/icon/microsoft_sqlserver.png";
import mongodb from "@site/static/img/icon/mongodb.png";
import cosmosdb from "@site/static/img/icon/cosmosdb.png";
import redis from "@site/static/img/icon/redis.png";
import docker from "@site/static/img/icon/docker.png";
import vercel from "@site/static/img/icon/vercel.png";
import microsoft_azure from "@site/static/img/icon/microsoft_azure.png";

import git from "@site/static/img/icon/git.png";
import github from "@site/static/img/icon/github.png";
import yaml from "@site/static/img/icon/yaml.png";
import powershell from "@site/static/img/icon/powershell.png";
import visual_studio_code from "@site/static/img/icon/visual_studio_code.png";
import visual_studio from "@site/static/img/icon/visual_studio.png";
import rider from "@site/static/img/icon/rider.png";
import webstorm from "@site/static/img/icon/webstorm.png";
import wechat_dev_tools from "@site/static/img/icon/wechat_dev_tools.png";

import figma from "@site/static/img/icon/figma.png";

import {
  frontendMenuData as frontendData,
  backendMenuData as backendData,
  othersMenuData as othersData,
} from "./index";

export interface GridItemType {
  readonly title: string;
  readonly link: string;
  readonly src: any;
  readonly fontSize: FontSize;
}

type FontSize = "sm" | "md" | "lg";

function gridItem(
  title: string,
  link: string,
  src: any,
  fontSize: FontSize = "lg"
): GridItemType {
  return {
    title: title,
    link: link,
    src: src,
    fontSize: fontSize,
  };
}

const frontendGridList: Array<GridItemType> = [
  gridItem(frontendData.markdown, "/docs/markdown", markdown),
  gridItem(frontendData.html, "/docs/html", html),
  gridItem(frontendData.css, "/docs/css", css),
  gridItem(frontendData.javascript, "/docs/javascript", javascript),
  gridItem(frontendData.typescript, "/docs/typescript", typescript),
  gridItem(frontendData.react, "/docs/react", react),
  gridItem(frontendData.vue, "/docs/vue", vue),
  gridItem(frontendData.docusaurus, "/docs/docusaurus", docusaurus),
  gridItem(frontendData.tailwind, "/docs/tailwind", tailwindcss),
  gridItem(frontendData.sass, "/docs/sass", sass),
  gridItem(
    frontendData.wexinMiniprogram,
    "/docs/wexin-mini-program",
    wexin_mini_program
  ),
  gridItem(frontendData.npm, "/docs/npm", npm),
  gridItem(frontendData.yarn, "/docs/yarn", yarn),
  gridItem(frontendData.vite, "/docs/vite", vite),
  gridItem(frontendData.graphql, "/docs/graphql", graphql),
];

const backendGridList: Array<GridItemType> = [
  gridItem(backendData.csharp, "/docs/csharp", csharp),
  gridItem(backendData.go, "/docs/go", go),
  gridItem(backendData.nodejs, "/docs/nodejs", nodejs),
  gridItem(backendData.postgresql, "/docs/postgresql", postgresql),
  gridItem(
    backendData.microsoft_sqlserver,
    "/docs/microsoft-sqlserver",
    microsoft_sqlserver,
    "sm"
  ),
  gridItem(backendData.mongodb, "/docs/mongodb", mongodb),
  gridItem(backendData.cosmosdb, "/docs/cosmosdb", cosmosdb),
  gridItem(backendData.redis, "/docs/redis", redis),
  gridItem(backendData.docker, "/docs/docker", docker),
  gridItem(backendData.vercel, "/docs/vercel", vercel),
  gridItem(backendData.azure, "/docs/microsoft-azure", microsoft_azure, "md"),
];

const othersGridList: Array<GridItemType> = [
  gridItem(othersData.git, "/docs/git", git),
  gridItem(othersData.github, "/docs/github", github),
  gridItem(othersData.yaml, "/docs/yaml", yaml),
  gridItem(othersData.powershell, "/docs/powershell", powershell),
  gridItem(
    othersData.visual_studio_code,
    "/docs/visual-studio-code",
    visual_studio_code,
    "sm"
  ),
  gridItem(othersData.visual_studio, "/docs/visual-studio", visual_studio),
  gridItem(othersData.rider, "/docs/rider", rider),
  gridItem(othersData.webstorm, "/docs/webstorm", webstorm),
  gridItem(
    othersData.wechat_dev_tools,
    "/docs/wechat-dev-tools",
    wechat_dev_tools
  ),
  gridItem(othersData.figma, "/docs/figma", figma),
];

export { frontendGridList, backendGridList, othersGridList };
