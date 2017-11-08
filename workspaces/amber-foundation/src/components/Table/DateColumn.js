import React from 'react';
import { stringifyDate } from '../../utils/dateUtils';

export default function DateColumn({ value }) {
  return <span>{stringifyDate(new Date(value))}</span>;
}
