import { Component, PropTypes } from 'react';

export default class AnalyticsProvider extends Component {
  static childContextTypes = {
    analyticsProvider: PropTypes.object.isRequired,
  }

  getChildContext() {
    return {
      analyticsProvider: this.props.analyticsProvider,
    };
  }

  render() {
    const { children } = this.props;
    return children;
  }
}
