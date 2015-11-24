'use strict';

var path            = require('path'),
  webpack         = require('webpack'),
  nodeModulesPath = path.join(__dirname, 'node_modules');

var js_root = './example/src';
var js_dist = path.join(__dirname, './example/dist/origin');

module.exports = [{
  name: 'chartComponent',
  entry: {
    zoom_line: js_root + '/zoom_line.jsx',
    zoom_line_multi: js_root + '/zoom_line_multi.jsx',
    zoom_scatter: js_root + '/zoom_scatter.jsx',
    zoom_area_stack: js_root + '/zoom_area_stack.jsx',
    zoom_area_stack2: js_root + '/zoom_area_stack2.jsx',
    zoom_bar: js_root + '/zoom_bar.jsx',
    zoom_bar_stack: js_root + '/zoom_bar_stack.jsx',
    zoom_bar_group: js_root + '/zoom_bar_group.jsx'
  },

  output: {
    path: js_dist,
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/],
        loaders: ["jsx-loader?insertPragma=React.DOM&harmony"],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ],
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  }
}];
