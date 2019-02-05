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
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
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
        contentBase: path.join(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            exclude: [ 'images' ],
            dry: false,
        }),
        new HtmlWebpackPlugin({
            title: 'Simple Game',
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
