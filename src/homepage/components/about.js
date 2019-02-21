import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { brakes, oil, tire, wrench } from '../../../content/copy/homepage__about';
import '../../common/styles/custom.tachyons.css'
import 'tachyons';
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
        <Title>{data.site.siteMetadata.homepageHeader}</Title>
        <About>{data.site.siteMetadata.homepageAbout}</About>
        <Contact>Call us today.<br /><a href='tel:+1-978-975-3882'>(978) 975-3882</a></Contact>
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

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    column-gap: 1.5rem;
    padding: 0 5%;
`;

const Title = styled.h2`
    font-size: 2.25rem;
    margin-top: 4rem;
    color: #333;
    font-weight: 500;
`;

const About = styled.p`
    width: 75%;
    font-size: 1rem;
    line-height: 1.5;
    text-align: center;
    margin-top: 0;
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
