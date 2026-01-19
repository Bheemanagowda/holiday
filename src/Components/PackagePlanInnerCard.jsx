import React from "react";

function PackagePlanInnerCard({ place }) {
  return (
    <div key={place.name} className="flex items-center shadow-sm bg-white p-3 rounded-lg   ">
      <img src={place.image} loading="lazy" className="w-20 h-20 md:w-20 md:h-20 capitalize text-light_black_c  bg-gray-300 rounded-lg" alt={place.name} />
      <div className="pl-5">
        <h1 className="font-semibold text-lg font-secondary_font "> {place.name}</h1>
        <p className="font-medium text-base">{place.description}</p>
      </div>
    </div>
  );
}

export default PackagePlanInnerCard;
