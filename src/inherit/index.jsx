"use sctrict"

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  scale as scale
} from 'react-d3-core';

export default class Zoom extends Component {
  constructor(props) {
    super(props);

    this.zoomed = this.zoomed.bind(this);

    const {
      xDomain,
      yDomain
    } = this.props;

    var xScale = {
      scale: props.xScale,
      range: props.xRange,
      domain: props.xDomain,
      rangeRoundBands: props.xRangeRoundBands
    }

    var yScale = {
      scale: props.yScale,
      range: props.yRange,
      domain: props.yDomain,
      rangeRoundBands: props.yRangeRoundBands
    }

    this.state = {
      xScaleSet: scale(xScale),
      yScaleSet: scale(yScale),
      xDomainSet: xDomain,
      yDomainSet: yDomain,
      onZoom: this.zoomed,
      d3EventSet: null
    }
  }

  zoomed(xScale, yScale) {

    const {
      xScaleSet,
      yScaleSet
    } = this.state;

    const {
      zoomType
    } = this.props;

    var evt = d3.event;

    if( zoomType === 'line' ||
      zoomType === 'scatter' ||
      zoomType === 'area_stack') {

      this.setState({
        d3EventSet: evt,
        xDomainSet: xScale.domain(),
        yDomainSet: yScale.domain()
      })

    }else if( zoomType === 'bar' ||
      zoomType === 'bar_group' ||
      zoomType === 'bar_stack'
    ) {
      var newDomain = xScale.domain();

      var selected =  xScale.domain()
          .filter((d) => {
            return (newDomain[0] <= xScaleSet(d)) &&
              (yScaleSet(d) <= newDomain[1]);
          });

      this.setState({
        d3EventSet: evt,
        xDomainSet: selected
      })
    }
  }

}
