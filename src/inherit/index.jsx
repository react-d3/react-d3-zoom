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

    var evt = d3.event;

    this.setState({
      d3EventSet: evt,
      xDomainSet: xScale.domain(),
      yDomainSet: yScale.domain()
    })

  }

}
