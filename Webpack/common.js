/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*= End of MODULES =*/
/*=============================================<<<<<*/

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'dev') {
  process.env = require('../appsettings.json');
}

const PROD = (process.env.NODE_ENV === 'production');

module.exports = {
  entry:          {
    main:      [ './Client/main.browser.ts' ],
    polyfills: [ './Client/polyfills.browser.ts' ],
    vendors:    [ './Client/vendors.browser.ts' ]
  },
  output: {
    path: path.resolve(__dirname, '..', 'wwwroot', 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js',
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
          'css-to-string-loader',
          'css-loader?sourceMap',
          'postcss-loader',
          'sass-loader?sourceMap',
        ],
      },
      {
        test: /\.html$/,
        use: [
          'html-loader'
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
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      showError:      true,
      template:       './Client/index.html',
      filename:       './../../Views/Home/Index.cshtml',
      chunksSortMode: 'dependency',
      publicPath:     '/dist/'
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
