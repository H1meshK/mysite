import React from 'react';
import Skill from './Skill';

function Skills() {
  const skill = [
    { title: "WebDev", Description: "Been into web development (or web dev, as I prefer to call it :D) since the beginning of my second year, and it's helped me explore a lot about the actual development process behind sites. It introduced me to new concepts, including my growing interest in UI design, my graphic design skills, my knowledge of fonts", color: "#323238" },
    { title: "Video Editing", Description: "A secret skill of mine that helped me become a part of a couple of clubs in college is video editing. In simple terms, I'm a beginner-level video editor. I sometimes edit content for myself, but most of the time, I do it for others", color: "#FBC92B" },
    { title: "Graphic Designing", Description: "I’ve been passionate about graphic designing for a long time, and it’s allowed me to dive deep into the world of visual communication. It’s not just about making things look good, but about creating designs that connect with people.", color: "#CC0000" },
    { title: "Photography", Description: "When I’m not holding my sketchbook, photography is another hobby of mine that allows me to capture countless moments and memories. Whether I’m on a trip or experiencing something special, it helps me document the small moments of my life", color: "#0740AA" },
    { title: "Sketching", Description: "My favorite pastime, which I've been doing since I was a kid, :'), I've made a few sketches this year and filled several sketchbooks over the years. I'm more into drawing scenarios and fictional scenes, but I'm also good at drawing portraits of real people.", color: "#323238" }
  ];

  return (
    <>
      {skill.map((val, index) => <Skill key={index} val={val} />)} {/* Added key prop for list rendering */}
    </>
  );
}

export default Skills;
