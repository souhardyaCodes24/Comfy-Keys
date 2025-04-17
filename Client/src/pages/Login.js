import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Axios from "axios"

function Login() {
  // State variables if you need them (e.g., email, password)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');





  const loadData = async () => { 
    const response = await Axios.get('http://localhost:3003/users'); 
    console.log(response.data); 


    // logic to check user exists in database or not
    let userfound = 0;
    let element="";
    for (let i = 0; i < response.data.length; i++) {
       element = response.data[i];
      console.log(element['email'],element['password']);
      if(password===element['password'] && email===element['email']){
       
        userfound=1;
        break;
      }
    
      
    }

    if(userfound){
      console.log("User Found and verfied !")
     
       
      localStorage.setItem("fullName", element['fullName']);
      window.location.href = "/"; 

      
      console.log(localStorage.getItem("fullName"))

    }else{
      console.log("User not found / Invalid Credentials")
    
    }
    
    
  
  }

  function handleData(e) {  
    e.preventDefault(); 
  


    setTimeout(()=> 
      { 
        setTimeout(()=>{
          loadData(); 
        },500)
      },500) 
}
  

  return (
    <div className="login-container">
      <div className="login-box">
      

        {/* Title / Subtitle */}
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Please enter your credentials to sign in.</p>

        {/* Form */}
        <form onSubmit={handleData} className="login-form">
          <label className="login-label" htmlFor="email">
            Email*
          </label>
          <input
            type="email"
            id="email"
            className="login-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="login-label" htmlFor="password">
            Password*
          </label>
          <input
            type="password"
            id="password"
            className="login-input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn-primary">
            Login
          </button>

          


          <Link
            className='bg-violet-700  hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            to='/signup'
          >
          Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
