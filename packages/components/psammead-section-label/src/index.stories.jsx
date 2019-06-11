import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import SectionLabel from './index';

storiesOf('Components|SectionLabel', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(
      [{ name: 'title', defaultText: 'Most Read' }],
      ([title], script, dir) => (
        <SectionLabel
          script={script}
          dir={dir}
          bar={boolean('show bar?', true)}
          hideSectionHeader={boolean(
            'hide first section header when width less than 600px?',
            true,
          )}
          labelId="example-section-label"
        >
          {title}
        </SectionLabel>
      ),
    ),
    { notes, knobs: { escapeHTML: false } },
  );
