import React from 'react';
import { Location } from '@reach/router';
import queryString from 'query-string';

const withLocation = (ComponentToWrap) => () => (
  <Location>
    {({ location, navigate }) => (
      <ComponentToWrap
        location={location}
        navigate={navigate}
        search={location.search ? queryString.parse(location.search) : {}}
      />
    )}
  </Location>
);

export default withLocation;
