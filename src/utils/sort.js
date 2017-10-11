export function sort(aValue, bValue) {
  const compareA = typeof aValue === 'string' ? (!!aValue && aValue.toLowerCase()) || '' : aValue;
  const compareB = typeof bValue === 'string' ? (!!bValue && bValue.toLowerCase()) || '' : bValue;
  if (compareA < compareB) {
    return -1;
  } else if (compareA > compareB) {
    return 1;
  }
  return 0;
}

// Alpha Sort callback for sort
// arr.sort(sortOn('name'));
export function sortOn(property) {
  return (a, b) => {
    return sort(a[property], b[property]);
  };
}
