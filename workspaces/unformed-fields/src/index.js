/* eslint-disable new-cap */
import React from 'react';
import { Fields, Enhancers } from 'unformed';
import InputMask from 'react-input-mask';
import Select from 'react-select';

const { ValidatedField } = Fields;
const { enhanceWithValidation } = Enhancers;

const MaskInput = (props) => {
  return <InputMask {...props} maskChar=" " />;
};

export const Dropdown = (props) => {
  return (
    <Select
      {...props}
      clearable={false}
    />
  );
};

export const ValidatedMaskField = enhanceWithValidation(ValidatedField(MaskInput));
export const ValidatedDropDownField = enhanceWithValidation(ValidatedField(Dropdown));
