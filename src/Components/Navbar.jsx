import React from 'react'
import logojpg from "../Asserts/logo.webp";
import notijpg from "../Asserts/noti.jpg";
import userjpg from "../Asserts/user.jpg";

const Navbar = () => {
  return (
    <div className='div'>
    <div className='container'>
      <img className="img" src={logojpg}/>
      </div>
      <div className='image-right'>
      <input className='input' type="text"/>
      <img className="img" src= {notijpg}/>
      <img className="img" src= {userjpg}/>  
    </div>
</div>
  )
}

export default Navbar;