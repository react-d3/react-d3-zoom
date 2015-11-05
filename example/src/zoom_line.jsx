"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var LineZoom = require('../../lib').LineZoom;

(function() {

  var generalChartData = require('json!./data/user.json');

  var chartSeries = [
      {
        field: 'age',
        name: 'Age',
        color: '#ff7f0e'
      }
    ],
    x = function(d) {
      return d.index;
    };

  ReactDOM.render(
      <LineZoom
        data= {generalChartData}
        chartSeries= {chartSeries}
        x= {x}
        zoomX={false}
        zoomY={true}
      />
    , document.getElementById('data_zoom_line')
  )
})()
