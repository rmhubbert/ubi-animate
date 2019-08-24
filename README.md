# UbiAnimate

Fast & lightweight CSS Animations for toast / snackbar type notifications.

## Installation

NPM

```bash
npm install ubi-animate
```

Yarn

```bash
yarn add ubi-animate
```

You can also link directly via CDN at [jsDelivr](https://cdn.jsdelivr.net/gh/rmhubbert/ubi-animate@latest/dist/ubianimate.min.css).

## Usage

The easiest way to get your desired animation classes is via [the demo app](https://rmhubbert.github.io/ubi-animate).

Alternatively, start with the 'animate' class, followed by the animation effect class then the animation direction class (up|down|left|right|center).

```html
<div class="animate grow-in right">Your Animated Content</div>
```

## Customisation

UbiAnimate can be easily customised via Sass variables.

Simply override any variables (a full listing can be found in src/\_variables.scss) in your main Sass file before importing the library from src/ubianimate.scss.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
