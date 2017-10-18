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

  getBodyContent() {
    const { visible, children } = this.props;
    const { beenVisible } = this.state;

    const wrapperClass = classNames({
      [stylesheet.beenVisible]: beenVisible && !visible,
    });

    return (
      <div className={wrapperClass}>
        {(visible || beenVisible) && children}
      </div>
    );
  }

  toggleAccordionItem = () => {
    const { toggleAccordionItem, label } = this.props;
    toggleAccordionItem(label);
  }

  render() {
    const { label } = this.props;
    return (
      <li>
        <span onClick={this.toggleAccordionItem} role="button" tabIndex="0">
          {label}
        </span>
        {this.getBodyContent()}
      </li>
    );
  }
});
