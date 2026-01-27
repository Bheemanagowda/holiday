import AboutHero from "../../Components/AboutHero";
import CommonHeading from "../../Components/ReuseComponent/CommonHeading";
import OurServiceCard from "../../Components/OurServiceCard";
import { v4 as uuidv4 } from "uuid";
import OurVisionAndMission from "../../Components/OurVisionAndMission";
import BestTeam from "@/Components/BestTeam";


export const metadata = {
    title: "About Us | VisionFly Holidays",
    description: "Learn more about VisionFly Holidays, our mission, and the services we offer."
}

function About(props) {
  const ourServices = [
      {
      name: "Group Tours",
      description:
        "Experience the world with like-minded travelers! Our group tours offer a fun, social, and hassle-free way to explore new destinations. Enjoy expertly curated itineraries, seamless logistics, and special perks, all while making new friends and memories. Perfect for solo travelers, families, or groups of friends, our tours cater to diverse interests and preferences.",
      icon: "/images/group_tour.webp",
    },
    {
      name: "Tailor-Made ",
      description:
        "Our tailor-made tours are crafted to fit your unique preferences, interests, and schedule. From customized itineraries to personalized services, we'll work with you to create a truly unforgettable experience. Whether you're looking for adventure, relaxation, or cultural immersion, our expert travel designers will help you plan the perfect trip.",
      icon: "/images/tailor_made_packages.webp",
    },
        {
      name: "Corporate Travel ",
      description:
        "Our corporate travel services offer seamless planning, booking, and management of trips for your team. From flights and accommodations to meetings and events, we'll handle every detail to ensure your travels are productive, efficient, and stress-free. Let us help you focus on what matters most - your business.",
      icon: "/images/corporate_soluation.webp",
    },
    {
      name: "Hotel booking",
      description:
      " We offer a curated selection of top-rated hotels, from luxury resorts to budget-friendly options. Enjoy exclusive deals, seamless booking, and personalized recommendations to ensure your accommodation exceeds expectations. Let us take care of your hotel needs, so you can focus on making memories.",
      icon: "/images/flight_accomodation_booking.webp",
    },
  

  
    {
      name: "Flight booking",
      description:
        "Our flight booking services offer convenient, hassle-free reservations to destinations worldwide. Enjoy competitive prices, flexible booking options, and expert assistance to ensure a smooth travel experience. Let us take care of your flight arrangements, so you can focus on your journey.",
      icon: "/images/travel_insurance.webp",
    },
    {
        name: "Cruise booking",
        description:
          "Our cruise booking services offer a wide range of options to suit every taste and budget. From luxurious ocean liners to specialty cruises, we'll help you find the perfect voyage. Enjoy expert recommendations, exclusive deals, and seamless booking to ensure a memorable sailing experience.",
        icon: "/images/visa.webp",
      },
       {
        name: "VISA",
        description:
          "Travel smoothly with our expert visa assistance! We'll guide you through the application process, ensuring all requirements are met and documentation is in order. From gathering documents to submission and follow-up, our experienced team will help you obtain your visa efficiently, so you can focus on your travel plans.",
        icon: "/images/visa.webp",
      },
        {
        name: "Forex",
        description:
          "Our forex services offer competitive rates, convenient exchange options, and expert assistance to ensure you get the most out of your currency. Whether you're traveling abroad or sending money internationally, we've got you covered",
        icon: "/images/visa.webp",
      },
  ];
  
  
  return (
    <div className="w-11/12 mb-8 mx-auto">
      
      <AboutHero />
      <div className="pt-8">
        <CommonHeading
          intro={"We offer a wide range of travel services, including"}
          heading={"Our Services"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 pt-3  lg:grid-cols-4 gap-3 lg:gap-6">
          {ourServices?.map((item,index) => (
            <OurServiceCard item={item} index={index} key={uuidv4()} />
          ))}
        </div>

        <OurVisionAndMission/>
        <BestTeam/>
      </div>
    </div>
  );
}

export default About;
