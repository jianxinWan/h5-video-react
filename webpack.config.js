const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "examples/src/index.html"),
  filename: "./index.html"
});
module.exports = {
  entry: path.join(__dirname, "examples/src/index.tsx"),
  output: {
    path: path.join(__dirname, "examples/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "less-loader"]
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