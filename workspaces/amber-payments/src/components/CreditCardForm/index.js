import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import range from 'lodash/range';
import unformed from 'unformed';
import { ValidatedDropDownField } from 'unformed-fields';
import { components } from '@amber-engine/amber-components';

const { FormSubmit } = components;
const { Form, FormGroup, Fields, Validation } = unformed;
const { required, zip } = Validation;

// import CreditCardFormField from '../CreditCardFormField';
import stylesheet from './CreditCardForm.scss';

// // import { SelectFormField, ValidatedFormField } from '../../../components/FormFields';
// import LabeledRow from '../../../components/LabeledRow';
// import { required, postalCode, creditCard, expired, shallowEqual } from '../../../utils/validation';

const monthOptions = range(1, 13).map(value => {
  return { value: value < 10 ? `0${value}` : `${value}` };
});

const currentYear = new Date().getFullYear();
const yearOptions = range(currentYear, currentYear + 21).map(value => {
  return { value: `${value}` };
});

// const validateCreditCardForm = data => {
//   const { expireMonth, expireYear } = data;
//   if (expireMonth && expireYear) {
//     const isExpired = expired(expireMonth, expireYear);
//     if (isExpired) {
//       return { expireYear: isExpired };
//     }
//   }

//   return {};
// };

export default class CreditCardForm extends Component {
  static propTypes = {
    initialCreditCardValues: PropTypes.object,
    requesting: PropTypes.bool,
    onFormSubmit: PropTypes.func,
    initialize: PropTypes.func,
  }

  // componentWillMount() {
  //   const { initialize, initialCreditCardValues } = this.props;
  //   if (initialCreditCardValues) {
  //     initialize(initialCreditCardValues);
  //   }
  // }
  // componentWillReceiveProps(newProps) {
  //   const {
  //     initialCreditCardValues: oldInitialCreditCardValues,
  //     requesting: wasMakingRequest
  //   } = this.props;
  //   const { initialCreditCardValues, initialize, requesting } = newProps;

  //   // This was prompted by the initialValues object being different, even though it never changed.
  //   // The blame likely lies with Redux Form.
  //   if (
  //     initialCreditCardValues &&
  //     (!shallowEqual(oldInitialCreditCardValues, initialCreditCardValues) ||
  //     (!requesting && wasMakingRequest))
  //   ) {
  //     initialize(initialCreditCardValues);
  //   }
  // }

  normalizeDateField = (data) => {
    return data.value || data;
  }

  // showAddressFields() {
  //   return (
  //     <div className={stylesheet.group}>
  //       <div className='row'>
  //         <div className={classNames('col-xs-6', stylesheet.multiGroup)}>
  //           <div>
  //             <label htmlFor='streetAddress'>Street Address</label>
  //           </div>
  //           <Field
  //             name='streetAddress'
  //             type='text'
  //             component={ValidatedFormField}
  //             validate={[required()]}
  //           />
  //         </div>
  //         <div className='col-xs-4'>
  //           <div>
  //             <label htmlFor='city'>City</label>
  //           </div>
  //           <Field
  //             name='city'
  //             type='text'
  //             component={ValidatedFormField}
  //             validate={[required()]}
  //           />
  //         </div>
  //         <div className='col-xs-2'>
  //           <div>
  //             <label htmlFor='state'>State</label>
  //           </div>
  //           <Field
  //             name='state'
  //             type='text'
  //             component={ValidatedFormField}
  //             validate={[required()]}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    const { onFormSubmit, showAddress, initialCreditCardValues } = this.props;

    return (
      <Form onSubmit={onFormSubmit}>
        <FormGroup
          title="Cardholder Name"
          name="name"
          className={stylesheet.tallInput}
          FieldComponent={Fields.ValidatedInputField}
          validate={[required]}
        />
        <FormGroup
          title="Card Number"
          name="card_number"
          className={stylesheet.tallInput}
          FieldComponent={Fields.ValidatedInputField}
          validate={[required]}
        />
        <div className={stylesheet.inlineFormGroup}>
          <FormGroup
            title="Exp. Month"
            name="exp_month"
            groupClassName={stylesheet.inlineFormField}
            FieldComponent={ValidatedDropDownField}
            options={monthOptions}
            validate={[required]}
          />
          <FormGroup
            title="Exp. Year"
            name="exp_year"
            groupClassName={stylesheet.inlineFormField}
            FieldComponent={ValidatedDropDownField}
            options={yearOptions}
            validate={[required]}
          />
          <FormGroup
            title="Billing Zip"
            name="zip"
            groupClassName={stylesheet.inlineFormField}
            className={stylesheet.tallInput}
            FieldComponent={Fields.ValidatedInputField}
            validate={[required, zip]}
          />
        </div>
        <FormSubmit
          type="submit"
        >
          EXPORT
        </FormSubmit>
      </Form>
    );
  }

  // render() {
  //   const { handleSubmit, initialCreditCardValues } = this.props;

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <div className={stylesheet.group}>
  //         <LabeledRow
  //           label='Cardholder Name'
  //           labelPosition='top'
  //         >
  //           <Field
  //             name='name'
  //             type='text'
  //             component={ValidatedFormField}
  //             validate={required('Please enter a Cardholder Name.')}
  //           />
  //         </LabeledRow>
  //       </div>
  //       <div className={stylesheet.group}>
  //         <LabeledRow
  //           label='Card Number'
  //           labelPosition='top'
  //         >
  //           <CreditCardFormField
  //             validate={[required('Please enter a Card Number.'), creditCard]}
  //             initialCardType={initialCreditCardValues ? initialCreditCardValues.cardType : null}
  //           />
  //         </LabeledRow>
  //       </div>
  //       { this.props.showAddress && this.showAddressFields() }
  //       <div className={stylesheet.group}>
  //         <div className='row'>
  //           <div className={classNames('col-xs-4', stylesheet.multiGroup)}>
  //             <div>
  //               <label htmlFor='expireMonth'>Exp. Month</label>
  //             </div>
  //             <Field
  //               name='expireMonth'
  //               component={SelectFormField}
  //               labelKey='value'
  //               options={monthOptions}
  //               normalize={this.normalizeDateField}
  //               validate={required()}
  //             />
  //           </div>
  //           <div className='col-xs-4'>
  //             <div>
  //               <label htmlFor='expireYear'>Exp. Year</label>
  //             </div>
  //             <Field
  //               name='expireYear'
  //               component={SelectFormField}
  //               labelKey='value'
  //               options={yearOptions}
  //               normalize={this.normalizeDateField}
  //               validate={required()}
  //             />
  //           </div>
  //           <div className='col-xs-4'>
  //             <div>
  //               <label htmlFor='postalCode'>Billing Zip</label>
  //             </div>
  //             <Field
  //               name='postalCode'
  //               type='text'
  //               component={ValidatedFormField}
  //               validate={[required(), postalCode]}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </form>
  //   );
  // }
}
