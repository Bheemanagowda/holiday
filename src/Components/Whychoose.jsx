import React from 'react';
import CommonHeading from './ReuseComponent/CommonHeading';



const brand = {
  yellow: "#E5C22A",
  teal: "#007C72",
  tealHover: "#028680",
  white: "#FFFFFF",
};

const whyChooseItems = [
  { img: "/images/banners/icons/women.webp", title: "Women’s Special Holidays", desc: "Experience tailor-made holidays designed exclusively for women.Enjoy safe, comfortable, and memorable journeys with like-minded travelers.Discover destinations, adventures, and experiences crafted just for you." },
  { img:"/images/banners/icons/tours.webp" , title: "Group Tours & Flexi Holidays", desc: "Join exciting group tours and make memories with like-minded travelers.Flexible itineraries let you explore at your own pace without missing a moment.Enjoy hassle-free travel with curated experiences for every kind of adventurer." },
  { img: "/images/banners/icons/trusted-partner.webp", title: "Trusted Partner", desc: "We are more than a service provider — we are a trusted partner for every traveler.By understanding preferences and offering expert guidance, we make every trip smooth and memorable.This trust inspires us to deliver personalized adventures that create lifelong memories." },
  { img: "/images/banners/icons/price.webp", title: "Affordable Pricing", desc: "Travel more while spending less with our carefully crafted holiday packages.Enjoy top-notch experiences without compromising on quality or comfort.Transparent pricing ensures no hidden costs, giving you complete peace of mind." },
  { img:"/images/banners/icons/booking.webp", title: "Fast Bookings", desc: "Reserve your holiday in just a few clicks.Get instant confirmation and secure your dates.Enjoy a seamless and hassle-free booking experience." },
  {img: "/images/banners/icons/support.webp", title: "24/7 Support", desc: "We provide 24/7 support to assist you anytime, anywhere.Our dedicated team is always ready to solve your queries and ensure smooth travel.With round-the-clock assistance, your journey is worry-free and enjoyable." }
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
    <img
    src={item.img}
    alt={item.title}
    className='w-[200px] h-[200px] object-contain '
  />
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
