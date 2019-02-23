import React from "react"
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Hero from '../homepage/components/hero';
import Services from '../homepage/components/services';
import About from '../homepage/components/about';
import Commitment from '../homepage/components/commitment';
import Seo from '../common/seo';

export default ({ data }) => {
  // const post = data.featuredPost.edges[0].node;
  return (
    <Layout>
      <Seo
        title={"Home Page"}
        description={data.site.siteMetadata.description} />
      <Hero 
        title={data.site.siteMetadata.title}
        image={data.banner.childImageSharp.fluid} 
        description={data.site.siteMetadata.description} />
      <Services />
      <About />
      <Commitment />
    </Layout>
  )
}

export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    banner: file(relativePath: {eq: "img/flatlay.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// export const query = graphql`
//   query {
//     featuredPost: allMarkdownRemark(
//       limit: 1,
//       sort: {order: DESC, fields: frontmatter___date},
//       filter: {frontmatter: {type: {eq: "post"}}}) {
//       edges {
//         node {
//           frontmatter {
//             title
//             description: metaDescription
//             slug
//             postImage {
//               childImageSharp {
//                 fluid(maxWidth: 1920) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     site {
//       siteMetadata {
//         description
//       }
//     }
//   }
// `
