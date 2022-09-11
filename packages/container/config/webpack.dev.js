const { merge } = require('webpack-merge');
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

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    moduleFederationPluginConfig
  ]
}

module.exports = merge(commonConfig, devConfig)
