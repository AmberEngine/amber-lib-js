import React from 'react';

import { Enhancers } from 'unformed';

import Button from '../Button';

export default Enhancers.onClickSubmitEnhancer((props) => {
  const { children, ...restProps } = props;
  return (
    <Button {...restProps}>
      {children}
    </Button>
  );
});
