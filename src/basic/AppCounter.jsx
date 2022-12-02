import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Avatar from './components/Avatar';
import Counter from './components/Counter';
import { useState } from 'react';

function AppCounter() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount((num) => num + 1)
  };

  return(
    <div className='container'>
    <div className='banner'>Total Count : {count} {count > 10 ? '🔥' : '❄️' } </div>
        <Counter total={count} onClick={onClick} />
        <Counter total={count} onClick={onClick} />
    </div>
  )
}

export default AppCounter;
