"use sctrict"

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

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

  zoomed(xScale, yScale) {

    const {
      xScaleSet,
      yScaleSet
    } = this.state;

    const {
      zoomType,
      zoomX,
      zoomY
    } = this.props;

    var evt = d3.event;

    if( zoomType === 'line' ||
      zoomType === 'scatter' ||
      zoomType === 'area_stack') {

      this.setState({
        d3EventSet: evt,
        xDomainSet: zoomX ? xScale.domain() : this.setXDomain,
        yDomainSet: zoomY ? yScale.domain() : this.setYDomain
      })

    }else if( zoomType === 'bar' ||
      zoomType === 'bar_group' ||
      zoomType === 'bar_stack'
    ) {

      var newDomain = xScale.domain();
      var selected =  xScaleSet.domain()
          .filter((d) => {
            return (newDomain[0] <= xScaleSet(d)) &&
              (xScaleSet(d) <= newDomain[1]);
          });

      this.setState({
        d3EventSet: evt,
        xDomainSet: zoomX ? selected : this.setXDomain,
        yDomainSet: zoomY ? yScale.domain() : this.setYDomain
      })
    }
  }

}
