import React from 'react';

export default () => {
  const [backShow, setBackShow] = React.useState(true);
  const pos:any = { drawing: false, X: -1, Y: -1 };
  let ctx: any;
  const offset = { Left: 0, Top: 0 };
  const start = { X: 0, Y: 0 };
  let canvas: any;
  let type:any = "pc";

  React.useEffect(() => {
    canvas = document.getElementById('Hello') as HTMLCanvasElement;
    if (canvas) {
      canvas.width = 500;
      canvas.height = 500;
      ctx = canvas.getContext('2d');
      console.log(ctx);
      offset.Left = canvas.offsetLeft;
      offset.Top = canvas.offsetTop;
    }
  }, []);

  function initDraw(event: any) {
    ctx.beginPath();
    pos.drawing = true;
    const coors = getPosition(event);
    pos.X = coors.X;
    pos.Y = coors.Y;
    start.X = pos.X;
    start.Y = pos.Y;
    ctx.moveTo(pos.X, pos.Y);
  }

  function draw(event: any) {
    const coors = getPosition(event);
    ctx.lineTo(coors.X, coors.Y);
    pos.X = coors.X;
    pos.Y = coors.Y;
    ctx.stroke();
  }

  function endDraw() {
    ctx.lineTo(start.X, start.Y);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 8;
    ctx.closePath();
    setBackShow(false);
    const background = new Image();
    background.src = 'https://www.instagram.com/static/images/ico/apple-touch-icon-180x180-precomposed.png/c06fdb2357bd.png';
    background.crossOrigin = 'Anonymous';
    background.onload = () => {
      console.log('!');
      ctx.clip();
      ctx.drawImage(background, 0, 0, 100, 100);
    };
  }

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  function getPosition(event: any) {
    let x, y;
    if(type === "mobile") {
      console.log(event.touches[0].pageX);
      console.log(event.touches[0].pageY);
      x = event.touches[0].pageX - canvas.offsetLeft;
      y = event.touches[0].pageY - canvas.offsetTop;
    }
    else {
      x = event.pageX - canvas.offsetLeft;
      y = event.pageY - canvas.offsetTop;
    }
    return { X: x, Y: y };
  }

  const listener = (event: any) => {
    console.log(event.type);
    if(!isMobile()) {
      switch (String(event.type)) {
        case 'mousedown':
          initDraw(event);
          break;
        case 'mousemove':
          if(pos.drawing) draw(event);
          break;
        case 'mouseup':
          endDraw();
          break;
      }
    }
    else {
      type = "mobile";
      switch (String(event.type)) {
        case 'touchstart':
          initDraw(event);
          break;
        case 'touchmove':
          if(pos.drawing) draw(event);
          break;  
        case 'touchend':
          endDraw();
          break;  
      }
    }
  };

  const download = () => {
    const docu = document;
    const img = docu.getElementById('Hello') as HTMLCanvasElement;
    if (!img) return;
    const data = img.toDataURL('image/png', 'image/octet-stream');
    const link = document.createElement('a');
    if (link) {
      link.setAttribute('download', 'cropped.png');
      link.setAttribute('href', data);
      link.click();
    }
  };

  const upload = () => {
    
  }

  return (
    <div>
      <button type="button" onClick={download}>
        download
      </button>
      <br />
      <img
        style={{
          display: backShow ? 'block' : 'none',
          opacity: '1',
          position: 'absolute',
          width: '100px',
          height: 'auto',
          top: '20',
          left: '20',
        }}
        alt="img"
        src={'https://www.instagram.com/static/images/ico/apple-touch-icon-180x180-precomposed.png/c06fdb2357bd.png'}
      />
      <canvas
        id="Hello"
        style={{ border: '1px solid black', position: 'absolute', left: '20', top: '20', width: '500px', height: '500px',maxWidth:'90vw',
        maxHeight:'90vh',
         }}
        onMouseDown={listener}
        onMouseMove={listener}
        onMouseUp={listener}
        onContextMenu={listener}
        onTouchMove={listener}
        onTouchStart={listener}
        onTouchEnd={listener}
      />
    </div>
  );
};
