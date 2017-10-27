import React, { Component } from 'react';
import omit from 'lodash/omit';

import { enhanceWithFormHandlers } from '../Form/Enhancers';

import RoundRectangle from '../RoundRectangle'
import FormBoxLabel from './FormBoxLabel';

import stylesheet from './FormBox.scss';

class FormBox extends Component {
  onClickValue = (e) => {
    const { template, clearTemplateValue, onChange, onBlur } = this.props;
    if (template) {
      clearTemplateValue();
    } else {
      // Clear the actual value.
      onChange(null);
    }
  }

  getCurrentFileContent(value, template) {
    const displayValue = template || (value && value.name);
    return displayValue && (
      <RoundRectangle
        type="filledX"
        className={stylesheet.filename}
        onClick={this.onClickValue}
      >
        {displayValue}
        <div className={stylesheet.x}>x</div>
      </RoundRectangle>
    );
  }

  getTemplatePickerContent = (toggleTemplateSelectModal) => {
    return toggleTemplateSelectModal && (
      <div>
        <br />
        or&nbsp;
        <span
          onClick={toggleTemplateSelectModal}
          role="presentation"
        >
          choose an existing file
        </span>
      </div>
    );
  }

  render() {
    const {
      value,
      template,
      toggleTemplateSelectModal,
      clearTemplateValue,
      ...changeHandlerProps
    } = this.props;

    return (
      <div className={stylesheet.box}>
        {this.getCurrentFileContent(value, template)}
        <FormBoxLabel
          value={value}
          {...changeHandlerProps}
        />
        {this.getTemplatePickerContent(toggleTemplateSelectModal)}
      </div>
    );
  }
}

export const FormBoxField = enhanceWithFormHandlers(FormBox);
