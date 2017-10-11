import React from 'react';
import Select from 'react-select';
import Icon from '../Icon';
import errorStylesheet from './Error.scss';
import './SelectFormField.scss';

export default (props) => {
  const { meta: { touched, submitFailed, error } } = props;
  const displayError = (submitFailed || touched) && !!error;

  return (
    <div>
      <Select
        {...props}
        value={props.input.value}
        onChange={(value) => props.input.onChange(value)}
        onBlur={() => props.input.onBlur(props.input.value)}
        clearable={false}
        arrowRenderer={() => (
          <Icon icon="down-arrow" />
        )}
      />
      {displayError && <div className={errorStylesheet.error}>{error}</div>}
    </div>
  );
};
