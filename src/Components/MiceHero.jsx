import React from "react";

function MiceHero() {
    return (
        <div className="pt-24 w-11/12 lg:flex items-end justify-between mx-auto">
            <div className="lg:w-1/2 xl:w-[45%]">
                <img src="/images/mice_hero_img_v1.webp" className="w-full object-contain mx-auto max-h-[500px]" loading="lazy" alt="mice" />
            </div>
            <div className="lg:w-[45%] xl:w-[50%] mb-10">
                <h3 className="text-xl xl:text-2xl font-medium "> <span className="tracking-tighter pr-1"> <span className="text-[#065E90]"> M</span> <span className="text-[#008137]"> I</span> <span className="text-[#B10121]">C </span> <span className="text-[#FF6201]">E </span>  </span> Services By <span className="text-blue_c">  VisionFly Holidays</span> </h3>
                <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold font-secondary_font leading-6 lg:leading-11 pt-2">Elevate Your Corporate Experience </h1>
                <p className=" pt-8 text-[#343434] text-lg xl:text-[23px] leading-8 ">
                    VisionFly Holidays knows that things like Me­etings, Incentives,
                    Confe­rences, and Exhibitions, or MICE, are re­ally important for any
                    group’s success. Our team works on MICE service­s so they're always
                    perfe­ct for whatever your group nee­ds. We create unique­
                    experience­s for companies that are really spe­cial. If you need to
                    organize a small me­eting or a big international confere­nce,
                    VisionFly Holidays can make it happen smoothly and in a way you'll
                    always re­member.
                </p>
            </div>
        </div>
    );
}

export default MiceHero;
