"use client";

import { useState } from "react";

const CARDS_DATA = [
  {
    image: "/images/home/SolarPower.png",
    icon: "/images/home/SolarPower-icon.png",
    title: "✨ Creative <br /> Customization",
    description:
      "Unleash uniqueness with tailored solutions. Craft designs at [Institution Name] that make your online presence distinctly stand out",
  },
  {
    image: "/images/home/ImmersionCooling.png",
    icon: "/images/home/ImmersionCooling-icon.png",
    title: "🚀 Innovation   at <br /> Every Pixel",
    description:
      "Propel forward with cutting-edge technology. Engage in a collaborative journey to shape a website that exceeds industry standards and incorporates the latest web innovations.",
  },
  {
    image: "/images/home/GeothermalHeatPump.png",
    icon: "/images/home/GeothermalHeatPump-icon.png",
    title: "🤝 Your Vision,<br /> Our Mission",
    description:
      "Collaborate from concept to launch. Shape a website at [Institution Name] that speaks to your audience, achieving objectives through a highly engaged design process.",
  },
  {
    image: "/images/home/EarthshipBuilding.png",
    icon: "/images/home/EarthshipBuilding-icon.png",
    title: "🌐 Seamless <br /> Integration,<br /> Maximum Impact",
    description:
      "Beyond a digital space, your website is a dynamic platform. Maximize impact with seamless integration of ideas, capturing attention in the digital landscape at HTicketed Web.",
  },
];

const WhyUs = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const isCurrent = (index: number) => {
    return index == currentCard;
  };

  return (
    <div className=" py-20 pt-32 flex flex-col items-center justify-center">
      <div className="px-16 flex flex-col items-center justify-center">
        <p className="font-bold text-4xl my-3">
          Why Choose <span className="text-blue-500">HTicketed Web</span>
        </p>
        <h3 className="font-mont font-medium text-lg md:text-xl text-center">
          Opt for [Institution Name] for unique, standout websites. Our
          commitment to creative customization, innovation, and seamless
          collaboration ensures maximum impact in the digital realm.
        </h3>
      </div>

      {/* cards */}
      <div className="flex flex-col xl:flex-row gap-4 my-10 px-16 w-full">
        {CARDS_DATA.map((data, index: number) => (
          <div
            key={index}
            className={` min-w-[256px] rounded-lg h-fit xl:h-[400px] transition-all duration-500 p-8 flex flex-col relative bg-[#191A1D] ${
              isCurrent(index) ? "flex-1 ease-out" : "ease-in"
            }`}
            // style={{
            //   background: `url(${data.image})`,
            //   backgroundSize: "cover",
            // }}
            onMouseOver={() => setCurrentCard(index)}
          >
            <div
              className={`xl:absolute transition-all duration-500 ${
                isCurrent(index) ? "bottom-6 ease-out" : "-bottom-20 ease-in"
              }`}
            >
              <img className="w-16" src={data.icon}></img>
              <h2
                className={
                  "text-xl font-monument text-white mt-6 xl:mt-8 tracking-wider " +
                  `${isCurrent(index) ? "" : ""}`
                }
                dangerouslySetInnerHTML={{ __html: data.title }}
              ></h2>
              <p
                className={`text-white mt-2 xl:mt-3 xl:w-80 transition-all duration-500 ${
                  isCurrent(index)
                    ? "text-opacity-100 ease-out"
                    : "xl:text-opacity-0 ease-in"
                }`}
              >
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
