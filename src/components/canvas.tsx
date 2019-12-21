import React from 'react';

export default () => {
    let pos={
        drawing:false,
        X:-1,
        Y:-1
    };
    let ctx:any;
    let offset={
        Left:0,
        Top:0
    }
    let start={
        X:0,
        Y:0
    }
    let canvas:any;

    React.useEffect(()=>{
        canvas=document.getElementById("Hello") as HTMLCanvasElement;
        if(canvas) {
            canvas.width=500; canvas.height=500;
            ctx = canvas.getContext('2d');
            console.log(ctx, "1");
            offset.Left=canvas.offsetLeft;
            offset.Top=canvas.offsetTop;
        }
        // drawScene(ctx);
        
    },[]);

    function initDraw(event:any){
        console.log(ctx, "1");
        ctx.beginPath();
        pos.drawing = !pos.drawing;
        let coors = getPosition(event);
        pos.X = coors.X;
        pos.Y = coors.Y;
        start.X = pos.X;
        start.Y = pos.Y;
        ctx.moveTo(pos.X, pos.Y);
    }

    function draw(event:any){
        let coors = getPosition(event);
        ctx.lineTo(coors.X, coors.Y);
        pos.X=coors.X;
        pos.Y=coors.Y;
        ctx.stroke();
    }

    function endDraw(event:any) {
        ctx.lineTo(start.X, start.Y);
        ctx.closePath();
        console.log("image!!");
        let background = new Image();
        background.src = "https://www.instagram.com/static/images/ico/apple-touch-icon-180x180-precomposed.png/c06fdb2357bd.png";
        background.crossOrigin="https://www.instagram.com";
        background.onload = function() {
            console.log("!");
            ctx.clip()
            ctx.drawImage(background, 0, 0, 100, 100)
        }

    }
    function getPosition(event:any){
        let x=event.pageX - canvas.offsetLeft;
        let y = event.pageY - canvas.offsetTop;
        return{X:x, Y:y};
    }

    const listener=(event:any)=> {
        console.log(event.type);
        switch(String(event.type)){
            case "mousedown":
                initDraw(event);
                break;
            case "mousemove":
                if(pos.drawing) {
                    draw(event);
                }
                break;
            case "mouseup":
                endDraw(event);
                break;   
        }
    }

    async function drawScene(ctx:any){
        // ctx.fillStyle = "gray";
        // ctx.fillRect(0,0,512,300);
        let background = new Image();
        background.src = "https://www.instagram.com/static/images/ico/apple-touch-icon-180x180-precomposed.png/c06fdb2357bd.png";
        background.crossOrigin="https://www.instagram.com";

        ctx.strokeStyle="black";
        ctx.lineWidth = 2;
           
        // Make sure the image is loaded first otherwise nothing will draw.
        background.onload = function() {
            // ctx.drawImage(background,30,40,100,50);   
            
            // 2차 베지어 곡선. 끝점과 제어점 하나.
            /*ctx.beginPath();
            ctx.moveTo(200,50);
            ctx.quadraticCurveTo(70,25,100,50);
            ctx.stroke();
            ctx.closePath();*/

            ctx.moveTo(0,0);
            ctx.beginPath();
            ctx.moveTo(75, 50);
            ctx.lineTo(300, 150);
            ctx.lineTo(300, 25);
            ctx.lineTo(75, 50);
            ctx.fillStyle="rgba(0,0,0,0)";
            ctx.fill();
            ctx.clip()
            ctx.drawImage(background, 0, 0, 100, 100);    
            ctx.stroke();
            ctx.closePath();
           
            // text
            // ctx.fillStyle = "white";
            // ctx.font = "15px _sans";
            // ctx.fillText("제어점 하나인 2차 베지어 곡선",100,25);
        }
      }
      
    const download = () => {
        let docu = document;
        let img = docu.getElementById('Hello') as HTMLCanvasElement;
        let data = img?.toDataURL("image/png", "image/octet-stream");
        let link = document.getElementById('link');
        link?.setAttribute('download', 'cropped.png');
        link?.setAttribute('href', data);
        link?.click();
    }
      
    return(
    <div>
        <a id="link"></a>
        <button onClick={download}>download</button>
    <canvas id="Hello" style={{border: "1px solid black", position: "absolute", left: "20", top:"20",
     width: "500px", height:"500px"}} onMouseDown={listener} onMouseMove={listener} onMouseUp={listener}>
    </canvas>
    </div>);
}

