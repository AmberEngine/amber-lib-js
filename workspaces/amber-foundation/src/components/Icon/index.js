import React, { Component, PropTypes } from 'react';
import stylesheet from './Icon.scss';
import classNames from 'classnames';

import icons from './IconsListing';
const availableIcons = Object.keys(icons);

class Icon extends Component {
  static propTypes = {
    icon: PropTypes.oneOf(availableIcons),
    onClick: PropTypes.func,
  };

  render() {
    const { icon } = this.props;
    const IconComponent = icons[icon] || null;
    return IconComponent && (
      <span
        className={classNames(
          stylesheet.svgIcon,
          this.props.className,
        )}
        onClick={this.props.onClick}
        role="button"
        tabIndex="0"
      >
        <IconComponent />
      </span>
    );
  }
}

export default Icon;
