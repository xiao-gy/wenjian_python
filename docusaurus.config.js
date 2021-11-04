// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'python从爬虫到入门',
  tagline: '稳健IT社教程',
  url: 'https://docs.xiao-gy.top',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'xiao-gy', // Usually your GitHub org/user name.
  projectName: 'wenjian_python', // Usually your repo name.
  

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/xiao-gy/wenjian_python/edit/main/website/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'python从爬虫到入门',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'home',
            position: 'left',
            label: '首页',
          },
          {
            href: 'https://github.com/xiao-gy/wenjian_python',
            label: 'Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: "博客",
            items: [
              {
                label: "zklcdc's blog",
                href: 'https://blog.zklcdc.top',
              },
              {
                label: "xiao-gy's blog",
                href: 'https://blog.xiao-gy.top',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Wenjian IT Club, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
