import React from 'react';
import { FaFemale, FaUsers, FaHandshake, FaClock, FaHeadset } from "react-icons/fa";
import CommonHeading from "./ReuseComponent/CommonHeading";
import { MdPriceCheck } from "react-icons/md";

const brand = {
  yellow: "#E5C22A",
  teal: "#007C72",
  tealHover: "#028680",
  white: "#FFFFFF",
};

const whyChooseItems = [
  { icon: <FaFemale size={70} />, title: "Women’s Special Holidays", desc: "Exclusive tours focusing on safety, comfort & unique experiences." },
  { icon: <FaUsers size={70} />, title: "Group Tours & Flexi Holidays", desc: "Tailored packages for families, friends & corporates." },
  { icon: <FaHandshake size={70} />, title: "Trusted Partner", desc: "Reliable, transparent and customer-first travel services." },
  { icon: <MdPriceCheck size={70} />, title: "Affordable Pricing", desc: "Premium travel at honest & budget-friendly pricing." },
  { icon: <FaClock size={70} />, title: "Fast Bookings", desc: "Quick & seamless booking experience." },
  { icon: <FaHeadset size={70} />, title: "24/7 Support", desc: "Round-the-clock assistance for hassle-free travel." }
];

const Whychoose = () => {
  return (
    <div className='w-full py-16 bg-white my-20 rounded-[20]'>
      
      {/* Heading */}
      <div className="text-center mb-8">
        <CommonHeading heading="Why Choose Us" />
        <h5 className="text-[18px] md:text-[20px] max-w-[600px] mx-auto text-gray-600 mt-2">
          At Vision Fly Holiday, we deliver stress-free travel experiences with comfort, safety & convenience.
        </h5>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-20'>
        {whyChooseItems.map((item, index) => (
         <div
  key={index}
  className='rounded-xl p-8 text-center shadow-md cursor-pointer'
  style={{
    backgroundColor: brand.teal,
    transition: "all 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#EF6C28";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = brand.teal;
  }}
>
  <div className='flex justify-center mb-4'>
    <div style={{ color: brand.yellow }}>
      {item.icon}
    </div>
  </div>

  <h3 className='text-[22px] font-semibold text-white mb-2'>
    {item.title}
  </h3>

  <p className='text-white text-[15px] leading-relaxed'>
    {item.desc}
  </p>
</div>

        ))}
      </div>

    </div>
  );
};

export default Whychoose;
