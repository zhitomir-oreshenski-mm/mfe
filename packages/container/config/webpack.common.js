const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
});

module.exports = {
  /**
  * Loader - tell webpackhow to process different files
  * as we start to load them into the project
  */
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  plugins: [htmlWebpackPluginConfig]
}
