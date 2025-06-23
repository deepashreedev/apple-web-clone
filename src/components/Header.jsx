import { FaAngleRight, FaArrowRight } from "react-icons/fa"
import images from "./images/header-img.jpg"
import ipadImage from "./images/ipad_sticker.png"


function Header(){
    return(
<header  style={{ backgroundImage: `url(${images})` }} >

  <div className="container1 flex flex-col items-center pt-14 pb-16">

<h1 className=" text-4xl bg-blue-600 text-white font-bold rounded-3xl w-[250px] h-25 py-5 px-7 ">Buy Mac or iPad for College</h1>
<h2 className="text-xl font-bold text-white bg-blue-600  w-[250px] h-[40px] text-center pt-1 rounded-3xl mt-2">with education savings* </h2>
  
  <h1 className="text-4xl bg-blue-600 text-white font-bold rounded-3xl w-[250px] h-[200px] py-4 px-7 mt-5">Choose AirPods or an eligible accessory</h1>
  <button className="text-blue-600 border-2 border-blue-600/50 py-2 px-5 rounded-3xl mt-6 font-medium">Shop</button>
  
  </div>

</header>
    );
}

export default Header