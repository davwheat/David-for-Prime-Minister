/* eslint-disable */

module.exports = {
  flags: {
    FAST_DEV: true,
  },
  siteMetadata: {
    title: `David for PM`,
    description: `Vote David for your next Oathall Prime Minister. "If nothing else, we're radical."`,
    author: `@davwheat_`,
    siteUrl: 'https://david4pm.co.uk',
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David for PM`,
        short_name: `David4PM`,
        start_url: `/?utm_source=pwa`,
        background_color: `#000000`,
        theme_color: `#7C0000`,
        display: `standalone`, // no browser ui
        icon: `src/images/fist-transparent_small_sq.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // exclude: [`/admin`],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `team-images`,
        path: `${__dirname}/src/images/the-team/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `priorities-images`,
        path: `${__dirname}/src/images/priorities/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `header-images`,
        path: `${__dirname}/src/images/headerImg/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
  ],
}
