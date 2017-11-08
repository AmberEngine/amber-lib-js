import React from 'react';

export default function ListLayout({ Table, className, style }) {
  return (
    <div className={className} style={style}>
      <Table />
    </div>
  );
}
