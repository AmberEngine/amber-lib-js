import React, { PropTypes, PureComponent } from 'react';
import classNames from 'classnames';
import { Icon } from 'amber-content';
import stylesheet from './IconButton.scss';

class IconButton extends PureComponent {
  static propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    classNameActive: PropTypes.string,
  }

  static defaultProps = {
    icon: 'cloud',
  }

  render () {
    const { icon, onClick, className, classNameActive } = this.props;

    return (
      <button
        className={classNames('btn btn-lg btn-link', className, stylesheet.btn)}
        onClick={onClick}
      >
        <Icon
          icon={icon}
          className={classNameActive}
        />
      </button>
    );
  }
}

export default IconButton;
