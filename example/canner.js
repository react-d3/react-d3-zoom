// ENV = 1 stands for production, ENV = 0 stands for development
var ENV = !!(+process.env.NODE_ENV || 0);

var zoom_charts = [
  "line",
  "line_multi",
  "scatter",
  "area_stack",
  "bar",
  "bar_stack",
  "bar_group"
]

var prefix_zoom_charts = zoom_charts.map(function(d) {
  return 'zoom_' + d;
})

var prod_zoom_link = prefix_zoom_charts.map(function(d) {
  return 'min/' + d + '.min'
})

var dev_zoom_link = prefix_zoom_charts.map(function(d) {
  return 'origin/' + d
})

module.exports = [{
  "layout": "./gallery.hbs",
  "filename": "./example/gallery.html",
  "data": {
    "charts": prefix_zoom_charts,
    "link": ENV? prod_zoom_link: dev_zoom_link,
    "mode": ENV,
    "title": "react-d3-zoom"
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/zoom_line.html",
  "data": {
    "title": "Zoom Line Chart",
    "type": "zoom_line",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/zoom_line_multi.html",
  "data": {
    "title": "Zoom Line Multi Chart",
    "type": "zoom_line_multi",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/zoom_scatter.html",
  "data": {
    "title": "Zoom Scatter Chart",
    "type": "zoom_scatter",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/zoom_area_stack.html",
  "data": {
    "title": "Zoom Area Stack Chart",
    "type": "zoom_area_stack",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/zoom_bar.html",
  "data": {
    "title": "Zoom Bar Chart",
    "type": "zoom_bar",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/zoom_bar_group.html",
  "data": {
    "title": "Zoom Bar Group Chart",
    "type": "zoom_bar_group",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/zoom_bar_stack.html",
  "data": {
    "title": "Zoom Bar Stack Chart",
    "type": "zoom_bar_stack",
    "prefix": ENV? 'min': 'origin'
  }
}]
