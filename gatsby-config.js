/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Zero11Web',
    description: 'Agência de Marketing Digital',
    url: 'http://localhost:8000/',
    icon: 'src/images/z11logo.png'
  },
  /* Your site config here */
  plugins: [`gatsby-transformer-sharp`, `gatsby-plugin-sharp`, `gatsby-plugin-react-helmet`, `gatsby-plugin-sass`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `src/images/`
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `25341904896`,
      }
    }
  ],
}
