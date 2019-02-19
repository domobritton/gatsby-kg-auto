import React from "react"
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import '../../common/styles/custom.tachyons.css'
import 'tachyons';
import styled from 'styled-components';

export default ({image, title, description}) => (
  <>
    <HeroWrapper>
      <div>
        <Overlay />
          <Img
            className="w-100 vh-50 mw9 center"
            fluid={image}
            alt={description} />
      </div>
        <Title>KG AUTO REPAIR</Title>
    </HeroWrapper>
    <Section>
      {/* <span className="fw1 display dark-gray db tc w-100 mw7 f3 f2-ns">{title}</span> */}
      <Subtitle>{title}</Subtitle>
      <Description>{description}</Description>
      {/* <Link className="db pv3 ph5 tracked ttu b bg-washed-red dark-gray sans-serif no-underline hover-gray" to={props.to}>Read More</Link> */}
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
  top: 30%;
  left: 50%;
  width: 700px;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 80px;
  z-index: 2;
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
