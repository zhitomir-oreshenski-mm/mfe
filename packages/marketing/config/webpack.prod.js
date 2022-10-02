const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const moduleFederationPluginConfig = new ModuleFederationPlugin({
  name: 'marketing',
  filename: 'remoteEntry.js',
  exposes: {
    './MarketingApp': './src/bootstrap'
  },
  shared: packageJson.dependencies
});

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/marketing/latest/'
  },
  plugins: [
    moduleFederationPluginConfig
  ]
}

module.exports = merge(commonConfig, prodConfig);
