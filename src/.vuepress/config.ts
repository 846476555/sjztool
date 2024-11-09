import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "By墨気",
  description: "墨気的三角洲工具箱",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
