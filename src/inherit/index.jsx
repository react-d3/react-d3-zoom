"use sctrict"

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import d3 from 'd3';

import {
  scale,
  xDomainCount,
  yDomainCount
} from 'react-d3-core';

export default class Zoom extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    data: PropTypes.array.isRequired,
    chartSeries: PropTypes.array.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    x: PropTypes.func,
    xDomain: PropTypes.array,
    xRange: PropTypes.array,
    xScale: PropTypes.string,
    xRangeRoundBands: PropTypes.object,
    y: PropTypes.func,
    yDomain: PropTypes.array,
    yRange: PropTypes.array,
    yScale: PropTypes.string,
    zoomX: PropTypes.bool,
    zoomY: PropTypes.bool
  }

  mkXDomain() {
    return this.setXDomain = xDomainCount(this.props);
  }

  mkYDomain(stack) {
    return this.setYDomain = yDomainCount(this.props, stack);
  }

  mkXScale(xDomain) {
    const {
      data,
      xScale
    } = this.props;

    const {
      xRange,
      xRangeRoundBands
    } = this.state;

    var newXScale = {
      scale: xScale,
      range: xRange,
      domain: xDomain,
      rangeRoundBands: xRangeRoundBands
    };

    var newScale = scale(newXScale)

    return this.setXScale = newScale;
  }

  mkYScale(yDomain) {
    const {
      data,
      yScale
    } = this.props;

    const {
      yRange,
      yRangeRoundBands
    } = this.state;

    var newYScale = {
      scale: yScale,
      range: yRange,
      domain: yDomain,
      rangeRoundBands: yRangeRoundBands
    }

    var newScale = scale(newYScale)

    return this.setYScale = newScale;
  }

  zoomed(xScale, yScale, zoom) {

    const {
      zoomType,
      xScaleSet,
      yScaleSet,
      yDomainSet,
      xDomainSet
    } = this.state;

    const {
      zoomX,
      zoomY
    } = this.props;

    var evt = d3.event;
    var zoomXDomain = xScale.domain();
    var zoomYDomain = yScale.domain();

    if (xScale.domain()[0] < this.setXDomain[0]) {
      zoomXDomain = xDomainSet
      zoom.translate([zoom.translate()[0] - xScale(this.setXDomain[0]) + xScale.range()[0], zoom.translate()[1]]);
    } else if (xScale.domain()[1] > this.setXDomain[1]) {
      zoomXDomain = xDomainSet
      zoom.translate([zoom.translate()[0] - xScale(this.setXDomain[1]) + xScale.range()[1], zoom.translate()[1]]);
    }

    if (yScale.domain()[0] < this.setYDomain[0]) {
      zoomYDomain = yDomainSet
      zoom.translate([zoom.translate()[0], zoom.translate()[1] - yScale(this.setYDomain[0]) + yScale.range()[0]]);
    } else if (yScale.domain()[1] > this.setYDomain[1]) {
      zoomYDomain = yDomainSet
      zoom.translate([zoom.translate()[0], zoom.translate()[1] - yScale(this.setYDomain[1]) + yScale.range()[1]]);
    }

    if( zoomType === 'line' ||
      zoomType === 'scatter' ||
      zoomType === 'area_stack') {

      this.setState({
        d3EventSet: evt,
        xDomainSet: zoomX ? zoomXDomain : this.setXDomain,
        yDomainSet: zoomY ? zoomYDomain : this.setYDomain
      })

    }else if( zoomType === 'bar' ||
      zoomType === 'bar_group' ||
      zoomType === 'bar_stack'
    ) {

      var newDomain = xScale.domain();
      var selected =  xScaleSet.domain()
          .filter((d) => {
            var filterDomain = (newDomain[0] <= xScaleSet(d)) && (xScaleSet(d) <= newDomain[1]);
            return filterDomain;
          });

      if(selected.length === 0) selected = xDomainSet;

      this.setState({
        d3EventSet: evt,
        xDomainSet: zoomX ? selected : this.setXDomain,
        yDomainSet: zoomY ? zoomYDomain : this.setYDomain
      })
    }
  }

}
