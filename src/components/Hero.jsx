import React from 'react'
import Macimage from "./images/mac-for-students.jpg"


function Hero() {
  return (
    <div
      className=" w-full min-h-[48vh] md:h-[50vh] lg:h-[53vh] xl:h-[80vh] bg-cover bg-center flex items-center justify-center mt-4"
      style={{ backgroundImage: `url(${Macimage})` }}
    >
      <button className="text-xl font-semibold px-5 py-2 bg-white text-black rounded-3xl shadow-lg hover:bg-gray-200 scroll mt-auto mb-11">
        Learn more
      </button>
    </div>
  );
}

export default Hero;
