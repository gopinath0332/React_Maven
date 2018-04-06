const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");
const WriteFilePlugin = require('write-file-webpack-plugin');
const path = require("path");
module.exports = merge(common,{
   devServer: {
      contentBase: path.resolve(__dirname, "../../webapp/"),
      hot: true
   },
   plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new WriteFilePlugin()
   ]
})