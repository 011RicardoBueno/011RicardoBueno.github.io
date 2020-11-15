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
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-151639095-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
         // Enables Google Optimize Experiment ID
        experimentId: "16iQisXuS1qwXDixwB-EWgQ",
          // Defers execution of google analytics script after page load
        defer: false,
      },
    }
  ],
}
