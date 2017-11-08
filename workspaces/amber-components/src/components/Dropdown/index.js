import React from 'react';
import Select from 'react-select';

import { Icon } from 'amber-content';

import './Dropdown.scss';

export default (props) => {
  const { children, ...restProps } = props;
  return (
    <Select
      {...restProps}
      arrowRenderer={() => (
        <Icon icon="down-arrow" />
      )}
    >
      {children}
    </Select>
  );
};
