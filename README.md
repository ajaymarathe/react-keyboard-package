# React Keyboard Package

`React-Keyboard-Package` is a customizable virtual keyboard component for React applications, with support for light and dark themes.

[![NPM](https://img.shields.io/npm/v/react-keyboard-package.svg)](https://www.npmjs.com/package/react-keyboard-package)
[![NPM](https://img.shields.io/npm/dt/react-keyboard-package.svg)](https://www.npmjs.com/package/react-keyboard-package)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

Use npm to install `react-keyboard-package`:

```bash
npm install react-keyboard-package
```

## Usage

Import and use the Keyboard component in your React app:

```bash
import React from 'react';
import Keyboard from 'react-keyboard-package';

const App = () => {
  return (
    <div>
      <h1>Virtual Keyboard</h1>
      <Keyboard currentKey="a" theme="dark" />
    </div>
  );
};

export default App;
```

## Props

| Prop         | Type     | Default     | Description                                                   |
| ------------ | -------- | ----------- | ------------------------------------------------------------- |
| `theme`      | string   | `"light"`   | Sets the theme of the keyboard. Can be `"light"` or `"dark"`. |
| `onInit`     | function | `undefined` | Callback function triggered when the keyboard initializes.    |
| `currentKey` | string   | `null`      | The current key being pressed or active.                      |

## Customization

To customize the keyboard styles, you can override the styles in your project by importing the package's SCSS files and adjusting the variables.

For example:

```bash

//Light Theme Variables
$background-color-light: #e0e7ff; // Background color of keyboard
$key-button-bg-light: #ffffff; // Background color of keys
$key-button-hover-bg-light: #e0e7ff; // Hover background color of keys
$key-text-color-light: #000000; // Text color of keys

//Dark Theme Variables
$background-color-dark: #1f1f1f; // Background color of keyboard
$key-button-bg-dark: #333333; // Background color of keys
$key-button-hover-bg-dark: #444444; // Hover background color of keys
$key-text-color-dark: #ffffff; // Text color of keys

//Global Variables
$keyboard-border-radius: 6px; // Border radius of keys
$keyboard-padding: 10px; // Padding inside the keyboard
$keyboard-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Box shadow of keyboard

```

To override these variables, import the SCSS file and redefine the variables in your own project:

```bash

@import 'react-keyboard-package/dist/styles/Keyboard.scss';

// Example: Override theme variables
$background-color-light: #f0f8ff;
$key-button-bg-light: #ffffff;
$key-button-hover-bg-light: #b3c7ff;

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Thanks ❤️

## License

MIT © [License](https://github.com/ajaymarathe/react-keyboard-package/blob/master/LICENSE)


## Author
Made with ❤️ by [Ajay Marathe](https://github.com/ajaymarathe)

