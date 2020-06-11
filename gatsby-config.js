/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config();

module.exports = {
  siteMetadata: {
      title: 'Teleport',
      titleTemplate: 'Your remote working assistant | Teleport',
      author: 'Teleport',
      twitterUsername: 'teleport_io',
      description: "Let your team know how and when is best to reach you.",
      url: "https://teleport.so",
      image: "https://storage.googleapis.com/teleport-main-website-assets/images/og-vertical-1200.png",
      siteUrl: process.env.HOST
  },
    plugins: [
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                trackingId: process.env.GTAGS_ID,
                head: false,
                anonymize: true,
            },
        },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                environment: process.env.CONTENTFUL_ENVIRONMENT
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Teleport`,
                short_name: `Teleport`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: `src/assets/teleport-logo-mark-full-colour-rgb.png`
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: process.env.HOST,
                resolveEnv: () => process.env.ENV,
                env: {
                    development: {
                        policy: [{ userAgent: '*', disallow: ['/'] }]
                    },
                    test: {
                        policy: [{ userAgent: '*', disallow: ['/'] }]
                    },
                    production: {
                        policy: [{ userAgent: '*', allow: '/' }]
                    }
                }
            }
        }
    ]
};
