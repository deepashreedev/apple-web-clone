import React from 'react'
import bgimage from "./images/herosec2.jpg";
import Button from "./common/Button"

function Herosec2(){

    return(

<div className=" w-full min-h-[50vh] md:h-[45vh]  lg:h-[50vh] xl:h-[80vh]  bg-cover bg-center flex flex-col items-center  mt-4  " style={{backgroundImage:`url(${bgimage})`}}>

<h1 className="text-4xl sm:text-5xl md:text-6xl  font-semibold mt-5 pt-5">MacBook Air</h1>
<h2 className="text-lg sm:text-xl md:text-2xl  font-normal mt-3">Sky blue colour.</h2>
<h2 className="text-lg sm:text-xl md:text-2xl font-normal">Sky high performance with M4.</h2>

<div className="container2 ">
<Button/>
</div>

<p className=" font-medium bg-gradient-to-r from-blue-500 via-purple-500 to via-red-500 to-orange-500 bg-clip-text text-transparent mt-auto mb-10 text-xl">Built for Apple Intelligence .</p>

</div>

    );
}

export default Herosec2