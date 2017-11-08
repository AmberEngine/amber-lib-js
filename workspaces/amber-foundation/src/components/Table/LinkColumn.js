import React from 'react';
import { pureEnhanceWithRowData } from './Enhancers';

function LinkColumn({ value, rowData, cellProperties }) {
  const { formatLink, formatValue } = cellProperties;

  const displayValue = formatValue ? formatValue(value, rowData) : value;
  return (
    <a href={formatLink(rowData)}>
      {displayValue}
    </a>
  );
}

export default pureEnhanceWithRowData(LinkColumn);
