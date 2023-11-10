import React from 'react'
import logojpg from "../Asserts/logo.webp";
import notijpg from "../Asserts/noti.jpg";
import userjpg from "../Asserts/user.jpg";

const Navbar = () => {
  return (
    <div className='div'>
    <div className='container'>
      <img className="img" alt='logo' src={logojpg}/>
      </div>
      <div className='image-right'>
      <input className='input' type="text"/>
      <img className="img" alt='noti' src= {notijpg}/>
      <img className="img" alt='user' src= {userjpg}/>  
    </div>
</div>
  )
}

export default Navbar;