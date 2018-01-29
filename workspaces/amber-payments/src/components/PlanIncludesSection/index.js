import React from 'react';

import stylesheet from './PlanIncludesSection.scss';

export default function PlanIncludesSection({ channels }) {
  return (
    <div>
      <div className={stylesheet.headline}>
        YOUR CURRENT PLAN:
      </div>
      <div>
        1 User and {channels.length} Channels
      </div>
    </div>
  );
}
