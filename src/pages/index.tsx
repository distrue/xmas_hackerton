import React from 'react';
import {Helmet} from 'react-helmet';
import {Tree, Snow} from '../components';
import withLocation from '../tools/withlocation.js';

export default withLocation((props: any) => {
  console.log(props);
  return <div>
    <Helmet title="XMAS" defer={false} />
    <Tree/>
    <Snow/>
  </div>;
});
