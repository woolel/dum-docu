// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '이덤',
  tagline: '이웃들과 함께 하는 덤바우',
  url: 'http://jinbasil.com',
  baseUrl: '/website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'http://jinbasil.com/website/imgon/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

	plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],  

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
		  
        },
        blog: {		
          showReadingTime: false,
          // Please change this to your repo.
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
		
	 docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
		hideOnScroll: true,  
        title: '이웃들과 함께 하는 덤바우',
        logo: {
          alt: '이덤',
          src: 'http://jinbasil.com/website/imgon/logo.png',
        },
        items: [
		  {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'dumbau',
            label: '덤바우',
          },
		  {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'edom',
            label: '이덤장터',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '농사[농법]',
          },
         {to: '/blog', label: '블로그', position: 'left'},
        ],
      },
      footer: {
        style: 'light',
        links: [
        ],
        copyright: `© ${new Date().getFullYear()} 이덤. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
	  
/*	  announcementBar: {
      id: 'support_us',
      content:
        'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    }, 
	
	*/
	
	zoomSelector: '.markdown img',
	
	  
    }),
	
};

module.exports = config;

