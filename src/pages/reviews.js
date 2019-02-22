import React from 'react';
import Layout from '../common/layouts';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Seo from '../common/seo';
import { reviewsList } from '../../content/copy/reviewsList';
import styled from 'styled-components';


export default ({ data }) => (
  <Layout>
    <Seo
      title={`Review ${data.site.siteMetadata.title}`}
      description={data.markdownRemark.frontmatter.title} />
    <HeroWrapper>
      <>
        <Overlay />
        <Img 
          className="w-100 vh-50 mw9 center"
          fluid={data.banner.childImageSharp.fluid} />
      </>
    </HeroWrapper>
    <Section>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
        <Grid>
            {reviewsList.map(review => (
                <GridItem key={review.id}>
                    <Image src={review.img} />
                    <Review><Quote src={review.icon} />{review.review}</Review>
                    <Name>{review.name}</Name>
                </GridItem>
            ))}
        </Grid>
    </Section>
  </Layout>
)

export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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

const Section = styled.div`
  padding: 0 5%;
  margin: 4rem 0.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin-top: 4rem;

  @media (max-width: 960px) {
      grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
      grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

const Review = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 1.65rem;
`;

const Name = styled.div`
  font-size: 1.5rem;
  line-height: 1.5;
  margin-top: 1.5rem;
  color: #081C38;
`;

const Image = styled.img`
  width: 80px;
`;

const Quote = styled.img`
  width: 1.5rem;
  padding-right: 0.2rem;
`;
