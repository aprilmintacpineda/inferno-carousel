/** @format */

import { Component } from 'inferno';

function InfernoCarousel (props) {
  this.props = props;

  this.componentDidMount = () => {
    this.stop = window.jscarousel(this.carouselContainer, {
      noClone: true,
      animationSpeed: this.props.animationSpeed,
      itemDuration: this.props.itemDuration,
      swipeThreshold: this.props.swipeThreshold
    });
  };

  this.componenWillUnmount = () => {
    if (this.stop) {
      this.stop();
    }
  };

  this.render = () => {
    return (
      <div
        className={this.props.className}
        ref={el => {
          this.carouselContainer = el;
        }}>
        <div>{this.props.children[this.props.children.length - 1]}</div>
        {this.props.children.map((child, i) => (
          <div key={i}>{child}</div>
        ))}
        <div>{this.props.children[0]}</div>
      </div>
    );
  };
}

InfernoCarousel.prototype = Component.prototype;
InfernoCarousel.prototype.constructor = InfernoCarousel;

export default InfernoCarousel;
