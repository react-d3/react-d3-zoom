"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var AreaStackZoom = require('../../lib').AreaStackZoom;

(function() {
  var generalChartData = require('dsv?delimiter=,!./data/stack_test.csv')

  var width = 700,
    height = 400,
    chartSeries = [
      {
        field: "Group1",
        name: "Group 1"
      },
      {
        field: "Group2",
        name: "Group 2"
      },
      {
        field: "Group3",
        name: "Group 3"
      }
    ],
    x = function(d) {
      var parseDate = d3.time.format("%m/%d/%y").parse;
      return parseDate(d.date);
    },
    xScale = 'time';

  ReactDOM.render(
      <AreaStackZoom
        data= {generalChartData}
        width= {width}
        height= {height}
        chartSeries = {chartSeries}
        x= {x}
        xScale= {xScale}
        zoomX= {true}
        zoomY= {false}
      />
    , document.getElementById('data_zoom_area_stack')
  )
})()
