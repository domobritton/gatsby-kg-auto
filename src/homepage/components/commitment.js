import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

export default () => (
  <Section>
    <StaticQuery
      query={graphql`
        query {
          image: file(relativePath: {eq: "img/commitment.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          copy: markdownRemark(frontmatter: {name: {eq: "homepage__commitment"}}) {
            html
            frontmatter {
              title
            }
          }
        }  
      `}
      render={(data) => (
        <React.Fragment>
          <Wrapper>
            <Title>{data.copy.frontmatter.title}</Title>
            <Line />
            <About dangerouslySetInnerHTML={{__html: data.copy.html}} />
          </Wrapper>
          <Image fluid={data.image.childImageSharp.fluid} alt="Our Commitment" className="w-100 mw6" />
        </React.Fragment>
    )} />
  </Section>
)

const Section = styled.div`
    padding: 0 0.5rem 4rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

const Image = styled(Img)`
    -webkit-box-shadow: 169px 46px 0px 90px rgba(205,205,205,1);
    -moz-box-shadow: 169px 46px 0px 90px rgba(205,205,205,1);
    box-shadow: 169px 46px 0px 90px rgba(205,205,205,1);

    @media (max-width: 1003px) {
      -webkit-box-shadow: none;
      -mox-box-shadow: none;
      box-shadow: none;
    }
`;

const Wrapper = styled.div`
    padding: 2rem 0.5rem;
    width: 100%;
    max-width: 32rem;

    @media (max-width: 1055px) {
      max-width: 48rem;
    }
`;

const Title = styled.h2`
    font-size: 2.25rem;
    color: #333;
    font-weight: 500;
    margin-bottom: 1rem;

    @media (max-width: 1055px) {
      text-align: center;
    }
`;

const Line = styled.hr`
    height: 2px;
    width: 9rem;
    background: #0053ba;
    border: none;
    margin-bottom: 2rem;
    margin-left: 4rem;

    @media (max-width: 1055px) {
      margin: 0 auto;
      margin-bottom: 2rem;
    }
`;

const About = styled.div`
    width: 100%;
    font-size: 1rem;
    line-height: 1.5;
    margin-top: 0;

    @media (max-width: 1055px) {
      margin-bottom: 4rem;
    }
`;
