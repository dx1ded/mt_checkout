const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")

const isDev = process.env.NODE_ENV === "development"
const isProd = !isDev

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: isDev ? "inline-source-map" : false,
  entry: "./scripts/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js"
  },
  watch: isDev,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  resolve: { extensions: [".js", ".json"] },
  optimization: {
    minimize: isProd,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          }
        }
      })
    ]
  }
}
