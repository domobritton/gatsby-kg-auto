import React, { Component } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

export default class HeroImage extends Component {
    state = {
        pathname: '',
    }

    componentDidMount() {
        const pathname = window.location.pathname;
        window.addEventListener('scroll', this.handleZoom);

        this.setState({ pathname });
    }

    handleZoom = () => {
        let y = window.scrollY;
        const el = document.getElementsByClassName('hero')[0];
        let s = el.offsetTop;
        if (y > s && y < 600) {
            el.style.width = `${window.innerWidth * (1 + (y - s) / 1200)}px`;
        }
        if (y <= s) {
            el.style.width = window.innerWidth;
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleZoom);
    }
  render() {
      const { pathname } = this.state;
      const { image, title, description } = this.props;
    return (
    <HeroWrapper>
      <>
        <Overlay />
        <Img
          id='hero'
          style={{ width: '100%', maxHeight: '620px', transition: 'height 9999999s'}}
          className="vh-57 center hero"
          fluid={image}
          alt={description} />
      </>
      {pathname === '/' &&
      <Title>{title}</Title>
      }
    </HeroWrapper>
    )
  }
}

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
  margin: -30px 0 0 -350px;
  color: white;
  font-size: 80px;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 60px;
  }

  @media (max-width: 600px) {
    font-size: 40px;
  }
`;
