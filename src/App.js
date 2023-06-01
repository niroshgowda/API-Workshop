import React from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Details from './Details';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home/>}></Route>
   <Route path="/signup" element={<Signup/>}></Route>
   <Route path="/login" element={<Login/>}></Route>
   <Route path="/details" element={<Details/>}></Route>
  
   
   </Routes>
   </BrowserRouter>

    </div>
  );
}

export default App;
