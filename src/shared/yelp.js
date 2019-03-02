import React, { Component } from 'react';
import one from '../../content/img/small_1@3x.png';
import one_half from '../../content/img/small_1_half@3x.png';
import two from '../../content/img/small_2@3x.png';
import two_half from '../../content/img/small_2_half@3x.png';
import three from '../../content/img/small_3@3x.png';
import three_half from '../../content/img/small_3_half@3x.png';
import four from '../../content/img/small_4@3x.png';
import four_half from '../../content/img/small_4_half@3x.png';
import five from '../../content/img/small_5@3x.png';

export default class Yelp extends Component {

    yelp = () => {
        const { rating } = this.props;
        switch(rating) {
            case 1:
            return one;
            case 1.5:
            return one_half;
            case 2:
            return two;
            case 2.5:
            return two_half;
            case 3:
            return three;
            case 3.5:
            return three_half;
            case 4:
            return four;
            case 4.5:
            return four_half;
            case 5:
            return five;
            default:
            return five;
        }
    }
  render() {
      const image = this.yelp();
      const { styles } = this.props;
    return (
      <div>
        <img src={image} style={{width: styles}} alt='yelp rating' />
      </div>
    )
  }
}
