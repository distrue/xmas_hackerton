import React from 'react';
import { Helmet } from 'react-helmet';
import { Canvas, Tree, Snow, Character, StickerList, Screen } from '../components';
import {ShowCanvas} from '../components/screen';
import withLocation from '../tools/withlocation.js';
import { RecordRTCPromisesHandler, invokeSaveAsDialog} from 'recordrtc';

export default withLocation((props: any) => {
  const [modalV, setMV] = React.useState(false);
  const [head, setHead] = React.useState("");
  
  
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
    invokeSaveAsDialog(blob, 'video.webm');
  }
  return (
    <div style={{ position: "absolute", top:"0", left:"0", width:"100vw", height:"100vh", backgroundImage: "linear-gradient(to right top, #711b0d, #6b1b12, #651b17, #5f1c1a, #581d1d)"}}>
      <ShowCanvas>
        <button type="button" style={{position:"absolute", right: "20px", top: "10px", zIndex: 3}} onClick={() => record()}>record</button>
        <button type="button" style={{position:"absolute", right: "20px", top: "35px", zIndex: 3}} onClick={() => stopCapture()}>download</button>
        <Helmet title="XMAS" defer={false}>
          <link href="https://fonts.googleapis.com/css?family=Parisienne&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Nanum+Brush+Script&display=swap" rel="stylesheet"/>
        </Helmet>
        <Tree />
        <Snow />
        <StickerList/>
        <Character head={head}  setMV={setMV}/>
        <div style={{position: "absolute", top:"520px", left:"20px", textAlign: "left", width:"250px",
      fontFamily:"Nanum Brush Script", fontSize:"24px"}}>
          To 지원(박)
        </div>
        <div style={{position: "absolute", top:"560px", left:"50%", textAlign: "center", width:"300px", transform: "translate(-50%, 0%)",
      fontFamily:"Nanum Brush Script", fontSize:"32px"}}>
          20번째 크리스마스는
        </div>
        <div style={{position: "absolute", top:"600px", left:"50%", textAlign: "center", width:"300px", transform: "translate(-50%, 0%)",
      fontFamily:"Parisienne", fontSize:"36px"}}>
          with You
        </div>
        <div style={{position: "absolute", top:"650px", right:"20px", textAlign: "right", width:"250px",
      fontFamily:"Nanum Brush Script", fontSize:"24px"}}>
           정호진 드림
        </div>
        <video id="out" controls width="250" height="200" style={{position:"absolute", top:"1000px"}}/>
      </ShowCanvas>
      <div style={{display:modalV?"block":"none"}}>
        <Screen style={{backgroundColor:"white", zIndex:"4"}}>
          <Canvas setHead={setHead} setMV={setMV} />
        </Screen>
      </div>
   </div>
  );
});
