import React from "react";
import Img from 'gatsby-image';
import styled from 'styled-components';

export default ({image, title, description}) => (
  <>
    <HeroWrapper>
      <>
        <Overlay />
        <Img
          className="w-100 vh-50 mw9 center"
          fluid={image}
          alt={description} />
      </>
      <Title>KG AUTO REPAIR</Title>
    </HeroWrapper>
    <Section>
      <Subtitle>{title}</Subtitle>
      <Description>{description}</Description>
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

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 700px;
  height: 150px;
  text-align: center;
  margin: -70px 0 0 -350px;
  color: white;
  font-size: 80px;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 60px;
  }

  @media (max-width: 600px) {
    font-size: 50px;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 0.5rem 2rem;
  align-items: center;
  background: #f4f4f4;
`;

const Subtitle = styled.h2`
  font-size: 40px;
  width: 75%;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const Description = styled.div`
  font-size: 25px;
  margin: 10px 0;
  padding: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const LogoSection = styled.div`
  padding: 0 2rem 4rem;
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
