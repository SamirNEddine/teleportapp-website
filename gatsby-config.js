/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config();

module.exports = {
  siteMetadata: {
      title: 'Teleport',
      author: 'Teleport'
  },
    plugins: [
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
    ]
};
