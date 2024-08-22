import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Login from "./components/home/Login/Login"
import Sigin from './components/home/Login/Signup';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path="/Sigin" element= {<Sigin/>}/>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
