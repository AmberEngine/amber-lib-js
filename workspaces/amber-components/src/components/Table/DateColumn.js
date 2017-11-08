import React from 'react';
import { stringifyDate } from '../../utils/date';

export default function DateColumn({ value }) {
  return <span>{stringifyDate(new Date(value))}</span>;
}
