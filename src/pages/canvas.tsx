import React from 'react';
import {Helmet} from 'react-helmet';
import {Canvas} from '../components';
import withLocation from '../tools/withlocation.js';

export default withLocation((props: any) => {
  console.log(props);
  return <div>
    <Helmet title="XMAS" defer={false} />
    <Canvas/>
  </div>;
});
