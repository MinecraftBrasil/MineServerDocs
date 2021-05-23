/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "GGames Craft",
  tagline: "Documentação do nosso servidor de Minecraft",
  url: "https://minecraftbrasil.github.io/MineServerDocs/",
  baseUrl: "/MineServerDocs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "MinecraftBrasil", // Usually your GitHub org/user name.
  projectName: "MineServerDocs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "GGames Craft",
      logo: {
        alt: "GGames Craft",
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
          title: "Comunidade",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/WPFHwJVVzJ",
            },
          ],
        },
        {
          title: "Mais",
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
      copyright: `Copyright © ${new Date().getFullYear()} GGames Craft.`,
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
