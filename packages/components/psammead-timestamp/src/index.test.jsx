import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import { getPica } from '@bbc/gel-foundations/typography';
import Timestamp from '.';

describe('Timestamp', () => {
  shouldMatchSnapshot(
    'should render Timestamp correctly',
    <Timestamp datetime="1530947227000" script={latin} service="news">
      7 July 2018
    </Timestamp>,
  );

  shouldMatchSnapshot(
    'should render with the correct typography style applied',
    <Timestamp
      datetime="1530947227000"
      typographyFunc={getPica}
      script={latin}
      service="news"
    >
      7 July 2018
    </Timestamp>,
  );

  shouldMatchSnapshot(
    'should render Timestamp with a prefix',
    <Timestamp
      datetime="1530947227000"
      typographyFunc={getPica}
      script={latin}
      service="news"
    >
      Updated 7 July 2018
    </Timestamp>,
  );

  shouldMatchSnapshot(
    'should render Timestamp without padding',
    <Timestamp
      datetime="1530947227000"
      typographyFunc={getPica}
      script={latin}
      padding={false}
      service="news"
    >
      Updated 7 July 2018
    </Timestamp>,
  );
});
