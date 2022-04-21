import logo from './logo.svg';
import './App.css';
import Box1 from './components/Boxes/Box1';
import { createContext, useState } from 'react';
export const Mycontext = createContext(1);
function App() {
  
  const [count, setCount] =useState(1)
  return (
    <Mycontext.Provider value={[count,setCount]}>
    <div className="App">
      <Box1></Box1>
      <h1>Value : {count}</h1>
    </div>
    </Mycontext.Provider>
  );
}

export default App;
