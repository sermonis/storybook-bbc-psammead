import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import { Headline, SubHeading } from './index';

storiesOf('Components|Headline', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ text: textSnippet, script, service }) => (
      <Headline script={script} service={service}>
        {textSnippet}
      </Headline>
    ),
    { notes, knobs: { escapeHTML: false } },
  );

storiesOf('Components|SubHeading', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ text: textSnippet, script, service }) => (
      <SubHeading script={script} service={service}>
        {textSnippet}
      </SubHeading>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'with optional ID',
    ({ text: textSnippet, script, service }) => {
      const id = text('ID', 'foo', 'Other');
      return (
        <SubHeading id={id} script={script} service={service}>
          {textSnippet}
        </SubHeading>
      );
    },
    { notes, knobs: { escapeHTML: false } },
  );
