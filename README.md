# react-d3-zoom

[![Dependency Status](https://gemnasium.com/react-d3/react-d3-zoom.svg)](https://gemnasium.com/react-d3/react-d3-zoom)

`react-d3` zoom implementation.


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

## Quick example

#### With webpack build tools

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

#### In html (without build tools)


Clone code `react-d3-brush.js` or minify js `react-d3-brush.min.js` and include the script in your HTML.

You'll also need `react`, `react-dom`, `d3`

- Line Chart

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Line Chart example
    </title>
  </head>
  <body>
    <div id="data_line"></div>
    <script src="https://fb.me/react-0.14.2.js"></script>
    <script src="https://fb.me/react-dom-0.14.2.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js"></script>
    <script src="../react-d3-zoom.min.js"></script>
    <script type="text/babel">
      var LineZoom = ReactD3Zoom.LineZoom;
      var data = [
          {
              "age": 39,
              "index": 0
          },
          {
              "age": 38,
              "index": 1
          },
          {
              "age": 34,
              "index": 2
          },
          {
              "age": 12,
              "index": 3
          }
      ];

      var chartSeries = [
          {
            field: 'age',
            name: 'Age',
            color: '#ff7f0e',
            style: {
              "stroke-width": 2,
              "stroke-opacity": .2,
              "fill-opacity": .2
            }
          }
        ],
        x = function(d) {
          return d.index;
        }

      ReactDOM.render(
        <LineZoom width= {600} height= {500} brushHeight={100} data= {data} chartSeries= {chartSeries} x= {x} />
      , document.getElementById('data_line')
      )
    </script>
  </body>
</html>

```

## Note

To prevent id conflict, if you are using multipule charts in the same page, you have to set prop `chartId` to prevent.

## License

Apache 2.0
