'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = require('inferno');

require('./index.css');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/** @format */

var Carousel = function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel(props) {
    _classCallCheck(this, Carousel);

    var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

    _this.timeout = function (callback, ms) {
      var lastTime = Date.now();

      function tick() {
        if (Date.now() - lastTime > ms) {
          callback();
        } else {
          (0, _raf2.default)(tick);
        }
      }

      tick();
    };

    _this.simulateInfiniteScroll = function (newItemIndex) {
      if (!_this.carouselItemsList) {
        _this.timeout(_this.simulateInfiniteScroll, 300);
      } else {
        _this.carouselItemsList.style.transition = '';
        if (newItemIndex === _this.props.children.length) {
          _this.currentXPosition = _this.carouselItemsList.clientWidth;
          _this.carouselItemsList.style.transform = 'translate3d(-' + _this.currentXPosition + 'px, 0, 0)';
        } else if (0 > newItemIndex) {
          _this.currentXPosition = _this.carouselItemsList.clientWidth * _this.props.children.length;
          _this.carouselItemsList.style.transform = 'translate3d(-' + _this.currentXPosition + 'px, 0, 0)';
        }
      }
    };

    _this.nextItem = function () {
      _this.currentXPosition = _this.currentXPosition + _this.lastClientWidth;
      _this.carouselItemsList.style.transition = 'transform 300ms';
      _this.carouselItemsList.style.transform = 'translate3d(-' + _this.currentXPosition + 'px, 0, 0)';

      return _this.state.currentItemIndex + 1;
    };

    _this.previousItem = function () {
      _this.currentXPosition = _this.currentXPosition - _this.lastClientWidth;
      _this.carouselItemsList.style.transition = 'transform 300ms';
      _this.carouselItemsList.style.transform = 'translate3d(-' + _this.currentXPosition + 'px, 0, 0)';

      return _this.state.currentItemIndex - 1;
    };

    _this.scrollTo = function (index) {
      _this.shouldNotAutoPlay = !0;
      _this.stopCarousel();
      _this.currentXPosition = _this.lastClientWidth * (index + 1);

      _this.carouselItemsList.style.transition = 'transform 300ms';
      _this.carouselItemsList.style.transform = 'translate3d(-' + _this.currentXPosition + 'px, 0, 0)';

      if (_this.state.currentItemIndex !== index) {
        _this.setState({
          currentItemIndex: index
        }, _this.playCarousel);
      } else {
        _this.playCarousel();
      }
    };

    _this.switchCurrentItem = function () {
      if (_this.shouldNotAutoPlay) {
        _this.stopCarousel();
      } else {
        _this.moving = !0;
        var newItemIndex = _this.nextItem();

        _this.setState({
          currentItemIndex: newItemIndex === _this.props.children.length ? 0 : newItemIndex
        }, function () {
          return _this.timeout(function () {
            _this.simulateInfiniteScroll(newItemIndex);
            _this.moving = !1;
          }, 310);
        });
      }
    };

    _this.stopCarousel = function () {
      if (_this.rafId) {
        _this.shouldNotAutoPlay = !0;
        _raf2.default.cancel(_this.rafId);
      }
    };

    _this.playCarousel = function () {
      _this.stopCarousel();
      _this.shouldNotAutoPlay = !1;
      _this.lastTime = Date.now();

      var player = function player() {
        if (3000 <= Date.now() - _this.lastTime) {
          _this.switchCurrentItem();
          _this.lastTime = Date.now();
        }

        _this.rafId = (0, _raf2.default)(player);
      };

      player();
    };

    _this.resolveX = function (ev) {
      if (ev instanceof MouseEvent) return ev.clientX;
      return ev.changedTouches[0].clientX || ev.changedTouches[0].pageX;
    };

    _this.touchstart = function (ev) {
      _this.stopCarousel();
      _this.shouldNotAutoPlay = !0;

      if (ev instanceof MouseEvent) {
        _this.touchTarget.addEventListener('mousemove', _this.touchmove);
        _this.touchTarget.addEventListener('mouseup', _this.touchend);
        _this.touchTarget.addEventListener('mouseout', _this.touchend);
      } else {
        _this.touchTarget.addEventListener('touchmove', _this.touchmove);
        _this.touchTarget.addEventListener('touchend', _this.touchend);
      }

      _this.touchDetection = {
        started: !0,
        startX: _this.resolveX(ev),
        lastX: null,
        endX: null
      };
    };

    _this.touchmove = function (ev) {
      if (!_this.moving && _this.touchDetection.started) {
        _this.touchDetection = (0, _objectAssign2.default)(_this.touchDetection, {
          endX: _this.resolveX(ev)
        });
        var x = _this.currentXPosition + (_this.touchDetection.startX - _this.touchDetection.endX);
        _this.carouselItemsList.style.transition = '';
        _this.carouselItemsList.style.transform = 'translate3d(-' + x + 'px, 0, 0)';
      }
    };

    _this.touchend = function (ev) {
      if (ev instanceof MouseEvent) {
        _this.touchTarget.removeEventListener('mousemove', _this.touchmove);
        _this.touchTarget.removeEventListener('mouseup', _this.touchend);
        _this.touchTarget.removeEventListener('mouseout', _this.touchend);
      } else {
        _this.touchTarget.removeEventListener('touchmove', _this.touchmove);
        _this.touchTarget.removeEventListener('touchend', _this.touchend);
      }

      if (!_this.moving && _this.touchDetection.started) {
        _this.touchDetection = (0, _objectAssign2.default)(_this.touchDetection, {
          endX: _this.resolveX(ev)
        });

        if (100 <= Math.abs(_this.touchDetection.startX - _this.touchDetection.endX)) {
          if (_this.touchDetection.startX > _this.touchDetection.endX) {
            var newItemIndex = _this.nextItem();
            _this.setState({
              currentItemIndex: newItemIndex === _this.props.children.length ? 0 : newItemIndex
            }, function () {
              return _this.timeout(function () {
                _this.simulateInfiniteScroll(newItemIndex);
              }, 310);
            });
          } else {
            var _newItemIndex = _this.previousItem();
            _this.setState({
              currentItemIndex: 0 > _newItemIndex ? _this.props.children.length - 1 : _newItemIndex
            }, function () {
              return _this.timeout(function () {
                _this.simulateInfiniteScroll(_newItemIndex);
              }, 310);
            });
          }
        } else {
          _this.carouselItemsList.style.transition = 'transform 300ms';
          _this.carouselItemsList.style.transform = 'translate3d(-' + _this.currentXPosition + 'px, 0, 0)';
        }

        _this.shouldNotAutoPlay = !1;
        _this.timeout(_this.playCarousel, 3000);
      }

      _this.touchDetection = {
        started: !1,
        startX: null,
        endX: null
      };
    };

    _this.preventDrag = function (ev) {
      return ev.preventDefault();
    };

    _this.resized = function () {
      function adjustView() {
        if (!this.carouselItemsList || this.moving) {
          this.timeout(adjustView, 300);
        } else if (this.lastClientWidth !== this.carouselItemsList.clientWidth) {
          this.resizing = !1;
          this.lastClientWidth = this.carouselItemsList.clientWidth;
          this.scrollTo(this.state.currentItemIndex);
        }
      }

      _this.stopCarousel();
      _this.timeout(adjustView, 0);
    };

    _this.componentWillUnmount = function () {
      _this.stopCarousel();

      window.removeEventListener('resize', _this.resized);
      _this.touchTarget.removeEventListener('mousedown', _this.touchstart);
      _this.touchTarget.removeEventListener('dragstart', _this.preventDrag);

      if (_this.isTouchEnabledDevice) _this.touchTarget.removeEventListener('touchstart', _this.touchstart);
    };

    _this.componentDidMount = function () {
      window.addEventListener('resize', _this.resized);

      _this.playCarousel();

      if (_this.isTouchEnabledDevice) _this.touchTarget.addEventListener('touchstart', _this.touchstart);
      _this.touchTarget.addEventListener('mousedown', _this.touchstart);
      _this.touchTarget.addEventListener('dragstart', _this.preventDrag);

      _this.lastClientWidth = _this.carouselItemsList.clientWidth;
      _this.currentXPosition = _this.currentXPosition + _this.lastClientWidth;
      _this.carouselItemsList.style.transform = 'translate3d(-' + _this.currentXPosition + 'px, 0, 0)';
    };

    _this.render = function () {
      var className = 'carousel-container';
      if (_this.props.className) className += ' ' + _this.props.className;

      return (0, _inferno.createVNode)(1, 'div', className, [(0, _inferno.createVNode)(1, 'div', 'carousel-item-list-wrapper', (0, _inferno.createVNode)(1, 'div', 'carousel-item-list', _this.carouselItems.map(function (child, i) {
        return (0, _inferno.createVNode)(1, 'div', 'carousel-item', child, 0, null, i);
      }), 0, null, null, function (el) {
        _this.carouselItemsList = el;
      }), 2, null, null, function (el) {
        _this.touchTarget = el;
      }), (0, _inferno.createVNode)(1, 'div', 'pagination', _this.props.children.map(function (child, i) {
        var className = 'clickable bullet';
        if (i === _this.state.currentItemIndex) className += ' active';
        return (0, _inferno.createVNode)(1, 'span', className, null, 1, {
          'onClick': function onClick() {
            return _this.scrollTo(i);
          }
        }, i);
      }), 0)], 4);
    };

    var carouselItems = [].concat(_this.props.children);
    carouselItems.unshift(_this.props.children[_this.props.children.length - 1]);
    carouselItems.push(_this.props.children[0]);

    // Note that there are devices that are both touchable and can have a mouse
    if ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch) {
      _this.isTouchEnabledDevice = !0;
    } else {
      _this.isTouchEnabledDevice = !1;
    }

    _this.resizing = !1;
    _this.shouldNotAutoPlay = !1;
    _this.currentXPosition = 0;
    _this.lastClientWidth = 0;
    _this.carouselItems = carouselItems;
    _this.interval = null;
    _this.moving = !1;
    _this.touchDetection = {
      started: !1,
      startX: null,
      endX: null
    };
    _this.state = {
      currentItemIndex: 0
    };
    return _this;
  }

  return Carousel;
}(_inferno.Component);

exports.default = Carousel;