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
        <div className="flex flex-wrap justify-around w-100 mw9 center mb5">
          <div className="w-100 mw5 mb4">
            <span className="display f2">{data.site.siteMetadata.siteTitle}</span>
            <hr />
            <div className="w-100 flex justify-around items-center pv2">
              <a className="near-white" href={data.site.siteMetadata.facebook}><FaFacebookF /></a>
              <a className="near-white" href={data.site.siteMetadata.twitter}><FaTwitter /></a>
            </div>
          </div>
          <div className="flex flex-column">
            <span className="near-white sans-serif f5 tracked mb3 db">MORE ON {data.site.siteMetadata.siteTitle}</span>
            <Link to="/visit" className="near-white sans-serif f5 tracked pv1 db">VISIT US</Link>
            <Link to="/reviews" className="near-white sans-serif f5 tracked pv1 db">REVIEWS</Link>
            {/* <a href={data.site.siteMetadata.mailChimpUrl} className="near-white sans-serif f5 tracked pv1 db">JOIN OUR MAILING LIST</a> */}
          </div>
        </div>
        <div className="w-100 mw9 center silver mb3">
          <div className="w-100 bb b--mid-gray mv3"></div>
          <div className="flex w-100 mw6 items-center justify-center justify-start-ns">
            <a href="/sitemap.xml" className="silver sans-serif f5 tracked pv1 db mh1">SITEMAP</a>
            <span className="mh1">|</span>
            <Link to="/privacy" className="silver sans-serif f5 tracked pv1 db mh1">PRIVACY</Link>
          </div>
        </div>
        <div className="w-100 mw9 silver center sans-serif f6">
          <p>(C) 2019 KG Automotive</p>
        </div>
      </Footer>
    )} />
)

const Footer = styled.footer`
    padding: 4rem 0.5rem;
    background: #333;
    color: #f4f4f4;
`;
