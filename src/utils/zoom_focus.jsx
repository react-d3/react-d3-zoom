"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

export default class ZoomFocus extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    chartId: 0
  }

  render() {

    const {
      height,
      width,
      margins,
      chartId
    } = this.props;

    var id = "react-d3-basic__zoom_focus__clip__" + chartId;

    return (
      <defs>
        <clipPath id= {id}>
          <rect
            width={width - margins.left - margins.right}
            height={height - margins.top - margins.bottom}
          ></rect>
        </clipPath>
      </defs>
    )
  }
}
