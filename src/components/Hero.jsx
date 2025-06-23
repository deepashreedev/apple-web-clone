import React from 'react'
import Macimage from "./images/mac-for-students.jpg"

// function Hero(){
// return(
// <section style={{backgroundImage: `url(${Macimage})`}}>

// </section>
// );
// }

// export default Hero


function Hero() {
  return (
    <div
      className="h-[80vh] bg-cover bg-center flex items-center justify-center mt-4"
      style={{ backgroundImage: `url(${Macimage})` }}
    >
      <button className="text-xl font-semibold px-5 py-2 bg-white text-black rounded-3xl shadow-lg hover:bg-gray-200 scroll mt-96">
        Learn more
      </button>
    </div>
  );
}

export default Hero;
