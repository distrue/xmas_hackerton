import React from 'react';
import { Helmet } from 'react-helmet';
import { Tree, Snow, Character, StickerList, Screen } from '../components';
import withLocation from '../tools/withlocation.js';

export default withLocation((props: any) => {
  console.log(props);
  return (
    <Screen>
      <Helmet title="XMAS" defer={false} />
      <Tree />
      <Snow />
      <Character />
      <StickerList/>
    </Screen>
  );
});
