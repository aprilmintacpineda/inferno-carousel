/** @format */



Object.defineProperty(exports, '__esModule', {
  value: true
});

var _inferno = require('inferno');

function InfernoCarousel (props) {
  var _this = this;
  _this.props = props;

  _this.componentDidMount = function () {
    window.jscarousel(_this.carouselContainer, {
      noClone: !0,
      animationSpeed: _this.props.animationSpeed,
      itemDuration: _this.props.itemDuration,
      swipeThreshold: _this.props.swipeThreshold
    });
  };

  _this.componentDidUpdate = function () {
    window.jscarousel(_this.carouselContainer, {
      noClone: !0,
      animationSpeed: _this.props.animationSpeed,
      itemDuration: _this.props.itemDuration,
      swipeThreshold: _this.props.swipeThreshold
    });
  };

  _this.render = function () {
    return (0, _inferno.createVNode)(
      1,
      'div',
      _this.props.className,
      [
        (0, _inferno.createVNode)(
          1,
          'div',
          null,
          _this.props.children[_this.props.children.length - 1],
          0
        ),
        _this.props.children.map(function (child, i) {
          return (0, _inferno.createVNode)(1, 'div', null, child, 0, null, i);
        }),
        (0, _inferno.createVNode)(1, 'div', null, _this.props.children[0], 0)
      ],
      0,
      null,
      null,
      function (el) {
        _this.carouselContainer = el;
      }
    );
  };
}
/** @format */

InfernoCarousel.prototype = _inferno.Component.prototype;
InfernoCarousel.prototype.constructor = InfernoCarousel;

exports.default = InfernoCarousel;
