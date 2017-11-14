/* eslint-disable new-cap */
import React from 'react';
import { Fields, Enhancers } from 'unformed';
import InputMask from 'react-input-mask';
import Select from 'react-select';

const { ValidatedField } = Fields;
const { enhanceWithValidation } = Enhancers;

export const MaskInput = (props) => {
  return <InputMask {...props} maskChar=" " />;
};

export const ValidatedMaskField = enhanceWithValidation(ValidatedField(MaskInput));

export const Dropdown = (props) => {
  return (
    <Select
      {...props}
      clearable={false}
    />
  );
};

export const ValidatedDropDownField = enhanceWithValidation(ValidatedField(Dropdown));

import * as self from './index';
export default self;
