import React from 'react';
import styled from 'styled-components';

export default () => {
  const [crtPst, setCrtPst]: any = React.useState({
    x: 250,
    y: 350,
    now: 'none',
  });
  const [stop, setStop]: any = React.useState({
    x: 0,
    y: 0,
  });

  const listener = (event: any) => {
    console.log(event.type);
    switch (event.type) {
      case 'dragstart':
        console.log(event);
        setCrtPst({ ...crtPst, now: 'pc' });
        setStop({ x: crtPst.x, y: crtPst.y });
        break;
      case 'drag':
        console.log(event.pageX, event.pageY);
        if (event.pageX !== 0 && event.pageY !== 0) {
          if (crtPst.now === 'pc') setCrtPst({ ...crtPst, x: event.pageX - window.innerWidth / 2 + 150, y: event.pageY });
        }
        break;
      case 'dragend':
        console.log(crtPst.x, crtPst.y);
        setCrtPst({ ...crtPst, now: 'none' });
        break;
      case 'touchstart':
        setCrtPst({ ...crtPst, now: 'mobile' });
        break;
      case 'touchmove':
        console.log(event.touches[0].pageX, event.touches[0].pageY);
        if (crtPst.now === 'mobile')
          setCrtPst({ ...crtPst, x: event.touches[0].pageX - window.innerWidth / 2 + 150, y: event.touches[0].pageY });
        break;
      case 'touchend':
        setCrtPst({ ...crtPst, now: 'none' });
        break;
    }
  };

  return (
    <Penguin
      style={{
        position: 'absolute',
        top: crtPst.now !== 'pc' ? crtPst.y : stop.y,
        left: crtPst.now !== 'pc' ? crtPst.x : stop.x,
        transform: 'translate(-50%, -50%)',
      }}
      draggable={true}
      onDragStart={listener}
      onDrag={listener}
      onDragEnd={listener}
      onTouchMove={listener}
      onTouchEnd={listener}
      onTouchStart={listener}
    >
      <div className="penguin body">
        <div className="face" />
      </div>
    </Penguin>
  );
};

const Penguin = styled.div`
  .body {
    width: 90px;
    height: 100px;

    &,
    &:before,
    &:after {
      position: absolute;
    }
    &:before,
    &:after {
      content: '';
    }
  }
  .face,
  .features {
    &,
    &:before,
    &:after {
      position: absolute;
    }
    &:before,
    &:after {
      content: '';
    }
  }

  .penguin {
    width: 55px;
    height: 55px;

    background-color: #1f173a;
    border-radius: 50% / 75% 75% 35% 35%;

    box-shadow: 0 50px 0 -6px #fff, 0 55px 0 -5px #fff, 0 62px 0 -5px #fff, 0 50px 0 2px #1f173a, 0 55px 0 4px #1f173a,
      0 62px 0 5px #1f173a, -8px 55px 0 -3px #fff, -13px 51px 0 -2px #1f173a, 8px 55px 0 -3px #fff, 13px 51px 0 -2px #1f173a,
      -15px 85px 0 -14px #f9761c, 15px 85px 0 -14px #f9761c;

    &:after {
      top: 12px;
      left: 8px;
      width: 25px;
      height: 34px;

      background-color: #fff;
      border-radius: 50%;

      box-shadow: 15px 0 #fff, 7px 13px #fff, 16px 6px #fff, -2px 6px #fff;
    }

    .face {
      position: absolute;
      // Nose
      top: 34px;
      left: 17px;
      width: 0;
      height: 0;
      z-index: 6;

      // background-color: #f9761c;
      border-top: 9px solid #f9761c;
      border-left: 11px solid transparent;
      border-right: 11px solid transparent;
      border-radius: 50%;

      &:before {
        // Eyes
        top: -20px;
        left: -8px;
        z-index: 5;
        width: 6px;
        height: 8px;
        background-color: #000;

        border-radius: 50%;

        box-shadow: 10px 0 #000;
      }
    }
  }
`;
