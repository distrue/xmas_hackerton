import React from 'react';
import withLocation from '../tools/withlocation.js';

export default withLocation((props: any) => {
  console.log(props);
  return <div>Hello</div>;
});
