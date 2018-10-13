/** @format */



Object.defineProperty(exports, '__esModule', {
  value: true
});

var _inferno = require('inferno');

var _infernoCreateClass = require('inferno-create-class');

exports.default = (0, _infernoCreateClass.createClass)({
  componentDidMount: function componentDidMount () {
    // eslint-disable-next-line
    jscarousel(this.carouselContainer, {
      noClone: !0,
      animationSpeed: this.props.animationSpeed,
      itemDuration: this.props.itemDuration,
      swipeThreshold: this.props.swipeThreshold
    });
  },
  componentDidUpdate: function componentDidUpdate () {
    // eslint-disable-next-line
    jscarousel(this.carouselContainer, {
      noClone: !0,
      animationSpeed: this.props.animationSpeed,
      itemDuration: this.props.itemDuration,
      swipeThreshold: this.props.swipeThreshold
    });
  },
  render: function render () {
    var _this = this;

    return (0, _inferno.createVNode)(
      1,
      'div',
      this.props.className,
      [
        this.props.children[this.props.children.length - 1],
        this.props.children,
        this.props.children[0]
      ],
      0,
      null,
      null,
      function (el) {
        _this.carouselContainer = el;
      }
    );
  }
});
/** @format */
