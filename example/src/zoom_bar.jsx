"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var BarZoom = require('../../lib').BarZoom;

(function() {
  var generalChartData = require('dsv?delimiter=\t!./data/letter.tsv')

  var chartSeries = [
      {
        field: 'frequency',
        name: 'Frequency'
      }
    ],
    x = function(d) {
      return d.letter;
    },
    xScale = 'ordinal',
    yTicks = [10, "%"];

  ReactDOM.render(
    <BarZoom
      data= {generalChartData}
      chartSeries = {chartSeries}
      x= {x}
      xScale= {xScale}
      yTicks= {yTicks}
      zoomX= {false}
      zoomY= {true}
    />
  , document.getElementById('data_zoom_bar')
  )
})()
