const path = require('path');

module.exports = {
  entry: './src/components/Keyboard.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/, // Add this rule for SCSS files
        use: [
          'style-loader', // Injects styles into DOM
          'css-loader',   // Turns CSS into CommonJS
          'sass-loader',  // Compiles Sass to CSS
        ],
      },
    ],
  },
  externals: {
    react: 'react',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
