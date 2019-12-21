import React from 'react'
import styled from 'styled-components';


export default ({head, setMV}:any) => {

    const [armPath,setArmPath]=React.useState(0);
    const changeArm=(e:any)=>{
        e.preventDefault();
        console.log("oncontextmenu");
        setArmPath((armPath+1)%3);
        console.log(armPath);
    }
    const LeftArm = () =>{
        return(
            <svg className="arm" xmlns="http://www.w3.org/2000/svg" viewBox="100 100 100 200">
                { armPath=== 0 && <path d="M175.27,192 L190,164.44" />}
                { armPath=== 1 && <path className="swing right" d="M175.27,192 L170,164.44" />}
                { armPath=== 2 && <path d="M175.27,192 L150,164.44" />}
            </svg>
        );
    }
    const RightArm =()=>{
        return(
            <svg className="arm" xmlns="http://www.w3.org/2000/svg" viewBox="100 100 100 200">
                { armPath=== 0 && <path d="M125,192 L110.48,162" />}
                { armPath=== 1 && <path className="swing left" d="M125,192 L110.48,162" />}
                { armPath=== 2 && <path d="M125,192 L110.48,162" />}
          </svg>
        );
    }

    const Body=()=>{
        return(
            <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="100 100 100 200"onContextMenu={changeArm}>
                <g>
                    {head?"":
                    <circle className="character__body -part-1" cx="150.71" cy="152.62" r="22.88" onClick={() => {setMV(true)}}/>}
                    <circle className="character__body -part-1" style={{fill:"#FFFFFF"}} cx="150.71" cy="212.62" r="38.88"/>
                </g>
                {head?
                <foreignObject x={107.83} y={109.84} width={160} height={160} id="body">
                    <img xmlns="http://www.w3.org/1999/xhtml" style={{minWidth: "80px", minHeight:"80px"}} className="face" src={head} />
                </foreignObject>
                :""}
            </svg>
            </>
        );
    }

    return(
        <Snowman style={{position: "absolute", top:"35%", left:"10%"}}>
            <svg className={`dancing`}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">
                <Body/>
                <LeftArm/>
                <RightArm/>
            </svg>
        </Snowman>
    ); 
}


const Snowman=styled.div`
position: absolute;
width: 300px;
height: 300px;
top: 0;
transform: translate(-50%, 0%);
padding-left: 10px;
overflow: hidden;
svg.dancing{

    position: relative;
    width:300px;
    .character {
    position: relative;
    
    &__body {
        fill: #FFFFFF;
        transition: transform 0.3s ease; z-index: 3;
    }}
    foreignObject{
        transform-origin: 150px 200px;
        width: 100px; height: 100px;
        .face{
            width:45.76px;
            height:45.76px;
        }
    }
    foreignObject:hover{
        animation: shake 2.82s cubic-bezier(.36,.07,.19,.97) both;   
        backface-visibility: hidden;
    }

    .arm {
    position: absolute;
    top: 0;
    left: 0;

        & path {
            fill: none;
            stroke: #964B00;
            stroke-width: 6;
            stroke-linecap: round;
            stroke-miterlimit: 10;
        }
        .swing{
            animation:swing 3s ease-in-out infinite;
        }
        .swing.right{
            transform-origin:175.27px 192px;
        }
        .swing.left{
            transform-origin:125px 192px;
        }
        @keyframes swing{
          0%, 25%, 50%, 75%, 100%{
            transform:rotate(-45deg);
          }
          12.5%, 37.5%, 62.5%, 87.5%{
            transform:rotate(45deg);
          }
        }
    }

}


@keyframes shake {
  12.5%, 87.5% {
    transform: rotate(-20deg);
  }
  
  25%, 75% {
    transform: rotate(20deg);
  }

  37.5%, 62.5% {
    transform: rotate(-20deg);
  }

  50% {
    transform: rotate(20deg);
  }
}
`