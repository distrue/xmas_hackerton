import styled from 'styled-components';

export default styled.div`
  width: 90vw;
  height: 100vh;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: hidden;
`;

export const ShowCanvas = styled.div`
  background-color: white;
  padding: 10px 10px 0px 10px;
  width: 350px;
  max-width: 100vw;
  min-height: 600px;
  height: 90vh;
  max-height: 700px;
  position: relative;
  top: 0;
  left: 50%;
  overflow: scroll;
  transform: translate(-50%, 0%);
`;
