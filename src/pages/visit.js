import React from 'react';
import Layout from '../common/layouts';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Seo from '../common/seo';
import { MyMapComponent } from '../visit_us/components/map';
import { Contact } from '../visit_us/components/contact_us';
import styled from 'styled-components';

export default ({ data }) => (
  <Layout>
    <Seo
      title={`Visit ${data.site.siteMetadata.title}`}
      description={data.markdownRemark.frontmatter.title} />
    <HeroWrapper>
    <>
      <Overlay />
      <Img
        className="w-100 vh-50 mw9 center"
        fluid={data.banner.childImageSharp.fluid} />
    </>
    </HeroWrapper>
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

const HeroWrapper = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(49, 49, 49, 0.3);
`;
