import React, { useState, useEffect } from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  const [visible, setVisible] = useState(true);
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation('slide-up');
      setTimeout(() => {
        setVisible(false);
      }, 1000); // Duration of the slide-up animation
    }, 1500); // Initial delay before starting the slide-up animation

    return () => clearTimeout(timer);
  }, []);

  return ( 
    visible && (
        <>
      <div className={`welcome-screen ${animation} m-0 p-0`}>
        <div className='flex-col items-center m-0 p-0' >
        <p className=' flex text-[55px] font-semibold'>Hey there!</p>
        <p className='flex text-[55px] font-semibold'>Welcome to my</p>
        <p className=' flex text-[70px] font-semibold'>Compendium</p>
        </div>
        </div>
      </>
    )
  );
};

export default WelcomeScreen;

