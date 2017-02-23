/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*= End of MODULES =*/
/*=============================================<<<<<*/

if (process.env.ASPNETCORE_ENVIRONMENT === 'development' || process.env.ASPNETCORE_ENVIRONMENT === 'dev') {
  process.env = require('../appsettings.json');
}

const PROD = (process.env.ASPNETCORE_ENVIRONMENT === 'production');

module.exports = {
  entry:          {
    main:      [ './Client/main.browser.ts' ],
    polyfills: [ './Client/polyfills.browser.ts' ],
    vendors:    [ './Client/vendors.browser.ts' ]
  },
  output: {
    path: path.resolve(__dirname, '..', 'wwwroot', 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/dist/',
    sourceMapFilename: '[name].map'
  },
  resolve: {
    extensions: ['.js', '.ts'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'awesome-typescript-loader',
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'raw-loader',
          'css-to-string-loader',
          'css-loader?sourceMap',
          'postcss-loader',
          'sass-loader?sourceMap',
        ],
      },
      {
        test: /\.html$/,
        use: [
          'raw-loader'
        ],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          'file-loader?name=[name].[ext]',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['polyfills', 'vendors'].reverse(),
    }),
    // HOT FIX FOR WEIRD WARNINGS ON DEV SERVER
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    ),
  ]
};
