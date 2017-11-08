import test from 'ava';
import { fromJS } from 'immutable';

import { sort, priceSort } from '../sort';

const testData = fromJS([
  { id: '2', name: 'product2', price: '$46.01', category: 'one' },
  { id: '1', name: 'product1', price: '$45.01', category: 'one' },
  { id: '3', name: 'product3', price: '$47.01', category: 'two' },
  { id: '4', name: 'product4', price: '$48.01', category: 'one' },
  { id: '5', name: 'product5', price: '$49.01', category: 'one' },
  { id: '6', name: 'product6', price: '$44.01', category: 'one' },
  { id: '7', name: 'product7', price: '$43.01', category: 'one' },
  { id: '8', name: 'product8', price: '$42.01', category: 'one' },
  { id: '9', name: 'product9', price: '$41.01', category: 'zero' },
  { id: '10', name: 'product10', price: '$40.01', category: 'one' },
]);

test('default sort ascending sorts alphabetically', t => {
  const sortedData = sort(testData, 'id', true);
  t.is(sortedData.get('0').get('id'), '1');
});

test('default sort descending sorts alphabetically', t => {
  const sortedData = sort(testData, 'id', false);
  t.is(sortedData.get('0').get('id'), '9');
});

test('default sort does not sort numerically', t => {
  const sortedData = sort(testData, 'id', true);
  t.not(sortedData.get('1').get('id'), '2');
});

test('price sort ascending sorts by value', t => {
  const sortedData = priceSort(testData, 'price', true);
  t.is(sortedData.get('0').get('id'), '10');
});

test('price sort desending sorts by value', t => {
  const sortedData = priceSort(testData, 'price', false);
  t.is(sortedData.get('0').get('id'), '5');
});
