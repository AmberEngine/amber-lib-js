import React from 'react';
import { storiesOf } from '@storybook/react';

import { Form, FormGroup, Fields, Submit, Validation } from '../../src/components/Form';
import { FormBoxField } from '../../src/components/FormBox'
const { required, equalTo } = Validation;

const onFormSubmit = data => console.log('submitted!', data);

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
  .add('renders formboxfield', () => {
    return (
      <Form onSubmit={onFormSubmit}>
        <FormBoxField
          name="template"
          label="label"
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
  })
  .add('renders big form', () => {
    return (
      <Form onSubmit={onFormSubmit}>
        <FormGroup
          title="Template"
          name="template"
          className="form-control"
          FieldComponent={Fields.ValidatedInputField}
        />
        <FormGroup
          title="Something else"
          name="seomthingElse"
          className="form-control"
          FieldComponent={Fields.ValidatedInputField}
        />
        <FormGroup
          title="Password"
          name="password"
          className="form-control"
          FieldComponent={Fields.ValidatedInputField}
          validate={[required]}
          type="password"
        />
        <FormGroup
          title="Confirm Password"
          name="confirmPassword"
          className="form-control"
          FieldComponent={Fields.ValidatedInputField}
          validate={[required, equalTo('password', 'Passwords don\'t match.')]}
          type="password"
        />
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
