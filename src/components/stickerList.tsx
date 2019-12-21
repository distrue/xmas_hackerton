import React from 'react';
import styled from 'styled-components';
import { Ornament, Rudolph } from './stickers';

export default () => {
  return (
    <>
      <Base>
        <Ornament />
        <Rudolph />
      </Base>
    </>
  );
};

const Base = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;
