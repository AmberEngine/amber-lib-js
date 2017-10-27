import React from 'react';
import { storiesOf } from '@storybook/react';

import { Form, FormGroup, Fields, Submit } from '../../src/components/Form';

const onFormSubmit = data => console.log('submitted!', data);

storiesOf('Form', module)
  .add('renders input', () => {
    return (
      <Form onSubmit={onFormSubmit}>
        <FormGroup
          title="Template"
          name="template"
          className="form-control"
          FieldComponent={Fields.ValidatedInputField}
        />
        <Submit
          type="submit"
        >
          EXPORT
        </Submit>
      </Form>
    );
  })
  .add('renders dropdown', () => {
    const dropdownOptions = [
      { value: 'AL', label: 'Alabama' },
      { value: 'AK', label: 'Alaska' },
      { value: 'AS', label: 'American Samoa' },
      { value: 'AZ', label: 'Arizona' },
      { value: 'AR', label: 'Arkansas' },
      { value: 'CA', label: 'California' },
      { value: 'CO', label: 'Colorado' },
      { value: 'CT', label: 'Connecticut' },
      { value: 'DE', label: 'Delaware' },
    ];

    return (
      <Form onSubmit={onFormSubmit}>
        <FormGroup
          title="Template"
          name="template"
          className="form-control"
          FieldComponent={Fields.ValidatedDropDownField}
          options={dropdownOptions}
        />
        <Submit
          type="submit"
        >
          EXPORT
        </Submit>
      </Form>
    );
  });
