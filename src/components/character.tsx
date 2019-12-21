import React from 'react';
import styled from 'styled-components';

export default () => {
  const LeftArm = ({ animation, armPath }: any) => (
    <svg className="arm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">
      {animation === 'typing' && <path className="arm-typing-left" d={armPath} />}
      {animation === 'stressed' && <path className="arm-typing-left" d={armPath} />}
      <path d="M175.27,152.06s55.19,87.24-65.77,74.44" />
      {animation === 'thinking' && <path d="M175.93,152.78s-10.18,82-36.43,103.72" />}
      {animation === 'passive' && <path d="M175.93,152.78s-10.18,82-36.43,103.72" />}
      {animation === 'sleeping' && <path d="M175.93,152.78s-10.18,82-36.43,103.72" />}
    </svg>
  );

  const RightArm = ({ animation, armPath }: any) => (
    <svg className="arm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">
      {animation === 'stressed' && <path className="arm-typing-right" d={armPath} />}
      {animation === 'waiting' && <path d="M207.26,171.26s45.19,85-75.76,72.24" />}
      <path className="arm-thinking-right" d="M207.48,172.34s-76,114.16-93-9.84" />
      {animation === 'passive' && <path d="M207.93,172c.57-.48,11.3,86.45-23.43,112.52" />}
      {animation === 'sleeping' && <path d="M207.93,172c.57-.48,11.3,86.45-23.43,112.52" />}
    </svg>
  );

  const Body = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">
      <g id="body">
        <circle className="character__body -part-1" cx="140.71" cy="112.62" r="42.88" />
        <circle className="character__body -part-2" cx="140.71" cy="180.06" r="63" />
      </g>
      <circle className="character__eye -eye-l" cx="150" cy="90" r="5.12" />
      <circle className="character__eye -eye-l" cx="110" cy="90" r="5.12" />
    </svg>
  );

  return (
    <Character>
      <LeftArm animation={null} armPath={null} />
      <RightArm animation={null} armPath={null} />
      <Body />
    </Character>
  );
};

const Character = styled.div`
  background-color: transparent;
  z-index: 2;
  position: absolute;
  width: 200px;
  height: 400px;
  top: 300px;
  left: 200px;
  .character {
    &__eye {
      transition: transform 0.3s ease;
      transform: translate(10px, 0px);
    }

    &__body {
      fill: #ffffff;
      transition: transform 0.3s ease;
    }

    &__eye.-eye-l-extra {
      transform: translate(34px, -10px);
    }

    &.-sleeping {
      .-eye-l-extra {
        visibility: hidden;
        transform: translate(18px, 12px);
      }
      .-eye-l {
        transform: translate(10px, 15px);
      }
      .-eye-r {
        transform: translate(18px, 12px);
      }
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
      .-eye-l {
        transform: translate(40px, -10px);
      }
      .-eye-r {
        transform: translate(34px, -10px);
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
      .-eye-l {
        transform: translate(52px, -8px);
      }
      .-eye-r {
        visibility: hidden;
        transform: translate(42px, -7px);
      }
      .-eye-l-extra {
        visibility: visible;
        transform: translate(42px, -7px);
      }
    }

    &.-thinking {
      .-part-1 {
        transform: translate(-9px, 5px);
      }
      .-part-2 {
        transform: translate(-5px, 2.5px);
      }
      .-eye-l {
        transform: translate(1px, 10px);
      }
      .-eye-l-extra {
        transform: translate(-1.5px, 10px);
      }
      .-eye-r {
        transform: translate(-1.5px, 10px);
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
      .-eye-l {
        transform: translate(2px, 21px);
      }
      .-eye-l-extra {
        visibility: hidden;
        transform: translate(-3px, 20px);
      }
      .-eye-r {
        transform: translate(-3px, 20px);
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
      .-eye-l {
        transform: translate(2px, 41px);
      }
      .-eye-l-extra {
        visibility: hidden;
        transform: translate(-3px, 40px);
      }
      .-eye-r {
        transform: translate(-3px, 40px);
      }
    }
  }

  .arm {
    position: absolute;
    top: 0;
    left: 0;

    & path {
      fill: none;
      stroke: #964b00;
      stroke-width: 12;
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
    animation: scratch-chin 10s ease 0s infinite normal;
  }
`;
