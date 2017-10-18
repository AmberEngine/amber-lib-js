import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import getContext from 'recompose/getContext';

import stylesheet from './AccordionItem.scss';

export default getContext({
  visibleAccordionKey: PropTypes.object,
  toggleAccordionItem: PropTypes.func,
})(class AccordionItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      beenVisible: props.visible,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { beenVisible } = this.state;

    const visible = this.isVisible(nextProps);
    if (!beenVisible && visible) {
      this.setState({ beenVisible: true });
    }
  }

  isVisible(props) {
    const { label, visibleAccordionKey } = props;
    return label === visibleAccordionKey;
  }

  getBodyContent() {
    const { children } = this.props;
    const { beenVisible } = this.state;

    const visible = this.isVisible(this.props);

    const wrapperClass = classNames({
      [stylesheet.beenVisible]: beenVisible && !visible,
    });

    return (
      <div className={wrapperClass}>
        {visible && beenVisible && children}
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
