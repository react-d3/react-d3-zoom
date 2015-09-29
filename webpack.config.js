'use strict';

var path            = require('path'),
  webpack         = require('webpack'),
  nodeModulesPath = path.join(__dirname, 'node_modules');

var js_root = './example/src';
var js_dist = path.join(__dirname, './example/dist/origin');
var js_dist_min = path.join(__dirname, './example/dist/min');

// 0 stands for development, 1 stands for production
// for development mode: NODE_ENV=0 webpack
// for production mode: NODE_ENV=1 webpack

var ENV = !!(+process.env.NODE_ENV || 0);

module.exports = [{
  name: 'chartComponent',
  devtool: ENV ? "source-map": '',
  entry: {
    zoom_line: js_root + '/zoom_line.jsx',
    zoom_line_multi: js_root + '/zoom_line_multi.jsx',
    zoom_scatter: js_root + '/zoom_scatter.jsx',
    zoom_area_stack: js_root + '/zoom_area_stack.jsx',
    zoom_bar: js_root + '/zoom_bar.jsx',
    zoom_bar_stack: js_root + '/zoom_bar_stack.jsx',
    zoom_bar_group: js_root + '/zoom_bar_group.jsx'
  },

  output: {
    path: ENV ? js_dist_min  : js_dist,
    filename: ENV ? '[name].min.js': '[name].js'
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/],
        loaders: ["react-hot", "babel-loader?stage=0"],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ],
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  plugins: ENV ? [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.ProvidePlugin({
      'd3': 'd3'
    })
  ]: [
    new webpack.ProvidePlugin({
      'd3': 'd3'
    })
  ]
}];
