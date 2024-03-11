import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wave from './components/Wave';
import Synopsis from './components/Synopsis'


function App() {
  return (
    <>
      <Router>
        {/* Include the Wave component above the Navbar container */}
        <Wave />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/synopsis' element={<Synopsis />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
