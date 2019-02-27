import React from 'react';
import Layout from '../common/layouts';
import HeroImage from '../hero/heroImage';
import { graphql } from 'gatsby';
import Seo from '../common/seo';
import Reviews from '../reviews/components/reviews';

export default ({ data }) => (
  <Layout>
    <Seo
      title={`Review ${data.site.siteMetadata.title}`}
      description={data.markdownRemark.frontmatter.title} />
      <HeroImage 
        image={data.banner.childImageSharp.fluid}
        title={data.site.siteMetadata.title}
        description={data.markdownRemark.frontmatter.title} />
    <Reviews data={data} />
  </Layout>
)

export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    yelp {
      reviews(business: "kg-auto-repair-lawrence") {
        total
        review {
          id
          rating
          text
          user {
            name
            image_url
          }
        }
      }
    }
    markdownRemark(frontmatter: {name: {eq: "reviews__copy"}}) {
      html
      frontmatter {
        title
      }
    }
    banner: file(relativePath: {eq: "img/review__banner.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 620, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
