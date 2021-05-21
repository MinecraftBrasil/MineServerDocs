/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "GGames Craft Documentação",
  tagline: "Dinosaurs are cool",
  url: "https://minecraftbrasil.github.io/MineServerDocs/",
  baseUrl: "/MineServerDocs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "MinecraftBrasil", // Usually your GitHub org/user name.
  projectName: "MineServerDocs", // Usually your repo name.
  themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [],
  themeConfig: {
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: "bottom",
    },
    navbar: {
      title: "GGames Craft Documentação",
      logo: {
        alt: "GGames Craft Documentação Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/MinecraftBrasil/MineServerDocs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/MinecraftBrasil/MineServerDocs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MineBrasil, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/MinecraftBrasil/MineServerDocs/edit/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/MinecraftBrasil/MineServerDocs/edit/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
