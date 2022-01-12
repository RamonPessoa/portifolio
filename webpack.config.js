const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  output:{
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use:['babel-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader' }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html")
    }),
    new MiniCssExtractPlugin()
  ],

  resolve:{
    alias:{
      "@": path.resolve(__dirname),
      "@fonts": path.resolve(__dirname, "./src/assets/fonts"),
      "@imgs": path.resolve(__dirname, "./src/assets/imgs")
    },
    extensions:['.svg','.png','.sass','.tsx', '.jsx', '...']
  }
}
