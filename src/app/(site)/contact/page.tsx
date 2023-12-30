import OurTeam from "@/components/about/OurTeam";
import ContactForm from "@/components/contact/ContactForm";
import OurServices from "@/components/home/OurServices";
import React from "react";

const Contact = () => {
  return (
    <div className=" pt-20 text-gray-400   bg-[#121316] flex flex-col items-center justify-center">
      <div className="p-20 flex items-center flex-col justify-center">
        <p className="font-bold text-6xl">
          Contact <span className="text-blue-500">Us</span>
        </p>
        <p>Get to know us and we get to know you</p>
      </div>
      <div className="bg-[#191A1D]">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
