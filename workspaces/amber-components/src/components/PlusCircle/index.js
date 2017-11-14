import React from 'react';
import { Icon } from '@amber-engine/amber-content';

import CircleIconContainer from '../CircleIconContainer';

const PlusCircle = (props) => {
  return (
    <CircleIconContainer {...props}>
      <Icon icon="add" />
    </CircleIconContainer>
  );
};

export default PlusCircle;
