import React from 'react';

const ampGeoData = {
  ISOCountryGroups: {
    eea: [
      'at',
      'ax',
      'be',
      'bg',
      'bl',
      'cy',
      'cz',
      'de',
      'dk',
      'ea',
      'ee',
      'es',
      'fi',
      'fr',
      'gb',
      'gf',
      'gg',
      'gi',
      'gp',
      'gr',
      'hr',
      'hu',
      'ic',
      'ie',
      'im',
      'is',
      'it',
      'je',
      'li',
      'lt',
      'lu',
      'lv',
      'mf',
      'mq',
      'mt',
      'nc',
      'nl',
      'no',
      'pf',
      'pl',
      'pm',
      'pt',
      're',
      'ro',
      'se',
      'si',
      'sj',
      'sk',
      'tf',
      'va',
      'wf',
      'yt',
    ],
  },
};

const jsonInlinedScript = data => (
  <script
    type="application/json"
    /* eslint-disable-next-line react/no-danger */
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

const AmpGeo = () => (
  <amp-geo layout="nodisplay">{jsonInlinedScript(ampGeoData)}</amp-geo>
);

export default AmpGeo;
