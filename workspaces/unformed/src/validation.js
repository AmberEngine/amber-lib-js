const passwordHasNumberRegex = /[0-9]/g;
const phoneNumberRegex = /(\d{3})-(\d{3})-(\d{4})/g;
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;
const postalCodeRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

export const regex = (reg, message) => (value) => {
  // If we don't have a value, don't validate.
  if (value === '' || !value) {
    return null;
  }

  const match = value.match(reg);
  return !match || match.length === 0 ? message : null;
};

export const phoneNumber = regex(phoneNumberRegex, 'Please enter a valid phone number');
export const email = regex(emailRegex, 'Please enter a valid email address');
export const zip = regex(postalCodeRegex, 'Please enter a valid zip code');
export const passwordHasNumber = regex(
  passwordHasNumberRegex,
  'Please include at least one number',
);

export const required = (value) => {
  return value === '' ? 'Please enter a value' : null;
};

export const minLength = (length) => (value) => {
  return value.trim().length < length ? `Please enter at least ${length} characters` : null;
};

export const equalTo = (field, message = 'Does not match') => (value, allValues = {}) => {
  const equalValue = allValues[field];
  return value !== equalValue ? message : null;
};
