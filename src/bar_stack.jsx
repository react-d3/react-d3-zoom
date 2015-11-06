"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  Chart as Chart
} from 'react-d3-core';

import {
  BarStackChart as BarStackChart,
  series as series
} from 'react-d3-basic';

import {
  default as ZoomSet
} from './inherit/index';

import {
  default as ZoomFocus,
} from './utils/zoom_focus';

import {
  default as CommonProps,
} from './commonProps';

export default class BarStackZoom extends ZoomSet {
  constructor(props) {
    super(props);

    const {
      margins,
      width,
      height
    } = this.props;

    this.zoomed = this.zoomed.bind(this);
    this.mkXDomain();
    this.mkYDomain(true);

    this.state = {
      xDomainSet: this.setXDomain,
      yDomainSet: this.setYDomain,
      onZoom: this.zoomed,
      d3EventSet: null,
      xRange: this.props.xRange || [0, width - margins.left - margins.right],
      yRange: this.props.yRange || [height - margins.top - margins.bottom, 0],
      xRangeRoundBands: this.props.xRangeRoundBands || {interval: [0, width - margins.left - margins.right], padding: .1},
      zoomType: 'bar_stack'
    }

    this.mkXScale(this.setXDomain);
    this.mkYScale(this.setYDomain);

    this.state = Object.assign(this.state, {
      xScaleSet: this.setXScale,
      yScaleSet: this.setYScale
    })
  }

  static defaultProps = CommonProps


  render() {
    const {
      xDomainSet,
      yDomainSet
    } = this.state;

    var focus = <ZoomFocus {...this.props} />

    return (
      <div>
        <Chart {...this.props} {...this.state}>
          <BarStackChart {...this.props} {...this.state} xDomain={xDomainSet} yDomain={yDomainSet} showZoom={true}/>
          {focus}
        </Chart>
      </div>
    )
  }
}
