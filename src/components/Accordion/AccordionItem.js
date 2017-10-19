import React, { PureComponent, PropTypes } from 'react';
import classNames from 'classnames';

import getContext from 'recompose/getContext';
import mapProps from 'recompose/mapProps';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import compose from 'recompose/compose';

import stylesheet from './AccordionItem.scss';

export default compose(
  getContext({
    visibleAccordionKey: PropTypes.string,
    toggleAccordionItem: PropTypes.func,
  }),
  mapProps(props => ({
    ...props,
    visible: props.label === props.visibleAccordionKey,
  })),
  onlyUpdateForKeys(['visible']),
)(class AccordionItem extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      beenVisible: props.visible,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { visible } = nextProps;
    const { beenVisible } = this.state;

    if (!beenVisible && visible) {
      this.setState({ beenVisible: true });
    }
  }

  getBodyContent(visible, children) {
    const { beenVisible } = this.state;

    const accordionBodyClass = classNames(stylesheet.accordionBody, {
      [stylesheet.hide]: !visible,
    });

    return (
      <div className={accordionBodyClass}>
        <div className={stylesheet.bodyWrapper}>
          {(visible || beenVisible) && children}
        </div>
      </div>
    );
  }

  toggleAccordionItem = () => {
    const { toggleAccordionItem, label } = this.props;
    toggleAccordionItem(label);
  }

  render() {
    const { label, className, visible, children, ...restProps } = this.props;
    const itemClass = classNames(stylesheet.accordionItem, className);

    return (
      <li className={itemClass} {...restProps}>
        <span
          className={stylesheet.accordionTitle}
          onClick={this.toggleAccordionItem}
          role="button"
          tabIndex="0"
        >
          <h3>{label}</h3>
        </span>
        {this.getBodyContent(visible, children)}
      </li>
    );
  }
});
