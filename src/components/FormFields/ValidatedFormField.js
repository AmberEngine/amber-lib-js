import React, { Component } from 'react';
import stylesheet from './Error.scss';

export default class ValidatedFormField extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      hasBeenCleared: false,
    };
  }

  onFocus = () => {
    const { clearOnFirstClick, input } = this.props;
    const { hasBeenCleared } = this.state;

    if (clearOnFirstClick && !hasBeenCleared) {
      input.onChange('');
    }
  }

  render() {
    const { input, label, type, meta: { touched, error } } = this.props;
    return (
      <span>
        <input {...input} placeholder={label} type={type} onFocus={this.onFocus} />
        {touched && error && <div className={stylesheet.error}>{error}</div>}
      </span>
    );
  }
}
