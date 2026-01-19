import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  const handleClick = () => {
    const formattedNumber = "+919845248323".replace(/\D/g, ""); // Remove non-digit characters
    const whatsappLink = `https://wa.me/${formattedNumber}`;

    window.open(whatsappLink, "_blank");
  };
  return (
    <div
      className="p-2 bg-[#1FB141] rounded-[50%] 
      w-max text-[30px] cursor-pointer fixed z-10 bottom-5
        left-2 ml-auto  hover:scale-105 
        transition ease-in-out drop-shadow-2xl"
      onClick={handleClick}
    >
      <FaWhatsapp color="white" />
    </div>
  );
}

export default Whatsapp;
