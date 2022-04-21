import logo from './logo.svg';
import './App.css';
import { useSpring, animated, config } from 'react-spring'
import { useState } from 'react';

function App() {
  const [flip, set] = useState(false)
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 9 },
    number: 100,
    delay: 2000,
    config: config.molasses,
    onRest: () => set(!flip),
  })
  const isRed = true;

  return (
    <div>
      <h1><animated.div>{number.to(n => n.toFixed(2))}</animated.div></h1>
      <h1 className={isRed? 'red':'blue'}>Helllo</h1>
    </div>
  );
}

export default App
