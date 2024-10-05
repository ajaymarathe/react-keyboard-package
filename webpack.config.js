const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
        test: /\.scss$/, // Handle SCSS files
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  externals: {
    react: 'react',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/styles/Keyboard.scss', to: 'styles/Keyboard.scss' }, // Copy SCSS file to dist/styles
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
