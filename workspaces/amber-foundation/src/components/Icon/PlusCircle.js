import React from 'react';
import Icon from './index';

import CircleIconContainer from './CircleIconContainer';

const PlusCircle = (props) => {
  return (
    <CircleIconContainer {...props}>
      <Icon icon="add" />
    </CircleIconContainer>
  );
};

export default PlusCircle;
