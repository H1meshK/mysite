import React from 'react'

function About() {
  return (
    <div id='About' className='w-[100%] bg-gradient-to-b from-[#05040A] to-[#131313] '>
          <h1 className='About font-["Rubik"] font-semibold text-white text-[60px] pl-[90px] pb-10'>About</h1>
          <p className='text-zinc-300 text-[20px] pl-[90px] pr-[90px]'>Hey there! I’m Himesh, a student of Industrial and Production Engineering at NIT Jalandhar, currently navigating my 6th semester.
Throughout my journey, I've worked on some exciting projects, including a web-based Manufacturing Resource Planning (MRP) system, and participated in hackathons like Hackmol and the Smart India Hackathon, where I’ve been able to stretch my creative and technical abilities.

I’ve learned a lot from subjects like Lean Manufacturing, Robotics, Quality Control, and Supply Chain Management, and I’m diving deeper into Data Structures and Algorithms in C++ to sharpen my problem-solving skills. I’m always looking for ways to turn complex challenges into simple solutions.
</p>
        <div className='h-[600px] w-[100%] flex justify-center items-center'>
          <div className='absolute left-[40%] w-[320px] h-[320px] rounded-[50%] bg-[url("/images/myimg1.jpeg")] bg-cover'></div>
          {/* <div className='absolute left-[40%] w-[320px] h-[320px] rounded-[50%] bg-[url("/images/myimg2.jpg")] bg-cover'></div>
          <div className='absolute left-[55%] w-[320px] h-[320px] rounded-[50%] bg-[url("/images/myimg3.jpg")] bg-cover'></div> */}
        </div>
        <p className='text-zinc-300 text-[20px] pl-[90px] pr-[90px]'>Outside of my academics, I’m focused on gaining experience through internships and preparing for the future, aiming for financial independence while continuing to grow in the world of engineering and tech. I’m always up for a conversation or collaboration, so feel free to reach out!</p>
        <p className='text-zinc-300 text-[20px] pt-10 pl-[90px] pr-[90px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum possimus cumque, odio delectus omnis, magni porro corrupti beatae repellendus aut dolorum asperiores in iusto ipsum quod, iure laudantium neque repellat molestias optio? Maiores blanditiis molestiae voluptate ipsa quisquam placeat voluptates! Sapiente quis quidem ipsum rerum modi! Id, odio. Numquam quae quis vero ipsum modi error obcaecati animi qui dolorem quod hic rem ipsam ea autem eaque, consectetur omnis excepturi maiores sapiente! Aspernatur quos et ut id tempora, debitis veniam, expedita voluptatum saepe excepturi quo fugit quis velit magnam necessitatibus minus voluptas maiores cumque tempore dignissimos, facere consequuntur quidem rerum cupiditate.</p>
        <div className='h-[500px] w-[100%] flex justify-between items-center'>
           <div className='cover bg-[#323238] h-[450px] w-[60%] ml-[90px] rounded-[20px] hover:bg-[#7443FF]'>
            <p className='text-white text-[20px] ml-5 mt-5 font-["Jaldi"] font-light hover:ml-7'>Wanna Get In Touch?</p>
            <p className='text-white text-[40px] font-["Inria Sans"] font-semibold ml-5 mt-8'>Have A Project For Me?</p>
            <p className='text-white text-[70px] font-["Inria Sans"] font-semibold ml-5 mt-32'>Or Anything else?</p>
            <div className='rounded-[20px] border-[1px] border-[white] h-[40px] w-[130px] flex justify-center items-center ml-5 text-white text-[35px] hover:bg-[#080808] transition-all ease duration-200 hover:border-[#080808]'><a href="#contact">Contact</a></div>
           </div>
           <div className='bg-[#29292e] h-[450px] w-[40%] ml-3 mr-[90px] rounded-[20px] hover:bg-[#CC0000] '>
           <p className='text-zinc-200 text-[20px] ml-5 mt-5 font-["Jaldi"] font-light'>Things I’m Good At?</p>
           <p className='text-zinc-200 text-[40px] font-["Inria Sans"] font-semibold ml-5 mt-8'>Click here to Explore my Skills.</p>
           <div className='rounded-[20px] border-[1px] border-[white] h-[40px] w-[130px] flex justify-center items-center ml-5 mt-[170px] text-white text-[35px] hover:bg-[#080808] transition-all ease duration-200 hover:border-[#080808]'><a href="#Skills">Skills</a></div>
           </div>
        </div>
        </div>
  )
}

export default About
