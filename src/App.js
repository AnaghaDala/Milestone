import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Destination from "./Components/Destination";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './Components/NavBar';



function App(){
  return(
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/destination" element={<Destination/>}/>
      </Routes>
      </BrowserRouter>
    </>

  ); 
}
export default App;