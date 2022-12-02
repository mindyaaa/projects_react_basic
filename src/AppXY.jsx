import {React, useState} from 'react';
import './AppXY.css';

export default function AppXY() {
  const [mouse, setMouse] = useState({
    x : 0,
    y : 0
  });

  const mouseHandler = (e) =>{

    // setMouse({x:e.clientX, y:e.clientY});

    //수평으로만 이동 가능하게?
    setMouse((prev) => ({...prev, x:e.clientX}))


  }

  return (
    <div onPointerMove={mouseHandler} className='container'>
      <div style={{
        transform : `translate(${mouse.x}px, ${mouse.y}px)`
      }} className='pointer' />
    </div>
  );
}
