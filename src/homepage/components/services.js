import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Animated } from "react-animated-css";
import { serviceList } from '../../../content/copy/homepage__servicesList';
import Scroll from '../../common/utilities/scroll';
import styled from 'styled-components';


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
                <Image fluid={data.image.childImageSharp.fluid} alt="Services" className="w-100 mw6" />
                <Scroll>
                    {({isVisible}) => (
                        <Box id='animate'>
                            <Title>{data.copy.frontmatter.title}</Title>
                            <Services>
                                {serviceList.map(service => (
                                    <Wrapper key={service.id}>
                                    <Animated animationIn='fadeInUp' isVisible={isVisible}>
                                        <Icon src={service.img} />
                                        <Service>{service.service}</Service>
                                    </Animated>
                                    </Wrapper>
                                ))}
                            </Services>  
                        </Box>
                    )}
                </Scroll>
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
    padding: 0 0.5rem;
`;

const Image = styled(Img)`
    -webkit-box-shadow: -169px 46px 0px 90px rgba(205,205,205,1);
    -moz-box-shadow: -169px 46px 0px 90px rgba(205,205,205,1);
    box-shadow: -169px 46px 0px 90px rgba(205,205,205,1);

    @media (max-width: 960px) {
        -webkit-box-shadow: none;
        -mox-box-shadow: none;
        box-shadow: none;
    }
`;

const Box = styled.div`
    margin: 2rem 0.5rem;
    max-width: 32rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    padding: 1rem;
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
    word-wrap: break-word;
    text-align: center;
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
