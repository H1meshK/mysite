import React from 'react'
import Reviewss from './Reviewss'

function Review() {
  return (
    <div id='review' className='h-[735px] w-full pt-20 bg-[#080808] flex items-center justify-around'>
            <div className='flex justify-around'>
              <div className=' font-["Jaldi"] h-[250px] w-[600px] m-3 flex flex-col justify-center'>
                <p className='font-semibold text-[60px] text-white'>Drop me with a review </p>
                <p className='text-[30px] text-[#8e8ea4] leading-10'>as would greatly assist me in improving and understanding your thoughts on my portfolio</p>
              </div>
              <div className='h-[550px] w-[600px] bg-[#131313] rounded-[20px]'>
               <Reviewss/>            
              </div>
            </div>
    </div>
  )
}

export default Review

/* <div className='flex justify-around'>
                    <div className='p-5 font-["Jaldi"] text-[20px] text-white'><p>Full Name</p><input type="text" className='bg-[#323238] rounded-md h-8' /></div>
                    <div className='p-5 font-["Jaldi"] text-[20px] text-white'><p>Company</p><input type="text" className='bg-[#323238] rounded-md h-8' /></div>
                 </div>
                 <div className='pl-9 font-["Jaldi"] text-[20px] text-white'><p>Full Name</p><input type="text" className='bg-[#323238] rounded-lg h-[300px] w-[525px] flex' /></div>
                 <div className='rounded-[20px] border-[1px] border-[white] h-[50px] w-[170px] flex justify-center items-center text-white text-[35px] m-8 transition-all ease duration-200 hover:bg-[#7443FF] hover:border-[#7443FF]'><a href="">Send Review</a></div> */
