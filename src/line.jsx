"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  Chart as Chart,
} from 'react-d3-core';

import {
  LineChart as LineChart,
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

export default class LineZoom extends ZoomSet {
  constructor(props) {
    super(props);

    this.mkXDomain();
    this.mkYDomain();
    this.mkXScale(this.setXDomain);
    this.mkYScale(this.setYDomain);
    this.zoomed = this.zoomed.bind(this);

    this.state = {
      xScaleSet: this.setXScale,
      yScaleSet: this.setYScale,
      xDomainSet: this.setXDomain,
      yDomainSet: this.setYDomain,
      onZoom: this.zoomed,
      d3EventSet: null
    }
  }

  static defaultProps = Object.assign(CommonProps, {
    zoomType: 'line',
    zoomY: false,
    zoomX: true
  })

  render() {

    const {
      xDomainSet,
      yDomainSet
    } = this.state;

    var focus = <ZoomFocus {...this.props} />

    return (
      <div>
        <Chart {...this.props} {...this.state}>
          <LineChart {...this.props} {...this.state} xDomain={xDomainSet} yDomain={yDomainSet} showZoom={true}/>
          {focus}
        </Chart>
      </div>
    )
  }
}
