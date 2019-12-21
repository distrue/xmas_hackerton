import React from 'react';
import styled from 'styled-components';

export default () => {
  const [crtPst, setCrtPst]:any = React.useState({
      x: 20, 
      y: 30,
      now: "none"
  });
  const [stop, setStop]:any = React.useState({
      x: 0,
      y: 0
  })

  const listener = (event:any) => {
      console.log(event.type);
      switch(event.type){
        case "dragstart":
            console.log(event);
            setCrtPst({...crtPst, now: "pc"})
            setStop({x: crtPst.x, y: crtPst.y})
            break
        case "drag":
            console.log(event.pageX, event.pageY);
            if(event.pageX !== 0 && event.pageY !== 0) {
                if(crtPst.now === "pc") setCrtPst({...crtPst, x: event.pageX - (window.innerWidth / 2) + 150, y: event.pageY})
            }
            break
        case "dragend":
            console.log(crtPst.x, crtPst.y);
            setCrtPst({...crtPst, now: "none"})
            break
        case "touchstart":
            setCrtPst({...crtPst, now: "mobile"})
            break
        case "touchmove":
            console.log(event.touches[0].pageX, event.touches[0].pageY);
            if(crtPst.now === "mobile") setCrtPst({...crtPst, x: event.touches[0].pageX  - (window.innerWidth / 2) + 150, y: event.touches[0].pageY})
            break
        case "touchend":
            setCrtPst({...crtPst, now: "none"})
            break
    }
  }

  return (
    <Ornament
        style={{
            position: "absolute", 
            top: crtPst.now !== "pc"?crtPst.y:stop.y, 
            left: crtPst.now !== "pc"?crtPst.x:stop.x,
            transform: "translate(-50%, -50%)"
        }}
        draggable={true}
        onDragStart={listener} onDrag={listener} onDragEnd={listener}
        onTouchMove={listener} onTouchEnd={listener} onTouchStart={listener}
        >
    <div className="ball-wrapper">
        <div className="string"></div>
        <div className="ring"></div>
        <div className="button"></div>
        <div className="red-ball"></div>
    </div>
    </Ornament>
  );
};

const Ornament=styled.div`
    z-index:4;
    position: absolute;
    width: 50px;
    height: 50px;
    transform: translate(-50%, -50%);
    top: 0;
    .ball-wrapper{
        float: left;
        margin: 0px 40px;
    }
    .ring{
        height:15px;
        width: 5px;
        background-color: #c03636;
        border: 2px solid  #f99d24;
        border-radius: 45%;
        position: relative;
        left: 26.4px;
        top: 12px;
    }
    .string{
        width: 1.5px;
        position: relative;
        background-color: #f99d24;
        height: 37px;
        left: 30px;
        top: 12.4px;
        margin-top: -20px;
    }
    .button {
        height: 22px;
        width: 30px;
        background-color: #f99d24;
        position: relative;
        left: 15px;
        top: 7px;
        border-radius: 4px;
    }
    .red-ball {
        background-color: #6b2f36;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        position: relative;
        left: 3px;
    }
`