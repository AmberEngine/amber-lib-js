import React, { Component } from 'react';

export default class ExternalLinkColumn extends Component {
  onClick = (e) => {
    e.preventDefault();
    const { value } = this.props;
    window.open(value, '_blank');
  }

  render() {
    const { value } = this.props;
    return value ? (
      <a
        onClick={this.onClick}
        role="link"
        tabIndex="0"
      >
        {value}
      </a>
    ) : null;
  }
}
