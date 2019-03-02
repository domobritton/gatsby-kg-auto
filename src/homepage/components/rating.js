import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Yelp from '../../shared/yelp';
import yelp from '../../../content/img/Yelp_trademark_RGB.png';
import styled from 'styled-components';

export const Rating = ({ rating }) => (
    <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            yelp
          }
        }
      } 
    `}

    render={data => (
        <Component>
          <Yelp rating={rating} styles={140}/>
            <Link>AS SEEN ON 
                <a 
                href={data.site.siteMetadata.yelp}
                target='_blank' rel='noopener noreferrer'
                >
                <Logo src={yelp} />
                </a>
            </Link>
        </Component>
    )} />
)

const Component = styled.div`
    margin-left: 11%;
    position: absolute;
    top: 0;
    left: 0;

    @media (max-width: 1003px) {
        position: static;
        margin-bottom: 2rem;
        margin-left: 0;
    }
`;

const Link = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
`;

const Logo = styled.img`
    width: 8rem;
    margin-bottom: 0.35rem;
`;
