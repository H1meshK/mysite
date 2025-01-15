import React from 'react';

function Stripe({ val }) { // Destructure the props to directly get val
  return (
    <div className='bg-[#05040A] w-[16.6667%] px-4 py-5 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-700 text-zinc-50 flex justify-between items-center whitespace-nowrap'>
      <img src={val.url} alt="" />
      <span className='font-semibold text-white'>{val.number}</span>
    </div>
  );
}

export default Stripe;

// http://localhost:5173/
