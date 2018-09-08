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
<InfernoCarousel>
  <img src="path-to-image" />
  <img src="path-to-image" />
  <img src="path-to-image" />
  <img src="path-to-image" />
  <img src="path-to-image" />
</InfernoCarousel>
```

You can also specify a `className` for the container of the carousel by providing a `className` prop to it.

#### loopEvery

By default the carousel changes item every 3 seconds. You can override this behaviour by providing `loopEvery` prop that should be a number, like so.

```jsx
<InfernoCarousel loopEvery={5}>
  <img src="path-to-image" />
  <img src="path-to-image" />
  <img src="path-to-image" />
  <img src="path-to-image" />
  <img src="path-to-image" />
</InfernoCarousel>
```

In the example above the carousel would change item every 5 seconds.
