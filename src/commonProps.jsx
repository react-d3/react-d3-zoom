"use strict";

const width = 960;
const height = 500;
const margins = {top: 50, right: 50, bottom: 50, left: 50};

export default {
  width: width,
  height: height,
  margins: margins,
  y: (d) => {return +d;},
  xRange: [0, width - margins.left - margins.right],
  yRange: [height - margins.top - margins.bottom, 0],
  xRangeRoundBands: {interval: [0, width - margins.left - margins.right], padding: .1},
  xScale: 'linear',
  yScale: 'linear'
}
