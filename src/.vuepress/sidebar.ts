import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "清单",
      icon: "book",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    }
  ],
});
