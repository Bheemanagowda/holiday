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
      name: "Tailor-Made Packages",
      description:
        "Whether you're looking for a romantic getaway, an adventurous expedition, or a family vacation, we create bespoke itineraries that cater to your desires and interests.",
      icon: "/images/tailor_made_packages.webp",
    },
    {
      name: "Flight, Accommodation Booking",
      description:
      " We take care of all your travel arrangements, from booking flights to finding the perfect accommodations, ensuring a hassle-free experience.",
      icon: "/images/flight_accomodation_booking.webp",
    },
  
    {
      name: "Corporate Travel Solutions",
      description:
        "Our specialized corporate travel services are designed to meet the unique needs of businesses, providing efficient and cost-effective travel management.",
      icon: "/images/corporate_soluation.webp",
    },
    {
      name: "Group Tours",
      description:
        "Join one of our expertly guided group tours to explore the world's most fascinating destinations with like-minded travelers.",
      icon: "/images/group_tour.webp",
    },
    {
      name: "Travel Insurance",
      description:
        "We offer comprehensive travel insurance options to protect you from unforeseen circumstances, giving you peace of mind during your travels.",
      icon: "/images/travel_insurance.webp",
    },
    {
        name: "VISA",
        description:
          "Our expert team ensures a smooth and efficient process. Contact us today for a consultation. Let us take the hassle out of it. ",
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

        <div className="grid grid-cols-1 md:grid-cols-2 pt-3  lg:grid-cols-3 gap-3 lg:gap-6">
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
