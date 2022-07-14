// Frontend
const MARKDOWN = "Markdown";
const HTML = "HTML";
const CSS = "CSS";
const JAVASCRIPT = "JavaScript";
const TYPESCRIPT = "TypeScript";
const REACT = "React";
const DOCUSAURUS = "Docusaurus";
const WEXIN_MINIPROGRAM = "微信小程序";
const NPM = "npm";
const GRAPHQL = "GraphQL";

// Backend
const CSHARP = "C#";
const GO = "Go";
const NODE_JS = "Node.js";
const MICROSOFT_SQL_SERVER = "Microsoft SQL Server";
const MONGODB = "MongoDB";
const REDIS = "Redis";
const MICROSOFT_AZURE = "Microsoft Azure";

const ALGORITHM = "算法";
const OPERATING_SYSTEM = "操作系统";
const COMPUTER_NETWORK = "计算机网络";

const JSON = "JSON";
const YAML = "YAML";

const SOFTWARE_TESTING = "软件测评";
const INTEGRATED_DEVELOPMENT_ENVIRONMENT = "IDE";

const COPYWRITING_GUIDE = "文案排版指南";
const BEST_WEBSITE_DESIGN = "优质网站设计";
const FIGMA = "Figma";

// Contact me
const GITHUB = "GitHub";
const TELEGRAM = "Telegram";
const GMAIL = "GMail";
const TWITTER = "Twitter";
const WECHAT = "微信";
const ZHIHU = "知乎";

interface FrontendMenuData {
  readonly markdown: string;
  readonly html: string;
  readonly css: string;
  readonly javascript: string;
  readonly typescript: string;
  readonly react: string;
  readonly docusaurus: string;
  readonly wexinMiniprogram: string;
  readonly npm: string;
  readonly graphql: string;
}

interface BackendMenuData {
  readonly csharp: string;
  readonly go: string;
  readonly nodejs: string;
  readonly sqlserver: string;
  readonly mongodb: string;
  readonly redis: string;
  readonly azure: string;
}

interface ContactMeData {
  readonly github: string;
  readonly telegram: string;
  readonly gmail: string;
  readonly twitter: string;
  readonly wechat: string;
  readonly zhihu: string;
}

export const frontendMenuData: FrontendMenuData = {
  markdown: MARKDOWN,
  html: HTML,
  css: CSS,
  javascript: JAVASCRIPT,
  typescript: TYPESCRIPT,
  react: REACT,
  docusaurus: DOCUSAURUS,
  wexinMiniprogram: WEXIN_MINIPROGRAM,
  npm: NPM,
  graphql: GRAPHQL,
};

export const backendMenuData: BackendMenuData = {
  csharp: CSHARP,
  go: GO,
  nodejs: NODE_JS,
  sqlserver: MICROSOFT_SQL_SERVER,
  mongodb: MONGODB,
  redis: REDIS,
  azure: MICROSOFT_AZURE,
};

export const contactMeData: ContactMeData = {
  github: GITHUB,
  telegram: TELEGRAM,
  gmail: GMAIL,
  twitter: TWITTER,
  wechat: WECHAT,
  zhihu: ZHIHU,
};
