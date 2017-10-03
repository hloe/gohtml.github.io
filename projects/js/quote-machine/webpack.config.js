const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const inProduction = (process.env.NODE_ENV === 'production');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './src/main.js',
      './src/main.scss',
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
          'img-loader',
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false,
    }),
    new HtmlWebpackPlugin({
      title: 'Random Quote Machine',
      filename: 'index.html',
      template: './src/index.ejs',
      inject: true,
      hash: false,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: inProduction,
    }),
  ],
};

if (inProduction) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}
