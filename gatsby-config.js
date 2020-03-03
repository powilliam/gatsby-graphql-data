/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Gatsby Site',
    theme: {
      light: {
        backgroundColor: '#FFF',
        textColor: '#333',
        headerColor: '#FAFAFA'
      },
      dark: {
        backgroundColor: '#212121',
        textColor: '#E1E1E1',
        headerColor: '#414141'
      }
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/pages/docs/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // In your gatsby-transformer-remark plugin array
        plugins: [{
          resolve: 'gatsby-remark-emojis',
          options: {
            // Deactivate the plugin globally (default: true)
            active : true,
            // Add a custom css class
            class  : 'emoji-icon',
            // In order to avoid pattern mismatch you can specify
            // an escape character which will be prepended to the
            // actual pattern (e.g. `#:poop:`).
            escapeCharacter : '', // (default: '')
            // Select the size (available size: 16, 24, 32, 64)
            size   : 64,
            // Add custom styles
            styles : {
              display      : 'inline',
              margin       : '0',
              'margin-top' : '1px',
              position     : 'relative',
              top          : '5px',
              width        : '25px'
            }
          }
        }]
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-theme-material-ui`
  ],
}