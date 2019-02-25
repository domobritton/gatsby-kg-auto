import React from 'react';
import Layout from '../common/layouts';
import HeroImage from '../hero/heroImage';
import { graphql } from 'gatsby';
import Seo from '../common/seo';
import { MyMapComponent } from '../visit/components/map';
import { Contact } from '../visit/components/contact_us';

export default ({ data }) => (
  <Layout>
    <Seo
      title={`Visit ${data.site.siteMetadata.title}`}
      description={data.markdownRemark.frontmatter.title} />
    <HeroImage 
      image={data.banner.childImageSharp.fluid}
      title={data.site.siteMetadata.title}
      description={data.markdownRemark.frontmatter.title} />
    <Contact data={data} />
    <MyMapComponent isMarkerShown />
  </Layout>
)

export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: {name: {eq: "visit_us__copy"}}) {
      html
      frontmatter {
        title
      }
    }
    banner: file(relativePath: {eq: "img/about__banner.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 620, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
