import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Login from "./components/Login/Login"
import Sigin from './components/Login/Signup';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<Home/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path="/sigin" element= {<Sigin/>}/>



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
