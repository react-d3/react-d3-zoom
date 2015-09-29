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

export default class LineZoom extends ZoomSet {

  render() {

    const {
      xDomainSet,
      yDomainSet
    } = this.state;

    return (
      <div>
        <Chart {...this.props} {...this.state}>
          <LineChart {...this.props} {...this.state} xDomain={xDomainSet} yDomain={yDomainSet} />
        </Chart>
      </div>
    )
  }
}
