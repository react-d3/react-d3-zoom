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

export default class BarStackZoom extends ZoomSet {

  static defaultProps = {
    zoomType: 'bar_stack'
  }

  render() {
    const {
      xDomainSet
    } = this.state;

    var focus = <ZoomFocus {...this.props} />

    return (
      <div>
        <Chart {...this.props} {...this.state}>
          <BarStackChart {...this.props} {...this.state} xDomain={xDomainSet} showZoom={true}/>
          {focus}
        </Chart>
      </div>
    )
  }
}
