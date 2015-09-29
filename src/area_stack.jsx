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
  AreaStackChart as AreaStackChart,
  series as series
} from 'react-d3-basic';

import {
  default as ZoomSet
} from './inherit/index';

import {
  default as ZoomFocus,
} from './utils/zoom_focus';

export default class AreaStackZoom extends ZoomSet {
  static defaultProps = {
    zoomType: 'area_stack'
  }

  render() {
    const {
      xDomainSet
    } = this.state;

    var focus = <ZoomFocus {...this.props} />

    return (
      <div>
        <Chart {...this.props} {...this.state}>
          <AreaStackChart {...this.props} {...this.state} xDomain={xDomainSet} showZoom={true}/>
          {focus}
        </Chart>
      </div>
    )
  }
}
