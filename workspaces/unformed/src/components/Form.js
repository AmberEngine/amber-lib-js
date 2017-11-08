import React, { PureComponent, PropTypes } from 'react';
import omit from 'lodash.omit';

export default class Form extends PureComponent {
  static propTypes = {
    formData: PropTypes.object,
  }

  static childContextTypes = {
    setFormValue: PropTypes.func.isRequired,
    getFormData: PropTypes.func.isRequired,
    registerField: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    submitted: PropTypes.bool.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    const { formData } = this.props;
    this.state = {
      formData: formData || {},
      fields: [],
      submitted: false,
    };
  }

  getChildContext() {
    return {
      getFormData: this.getFormData,
      setFormValue: this.setFormValue,
      registerField: this.registerField,
      submit: this.onSubmit,
      submitted: this.state.submitted,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { formData } = nextProps;
    const { formData: oldFormData } = this.props;

    if (formData !== oldFormData) {
      this.updateFormData(formData);
    }
  }

  updateFormData(formData, reset = true) {
    const { fields, submitted } = this.state;
    // Update the fields.
    fields.forEach(field => {
      field.onChange(formData[field.name], reset);
    });

    // Update the state form data.
    this.setState({
      formData,
      submitted: reset ? false : submitted,
    });
  }

  getFormData = () => {
    return this.state.formData;
  }

  clear = () => {
    const clearedFormData = this.state.fields.reduce((formData, field) => {
      return { ...formData, [field.name]: '' };
    }, {});
    this.updateFormData(clearedFormData);
  }

  registerField = (field) => {
    this.setState((state) => ({
      ...state,
      fields: [...state.fields, field],
      formData: {
        ...state.formData,
        [field.name]: field.value,
      },
    }));
  }

  setFormValue = (field, value) => {
    return new Promise((resolve) => {
      this.setState((state) => ({
        ...state,
        formData: {
          ...state.formData,
          [field]: value,
        },
      }), () => {
        // Done updating state!
        resolve();
      });
    });
  }

  getValidationErrors() {
    const { fields } = this.state;

    return fields.reduce((validationErrors, field) => {
      return !field.getValidationErrors ? validationErrors :
        [...validationErrors, ...field.getValidationErrors()];
    }, []);
  }

  onSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }

    const { onSubmit, onValidationError } = this.props;
    const { formData } = this.state;

    const validationErrors = this.getValidationErrors();

    if (validationErrors.length === 0) {
      onSubmit(formData, e);
    } else if (onValidationError) {
      onValidationError(validationErrors);
    }

    this.setState({
      submitted: true,
    });
  }

  render() {
    const {
      children,
      ...restProps
    } = this.props;
    const formProps = omit(restProps, ['formData', 'onValidationError']);
    return (
      <form onSubmit={this.onSubmit} {...formProps}>
        {children}
      </form>
    );
  }
}
