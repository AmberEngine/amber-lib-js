/* eslint-disable new-cap */
import React from 'react';
import { enhanceWithFormHandlers, enhanceWithValidation } from './Enhancers';

import stylesheet from './Fields.scss';

const Input = (props) => {
  return (<input type="text" {...props} />);
};

const ValidationErrors = ({ validationErrors }) => {
  return validationErrors.length > 0 && (
    <div className={stylesheet.error}>
      {validationErrors.map((error, i) => {
        return (
          <div key={error}>{error}</div>
        );
      })}
    </div>
  );
};

export const ValidatedField = OriginalComponent => (props) => {
  const { validationErrors, visited, submitted, ...restProps } = props;
  const validationContent = (visited || submitted) && (
    <ValidationErrors
      validationErrors={validationErrors}
    />
  );
  return (
    <span style={{ width: '100%' }}>
      <OriginalComponent {...restProps} />
      {validationContent}
    </span>
  );
};

export const InputField = enhanceWithFormHandlers(Input);
export const ValidatedInputField = enhanceWithValidation(ValidatedField(Input));
