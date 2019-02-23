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
              <a href={data.site.siteMetadata.facebook} target='_blank' rel='noreferrer'><FaFacebookF /></a>
              <a href={data.site.siteMetadata.twitter} target='_blank' rel='noreferrer'><FaTwitter /></a>
            </Social>
          </SocialWrapper>
          <FooterNav>
            <NavTitle>MORE ON {data.site.siteMetadata.siteTitle}</NavTitle>
            <PageLink to="/visit">VISIT US</PageLink>
            <PageLink to="/reviews">REVIEWS</PageLink>
            {/* <a href={data.site.siteMetadata.mailChimpUrl} className="near-white f5 tracked pv1 db">JOIN OUR MAILING LIST</a> */}
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
