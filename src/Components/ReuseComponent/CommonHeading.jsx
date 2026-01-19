import React from "react";

function CommonHeading({ intro, heading, more }) {
  return (
    <div className="text-center capitalize">
    
      {intro && (
        <h5 className="text-md  xl:text-xl text-blue_c max-w-[90%] md:max-w-[500px] mx-auto md:pb-2">
          {" "}
          {intro}
        </h5>
      )}
      <h1
        className={`relative z-10  leading-none font-semibold  
           font-secondary_font md:max-w-[700px] xl:max-w-[750px] mx-auto	text-[28px] md:text-3xl lg:text-5xl `}
      >
        <p dangerouslySetInnerHTML={{ __html: heading }} />
      </h1>
      <img
        src="/images/brush.webp"
        className="w-20 lg:w-28 my-3 mx-auto"
        alt='intro'
      />
      {more && (
        <h5
          className={`pt-2 max-w-[95vw] md:max-w-[40vw] mx-auto leading-tight text-xs md:text-md  xl:text-lg md:pt-2  font-medium  pb-1`}
        >
          {more}
        </h5>
      )}
    </div>
  );
}

export default CommonHeading;
