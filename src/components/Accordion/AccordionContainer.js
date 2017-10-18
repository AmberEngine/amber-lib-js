import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import stylesheet from './AccordionContainer.scss';

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
    this.setState(state => ({
      visibleAccordionKey: state.visibleAccordionKey !== accordionKey ? accordionKey : null,
    }));
  }

  render() {
    const { children, className, ...restProps } = this.props;
    const containerClass = classNames(stylesheet.accordionContainer, className);
    return (
      <ul className={containerClass} {...restProps}>
        {children}
      </ul>
    );
  }
}
