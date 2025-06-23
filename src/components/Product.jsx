import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import Button from './common/Button';

const Product = () => {
  const productData = [
    {
      id: 1,
      title: "iOS 18",
     desc: ["Personalise your iPhone with", "10 new Indian languages"],
      bgImage: img1,
      highlight: true,
    },
    {
      id: 2,
      title: "iPad air",
      desc: ["Now supercharged by the M3 chip"],
      bgImage: img2,
    },
    {
      id: 3,
      title: "MacBook pro",
     desc: ["A work of smart"],
      bgImage: img3,
    },
    {
      id: 4,
      title: "iPhone",
     desc: ["Meet the iPhone 16 family"],
      bgImage: img4,
    },
  ];

  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-2 p-1 mt-4">
  {productData.map(({ id, title, desc, bgImage }) => (
    <div
      key={id}
      className="relative min-h-[80vh] xs:min-h-[50vh] bg-cover bg-center rounded-xl shadow-lg overflow-hidden flex items-start justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Card Content at Top */}
      <div className="relative px-4 xs:px-2 pt-6 xs:pt-4 ">
        <div className=" rounded-xl w-full px-4 xs:px-2 py-3 xs:py-2 text-center  text-black ">
          <h1 className={`text-lg xs:text-s sm:text-xl md:text-3xl font-bold break-words mb-2 ${
    id === 3 ? 'text-white' : 'text-black'
  }`}>
            {title}
          </h1>
          {desc.map((desc, index) => (
            <p
              key={index}
              className={`text-s xs:text-[10px] sm:text-lg md:text-xl break-words ${ id === 3 ? 'text-white' : 'text-black'}`}
            >
               
             
              {desc}
            </p>
          ))}          
            <Button />          
        </div>
      </div>
    </div>
  ))}
</div>

  );
};

export default Product;