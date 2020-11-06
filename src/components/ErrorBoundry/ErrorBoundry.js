import React, { Component } from "react";

import { ErrorIndicator } from "../ErrorIndicator";

export class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.setState.hasError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}
