module.exports = {
  siteMetadata: {
    title: "KG AUTO REPAIR",
    description: "KG Auto Repair is an independent automotive repair & service. Located in Lawrence, Massachusetts",
    siteUrl: "https://5c6e6770b6e85400082f7fa0--eager-mccarthy-a5538e.netlify.com/",
    homepageHeader: "About Us",
    homepageAbout: "KG Auto Repair is an independent automotive repair & service facility serving Lawrence and surrounding cities for over 20 years. We are a complete auto repair shop specializing in diagnostics, repairs and maintenance. Our highly experienced mechanics ensure the highest standard in quality repairs. We've built our reputation on honesty and integrity and our goal is to get your vehicle back on the road quickly and efficiently at the best value. Give us a call today and we'll be happy to answer any questions you may have about us, your vehicle, or services we provide.",
    mailChimpUrl: "https://mailchimp.com",
    mailChimpToken: "MAILCHIMP TOKEN HERE",
    facebook: "https://www.facebook.com/KGAutoRepair/", // YOUR FACEBOOK PROFILE HERE
    twitter: "https://twitter.com/kgautorepair", // YOUR TWITTER PROFILE HERE
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Yelp",
        fieldName: "yelp",
        // Url to query from
        url: "https://api.yelp.com/v3/graphql",
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.app/env-vars
          // Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
          Authorization: `bearer L0i2TWcF-xr7BEMCsFUBn9bqOeEJT5Ahr3jenBWPVard6fhDmycqHK2AWSKMalDrisGrTkvyiYZWAdPAZoX7vAmZdELsukTOj9XIHLYvlByIKmeZ32gDrB_BPpFzXHYx`,
          },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1400,
            },
          },
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Karla', 'Playfair Display', 'Lora', 'Roboto']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ['/success'],
        cookieDomain: "tyra-starter.netlify.com",
      }
    }
  ]
}
