import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Signup from './pages/Signup';

import Contact from './pages/Contact';

import Dashboard from './pages/Dashboard';
import WhatCanIAfford from './pages/WhatCanIAfford';
const App = () => {

  let fullName = localStorage.getItem("fullName") ;  // Get saved name
  if(fullName===null){
    fullName="Guest"
  }

  console.log(fullName)

  const profileInfo = { name: fullName  , logout:fullName};


  return (
    <div className='max-w-[1440px] mx-auto bg-white'>

      <Header profile = {profileInfo}/>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/property/:id' element={<PropertyDetails />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/afford" element={<WhatCanIAfford />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;