import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import MediaIndicator from './index';

describe('MediaIndicator', () => {
  shouldMatchSnapshot(
    'should render video by default',
    <MediaIndicator service="news" />,
  );

  shouldMatchSnapshot(
    'should render video indicator correctly',
    <MediaIndicator
      duration="2:15"
      datetime="PT2M15S"
      type="video"
      service="news"
    />,
  );

  shouldMatchSnapshot(
    'should render video indicator correctly when inline',
    <MediaIndicator
      duration="2:15"
      datetime="PT2M15S"
      type="video"
      service="news"
      isInline
    />,
  );

  shouldMatchSnapshot(
    'should render video indicator correctly when inline on RTL',
    <MediaIndicator
      duration="2:15"
      datetime="PT2M15S"
      type="video"
      service="persian"
      isInline
    />,
  );

  shouldMatchSnapshot(
    'should render video correctly without duration details',
    <MediaIndicator type="video" service="news" />,
  );

  shouldMatchSnapshot(
    'should render audio indicator correctly',
    <MediaIndicator
      duration="2:15"
      datetime="PT2M15S"
      type="audio"
      service="news"
    />,
  );

  shouldMatchSnapshot(
    'should render audio correctly without duration details',
    <MediaIndicator type="audio" service="news" />,
  );

  shouldMatchSnapshot(
    'should render photogallery correctly',
    <MediaIndicator type="photogallery" service="news" />,
  );
});
