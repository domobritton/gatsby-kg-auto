import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';


export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            homepageHeader
            homepageAbout
          }
        }
      }  
    `}
    render={(data) => (
      <Section>
        <Title>{data.site.siteMetadata.homepageHeader}</Title>
        <About>{data.site.siteMetadata.homepageAbout}</About>
        <Contact>Call us today.<br />(978) 975-3882</Contact>
      </Section>
    )} />
)

const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #f4f4f4;
    padding: 4rem 0.5rem;
`;

const Title = styled.h2`
    font-size: 2.25rem;
`;

const About = styled.p`
    width: 75%;
    font-size: 1rem;
    line-height: 1.5;
    font-family: Lora, serif !important;
    text-align: center;
`;

const Contact = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    font-family: Lora, serif !important;
    text-align: center;
`;
