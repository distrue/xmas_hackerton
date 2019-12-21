import React from 'react';
import styled from 'styled-components';

export default () => {
  const [crtPst, setCrtPst] = React.useState({
      x: 20, 
      y: 300,
      now: "none"
  });
  const [stop, setStop] = React.useState({
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
                if(crtPst.now === "pc") setCrtPst({...crtPst, x: event.pageX, y: event.pageY})
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
            if(crtPst.now === "mobile") setCrtPst({...crtPst, x: event.touches[0].pageX, y: event.touches[0].pageY})
            break
        case "touchend":
            setCrtPst({...crtPst, now: "none"})
            break
    }
  }

  return (
    <>
    <List>
    </List>
    <Base>
        <div 
            className="item" 
            style={{
                position: "absolute", 
                top: crtPst.now !== "pc"?crtPst.y:stop.y, 
                left: crtPst.now !== "pc"?crtPst.x:stop.x,
                transform: "translate(-50%, -50%)"
            }}
            draggable={true}
            onDragStart={listener} onDrag={listener} onDragEnd={listener}
            onTouchMove={listener} onTouchEnd={listener} onTouchStart={listener}
        />
    </Base>
    </>
  );
};

const List = styled.div`
    width: 100px;
    height: 100vh;
    position: absolute;
    right: 0px; top: 0px;
    z-index: 1;
    background-color: #707070;
`;

const Base = styled.div`
    width: 100vw; height: 100vh;
    position: absolute; top: 0; left: 0;
    .item {
        width: 50px; height: 50px; background-color: red; z-index: 2;
    }
`;