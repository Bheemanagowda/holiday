import ContactHero from "@/Components/ContactHero";
import Form from "@/Components/ReuseComponent/Form";



export const metadata={
    title: "Contact Us | VisionFly Holidays",
    description: "Get in touch with VisionFly Holidays for your travel inquiries and support."
}



function Contact() {
  

  return (
    <div className="">
    
      <ContactHero />

      <div className="lg:flex items-end justify-around w-11/12 lg:w-9/12 pt-8 mx-auto">
        <div className="w-full lg:w-6/12">
          <img
            src="/images/contact_us_hero.webp"
            className="w-full lg:w-11/12 mx-auto"
            alt="Hero image"
          />
        </div>
        <div className="w-full lg:w-4/12 pb-7">
          {" "}
          <Form />
        </div>

      
      </div>


<div class="py-[60px] md:py-[80px] lg:py-[100px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0907080175107!2d77.5828497!3d12.9018886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa55f65db0c3682b3%3A0xa2c2dca880c114de!2sVISIONFLY%20HOLIDAYS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1731680510307!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
  </div>
    </div>
  );
}

export default Contact;
