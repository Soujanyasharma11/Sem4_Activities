import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';


function App(){
  return(
    <>
    {/* <h1 classname="bg-primary">React</h1>
    <p>This is a paragraph</p> */}
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/about" element={<About/>}/>
      <Route path ="/contact" element={<Contact/>}/>
      <Route path ="/login" element={<Login/>}/>
      <Route path ="/signup" element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;