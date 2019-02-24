import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import {
  FaFacebookF,
  FaTwitter
} from 'react-icons/fa';
import styled from 'styled-components';
import 'tachyons';


export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteTitle: title
            mailChimpUrl
            facebook
            twitter
          }
        }
      } 
    `}
    render={data => (
      <Footer>
        <Inner>
          <SocialWrapper>
            <Title>{data.site.siteMetadata.siteTitle}</Title>
            <hr />
            <Social>
              <a href={data.site.siteMetadata.facebook} target='_blank' rel='noopener noreferrer'><FaFacebookF /></a>
              <a href={data.site.siteMetadata.twitter} target='_blank' rel='noopener noreferrer'><FaTwitter /></a>
            </Social>
          </SocialWrapper>
          <FooterNav>
            <NavTitle>MORE ON {data.site.siteMetadata.siteTitle}</NavTitle>
            <PageLink to="/visit">VISIT US</PageLink>
            <PageLink to="/reviews">REVIEWS</PageLink>
            {/* <a href={data.site.siteMetadata.mailChimpUrl} className="near-white f5 tracked pv1 db">JOIN OUR MAILING LIST</a> */}
            <Address>264 South Broadway<br />Lawrence, MA 01843</Address>
            <Grid>
              <GridItem>
                <div>WORK HOURS</div>
              </GridItem>
              <GridItem>
                <div>Mon. 8AM - 5PM</div>
                <div>Tue. 8AM - 5PM</div>
                <div>Wed. 8AM - 5PM</div>
              </GridItem>
              <GridItem>
                <div>Thurs. 8AM - 5PM</div>
                <div>Fri. 8AM - 5PM</div>
                <div>Sat. 8AM - 5PM</div>
              </GridItem>
              <GridItem>
                <Sunday>Sunday</Sunday>
                <div>CLOSED</div>
              </GridItem>
            </Grid>
          </FooterNav>
        </Inner>
        <FooterBtm>
          <Line />
          <BtmWrapper>
            <SiteMap href="/sitemap.xml">SITEMAP</SiteMap>
            <span>|</span>
            <Privacy to="/privacy">PRIVACY</Privacy>
          </BtmWrapper>
        </FooterBtm>
        <Copyright>
          <p>(C) 2019 KG Automotive</p>
        </Copyright>
      </Footer>
    )} />
)

const Footer = styled.footer`
    padding: 4rem 0.5rem;
    background: #333;
    color: #f4f4f4;
    position: relative;
`;

const Inner = styled.div`
    margin: 0 auto 4rem;
    width: 100%:
    max-width: 96rem;
    justify-content: space-around;
    flex-wrap: wrap;
    display: flex;
`;

const SocialWrapper = styled.div`
    margin-bottom: 2rem;
    max-width: 16rem;
    width: 100%;
    
    @media (max-width: 600px) {
      text-align: center;
    }
`;

const Title = styled.span`
    font-size: 2.25rem;

`;

const Social = styled.div`
    padding: 0.5rem 0;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    display: flex;
    a {
      color: #f4f4f4;
    }
`;

const FooterNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (max-width: 600px) {
      align-items: center;
    }
`;

const NavTitle = styled.span`
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #f4f4f4;
    letter-spacing: 0.1rem;
`;

const PageLink = styled(Link)`
    font-size: 1rem;
    padding: .25rem 0;
    color: #f4f4f4;
    letter-spacing: 0.1rem;
`;

const FooterBtm = styled.div`
    margin: 0 auto 1rem;
    color: #999;
    width: 100%;
    max-width: 96rem;
`;

const Address = styled.div`
    font-size: 1rem;
    padding: .25rem 0;
    color: lightgray;
    letter-spacing: 0.1rem;
    line-height: 1.5;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    margin: 2rem 0 0;
`;

const GridItem = styled.div`
    border: 1px solid gray;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0.65rem;
    line-height: 1.5;
    
    @media (max-width: 768px) {
      font-size: 0.65rem;
    }

    @media (max-width: 600px) {
      font-size: 0.5rem;
      height: 70px;
    }
`;

const Sunday = styled.div`
    color: red;
`;

const Line = styled.div`
    margin: 1rem 0;
    width: 100%;
    border 1px solid #555;
`;

const BtmWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    max-width: 32rem;
    align-items: center;
`;

const SiteMap = styled.a`
    font-size: 1rem;
    margin: 0 1rem;
    padding: .25rem 0;
    color: #999;
    letter-spacing: 0.1rem;
`;

const Privacy = styled(Link)`
    font-size: 1rem;
    margin: 0 1rem;
    padding: .25rem 0;
    color: #999;
    letter-spacing: 0.1rem; 
`;

const Copyright = styled.div`
    margin: 0 1rem;
    font-size: 0.875rem;
    color: #999;
    width: 100%:
    max-width: 96rem;
`;
