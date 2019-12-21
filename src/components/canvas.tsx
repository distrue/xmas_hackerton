import React from 'react';

export default ({setHead, setMV}:any) => {
  const [backShow, setBackShow] = React.useState(true);
  const pos:any = { drawing: false, X: -1, Y: -1 };
  let ctx: any;
  const offset = { Left: 20, Top: 20 };
  const start = { X: 0, Y: 0 };
  let canvas: any;
  let type:any = "pc";
  let backImg:any;
  let fr = new FileReader();
  let rW: number;
  let rH: number;

  React.useEffect(() => {
    canvas = document.getElementById('Hello') as HTMLCanvasElement;
    if (canvas) {
      canvas.width = 500;
      canvas.height = 500;
      ctx = canvas.getContext('2d');
    }
  }, []);

  function initDraw(event: any) {
    canvas = document.getElementById('Hello') as HTMLCanvasElement;
    if (canvas) {
      const img = document.getElementById('see') as HTMLCanvasElement;
      console.dir(img);
      canvas.width = img.width;
      canvas.height = img.height;
      ctx = canvas.getContext('2d');
      console.log(ctx);
      offset.Left = canvas.offsetLeft;
      offset.Top = canvas.offsetTop;
    }
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
    background.src = backImg;
    background.crossOrigin = 'Anonymous';
    background.onload = () => {
      console.log('!');
      ctx.clip();
      ctx.drawImage(background, 0, 0, rW, rH);
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

  const apply = () => {
    const docu = document;
    const img = docu.getElementById('Hello') as HTMLCanvasElement;
    if (!img) return;
    const data = img.toDataURL('image/png', 'image/octet-stream');
    setHead(data);
    setMV(false);
  };

  const upload = (e:any) => {
    fr.onload = function () {
        const it = document.getElementById('see') as HTMLImageElement;
        if(it === null) return;
        it.src = fr.result as string;
        backImg = fr.result;
        it.onload = () => {
          rW = it.width;
          rH = it.height;
          console.log(rW, rH);
        }
    }
    fr.readAsDataURL(e.target.files[0]);
    console.log();
  }

  return (
    <div>
      <button type="button" onClick={download}>
        download
      </button>
      <button type="button" onClick={apply}>
        apply
      </button>
      <input type="file" onChange={upload} accept=".jpg, .jpeg, .png"/>
      <br />
      <img id= "see"
        style={{
          display: backShow ? 'block' : 'none',
          opacity: '1',
          position: 'absolute',
          maxWidth: '90vw',
          minWidth: "300px",
          maxHeight: '90vh',
          top: '20',
          left: '20',
        }}
        alt="이미지를 업로드하세요!"
      />
      <canvas
        id="Hello"
        style={{ border: '1px solid black', position: 'absolute', left: '20', top: '20', maxWidth:'90vw', minWidth:"300px", maxHeight:'90vh',}}
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
