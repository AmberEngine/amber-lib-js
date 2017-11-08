import React from 'react';
import classNames from 'classnames';

import stylesheet from './FormGroup.scss';

const FormGroup = (props) => {
  const {
    FieldComponent,
    title,
    name,
    className,
    groupClassName,
    children,
    ...restProps
  } = props;

  const groupClass = classNames(
    groupClassName,
    stylesheet.formGroup,
  );

  const fieldClass = classNames(
    className,
    stylesheet.input,
  );

  return (
    <div className={groupClass}>
      <label
        htmlFor={name}
        className={stylesheet.fieldLabel}
      >
        {title}
      </label>
      <FieldComponent
        name={name}
        className={fieldClass}
        {...restProps}
      />
      {children}
    </div>
  );
};

export default FormGroup;
