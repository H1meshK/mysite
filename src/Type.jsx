import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div className="TypeEffect font-semibold text-[#7120D9]">
      <Typewriter
        options={{
          strings: ["Web Developer", "Graphic Designer", "UI/UX Designer", "Video Editor", "Photographer"],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 25,
        }}
      />
    </div>
  );
};

export default Type;