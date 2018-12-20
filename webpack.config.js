const webpack = require('webpack')

const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
})

const hotModulePlugin = new webpack.HotModuleReplacementPlugin()

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [htmlPlugin, hotModulePlugin],
  devServer: {
    hot: true,
  },
}
