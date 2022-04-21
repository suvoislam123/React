import { Rating, Typography } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import {Routes,Route} from 'react-router-dom'
import Home from "./components/Home";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
function App() {
  const [value,setValue] = useState(3) 
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/about" element={<Home></Home>}></Route>
        <Route path="/products" element={<Home></Home>}></Route>
        <Route path="/contract" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
