# react-d3-zoom

[![Dependency Status](https://gemnasium.com/react-d3/react-d3-zoom.svg)](https://gemnasium.com/react-d3/react-d3-zoom)

`react-d3` zoom implementation.

## Quick example

- Line Chart

```js
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var LineZoom = require('react-d3-zoom').LineZoom;

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
        width= {600}
        height= {400}
        data= {generalChartData}
        chartSeries= {chartSeries}
        x= {x}
        zoomX={false}
        zoomY={true}
      />
    , document.getElementById('data_zoom_line')
  )
})()

```

## Install

```
npm install --save react-d3-zoom
```

## LIVE DEMO

http://reactd3.org/docs/zoom

## Support Zoom Component

- Line Chart: export as `LineZoom`
- Area Stack Chart: export as `AreaStackZoom`
- Scatter Plot: export as `ScatterZoom`
- Bar Chart: export as `BarZoom`
- Bar Stack: export as `BarStackZoom`
- Bar Group: export as `BarGroupZoom`

## Gallery

![img](http://www.reactd3.org/img/zoom/cover.png)

## License

Apache 2.0
