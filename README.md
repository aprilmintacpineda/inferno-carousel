<!-- @format -->

# inferno-carousel

Carousel component for InfernoJS.

See [Demo](https://aprilmintacpineda.github.io/inferno-carousel/).

## install

```sh
npm i -s inferno-carousel js-carousel
```

## Usage

On your main entry file:

```jsx
import 'js-carousel';
```

Then, whenever you want to use the component.

```jsx
import InfernoCarousel from 'inferno-carousel';
```

Then:

```jsx
<InfernoCarousel animationSpeed={500} itemDuration={5000} swipeThreshold={150}>
  <img src="path-to-image" />
  <img src="path-to-image" />
  <img src="path-to-image" />
  <img src="path-to-image" />
  <img src="path-to-image" />
</InfernoCarousel>
```

You can also specify a `className` for the container of the carousel by providing a `className` prop to it.

- `animationSpeed` is the speed (in terms of milliseconds) of the transition animation.
- `itemDuration` is the amount of time (in terms of milliseconds) it has to wait before transitioning to the next item.
- `swipeThreshold` is the sensitivity of swipe, the lower the number the more sensitive the swipe will be, you don't want it to be very high otherwise the users would have a hard time navigating around using swipe. You don't want it to be very low, otherwise a click might become enough to navigate around using swipe. I suggest starting at `150` and tweaking it from there according to how you like it.

`inferno-carousel` uses [js-carousel](https://github.com/aprilmintacpineda/js-carousel).
