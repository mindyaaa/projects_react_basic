import {React, useState} from 'react';
import './AppXY.css';

export default function AppXY() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mouseHandler = (e) =>{
    // console.log('x', e.clientX);
    // console.log('y', e.clientY);
    setX(e.clientX);
    setY(e.clientY);

  }

  return (
    <div onPointerMove={mouseHandler} className='container'>
      <div style={{
        transform : `translate(${x}px, ${y}px)`
      }} className='pointer' />
    </div>
  );
}
