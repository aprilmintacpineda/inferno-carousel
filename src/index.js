/** @format */

import { Component } from 'inferno';

export default class Carousel extends Component {
  componentDidMount () {
    // eslint-disable-next-line
    jscarousel(this.carouselContainer, {
      animationSpeed: this.props.animationSpeed,
      itemDuration: this.props.itemDuration,
      swipeThreshold: this.props.swipeThreshold
    });
  }

  render () {
    return (
      <div
        className={this.props.className}
        ref={el => {
          this.carouselContainer = el;
        }}>
        {this.props.children}
      </div>
    );
  }
}
