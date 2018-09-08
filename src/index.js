/** @format */

import './index.css';
import { Component } from 'inferno';
import ObjectAssign from 'object-assign';
import raf from 'raf';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    const carouselItems = [].concat(this.props.children);
    carouselItems.unshift(this.props.children[this.props.children.length - 1]);
    carouselItems.push(this.props.children[0]);

    // Note that there are devices that are both touchable and can have a mouse
    if (
      'ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)
    ) {
      this.isTouchEnabledDevice = true;
    } else {
      this.isTouchEnabledDevice = false;
    }

    this.resizing = false;
    this.shouldNotAutoPlay = false;
    this.currentXPosition = 0;
    this.lastClientWidth = 0;
    this.carouselItems = carouselItems;
    this.interval = null;
    this.moving = false;
    this.touchDetection = {
      started: false,
      startX: null,
      endX: null
    };
    this.currentItemIndex = 0;
  }

  timeout = (callback, ms) => {
    const lastTime = Date.now();

    function tick() {
      if (Date.now() - lastTime > ms) {
        callback();
      } else {
        raf(tick);
      }
    }

    tick();
  };

  simulateInfiniteScroll = newItemIndex => {
    if (!this.carouselItemsList) {
      this.timeout(this.simulateInfiniteScroll, 300);
    } else {
      this.carouselItemsList.style.transition = '';
      if (newItemIndex === this.props.children.length) {
        this.currentXPosition = this.carouselItemsList.clientWidth;
        this.carouselItemsList.style.transform = `translate3d(-${this.currentXPosition}px, 0, 0)`;
      } else if (newItemIndex < 0) {
        this.currentXPosition = this.carouselItemsList.clientWidth * this.props.children.length;
        this.carouselItemsList.style.transform = `translate3d(-${this.currentXPosition}px, 0, 0)`;
      }
    }
  };

  nextItem = () => {
    this.currentXPosition = this.currentXPosition + this.lastClientWidth;
    this.carouselItemsList.style.transition = 'transform 300ms';
    this.carouselItemsList.style.transform = `translate3d(-${this.currentXPosition}px, 0, 0)`;

    this[`carousel-pagination-${this.currentItemIndex}`].classList.remove('active');

    return this.currentItemIndex + 1;
  };

  previousItem = () => {
    this.currentXPosition = this.currentXPosition - this.lastClientWidth;
    this.carouselItemsList.style.transition = 'transform 300ms';
    this.carouselItemsList.style.transform = `translate3d(-${this.currentXPosition}px, 0, 0)`;

    this[`carousel-pagination-${this.currentItemIndex}`].classList.remove('active');

    return this.currentItemIndex - 1;
  };

  updatePage = () => {
    this[`carousel-pagination-${this.currentItemIndex}`].classList.add('active');
  };

  scrollTo = index => {
    this.shouldNotAutoPlay = true;
    this.stopCarousel();
    this.currentXPosition = this.lastClientWidth * (index + 1);

    this.carouselItemsList.style.transition = 'transform 300ms';
    this.carouselItemsList.style.transform = `translate3d(-${this.currentXPosition}px, 0, 0)`;

    if (this.currentItemIndex !== index) {
      this.currentItemIndex = index;
    } else {
      this.playCarousel();
    }
  };

  switchCurrentItem = () => {
    if (this.shouldNotAutoPlay) {
      this.stopCarousel();
    } else {
      this.moving = true;
      const newItemIndex = this.nextItem();
      this.currentItemIndex = newItemIndex === this.props.children.length ? 0 : newItemIndex;
      this.updatePage();
      this.timeout(() => {
        this.simulateInfiniteScroll(newItemIndex);
        this.moving = false;
      }, 310);
    }
  };

  stopCarousel = () => {
    if (this.rafId) {
      this.shouldNotAutoPlay = true;
      raf.cancel(this.rafId);
    }
  };

  playCarousel = () => {
    this.stopCarousel();
    this.shouldNotAutoPlay = false;
    this.lastTime = Date.now();

    const player = () => {
      if (Date.now() - this.lastTime >= 3000) {
        this.switchCurrentItem();
        this.lastTime = Date.now();
      }

      this.rafId = raf(player);
    };

    player();
  };

  resolveX = ev => {
    if (ev instanceof MouseEvent) return ev.clientX;
    return ev.changedTouches[0].clientX || ev.changedTouches[0].pageX;
  };

  touchstart = ev => {
    this.stopCarousel();
    this.shouldNotAutoPlay = true;

    if (ev instanceof MouseEvent) {
      this.touchTarget.addEventListener('mousemove', this.touchmove);
      this.touchTarget.addEventListener('mouseup', this.touchend);
      this.touchTarget.addEventListener('mouseout', this.touchend);
    } else {
      this.touchTarget.addEventListener('touchmove', this.touchmove);
      this.touchTarget.addEventListener('touchend', this.touchend);
    }

    this.touchDetection = {
      started: true,
      startX: this.resolveX(ev),
      lastX: null,
      endX: null
    };
  };

  touchmove = ev => {
    if (!this.moving && this.touchDetection.started) {
      this.touchDetection = ObjectAssign(this.touchDetection, {
        endX: this.resolveX(ev)
      });
      const x = this.currentXPosition + (this.touchDetection.startX - this.touchDetection.endX);
      this.carouselItemsList.style.transition = '';
      this.carouselItemsList.style.transform = `translate3d(-${x}px, 0, 0)`;
    }
  };

  touchend = ev => {
    if (ev instanceof MouseEvent) {
      this.touchTarget.removeEventListener('mousemove', this.touchmove);
      this.touchTarget.removeEventListener('mouseup', this.touchend);
      this.touchTarget.removeEventListener('mouseout', this.touchend);
    } else {
      this.touchTarget.removeEventListener('touchmove', this.touchmove);
      this.touchTarget.removeEventListener('touchend', this.touchend);
    }

    if (!this.moving && this.touchDetection.started) {
      this.touchDetection = ObjectAssign(this.touchDetection, {
        endX: this.resolveX(ev)
      });

      if (Math.abs(this.touchDetection.startX - this.touchDetection.endX) >= 100) {
        if (this.touchDetection.startX > this.touchDetection.endX) {
          const newItemIndex = this.nextItem();
          this.currentItemIndex = newItemIndex === this.props.children.length ? 0 : newItemIndex;

          this.timeout(() => {
            this.simulateInfiniteScroll(newItemIndex);
          }, 310);
        } else {
          const newItemIndex = this.previousItem();
          this.currentItemIndex = newItemIndex < 0 ? this.props.children.length - 1 : newItemIndex;

          this.timeout(() => {
            this.simulateInfiniteScroll(newItemIndex);
          }, 310);
        }
      } else {
        this.carouselItemsList.style.transition = 'transform 300ms';
        this.carouselItemsList.style.transform = `translate3d(-${this.currentXPosition}px, 0, 0)`;
      }

      this.shouldNotAutoPlay = false;
      this.timeout(this.playCarousel, 3000);
      this.updatePage();
    }

    this.touchDetection = {
      started: false,
      startX: null,
      endX: null
    };
  };

  preventDrag = ev => ev.preventDefault();

  adjustView = () => {
    if (!this.carouselItemsList || this.moving) {
      this.timeout(this.adjustView, 300);
    } else if (this.lastClientWidth !== this.carouselItemsList.clientWidth) {
      this.resizing = false;
      this.lastClientWidth = this.carouselItemsList.clientWidth;
      this.scrollTo(this.currentItemIndex);
    }
  };

  resized = () => {
    this.stopCarousel();
    this.timeout(this.adjustView, 1);
  };

  componentWillUnmount = () => {
    this.stopCarousel();

    window.removeEventListener('resize', this.resized);
    this.touchTarget.removeEventListener('mousedown', this.touchstart);
    this.touchTarget.removeEventListener('dragstart', this.preventDrag);

    if (this.isTouchEnabledDevice)
      this.touchTarget.removeEventListener('touchstart', this.touchstart);
  };

  componentDidMount = () => {
    window.addEventListener('resize', this.resized);

    this.playCarousel();

    this.updatePage();

    if (this.isTouchEnabledDevice) this.touchTarget.addEventListener('touchstart', this.touchstart);
    this.touchTarget.addEventListener('mousedown', this.touchstart);
    this.touchTarget.addEventListener('dragstart', this.preventDrag);

    this.lastClientWidth = this.carouselItemsList.clientWidth;
    this.currentXPosition = this.currentXPosition + this.lastClientWidth;
    this.carouselItemsList.style.transform = `translate3d(-${this.currentXPosition}px, 0, 0)`;
  };

  render = () => {
    let className = 'carousel-container';
    if (this.props.className) className += ' ' + this.props.className;

    return (
      <div className={className}>
        <div
          className="carousel-item-list-wrapper"
          ref={el => {
            this.touchTarget = el;
          }}>
          <div
            className="carousel-item-list"
            ref={el => {
              this.carouselItemsList = el;
            }}>
            {this.carouselItems.map((child, i) => (
              <div key={i} className="carousel-item">
                {child}
              </div>
            ))}
          </div>
        </div>
        <div className="pagination">
          {this.props.children.map((_, i) => {
            return (
              <span
                key={i}
                ref={el => {
                  this[`carousel-pagination-${i}`] = el;
                }}
                className="clickable bullet"
                onClick={() => this.scrollTo(i)}
              />
            );
          })}
        </div>
      </div>
    );
  };
}
