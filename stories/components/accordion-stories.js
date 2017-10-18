import React from 'react';
import { storiesOf } from '@storybook/react';

import { AccordionContainer, AccordionItem } from '../../src/components/Accordion';


storiesOf('Accordion', module)
  .add('renders dropdown', () => {
    return (
      <AccordionContainer>
        <AccordionItem label="First Item">
          First Content!
        </AccordionItem>
        <AccordionItem label="Second Item">
          Second Content!
        </AccordionItem>
        <AccordionItem label="Third Item">
          Third Content!
        </AccordionItem>
      </AccordionContainer>
    );
  });
