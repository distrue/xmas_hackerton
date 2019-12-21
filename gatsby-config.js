/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'XMasHackerton',
        short_name: 'XMas',
        start_url: '/?pwa=true',
        background_color: '#ffffff',
        theme_color: '#1eccf9',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
    // For the web app manifest to be cached, we'll need to list gatsby-plugin-manifest BEFORE gatsby-plugin-offline.
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        appendScript: require.resolve('./src/sw-extension.js'),
      },
    },
  ],
};
