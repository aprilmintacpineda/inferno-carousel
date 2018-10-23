/** @format */



Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _inferno = require('inferno');

/** @format */
function InfernoCarousel (props) {
  var _this = this;

  this.props = props;

  this.componentDidMount = function () {
    _this.stop = window.jscarousel(_this.carouselContainer, {
      noClone: true,
      animationSpeed: _this.props.animationSpeed,
      itemDuration: _this.props.itemDuration,
      swipeThreshold: _this.props.swipeThreshold
    });
  };

  this.componenWillUnmount = function () {
    if (_this.stop) {
      _this.stop();
    }
  };

  this.render = function () {
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

InfernoCarousel.prototype = _inferno.Component.prototype;
InfernoCarousel.prototype.constructor = InfernoCarousel;
var _default = InfernoCarousel;
exports.default = _default;
