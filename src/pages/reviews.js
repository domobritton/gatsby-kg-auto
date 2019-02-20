import React from 'react';
import Layout from '../common/layouts';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import Seo from '../common/seo';
import { reviewsList } from '../../content/copy/reviewsList';
import styled from 'styled-components';


export default ({ props, data }) => (
  <Layout>
    <Seo
      title={`Review ${data.site.siteMetadata.title}`}
      description={data.markdownRemark.frontmatter.title} />
    <div className="relative">
      <Img fluid={data.banner.childImageSharp.fluid} />
    </div>
    <Section>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
        <Grid>
            {reviewsList.map(review => (
                <GridItem key={review.id}>
                    <div>{review.img}</div>
                    <div>{review.icon}</div>
                    <Review>{review.review}</Review>
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
    banner: file(relativePath: {eq: "img/about__banner.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 620, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

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
  border: 1px solid lightgray;
  padding: 1rem;
`;

const Review = styled.div`
  font-size: 1rem;
  line-height: 1.5;
`;

const Name = styled.div`
  font-size: 1.5rem;
  line-height: 1.5;
  margin-top: 1.5rem;
  color: #081C38;
`;

const Image = styled.img``;

const Icon = styled.img``;
