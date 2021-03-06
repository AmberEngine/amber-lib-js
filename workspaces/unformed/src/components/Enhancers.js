import { PropTypes } from 'react';
import getContext from 'recompose/getContext';
import withHandlers from 'recompose/withHandlers';
import withState from 'recompose/withState';
import mapProps from 'recompose/mapProps';
import compose from 'recompose/compose';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import lifecycle from 'recompose/lifecycle';
import omit from 'lodash.omit';

export const submitEnhancer = getContext({
  submit: PropTypes.func,
});

export const onClickSubmitEnhancer = compose(
  submitEnhancer,
  mapProps(props => {
    const { submit, ...otherProps } = props;
    return {
      onClick: submit,
      ...otherProps,
    };
  }),
);

const getValueForEvent = (e) => {
  return !!e && e.target ? e.target.value : e;
};

const coreFieldHandlers = keysToUpdateFor => compose(
  submitEnhancer,
  getContext({
    getFormData: PropTypes.func,
    setFormValue: PropTypes.func,
    disabled: PropTypes.bool,
  }),
  withState('value', 'setValue', ({ name, getFormData }) => {
    const formData = getFormData();
    return formData[name] || '';
  }),
  onlyUpdateForKeys(keysToUpdateFor),
  withHandlers({
    onBlur: ({ name, value, setFormValue }) => () => {
      setFormValue(name, value);
    },
    onChange: ({ name, setValue, setFormValue }) => (e) => {
      const value = getValueForEvent(e);
      setValue(value);
      setFormValue(name, value);
    },
    onKeyPress: ({ submit, setFormValue, name, value }) => (e) => {
      if (e.key === 'Enter') {
        e.persist();
        e.preventDefault();
        setFormValue(name, value).then(() => {
          submit(e);
        });
      }
    },
  }),
);

const omitCoreFieldProperties = mapProps((props) => omit(props, [
  'getFormData',
  'setFormValue',
  'submit',
  'setValue',
]));

const registerField = compose(
  getContext({
    registerField: PropTypes.func,
  }),
  lifecycle({
    componentWillMount() {
      this.props.registerField(this.props);
    },
  }),
  mapProps((props) => omit(props, [
    'registerField',
  ])),
);

const getValidationErrors = (value, validate, formData, allowMultipleErrors = true) => {
  return validate.reduce((validationErrors, validation) => {
    if (validationErrors.length > 0 && !allowMultipleErrors) {
      return validationErrors;
    }
    const error = validation(value, formData);
    return error ? [...validationErrors, validation(value)] : validationErrors;
  }, []);
};

const updateValidation = (value, { getFormData, setValidationErrors, validate = [] }) => {
  const allValues = getFormData();
  setValidationErrors(
    getValidationErrors(value, validate, allValues),
  );
};

export const enhanceWithFormHandlers = compose(
  coreFieldHandlers(['value', 'disabled']),
  registerField,
  omitCoreFieldProperties,
);

export const enhanceWithValidation = compose(
  getContext({
    submitted: PropTypes.bool,
  }),
  coreFieldHandlers(['value', 'disabled', 'submitted']),
  withState('validationErrors', 'setValidationErrors', ({ value, validate = [] }) => {
    return getValidationErrors(value, validate);
  }),
  withState('visited', 'setVisited', false),
  withHandlers({
    onBlur: (props) => (e) => {
      const { onBlur, setVisited, value } = props;
      setVisited(true);

      // Update validation
      updateValidation(value, props);

      // Call the original `onBlur`
      onBlur(e);
    },
    onChange: (props) => (e, reset = false) => {
      const { onChange, setVisited } = props;

      // Update validation
      const value = getValueForEvent(e);
      updateValidation(value, props);

      // If we're reseting the value, update `visited`
      if (reset) {
        setVisited(false);
      }

      // Call the original `onChange`
      onChange(e);
    },
    getValidationErrors: ({ validationErrors }) => () => {
      return validationErrors;
    },
  }),
  registerField,
  mapProps((props) => omit(props, [
    'getValidationErrors',
    'setValidationErrors',
    'updateValidation',
    'setVisited',
    'getValueForEvent',
    'validate',
  ])),
  omitCoreFieldProperties,
);
