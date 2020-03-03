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
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-theme-material-ui`
  ],
}