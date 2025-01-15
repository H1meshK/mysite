
import React from 'react';
import './Navbar.css';


function Navbar() {
  return (
   <>
    <div id='home' className='flex justify-between items-center m-3 mt-0'>
        <p id='hk' className='text-[#ffffff] text-[50px]'>HK.</p>
        <div className='text-[#ffffff] flex justify-around items-center'>
          <div className='iris relative rounded-[20px] overflow-hidden'><a href="#review">Review</a></div>
          <div className='iris relative rounded-[20px] overflow-hidden'><a href="#About">About</a></div>
          <div className='iris relative rounded-[20px] overflow-hidden'><a href="#Skills">Skills</a></div>
          <div className='iris relative rounded-[20px] overflow-hidden'><a href="#">Project</a></div>
          <div className='iris relative rounded-[20px] overflow-hidden'><a href="#contact">Contact</a></div>
        </div>
      </div>
   </>
  )
}

export default Navbar
