var path = require('path');
var webpack = require('webpack');
//var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: './index.js',
  
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]?[hash]',
              outputPath: 'images/',
              limit: 10000,
            },
          },
          {
            loader: 'img-loader',
          },
        ],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]',
              outputPath: 'i/',
            },
          },
          {
            loader: 'img-loader',          
          },
        ],
      },
    ]
  },
  
  devServer: {
    historyApiFallback: true,
  },
  
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : []
  
};

//if (process.env.NODE_ENV === 'production') {
//  config.plugins.push(
//    new webpack.DefinePlugin({
//      'process.env': {
//        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
//      }
//    }),
//    new webpack.optimize.UglifyJsPlugin()
//  )
//}

module.exports = config;