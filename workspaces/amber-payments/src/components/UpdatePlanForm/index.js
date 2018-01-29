import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';

import stylesheet from './UpdatePlanForm.scss';

import LabeledRow from '../../../components/LabeledRow';
import SelectFormField from '../../../components/FormFields/SelectFormField';

const UpdatePlanForm = (props) => {
  const { handleSubmit } = props;

  const options = [
    { label: 'Add/Remove/Edit Users', value: 'users' },
    { label: 'Add/Remove/Edit Channels', value: 'channels' },
    { label: 'Other', value: 'other' }
  ];

  return (
    <form className={stylesheet.form} onSubmit={handleSubmit}>
      <div className={stylesheet.group}>
        <LabeledRow
          label='What change would you like to make?'
          labelPosition='top'
        >
          <Field
            name='updatePlan'
            component={SelectFormField}
            options={options}
            required
          />
        </LabeledRow>
      </div>
      <div className={stylesheet.group}>
        <LabeledRow
          label='Comments (optional)'
          labelPosition='top'
        >
          <Field
            name='comments'
            type='text'
            component='textarea'
            className={classNames('form-control', stylesheet.comments)}
          />
        </LabeledRow>
      </div>
    </form>
  );
};


UpdatePlanForm.propTypes = {
  handleSubmit: PropTypes.func
};

const validateUpdatePlanForm = data => {
  return !data.updatePlan ? {
    updatePlan: 'Please select a change.'
  } : {};
};

export default reduxForm({
  form: 'UpdatePlanForm',
  validate: validateUpdatePlanForm
})(UpdatePlanForm);
