import React, {useEffect, useState } from 'react';
import './Signup.css';
import Axios from "axios" 
import { Link } from 'react-router-dom';

function Signup() {
  // State variables
 

  const [id,setId] = useState(1)

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


 
   useEffect(() => { 
    loadData(); 
  },[])

//get user from API 
const loadData = async () => { 
  const response = await Axios.get('http://localhost:3003/users'); 
  console.log(response.data); 

  
}



  //Add user 
const AddUser = (e) => { 
  e.preventDefault(); 
  Axios.post('http://localhost:3003/users', { 
    id,fullName,email,phone,password
  }).then(() => { 
    setFullName("");setEmail("");setPassword("");setPhone("");setConfirmPassword("");
  }).catch((err)=> { 
    console.log(err); 
  }) ;setTimeout(()=> 
  { 
     loadData(); 
     setId(id+1)
  },500) 
} 

  return (
    <div className="signup-container">
      <div className="signup-box">
       

        {/* Title / Subtitle */}
        <h2 className="signup-title">Create Your Account</h2>
        <p className="signup-subtitle">Please enter your details to sign up.</p>

        {/* Form */}
        <form onSubmit={AddUser} className="signup-form">
          <label className="signup-label" htmlFor="fullName">
            Full Name*
          </label>
          <input
            type="text"
            id="fullName"
            className="signup-input"
            placeholder="e.g. John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label className="signup-label" htmlFor="email">
            Email*
          </label>
          <input
            type="email"
            id="email"
            className="signup-input"
            placeholder="e.g. john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="signup-label" htmlFor="phone">
            Phone*
          </label>
          <input
            type="tel"
            id="phone"
            className="signup-input"
            placeholder="e.g. 555-123-4567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <label className="signup-label" htmlFor="password">
            Password*
          </label>
          <input
            type="password"
            id="password"
            className="signup-input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className="signup-label" htmlFor="confirmPassword">
            Confirm Password*
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="signup-input"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn-primary">
            Sign Up
          </button>

          {/* Optional secondary button: link to Login */}
           <Link className='hover:text-violet-900 transition' to='/login'>
   
           
          <button
            type="button"
            className="btn-secondary"
            //onClick={() => alert('Go to Login')}
          >
            Already have an account? Login
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
