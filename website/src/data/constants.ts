// Frontend
const FRONTEND = "前端";
const MARKDOWN = "Markdown";
const HTML = "HTML";
const CSS = "CSS";
const JAVASCRIPT = "JavaScript";
const TYPESCRIPT = "TypeScript";
const REACT = "React";
const DOCUSAURUS = "Docusaurus";
const WEXIN_MINIPROGRAM = "微信小程序";
const NPM = "npm";
const YARN = "Yarn";
const GRAPHQL = "GraphQL";

// Backend
const BACKEND = "后端";
const CSHARP = "C#";
const GO = "Go";
const NODE_JS = "Node.js";
const MICROSOFT_SQLSERVER = "Microsoft SQL Server";
const MONGODB = "MongoDB";
const REDIS = "Redis";
const MICROSOFT_AZURE = "Microsoft Azure";

const ALGORITHM = "算法";
const OPERATING_SYSTEM = "操作系统";
const COMPUTER_NETWORK = "计算机网络";

const JSON = "JSON";
const YAML = "YAML";
const POWERSHELL = "PowerShell";

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
const GITHUB_LINK = "https://github.com/recallwei/";
const TELEGRAM_LINK = "https://t.me/recallwei/";
const GMAIL_ADDRESS = "recall4056@gmail.com";
const WECHAT_ACCOUNT = "LastAdieus";

interface FrontendMenuData {
  readonly frontend: string;
  readonly markdown: string;
  readonly html: string;
  readonly css: string;
  readonly javascript: string;
  readonly typescript: string;
  readonly react: string;
  readonly docusaurus: string;
  readonly wexinMiniprogram: string;
  readonly npm: string;
  readonly yarn: string;
  readonly graphql: string;
}

interface BackendMenuData {
  readonly backend: string;
  readonly csharp: string;
  readonly go: string;
  readonly nodejs: string;
  readonly microsoft_sqlserver: string;
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
  readonly githubLink: string;
  readonly telegramLink: string;
  readonly gmailAddress: string;
  readonly wechatAccount: string;
}

export const frontendMenuData: FrontendMenuData = {
  frontend: FRONTEND,
  markdown: MARKDOWN,
  html: HTML,
  css: CSS,
  javascript: JAVASCRIPT,
  typescript: TYPESCRIPT,
  react: REACT,
  docusaurus: DOCUSAURUS,
  wexinMiniprogram: WEXIN_MINIPROGRAM,
  npm: NPM,
  yarn: YARN,
  graphql: GRAPHQL,
};

export const backendMenuData: BackendMenuData = {
  backend: BACKEND,
  csharp: CSHARP,
  go: GO,
  nodejs: NODE_JS,
  microsoft_sqlserver: MICROSOFT_SQLSERVER,
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
  githubLink: GITHUB_LINK,
  telegramLink: TELEGRAM_LINK,
  gmailAddress: GMAIL_ADDRESS,
  wechatAccount: WECHAT_ACCOUNT,
};
