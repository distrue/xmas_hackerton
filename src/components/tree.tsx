import React from 'react';
import styled from 'styled-components';

export default () => {
  console.log('tree');
  return (
    <Tree>
      <div className="container">
        <img src="https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-simple-winter-night-snowy-forest-background-material-nightsnowy-backgroundforesthappy-winter-image_84245.jpg"/>
        <div className="tree">
          <div className="shadow ts-3d" />
          <div className="trunk ts-3d">
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="leaves-bottom ts-3d">
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="leaves-middle ts-3d">
            <div className="ts-3d" />
            <div className="ts-3d" />
            <div className="ts-3d" />
            <div className="ts-3d" />
          </div>
          <div className="leaves-top ts-3d">
            <div className="ts-3d" />
            <div className="ts-3d" />
            <div className="ts-3d" />
            <div className="ts-3d" />
          </div>
          <div className="star star-1 ts-3d" />
          <div className="star star-2 ts-3d" />
          <div className="star star-3 ts-3d" />
          <div className="star star-4 ts-3d" />
          <div className="star star-5 ts-3d" />
          <div className="shine ts-3d" />
        </div>
      </div>
    </Tree>
  );
};

const Tree = styled.div`
  :root {
    --leaves-top-bg-1: #2fb82f;
    --leaves-top-bg-2: #5fe85f;
    --star-bg: #ffdd00;
    --shine-bg: #ffeb69;
    --snow-bg: #f2f2f2;
    --tree-width: 200px;
    --tree-height: 400px;
    --tree-rotate: -15deg;
    --leaves-translate: 15px;
    --leaves-bottom-width: 100px;
    --leaves-bottom-height: 320px;
    --leaves-bottom-angle: 18.2deg;
    --leaves-middle-width: 80px;
    --leaves-middle-height: 220px;
    --leaves-middle-angle: 21.4deg;
    --leaves-top-width: 60px;
    --leaves-top-height: 140px;
    --leaves-top-angle: 25.5deg;
    --star-size: 20px;
  }

  .ts-3d {
    transform-style: preserve-3d;
  }

  .container {
    position: relative;
    background-color: #c2c2c2;
    width: 100%;
    height: 500px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      position: absolute;
      bottom: -10px;
      min-width: 100%;
      min-height: 100%;
      opacity: 0.7;
    }
  }

  .tree {
    width: 200px;
    height: 400px;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(-15deg);
  }

  .trunk,
  .leaves-bottom,
  .leaves-middle,
  .leaves-top {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    animation: 10s tree-rotate linear infinite;
  }

  .trunk div {
    width: 0;
    border-top: none;
    border-left: solid 50px transparent;
    border-right: solid 50px transparent;
    position: absolute;
    top: 100px;
    left: calc(50% - 50px);
    transform-origin: bottom;
  }

  .leaves-bottom div {
    border-top: none;
    border-left: solid 100px transparent;
    border-right: solid 100px transparent;
    position: absolute;
    top: 20px;
    left: calc(50% - 100px);
    transform-origin: bottom;
  }

  .trunk div:nth-child(1) {
    border-bottom: solid 300px #5e2100;
    transform: rotateX(18.2deg) translateY(15px) translateZ(50px);
  }

  .trunk div:nth-child(2) {
    border-bottom: solid 300px #5e2100;
    transform: rotateY(90deg) rotateX(calc(18.2deg * -1)) translateY(15px) translateZ(calc(50px * -1));
  }

  .trunk div:nth-child(3) {
    border-bottom: solid 300px #5e2100;
    transform: rotateX(calc(18.2deg * -1)) translateY(15px) translateZ(calc(50px * -1));
  }

  .trunk div:nth-child(4) {
    border-bottom: solid 300px #5e2100;
    transform: rotateY(-90deg) rotateX(calc(18.2deg * -1)) translateY(15px) translateZ(calc(50px * -1));
  }

  .leaves-bottom div:nth-child(1) {
    border-bottom: solid 320px #0f980f;
    transform: rotateX(18.2deg) translateY(15px) translateZ(100px);
  }

  .leaves-bottom div:nth-child(2) {
    border-bottom: solid 320px #3fc83f;
    transform: rotateY(90deg) rotateX(calc(18.2deg * -1)) translateY(15px) translateZ(calc(100px * -1));
  }

  .leaves-bottom div:nth-child(3) {
    border-bottom: solid 320px #0f980f;
    transform: rotateX(calc(18.2deg * -1)) translateY(15px) translateZ(calc(100px * -1));
  }

  .leaves-bottom div:nth-child(4) {
    border-bottom: solid 320px #3fc83f;
    transform: rotateY(-90deg) rotateX(calc(18.2deg * -1)) translateY(15px) translateZ(calc(100px * -1));
  }

  .leaves-middle div {
    border-top: none;
    border-left: solid 80px transparent;
    border-right: solid 80px transparent;
    position: absolute;
    top: 20px;
    left: calc(50% - 80px);
    transform-origin: bottom;
  }

  .leaves-middle div:nth-child(1) {
    border-bottom: solid 220px #1fa81f;
    transform: rotateX(21.4deg) translateY(15px) translateZ(80px);
  }

  .leaves-middle div:nth-child(2) {
    border-bottom: solid 220px #4fd84f;
    transform: rotateY(90deg) rotateX(calc(21.4deg * -1)) translateY(15px) translateZ(calc(80px * -1));
  }

  .leaves-middle div:nth-child(3) {
    border-bottom: solid 220px #1fa81f;
    transform: rotateX(calc(21.4deg * -1)) translateY(15px) translateZ(calc(80px * -1));
  }

  .leaves-middle div:nth-child(4) {
    border-bottom: solid 220px #4fd84f;
    transform: rotateY(-90deg) rotateX(calc(21.4deg * -1)) translateY(15px) translateZ(calc(80px * -1));
  }

  .leaves-top div {
    border-top: none;
    border-left: solid 60px transparent;
    border-right: solid 60px transparent;
    position: absolute;
    top: 20px;
    left: calc(50% - 60px);
    transform-origin: bottom;
  }

  .leaves-top div:nth-child(1) {
    border-bottom: solid 140px #2fb82f;
    transform: rotateX(25.5deg) translateY(15px) translateZ(60px);
  }

  .leaves-top div:nth-child(2) {
    border-bottom: solid 140px #5fe85f;
    transform: rotateY(90deg) rotateX(calc(25.5deg * -1)) translateY(15px) translateZ(calc(60px * -1));
  }

  .leaves-top div:nth-child(3) {
    border-bottom: solid 140px #2fb82f;
    transform: rotateX(calc(25.5deg * -1)) translateY(15px) translateZ(calc(60px * -1));
  }

  .leaves-top div:nth-child(4) {
    border-bottom: solid 140px #5fe85f;
    transform: rotateY(-90deg) rotateX(calc(25.5deg * -1)) translateY(15px) translateZ(calc(60px * -1));
  }

  @keyframes tree-rotate {
    0% {
      transform: rotateX(0deg) rotateY(0deg);
    }
    99.99999% {
      transform: rotateX(0deg) rotateY(359deg);
    }
  }

  .shadow {
    background-color: rgba(0, 0, 0, 0.8);
    width: calc(100px * 2);
    height: calc(100px * 2);
    filter: blur(calc(100px / 2));
    position: absolute;
    bottom: calc(100px * -1);
    left: calc(50% - 100px);
    transform: rotateX(90deg) translateX(-50%);
    animation: 10s shadow-rotate linear infinite;
  }

  @keyframes shadow-rotate {
    0% {
      transform: rotateX(-90deg) rotateZ(0deg);
    }
    99.99999% {
      transform: rotateX(-90deg) rotateZ(359deg);
    }
  }

  .star-1 {
    transform: translateZ(-2px);
    animation: 10s star-1-rotate linear infinite;
  }

  @keyframes star-1-rotate {
    0% {
      transform: rotateX(0deg) rotateY(0deg) translateZ(-2px);
    }
    99.99999% {
      transform: rotateX(0deg) rotateY(359deg) translateZ(-2px);
    }
  }

  .star-2 {
    transform: translateZ(-1px);
    animation: 10s star-2-rotate linear infinite;
  }

  @keyframes star-2-rotate {
    0% {
      transform: rotateX(0deg) rotateY(0deg) translateZ(-1px);
    }
    99.99999% {
      transform: rotateX(0deg) rotateY(359deg) translateZ(-1px);
    }
  }

  .star-3 {
    transform: translateZ(0px);
    animation: 10s star-3-rotate linear infinite;
  }

  @keyframes star-3-rotate {
    0% {
      transform: rotateX(0deg) rotateY(0deg) translateZ(0px);
    }
    99.99999% {
      transform: rotateX(0deg) rotateY(359deg) translateZ(0px);
    }
  }

  .star-4 {
    transform: translateZ(1px);
    animation: 10s star-4-rotate linear infinite;
  }

  @keyframes star-4-rotate {
    0% {
      transform: rotateX(0deg) rotateY(0deg) translateZ(1px);
    }
    99.99999% {
      transform: rotateX(0deg) rotateY(359deg) translateZ(1px);
    }
  }

  .star-5 {
    transform: translateZ(2px);
    animation: 10s star-5-rotate linear infinite;
  }

  @keyframes star-5-rotate {
    0% {
      transform: rotateX(0deg) rotateY(0deg) translateZ(2px);
    }
    99.99999% {
      transform: rotateX(0deg) rotateY(359deg) translateZ(2px);
    }
  }

  .star,
  .star:before,
  .star:after {
    content: '';
    height: 0;
    width: 0;
    border-top: solid 30px #ffdd00;
    border-left: solid 45px transparent;
    border-right: solid 45px transparent;
    position: absolute;
    top: 0;
    left: calc(50% - 45px);
  }

  .star:before {
    transform: rotate(72deg);
    top: -33px;
    left: -46px;
  }

  .star:after {
    transform: rotate(287deg);
    top: -33px;
    left: -44px;
  }

  .shine {
    background: #ffeb69;
    height: 90px;
    width: 90px;
    position: absolute;
    top: -45px;
    left: calc(50% - 45px);
    border-radius: 50%;
    transform: translateZ(40px);
    filter: blur(20px);
    opacity: 0.6;
    animation: 5s shine linear infinite;
  }

  @keyframes shine {
    0% {
      transform: scale(1) translateZ(40px);
    }
    50% {
      transform: scale(1.5) translateZ(40px);
    }
    100% {
      transform: scale(1) translateZ(40px);
    }
  }
`;
