const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const babelConfig = require('./babel.modern')
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "../examples/src/index.html"),
  filename: "./index.html"
});
module.exports = {
  entry: path.join(__dirname, "../examples/src/index.tsx"),
  output: {
    path: path.join(__dirname, "../examples/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
        test: /\.(tsx?)|(jsx?)/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            ...babelConfig,
            babelrc: false,
          }
        }],
      },
      {
        test: /\.css$/,
        use: ["babel-loader", "awesome-typescript-loader"]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  devServer: {
    port: 8848
  }
};