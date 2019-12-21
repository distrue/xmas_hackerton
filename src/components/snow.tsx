import React from 'react';
import styled from 'styled-components';

export default () => {
  console.log('tree');
  return (
    <Tree>
      <div className="container">
        <div className="snow-container">
          <div className="snow snow-1 snow-y-1" />
          <div className="snow snow-2 snow-y-2" />
          <div className="snow snow-3 snow-y-3" />
          <div className="snow snow-4 snow-y-3" />
          <div className="snow snow-5 snow-y-2" />
          <div className="snow snow-6 snow-y-1" />
          <div className="snow snow-7 snow-y-1" />
          <div className="snow snow-8 snow-y-2" />
          <div className="snow snow-9 snow-y-3" />
          <div className="snow snow-10 snow-y-3" />
        </div>
      </div>
    </Tree>
  );
};

const Tree = styled.div`
  .snow-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }

  .snow {
    position: absolute;
  }

  .snow:before {
    content: '';
    background-color: #f2f2f2;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
  }

  .snow-y-1:before {
    animation: 8s snow-y-1 ease-in infinite, 8s snow-y-0 linear infinite;
  }

  .snow-y-2:before {
    animation: 6s snow-y-2 ease-in infinite, 6s snow-y-0 linear infinite;
  }

  .snow-y-3:before {
    animation: 4s snow-y-2 ease-in infinite, 4s snow-y-0 linear infinite;
  }

  .snow-1 {
    width: 20px;
    height: 20px;
    top: calc(50% - 250px);
    left: calc(50% - 10px);
    animation: 1s snow-x linear infinite;
  }

  .snow-2 {
    width: 15px;
    height: 15px;
    top: calc(50% - 300px);
    left: calc(50% - 30px);
    animation: 0.8s snow-x linear infinite 0.1s;
  }

  .snow-3 {
    width: 10px;
    height: 10px;
    top: calc(50% - 400px);
    left: calc(50% + 60px);
    animation: 0.6s snow-x linear infinite 0.8s;
  }

  .snow-4 {
    width: 25px;
    height: 25px;
    top: calc(50% - 200px);
    left: calc(50% + 50px);
    animation: 0.5s snow-x linear infinite 0.5s;
  }

  .snow-5 {
    width: 18px;
    height: 18px;
    top: calc(50% - 200px);
    left: calc(50% - 50px);
    animation: 0.5s snow-x linear infinite 0.5s;
  }

  .snow-6 {
    width: 12px;
    height: 12px;
    top: calc(50% - 150px);
    left: calc(50% - 120px);
    animation: 0.8s snow-x linear infinite 0.5s;
  }

  .snow-7 {
    width: 20px;
    height: 20px;
    top: calc(50% - 150px);
    left: calc(50% + 75px);
    animation: 1s snow-x linear infinite 0.6s;
  }

  .snow-8 {
    width: 22px;
    height: 22px;
    top: calc(50% - 10px);
    left: calc(50% - 30px);
    animation: 1s snow-x linear infinite 0.8s;
  }

  .snow-9 {
    width: 8px;
    height: 8px;
    top: calc(50% - 250px);
    left: calc(50% - 30px);
    animation: 1s snow-x linear infinite 0.8s;
  }

  .snow-10 {
    width: 13px;
    height: 13px;
    top: calc(50% - 250px);
    left: calc(50% - 100px);
    animation: 1s snow-x linear infinite 0.8s;
  }

  @keyframes snow-x {
    0% {
      transform: translateX(0px);
    }
    25% {
      transform: translateX(5px);
    }
    50% {
      transform: translateX(0px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  @keyframes snow-y-0 {
    0% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes snow-y-1 {
    0% {
      transform: translateY(0px);
    }
    99.99999% {
      transform: translateY(300px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes snow-y-2 {
    0% {
      transform: translateY(0px);
    }
    99.99999% {
      transform: translateY(400px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes snow-y-3 {
    0% {
      transform: translateY(0px);
    }
    99.99999% {
      transform: translateY(500px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
