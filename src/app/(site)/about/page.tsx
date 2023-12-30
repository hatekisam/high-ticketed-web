import OurTeam from "@/components/about/OurTeam";
import OurServices from "@/components/home/OurServices";
import React from "react";

const About = () => {
  return (
    <div className=" pt-20 text-gray-400   bg-[#121316] flex flex-col items-center justify-center">
      <div className="p-20 flex items-center flex-col justify-center">
        <p className="font-bold text-6xl">
          About <span className="text-blue-500">Us</span>
        </p>
        <p>What defines us ,is the uniqueness of our work</p>
      </div>
      <div className="bg-[#191A1D]">
        <OurServices />
        <OurTeam />
      </div>
    </div>
  );
};

export default About;
