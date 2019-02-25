import React from "react";
import HeroImage from '../../hero/heroImage';
import styled from 'styled-components';

export default ({image, title, description}) => (
  <>
    <HeroImage image={image} title={title} description={description} />
    <Section>
      <Subtitle>{description}</Subtitle>
    </Section>
    <LogoSection>
      <LogoWrapper>
        <Logo src='./ford.png' alt='Ford' />
        <Logo src='./chevrolet.svg' alt='Chevrolet'/>
        <Bmw src='./BMW.svg' alt='BMW' />
        <Logo src='./lexus.png' alt='Lexus' />
        <Logo src='./toyota.png' alt='Toyota' />
        <Logo src='./infinity.png' alt='Infinity' />
      </LogoWrapper>
    </LogoSection>
  </>
)

const Section = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 0.5rem 1rem;
  align-items: center;
  background: #081B38;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const Subtitle = styled.div`
  font-size: 25px;
  margin: 10px 0;
  padding: 0;
  text-align: center;
  color: #999;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const LogoSection = styled.div`
  padding: 5rem 2rem 5rem;
`;

const LogoWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(6, 1fr);
`;

const Logo = styled.img`
  width: 60px;
`;

const Bmw = styled.img`
  width: 50px;
`;
