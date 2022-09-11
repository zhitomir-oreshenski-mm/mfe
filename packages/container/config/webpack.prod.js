const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common')
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const moduleFederationPluginConfig = new ModuleFederationPlugin({
  name: 'container',
  remotes: {
    marketing: `marketing@${domain}/marketing/remoteEntry.js`
  },
  shared: packageJson.dependencies
}); 

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [
    moduleFederationPluginConfig
  ],
}

module.exports = merge(commonConfig, prodConfig)
