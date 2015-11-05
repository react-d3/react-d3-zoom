"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var AreaStackZoom = require('../../lib').AreaStackZoom;

(function() {
  var generalChartData = require('dsv?delimiter=\t!./data/browser.tsv')

  var formatPercent = d3.format(".0%");

  var chartSeries = [
      {
        field: 'IE',
        name: 'IE browser'
      },
      {
        field: 'Chrome',
        name: 'Chrome browser'
      },
      {
        field: 'Firefox'
      },
      {
        field: 'Safari',
        name: 'Safari browser'
      },
      {
        field: 'Opera',
        name: 'Opera browser'
      }
    ],
    x = function(d) {
      var parseDate = d3.time.format("%y-%b-%d").parse;
      return parseDate(d.date);
    },
    xScale = 'time',
    y = function(d) {
      return d / 100;
    };

  ReactDOM.render(
    <AreaStackZoom
      data= {generalChartData}
      chartSeries = {chartSeries}
      x= {x}
      xScale= {xScale}
      y= {y}
      yTickFormat= {formatPercent}
      zoomX= {false}
      zoomY= {true}
    />
  , document.getElementById('data_zoom_area_stack')
  )
})()
