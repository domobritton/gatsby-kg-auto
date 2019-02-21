import React from 'react';
import Layout from '../common/layouts';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Seo from '../common/seo';
import { MyMapComponent } from '../visit_us/components/map';
import { Contact } from '../visit_us/components/contact_us';

export default ({ props, data }) => (
  <Layout>
    {console.log(process.env.API_KEY)}
    <Seo
      title={`Visit ${data.site.siteMetadata.title}`}
      description={data.markdownRemark.frontmatter.title} />
    <div className="relative">
      <Img fluid={data.banner.childImageSharp.fluid} />
      {/* <h1
        className="fw1 tc f2 display absolute dn dib-ns"
        style={{bottom: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>About {data.site.siteMetadata.title}</h1> */}
    </div>
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
