import React from 'react';
import { storiesOf } from '@storybook/react';

import { Form, FormGroup, Fields, Validation } from 'unformed';
import { ValidatedDropDownField } from 'unformed-fields';
import { FormSubmit, FormBox, Button } from '../src/components';
const { required, equalTo, price } = Validation;

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
        <FormSubmit
          type="submit"
        >
          EXPORT
        </FormSubmit>
      </Form>
    );
  })
  .add('renders disabled input', () => {
    class FormWrapper extends React.Component {
      state = {
        disabled: false,
      }

      toggleDisabled = () => {
        this.setState(state => ({ disabled: !state.disabled }));
      };

      render() {
        return (
          <div>
            <Form onSubmit={onFormSubmit} disabled={this.state.disabled}>
              <FormGroup
                title="Template"
                name="template"
                className="form-control"
                FieldComponent={Fields.ValidatedInputField}
              />
              <FormSubmit
                type="submit"
              >
                EXPORT
              </FormSubmit>
            </Form>
            <Button onClick={this.toggleDisabled}>
              Toggle Disabled
            </Button>
          </div>
        );
      }
    }

    return (
      <FormWrapper />
    );
  })
  .add('renders formboxfield', () => {
    return (
      <Form onSubmit={onFormSubmit}>
        <FormBox
          name="template"
          label="label"
        />
        <FormSubmit
          type="submit"
        >
          EXPORT
        </FormSubmit>
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
          FieldComponent={ValidatedDropDownField}
          options={dropdownOptions}
        />
        <FormSubmit
          type="submit"
        >
          EXPORT
        </FormSubmit>
      </Form>
    );
  })
  .add('renders validated input with clear', () => {
    let form = null;
    const clearForm = (e) => {
      e.preventDefault();
      form.clear();
    }
    return (
      <Form onSubmit={onFormSubmit} ref={e => form = e}>
        <FormGroup
          title="Template"
          name="template"
          className="form-control"
          FieldComponent={Fields.ValidatedInputField}
          validate={[required, price]}
        />
        <FormSubmit
          type="submit"
        >
          EXPORT
        </FormSubmit>
        <Button onClick={clearForm}>
          Clear
        </Button>
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
          FieldComponent={ValidatedDropDownField}
          options={dropdownOptions}
        />
        <FormSubmit
          type="submit"
        >
          EXPORT
        </FormSubmit>
      </Form>
    );
  });
