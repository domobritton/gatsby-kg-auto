import React from "react"
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Hero from '../homepage/components/hero';
import Card from '../homepage/components/card';
import Services from '../homepage/components/services';
import About from '../homepage/components/about';
import Commitment from '../homepage/components/commitment';
import Seo from '../common/seo';

export default ({ data }) => {
  let post = data.featuredPost.edges[0].node;
  return (
    <Layout>
      <Seo
        title={"Home Page"}
        description={data.site.siteMetadata.description} />
      <Hero
        title={post.frontmatter.title}
        image={post.frontmatter.postImage.childImageSharp.fluid}
        description={post.frontmatter.description} />
      <Services />
      <About />
      <Commitment />
    </Layout>
  )
}

export const query = graphql`
  query {
    featuredPost: allMarkdownRemark(
      limit: 1,
      sort: {order: DESC, fields: frontmatter___date},
      filter: {frontmatter: {type: {eq: "post"}}}) {
      edges {
        node {
          frontmatter {
            title
            description: metaDescription
            slug
            postImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    cards: allMarkdownRemark(
      skip: 1,
      limit: 3,
      sort: {order: DESC, fields: frontmatter___date},
      filter: {frontmatter: {type: {eq: "post"}}}) {
      edges {
        node {
          frontmatter {
            title
            description: metaDescription
            slug
            postImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`
