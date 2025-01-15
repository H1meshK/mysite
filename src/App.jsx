import React from 'react';
import WelcomeScreen from './WelcomeScreen';
import './App.css';
import Navbar from './Navbar';
import Stripes from './Stripes';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Slidedown from './Slidedown';
import Review from './Review';
import Projects from './Projects';
import Type from './Type';
import Reviewss from './Reviewss';

function App() {
  return ( 
    <>
      <div className="App bg-[#131313]">
        <div className="bg-[url('/images/samurai-bg.jpg')] bg-cover h-[800px]"> 
          <WelcomeScreen />
          <Navbar />
          <div className='w-[900px] h-[500px] mt-[140px] ml-4 flex flex-col justify-end text-[#ffffff]'>
            <p id='hey' className='leading-8 text-[40px]'>Hey! I’m Himesh Kumar</p>
            <div className='mb-4 flex flex-row text-[48px]'>
              <p id='a' className='mr-2'>A</p>
              <Type />
              {/* <p className='ffont-semibold text-[#7120D9]'> Web Developer_</p> */}
            </div>
            <div id='text1' className='h-[300px] w-[800px] leading-none flex flex-wrap flex-col animate-slideIn'>
              <p className='tracking-[-0.08em] text-[100px]'>MAINLY</p>
              <p className='tracking-[-0.08em] text-[100px]'>I BRING MY</p>
              <p className='tracking-[-0.08em] text-[100px]'>CODES TO LIFE</p>
            </div>
          </div>
        </div>
        <Stripes />
        <About />
        <div>
          <div className='w-[100%]'>
            <h1 id='Skills' className='Skills font-["Rubik"] font-semibold text-white text-[60px] pl-[90px] pb-10 pt-[100px]'>Skills</h1>
          </div>
          <Skills/>
          <Projects/>
          <Review/>
          <Slidedown/>
          <Contact/>
        </div>
      </div>
    </>
  );
}

export default App;
