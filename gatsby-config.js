module.exports = {
  siteMetadata: {
    navbarLinks: [
      {to: "/makeup", name: "Makeup"},
      {to: "/lifestyle", name: "Lifestyle"},
      {to: "/blog", name: "blog"},
    ],
    title: "KG AUTO REPAIR",
    description: "KG Auto Repair is an independent automotive repair & service. Located in Lawrence, Massachusetts",
    siteUrl: "https://tyra-starter.netlify.com",
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
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: {frontmatter: {type: {eq: "post"}}}
              ) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      slug
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "Gatsby RSS Feed",
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
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
