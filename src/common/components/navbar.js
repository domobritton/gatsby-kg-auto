import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { SliderMenu } from './sliderMenu';
import styled from 'styled-components';
export default class Navbar extends React.Component {
 state = {
      // Null rather than false to check for initialization
      width: typeof window !== 'undefined' ?
      window.innerWidth : '',
      menuToggle: null,
  }
  targetElement = null;

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    this.targetElement = document.getElementById('slider');
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
    clearAllBodyScrollLocks();
  }

  handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });
  }

  toggleMenu = event => {
    this.setState({
      menuToggle: !this.state.menuToggle,
    })
    setTimeout(() => {
      this.scrollLock();
    }, 0);
  }

  scrollLock = () => {
    debugger;
    const { menuToggle } = this.state;
    if (menuToggle) {
      disableBodyScroll(this.targetElement);
    } else {
      enableBodyScroll(this.targetElement);
    }
  }

  render () {
    const { width } = this.state;
    const isMobile = width <= 960;
    const { menuToggle } = this.state;
    return (
      <StaticQuery
        query={graphql`
        query {
          site {
            siteMetadata {
              siteTitle: title
              mailChimpUrl
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <Header>
            <Inner>
            {isMobile &&        
              <Hamburger className={menuToggle && 'active'} onClick={this.toggleMenu}>
                <Line className="line"></Line>
                <Line className="line"></Line>
                <Line className="line"></Line>
              </Hamburger>
            }
              <Title to="/">{data.site.siteMetadata.siteTitle}</Title>
            </Inner>
            {!isMobile &&
              <DeskMenu>
                {/* <a href={data.site.siteMetadata.mailChimpUrl} className="sans-serif ttu light-red f5 no-underline dib-l">SIGN UP</a> */}
                <DeskLink to="/">HOME</DeskLink>
                <span>|</span>
                <DeskLink to="/visit">VISIT US</DeskLink>
                <span>|</span>
                <DeskLink to="/reviews">REVIEWS</DeskLink>
              </DeskMenu>     
            }
          </Header>
          <SliderMenu
            id='slider'
            active={this.state.menuToggle} />
        </React.Fragment>
      )} />
    )
  }
}

const Header = styled.div`
  position: fixed;
  z-index: 999;
  padding: 1.5rem 0;
  background: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  height: 7vh;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

const Title = styled(Link)`
  font-size: 1.25rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #333;
  letter-spacing: .1em;
  cursor: pointer;
`;

const DeskMenu = styled.div`
  width: 100%;
  max-width: 16rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const DeskLink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  color: #555;
`;

const Hamburger = styled.div`
  &:hover {
    cursor: pointer;
  }

  &.active .line:nth-child(1) {
    width: 23px;
  }

  &.active .line:nth-child(2) {
    width: 30px;
  }

  &.active .line {
    -webkit-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    -o-transform: rotate(30deg);
    transform: rotate(30deg);
  }
`;

const Line = styled.span`
  width: 35px;
  height: 3px;
  background-color: #333;
  display: block;
  margin: 4px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
`;
