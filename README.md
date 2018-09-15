<!-- @format -->

# inferno-carousel

Carousel component for infernojs.

See [Demo](https://aprilmintacpineda.github.io/inferno-carousel/).

## install

```sh
npm i -s inferno-carousel
```

## Usage

```jsx
import InfernoCarousel from 'inferno-carousel';
```

Then:

```jsx
<InfernoCarousel animationSpeed={500} itemDuration={5000}>
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

`inferno-carousel` uses [js-carousel](https://github.com/aprilmintacpineda/js-carousel).
