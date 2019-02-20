import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { serviceList } from '../../../content/copy/homepage__servicesList';
import 'tachyons'

export default () => {
    return (
        <Section>
            <StaticQuery
            query={graphql`
                query {
                image: file(relativePath: {eq: "img/services.jpg" }) {
                    childImageSharp {
                    fluid(maxWidth: 1080) {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
                copy: markdownRemark(frontmatter: {name: {eq: "homepage__services"}}) {
                    html
                    frontmatter {
                    title
                    }
                }
                }  
            `}
            render={(data) => (
                <>
                <Image fluid={data.image.childImageSharp.fluid} alt="Services" />
                <div class="w-100 pa2 mw6 mv4">
                    <Title>{data.copy.frontmatter.title}</Title>
                    <Services>
                        {serviceList.map(service => (
                            <Wrapper>
                                <Icon src={service.img} />
                                <Service key={service.id}>{service.service}</Service>
                            </Wrapper>
                        ))}
                    </Services>  
                </div>
                </>
            )} />
        </Section>

    )
}

const Section = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

const Image = styled(Img)`
    width: 40%;
    -webkit-box-shadow: -169px 46px 0px 90px rgba(205,205,205,1);
    -moz-box-shadow: -169px 46px 0px 90px rgba(205,205,205,1);
    box-shadow: -169px 46px 0px 90px rgba(205,205,205,1);
`;

const Title = styled.h2`
    text-align: center;
    font-size: 2.25rem;
    font-weight: 500;
    color: #333;
`;

const Services = styled.ul`
    list-style-type: none;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    margin: 0;
    padding: 0;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Icon = styled.img`
    width: 2.5rem;
`;

const Service = styled.li`
    font-size: 1rem;
    line-height: 1.5;
    margin: 1.5rem 0;
`;
