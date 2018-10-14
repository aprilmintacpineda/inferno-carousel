/** @format */

import { Component } from 'inferno';

function InfernoCarousel (props) {
  const _this = this;
  _this.props = props;

  _this.componentDidMount = function () {
    window.jscarousel(_this.carouselContainer, {
      noClone: true,
      animationSpeed: _this.props.animationSpeed,
      itemDuration: _this.props.itemDuration,
      swipeThreshold: _this.props.swipeThreshold
    });
  };

  _this.render = function () {
    return (
      <div
        className={_this.props.className}
        ref={el => {
          _this.carouselContainer = el;
        }}>
        <div>{_this.props.children[_this.props.children.length - 1]}</div>
        {_this.props.children.map((child, i) => (
          <div key={i}>{child}</div>
        ))}
        <div>{_this.props.children[0]}</div>
      </div>
    );
  };
}

InfernoCarousel.prototype = Component.prototype;
InfernoCarousel.prototype.constructor = InfernoCarousel;

export default InfernoCarousel;
