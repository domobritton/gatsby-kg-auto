import React from "react"
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Hero from '../homepage/components/hero';
import Services from '../homepage/components/services';
import About from '../homepage/components/about';
import Commitment from '../homepage/components/commitment';
import Seo from '../common/seo';

export default ({ data }) => {
  const { business: { rating } } = data.yelp;
  return (
    <Layout>
      <Seo
        title={"Home Page"}
        description={data.site.siteMetadata.description} />
      <Hero 
        title={data.site.siteMetadata.title}
        image={data.banner.childImageSharp.fluid} 
        description={data.site.siteMetadata.description} />
      <Services rating={rating} />
      <About />
      <Commitment />
    </Layout>
  )
}

export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    yelp {
      business(id: "kg-auto-repair-lawrence") {
        rating
      }
    }
    banner: file(relativePath: {eq: "img/flatlay.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
