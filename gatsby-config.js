/* eslint-disable */

module.exports = {
  siteMetadata: {
    title: `David for PM`,
    description: `Vote David for your next Oathall Prime Minister. "If nothing else, we're radical."`,
    author: `@davwheat`,
    siteUrl: "https://david4pm.co.uk",
  },
  plugins: [
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
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: false,
          database: false,
          firestore: false,
          storage: false,
          messaging: false,
          functions: false,
          analytics: true,
        },
        credentials: {
          apiKey: "AIzaSyCKEaK9XKAaaOx77xyCZ5o3fC0gMjNyjpg",
          authDomain: "david-for-pm.firebaseapp.com",
          databaseURL: "https://david-for-pm.firebaseio.com",
          projectId: "david-for-pm",
          storageBucket: "david-for-pm.appspot.com",
          messagingSenderId: "1057366173215",
          appId: "1:1057366173215:web:fafbc43a64fad92325572a",
          measurementId: "G-406XJLDHX6",
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // exclude: [`/admin`],
      },
    },
  ],
}
