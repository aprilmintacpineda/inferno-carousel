/** @format */

import { createClass } from 'inferno-create-class';

export default createClass({
  componentDidMount () {
    // eslint-disable-next-line
    jscarousel(this.carouselContainer, {
      noClone: true,
      animationSpeed: this.props.animationSpeed,
      itemDuration: this.props.itemDuration,
      swipeThreshold: this.props.swipeThreshold
    });
  },
  componentDidUpdate () {
    // eslint-disable-next-line
    jscarousel(this.carouselContainer, {
      noClone: true,
      animationSpeed: this.props.animationSpeed,
      itemDuration: this.props.itemDuration,
      swipeThreshold: this.props.swipeThreshold
    });
  },
  render () {
    return (
      <div
        className={this.props.className}
        ref={el => {
          this.carouselContainer = el;
        }}>
        {this.props.children[this.props.children.length - 1]}
        {this.props.children}
        {this.props.children[0]}
      </div>
    );
  }
});
