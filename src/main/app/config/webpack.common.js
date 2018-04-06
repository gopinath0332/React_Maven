const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
   entry: {
      app: "./src/index.js"
   },
   output: {
      filename: "[name].build.js",
      path: path.resolve(__dirname, "../../webapp/dist"),
   },
   plugins: [
      new webpack.optimize.CommonsChunkPlugin({
         name: "common"
      }),
   ],
   module: {
      rules: [{
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
            presets: ['react', 'es2015', 'stage-0',"es2017"],
            plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy',"transform-object-rest-spread"],
        }
    },{
         test: /\.css$/,
         use: [
            'style-loader', 'css-loader'
         ]
      },{
         test: /\.html$/,
         loader: 'html-loader'
       }]
   }
}