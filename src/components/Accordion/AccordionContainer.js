import React, { Component, PropTypes } from 'react';

export default class AccordionContainer extends Component {
  static childContextTypes = {
    visibleAccordionKey: PropTypes.string,
    toggleAccordionItem: PropTypes.func,
  }

  state = {
    visibleAccordionKey: null,
  }

  getChildContext() {
    const { visibleAccordionKey } = this.state;
    return {
      toggleAccordionItem: this.toggleAccordionItem,
      visibleAccordionKey,
    };
  }

  toggleAccordionItem = (accordionKey) => {
    this.setState({
      visibleAccordionKey: accordionKey,
    });
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
