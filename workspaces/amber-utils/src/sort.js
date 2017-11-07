export const stringTransform = (defaultValue) => (value) => {
  return typeof value === 'string' ? (!!value && value.toLowerCase()) || defaultValue : value;
};

export const priceTransform = (value) => {
  const transform = stringTransform('0');
  const stringValue = transform(value);
  return parseInt(stringValue.replace('$', ''), 10);
};

export function compareValues(aValue, bValue, transformValue) {
  const compareA = transformValue(aValue);
  const compareB = transformValue(bValue);

  if (compareA < compareB) {
    return -1;
  } else if (compareA > compareB) {
    return 1;
  }
  return 0;
}

// Alpha Sort callback for sort
// arr.sort(compareOn('name'));
export function compareOn(property) {
  return (a, b) => {
    return compareValues(a[property], b[property]);
  };
}

export function sort(
  data,
  column,
  sortAscending = true,
  transformValue = stringTransform(''),
) {
  const sortedData = data.sort((original, newRecord) => {
    return compareValues(
      original.get(column),
      newRecord.get(column),
      transformValue,
    );
  });
  return sortAscending ? sortedData : sortedData.reverse();
}

export function priceSort(...props) {
  return sort(...props, priceTransform);
}
