module.exports = {
  title: 'UI-WebKit',
  tagline: 'Contains JS Framework related material',
  url: 'https://ui-kit.netlify.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'CyberCombat',
  projectName: 'UI-WebKit.github.io',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    image: 'img/runlet.png',
    navbar: {
      hideOnScroll: false,
      title: 'UI-Kit',
      logo: {
        alt: 'UI Kit Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'Versions', label: 'All versions', position: 'right'},
        {
          href: 'https://github.com/krishnaUIDev/UI-Kit',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub Repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'UI-Kit',
          items: [
            {
              label: 'FAQ',
              to: 'docs/faq',
            },
            {
              label: 'Terms of Service',
              to: 'docs/faq',
            },
            {
              label: 'Privacy Policy',
              to: 'docs/faq',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Docs',
              to: 'docs',
            },
            {
              label: 'Releases',
              href: 'https://github.com/krishnaUIDev/UI-Kit/releases',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/krishnaUIDev/UI-Kit',
            },
            {
              label: 'Twitter',
              href: 'https://github.com/krishnaUIDev/UI-Kit',
            },
            {
              html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
                </a>
              `,
            },
          ],
        },
      ],
      logo: {
        alt: 'UI Kit',
        src: 'img/logo.svg',
        href: 'https://google.com',
      },
      copyright: `Created with  &#x2764; by Krishna`,
    },
    googleAnalytics: {
      trackingID: 'G-HRNTMWVXH9',
      anonymizeIP: true, // Should IPs be anonymized?
    },
    algolia: {
      apiKey: 'be3d58e5001e0becb68cd83f0914980f',
      indexName: 'runlet',
      appId: '57UV1WGQ5Q',
    },
  },
  plugins: ['docusaurus-plugin-sass', '@docusaurus/plugin-ideal-image'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'getting-started',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/krishnaUIDev/UI-Kit',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
};
