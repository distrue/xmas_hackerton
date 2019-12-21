import audio from '../images/audio.png';
import download from '../images/download.png';
import recordA from '../images/record.png';

import React from 'react';
import { Helmet } from 'react-helmet';
import { Canvas, Tree, Snow, Character, StickerList, Screen } from '../components';
import { ShowCanvas } from '../components/screen';
import withLocation from '../tools/withlocation.js';
import { RecordRTCPromisesHandler, invokeSaveAsDialog } from 'recordrtc';

export default withLocation((props: any) => {
  const [modalV, setMV] = React.useState(false);
  const [head, setHead] = React.useState('');
  const [cnt1, SC1] = React.useState("To 지원(박)");
  const [cnt2, SC2] = React.useState("이번 크리스마스는");
  const [cnt3, SC3] = React.useState("with DevKor");
  const [cnt4, SC4] = React.useState("정연길, 정호진 드림");

  let canvas: any;
  async function record() {
    function startCapture() {
      return navigator.mediaDevices.getDisplayMedia({
          type: 'video',
          video: true,
          audio: true,
        })
        .catch((err: any) => {
          console.error('Error:' + err);
          return null;
        });
    }
    let out = document.getElementById('out') as HTMLVideoElement;
    out.srcObject = await startCapture();
    out.autoplay = true;
    canvas = new RecordRTCPromisesHandler(out.srcObject, {
      type: 'video',
    });
    canvas.startRecording();
  }
  async function stopCapture() {
    await canvas.stopRecording();
    let blob = await canvas.getBlob();
    invokeSaveAsDialog(blob, 'video.webm');
  }
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundImage: 'linear-gradient(to right top, #711b0d, #6b1b12, #651b17, #5f1c1a, #581d1d)'
      }}
    >
      <img
        src={recordA}
        style={{ position: 'fixed', left: '10px', bottom: '13px', zIndex: 3, width: '20px', height: '20px' }}
        onClick={() => record()}
      />
      <img
        src={download}
        style={{ position: 'fixed', left: '34px', bottom: '13px', zIndex: 3, width: '20px', height: '20px' }}
        onClick={() => stopCapture()}
      />
      <img
        src={audio}
        style={{ position: 'fixed', left: '56px', bottom: '13px', zIndex: 3, width: '20px', height: '20px' }}
      />
      <ShowCanvas>
        <Helmet title="XMAS" defer={false}>
          <link href="https://fonts.googleapis.com/css?family=Parisienne&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Nanum+Brush+Script&display=swap" rel="stylesheet" />
        </Helmet>
        <Tree />
        <Snow />
        <StickerList />
        <Character head={head} setMV={setMV} />
        <input
          style={{
            position: 'absolute',
            top: '520px',
            left: '20px',
            textAlign: 'left',
            width: '250px',
            fontFamily: 'Nanum Brush Script',
            fontSize: '24px',
            borderWidth: "0px",
            backgroundColor: "rgba(0,0,0,0)"
          }}
          value={cnt1}
          onChange={e=>SC1(e.target.value)}
        />
        <input
          style={{
            position: 'absolute',
            top: '550px',
            left: '50%',
            textAlign: 'center',
            width: '300px',
            transform: 'translate(-50%, 0%)',
            fontFamily: 'Nanum Brush Script',
            fontSize: '32px',
            borderWidth: "0px",
            backgroundColor: "rgba(0,0,0,0)"
          }}
          value={cnt2}
          onChange={e=>SC2(e.target.value)}
        />
        <input
          style={{
            position: 'absolute',
            top: '600px',
            left: '50%',
            textAlign: 'center',
            width: '300px',
            transform: 'translate(-50%, 0%)',
            fontFamily: 'Parisienne',
            fontSize: '36px',
            borderWidth: "0px",
            backgroundColor: "rgba(0,0,0,0)"
          }}
          value={cnt3}
          onChange={e=>SC3(e.target.value)}
        />
        <input
          style={{
            position: 'absolute',
            top: '660px',
            right: '20px',
            textAlign: 'right',
            width: '250px',
            fontFamily: 'Nanum Brush Script',
            fontSize: '24px',
            borderWidth: "0px",
            backgroundColor: "rgba(0,0,0,0)"
          }}
          value={cnt4}
          onChange={e=>SC4(e.target.value)}
        />
        <video id="out" controls width="0" height="0" style={{ position: 'absolute', top: '20px' }} />
      </ShowCanvas>
      <div style={{ display: modalV ? 'block' : 'none' }}>
        <Screen style={{ backgroundColor: 'white', zIndex: '4' }}>
          <Canvas setHead={setHead} setMV={setMV} />
        </Screen>
      </div>
    </div>
  );
});
