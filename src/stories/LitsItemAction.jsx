import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ListItemAction.less";

export class ListItemAction extends Component {
  render() {
    const { children } = this.props;
    return <span className="__ListItemAction__">{children}</span>;
  }
}

