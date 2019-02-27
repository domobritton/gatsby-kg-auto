import React, { Component } from 'react';
import { reviewsList } from '../../../content/copy/reviewsList';
import quote from '../../../content/img/quote.svg';
import four from '../../../content/img/small_4.png';
import five from '../../../content/img/small_5.png';
import yelp from '../../../content/img/Yelp_trademark_RGB.png';
import styled from 'styled-components';

export default class Reviews extends Component {

  state = {
    reviews: '',
  }

  componentDidMount() {
    const yelp = this.props.data.yelp.reviews.review;
    let reviews = [...yelp, ...reviewsList];
    this.setState({ reviews })
  }

  stars = (rating) => {
    if (rating === 4) {
      return (
        <div>
          <Stars src={four} alt='four yelp stars' />
          <Link>Read more on 
            <a 
              href='https://www.yelp.com/biz/kg-auto-repair-lawrence'
              target='_blank' rel='noopener noreferrer'
              >
              <Yelp src={yelp} />
            </a>
          </Link>
        </div>
      )
    } else if (rating === 5) {
      return (
        <div>
          <Stars src={five} alt='five yelp stars' />
          <Link>Read more on 
            <a 
              href='https://www.yelp.com/biz/kg-auto-repair-lawrence'
              target='_blank' rel='noopener noreferrer'
              >
              <Yelp src={yelp} />
            </a>
          </Link>
        </div>
      )
    } else if (rating.length > 0) {
      return (
        <Link>Read more on 
          <a 
            href='https://www.yelp.com/biz/kg-auto-repair-lawrence'
            target='_blank' rel='noopener noreferrer'
            >
            <Yelp src={yelp} />
          </a>
        </Link>
      )
    }
  }

  render() {
    const { reviews } = this.state;
    const { data } = this.props;
    if (!reviews) return null;
    return (
      <Section>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
      <Grid>
          {reviews.map(review => (
              <GridItem key={review.id}>
                  <Image src={review.user.image_url} />
                  <Review><Quote src={quote} />{review.text}</Review>
                  <Name>{review.user.name}</Name>
                  {this.stars(review.rating)}
              </GridItem>
          ))}
      </Grid>
  </Section>
    )
  }
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
  height: 80px;
`;

const Quote = styled.img`
  width: 1.5rem;
  padding-right: 0.2rem;
`;

const Stars = styled.img`
  margin-top: 1rem;
`;

const Link = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.25rem;
  color: lightgray;
`;

const Yelp = styled.img`
  width: 6rem;
`;
