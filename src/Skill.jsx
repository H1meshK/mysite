import React from 'react';
import Reviewss from './Reviewss';

function Skill({ val }) {
  return (
    <div 
      className='Skill group relative m-0 p-0 h-[240px] w-[100%] bg-[#131313] transition-all duration-300 ease-in-out hover:h-[280px]' 
      style={{ '--hover-color': val.color }}
    >
      <div className='flex justify-between items-center ml-20 mr-20'>
        <p className='text-[50px] text-white font-["Josefin Sans"]'>{val.title}</p>
        <div className='w-[400px] pt-8 text-white'>
          <p className='leading-7'>{val.Description}</p> {/* Dynamic content for Description */}
          <div className='Butt opacity-0 group-hover:opacity-100 transition-opacity duration-600 h-[30px] w-[100px] bg-slate-100 mt-5 rounded-[20px] items-center font-semibold flex justify-center'>
            <a onDoubleClick={() => setShowReviews(true)} className='text-[18px] text-black'>Explore</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
