import React from 'react'
import styled from 'styled-components';

export default () => {
    const LeftArm = ({animation,armPath}:any) =>{
        return(
            <svg className="arm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">
                { animation === 'typing' && <path className="arm-typing-left" d={armPath} /> }
                { animation === 'stressed' && <path className="arm-typing-left" d={armPath} /> }
                <path d="M175.27,192 L190,164.44" />
                { animation === 'thinking' && <path d="M175.93,152.78s-10.18,82-36.43,103.72" /> }
                { animation === 'passive' && <path d="M175.93,152.78s-10.18,82-36.43,103.72" /> }
                { animation === 'sleeping' && <path d="M175.93,152.78s-10.18,82-36.43,103.72" /> }
            </svg>
        );
    }

    const RightArm =({animation,armPath}:any)=>{
        return(
            <svg className="arm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">
            { animation === 'stressed' && <path className="arm-typing-right" d={armPath} /> }
            { animation === 'waiting' && <path d="M207.26,171.26s45.19,85-75.76,72.24" /> }
            <path className="arm-thinking-right" d="M110.48,162L125,195" />
            { animation === 'passive' && <path d="M207.93,172c.57-.48,11.3,86.45-23.43,112.52" /> }
            { animation === 'sleeping' && <path d="M207.93,172c.57-.48,11.3,86.45-23.43,112.52" /> }
          </svg>
        );
    }

    const Body=()=>{
        return(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">
                <g id="body">
                    <circle className="character__body -part-1" cx="150.71" cy="152.62" r="22.88" onClick={() => {window.location.href="/canvas"}}/>
                    <circle className="character__body -part-2" cx="150.71" cy="200.06" r="35"/>
                </g>
            </svg>
        );
    }

    return(
        <Snowman>
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
width: 90vw;
height: 90vh;
top: 0;
svg.dancing{
    position: relative;
    left: -30%;
    .character {
    position: relative;
    
    &__body {
        fill: #FFFFFF;
        transform-origin: center;
        transition: transform 0.3s ease; z-index: 3;
    }
    
    &.-passive {
        .-part-1 {
        transform: translate(30px, -10px);
        }
        .-part-2 {
        transform: translate(23px, 3px);
        }
        .-part-3 {
        transform: translate(10px, 3px);
        }
    }
    
    &.-waiting {
        .-part-1 {
        transform: translate(12px, 0px);
        }
        .-part-2 {
        transform: translate(10px, 1px);
        }
        .-part-3 {
        transform: translate(5px, 2px);
        }
    }
    
    &.-thinking {
        .-part-1 {
        transform: translate(-9px, 5px);
        }
        .-part-2 {
        transform: translate(-5px, 2.5px);
        }
    }
    
    &.-typing {
        .-part-1 {
        transform: translate(-18px, 10px);
        }
        .-part-2 {
        transform: translate(-10px, 5px);
        }
        .-part-3 {
        transform: translate(-4px, 2px);
        }
    }
    
    &.-stressed {
        .-part-1 {
        transform: translate(-17px, 20px);
        }
        .-part-2 {
        transform: translate(-8px, 10px);
        }
        .-part-3 {
        transform: translate(-2px, 4px);
        }
    }
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
    }

    .arm-typing-right {
    transform-origin: 200px 168px;
    transform: rotate(140deg);
    // transform: translateY(42%) translateX(155%) rotate(140deg);
    }

    .arm-typing-left {
    transform-origin: 190px 160px;
    transform: rotate(143deg);
    // transform: translateY(45%) translateX(145%) rotate(143deg);
    }

    .arm-thinking-right {
    transform-origin: 200px 168px;
    animation: scratch-chin 10s ease 0s infinite normal ;
    }
}

#body:hover {
    .character {
        &__body.-part-1{
            animation: shake 2.82s cubic-bezier(.36,.07,.19,.97) both;
            
            backface-visibility: hidden;

            perspective: 1000px;
        }
    }
}

@keyframes shake {
  10%, 90% {
    transform: rotate(-20deg);
    transform-origin: center;
  }
  
  20%, 80% {
    transform: rotate(20deg);
    transform-origin: center;
  }

  30%, 50%, 70% {
    transform: rotate(-20deg);
    transform-origin: center;
  }

  40%, 60% {
    transform: translate3d(20deg);
    transform-origin: center;
  }
}
`