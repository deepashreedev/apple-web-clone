import { FaApple, FaBabyCarriage, FaRegMinusSquare, FaSearch, FaShoppingBag, FaUserMinus } from "react-icons/fa"

const links = ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'Entertainment', 'Support'];

function Navbar() {
    // return (
    //     <nav>
    //     <div className="container flex items-center justify-center">

    //         <div className="text-lg flex items-center mr-5">
    //             <FaApple/>
    //         </div>
    //         <ul className="flex space-x-10 p-3 pt-4">
    //             <li className="text-xs">
    //                 <a href="">
    //                    Store</a>
    //             </li>

    //             <li className="text-xs">
    //                 <a href="">Mac</a>
    //             </li>

    //             <li className="text-xs">
    //                 <a href="">iPad</a>
    //             </li>

    //             <li className="text-xs">
    //                 <a href="">iPhone</a>
    //             </li>

    //             <li className="text-xs">
    //                 <a href="">Watch</a>
    //             </li>

    //             <li className="text-xs"> 
    //                 <a href="">Airpods</a>
    //             </li>

    //             <li className="text-xs">
    //                  <a href="">Tv&Home</a>
    //             </li>

    //             <li className="text-xs">
    //                  <a href="">Entertainment</a>
    //             </li>

    //             <li className="text-xs"> 
    //                 <a href="">Accessories</a>
    //             </li>

    //             <li className="text-xs"> 
    //                 <a href="">Support</a>
    //             </li>
    //         </ul>

    //         <div className="ml-6 mr-5 text-sm text-s flex items-center">
    //             <FaSearch/>
    //         </div>

    //         <div className="ml-5 mr-5 text-s text-sm">
    //            
    //         </div>

    //     </div>
    //     </nav>
    // );


    return (

<>

        <nav className="bg-zinc-100 p-3 flex items-center text-xs justify-between md:justify-center sticky top-0 z-10">
            <div className="text-lg mr-8">
                <FaApple />
            </div>
            <ul className="  gap-10 hidden md:flex items-center ">
                {links.map((link) => (
                    <li key={link} className="hover:text-gray-600 cursor-pointer">{link}</li>
                ))}
            </ul>
            <div className=" flex  md:ml-10 gap-9 text-xs">
                <FaSearch />
                <FaShoppingBag />

            </div>

        </nav>

<div className="container flex justify-center text-sm text-center">
            <p className="mx-10 my-5">Get up to 12 months of No Cost EMI, plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards. <a href="" className="text-blue-600 "> Shop</a> </p>
    </div>

    </>

    );
}
// className="hidden md:flex gap-6"  flex justify-between items-center text-sm

export default Navbar;