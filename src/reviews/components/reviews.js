import React from 'react';
import { reviewsList } from '../../../content/copy/reviewsList';
import styled from 'styled-components';

export const Reviews = ({ data }) => {
  return (
    <Section>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
        <Grid>
            {reviewsList.map(review => (
                <GridItem key={review.id}>
                    <Image src={review.img} />
                    <Review><Quote src={review.icon} />{review.review}</Review>
                    <Name>{review.name}</Name>
                </GridItem>
            ))}
        </Grid>
    </Section>
  )
}

const Section = styled.div`
  padding: 0 5%;
  margin: 4rem 0.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin-top: 4rem;

  @media (max-width: 960px) {
      grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
      grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

const Review = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 1.65rem;
`;

const Name = styled.div`
  font-size: 1.5rem;
  line-height: 1.5;
  margin-top: 1.5rem;
  color: #081C38;
`;

const Image = styled.img`
  width: 80px;
`;

const Quote = styled.img`
  width: 1.5rem;
  padding-right: 0.2rem;
`;
