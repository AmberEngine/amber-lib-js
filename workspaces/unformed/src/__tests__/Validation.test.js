import test from 'ava';

import {
  equalTo,
  minLength,
  required,
  passwordHasNumber,
  zip,
  email,
  phoneNumber,
  regex
} from '../validation';

test('equalTo returns null when values are equal', t => {
  const validationFunction = equalTo('matchField');
  const validationResult = validationFunction('abc', { matchField: 'abc' });
  t.is(validationResult, null);
});

test('equalTo returns default error when values aren\'t equal', t => {
  const validationFunction = equalTo('matchField');
  const validationResult = validationFunction('def', { matchField: 'abc' });
  t.is(validationResult, 'Does not match');
});

test('equalTo returns custom error when values aren\'t equal', t => {
  const customErrorMessage = 'Big error!!!';
  const validationFunction = equalTo('matchField', customErrorMessage);
  const validationResult = validationFunction('def', { matchField: 'abc' });
  t.is(validationResult, customErrorMessage);
});

test('minLength returns null when value exceeds the minimum length', t => {
  const validationFunction = minLength(5);
  const validationResult = validationFunction('123456');
  t.is(validationResult, null);
});

test('minLength returns error when value is less than the minimum length', t => {
  const validationFunction = minLength(5);
  const validationResult = validationFunction('1234');
  t.is(validationResult, 'Please enter at least 5 characters');
});

test('required returns null when value is present', t => {
  const validationResult = required('value');
  t.is(validationResult, null);
});

test('required returns error when value isn\'t present', t => {
  const validationResult = required('');
  t.is(validationResult, 'Please enter a value');
});


test('passwordHasNumber returns null when value has a number', t => {
  const validationResult = passwordHasNumber('number55555!!!!!');
  t.is(validationResult, null);
});

test('passwordHasNumber returns error when value doesn\'t have a number', t => {
  const validationResult = passwordHasNumber('nonumber');
  t.is(validationResult, 'Please include at least one number');
});

test('zip returns null when value is a zip code', t => {
  const validationResult = zip('48108');
  t.is(validationResult, null);
});

test('zip returns error when value isn\'t a zip code', t => {
  const validationResult = zip('asdf');
  t.is(validationResult, 'Please enter a valid zip code');
});

test('email returns null when value is an email address', t => {
  const validationResult = email('cool@amberengine.com');
  t.is(validationResult, null);
});

test('email returns error when value isn\'t an email address', t => {
  const validationResult = email('coolamberengine.com');
  t.is(validationResult, 'Please enter a valid email address');
});

test('phoneNumber returns null when value is a phone number', t => {
  const validationResult = phoneNumber('419-419-4191');
  t.is(validationResult, null);
});

test('phoneNumber returns error when value isn\'t a phone number', t => {
  const validationResult = phoneNumber('cool@amberengine.com');
  t.is(validationResult, 'Please enter a valid phone number');
});

const ezRegex = /ez/;
test('regex returns null when value matches regex', t => {
  const validationFunction = regex(ezRegex, 'Oh no!');
  const validationResult = validationFunction('ez');
  t.is(validationResult, null);
});

test('regex returns error when value doesn\'t match regex', t => {
  const customErrorMessage = 'Big error!!!';
  const validationFunction = regex(ezRegex, customErrorMessage);
  const validationResult = validationFunction('hard');
  t.is(validationResult, customErrorMessage);
});
