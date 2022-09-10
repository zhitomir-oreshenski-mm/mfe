const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common')
const packageJson = require('../package.json');

const moduleFederationPluginConfig = new ModuleFederationPlugin({
  name: 'container',
  remotes: {
    marketing: 'marketing@http://localhost:8081/remoteEntry.js'
  },
  shared: packageJson.dependencies
}); 

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
});

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    htmlWebpackPluginConfig,
    moduleFederationPluginConfig
  ]
}

module.exports = merge(commonConfig, devConfig)
