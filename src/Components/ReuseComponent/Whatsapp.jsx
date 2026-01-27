
"use client";
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
  className="
    p-2 bg-[#1FB141] rounded-full text-[32px] cursor-pointer z-50
    hover:scale-105 transition ease-in-out drop-shadow-2xl

    hidden md:flex fixed right-4 bottom-[150px]
  "
  onClick={handleClick}
>
  <FaWhatsapp color="white" />
</div>



  );
}

export default Whatsapp;
