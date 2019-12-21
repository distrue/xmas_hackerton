import React from 'react';
import { Helmet } from 'react-helmet';
import { Tree, Snow, Character, StickerList, Screen } from '../components';
import withLocation from '../tools/withlocation.js';
import { RecordRTCPromisesHandler, invokeSaveAsDialog} from 'recordrtc';

export default withLocation((props: any) => {
  let canvas: any;
  async function record() {
    function startCapture() {
      return navigator.mediaDevices.getDisplayMedia({
        type: "video",
        video: {cursor: "never"},  
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        }
      })
      .catch((err:any) => { console.error("Error:" + err); return null; });
    }
    let out = document.getElementById('out') as HTMLVideoElement;
    out.srcObject = await startCapture();
    out.autoplay = true;
    canvas = (new RecordRTCPromisesHandler(out.srcObject, {
      type: 'video'
    }));
    canvas.startRecording();
  }
  async function stopCapture() {   
    await canvas.stopRecording();
    let blob = await canvas.getBlob();
    invokeSaveAsDialog(blob, 'video.mp4');
    out.srcObject = undefined;
  }
  return (
    <Screen>
      <button type="button" style={{position:"absolute", right: "20px", zIndex: 3}} onClick={() => record()}>record</button>
      <button type="button" style={{position:"absolute", right: "20px", top: "18px", zIndex: 3}} onClick={() => stopCapture()}>stop</button>
      <Helmet title="XMAS" defer={false} />
      <Tree />
      <Snow />
      <StickerList/>
      <Character />
      <video id="out" controls width="250" height="200"/>
    </Screen>
  );
});
