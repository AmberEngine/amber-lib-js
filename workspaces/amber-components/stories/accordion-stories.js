import React from 'react';
import { storiesOf } from '@storybook/react';

import './stories.scss';

import { AccordionContainer, AccordionItem } from '../src/components/Accordion';


storiesOf('Accordion', module)
  .add('renders accordion', () => {
    class Blah extends React.Component {
      state = {
        time: 0,
      }

      componentDidMount() {
        setInterval(() => {
          this.setState(state => ({
            time: state.time + 1,
          }));
        }, 1000);
      }

      render() {
        const { label } = this.props;
        const { time } = this.state;
        return (
          <div style={{ height: '1300px' }}>{label} + {time}</div>
        );
      }
    }

    return (
      <div style={{ background: '#efefef' }}>
        <AccordionContainer>
          <AccordionItem label="First Item">
            <Blah label="First Content!" />
          </AccordionItem>
          <AccordionItem label="Second Item">
            <Blah label="Second Content!" />
          </AccordionItem>
          <AccordionItem label="Third Item">
            <Blah label="Third Content!" />
          </AccordionItem>
          <AccordionItem label="Empty Child!" onClick={() => alert('clicked!')} />
        </AccordionContainer>
      </div>
    );
  });
