import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';

const Header = (props) => {
  {
    if(props.profile.name==="Guest"){
      props.profile.name=null
    }
  }
  return (
    
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <img src={Logo} alt='' style={{ height: '50px', width: '150px' }} />
        </Link>

          
       
        <div className='flex items-center gap-6'>
        <Link className='hover:text-violet-900 transition' to='/dashboard'>
            Review Dashboard
          </Link>

          <Link className='hover:text-violet-900 transition' to='/afford'>
            Affordability
          </Link>
        <Link className='hover:text-violet-900 transition' to='/contact'>
            Contact
        </Link>

        <Link className='hover:text-violet-900 transition' to='/about'>
            About us
        </Link>
{/* 
        <Link className='hover:text-violet-900 transition' to='/'>
            Blogs
        </Link> */}

      
        
          <Link className='hover:text-violet-900 transition' to='/login'>
            Log in
          </Link>
        {props.profile.name && <Link className='hover:text-violet-900 transition' to='/' onClick={()=>{ localStorage.removeItem("fullName"); window.location.reload(); }}>
            Log out
          </Link> }
          
          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            to='/signup'
          >
            Sign up
          </Link>

          <div>{props.profile.name &&
           <p>{props.profile.name}</p>
           
          }
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;