// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ncontracts Engineering Handbook',
  tagline: 'Things you need to know as a developer at Ncontracts',
  favicon: "https://ncontracts-cdn.ncontracts.com/1.0.293/logos/logo-ncontracts-blue.svg",
  url: 'https://dev-handbook.ncontracts.com',
  baseUrl: '/',
  organizationName: 'NetworkContractSolutions',
  projectName: 'handbook',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Ncontracts Logo',
          src: "https://ncontracts-cdn.ncontracts.com/1.0.293/logos/logo-ncontracts-blue.svg",
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'handbookSidebar',
            position: 'left',
            label: 'Core Concepts',
          },
          {
            type: 'docSidebar',
            sidebarId: 'processAndPracticeSidebar',
            position: 'left',
            label: "Process & Practice"
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Ncontracts`,
        links: [
          {
            label: "Built with Docusaurus",
            href: "https://docusaurus.io"
          }
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp', 'powershell'],
      },
    }),
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")]
};

module.exports = config;
