module.exports = {
  siteMetadata: {
    title: `Gatsby Source GraphCMS Example`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api.graphcms.com/simple/v1/vinylbase`,
        query: require("./gatsby/configQuery")
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Source GraphCMS Example`,
        short_name: `Gatsby + GraphCMS`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#61045f`,
        display: `minimal-ui`,
        icons: [
          {
            src: `/favicons/chrome-192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/favicons/chrome-512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`
  ]
};
