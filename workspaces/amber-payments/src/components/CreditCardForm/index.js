import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';
import range from 'lodash/range';

import CreditCardFormField from '../CreditCardFormField';
import stylesheet from './CreditCardForm.scss';

import { SelectFormField, ValidatedFormField } from '../../../components/FormFields';
import LabeledRow from '../../../components/LabeledRow';
import { required, postalCode, creditCard, expired, shallowEqual } from '../../../utils/validation';

const monthOptions = range(1, 13).map(value => {
  return { value: value < 10 ? `0${value}` : `${value}` };
});

const currentYear = new Date().getFullYear();
const yearOptions = range(currentYear, currentYear + 21).map(value => {
  return { value: `${value}` };
});

class CreditCardForm extends Component {
  static propTypes = {
    initialCreditCardValues: PropTypes.object,
    requesting: PropTypes.bool,
    handleSubmit: PropTypes.func,
    initialize: PropTypes.func
  }

  componentWillMount() {
    const { initialize, initialCreditCardValues } = this.props;
    if (initialCreditCardValues) {
      initialize(initialCreditCardValues);
    }
  }
  componentWillReceiveProps(newProps) {
    const {
      initialCreditCardValues: oldInitialCreditCardValues,
      requesting: wasMakingRequest
    } = this.props;
    const { initialCreditCardValues, initialize, requesting } = newProps;

    // This was prompted by the initialValues object being different, even though it never changed.
    // The blame likely lies with Redux Form.
    if (
      initialCreditCardValues &&
      (!shallowEqual(oldInitialCreditCardValues, initialCreditCardValues) ||
      (!requesting && wasMakingRequest))
    ) {
      initialize(initialCreditCardValues);
    }
  }

  normalizeDateField = (data) => {
    return data.value || data;
  }

  showAddressFields() {
    return (
      <div className={stylesheet.group}>
        <div className='row'>
          <div className={classNames('col-xs-6', stylesheet.multiGroup)}>
            <div>
              <label htmlFor='streetAddress'>Street Address</label>
            </div>
            <Field
              name='streetAddress'
              type='text'
              component={ValidatedFormField}
              validate={[required()]}
            />
          </div>
          <div className='col-xs-4'>
            <div>
              <label htmlFor='city'>City</label>
            </div>
            <Field
              name='city'
              type='text'
              component={ValidatedFormField}
              validate={[required()]}
            />
          </div>
          <div className='col-xs-2'>
            <div>
              <label htmlFor='state'>State</label>
            </div>
            <Field
              name='state'
              type='text'
              component={ValidatedFormField}
              validate={[required()]}
            />
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit, initialCreditCardValues } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div className={stylesheet.group}>
          <LabeledRow
            label='Cardholder Name'
            labelPosition='top'
          >
            <Field
              name='name'
              type='text'
              component={ValidatedFormField}
              validate={required('Please enter a Cardholder Name.')}
            />
          </LabeledRow>
        </div>
        <div className={stylesheet.group}>
          <LabeledRow
            label='Card Number'
            labelPosition='top'
          >
            <CreditCardFormField
              validate={[required('Please enter a Card Number.'), creditCard]}
              initialCardType={initialCreditCardValues ? initialCreditCardValues.cardType : null}
            />
          </LabeledRow>
        </div>
        { this.props.showAddress && this.showAddressFields() }
        <div className={stylesheet.group}>
          <div className='row'>
            <div className={classNames('col-xs-4', stylesheet.multiGroup)}>
              <div>
                <label htmlFor='expireMonth'>Exp. Month</label>
              </div>
              <Field
                name='expireMonth'
                component={SelectFormField}
                labelKey='value'
                options={monthOptions}
                normalize={this.normalizeDateField}
                validate={required()}
              />
            </div>
            <div className='col-xs-4'>
              <div>
                <label htmlFor='expireYear'>Exp. Year</label>
              </div>
              <Field
                name='expireYear'
                component={SelectFormField}
                labelKey='value'
                options={yearOptions}
                normalize={this.normalizeDateField}
                validate={required()}
              />
            </div>
            <div className='col-xs-4'>
              <div>
                <label htmlFor='postalCode'>Billing Zip</label>
              </div>
              <Field
                name='postalCode'
                type='text'
                component={ValidatedFormField}
                validate={[required(), postalCode]}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const validateCreditCardForm = data => {
  const { expireMonth, expireYear } = data;
  if (expireMonth && expireYear) {
    const isExpired = expired(expireMonth, expireYear);
    if (isExpired) {
      return { expireYear: isExpired };
    }
  }

  return {};
};

export default reduxForm({
  form: 'CreditCardForm',
  validate: validateCreditCardForm
})(CreditCardForm);
