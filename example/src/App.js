/** @format */

import { Component } from 'inferno';
import InfernoCarousel from './lib';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="box">
          <p>
            <strong>NOTE:</strong> The images I used in these examples are random images.{' '}
            <strong>I do not own any of these images.</strong>
          </p>

          <h3>Features</h3>
          <ul>
            <li>
              The carousel is touch and mouse pointer friendly. That means, you can use your mouse
              pointer to navigate around the carouse, and swipe left and right for touch devices.
            </li>
            <li>
              The carousel is able to simulate an infinite scroll on the left and right side. That
              means, you can infinitely scroll to right and you {'wouldn\'t'} see the carousel scroll
              back to the first item.
            </li>
            <li>
              The carousel {'doesn\'t'} care (or at least {'it\'s'} not suppose to) what you put
              inside of it as {'it\'s'} children.{' '}
              <strong>
                But {'it\'s'} up to you to style them properly. The only job of the carousel is to
                pan the items left to right.
              </strong>
            </li>
            <li>
              The carousel component is aimed to be as flexible as possible, you can put it anywhere
              and then style {'it\'s'} container.
            </li>
          </ul>

          <a
            href="https://github.com/aprilmintacpineda/inferno-carousel"
            target="_blank"
            rel="noopener noreferrer">
            See GitHub Repo
          </a>
        </div>
        <div className="clear-float box">
          <h1>Floating carousel</h1>
          <InfernoCarousel
            swipeThreshold={150}
            animationSpeed={300}
            itemDuration={3000}
            className="images-carousel">
            <img
              onClick={() => {
                alert('yow');
              }}
              src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Feskipaper.com%2Fimages%2Frandom-wallpaper-8.jpg&f=1"
            />
            <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimages2.fanpop.com%2Fimages%2Fphotos%2F6000000%2FRandom-random-6054526-1280-1024.jpg&f=1" />
            <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimages2.fanpop.com%2Fimages%2Fphotos%2F5500000%2FRandom-wallpapers-random-5549791-1280-800.jpg&f=1" />
          </InfernoCarousel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis non est et
            rutrum. Quisque feugiat vulputate tempus. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Etiam viverra blandit tellus, ac faucibus
            mauris iaculis at. Nam mollis leo at purus mollis suscipit. Nulla nec maximus magna.
            Suspendisse tristique bibendum neque. Vivamus bibendum augue arcu, sed consectetur magna
            aliquam placerat.
          </p>
          <p>
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec ornare blandit porttitor. Pellentesque bibendum elit orci, nec ultricies libero
            vehicula in. Sed velit mauris, sagittis ut ullamcorper quis, laoreet eget arcu. Cras
            rhoncus tellus quis nunc commodo dictum non eu est. Sed in eros mauris. Aenean arcu
            magna, iaculis sed pharetra in, ullamcorper ac purus. Proin dapibus at elit ut semper.
            Donec vel nibh eget eros luctus dignissim vel sollicitudin dolor. Curabitur id mauris ac
            purus rhoncus gravida non id lacus. Sed lacinia vestibulum lacus a lobortis.
          </p>
          <p>
            Vivamus varius egestas maximus. Proin nisl dui, bibendum eget ipsum vitae, laoreet
            lacinia nisi. Praesent tempus, diam eu mollis fermentum, ligula felis pharetra arcu, id
            molestie dui nunc quis libero. Proin vulputate feugiat augue, ac pharetra enim mollis
            in. Vivamus dolor diam, ultricies vel elementum sit amet, dapibus eget leo. Proin ut
            enim bibendum, pellentesque mi vel, vestibulum nibh. Maecenas eu orci quis enim sagittis
            scelerisque ut quis ligula. Pellentesque eu leo felis. Etiam quis egestas lacus, id
            placerat lectus. Nunc fermentum vulputate vehicula.
          </p>
        </div>
        <div className="box">
          <h1>Carousel with different content</h1>

          <InfernoCarousel
            swipeThreshold={150}
            animationSpeed={300}
            itemDuration={3000}
            className="carousel-with-different-content">
            <div className="item">
              <p>
                Morbi convallis erat a imperdiet pharetra. Curabitur at volutpat lacus, et malesuada
                enim. Proin eget erat nibh. Etiam ac metus dignissim, tempor velit non, suscipit
                orci. Vivamus bibendum nibh quis lectus pharetra iaculis. In gravida maximus
                laoreet. Aliquam imperdiet lobortis fringilla. Donec lobortis quis elit nec
                imperdiet. Phasellus tincidunt venenatis nulla, in dictum dui ultrices eget.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Vestibulum in aliquet lacus, eget scelerisque ante. Maecenas fermentum
                blandit magna vitae dictum. Etiam at commodo augue. Curabitur quis ligula hendrerit,
                feugiat purus ut, faucibus urna.
              </p>
            </div>
            <div className="item  item-2">
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Nunc a rhoncus enim. Mauris euismod hendrerit tincidunt. Cras at velit magna.
                Duis malesuada euismod justo, et luctus turpis elementum ut. Quisque sodales ex
                lacus, vitae auctor nulla malesuada a. Vivamus luctus dapibus bibendum.
              </p>
            </div>
            <div className="item  item-3">
              <p>
                Nullam faucibus velit a eleifend interdum. Cras nisi eros, fringilla ac metus a,
                ullamcorper aliquam ligula. Aliquam egestas purus ac lacus mollis, sodales cursus
                nisi varius. Aenean accumsan quam ut ipsum faucibus, non cursus ante dignissim.
                Pellentesque a arcu ut diam egestas elementum nec ut dui. In non nibh vitae dui
                imperdiet sollicitudin. Suspendisse non dapibus metus, sit amet lacinia tellus. Ut
                blandit nibh eget nulla elementum iaculis.
              </p>
            </div>
          </InfernoCarousel>

          <br />

          <InfernoCarousel
            swipeThreshold={150}
            animationSpeed={300}
            itemDuration={3000}
            className="carousel-with-different-content-2">
            <div className="item">
              <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Feskipaper.com%2Fimages%2Frandom-wallpaper-8.jpg&f=1" />
              <p>
                Morbi convallis erat a imperdiet pharetra. Curabitur at volutpat lacus, et malesuada
                enim. Proin eget erat nibh. Etiam ac metus dignissim, tempor velit non, suscipit
                orci. Vivamus bibendum nibh quis lectus pharetra iaculis. In gravida maximus
                laoreet. Aliquam imperdiet lobortis fringilla. Donec lobortis quis elit nec
                imperdiet. Phasellus tincidunt venenatis nulla, in dictum dui ultrices eget.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Vestibulum in aliquet lacus, eget scelerisque ante. Maecenas fermentum
                blandit magna vitae dictum. Etiam at commodo augue. Curabitur quis ligula hendrerit,
                feugiat purus ut, faucibus urna.
              </p>
            </div>
            <div className="item  item-2">
              <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimages2.fanpop.com%2Fimages%2Fphotos%2F6000000%2FRandom-random-6054526-1280-1024.jpg&f=1" />
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Nunc a rhoncus enim. Mauris euismod hendrerit tincidunt. Cras at velit magna.
                Duis malesuada euismod justo, et luctus turpis elementum ut. Quisque sodales ex
                lacus, vitae auctor nulla malesuada a. Vivamus luctus dapibus bibendum.
              </p>
            </div>
            <div className="item  item-3">
              <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimages2.fanpop.com%2Fimages%2Fphotos%2F5500000%2FRandom-wallpapers-random-5549791-1280-800.jpg&f=1" />
              <p>
                Nullam faucibus velit a eleifend interdum. Cras nisi eros, fringilla ac metus a,
                ullamcorper aliquam ligula. Aliquam egestas purus ac lacus mollis, sodales cursus
                nisi varius. Aenean accumsan quam ut ipsum faucibus, non cursus ante dignissim.
                Pellentesque a arcu ut diam egestas elementum nec ut dui. In non nibh vitae dui
                imperdiet sollicitudin. Suspendisse non dapibus metus, sit amet lacinia tellus. Ut
                blandit nibh eget nulla elementum iaculis.
              </p>
            </div>
          </InfernoCarousel>
        </div>
        <div className="box">
          <h1>Not properly styled carousel</h1>

          <p>
            Since the carousel does not know what you are putting inside of it, you have to style
            them to ensure that they fit properly. The carousel {'doesn\'t'} break, but of course the
            contents inside of it will. {'It\'s'} Simple and easy. Just give the images width of 100%
            then {'that\'s'} it, if images have different sizes, you have to ensure that their
            heights fit as well. {'There\'s'} a trick that would allow you to have your images on the
            same sizes. You can use the trick for variety of things like adding a placeholder for
            the image. It goes something like this:
            <code>
              {'{'}
              <code>
                <p>width: 100%;</p>
                <p>height: 0;</p>
                <p>padding-bottom: 30%;</p>
              </code>
              {'}'}
            </code>
            check the code for the Floating carousel example, I used it there.
          </p>

          <InfernoCarousel swipeThreshold={150} animationSpeed={300} itemDuration={3000}>
            <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Feskipaper.com%2Fimages%2Frandom-wallpaper-8.jpg&f=1" />
            <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimages2.fanpop.com%2Fimages%2Fphotos%2F6000000%2FRandom-random-6054526-1280-1024.jpg&f=1" />
            <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimages2.fanpop.com%2Fimages%2Fphotos%2F5500000%2FRandom-wallpapers-random-5549791-1280-800.jpg&f=1" />
          </InfernoCarousel>
        </div>
      </div>
    );
  }
}

export default App;
