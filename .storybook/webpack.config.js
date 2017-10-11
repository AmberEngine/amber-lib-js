// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        include: [
          path.resolve(__dirname, '../src/'),
        ],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|jpg|png|svg|gif|ico|svg)$/,
        include: [
          path.resolve(__dirname, '../src', 'static', 'img'),
        ],
        exclude: [
          path.resolve(__dirname, '../src', 'static', 'icons'),
        ],
        loader: 'file-loader?name=[ext]/[name].[ext]',
      },
      {
        test: /\.(otf|ttf|eot|svg|woff)$/,
        include: [
          path.resolve(__dirname, '../src', 'static', 'fonts'),
        ],
        exclude: [
          path.resolve(__dirname, '../src', 'static', 'icons'),
        ],
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
      {
        test: /\.svg$/,
        include: [
          path.resolve(__dirname, '../src', 'static', 'icons'),
        ],
        loader: 'babel-loader!react-svg-loader?jsx=1',
      },
      {
        test: /\.pdf$/,
        include: [
          path.resolve(__dirname, '../src', 'static', 'pdf'),
        ],
        loader: 'file-loader?name=[ext]/[name].[ext]',
      },
    ],
  },
};
