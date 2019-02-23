import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { brakes, oil, tire, wrench } from '../../../content/copy/homepage__about';
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
        <Wrapper>
          <img src={oil} alt='oil changes' />
          <img src={tire} alt='tire repair' />
          <img src={wrench} alt='car maintenance' />
          <img src={brakes} alt='brakes' />
        </Wrapper>
        <Text>
          <Title>{data.site.siteMetadata.homepageHeader}</Title>
          <About>{data.site.siteMetadata.homepageAbout}</About>
          <Contact>Call us today. <br /><a href='tel:+1-978-975-3882'>(978) 975-3882</a></Contact>
        </Text>
      </Section>
    )} />
)

const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #f4f4f4;
    padding: 4rem 0.5rem 0rem;

    @media (max-width: 600px) {
      display: block;
    }
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    column-gap: 1.5rem;
    padding: 0 5%;

    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 0.5rem;
      row-gap: 0.5rem;
      padding: 0;
    }
`;

const Text = styled.div`
    padding: 2rem 0.5rem;
    width: 100%;
    max-width: 48rem;
`;

const Title = styled.h2`
    font-size: 2.25rem;
    // margin: 4rem 0.5rem 2rem;
    color: #333;
    font-weight: 500;
    text-align: center;

    @media (max-width: 1055px) {
      text-align: left;
    }
`;

const About = styled.p`
    // width: 80%;
    font-size: 1rem;
    line-height: 1.5;
    text-align: center;
    // margin: 0 0.5rem;

    @media (max-width: 1055px) {
      text-align: left;
      // width: 100%;
    }
`;

const Contact = styled.p`
    font-size: 1.75rem;
    line-height: 1.5;
    color: #333; 
    font-weight: 700;   
    text-align: center;

    a {
      text-decoration: none;
      color: #333;
    }
`;
