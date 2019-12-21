import React from 'react';
import styled from 'styled-components';

export default ({ head, setMV }: any) => {
  const [armPath, setArmPath] = React.useState(0);
  const changeArm = (e: any) => {
    e.preventDefault();
    console.log('oncontextmenu');
    setArmPath((armPath + 1) % 3);
    console.log(armPath);
  };
  const LeftArm = () => {
    return (
      <svg className="arm" xmlns="http://www.w3.org/2000/svg" viewBox="100 100 100 200">
        {armPath === 0 && <path d="M175,192 C 175 180, 178 160,185 150" />}
        {armPath === 1 && <path className="swing left" d="M175,192 C 175 180, 178 160,185 150" />}
        {armPath === 2 && <path className="swipe left" d="M175,192 C 175 180, 178 160,185 150" />}
      </svg>
    );
  };

  const Body = () => {
    return (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="100 120 100 160" onContextMenu={changeArm}>
          <g>
            {head ? (
              ''
            ) : (
              <circle
                className="character__body -part-1"
                style={{ fill: '#581d1d' }}
                cx="150.71"
                cy="162.62"
                r="22.88"
                onClick={() => {
                  setMV(true);
                }}
              />
            )}
            <circle
              className="character__body -part-1"
              style={{ fill: '#FFFFFF' }}
              cx="150.71"
              cy="202.62"
              r="24.88"
              stroke="#707070"
              stroke-width="1"
            />
            <circle
              className="character__body -part-1"
              style={{ fill: '#FFFFFF' }}
              cx="150.71"
              cy="232.62"
              r="30.88"
              stroke="#707070"
              stroke-width="1"
            />
          </g>
          {head ? (
            <foreignObject x={107.83} y={109.84} width={160} height={160} id="body">
              <img
                xmlns="http://www.w3.org/1999/xhtml"
                style={{ minWidth: '80px', minHeight: '80px' }}
                className="face"
                src={head}
              />
            </foreignObject>
          ) : (
            ''
          )}
        </svg>
      </>
    );
  };

  return (
    <Snowman style={{ position: 'absolute', top: '35%', left: '10%' }}>
      <svg className={`dancing`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">
        <Body />
        <LeftArm />
      </svg>
    </Snowman>
  );
};

const Snowman = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  top: 0;
  transform: translate(-50%, 0%);
  padding-left: 10px;
  overflow: hidden;
  svg.dancing {
    position: relative;
    width: 300px;
    .character {
      position: relative;

      &__body {
        fill: #ffffff;
        transition: transform 0.3s ease;
        z-index: 3;
      }
    }
    foreignObject {
      transform-origin: 150px 200px;
      width: 100px;
      height: 100px;
      .face {
        width: 45.76px;
        height: 45.76px;
      }
    }
    foreignObject:hover {
      animation: shake 2.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      backface-visibility: hidden;
    }

    .arm {
      position: absolute;
      top: 0;
      left: 0;

      & path {
        fill: none;
        stroke: #964b00;
        stroke-width: 6;
        stroke-linecap: round;
        stroke-miterlimit: 10;
      }
      .swing {
        animation: swing 3s ease-in-out infinite;
      }
      .left {
        transform-origin: 175.27px 192px;
      }
      .swipe {
        animation: swipe 0.5s ease-in-out infinite;
      }
      @keyframes swing {
        0%,
        25%,
        50%,
        75%,
        100% {
          transform: rotate(-45deg);
        }
        12.5%,
        37.5%,
        62.5%,
        87.5% {
          transform: rotate(45deg);
        }
      }
    }
  }
  @keyframes swipe {
    10% {
      transform: rotate(36deg);
    }
    20% {
      transform: rotate(72deg);
    }
    30% {
      transform: rotate(108deg);
    }
    40% {
      transform: rotate(144deg);
    }
    50% {
      transform: rotate(180deg);
    }
    60% {
      transform: rotate(216deg);
    }
    70% {
      transform: rotate(252deg);
    }
    80% {
      transform: rotate(288deg);
    }
    90% {
      transform: rotate(324deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes shake {
    12.5%,
    87.5% {
      transform: rotate(-20deg);
    }

    25%,
    75% {
      transform: rotate(20deg);
    }

    37.5%,
    62.5% {
      transform: rotate(-20deg);
    }

    50% {
      transform: rotate(20deg);
    }
  }
`;
