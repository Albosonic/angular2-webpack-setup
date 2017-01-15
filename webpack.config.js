var ComponentPlugin = require("component-webpack-plugin");
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client');

module.exports = {
    entry: APP_DIR + '/app/app.ts',      
    output: {
      path: BUILD_DIR,
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.ts']      
    },
    module: {
      loaders: [
        { 
          test: /\.ts$/, 
          exclude: /node_modules/,           
          loader: 'ts-loader!babel-loader!ts-jsx-loader'
        }
      ]
    },
    watch:true
};
