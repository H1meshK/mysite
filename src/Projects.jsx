import React, { useRef } from 'react';
import ProjectCards from './ProjectCards';

function Projects() {
  const ref = useRef(null);

  return (
    <div ref={ref} className='relative h-[735px] w-full bg-[#141414]'>
      <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[60px] md:text-[100px] lg:text-[250px] font-["Josefin Sans"] font-semibold text-[#25252b]'>
        Projects
      </p>
      <div className='relative z-50 h-[735px] w-full flex'>
      <ProjectCards
          title="Fine Arts Society"
          description="My very recent project, that im still working on. A site for my art club including all the necessary features and pages, with a modern UI and  a responsive design"
          hoverColor="rgba(117,66,245,0.3)"
          link="https://vercel1-mocha-phi.vercel.app/"
          reference={ref}
        />
        <ProjectCards
          title="Dumpyard UI"
          description="One of my very first simple HTML, CSS projects, its a recreation of the Pinterest interface using HTML and CSS. It features a grid layout, clean design, and responsive elements."
          hoverColor="rgba(251,201,43,0.3)"
          link="https://h1meshk.github.io/A-photo-sharing-site-like-pinterest/"
          reference={ref}
        />
        <ProjectCards
          title="Amazon UI clone"
          description="My very first project. This project is a clone of the Amazon user interface, created using HTML & CSS. It replicates the layout, design, and key features of the Amazon website."
          hoverColor="rgba(56,189,248,0.3)"
          reference={ref}
          link="https://h1meshk.github.io/my_first_clone_proj/"
        />
        <ProjectCards
          title="GoogleHome UI"
          description="This project is a clone of the Google Home interface, created using HTML & CSS. It replicates the layout, design, and key features of the Google home page"
          hoverColor="rgba(255,108,157,0.3)"
          reference={ref}
          link="https://h1meshk.github.io/Google_home/"
        />
        <ProjectCards
          title="Expense Tracker"
          description="Taking things up a notch, I build this using HTML CSS and JS. It'll be useful in tracking your expenses and budget on the basis on stuff you buy in a more efficient method"
          hoverColor="rgba(127,194,73,0.3)"
          reference={ref}
          link="https://h1meshk.github.io/expense-tracker/"
        /> 
      </div>
    </div>
  );
}

export default Projects;

