import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import 'tachyons'


export default () => (
  <Section>
    <StaticQuery
      query={graphql`
        query {
          image: file(relativePath: {eq: "img/commitment.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          copy: markdownRemark(frontmatter: {name: {eq: "homepage__commitment"}}) {
            html
            frontmatter {
              title
            }
          }
        }  
      `}
      render={(data) => (
        <React.Fragment>
          <div class="w-100 pa2 mw6 mv4">
            <span className="db f2 display dark-gray">{data.copy.frontmatter.title}</span>
            <div className="lh-copy f5 serif mt4" dangerouslySetInnerHTML={{__html: data.copy.html}} />
          </div>
          <Image fluid={data.image.childImageSharp.fluid} alt="The Author" className="w-100 mw6" />
        </React.Fragment>
    )} />
  </Section>
)

const Section = styled.div`
    padding: 0 0.5rem 4rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

const Image = styled(Img)`
    -webkit-box-shadow: 169px 46px 0px 90px rgba(205,205,205,1);
    -moz-box-shadow: 169px 46px 0px 90px rgba(205,205,205,1);
    box-shadow: 169px 46px 0px 90px rgba(205,205,205,1);
`;
